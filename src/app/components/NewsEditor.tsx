import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  Cloud, 
  ChevronDown,
  Image as ImageIcon,
  Plus,
  Check
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { EditControls } from './EditControls';
import { NewsSettingsSidebar, type NewsSettings } from './NewsSettingsSidebar';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { FileAttachment } from './FileAttachmentExtension';
import { CustomBlockquote } from './BlockquoteExtension';
import { VideoEmbed } from './VideoEmbedExtension';
import { VariablePlaceholder } from './VariablePlaceholderExtension';
import { AiPersonalization } from './AiPersonalizationExtension';
import { AiContentLabel } from './AiContentLabelExtension';
import { Button } from './Button';
import type { Template } from './TemplatesView';
import { useToast } from './Toast';

import { NewsItem, NewsType, CHANNELS_DATA } from '../data/channels';

// Mock cover images for AI generation
const AI_COVER_IMAGES = [
  'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGFic3RyYWN0JTIwY292ZXJ8ZW58MXx8fHwxNzcxOTIzMzM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1691228802680-22def86b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGluZHVzdHJpYWwlMjBmYWN0b3J5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE5MjMzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1739343338040-2dae68f6bdf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzE5MjMzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1658232190602-be6cd5b976f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwY29sb3JmdWwlMjB2aWJyYW50fGVufDF8fHx8MTc3MTkyMzMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  'https://images.unsplash.com/photo-1761912915167-558fa68f16b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWFtJTIwb2ZmaWNlJTIwd29ya3BsYWNlfGVufDF8fHx8MTc3MTkyMzMzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
];

interface NewsEditorProps {
  onBack: () => void;
  onPublish: (channelId: string, news: NewsItem) => void;
  mode?: 'news' | 'template';
  initialTemplate?: Template | null;
  initialNews?: { title: string; content: string; image?: string; channelId: string; channelTitle: string } | null;
}

const EDITOR_CHANNELS = CHANNELS_DATA.map(channel => ({
  id: channel.id,
  title: channel.title,
  initial: channel.initial || (channel.title === 'ПромИнвест Life' ? 'SL' : channel.title.substring(0, 1)),
  color: channel.initialBg || (
    channel.id === 'prominvest' ? '#DA1E28' : 
    channel.id === 'important' ? '#FF832B' : 
    channel.id === 'safety' ? '#24A148' : '#0F62FE'
  )
}));

