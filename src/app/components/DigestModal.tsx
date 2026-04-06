import React, { useState, useCallback, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence, type PanInfo } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../../imports/svg-fkppnugprc";
import svgNavPaths from "../../imports/svg-bs5rxusb0f";

import imgAvatar1 from "figma:asset/29fe03a5fda5378cea559404953aed46264597fc.png";
import imgAvatar2 from "figma:asset/16718e4d2dc9e3c91484a9879830bc5f2fa215ca.png";
import imgAvatar3 from "figma:asset/182b5f1324793de09e45b39fa4dd97f4f4de551e.png";
import imgAvatar4 from "figma:asset/6831aa67e63c28c998ca4eaa0e8c1837e398cf82.png";
import imgAvatar5 from "figma:asset/f4a1c3f92dd8e9b5a03d477f0c5f1221975f1d4f.png";
import imgAvatar6 from "figma:asset/dea5a22192171381fe6f756a1237f654fdcae512.png";

interface DigestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Quiz options
const QUIZ_OPTIONS = [
  'ПромИнвест объявляет о внедрении цифровых двойников в производственные процессы.',
  'Компания представила новую платформу для анализа производительности.',
  'Запущен проект по автоматизации контроля качества продукции.',
  'ПромИнвест усиливает сотрудничество с университетами в области новых технологий.',
];
const CORRECT_ANSWER = 2;

// People data for slide 2
const IMPORTANT_PEOPLE = [
  { name: 'Анна симоновна', role: 'Дизайнер', avatar: imgAvatar1 },
  { name: 'Алена Константиновна', role: 'Продуктовый дизайнер', avatar: imgAvatar2 },
  { name: 'Сергей Петрович', role: 'Графический дизайнер', avatar: imgAvatar3 },
  { name: 'Мария Ивановна', role: 'UX/UI дизайнер', avatar: imgAvatar4 },
  { name: 'Дмитрий Александрович', role: 'Арт-директор', avatar: imgAvatar5 },
  { name: 'Екатерина Викторовна', role: 'Исследователь пользовательского...', avatar: imgAvatar6 },
];
const MANDATORY_PEOPLE = [
  { name: 'Анна симоновна', role: 'Дизайнер', avatar: imgAvatar1 },
  { name: 'Алена Константиновна', role: 'Продуктовый дизайнер', avatar: imgAvatar2 },
];

// News for slide 1
const DIGEST_NEWS = [
  { text: 'ПромИнвест ', link: 'инвестирует', rest: ' в разработку ИИ-системы для оптимизации логистики.' },
  { text: 'ПромИнвест ', link: 'объявляет', rest: ' о внедрении цифровых двойников в производственные процессы.' },
  { text: 'На заводах ПромИнвеста ', link: 'стартует', rest: ' пилотный проект с использованием VR-тренажеров для обучения персонала.' },
  { text: 'Искусственный интеллект ', link: 'поможет', rest: ' ПромИнвесту прогнозировать спрос и оптимизировать запасы.' },
  { text: 'ПромИнвест ', link: 'разрабатывает', rest: ' онлайн-платформу для обмена опытом между сотрудниками.' },
];

// Discussed news for slide 4
const DISCUSSED_NEWS = [
  {
    text: 'В дизайн-команде ',
    link: 'запущен',
    rest: ' пилотный проект по использованию ИИ в создании макетов.',
    reactions: [
      { emoji: '❤️', count: 45 },
      { emoji: '👍', count: 25 },
      { emoji: '👍', count: 12 },
    ],
    comments: '12 комментариев',
  },
  {
    text: 'Команда дизайна ПромИнвеста ',
    link: 'представила',
    rest: ' новый брендбук компании.',
    reactions: [
      { emoji: '👍', count: 66 },
      { emoji: '👎', count: 15 },
    ],
    comments: '9 комментариев',
  },
  {
    text: 'Дизайнеры ПромИнвеста ',
    link: 'выиграли',
    rest: ' престижную премию за лучший UX/UI дизайн приложения.',
    reactions: [
      { emoji: '❤️', count: 50 },
    ],
    comments: '18 комментариев',
  },
];

