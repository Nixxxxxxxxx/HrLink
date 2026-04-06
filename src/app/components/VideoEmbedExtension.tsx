import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Node, mergeAttributes } from '@tiptap/react';
import { ReactNodeViewRenderer, NodeViewWrapper } from '@tiptap/react';
import { X, Play, Link2, AlertCircle } from 'lucide-react';

// Parse video URL into embeddable format
function parseVideoUrl(url: string): { embedUrl: string; provider: string } | null {
  let cleanUrl = url.trim();
  if (!/^https?:\/\//i.test(cleanUrl)) {
    cleanUrl = 'https://' + cleanUrl;
  }

  try {
    const parsed = new URL(cleanUrl);

    // YouTube
    if (parsed.hostname.includes('youtube.com') || parsed.hostname.includes('youtu.be')) {
      let videoId = '';
      if (parsed.hostname.includes('youtu.be')) {
        videoId = parsed.pathname.slice(1).split('/')[0];
      } else {
        videoId = parsed.searchParams.get('v') || '';
        const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
        if (embedMatch) videoId = embedMatch[1];
        const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?]+)/);
        if (shortsMatch) videoId = shortsMatch[1];
      }
      if (videoId) {
        return {
          embedUrl: `https://www.youtube.com/embed/${videoId}`,
          provider: 'YouTube',
        };
      }
    }

    // Vimeo
    if (parsed.hostname.includes('vimeo.com')) {
      const vimeoMatch = parsed.pathname.match(/\/(\d+)/);
      if (vimeoMatch) {
        return {
          embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
          provider: 'Vimeo',
        };
      }
    }

    // RuTube
    if (parsed.hostname.includes('rutube.ru')) {
      const rutubeMatch = parsed.pathname.match(/\/video\/([a-f0-9]+)/i);
      if (rutubeMatch) {
        return {
          embedUrl: `https://rutube.ru/play/embed/${rutubeMatch[1]}`,
          provider: 'RuTube',
        };
      }
    }

    // VK Video
    if (parsed.hostname.includes('vk.com') || parsed.hostname.includes('vkvideo.ru')) {
      const vkMatch = parsed.pathname.match(/video(-?\d+_\d+)/);
      if (vkMatch) {
        const parts = vkMatch[1].split('_');
        return {
          embedUrl: `https://vk.com/video_ext.php?oid=${parts[0]}&id=${parts[1]}`,
          provider: 'VK Video',
        };
      }
      return { embedUrl: cleanUrl, provider: 'VK Video' };
    }

    // Direct video file (mp4, webm, ogg)
    if (/\.(mp4|webm|ogg)(\?.*)?$/i.test(parsed.pathname)) {
      return { embedUrl: cleanUrl, provider: 'video' };
    }

    // Generic — try to embed as-is
    return { embedUrl: cleanUrl, provider: 'Video' };
  } catch (_e) {
    return null;
  }
}

