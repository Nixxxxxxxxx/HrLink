import { Node, mergeAttributes } from '@tiptap/react';
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react';
import React, { useState } from 'react';

// Inline "ИИ-персонализация" label that shows prompt on hover
const AiContentLabelView = ({ node }: { node: any }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const prompt = node.attrs.prompt || '';

  return (
    <NodeViewWrapper as="span" className="inline">
      <span
        contentEditable={false}
        className="relative inline-flex items-center gap-[4px] px-[8px] py-[2px] rounded-[4px] bg-[#F0E6FF] cursor-default select-none align-baseline"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* 4-point star icon */}
        <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 16 16">
          <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" />
        </svg>
        <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#7F2BFD] tracking-[0.16px] whitespace-nowrap">
          ИИ-персонализация
        </span>

        {/* Tooltip with prompt */}
        {showTooltip && prompt && (
          <span
            className="absolute bottom-[calc(100%+6px)] left-1/2 -translate-x-1/2 px-[10px] py-[6px] bg-[#161616] rounded-[6px] z-[9999] pointer-events-none max-w-[280px]"
            style={{ animation: 'aiMenuIn 0.15s ease-out' }}
          >
            <span className="block font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#A8A8A8] tracking-[0.32px] uppercase mb-[3px]">
              Промт
            </span>
            <span className="block font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-white tracking-[0.16px] whitespace-pre-wrap">
              {prompt}
            </span>
            {/* Arrow */}
            <span className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#161616]" />
          </span>
        )}
      </span>
    </NodeViewWrapper>
  );
};

export const AiContentLabel = Node.create({
  name: 'aiContentLabel',
  group: 'inline',
  inline: true,
  atom: true,
  selectable: true,
  draggable: false,

  addAttributes() {
    return {
      prompt: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'span[data-ai-content-label]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes({ 'data-ai-content-label': '' }, HTMLAttributes), 'ИИ-персонализация'];
  },

  addNodeView() {
    return ReactNodeViewRenderer(AiContentLabelView);
  },
});