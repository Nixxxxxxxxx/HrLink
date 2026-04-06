import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Info, RefreshCw, Check, Wand2, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Стили генерации обложек в корпоративном стиле Северстали
const COVER_STYLES = [
  {
    id: 'corporate',
    label: 'Корпоративный',
    description: 'Фирменный стиль ПАО «ПромИнвест»: красно-белая палитра, логотип-акценты, строгая типографика. Подходит для официальных новостей и релизов.',
    color: '#DA1E28',
    preview: 'https://images.unsplash.com/photo-1570296273328-cd16499ba1d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVlbCUyMGluZHVzdHJpYWwlMjBjb3Jwb3JhdGUlMjBibHVlJTIwZ3JhZGllbnR8ZW58MXx8fHwxNzcxOTEyMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'minimal',
    label: 'Минимализм',
    description: 'Чистый белый фон, минимум деталей, акцент на типографике и геометрических формах. Идеален для HR-новостей и внутренних объявлений.',
    color: '#525252',
    preview: 'https://images.unsplash.com/photo-1705762893650-786e65257cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaW5pbWFsJTIwZ2VvbWV0cmljJTIwYWJzdHJhY3QlMjB3aGl0ZXxlbnwxfHx8fDE3NzE4MzY4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'tech',
    label: 'Технологичный',
    description: 'Тёмная тема, цифровые паттерны, неоновые акценты. Для IT-новостей, цифровизации и инноваций на производстве.',
    color: '#0F62FE',
    preview: 'https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGZ1dHVyaXN0aWMlMjBkYXJrfGVufDF8fHx8MTc3MTkxMjA1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'gradient',
    label: 'Градиент',
    description: 'Яркие плавные градиенты с корпоративными цветами. Привлекает внимание — для событий, конкурсов и праздников.',
    color: '#8A3FFC',
    preview: 'https://images.unsplash.com/photo-1658232190602-be6cd5b976f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGdyYWRpZW50JTIwYWJzdHJhY3QlMjB2aWJyYW50fGVufDF8fHx8MTc3MTkxMjA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'photo',
    label: 'Фотореалистичный',
    description: 'Стилизованные фотографии производства, команды, продукции. Подходит для репортажей и производственных новостей.',
    color: '#24A148',
    preview: 'https://images.unsplash.com/photo-1691228802680-22def86b9b98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN0ZWVsJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3NzE5MTIwNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    id: 'illustration',
    label: 'Иллюстрация',
    description: 'Плоские векторные иллюстрации в фирменных цветах. Дружелюбный стиль для обучения, ESG и социальных проектов.',
    color: '#FF832B',
    preview: 'https://images.unsplash.com/photo-1760292421911-964db7e9fca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0JTIwaWxsdXN0cmF0aW9uJTIwYWJzdHJhY3QlMjBtb2Rlcm4lMjBhcnR8ZW58MXx8fHwxNzcxOTEyMDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
] as const;

type StyleId = (typeof COVER_STYLES)[number]['id'];

interface NeuroCoverModalProps {
  open: boolean;
  onClose: () => void;
  onApply: (imageUrl: string) => void;
  newsText: string;
}

// Simulated generation — picks a style-matched image
function simulateGeneration(styleId: StyleId, _prompt: string): Promise<string> {
  return new Promise((resolve) => {
    const style = COVER_STYLES.find(s => s.id === styleId);
    setTimeout(() => {
      resolve(style?.preview ?? COVER_STYLES[0].preview);
    }, 1800 + Math.random() * 1200);
  });
}

export function NeuroCoverModal({ open, onClose, onApply, newsText }: NeuroCoverModalProps) {
  const [selectedStyle, setSelectedStyle] = useState<StyleId>('corporate');
  const [generating, setGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [hoveredStyle, setHoveredStyle] = useState<string | null>(null);
  const tooltipTimeoutRef = useRef<ReturnType<typeof setTimeout>>();

  // Reset on open
  useEffect(() => {
    if (open) {
      setGeneratedImage(null);
      setGenerating(false);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const handleGenerate = useCallback(async () => {
    if (!newsText.trim()) return;
    setGenerating(true);
    setGeneratedImage(null);
    try {
      const url = await simulateGeneration(selectedStyle, newsText);
      setGeneratedImage(url);
    } finally {
      setGenerating(false);
    }
  }, [selectedStyle, newsText]);

  const handleApply = useCallback(() => {
    if (generatedImage) {
      onApply(generatedImage);
      onClose();
    }
  }, [generatedImage, onApply, onClose]);

  const handleStyleHover = useCallback((id: string) => {
    clearTimeout(tooltipTimeoutRef.current);
    tooltipTimeoutRef.current = setTimeout(() => setHoveredStyle(id), 300);
  }, []);

  const handleStyleLeave = useCallback(() => {
    clearTimeout(tooltipTimeoutRef.current);
    setHoveredStyle(null);
  }, []);

  const currentStyle = COVER_STYLES.find(s => s.id === selectedStyle)!;
  const hasText = newsText.trim().length > 0;
  const truncatedText = newsText.trim().length > 150 ? newsText.trim().slice(0, 150) + '...' : newsText.trim();

  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-[16px] shadow-[0px_24px_48px_rgba(0,0,0,0.2)] w-full max-w-[580px] flex flex-col"
          >
            {/* Header */}
            <div className="px-[24px] pt-[20px] pb-[16px] flex items-center justify-between border-b border-[#E0E4EA]">
              <div className="flex items-center gap-[10px]">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-gradient-to-br from-[#8A3FFC] to-[#0F62FE] flex items-center justify-center">
                  <Sparkles size={18} className="text-white" />
                </div>
                <div>
                  <h2 className="font-['IBM_Plex_Sans',sans-serif] text-[16px] leading-[22px] text-[#161616] tracking-[-0.01em]">
                    Нейрогенерация обложки
                  </h2>
                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#8D8D8D] tracking-[0.16px]">
                    ИИ создаст обложку в фирменном стиле компании
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center hover:bg-[#F4F4F4] transition-colors"
              >
                <X size={18} className="text-[#525252]" />
              </button>
            </div>

            {/* Content */}
            <div className="px-[24px] py-[20px] flex flex-col gap-[20px]">
              {/* Style selector */}
              <div className="flex flex-col gap-[8px]">
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
                  Стиль генерации
                </span>
                <div className="flex flex-wrap gap-[8px]">
                  {COVER_STYLES.map((style) => {
                    const isSelected = selectedStyle === style.id;
                    return (
                      <div
                        key={style.id}
                        className="relative"
                        onMouseEnter={() => handleStyleHover(style.id)}
                        onMouseLeave={handleStyleLeave}
                      >
                        <button
                          onClick={() => setSelectedStyle(style.id)}
                          className={`
                            h-[32px] px-[12px] rounded-[16px] flex items-center gap-[6px] transition-all duration-200
                            font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px]
                            border
                            ${isSelected
                              ? 'text-white border-transparent shadow-[0px_2px_6px_rgba(0,0,0,0.15)]'
                              : 'bg-white text-[#525252] border-[#E0E0E0] hover:border-[#C6C6C6] hover:bg-[#F4F4F4]'
                            }
                          `}
                          style={isSelected ? { backgroundColor: style.color } : undefined}
                        >
                          {isSelected && <Check size={12} strokeWidth={2.5} />}
                          {style.label}
                        </button>

                        {/* Tooltip */}
                        <AnimatePresence>
                          {hoveredStyle === style.id && (
                            <motion.div
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              transition={{ duration: 0.15 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[8px] z-[10000] w-[240px] pointer-events-none"
                            >
                              <div className="bg-[#161616] text-white rounded-[8px] px-[12px] py-[10px] shadow-[0px_8px_24px_rgba(0,0,0,0.24)] relative">
                                {/* Arrow */}
                                <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#161616] rotate-45 rounded-[1px]" />
                                <div className="flex items-start gap-[8px]">
                                  <Info size={13} className="text-[#78A9FF] shrink-0 mt-[1px]" />
                                  <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] tracking-[0.16px] relative z-10">
                                    {style.description}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* News text context */}
              <div className="flex flex-col gap-[8px]">
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
                  Текст новости
                </span>
                {hasText ? (
                  <div className="bg-[#F4F4F4] rounded-[8px] px-[14px] py-[10px] flex items-start gap-[10px]">
                    <FileText size={15} className="text-[#0F62FE] shrink-0 mt-[2px]" />
                    <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#525252] tracking-[0.16px]">
                      {truncatedText}
                    </p>
                  </div>
                ) : (
                  <div className="bg-[#FFF8E1] border border-[#FFE082] rounded-[8px] px-[14px] py-[10px] flex items-start gap-[10px]">
                    <Info size={15} className="text-[#F59E0B] shrink-0 mt-[2px]" />
                    <p className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#92400E] tracking-[0.16px]">
                      Сначала введите текст новости в редакторе. ИИ создаст обложку на основе содержания.
                    </p>
                  </div>
                )}
              </div>

              {/* Preview area */}
              <div className="flex flex-col gap-[8px]">
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
                  Предпросмотр
                </span>
                <div className="w-full h-[180px] rounded-[10px] overflow-hidden bg-[#F4F4F4] relative">
                  {generating ? (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-[12px]">
                      {/* Animated generation indicator */}
                      <div className="relative w-[48px] h-[48px]">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                          className="absolute inset-0"
                        >
                          <svg viewBox="0 0 48 48" className="w-full h-full">
                            <defs>
                              <linearGradient id="gen-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8A3FFC" />
                                <stop offset="100%" stopColor="#0F62FE" />
                              </linearGradient>
                            </defs>
                            <circle
                              cx="24" cy="24" r="20"
                              stroke="url(#gen-grad)" strokeWidth="3"
                              fill="none" strokeLinecap="round"
                              strokeDasharray="80 45"
                            />
                          </svg>
                        </motion.div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Wand2 size={18} className="text-[#8A3FFC]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-[2px]">
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] tracking-[0.16px]">
                          Генерация обложки...
                        </span>
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#8D8D8D] tracking-[0.16px]">
                          Стиль: {currentStyle.label}
                        </span>
                      </div>
                    </div>
                  ) : generatedImage ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full"
                    >
                      <ImageWithFallback src={generatedImage} alt="Generated cover" className="w-full h-full object-cover" />
                      {/* Overlay badge */}
                      <div className="absolute top-[10px] left-[10px] bg-black/60 backdrop-blur-sm rounded-[6px] px-[8px] py-[4px] flex items-center gap-[4px]">
                        <Sparkles size={11} className="text-[#BE95FF]" />
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-white tracking-[0.16px]">
                          {currentStyle.label}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-[8px]">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#E8E8E8] flex items-center justify-center">
                        <Sparkles size={18} className="text-[#A8A8A8]" />
                      </div>
                      <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#A8A8A8] tracking-[0.16px]">
                        Нажмите «Сгенерировать» для создания обложки
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-[24px] pb-[20px] pt-[4px] flex items-center justify-between gap-[12px]">
              <div className="flex items-center gap-[8px]">
                {generatedImage && !generating && (
                  <button
                    onClick={handleGenerate}
                    className="h-[36px] px-[14px] rounded-[8px] flex items-center gap-[6px] bg-[#F4F4F4] text-[#525252] hover:bg-[#E8E8E8] transition-colors font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px]"
                  >
                    <RefreshCw size={14} />
                    Ещё вариант
                  </button>
                )}
              </div>
              <div className="flex items-center gap-[8px]">
                <button
                  onClick={onClose}
                  className="h-[36px] px-[16px] rounded-[8px] font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px] text-[#525252] hover:bg-[#F4F4F4] transition-colors"
                >
                  Отмена
                </button>
                {generatedImage && !generating ? (
                  <button
                    onClick={handleApply}
                    className="h-[36px] px-[20px] rounded-[8px] bg-[#0F62FE] text-white font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px] hover:bg-[#0353E9] transition-colors flex items-center gap-[6px] shadow-[0px_1px_3px_rgba(15,98,254,0.3)]"
                  >
                    <Check size={14} />
                    Применить
                  </button>
                ) : (
                  <button
                    onClick={handleGenerate}
                    disabled={generating || !hasText}
                    className={`
                      h-[36px] px-[20px] rounded-[8px] font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px]
                      flex items-center gap-[6px] transition-all
                      ${generating || !hasText
                        ? 'bg-[#E0E0E0] text-[#A8A8A8] cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#8A3FFC] to-[#0F62FE] text-white hover:shadow-[0px_2px_8px_rgba(138,63,252,0.4)] shadow-[0px_1px_3px_rgba(138,63,252,0.2)]'
                      }
                    `}
                  >
                    <Sparkles size={14} />
                    {generating ? 'Генерация...' : 'Сгенерировать'}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}