// React component for the video embed node
function VideoEmbedComponent(props: any) {
  const { node, updateAttributes, deleteNode, selected } = props;
  const videoUrl: string = node.attrs.videoUrl || '';
  const embedUrl: string = node.attrs.embedUrl || '';
  const provider: string = node.attrs.provider || '';

  const [inputUrl, setInputUrl] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isEmpty = !embedUrl;

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

  // Auto-focus input on mount when empty
  useEffect(() => {
    if (isEmpty) {
      const timer = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(timer);
    }
  }, [isEmpty]);

  const handleSubmit = useCallback(() => {
    const url = inputUrl.trim();
    if (!url) return;

    const parsed = parseVideoUrl(url);
    if (!parsed) {
      setError('Не удалось распознать ссылку на видео');
      return;
    }

    setError('');
    try {
      updateAttributes({
        videoUrl: url,
        embedUrl: parsed.embedUrl,
        provider: parsed.provider,
      });
    } catch (_e) {
      // Fallback: try without provider
      setError('Ошибка при вставке видео');
    }
  }, [inputUrl, updateAttributes]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      if (!embedUrl) {
        deleteNode();
      }
    }
    // Stop all keyboard events from propagating to TipTap
    e.stopPropagation();
  }, [handleSubmit, embedUrl, deleteNode]);

  const handleDelete = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    deleteNode();
  }, [deleteNode]);

  // Reset to empty state
  const handleChangeUrl = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setInputUrl(videoUrl || '');
    setError('');
    updateAttributes({
      videoUrl: '',
      embedUrl: '',
      provider: '',
    });
  }, [videoUrl, updateAttributes]);

  const isDirectVideo = provider === 'video';

  return (
    <NodeViewWrapper className="my-3" data-type="video-embed">
      <div
        ref={wrapperRef}
        contentEditable={false}
        className={`relative group select-none rounded-[8px] transition-shadow ${
          selected ? 'ring-2 ring-[#0F62FE]/30' : ''
        }`}
      >
        {/* Delete button */}
        <button
          type="button"
          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
          onClick={handleDelete}
          className="absolute -top-[6px] -right-[6px] w-[20px] h-[20px] rounded-full bg-[#DA1E28] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-[#A2191F] z-10 cursor-pointer"
        >
          <X size={12} color="#fff" strokeWidth={2.5} />
        </button>

        {isEmpty ? (
          /* ===== Empty State ===== */
          <div className="rounded-[8px] border-2 border-dashed border-[#D1D5DB] bg-[#FAFBFC] overflow-hidden">
            <div className="flex flex-col items-center justify-center py-[28px] px-[24px] gap-[16px]">
              {/* Icon */}
              <div className="w-[48px] h-[48px] rounded-full bg-[#EDF5FF] flex items-center justify-center">
                <Play size={22} className="text-[#0F62FE] ml-[2px]" />
              </div>

              {/* Title */}
              <div className="flex flex-col items-center gap-[4px]">
                <span className="text-[14px] text-[#161616] font-medium font-['IBM_Plex_Sans'] leading-[20px]">
                  Вставить видео
                </span>
                <span className="text-[12px] text-[#8D8D8D] font-['IBM_Plex_Sans'] leading-[16px] text-center">
                  YouTube, Vimeo, RuTube или прямая ссылка на видео
                </span>
              </div>

              {/* URL Input */}
              <div className="w-full flex flex-col gap-[8px]">
                <div className="flex gap-[6px] w-full">
                  <div className="flex-1 flex items-center gap-[8px] bg-[#F2F4F8] rounded-[6px] px-[12px] h-[36px]">
                    <Link2 size={14} className="text-[#8D8D8D] shrink-0" />
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputUrl}
                      onChange={(e) => {
                        setInputUrl(e.target.value);
                        if (error) setError('');
                      }}
                      onKeyDown={handleKeyDown}
                      onMouseDown={(e) => e.stopPropagation()}
                      onFocus={(e) => e.stopPropagation()}
                      placeholder="Вставьте ссылку на видео..."
                      className="flex-1 bg-transparent outline-none text-[13px] text-[#161616] placeholder:text-[#A8A8A8] font-['IBM_Plex_Sans'] leading-[18px]"
                    />
                  </div>
                  <button
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleSubmit();
                    }}
                    disabled={!inputUrl.trim()}
                    className={`px-[14px] h-[36px] rounded-[6px] text-[13px] font-medium font-['IBM_Plex_Sans'] transition-colors shrink-0 ${
                      inputUrl.trim()
                        ? 'bg-[#0F62FE] text-white hover:bg-[#0043CE] cursor-pointer'
                        : 'bg-[#E0E4EA] text-[#A8A8A8] cursor-not-allowed'
                    }`}
                  >
                    Вставить
                  </button>
                </div>

                {/* Error */}
                {error && (
                  <div className="flex items-center gap-[6px] px-[4px]">
                    <AlertCircle size={12} className="text-[#DA1E28] shrink-0" />
                    <span className="text-[12px] text-[#DA1E28] font-['IBM_Plex_Sans'] leading-[16px]">
                      {error}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ===== Video Loaded State ===== */
          <div className="rounded-[8px] border border-[#E0E4EA] bg-[#000] overflow-hidden">
            {/* Video container 16:9 */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {isDirectVideo ? (
                <video
                  src={embedUrl}
                  controls
                  className="absolute inset-0 w-full h-full object-contain bg-black"
                />
              ) : (
                <iframe
                  src={embedUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  frameBorder="0"
                  title="Video embed"
                />
              )}
            </div>

            {/* Bottom bar with provider & change link */}
            <div className="flex items-center justify-between px-[12px] py-[8px] bg-[#161616]">
              <div className="flex items-center gap-[6px]">
                <Play size={12} className="text-[#8D8D8D]" />
                <span className="text-[12px] text-[#8D8D8D] font-['IBM_Plex_Sans'] leading-[16px]">
                  {provider}
                </span>
              </div>
              <button
                type="button"
                onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); }}
                onClick={handleChangeUrl}
                className="text-[12px] text-[#78A9FF] font-['IBM_Plex_Sans'] leading-[16px] hover:text-[#A6C8FF] transition-colors cursor-pointer"
              >
                Изменить ссылку
              </button>
            </div>
          </div>
        )}
      </div>
    </NodeViewWrapper>
  );
}

// TipTap Node Extension
export const VideoEmbed = Node.create({
  name: 'videoEmbed',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      videoUrl: { default: '' },
      embedUrl: { default: '' },
      provider: { default: '' },
    };
  },

  parseHTML() {
    return [{ tag: 'div[data-type="video-embed"]' }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      'div',
      mergeAttributes(HTMLAttributes, { 'data-type': 'video-embed' }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(VideoEmbedComponent, {
      stopEvent: () => {
        // Block ALL events from reaching TipTap/ProseMirror.
        // The entire node view is self-managed by React
        // (input, buttons, paste, keyboard, etc.)
        return true;
      },
    });
  },
});