// -- SVG icons matching Figma --

function ShareIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 13.0125 14.0157">
        <path d={svgPaths.p1a504900} fill="white" />
      </svg>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center">
      <svg className="block size-[8px]" fill="none" viewBox="0 0 8 8">
        <path d={svgPaths.p314604c0} fill="white" />
      </svg>
    </div>
  );
}

function ChevronBackIcon() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" viewBox="0 0 5.7 10">
        <path d={svgNavPaths.paedcf0} fill="white" />
      </svg>
    </div>
  );
}

// Blue glow background element
function BlueGlow() {
  return (
    <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[816px] h-[462px] pointer-events-none">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1364 1010">
        <g filter="url(#filter_digest_glow)">
          <ellipse cx="682" cy="505" fill="#0F62FE" rx="408" ry="231" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1010" id="filter_digest_glow" width="1364" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation="137" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

// Pagination dots
function PaginationDots({ total, current, onSelect }: { total: number; current: number; onSelect: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-[8px] py-[16px] shrink-0 relative z-10">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="cursor-pointer p-0 border-0 bg-transparent"
        >
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle
              cx="4" cy="4" r="4"
              fill={i === current ? 'white' : '#E3E5E8'}
              fillOpacity={i === current ? 1 : 0.3}
            />
          </svg>
        </button>
      ))}
    </div>
  );
}

const ACTUAL_SLIDES = 5;
const SWIPE_THRESHOLD = 50;

// Hook to detect mobile viewport
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

