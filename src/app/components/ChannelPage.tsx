import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Channel, NewsItem } from '../data/channels';
import { toast } from 'sonner';
import { BackButton } from './BackButton';
import svgPaths from "../../imports/svg-ynjuohcfdf";

import { ChannelHeader } from './ChannelHeader';
import { Button } from './Button';

interface ChannelPageProps {
  channel: Channel;
  onBack: () => void;
  onOpenComments: (newsId: string) => void;
  scrollToMessageId?: string | null;
  isDesktop?: boolean;
  isSubscribed?: boolean;
  onToggleSubscribe?: (id: string) => void;
}

const getFullDate = (dateStr: string) => {
  if (!dateStr) return '';
  const months: Record<string, string> = {
    'янв': 'января', 'фев': 'февраля', 'мар': 'марта', 'апр': 'апреля',
    'май': 'мая', 'июн': 'июня', 'июл': 'июля', 'авг': 'августа',
    'сен': 'сентября', 'окт': 'октября', 'ноя': 'ноября', 'дек': 'декабря'
  };
  const parts = dateStr.split(' ');
  if (parts.length >= 2) {
    const day = parts[0];
    const monthPart = parts[1].toLowerCase().replace(/[^а-яa-z]/g, '');
    if (months[monthPart]) {
      return `${day} ${months[monthPart]}`;
    }
  }
  return dateStr;
};

