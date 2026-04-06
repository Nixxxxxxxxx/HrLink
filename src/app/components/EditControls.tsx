import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-u6wjfnl2wp";
import constraintSvg from "../../imports/svg-ohmd6el8fy";
import type { Editor } from '@tiptap/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { transformText, processInstruction, type AiAction, AI_ACTION_LABELS } from './aiTextTransform';
import { TEMPLATE_VARIABLES, type VariableKey } from './VariablePlaceholderExtension';
import { AI_BLOCK_PRESETS } from './AiPersonalizationExtension';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Helper: compute fixed position for a portal dropdown to the LEFT of a button
function usePortalPosition(btnRef: React.RefObject<HTMLElement | null>, open: boolean, align: 'top' | 'bottom' = 'top') {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
  useEffect(() => {
    if (!open || !btnRef.current) { setPos(null); return; }
    const rect = btnRef.current.getBoundingClientRect();
    setPos({
      top: align === 'bottom' ? rect.bottom : rect.top,
      left: rect.left - 8, // 8px gap to the left of the button
    });
  }, [open]);
  return pos;
}

interface EditControlsProps {
  editor: Editor | null;
  onLinkClick?: () => void;
  onFileClick?: () => void;
  onQuoteClick?: () => void;
  onVideoClick?: () => void;
  mode?: 'news' | 'template';
}

const ControlButton = ({ 
  children, 
  onClick, 
  active = false, 
  tooltip 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  active?: boolean;
  tooltip: string;
}) => (
  <div className="relative group/tooltip">
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative shrink-0 size-[20px] flex items-center justify-center transition-colors rounded-[4px]",
        active ? "bg-[#F2F4F8]" : "hover:bg-gray-50"
      )}
    >
      {children}
    </button>
    {/* Tooltip */}
    <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2 py-1 bg-[#161616] rounded-[4px] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50 pointer-events-none">
      <span className="text-white text-[12px] font-['IBM_Plex_Sans'] leading-[16px]">{tooltip}</span>
      {/* Arrow */}
      <div className="absolute left-full top-1/2 -translate-y-1/2 border-[4px] border-transparent border-l-[#161616]" />
    </div>
  </div>
);