export const DigestModal: React.FC<DigestModalProps> = ({ isOpen, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [quizRevealed, setQuizRevealed] = useState(false);
  const isMobile = useIsMobile();

  // Swipe via motion drag
  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    const { offset, velocity } = info;
    const swipe = Math.abs(offset.x) * velocity.x;
    
    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      // Swipe left → next
      if (currentSlide < ACTUAL_SLIDES - 1) {
        setDirection(1);
        setCurrentSlide(prev => prev + 1);
      }
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      // Swipe right → prev
      if (currentSlide > 0) {
        setDirection(-1);
        setCurrentSlide(prev => prev - 1);
      }
    }
  }, [currentSlide]);

  // Hide bottom nav on mobile when modal is open
  useEffect(() => {
    if (!isMobile) return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Hide the bottom navigation
      const bottomNav = document.querySelector('[data-bottom-nav]') as HTMLElement;
      if (bottomNav) bottomNav.style.display = 'none';
    } else {
      document.body.style.overflow = '';
      const bottomNav = document.querySelector('[data-bottom-nav]') as HTMLElement;
      if (bottomNav) bottomNav.style.display = '';
    }
    return () => {
      document.body.style.overflow = '';
      const bottomNav = document.querySelector('[data-bottom-nav]') as HTMLElement;
      if (bottomNav) bottomNav.style.display = '';
    };
  }, [isOpen, isMobile]);

  const handleClose = useCallback(() => {
    setCurrentSlide(0);
    setQuizAnswer(null);
    setQuizRevealed(false);
    onClose();
  }, [onClose]);

  const handleQuizSelect = useCallback((index: number) => {
    if (quizRevealed) return;
    setQuizAnswer(index);
    setQuizRevealed(true);
  }, [quizRevealed]);

  const navigate = useCallback((dir: number) => {
    setDirection(dir);
    setCurrentSlide(prev => prev + dir);
  }, []);

  const jumpTo = useCallback((target: number) => {
    setDirection(target > currentSlide ? 1 : -1);
    setCurrentSlide(target);
  }, [currentSlide]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  const renderSlide = (idx: number) => {
    switch (idx) {
      case 0: return <SlideDigest />;
      case 1: return <SlideStats />;
      case 2: return <SlideQuiz quizAnswer={quizAnswer} quizRevealed={quizRevealed} onSelect={handleQuizSelect} />;
      case 3: return <SlideDiscussed />;
      case 4: return <SlideFarewell onFinish={handleClose} />;
      default: return null;
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={`fixed inset-0 z-[200] flex items-center justify-center ${isMobile ? '' : 'py-[50px]'}`}
          onClick={handleClose}
        >
          {/* Backdrop — hidden on mobile since fullscreen */}
          {!isMobile && <div className="absolute inset-0 bg-black/75" />}

          {/* Navigation arrows — desktop only */}
          {!isMobile && currentSlide > 0 && (
            <button
              onClick={e => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-[calc(50%-253px)] top-1/2 -translate-y-1/2 z-[210] size-[40px] rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
          )}
          {!isMobile && currentSlide < ACTUAL_SLIDES - 1 && (
            <button
              onClick={e => { e.stopPropagation(); navigate(1); }}
              className="absolute right-[calc(50%-253px)] top-1/2 -translate-y-1/2 z-[210] size-[40px] rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center cursor-pointer transition-colors"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          )}

          {/* Modal card */}
          <motion.div
            initial={isMobile ? { y: '100%' } : { scale: 0.95, opacity: 0 }}
            animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1 }}
            exit={isMobile ? { y: '100%' } : { scale: 0.95, opacity: 0 }}
            transition={isMobile ? { type: 'spring', damping: 30, stiffness: 300 } : { duration: 0.2 }}
            onClick={e => e.stopPropagation()}
            className={`relative bg-[#1B1F29] overflow-hidden flex flex-col z-[205] ${
              isMobile
                ? 'w-full h-full rounded-none'
                : 'w-[450px] h-[calc(100vh-100px)] rounded-[12px]'
            }`}
          >
            {/* Blue glow background */}
            <BlueGlow />

            {/* Header buttons */}
            <div className={`flex items-center justify-between shrink-0 relative z-10 ${
              isMobile ? 'px-[16px] pt-[16px]' : 'px-[24px] pt-[24px]'
            }`}>
              {isMobile ? (
                /* Mobile: Back chevron + Share */
                <>
                  <button
                    onClick={currentSlide > 0 ? () => navigate(-1) : handleClose}
                    className="size-[40px] rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <ChevronBackIcon />
                  </button>
                  <button className="size-[40px] rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-colors">
                    <ShareIcon />
                  </button>
                </>
              ) : (
                /* Desktop: Share + Close */
                <>
                  <button className="size-[40px] rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-colors">
                    <ShareIcon />
                  </button>
                  <button
                    onClick={handleClose}
                    className="size-[40px] rounded-full bg-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.3)] flex items-center justify-center cursor-pointer transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </>
              )}
            </div>

            {/* Content with animation */}
            <div className="flex-1 overflow-hidden relative">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentSlide}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  drag={isMobile ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={isMobile ? handleDragEnd : undefined}
                  className={`absolute inset-0 overflow-y-auto pt-[24px] pb-[16px] ${
                    isMobile ? 'px-[16px]' : 'px-[24px]'
                  }`}
                  style={{ touchAction: isMobile ? 'pan-y' : undefined }}
                >
                  {renderSlide(currentSlide)}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className={isMobile ? 'pb-[env(safe-area-inset-bottom,16px)]' : ''}>
              <PaginationDots
                total={ACTUAL_SLIDES}
                current={currentSlide}
                onSelect={jumpTo}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// ---- Slide Components ----

function SlideDigest() {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="font-['IBM_Plex_Sans'] font-bold text-[28px] leading-[32px] text-white tracking-[0.16px] whitespace-pre-wrap mb-[12px]">
        <p className="mb-0">Дайджест главных новостей за неделю</p>
        <p>9–15 февраля</p>
      </div>
      <div className="flex flex-col gap-[8px]">
        {DIGEST_NEWS.map((item, i) => (
          <div key={i} className="bg-[rgba(171,192,255,0.1)] rounded-[12px] px-[16px] py-[12px]">
            <p className="font-['IBM_Plex_Sans'] text-[16px] leading-[22px] text-white tracking-[0] whitespace-pre-wrap">
              {item.text}
              <span className="text-[#78A9FF] underline decoration-solid cursor-pointer">{item.link}</span>
              {item.rest}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonRow({ name, role, avatar }: { name: string; role: string; avatar: string }) {
  return (
    <div className="flex items-center gap-[10px] px-[0px] py-[8px]">
      <div className="size-[36px] rounded-full overflow-hidden shrink-0">
        <ImageWithFallback src={avatar} alt={name} className="size-full object-cover" />
      </div>
      <div className="flex flex-col min-w-0">
        <span className="text-[14px] font-normal text-white leading-[18px] truncate font-['IBM_Plex_Sans']">{name}</span>
        <span className="text-white/70 font-normal leading-[16px] truncate font-['IBM_Plex_Sans'] text-[14px]">{role}</span>
      </div>
    </div>
  );
}

function SlideStats() {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2 className="font-['IBM_Plex_Sans'] font-bold text-[28px] leading-[32px] text-white tracking-[0.16px]">
        87% сотрудников читают новости
      </h2>

      <div className="flex flex-col gap-[8px]">
        <p className="font-normal text-white/80 leading-[18px] font-['IBM_Plex_Sans'] text-[16px] mx-[0px] mt-[0px] mb-[4px]">Не посмотрели важные новости</p>
        <div className="bg-[rgba(171,192,255,0.1)] rounded-[12px] px-[14px] py-[6px]">
          {IMPORTANT_PEOPLE.map((p, i) => (
            <PersonRow key={i} {...p} />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p className="font-normal text-white/80 leading-[18px] font-['IBM_Plex_Sans'] text-[16px] mx-[0px] my-[4px]">Не сделали обязательное действие</p>
        <div className="bg-[rgba(171,192,255,0.1)] rounded-[12px] px-[14px] py-[6px]">
          {MANDATORY_PEOPLE.map((p, i) => (
            <PersonRow key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideQuiz({ quizAnswer, quizRevealed, onSelect }: { quizAnswer: number | null; quizRevealed: boolean; onSelect: (i: number) => void }) {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[6px]">
        <h2 className="font-['IBM_Plex_Sans'] font-bold text-[28px] leading-[32px] text-white tracking-[0.16px]">
          Проверьте интуицию
        </h2>
        <p className="text-[14px] text-white/60 leading-[20px] tracking-[0.16px] font-['IBM_Plex_Sans']">
          Как вы думаете, какая новость самая обсуждаемая среди коллег?
        </p>
      </div>
      <div className="flex flex-col gap-[8px]">
        {QUIZ_OPTIONS.map((option, i) => {
          const isSelected = quizAnswer === i;
          const isCorrectOption = i === CORRECT_ANSWER;

          let bgColor = 'bg-[rgba(171,192,255,0.1)]';
          let borderStyle = 'border border-transparent';
          let radioIcon = (
            <div className="size-[20px] rounded-full border-2 border-white/40 shrink-0 mt-[2px]" />
          );

          if (quizRevealed) {
            if (isCorrectOption) {
              bgColor = 'bg-[rgba(66,190,101,0.15)]';
              borderStyle = 'border border-[#42BE65]';
              radioIcon = (
                <div className="size-[20px] rounded-full bg-[#42BE65] flex items-center justify-center shrink-0 mt-[2px]">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              );
            } else if (isSelected && !isCorrectOption) {
              bgColor = 'bg-[rgba(218,30,40,0.15)]';
              borderStyle = 'border border-[#DA1E28]';
              radioIcon = (
                <div className="size-[20px] rounded-full bg-[#DA1E28] flex items-center justify-center shrink-0 mt-[2px]">
                  <X size={12} className="text-white" strokeWidth={3} />
                </div>
              );
            }
          } else if (isSelected) {
            radioIcon = (
              <div className="size-[20px] rounded-full border-2 border-white flex items-center justify-center shrink-0 mt-[2px]">
                <div className="size-[10px] rounded-full bg-white" />
              </div>
            );
          }

          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              disabled={quizRevealed}
              className={`flex items-start gap-[10px] ${bgColor} ${borderStyle} rounded-[12px] px-[16px] py-[12px] text-left transition-colors cursor-pointer ${!quizRevealed ? 'hover:bg-[rgba(171,192,255,0.2)]' : ''}`}
            >
              {radioIcon}
              <span className="text-[16px] leading-[22px] text-white font-['IBM_Plex_Sans']">{option}</span>
            </button>
          );
        })}
      </div>

      {quizRevealed && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white/60 leading-[18px] text-center mt-[4px] font-['IBM_Plex_Sans'] text-[14px]"
        >
          {quizAnswer === CORRECT_ANSWER
            ? '46% сотрудников отметили эту новость как самую обсуждаемую за неделю'
            : `23 сотрудника выбрали этот вариант за неделю. Самая популярная новость — «Запущен проект по автоматиза...»`
          }
        </motion.p>
      )}
    </div>
  );
}

function SlideDiscussed() {
  return (
    <div className="flex flex-col gap-[12px]">
      <div className="flex flex-col gap-[4px]">
        <h2 className="font-['IBM_Plex_Sans'] font-bold text-[28px] leading-[32px] text-white tracking-[0.16px]">
          Самое обсуждаемое за неделю
        </h2>
        <p className="text-[13px] text-white/60 leading-[18px] font-['IBM_Plex_Sans']">
          А всего за неделю:<br />40 комментариев и 20 реакций
        </p>
      </div>
      <div className="flex flex-col gap-[8px]">
        {DISCUSSED_NEWS.map((item, i) => (
          <div key={i} className="bg-[rgba(171,192,255,0.1)] rounded-[12px] px-[16px] py-[12px] flex flex-col gap-[8px]">
            <p className="text-[16px] leading-[22px] text-white font-['IBM_Plex_Sans'] mx-[0px] mt-[0px] mb-[8px]">
              {item.text}
              <span className="text-[#78A9FF] underline decoration-solid cursor-pointer">{item.link}</span>
              {item.rest}
            </p>
            <div className="flex items-center gap-[6px] flex-wrap">
              {item.reactions.map((r, j) => (
                <span key={j} className="inline-flex items-center gap-[3px] bg-[rgba(255,255,255,0.15)] rounded-full text-[12px] px-[8px] h-[26px]">
                  <span className="text-[14px]">{r.emoji}</span>
                  <span className="text-white font-normal font-['IBM_Plex_Sans'] text-[14px]">{r.count}</span>
                </span>
              ))}
              <span className="text-white/50 ml-[2px] font-['IBM_Plex_Sans'] text-[14px]">{item.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SlideFarewell({ onFinish }: { onFinish: () => void }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <h2 className="font-['IBM_Plex_Sans'] font-bold text-[28px] leading-[32px] text-white tracking-[0.16px]">
        До встречи на следующей неделе
      </h2>
      <p className="text-[16px] text-white/60 leading-[22px] tracking-[0.16px] font-['IBM_Plex_Sans']">
        Соберём для вас главные по компании и важные новости. Загляните, чтобы ничего не пропустить.
      </p>
      <button
        onClick={onFinish}
        className="w-full h-[48px] bg-[#0F62FE] hover:bg-[#0043CE] text-white rounded-[4px] text-[14px] font-medium cursor-pointer transition-colors font-['IBM_Plex_Sans']"
      >
        Завершить
      </button>
    </div>
  );
}