export const ChannelPage: React.FC<ChannelPageProps> = ({ 
  channel, 
  onBack, 
  onOpenComments,
  scrollToMessageId,
  isDesktop,
  isSubscribed: initialSubscribed = true,
  onToggleSubscribe
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDate, setActiveDate] = useState<string>('');
  const isSystemChannel = ['important', 'prominvest', 'dev-team'].includes(channel.id);

  const sortedNews = [...channel.news].sort((a, b) => {
    const months: Record<string, number> = {
      'янв': 0, 'фев': 1, 'мар': 2, 'апр': 3, 'май': 4, 'июн': 5,
      'июл': 6, 'авг': 7, 'сен': 8, 'окт': 9, 'ноя': 10, 'дек': 11
    };
    const parseDate = (d: string) => {
      try {
        const parts = d.split(' ');
        const day = parseInt(parts[0]);
        const monthStr = parts[1].replace(',', '').toLowerCase().substring(0, 3);
        const timeParts = parts[2].split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        return new Date(2026, months[monthStr] || 0, day, hours, minutes).getTime();
      } catch (e) {
        return 0;
      }
    };
    return parseDate(a.date) - parseDate(b.date);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        if (scrollToMessageId) {
          const el = document.getElementById(`news-${scrollToMessageId}`);
          if (el) {
            // Use scrollTo for more reliable smooth animation on some browsers
            const container = scrollRef.current;
            const elementTop = el.offsetTop;
            const containerHeight = container.offsetHeight;
            const elementHeight = el.offsetHeight;
            
            container.scrollTo({
              top: elementTop - (containerHeight / 2) + (elementHeight / 2),
              behavior: 'smooth'
            });

            // Add a temporary highlight effect
            el.classList.add('bg-[#F2F4F8]');
            setTimeout(() => {
              el.classList.remove('bg-[#F2F4F8]');
            }, 2000);
            return;
          }
        }
        
        // Check if we've been to this channel before
        const lastScrollKey = `last_scroll_${channel.id}`;
        const savedScroll = localStorage.getItem(lastScrollKey);
        
        if (savedScroll !== null) {
          scrollRef.current.scrollTop = parseInt(savedScroll, 10);
        } else {
          // For initial entry to the bottom, we can also make it smooth or keep it instant
          // Usually bottom jump on first load is better instant, but user asked for smooth on "anchor"
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }
    }, 100); // Reduced delay for faster response
    return () => clearTimeout(timer);
  }, [scrollToMessageId, channel.id]);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    
    // Save current scroll position
    localStorage.setItem(`last_scroll_${channel.id}`, container.scrollTop.toString());
    
    const items = container.querySelectorAll('.news-item');
    let currentActiveDate = '';

    for (const item of Array.from(items)) {
      const rect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      if (rect.top <= containerRect.top + 120) {
        const dateAttr = item.getAttribute('data-date');
        if (dateAttr) currentActiveDate = dateAttr.split(',')[0].trim();
      }
    }
    
    if (currentActiveDate && currentActiveDate !== activeDate) {
      setActiveDate(currentActiveDate);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F2F4F8] relative overflow-hidden">
      {!isDesktop && (
        <header className="bg-white shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] px-4 flex items-center h-[72px] shrink-0 z-50 rounded-bl-[8px] rounded-br-[8px] border-b border-[#E0E4EA]">
          <BackButton onClick={onBack} />
          <div className="flex-1 min-w-0 flex flex-col items-center">
            <h2 className="text-[14px] font-medium text-black truncate leading-[18px] font-['IBM_Plex_Sans']">{channel.title}</h2>
            <p className="text-[14px] text-[#525252] tracking-[0.16px] truncate leading-[18px] font-['IBM_Plex_Sans']">
              {channel.subtitle || 'Все новости мира в одном канале'}
            </p>
          </div>
          <div className="w-10 h-10 shrink-0" />
        </header>
      )}

      <AnimatePresence>
        {activeDate && (
          <Motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute ${isDesktop ? 'top-[100px]' : 'top-[82px]'} left-1/2 -translate-x-1/2 z-40`}
          >
            <div className="backdrop-blur-[32px] bg-[rgba(82,82,82,0.6)] h-[22px] px-[10px] rounded-[32px] flex items-center justify-center overflow-hidden relative">
              <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px] relative z-10 whitespace-nowrap">
                {getFullDate(activeDate)}
              </span>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto flex flex-col items-center px-4 pt-[0px] pb-[88px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        <div className={`w-full flex flex-col ${isDesktop ? 'max-w-full px-0' : 'pt-4'}`}>
          {isDesktop && (
            <div className="sticky top-0 z-[60] bg-[#F2F4F8] w-full shrink-0 px-0 pt-[8px] pb-[0px]">
              <ChannelHeader 
                title={channel.title}
                subtitle={channel.subtitle}
                isSubscribed={initialSubscribed}
                isSystemChannel={isSystemChannel}
                onToggleSubscribe={() => {
                  if (onToggleSubscribe) onToggleSubscribe(channel.id);
                  toast.success(initialSubscribed ? 'Вы отписались от канала' : 'Вы подписались на канал');
                }}
              />
            </div>
          )}
          <div className="flex flex-col gap-2 items-center px-[0px] pt-[12px] pb-[0px]">
            <div className={`${isDesktop ? 'max-w-[384px]' : 'w-full'} flex flex-col gap-2`}>
              {sortedNews.map((news) => (
                <NewsPost key={news.id} news={news} onOpenComments={onOpenComments} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {!isDesktop && (
        <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none z-50">
          <div className="mx-auto pointer-events-auto max-w-[400px]">
            <div className="flex justify-center w-full">
            <Button
              variant={isSystemChannel ? 'system' : initialSubscribed ? 'secondary' : 'primary'}
              onClick={() => {
                if (onToggleSubscribe) onToggleSubscribe(channel.id);
                toast.success(initialSubscribed ? 'Вы отписались от канала' : 'Вы подписались на канал');
              }}
              className="w-full sm:w-auto"
            >
              {isSystemChannel ? 'Системный канал' : initialSubscribed ? 'Вы подписаны' : 'Подписаться на канал'}
            </Button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

const EmojiParticle: React.FC<{ index: number; origin: { x: number; y: number }; emoji: string }> = ({ index, origin, emoji }) => {
  const angle = (Math.random() * 90 - 45) - 90;
  const velocity = 15 + Math.random() * 25;
  const radians = angle * (Math.PI / 180);
  const vx = Math.cos(radians) * velocity;
  const vy = Math.sin(radians) * velocity;
  const rotation = Math.random() * 90 - 45;

  return (
    <Motion.div
      initial={{ x: origin.x, y: origin.y, scale: 0, rotate: 0, opacity: 1 }}
      animate={{ 
        x: origin.x + vx * 6, 
        y: [origin.y, origin.y + vy * 8, origin.y + vy * 4 + 40],
        scale: [0, 1.4, 1, 0],
        rotate: rotation,
        opacity: [1, 1, 1, 0]
      }}
      transition={{ duration: 0.7 + Math.random() * 0.3, times: [0, 0.2, 0.8, 1], ease: "easeOut" }}
      className="absolute z-[70] pointer-events-none select-none flex items-center justify-center w-6 h-6"
    >
      <span className="text-[24px] drop-shadow-sm">{emoji}</span>
    </Motion.div>
  );
};

const NewsPost: React.FC<{ news: NewsItem; onOpenComments: (id: string) => void }> = ({ news, onOpenComments }) => {
  const [reactions, setReactions] = useState(news.initialReactions);
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
  const [isRead, setIsRead] = useState(news.isRead || false);
  const [localCommentsCount, setLocalCommentsCount] = useState(news.commentsCount);
  const burstIdRef = useRef(0);
  const postRef = useRef<HTMLDivElement>(null);

  const isImportant = news.type === 'important' || news.type === 'important_mandatory';
  const isMandatory = news.type === 'mandatory' || news.type === 'important_mandatory';
  const isAlwaysExpanded = isImportant || isMandatory;

  // Persistence logic for reactions, read state and comments count
  useEffect(() => {
    const savedState = localStorage.getItem(`news_state_${news.id}`);
    if (savedState) {
      const { reactions: savedReactions, userReaction: savedUserReaction, isRead: savedIsRead } = JSON.parse(savedState);
      setReactions(savedReactions);
      setUserReaction(savedUserReaction);
      setIsRead(savedIsRead);
    }

    const updateCommentsCount = () => {
      const savedComments = localStorage.getItem(`comments_${news.id}`);
      if (savedComments) {
        setLocalCommentsCount(JSON.parse(savedComments).length);
      }
    };

    updateCommentsCount();
    window.addEventListener('storage', updateCommentsCount);
    window.addEventListener('focus', updateCommentsCount); // Update when returning to tab
    return () => {
      window.removeEventListener('storage', updateCommentsCount);
      window.removeEventListener('focus', updateCommentsCount);
    };
  }, [news.id]);

  useEffect(() => {
    const state = { reactions, userReaction, isRead };
    localStorage.setItem(`news_state_${news.id}`, JSON.stringify(state));
  }, [reactions, userReaction, isRead, news.id]);

  const toggleReaction = (emoji: string, e?: React.MouseEvent) => {
    if (userReaction === emoji) {
      setReactions(prev => prev.map(r => r.emoji === emoji ? { ...r, count: r.count - 1 } : r).filter(r => r.count > 0 || news.initialReactions.some(ir => ir.emoji === r.emoji)));
      setUserReaction(null);
    } else {
      if (e && postRef.current) {
        const rect = postRef.current.getBoundingClientRect();
        const newBurst = { id: burstIdRef.current++, x: e.clientX - rect.left, y: e.clientY - rect.top, emoji };
        setBursts(prev => [...prev, newBurst]);
        setTimeout(() => setBursts(prev => prev.filter(b => b.id !== newBurst.id)), 1500);
      }
      setReactions(prev => {
        let next = [...prev];
        if (userReaction) next = next.map(r => r.emoji === userReaction ? { ...r, count: Math.max(0, r.count - 1) } : r);
        const exists = next.find(r => r.emoji === emoji);
        if (exists) next = next.map(r => r.emoji === emoji ? { ...r, count: r.count + 1 } : r);
        else next.push({ emoji, count: 1 });
        return next.filter(r => r.count > 0 || news.initialReactions.some(ir => ir.emoji === r.emoji));
      });
      setUserReaction(emoji);
    }
  };

  return (
    <div id={`news-${news.id}`} ref={postRef} className="news-item bg-white rounded-lg overflow-hidden flex flex-col w-full shrink-0 relative" data-date={news.date}>
      <AnimatePresence>
        {bursts.map(burst => (
          <div key={burst.id} className="absolute inset-0 z-[60] pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <EmojiParticle key={`${burst.id}-emoji-${i}`} index={i} origin={{ x: burst.x, y: burst.y }} emoji={burst.emoji} />
            ))}
          </div>
        ))}
      </AnimatePresence>

      <div className="relative w-full aspect-[21/9] bg-gray-100 shrink-0">
        {news.image && <ImageWithFallback src={news.image} alt="" className="w-full aspect-[21/9] object-cover" />}
        {isImportant && (
          <div className="absolute bottom-2 left-2 backdrop-blur-[32px] bg-[#014cda] h-[22px] px-[10px] rounded-[32px] flex items-center justify-center overflow-hidden">
             <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px] relative z-10">Важное</span>
             <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
          </div>
        )}
        <div className="absolute bottom-2 right-2 backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] h-[22px] px-[10px] rounded-[32px] flex items-center gap-[10px] overflow-hidden">
          <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px] relative z-10">{news.date.split(',')[1].trim()}</span>
          <div className="flex items-center gap-[4px] relative z-10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d={svgPaths.p3963f5f0} fill="white" /><path d={svgPaths.p231bf200} fill="white" /></svg>
            <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px]">{news.views}</span>
          </div>
          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-[16px] font-semibold text-[#161616] leading-[20px] font-['Montserrat']">{news.title}</h3>
        <p className={`text-[14px] text-[#525252] leading-[20px] font-['IBM_Plex_Sans'] tracking-[0.16px] whitespace-pre-line ${(isAlwaysExpanded || isExpanded) ? '' : 'line-clamp-3'}`}>{news.content}</p>
        {!isAlwaysExpanded && news.content.length > 120 && (
          <button onClick={() => setIsExpanded(!isExpanded)} className="text-[14px] font-medium text-[#0f62fe] text-left mt-1 font-['IBM_Plex_Sans']">{isExpanded ? 'Скрыть' : 'Показать больше'}</button>
        )}
      </div>

      {isMandatory && (
        <div className="px-4 pb-4">
          <Motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => { setIsRead(true); toast.success('Ознакомлено'); }}
            disabled={isRead}
            className={`w-full h-[48px] rounded-[12px] font-medium text-[16px] font-['IBM_Plex_Sans'] transition-all flex items-center justify-center gap-2 ${
              isRead ? 'bg-[#F2F4F7] text-[#98A2B3] cursor-default' : 'bg-[#0F62FE] text-white shadow-[0px_4px_12px_rgba(15,98,254,0.2)] active:bg-[#0050E6]'
            }`}
          >
            {isRead && <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M16.6666 5L7.49992 14.1667L3.33325 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            {isRead ? 'Ознакомлен' : 'Я ознакомился'}
          </Motion.button>
        </div>
      )}

      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {[...reactions].sort((a, b) => b.count - a.count).map((r) => (
            <Motion.button 
              key={r.emoji}
              whileTap={{ scale: 0.75 }}
              onClick={(e) => toggleReaction(r.emoji, e)}
              className={`flex items-center gap-2 px-3 h-[32px] rounded-full transition-all border ${userReaction === r.emoji ? 'bg-[#E6F0FF] border-[#0F62FE]' : 'bg-white border-[#E0E4EA] active:bg-[#F2F4F8]'}`}
            >
              <span className="text-[18px]">{r.emoji}</span>
              <span className={`text-[14px] font-['IBM_Plex_Sans'] tracking-[0.16px] ${userReaction === r.emoji ? 'text-[#0F62FE] font-medium' : 'text-[#161616]'}`}>{r.count}</span>
            </Motion.button>
          ))}
          <div className="relative">
            <AnimatePresence>
              {showEmojiPicker && (
                <Motion.div initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 10 }} className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-[#E0E4EA] rounded-full px-2 py-1.5 flex gap-2 shadow-[0px_12px_32px_rgba(0,0,0,0.15)] z-[100] min-w-[max-content]">
                  {['👍', '🔥', '❤️', '👏', '😂', '🤡', '🐳'].map(emoji => (
                    <button key={emoji} onClick={(e) => { toggleReaction(emoji, e); setShowEmojiPicker(false); }} className="text-[20px] hover:scale-125 transition-transform active:scale-95 p-1 cursor-pointer">{emoji}</button>
                  ))}
                </Motion.div>
              )}
            </AnimatePresence>
            <button onClick={() => setShowEmojiPicker(!showEmojiPicker)} className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all cursor-pointer active:scale-75 ${showEmojiPicker ? 'bg-[#F2F4F8] border-[#0F62FE] shadow-inner' : 'bg-white border-[#E0E4EA] active:bg-[#F2F4F8]'}`}>
              <div className="w-4 h-4 overflow-clip relative shrink-0">
                <div className="absolute inset-[59.63%_28.59%_25.16%_28.59%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84999 2.4338"><path d={svgPaths.p39adcf00} fill={showEmojiPicker ? '#0F62FE' : '#161616'} /></svg></div>
                <div className="absolute inset-[0_6.25%_68.75%_62.5%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5"><path d={svgPaths.p2e22d300} fill={showEmojiPicker ? '#0F62FE' : '#161616'} /></svg></div>
                <div className="absolute bottom-1/2 left-[28.12%] right-[56.25%] top-[34.37%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50004 2.50004"><path d={svgPaths.p24778380} fill={showEmojiPicker ? '#0F62FE' : '#161616'} /></svg></div>
                <div className="absolute bottom-1/2 left-[56.25%] right-[28.12%] top-[34.37%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50003 2.50004"><path d={svgPaths.p2a86e940} fill={showEmojiPicker ? '#0F62FE' : '#161616'} /></svg></div>
                <div className="absolute inset-[6.25%_6.26%_6.25%_6.24%]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9985 13.9985"><path d={svgPaths.p20572000} fill={showEmojiPicker ? '#0F62FE' : '#161616'} /></svg></div>
              </div>
            </button>
          </div>
        </div>
        <Motion.button whileTap={{ scale: 0.75 }} onClick={() => toast.success('Поделиться')} className="w-8 h-8 rounded-full border border-[#E0E4EA] flex items-center justify-center bg-white active:bg-[#F2F4F8]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p1ed41470} fill="#161616" /></svg>
        </Motion.button>
      </div>

      <div onClick={() => onOpenComments(news.id)} className="border-t border-[#E0E4EA] h-[48px] flex items-center justify-between px-4 hover:bg-[#F2F4F8] cursor-pointer transition-colors">
        <div className="flex items-center gap-2">
          {localCommentsCount > 0 ? (
            <>
              <div className="flex -space-x-2 mr-1">
                {Array.from({ length: Math.min(localCommentsCount, 3) }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-gray-200 relative shadow-sm" 
                    style={{ zIndex: 5 - i }}
                  >
                    <ImageWithFallback 
                      src={`https://i.pravatar.cc/100?u=${news.id}-${i}`} 
                      alt="" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
              </div>
              <span className="text-[14px] text-[#525252] font-medium font-['IBM_Plex_Sans'] tracking-[0.16px]">
                {localCommentsCount} {getCommentsText(localCommentsCount)}
              </span>
            </>
          ) : (
            <span className="text-[14px] text-[#525252] font-medium font-['IBM_Plex_Sans'] tracking-[0.16px]">Прокомментировать</span>
          )}
        </div>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </div>
    </div>
  );
};

function getCommentsText(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'комментариев';
  if (lastDigit === 1) return 'комментарий';
  if (lastDigit >= 2 && lastDigit <= 4) return 'комментария';
  return 'комментариев';
}