export function EditControls({ editor, onLinkClick, onFileClick, onQuoteClick, onVideoClick, mode = 'news' }: EditControlsProps) {
  const [aiMenuOpen, setAiMenuOpen] = useState(false);
  const [hasSelection, setHasSelection] = useState(false);
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiProcessingLabel, setAiProcessingLabel] = useState('');
  const aiMenuRef = useRef<HTMLDivElement>(null);
  const aiBtnRef = useRef<HTMLButtonElement>(null);
  const selectionRef = useRef<{ from: number; to: number } | null>(null);

  // --- Template mode menus ---
  const [varMenuOpen, setVarMenuOpen] = useState(false);
  const varMenuRef = useRef<HTMLDivElement>(null);
  const varBtnRef = useRef<HTMLButtonElement>(null);

  // --- Help popover state ---
  const [helpInput, setHelpInput] = useState('');
  const [helpPopoverOpen, setHelpPopoverOpen] = useState(false);
  const [helpProcessing, setHelpProcessing] = useState(false);
  const helpInputRef = useRef<HTMLInputElement>(null);
  const helpSelectionRef = useRef<{ from: number; to: number } | null>(null);

  // --- AI Personalization modal state ---
  const [aiPersonalizationOpen, setAiPersonalizationOpen] = useState(false);
  const [aiPersonalizationInput, setAiPersonalizationInput] = useState('');
  const aiPersonalizationInputRef = useRef<HTMLTextAreaElement>(null);

  const isTemplate = mode === 'template';

  // Portal positions for dropdown menus (computed from button bounding rects)
  const varMenuPos = usePortalPosition(varBtnRef, varMenuOpen);
  const aiMenuPos = usePortalPosition(aiBtnRef, aiMenuOpen, 'bottom');
  const aiPillPos = usePortalPosition(aiBtnRef, isAiProcessing);

  // Track text selection in the editor
  useEffect(() => {
    if (!editor) return;
    const updateSelection = () => {
      const { from, to } = editor.state.selection;
      const sel = from !== to;
      setHasSelection(sel);
      if (sel) {
        selectionRef.current = { from, to };
      }
    };
    editor.on('selectionUpdate', updateSelection);
    editor.on('transaction', updateSelection);
    updateSelection();
    return () => {
      editor.off('selectionUpdate', updateSelection);
      editor.off('transaction', updateSelection);
    };
  }, [editor]);

  // Close AI menu when selection is lost in news mode (but not while processing)
  useEffect(() => {
    if (!isTemplate && !hasSelection && aiMenuOpen && !isAiProcessing) {
      setAiMenuOpen(false);
    }
  }, [hasSelection, isAiProcessing, isTemplate, aiMenuOpen]);

  // Close AI menu on outside click
  useEffect(() => {
    if (!aiMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        aiMenuRef.current && !aiMenuRef.current.contains(e.target as Node) &&
        aiBtnRef.current && !aiBtnRef.current.contains(e.target as Node)
      ) {
        setAiMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [aiMenuOpen]);

  // Close variable menu on outside click
  useEffect(() => {
    if (!varMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        varMenuRef.current && !varMenuRef.current.contains(e.target as Node) &&
        varBtnRef.current && !varBtnRef.current.contains(e.target as Node)
      ) {
        setVarMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [varMenuOpen]);

  // Insert variable placeholder at cursor
  const handleInsertVariable = useCallback((varKey: string) => {
    if (!editor) return;
    editor.chain().focus().insertContent({
      type: 'variablePlaceholder',
      attrs: { variableKey: varKey },
    }).run();
    setVarMenuOpen(false);
  }, [editor]);

  // Insert AI personalization block at cursor
  const handleInsertAiBlock = useCallback((presetId: string) => {
    if (!editor) return;
    const preset = AI_BLOCK_PRESETS.find(p => p.id === presetId);
    editor.chain().focus().insertContent({
      type: 'aiPersonalization',
      attrs: {
        presetId,
        prompt: preset?.description || '',
      },
    }).run();
  }, [editor]);

  const handleAiAction = useCallback((action: AiAction) => {
    if (!editor || !selectionRef.current) return;

    const { from, to } = selectionRef.current;
    const selectedText = editor.state.doc.textBetween(from, to, '\n');

    if (!selectedText.trim()) return;

    setAiMenuOpen(false);
    setIsAiProcessing(true);
    setAiProcessingLabel(AI_ACTION_LABELS[action]);

    // Add a purple highlight mark to show processing
    editor.chain().focus().setTextSelection({ from, to }).run();

    // Simulate AI processing delay (600-1200ms)
    const delay = 600 + Math.random() * 600;

    setTimeout(() => {
      const transformed = transformText(selectedText, action);

      // Replace the selected text with transformed text
      editor.chain()
        .focus()
        .command(({ tr }) => {
          tr.insertText(transformed, from, to);
          return true;
        })
        .run();

      // Select the newly inserted text to show the change
      const newTo = from + transformed.length;
      editor.chain().setTextSelection({ from, to: newTo }).run();

      setIsAiProcessing(false);
      setAiProcessingLabel('');
    }, delay);
  }, [editor]);

  // Open the "Помочь с текстом" popover
  const handleOpenHelpPopover = useCallback(() => {
    if (!selectionRef.current) return;
    helpSelectionRef.current = { ...selectionRef.current };
    setAiMenuOpen(false);
    setHelpInput('');
    setHelpPopoverOpen(true);
    setTimeout(() => helpInputRef.current?.focus(), 50);
  }, []);

  // Submit the free-text instruction from help popover
  const handleHelpSubmit = useCallback(() => {
    if (!editor || !helpSelectionRef.current || !helpInput.trim()) return;

    const { from, to } = helpSelectionRef.current;
    const selectedText = editor.state.doc.textBetween(from, to, '\n');
    if (!selectedText.trim()) return;

    setHelpPopoverOpen(false);
    setHelpProcessing(true);
    setIsAiProcessing(true);
    setAiProcessingLabel('Помочь с текстом');

    editor.chain().focus().setTextSelection({ from, to }).run();

    const delay = 800 + Math.random() * 800;
    const instruction = helpInput;

    setTimeout(() => {
      const transformed = processInstruction(selectedText, instruction);

      editor.chain()
        .focus()
        .command(({ tr }) => {
          tr.insertText(transformed, from, to);
          return true;
        })
        .run();

      const newTo = from + transformed.length;
      editor.chain().setTextSelection({ from, to: newTo }).run();

      setIsAiProcessing(false);
      setAiProcessingLabel('');
      setHelpProcessing(false);
      setHelpInput('');
    }, delay);
  }, [editor, helpInput]);

  // Submit AI personalization prompt
  const handleAiPersonalizationSubmit = useCallback(() => {
    if (!editor || !aiPersonalizationInput.trim()) return;

    // Insert the inline "ИИ-персонализация" label at the current cursor position
    editor.chain().focus().insertContent({
      type: 'aiContentLabel',
      attrs: {
        prompt: aiPersonalizationInput.trim(),
      },
    }).run();

    setAiPersonalizationOpen(false);
    setAiPersonalizationInput('');
  }, [editor, aiPersonalizationInput]);

  if (!editor) return null;

  return (
    <div className="bg-white flex flex-col gap-[16px] items-center pb-[4px] pt-[12px] relative rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] w-[44px]" data-name="editor controls">
      {/* Typography Group */}
      <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
        {/* Aa - Font (Placeholder/Label in design) */}
        <div className="relative group/tooltip">
          <button 
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={cn(
              "relative shrink-0 size-[20px] flex items-center justify-center transition-colors rounded-[4px]",
              editor.isActive('heading', { level: 2 }) ? "bg-[#F2F4F8]" : "hover:bg-gray-50"
            )}
          >
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <rect fill="white" fillOpacity="0.01" height="20" width="20" />
              <path d={svgPaths.p3e5c4c00} fill={editor.isActive('heading', { level: 2 }) ? "#0F62FE" : "#525252"} />
              <path d={svgPaths.p20af4b00} fill={editor.isActive('heading', { level: 2 }) ? "#0F62FE" : "#525252"} />
            </svg>
          </button>
          <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2 py-1 bg-[#161616] rounded-[4px] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50 pointer-events-none">
            <span className="text-white text-[12px] font-['IBM_Plex_Sans'] leading-[16px]">изменить начертание</span>
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-[4px] border-transparent border-l-[#161616]" />
          </div>
        </div>

        <ControlButton 
          active={editor.isActive('bold')} 
          onClick={() => editor.chain().focus().toggleBold().run()}
          tooltip="сделать жирным"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pef1c480} fill={editor.isActive('bold') ? "#0F62FE" : "#525252"} />
          </svg>
        </ControlButton>

        <ControlButton 
          active={editor.isActive('italic')} 
          onClick={() => editor.chain().focus().toggleItalic().run()}
          tooltip="сделать наклонным"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p54b4180} fill={editor.isActive('italic') ? "#0F62FE" : "#525252"} />
          </svg>
        </ControlButton>

        <ControlButton 
          active={editor.isActive('underline')} 
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          tooltip="сделать подчеркнутым"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p3b97ed00} fill={editor.isActive('underline') ? "#0F62FE" : "#525252"} />
            <path d={svgPaths.p65a6000} fill={editor.isActive('underline') ? "#0F62FE" : "#525252"} />
          </svg>
        </ControlButton>
      </div>

      <div className="w-full h-px bg-[#E0E4EA]" />

      {/* Lists Group */}
      <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
        <ControlButton 
          active={editor.isActive('orderedList')} 
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          tooltip="нумерованный список"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.pce76e00} fill={editor.isActive('orderedList') ? "#0F62FE" : "#525252"} />
            <path d="M10 13.75H1.25V15H10V13.75Z" fill={editor.isActive('orderedList') ? "#0F62FE" : "#525252"} />
            <path d={svgPaths.p3f3dac00} fill={editor.isActive('orderedList') ? "#0F62FE" : "#525252"} />
            <path d="M10 5H1.25V6.25H10V5Z" fill={editor.isActive('orderedList') ? "#0F62FE" : "#525252"} />
          </svg>
        </ControlButton>

        <ControlButton 
          active={editor.isActive('bulletList')} 
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          tooltip="буллетный список"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d="M17.5 3.75H6.25V5H17.5V3.75Z" fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
            <path d="M17.5 15H6.25V16.25H17.5V15Z" fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
            <path d={svgPaths.p1472e8f0} fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
            <path d={svgPaths.pfb58eb0} fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
            <path d="M3.75 3.75H2.5V5H3.75V3.75Z" fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
            <path d="M3.75 15H2.5V16.25H3.75V15Z" fill={editor.isActive('bulletList') ? "#0F62FE" : "#525252"} />
          </svg>
        </ControlButton>
      </div>

      <div className="w-full h-px bg-[#E0E4EA]" />

      {/* Media Group */}
      <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
        <ControlButton 
          onClick={() => {
            if (onLinkClick) {
              onLinkClick();
            } else {
              const url = window.prompt('URL ссылки:');
              if (url) {
                editor.chain().focus().setLink({ href: url }).run();
              }
            }
          }} 
          active={false}
          tooltip="добавить ссылку"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p346b4500} fill="#525252" />
            <path d={svgPaths.p332005f0} fill="#525252" />
          </svg>
        </ControlButton>

        <ControlButton 
          onClick={() => {
            if (onFileClick) {
              onFileClick();
            } else {
              window.alert('Прикрепите файл (демо)');
            }
          }} 
          tooltip="прикрепить файл"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p2d5c9c00} fill="#525252" />
            <path d={svgPaths.p28584100} fill="#525252" />
            <path d={svgPaths.p34ec4400} fill="#525252" />
          </svg>
        </ControlButton>

        {/* removed "вставить изображение" button */}

        <ControlButton 
          onClick={() => {
            if (onVideoClick) {
              onVideoClick();
            } else {
              window.alert('Вставить видео (демо)');
            }
          }} 
          tooltip="вставить видео"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p356ca270} fill="#525252" />
          </svg>
        </ControlButton>

        <ControlButton 
          active={false}
          onClick={() => {
            if (onQuoteClick) {
              onQuoteClick();
            } else {
              editor.chain().focus().toggleBlockquote().run();
            }
          }}
          tooltip="вставить цитату"
        >
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p1a137840} fill="#525252" />
            <path d={svgPaths.p35724900} fill="#525252" />
          </svg>
        </ControlButton>
      </div>

      {/* Template AI Tools — only in template mode */}
      {isTemplate && (
        <>
          <div className="w-full h-px bg-[#E0E4EA]" />
          <div className="flex flex-col gap-[12px] items-center relative shrink-0 w-full">
            {/* Insert Variable button */}
            <div className="relative group/tooltip">
              <button
                ref={varBtnRef}
                type="button"
                onClick={() => { setVarMenuOpen(prev => !prev); }}
                className={cn(
                  "relative shrink-0 size-[20px] flex items-center justify-center transition-colors rounded-[4px]",
                  varMenuOpen ? "bg-[#F0E6FF]" : "hover:bg-gray-50"
                )}
              >
                <svg className="block size-[18px]" viewBox="0 0 18.75 16.25" fill="none">
                  <path d={constraintSvg.p29051800} fill={varMenuOpen ? "#7F2BFD" : "#525252"} />
                  <path d={constraintSvg.pba97a80} fill={varMenuOpen ? "#7F2BFD" : "#525252"} />
                  <path d={constraintSvg.p15004f80} fill={varMenuOpen ? "#7F2BFD" : "#525252"} />
                </svg>
              </button>
              {!varMenuOpen && (
                <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2 py-1 bg-[#161616] rounded-[4px] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50 pointer-events-none">
                  <span className="text-white text-[12px] font-['IBM_Plex_Sans'] leading-[16px]">вставить переменную</span>
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-[4px] border-transparent border-l-[#161616]" />
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* AI Editor Button */}
      <div className="px-1 w-full mt-auto">
        <div className="relative group/tooltip">
          <button
            ref={aiBtnRef}
            disabled={isAiProcessing || (!isTemplate && !hasSelection)}
            onClick={() => {
              if (!isAiProcessing) setAiMenuOpen(prev => !prev);
            }}
            className={cn(
              "h-[36px] w-full rounded-[4px] flex items-center justify-center transition-colors",
              isAiProcessing
                ? "bg-[#7F2BFD] animate-pulse cursor-pointer"
                : (!isTemplate && !hasSelection)
                  ? "bg-[#F0E6FF]/50 cursor-default opacity-50"
                  : aiMenuOpen
                    ? "bg-[#7F2BFD] ring-2 ring-[#7F2BFD]/30 cursor-pointer"
                    : "bg-[#F0E6FF] hover:bg-[#E5D5FF] cursor-pointer"
            )}
          >
            {isAiProcessing ? (
              <svg className="size-4 animate-spin" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                <path d="M14 8a6 6 0 0 0-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="size-4" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                <path d={svgPaths.p1a687780} fill={aiMenuOpen ? "#FFFFFF" : "#7F2BFD"} stroke={aiMenuOpen ? "#FFFFFF" : "#7F2BFD"} />
              </svg>
            )}
          </button>

          {/* Processing label pill — rendered via portal below */}

          {/* Tooltip — only when menu is closed and not processing */}
          {!aiMenuOpen && !isAiProcessing && (
            <div className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 px-2 py-1 bg-[#161616] rounded-[4px] opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all whitespace-nowrap z-50 pointer-events-none">
              <span className="text-white text-[12px] font-['IBM_Plex_Sans'] leading-[16px]">AI-редактор</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-[4px] border-transparent border-l-[#161616]" />
            </div>
          )}

          {/* AI Dropdown Menu — rendered via portal below */}
        </div>
      </div>

      {/* Inline keyframe animation */}
      <style>{`
        @keyframes aiMenuIn {
          from {
            opacity: 0;
            transform: translateY(4px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>

      {/* Portal: Variable dropdown */}
      {varMenuOpen && varMenuPos && ReactDOM.createPortal(
        <div
          ref={varMenuRef}
          onMouseDown={(e) => e.preventDefault()}
          className="fixed w-[220px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] py-[6px] z-[9990]"
          style={{ top: varMenuPos.top, right: `calc(100vw - ${varMenuPos.left}px)`, animation: 'aiMenuIn 0.18s cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <div className="px-[12px] pt-[6px] pb-[4px]">
            <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#8D8D8D] tracking-[0.32px] uppercase">
              Переменные
            </span>
          </div>
          {TEMPLATE_VARIABLES.map((v) => (
            <button
              key={v.key}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => handleInsertVariable(v.key)}
              className="w-full text-left px-[12px] py-[6px] hover:bg-[#F5F0FF] transition-colors flex items-center justify-between gap-[8px] cursor-pointer"
            >
              <div className="flex items-center gap-[6px]">
                <span className="inline-flex items-center px-[4px] py-[0px] rounded-[3px] bg-[#F0E6FF] text-[#7F2BFD] text-[11px] leading-[16px] font-mono tracking-[0.04em]">
                  {`{${v.key}}`}
                </span>
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] tracking-[0.16px]">
                  {v.label}
                </span>
              </div>
            </button>
          ))}
        </div>,
        document.body
      )}

      {/* Portal: AI Action dropdown */}
      {aiMenuOpen && aiMenuPos && ReactDOM.createPortal(
        <div
          ref={aiMenuRef}
          onMouseDown={(e) => e.preventDefault()}
          className="fixed w-[200px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] py-[6px] z-[9990]"
          style={{ top: aiMenuPos.top, right: `calc(100vw - ${aiMenuPos.left}px)`, transform: 'translateY(-100%)', animation: 'aiMenuIn 0.18s cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <div className="px-[12px] pt-[6px] pb-[4px]">
            <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#8D8D8D] tracking-[0.32px] uppercase">
              Текст
            </span>
            {!hasSelection && (
              <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#A8A8A8] tracking-[0.16px] ml-[4px]">
                · выделите текст
              </span>
            )}
          </div>
          <AiMenuItem label="Исправить ошибки" onClick={() => handleAiAction('fix')} disabled={!hasSelection} />
          <AiMenuItem label="Проще" onClick={() => handleAiAction('simpler')} disabled={!hasSelection} />
          <AiMenuItem label="Сложнее" onClick={() => handleAiAction('harder')} disabled={!hasSelection} />
          <AiMenuItem label="Другими словами" onClick={() => handleAiAction('rephrase')} disabled={!hasSelection} />
          <AiMenuItem label="Кратко" onClick={() => handleAiAction('shorten')} disabled={!hasSelection} />
          <div className="mx-[12px] my-[4px] h-px bg-[#E0E4EA]" />
          <div className="px-[12px] pt-[4px] pb-[4px]">
            <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#8D8D8D] tracking-[0.32px] uppercase">
              Ещё
            </span>
          </div>
          <AiMenuItem label="Помочь с текстом" onClick={handleOpenHelpPopover} purple disabled={!hasSelection} />
          {isTemplate && (
            <AiMenuItem label="ИИ персонализация" onClick={() => {
              setAiMenuOpen(false);
              setAiPersonalizationInput('');
              setAiPersonalizationOpen(true);
              setTimeout(() => aiPersonalizationInputRef.current?.focus(), 50);
            }} purple />
          )}
        </div>,
        document.body
      )}

      {/* Portal: Processing pill */}
      {isAiProcessing && aiPillPos && ReactDOM.createPortal(
        <div
          className="fixed bg-[#7F2BFD] text-white rounded-full px-3 py-1.5 whitespace-nowrap z-[9990] shadow-lg"
          style={{ top: aiPillPos.top, right: `calc(100vw - ${aiPillPos.left}px)`, transform: 'translateY(-50%)', animation: 'aiMenuIn 0.18s cubic-bezier(0.25,0.1,0.25,1)' }}
        >
          <div className="flex items-center gap-2">
            <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 16 16">
              <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z" fill="white" />
            </svg>
            <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px]">{aiProcessingLabel}...</span>
          </div>
        </div>,
        document.body
      )}

      {/* "Помочь с текстом" Popover — rendered via portal at center of screen */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {helpPopoverOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="help-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 z-[100]"
                onClick={() => setHelpPopoverOpen(false)}
              />
              {/* Modal */}
              <motion.div
                key="help-modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[452px] bg-white rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden font-['IBM_Plex_Sans']"
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-[20px] h-[60px] shrink-0">
                  <div className="flex items-center gap-[10px]">
                    <div className="size-[28px] rounded-full bg-[#F0E6FF] flex items-center justify-center shrink-0">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                        <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" />
                      </svg>
                    </div>
                    <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#161616] text-[18px] leading-[24px]">
                      Помочь с текстом
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHelpPopoverOpen(false)}
                    className="size-[32px] rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors cursor-pointer"
                  >
                    <svg className="size-[10px]" fill="none" viewBox="0 0 10 10">
                      <path d="M9 1L1 9M1 1l8 8" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Input area */}
                <div className="px-[20px] pt-[4px] pb-[12px]">
                  <div className="relative flex items-center">
                    <input
                      ref={helpInputRef}
                      type="text"
                      value={helpInput}
                      onChange={(e) => setHelpInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && helpInput.trim()) {
                          e.preventDefault();
                          handleHelpSubmit();
                        }
                        if (e.key === 'Escape') {
                          setHelpPopoverOpen(false);
                        }
                      }}
                      placeholder="Например: Сделай текст более дружелюбным и неформальным..."
                      className="w-full h-[44px] pl-[16px] pr-[44px] text-[14px] bg-[#F2F4F8] rounded-[4px] border-none outline-none text-[#13171A] placeholder:text-[#A8A8A8] font-['IBM_Plex_Sans',sans-serif] transition-all"
                    />
                    <button
                      type="button"
                      onClick={handleHelpSubmit}
                      disabled={!helpInput.trim()}
                      className={cn(
                        "absolute right-[6px] size-[32px] rounded-[4px] flex items-center justify-center transition-all",
                        helpInput.trim()
                          ? "bg-[#0F62FE] hover:bg-[#0043CE] cursor-pointer"
                          : "bg-transparent cursor-default"
                      )}
                    >
                      <svg className="size-[16px]" fill="none" viewBox="0 0 16 16">
                        <path d="M14 2L2 8.5L7 9.5L8.5 14L14 2Z" fill={helpInput.trim() ? "white" : "#A8A8A8"} stroke={helpInput.trim() ? "white" : "#A8A8A8"} strokeWidth="0.5" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="px-[20px] pb-[16px]">
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#A8A8A8] tracking-[0.16px] text-center">
                    Наш редактор может ошибаться, проверяйте всю важную информацию
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

      {/* AI Personalization Modal — write prompt, insert inline label */}
      {ReactDOM.createPortal(
        <AnimatePresence>
          {aiPersonalizationOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                key="ai-pers-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/40 z-[100]"
                onClick={() => setAiPersonalizationOpen(false)}
              />
              {/* Modal */}
              <motion.div
                key="ai-pers-modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[452px] bg-white rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] overflow-hidden font-['IBM_Plex_Sans']"
                onMouseDown={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-[20px] h-[60px] shrink-0">
                  <div className="flex items-center gap-[10px]">
                    <div className="size-[28px] rounded-full bg-[#F0E6FF] flex items-center justify-center shrink-0">
                      <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                        <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" />
                      </svg>
                    </div>
                    <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#161616] text-[18px] leading-[24px]">
                      ИИ-персонализация
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAiPersonalizationOpen(false)}
                    className="size-[32px] rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors cursor-pointer"
                  >
                    <svg className="size-[10px]" fill="none" viewBox="0 0 10 10">
                      <path d="M9 1L1 9M1 1l8 8" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <div className="px-[20px] pb-[4px]">
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[20px] text-[#525252] tracking-[0.16px]">
                    Опишите, какой контент ИИ должен сгенерировать персонально для каждого получателя.
                  </p>
                </div>

                {/* Textarea */}
                <div className="px-[20px] pt-[12px] pb-[8px]">
                  <textarea
                    ref={aiPersonalizationInputRef}
                    value={aiPersonalizationInput}
                    onChange={(e) => setAiPersonalizationInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey && aiPersonalizationInput.trim()) {
                        e.preventDefault();
                        handleAiPersonalizationSubmit();
                      }
                      if (e.key === 'Escape') {
                        setAiPersonalizationOpen(false);
                      }
                    }}
                    placeholder="Например: Сгенерируй персональное поздравление на основе должности и стажа сотрудника..."
                    className="w-full min-h-[126px] py-[12.5px] px-[16px] text-[14px] bg-[#F2F4F8] rounded-[4px] border-none outline-none resize-none leading-[18px] text-[#13171A] placeholder:text-[#A8A8A8] font-['IBM_Plex_Sans',sans-serif] transition-all"
                  />
                </div>

                {/* Footer */}
                <div className="px-[20px] pt-[4px] pb-[16px] flex items-center justify-between">
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#A8A8A8] tracking-[0.16px]">
                    Наведите на лейбл, чтобы увидеть промт
                  </p>
                  <button
                    type="button"
                    onClick={handleAiPersonalizationSubmit}
                    disabled={!aiPersonalizationInput.trim()}
                    className={cn(
                      "h-[32px] px-[16px] rounded-[4px] flex items-center transition-all text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans',sans-serif]",
                      aiPersonalizationInput.trim()
                        ? "bg-[#0F62FE] text-white hover:bg-[#0043CE] cursor-pointer"
                        : "bg-[#E0E0E0] text-[#A8A8A8] cursor-not-allowed"
                    )}
                  >
                    Вставить
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}

    </div>
  );
}

function AiMenuItem({ label, onClick, purple = false, disabled = false }: { label: string; onClick: () => void; purple?: boolean; disabled?: boolean }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
      onClick={disabled ? undefined : onClick}
      className={cn(
        "w-full text-left px-[12px] py-[7px] transition-colors flex items-center gap-[8px]",
        disabled
          ? "cursor-default opacity-40"
          : purple
            ? "hover:bg-[#F5F0FF] cursor-pointer"
            : "hover:bg-[#F4F4F4] cursor-pointer"
      )}
    >
      {purple && (
        <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 16 16">
          <path d="M8 1L9.5 5.5L14 7L9.5 8.5L8 13L6.5 8.5L2 7L6.5 5.5L8 1Z" fill={disabled ? "#A8A8A8" : "#7F2BFD"} />
        </svg>
      )}
      <span className={cn(
        "font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px]",
        disabled ? "text-[#A8A8A8]" : purple ? "text-[#7F2BFD]" : "text-[#161616]"
      )}>
        {label}
      </span>
    </button>
  );
}