export const NewsEditor: React.FC<NewsEditorProps> = ({ onBack, onPublish, mode = 'news', initialTemplate = null, initialNews = null }) => {
  const { showToast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const attachmentFileInputRef = useRef<HTMLInputElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);
  const [settings, setSettings] = useState<NewsSettings>({
    schedule: false,
    scheduleDate: '2026-03-15',
    scheduleTime: '17:00',
    limitLifetime: false,
    lifetimeDate: '2026-04-15',
    lifetimeTime: '17:00',
    important: false,
    acknowledge: false,
    acknowledgeButtonText: 'Ознакомлен',
    allowComments: true,
    allowReactions: true,
  });

  const [newsImage, setNewsImage] = useState<string | null>(null);
  const [isGeneratingCover, setIsGeneratingCover] = useState(false);
  const coverGenIndexRef = useRef(0);
  const [isAiCover, setIsAiCover] = useState(false);
  const [hasEditorContent, setHasEditorContent] = useState(false);
  const [hasAudience, setHasAudience] = useState(false);
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState<{id: string, title: string, initial: string, color: string} | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [linkPopover, setLinkPopover] = useState<{
    visible: boolean;
    url: string;
    position: { top: number; left: number };
  }>({
    visible: false,
    url: '',
    position: { top: 0, left: 0 },
  });
  const linkInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setNewsImage(url);
    }
  };

  const handleCoverDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setNewsImage(url);
    }
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: true,
        heading: {
          levels: [1, 2, 3],
        },
        blockquote: false,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-[#0F62FE] underline',
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full rounded-[8px] my-4',
        },
      }),
      Placeholder.configure({
        placeholder: 'Введите текст новости...',
      }),
      FileAttachment,
      CustomBlockquote,
      VideoEmbed,
      VariablePlaceholder,
      AiPersonalization,
      AiContentLabel,
    ],
    content: '',
    onUpdate: ({ editor: e }) => {
      setHasEditorContent(!!e.getText().trim());
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none min-h-[300px] text-[#161616]',
      },
      handleDrop: (view, event, slice, moved) => {
        if (!moved && event.dataTransfer?.files?.length) {
          const file = event.dataTransfer.files[0];
          if (file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            const node = view.state.schema.nodes.image.create({ src: url });
            const transaction = view.state.tr.replaceSelectionWith(node);
            view.dispatch(transaction);
            return true;
          }
          // Non-image files → insert as file attachment
          const nameParts = file.name.split('.');
          const extension = nameParts.length > 1 ? nameParts.pop()! : '';
          const fileUrl = URL.createObjectURL(file);
          const fileNode = view.state.schema.nodes.fileAttachment.create({
            fileName: file.name,
            fileExtension: extension,
            fileSize: String(file.size),
            fileUrl,
          });
          const transaction = view.state.tr.replaceSelectionWith(fileNode);
          view.dispatch(transaction);
          return true;
        }
        return false;
      },
      handlePaste: (view, event) => {
        const items = event.clipboardData?.items;
        if (items) {
          for (const item of items) {
            if (item.type.startsWith('image/')) {
              const file = item.getAsFile();
              if (file) {
                const url = URL.createObjectURL(file);
                const node = view.state.schema.nodes.image.create({ src: url });
                const transaction = view.state.tr.replaceSelectionWith(node);
                view.dispatch(transaction);
                return true;
              }
            }
          }
        }
        return false;
      }
    },
  });

  const handleLinkClick = useCallback(() => {
    if (!editor) return;
    
    const { from, to } = editor.state.selection;
    const hasSelection = from !== to;
    
    // If already has a link, remove it
    if (editor.isActive('link')) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    
    if (!hasSelection) return;
    
    // Get selection coordinates from the DOM
    const domSelection = window.getSelection();
    if (!domSelection || domSelection.rangeCount === 0) return;
    
    const range = domSelection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    setLinkPopover({
      visible: true,
      url: '',
      position: {
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
      },
    });
    
    // Focus the input after animation starts
    setTimeout(() => {
      linkInputRef.current?.focus();
    }, 100);
  }, [editor]);

  const handleLinkSave = useCallback(() => {
    if (!editor || !linkPopover.url.trim()) return;
    
    let url = linkPopover.url.trim();
    // Add protocol if missing
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    
    editor.chain().focus().setLink({ href: url }).run();
    setLinkPopover({ visible: false, url: '', position: { top: 0, left: 0 } });
  }, [editor, linkPopover.url]);

  const handleLinkKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLinkSave();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setLinkPopover({ visible: false, url: '', position: { top: 0, left: 0 } });
      editor?.chain().focus().run();
    }
  }, [handleLinkSave, editor]);

  // Close link popover when clicking outside
  useEffect(() => {
    if (!linkPopover.visible) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-link-popover]')) return;
      setLinkPopover({ visible: false, url: '', position: { top: 0, left: 0 } });
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [linkPopover.visible]);

  const handlePublish = () => {
    if (!editor) return;
    if (!selectedChannel) {
      alert('Пожалуйста, выберите канал для публикации');
      return;
    }
    if (!hasAudience) {
      alert('Пожалуйста, выберите аудиторию');
      return;
    }
    
    const allText = editor.getText();
    const lines = allText.split('\n');
    const title = lines[0] || 'Новая новость';
    const remainingContent = lines.slice(1).join('\n').trim();
    
    const newNews: NewsItem & { status?: string } = {
      id: `new-${Date.now()}`,
      type: (settings.important ? 'important' : 'regular') as NewsType,
      date: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }).replace('.', ''),
      views: 0,
      title: title,
      content: remainingContent || title,
      image: newsImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1080",
      commentsCount: 0,
      initialReactions: [],
      isRead: false,
      status: 'Опубликовано'
    };

    onPublish(selectedChannel.id, newNews);
    showToast('Новость успешно опубликована');
    onBack();
  };

  const handleUploadClick = () => {
    const url = window.prompt('URL изображения:');
    if (url) setNewsImage(url);
  };

  // File attachment handler — insert file node at cursor position
  const handleFileClick = useCallback(() => {
    attachmentFileInputRef.current?.click();
  }, []);

  const handleAttachmentFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0 || !editor) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const nameParts = file.name.split('.');
      const extension = nameParts.length > 1 ? nameParts.pop()! : '';
      const fileName = file.name;
      const fileUrl = URL.createObjectURL(file);

      editor
        .chain()
        .focus()
        .insertContent({
          type: 'fileAttachment',
          attrs: {
            fileName,
            fileExtension: extension,
            fileSize: String(file.size),
            fileUrl,
          },
        })
        .run();
    }

    // Reset input so the same file can be re-selected
    e.target.value = '';
  }, [editor]);

  // Quote handler — insert custom blockquote node at cursor position
  const handleQuoteClick = useCallback(() => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertContent({
        type: 'customBlockquote',
        attrs: {
          quoteTitle: '',
          quoteText: '',
          quoteCaption: '',
        },
      })
      .run();
  }, [editor]);

  // Video handler — insert video embed node at cursor position
  const handleVideoClick = useCallback(() => {
    if (!editor) return;
    editor
      .chain()
      .focus()
      .insertContent({
        type: 'videoEmbed',
        attrs: {
          videoUrl: '',
          embedUrl: '',
          provider: '',
        },
      })
      .run();
  }, [editor]);

  // Inline AI cover generation — no modal, immediate result
  const handleNeuroCover = useCallback(() => {
    if (!editor?.getText().trim() || isGeneratingCover) return;
    setIsGeneratingCover(true);
    // Simulate generation delay (replace with real API call)
    setTimeout(() => {
      const idx = coverGenIndexRef.current % AI_COVER_IMAGES.length;
      coverGenIndexRef.current = idx + 1;
      setNewsImage(AI_COVER_IMAGES[idx]);
      setIsAiCover(true);
      setIsGeneratingCover(false);
    }, 1800 + Math.random() * 1200);
  }, [editor, isGeneratingCover]);

  useEffect(() => {
    if (editor) {
      const currentContent = editor.getText().trim();
      setHasEditorContent(currentContent.length > 0);
    }
  }, [editor]);

  // Load initial template content into the editor
  useEffect(() => {
    if (!editor || !initialTemplate) return;
    // Set editor body content
    if (initialTemplate.body) {
      editor.commands.setContent(initialTemplate.body);
      setHasEditorContent(true);
    }
    // Set cover image if provided
    if (initialTemplate.coverImage) {
      setNewsImage(initialTemplate.coverImage);
    }
    // Set auto-generation toggle
    if (initialTemplate.autoGeneration) {
      setAutoGenerate(true);
    }
  }, [editor, initialTemplate]);

  // Load initial news content into the editor
  useEffect(() => {
    if (!editor || !initialNews) return;
    // Convert plain text content to HTML paragraphs
    if (initialNews.content) {
      const htmlContent = `<h2>${initialNews.title}</h2>` + 
        initialNews.content
          .split('\n\n')
          .map(p => `<p>${p.replace(/\n/g, '<br/>')}</p>`)
          .join('');
      editor.commands.setContent(htmlContent);
      setHasEditorContent(true);
    }
    // Set cover image if provided
    if (initialNews.image) {
      setNewsImage(initialNews.image);
    }
    // Set selected channel
    if (initialNews.channelId) {
      const channel = EDITOR_CHANNELS.find(c => c.id === initialNews.channelId);
      if (channel) {
        setSelectedChannel(channel);
      }
    }
  }, [editor, initialNews]);

  const isTemplate = mode === 'template';

  // Determine header title based on whether we're editing an existing template
  const headerTitle = isTemplate
    ? (initialTemplate ? initialTemplate.name : 'Новый шаблон')
    : (initialNews ? initialNews.title : 'Создать новость');

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-1 flex flex-col bg-[#F4F7FB] overflow-hidden font-['IBM_Plex_Sans']"
    >
      {/* Editor Header */}
      <div className="bg-white border-b border-[#E0E4EA] px-4 h-[64px] flex items-center justify-between shrink-0 z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="w-8 h-8 flex items-center justify-center bg-[#F4F4F4] rounded-full hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft size={20} className="text-[#161616]" />
          </button>
          <div className="flex items-center gap-3">
            <h1 className="text-[18px] font-semibold text-[#161616]">
              {headerTitle}
            </h1>
            <div className="flex items-center gap-4">
              <div className={`px-2 py-0.5 rounded-[12px] h-[24px] flex items-center ${isTemplate ? 'bg-[#D0E2FF]' : 'bg-[#E5E0DF]'}`}>
                <span className={`text-[12px] tracking-[0.32px] ${isTemplate ? 'text-[#0043CE]' : 'text-[#171414]'}`}>
                  {isTemplate ? 'Шаблон' : 'Черновик'}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#8D8D8D]">
                <Cloud size={16} />
                <span className="text-[14px]">Все изменения сохранены</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border border-[#0F62FE] text-[#0F62FE] rounded-[4px] text-[14px] font-medium hover:bg-[#0F62FE]/5 transition-all">
            Превью новости в ленте
          </button>
          <button 
            onClick={isTemplate ? () => {
              const msg = autoGenerate ? 'Авто-генерация запущена' : (initialTemplate ? 'Шаблон сохранён' : 'Шаблон создан');
              showToast(msg);
              onBack();
            } : handlePublish}
            disabled={isTemplate ? false : (!selectedChannel || !hasAudience)}
            className={`px-4 py-2 rounded-[4px] text-[14px] font-medium transition-all shadow-[0px_4px_12px_rgba(15,98,254,0.2)] ${
              isTemplate 
                ? 'bg-[#0F62FE] text-white hover:bg-[#0043CE]'
                : (selectedChannel && hasAudience)
                  ? 'bg-[#0F62FE] text-white hover:bg-[#0043CE]' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
            }`}
          >
            {isTemplate 
              ? (autoGenerate ? 'Запустить авто-генерацию' : (initialTemplate ? 'Сохранить шаблон' : 'Создать шаблон'))
              : 'Опубликовать'}
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#F4F7FB] custom-grid-bg relative overflow-hidden flex flex-col">
        <div className="flex-1 flex w-full h-full">
          {/* Main Content Area (Editor) */}
          <div className="flex-1 overflow-y-auto pt-[12px] pb-32 scroll-smooth">
            <div className="flex justify-center items-start gap-[12px] min-h-full">
              {/* Edit Controls */}
              <div className="sticky top-[12px] z-40">
                <EditControls editor={editor} onLinkClick={handleLinkClick} onFileClick={handleFileClick} onQuoteClick={handleQuoteClick} onVideoClick={handleVideoClick} mode={mode} />
              </div>

              {/* Editor Card */}
              <div className="w-[520px] bg-white rounded-[12px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)] flex flex-col h-fit overflow-hidden">
                <div 
                  className="relative w-full h-[189px] bg-[#F2F4F8] flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#E5E7EB] transition-colors overflow-hidden group"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleCoverDrop}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                  />
                  {isGeneratingCover ? (
                    <div className="flex flex-col items-center justify-center gap-3" onClick={(e) => e.stopPropagation()}>
                      <div className="w-[48px] h-[48px] rounded-full bg-[#F0E6FF] flex items-center justify-center">
                        <svg className="size-[22px] animate-spin" fill="none" viewBox="0 0 16 16">
                          <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" />
                        </svg>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[14px] text-[#161616] tracking-[0.16px]">ИИ генерирует обложку...</span>
                        <span className="text-[12px] text-[#8D8D8D] tracking-[0.16px]">На основе текста новости</span>
                      </div>
                      <div className="w-[140px] h-[3px] bg-[#E0E0E0] rounded-full overflow-hidden mt-1">
                        <motion.div
                          className="h-full bg-[#7F2BFD] rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2.5, ease: 'easeInOut' }}
                        />
                      </div>
                    </div>
                  ) : newsImage ? (
                    <ImageWithFallback src={newsImage} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <>
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8D8D8D] shadow-sm">
                        <ImageIcon size={20} />
                      </div>
                      <span className="text-[14px] text-[#8D8D8D]">Добавить обложку</span>
                      <div className="relative group/neuro">
                        <button
                          disabled={!hasEditorContent}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (hasEditorContent) {
                              handleNeuroCover();
                            }
                          }}
                          className={`flex items-center gap-[6px] mt-[4px] px-[14px] h-[32px] rounded-[8px] text-[13px] tracking-[0.16px] transition-all ${
                            hasEditorContent
                              ? 'bg-[#F0E6FF] text-[#7F2BFD] hover:bg-[#E5D5FF] cursor-pointer'
                              : 'bg-[#F4F4F4] text-[#A8A8A8] cursor-not-allowed'
                          }`}
                        >
                          <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
                            <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill={hasEditorContent ? '#7F2BFD' : '#A8A8A8'} />
                          </svg>
                          Нейрогенерация
                        </button>
                        {!hasEditorContent && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[6px] opacity-0 group-hover/neuro:opacity-100 transition-opacity pointer-events-none z-50">
                            <div className="bg-[#161616] text-white rounded-[6px] px-[10px] py-[6px] text-[12px] leading-[16px] whitespace-nowrap shadow-lg">
                              Сначала введите текст новости
                              <div className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 w-[8px] h-[8px] bg-[#161616] rotate-45" />
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                  {newsImage && !isGeneratingCover && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 flex flex-col justify-end">
                      {/* Gradient overlay — subtle bottom fade */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                      {/* Button bar */}
                      <div className="relative z-20 flex items-center gap-[6px] px-3 py-2.5">
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            fileInputRef.current?.click();
                          }}
                          className="flex items-center gap-[5px] px-3 h-[32px] rounded-[8px] bg-white/90 backdrop-blur-sm text-[13px] tracking-[0.16px] text-[#161616] cursor-pointer hover:bg-white transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13.5 2.5L6 10l-2-2" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 8v5a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h5" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Изменить
                        </div>
                        {hasEditorContent && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNeuroCover();
                            }}
                            className="flex items-center gap-[5px] px-3 h-[32px] rounded-[8px] bg-[#F0E6FF]/90 backdrop-blur-sm text-[#7F2BFD] text-[13px] tracking-[0.16px] hover:bg-[#F0E6FF] transition-colors cursor-pointer"
                          >
                            <svg className="size-[13px]" fill="none" viewBox="0 0 16 16">
                              <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" />
                            </svg>
                            {isAiCover ? 'Перегенерировать' : 'Нейрогенерация'}
                          </button>
                        )}
                        {/* Spacer pushes delete to the right */}
                        <div className="flex-1" />
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setNewsImage(null);
                            setIsAiCover(false);
                          }}
                          className="flex items-center justify-center size-[32px] rounded-[8px] bg-white/20 backdrop-blur-sm text-white/80 hover:bg-[#DA1E28] hover:text-white transition-colors cursor-pointer"
                          title="Удалить обложку"
                        >
                          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M5.333 4V2.667a1.333 1.333 0 011.334-1.334h2.666a1.333 1.333 0 011.334 1.334V4m2 0v9.333a1.333 1.333 0 01-1.334 1.334H4.667a1.333 1.333 0 01-1.334-1.334V4h9.334z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 pt-4 flex flex-col gap-5">
                  <div className="flex items-center gap-4 relative">
                    <div 
                      className="flex items-center gap-2 cursor-pointer group select-none"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {selectedChannel ? (
                        <>
                          <div 
                            className="w-[30px] h-[30px] rounded-full flex items-center justify-center text-white text-[12px] font-bold"
                            style={{ backgroundColor: selectedChannel.color }}
                          >
                            {selectedChannel.initial}
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[14px] text-[#161616] font-medium">{selectedChannel.title}</span>
                            <ChevronDown size={16} className={`text-[#8D8D8D] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-[30px] h-[30px] rounded-full border-2 border-dashed border-[#D1D5DB] flex items-center justify-center text-[#8D8D8D]">
                            <Plus size={16} />
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-[14px] text-[#8D8D8D]">Выберите канал</span>
                            <ChevronDown size={16} className={`text-[#8D8D8D] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <>
                          <div 
                            className="fixed inset-0 z-40" 
                            onClick={() => setIsDropdownOpen(false)} 
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-[280px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] border border-[#E0E4EA] py-2 z-50 overflow-hidden"
                          >
                            <div className="px-3 py-1 mb-1">
                              <span className="text-[12px] font-semibold text-[#8D8D8D] uppercase tracking-wider">Ваши каналы</span>
                            </div>
                            <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
                              {EDITOR_CHANNELS.map((channel) => (
                                <button
                                  key={channel.id}
                                  onClick={() => {
                                    setSelectedChannel(channel);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`w-full px-3 py-2 flex items-center gap-3 hover:bg-[#F4F7FB] transition-colors ${selectedChannel?.id === channel.id ? 'bg-[#F4F7FB]' : ''}`}
                                >
                                  <div 
                                    className="w-[24px] h-[24px] rounded-full flex items-center justify-center text-white text-[10px] font-bold shrink-0"
                                    style={{ backgroundColor: channel.color }}
                                  >
                                    {channel.initial}
                                  </div>
                                  <span className="flex-1 text-left text-[14px] text-[#161616] truncate">
                                    {channel.title}
                                  </span>
                                  {selectedChannel?.id === channel.id && (
                                    <Check size={16} className="text-[#0F62FE]" />
                                  )}
                                </button>
                              ))}
                            </div>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>

                    <span className="text-[14px] text-[#161616]">Автор: Полина Лааксо</span>
                  </div>

                  <div className="rich-text-editor">
                    <EditorContent editor={editor} />
                  </div>

                  {settings.acknowledge && (
                    <div className="pt-4 border-t border-[#E0E4EA] mt-1">
                      <Button variant="primary" className="w-full">
                        {settings.acknowledgeButtonText || 'Ознакомлен'}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar Settings Container */}
          <div className="w-[416px] shrink-0 border-l border-[#E0E4EA] bg-[#F4F7FB] flex flex-col h-full">
            <div className="flex-1 overflow-y-auto px-[12px] py-[12px] custom-scrollbar">
              <NewsSettingsSidebar 
                settings={settings} 
                onSettingsChange={setSettings}
                mode={mode}
                autoGenerate={autoGenerate}
                onAutoGenerateChange={setAutoGenerate}
                onAudienceChange={setHasAudience}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Link Popover */}
      <AnimatePresence>
        {linkPopover.visible && (
          <motion.div
            data-link-popover
            initial={{ opacity: 0, y: -4, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.2, 0, 0, 1] }}
            className="fixed z-[9999] -translate-x-1/2"
            style={{
              top: linkPopover.position.top,
              left: linkPopover.position.left,
            }}
          >
            <div className="bg-white flex gap-[4px] items-start p-[4px] rounded-[8px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] font-['IBM_Plex_Sans']">
              <div className="bg-[#f2f4f8] flex items-center px-[12px] rounded-[4px] shrink-0 w-[150px] h-[32px]">
                <input
                  ref={linkInputRef}
                  type="text"
                  value={linkPopover.url}
                  onChange={(e) => setLinkPopover(prev => ({ ...prev, url: e.target.value }))}
                  onKeyDown={handleLinkKeyDown}
                  placeholder="Вставьте ссылку"
                  className="w-full bg-transparent outline-none text-[14px] text-[#161616] placeholder:text-[#a8a8a8] leading-[18px] tracking-[0.16px]"
                />
              </div>
              <button
                onClick={handleLinkSave}
                disabled={!linkPopover.url.trim()}
                className={`flex items-center justify-center px-[16px] py-[7px] rounded-[4px] text-[14px] leading-[18px] tracking-[0.16px] transition-colors shrink-0 ${
                  linkPopover.url.trim()
                    ? 'text-[#0f62fe] hover:bg-[#0f62fe]/5 cursor-pointer'
                    : 'text-[#a8a8a8] cursor-not-allowed'
                }`}
              >
                Сохранить
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hidden file input for attachments */}
      <input
        type="file"
        ref={attachmentFileInputRef}
        className="hidden"
        multiple
        onChange={handleAttachmentFileChange}
      />

      <style>{`
        .custom-grid-bg {
          background-image: radial-gradient(#D1D5DB 1px, transparent 1px);
          background-size: 24px 24px;
        }
        .rich-text-editor h2 {
          font-family: 'Montserrat', sans-serif;
          font-size: 18px;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 16px;
        }
        .rich-text-editor p {
          font-size: 14px;
          line-height: 20px;
          letter-spacing: 0.16px;
          margin-bottom: 12px;
        }
        .rich-text-editor ul {
          list-style-type: disc;
          padding-left: 20px;
          margin-bottom: 12px;
        }
        .rich-text-editor ol {
          list-style-type: decimal;
          padding-left: 20px;
          margin-bottom: 12px;
        }
        .rich-text-editor li {
          font-size: 14px;
          line-height: 20px;
          margin-bottom: 8px;
        }
        .rich-text-editor .ProseMirror:focus {
          outline: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9CA3AF;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .bq-field::placeholder {
          color: #A8A8A8 !important;
          opacity: 1 !important;
        }
      `}</style>
    </motion.div>
  );
};