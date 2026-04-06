import React, { useState, useEffect, useRef } from 'react';
import { Node, mergeAttributes } from '@tiptap/react';
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import { X } from 'lucide-react';

function BlockquoteComponent(props: any) {
  const { node, updateAttributes, deleteNode, selected } = props;
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Use LOCAL state so typing works immediately,
  // then sync to TipTap node attrs
  const [title, setTitle] = useState<string>(node.attrs.quoteTitle || '');
  const [text, setText] = useState<string>(node.attrs.quoteText || '');
  const [caption, setCaption] = useState<string>(node.attrs.quoteCaption || '');

  // Sync FROM node attrs → local state (when node attrs change externally)
  useEffect(() => { setTitle(node.attrs.quoteTitle || ''); }, [node.attrs.quoteTitle]);
  useEffect(() => { setText(node.attrs.quoteText || ''); }, [node.attrs.quoteText]);
  useEffect(() => { setCaption(node.attrs.quoteCaption || ''); }, [node.attrs.quoteCaption]);

  // Entrance animation via CSS
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px) scale(0.98)';
    el.style.transition = 'opacity 0.3s cubic-bezier(0.25,0.1,0.25,1), transform 0.3s cubic-bezier(0.25,0.1,0.25,1)';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      });
    });
  }, []);

  const stop = (e: React.SyntheticEvent) => e.stopPropagation();

  return (
    <NodeViewWrapper
      as="div"
      data-type="custom-blockquote"
      style={{ margin: '12px 0' }}
    >
      <div
        ref={wrapperRef}
        style={{
          position: 'relative',
          borderRadius: '8px',
          boxShadow: selected ? '0 0 0 2px rgba(15,98,254,0.3)' : 'none',
        }}
      >
        {/* Delete button */}
        <button
          type="button"
          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); deleteNode(); }}
          style={{
            position: 'absolute',
            top: '-6px',
            right: '-6px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#DA1E28',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            opacity: 0,
            transition: 'opacity 0.15s',
          }}
          className="group-hover-delete"
        >
          <X size={12} color="#fff" strokeWidth={2.5} />
        </button>

        {/* Quote card */}
        <div
          style={{
            display: 'flex',
            borderRadius: '8px',
            border: '1px solid #E0E4EA',
            background: '#FAFBFC',
            overflow: 'hidden',
          }}
        >
          {/* Blue left bar */}
          <div style={{ width: '4px', background: '#0F62FE', flexShrink: 0 }} />

          {/* Content fields */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '14px 16px', flex: 1, minWidth: 0 }}>
            {/* Title input */}
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                updateAttributes({ quoteTitle: e.target.value });
              }}
              onMouseDown={stop}
              onFocus={stop}
              onKeyDown={stop}
              onPaste={stop}
              onCut={stop}
              onCopy={stop}
              placeholder="Заголовок цитаты"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '16px',
                lineHeight: '22px',
                fontWeight: 600,
                color: '#161616',
                letterSpacing: '0.16px',
                padding: 0,
                margin: 0,
              }}
            />

            {/* Body text input */}
            <input
              type="text"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
                updateAttributes({ quoteText: e.target.value });
              }}
              onMouseDown={stop}
              onFocus={stop}
              onKeyDown={stop}
              onPaste={stop}
              onCut={stop}
              onCopy={stop}
              placeholder="Текст цитаты"
              style={{
                width: '100%',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: '14px',
                lineHeight: '20px',
                fontStyle: 'italic',
                color: '#525252',
                letterSpacing: '0.16px',
                padding: 0,
                margin: 0,
              }}
            />

            {/* Caption */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
              <span style={{ fontSize: '13px', color: '#8D8D8D', lineHeight: '18px', fontFamily: "'IBM Plex Sans', sans-serif", userSelect: 'none' }}>
                —
              </span>
              <input
                type="text"
                value={caption}
                onChange={(e) => {
                  setCaption(e.target.value);
                  updateAttributes({ quoteCaption: e.target.value });
                }}
                onMouseDown={stop}
                onFocus={stop}
                onKeyDown={stop}
                onPaste={stop}
                onCut={stop}
                onCopy={stop}
                placeholder="Автор или источник"
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: '13px',
                  lineHeight: '18px',
                  color: '#8D8D8D',
                  letterSpacing: '0.16px',
                  padding: 0,
                  margin: 0,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </NodeViewWrapper>
  );
}

// TipTap Node Extension
export const CustomBlockquote = Node.create({
  name: 'customBlockquote',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      quoteTitle: { default: '' },
      quoteText: { default: '' },
      quoteCaption: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="custom-blockquote"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, { 'data-type': 'custom-blockquote' }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(BlockquoteComponent, {
      stopEvent: () => true,
    });
  },
});