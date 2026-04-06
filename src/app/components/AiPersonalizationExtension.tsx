import { Node, mergeAttributes } from '@tiptap/react';
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import React, { useState } from 'react';

// AI Personalization block presets
export const AI_BLOCK_PRESETS = [
  { id: 'wishes', label: 'Личные пожелания', description: '2–3 пожелания на основе интересов сотрудника', icon: '🎉' },
  { id: 'facts', label: 'Интересные факты', description: 'Факты о достижениях или хобби сотрудника', icon: '💡' },
  { id: 'quote', label: 'Персональная цитата', description: 'Мотивационная цитата, подходящая сотруднику', icon: '💬' },
  { id: 'summary', label: 'Итоги периода', description: 'Краткий обзор достижений сотрудника за период', icon: '📊' },
] as const;

// React component for the AI personalization block in the editor
const AiPersonalizationView = ({ node, updateAttributes }: { node: any; updateAttributes: (attrs: any) => void }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localPrompt, setLocalPrompt] = useState(node.attrs.prompt || '');
  const preset = AI_BLOCK_PRESETS.find(p => p.id === node.attrs.presetId);

  const handleSavePrompt = () => {
    updateAttributes({ prompt: localPrompt });
    setIsEditing(false);
  };

  return (
    <NodeViewWrapper className="my-3">
      <div
        contentEditable={false}
        className="relative rounded-[10px] border border-[#E0D4F7] bg-gradient-to-br from-[#FDFBFF] to-[#F5EEFF] p-[16px] select-none"
        onMouseDown={(e) => e.stopPropagation()}
        onFocus={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-[10px] mb-[10px]">
          <div className="size-[28px] rounded-[8px] bg-gradient-to-br from-[#7F2BFD] to-[#A855F7] flex items-center justify-center shrink-0">
            <svg className="size-[14px]" fill="none" viewBox="0 0 16 16">
              <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="white" />
            </svg>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-[6px]">
              <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#7F2BFD] font-medium tracking-[0.16px]">
                ИИ-персонализация
              </span>
              {preset && (
                <span className="px-[6px] py-[1px] rounded-[4px] bg-[#F0E6FF] text-[#7F2BFD] text-[11px] leading-[14px] tracking-[0.32px]">
                  {preset.label}
                </span>
              )}
            </div>
            <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#8D8D8D] tracking-[0.16px] mt-[2px]">
              {preset?.description || 'Блок будет заменён персональным контентом при генерации'}
            </p>
          </div>
        </div>

        {/* Prompt area */}
        <div className="bg-white/70 rounded-[8px] border border-[#E0D4F7]/60 p-[10px]">
          {isEditing ? (
            <div className="flex flex-col gap-[8px]">
              <textarea
                value={localPrompt}
                onChange={(e) => setLocalPrompt(e.target.value)}
                placeholder="Опишите, что ИИ должен сгенерировать для каждого получателя..."
                className="w-full min-h-[60px] resize-none bg-transparent font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] placeholder:text-[#A8A8A8] outline-none tracking-[0.16px]"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                    handleSavePrompt();
                  }
                  if (e.key === 'Escape') {
                    setLocalPrompt(node.attrs.prompt || '');
                    setIsEditing(false);
                  }
                  e.stopPropagation();
                }}
              />
              <div className="flex items-center gap-[6px] justify-end">
                <button
                  onClick={() => { setLocalPrompt(node.attrs.prompt || ''); setIsEditing(false); }}
                  className="px-[10px] h-[28px] rounded-[4px] text-[12px] text-[#525252] hover:bg-[#F4F4F4] transition-colors cursor-pointer font-['IBM_Plex_Sans',sans-serif]"
                >
                  Отмена
                </button>
                <button
                  onClick={handleSavePrompt}
                  className="px-[10px] h-[28px] rounded-[4px] bg-[#7F2BFD] text-white text-[12px] hover:bg-[#6B21D1] transition-colors cursor-pointer font-['IBM_Plex_Sans',sans-serif]"
                >
                  Сохранить
                </button>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setIsEditing(true)}
              className="cursor-pointer hover:bg-[#F0E6FF]/30 rounded-[4px] -m-[4px] p-[4px] transition-colors"
            >
              {node.attrs.prompt ? (
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] tracking-[0.16px]">
                  {node.attrs.prompt}
                </p>
              ) : (
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#A8A8A8] tracking-[0.16px] italic">
                  Нажмите, чтобы описать инструкцию для ИИ...
                </p>
              )}
            </div>
          )}
        </div>

        {/* Preview example */}
        <div className="mt-[10px] flex items-start gap-[8px]">
          <svg className="size-[14px] shrink-0 mt-[2px] text-[#A8A8A8]" viewBox="0 0 16 16" fill="none">
            <path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 12.5A5.5 5.5 0 1113.5 8 5.51 5.51 0 018 13.5zM8 4a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 4zm0 6.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill="currentColor" />
          </svg>
          <p className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#A8A8A8] tracking-[0.16px]">
            Этот блок будет заменён уникальным контентом для каждого получателя при авто-генерации
          </p>
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export const AiPersonalization = Node.create({
  name: 'aiPersonalization',
  group: 'block',
  atom: true,
  selectable: true,
  draggable: true,

  addAttributes() {
    return {
      presetId: { default: 'wishes' },
      prompt: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-ai-personalization]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', mergeAttributes({ 'data-ai-personalization': '' }, HTMLAttributes), 'AI Personalization Block'];
  },

  addNodeView() {
    return ReactNodeViewRenderer(AiPersonalizationView);
  },
});