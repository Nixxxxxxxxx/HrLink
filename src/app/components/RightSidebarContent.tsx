import React, { useState, useEffect, useRef } from 'react';
import { motion as Motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-9e055dmb5s";
import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";
import { CHANNELS_DATA, NewsItem, Channel } from '../data/channels';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';
import { DigestModal } from './DigestModal';

interface RightSidebarProps {
  onOpenComments?: (newsId: string) => void;
  onChannelSelect?: (channelId: string, newsId?: string) => void;
}

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

function DigestImages() {
  return (
    <div className="h-[106px] relative shrink-0 w-full mb-4">
      <div className="absolute left-1/2 top-1/2 -translate-x-[60%] -translate-y-1/2 rotate-[-8.83deg]">
        <div className="h-[72px] w-[101px] relative rounded-[10px] overflow-hidden shadow-lg">
          <ImageWithFallback alt="" className="absolute inset-0 object-cover size-full" src={imgRectangle32} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-[10%] -translate-y-[40%] rotate-[15.79deg]">
        <div className="h-[50px] w-[75px] relative rounded-[10px] overflow-hidden shadow-lg">
          <ImageWithFallback alt="" className="absolute inset-0 object-cover size-full" src={imgRectangle41} />
        </div>
      </div>
    </div>
  );
}

function Digest({ onOpenDigest }: { onOpenDigest: () => void }) {
  return (
    <div className="bg-[#0F62FE]/10 rounded-[8px] p-6 flex flex-col items-center text-center w-full">
      <DigestImages />
      <div className="flex flex-col gap-1 mb-4">
        <h3 className="font-semibold text-[16px] text-[#161616] font-['Montserrat']">Все важное за 2 минуты</h3>
        <p className="text-[14px] text-[#161616] tracking-[0.16px]">Дайджест с новостями, которые важно не пропустить</p>
      </div>
      <button 
        onClick={onOpenDigest}
        className="bg-[#393939] hover:bg-[#2a2a2a] text-white text-[14px] px-4 py-2.5 rounded-[4px] transition-colors font-medium cursor-pointer"
      >
        Посмотреть дайджест
      </button>
    </div>
  );
}

function PinnedNews({ news, channel, onOpenComments, onChannelSelect }: { news: NewsItem, channel: Channel, onOpenComments?: (id: string) => void, onChannelSelect?: (id: string, nid?: string) => void }) {
  const [reactions, setReactions] = useState(news.initialReactions);
  const [userReaction, setUserReaction] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [bursts, setBursts] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);
  const burstIdRef = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const [localCommentsCount, setLocalCommentsCount] = useState(news.commentsCount);

  useEffect(() => {
    const savedState = localStorage.getItem(`news_state_${news.id}`);
    if (savedState) {
      const { reactions: savedReactions, userReaction: savedUserReaction } = JSON.parse(savedState);
      setReactions(savedReactions);
      setUserReaction(savedUserReaction);
    }

    const updateCommentsCount = () => {
      const savedComments = localStorage.getItem(`comments_${news.id}`);
      if (savedComments) {
        setLocalCommentsCount(JSON.parse(savedComments).length);
      }
    };

    updateCommentsCount();
    window.addEventListener('storage', updateCommentsCount);
    window.addEventListener('focus', updateCommentsCount);
    return () => {
      window.removeEventListener('storage', updateCommentsCount);
      window.removeEventListener('focus', updateCommentsCount);
    };
  }, [news.id]);

  useEffect(() => {
    const state = { reactions, userReaction };
    localStorage.setItem(`news_state_${news.id}`, JSON.stringify(state));
  }, [reactions, userReaction, news.id]);

  const toggleReaction = (emoji: string, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (userReaction === emoji) {
      setReactions(prev => prev.map(r => r.emoji === emoji ? { ...r, count: r.count - 1 } : r).filter(r => r.count > 0 || news.initialReactions.some(ir => ir.emoji === r.emoji)));
      setUserReaction(null);
    } else {
      if (e && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
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
    <div 
      ref={cardRef}
      onClick={() => onChannelSelect?.(channel.id, news.id)}
      className="bg-white rounded-[8px] overflow-hidden shadow-sm border border-[#E0E4EA] flex flex-col w-full hover:shadow-md transition-shadow cursor-pointer relative"
    >
      <AnimatePresence>
        {bursts.map(burst => (
          <div key={burst.id} className="absolute inset-0 z-[60] pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <EmojiParticle key={`${burst.id}-emoji-${i}`} index={i} origin={{ x: burst.x, y: burst.y }} emoji={burst.emoji} />
            ))}
          </div>
        ))}
      </AnimatePresence>

      <div className="h-[148px] relative w-full">
        {news.image && <ImageWithFallback alt="" className="absolute inset-0 object-cover size-full" src={news.image} />}
        
        {/* Label "Important" */}
        <div className="absolute bottom-2 left-3 bg-[#014cda] h-[22px] px-[10px] rounded-[32px] flex items-center justify-center shadow-[inset_0px_-4px_12px_rgba(255,255,255,0.55)]">
          <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px]">Важное</span>
        </div>

        {/* Pin Icon */}
        <div className="absolute top-2 right-2 size-[22px] bg-[#616161]/40 backdrop-blur-[64px] rounded-full flex items-center justify-center shadow-[inset_0px_-4px_12px_rgba(255,255,255,0.55)]">
           <svg className="size-3" viewBox="0 0 13 13" fill="none">
             <path d={svgPaths.p2431c90} fill="white" />
           </svg>
        </div>

        {/* Date & Views */}
        <div className="absolute bottom-2 right-3 backdrop-blur-[32px] bg-[#616161]/60 rounded-[32px] px-3 py-0.5 flex items-center gap-2 shadow-[inset_0px_-4px_12px_rgba(255,255,255,0.55)]">
          <span className="text-[12px] text-white tracking-[0.32px]">{news.date}</span>
          <div className="flex items-center gap-1">
            <svg className="size-[14px]" viewBox="0 0 14 14" fill="none">
              <path d={svgPaths.p3963f5f0} fill="white" />
              <path d={svgPaths.p231bf200} fill="white" />
            </svg>
            <span className="text-[12px] text-white tracking-[0.32px]">{news.views > 1000 ? (news.views/1000).toFixed(1) + 'k' : news.views}</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {/* Short essence of the news in 4 lines without ellipsis */}
        <p className="text-[14px] text-[#161616] leading-[20px] tracking-[0.16px] font-medium overflow-hidden h-[80px]">
          {news.content}
        </p>
        
        <div className="flex gap-1 items-center">
          {reactions.map((reaction, idx) => (
            <button 
              key={idx} 
              onClick={(e) => toggleReaction(reaction.emoji, e)}
              className={`h-8 px-2 rounded-[50px] flex items-center gap-1.5 transition-colors border ${userReaction === reaction.emoji ? 'bg-[#E6F0FF] border-[#0F62FE]' : 'bg-white border-[#E0E4EA] hover:bg-gray-50'}`}
            >
              <span className="text-[18px]">{reaction.emoji}</span>
              <span className={`text-[14px] ${userReaction === reaction.emoji ? 'text-[#0F62FE] font-medium' : 'text-[#161616]'}`}>{reaction.count}</span>
            </button>
          ))}
          
          <div className="relative">
            <AnimatePresence>
              {showEmojiPicker && (
                <Motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 10 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9, y: 10 }} 
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white border border-[#E0E4EA] rounded-full px-2 py-1.5 flex gap-2 shadow-[0px_12px_32px_rgba(0,0,0,0.15)] z-[100] min-w-[max-content]"
                >
                  {['👍', '🔥', '❤️', '👏', '😂', '🤡', '🐳'].map(emoji => (
                    <button 
                      key={emoji} 
                      onClick={(e) => { toggleReaction(emoji, e); setShowEmojiPicker(false); }} 
                      className="text-[20px] hover:scale-125 transition-transform active:scale-95 p-1 cursor-pointer"
                    >
                      {emoji}
                    </button>
                  ))}
                </Motion.div>
              )}
            </AnimatePresence>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowEmojiPicker(!showEmojiPicker); }}
              className={`border size-8 rounded-[50px] flex items-center justify-center transition-colors ${showEmojiPicker ? 'bg-[#F2F4F8] border-[#0F62FE]' : 'bg-white border-[#E0E4EA] hover:bg-gray-50'}`}
            >
              <svg className="size-4" viewBox="0 0 16 16" fill="none">
                <path d={svgPaths.p20572000} fill={showEmojiPicker ? '#0F62FE' : '#161616'} />
                <path d={svgPaths.p39adcf00} fill={showEmojiPicker ? '#0F62FE' : '#161616'} />
                <path d={svgPaths.p2e22d300} fill={showEmojiPicker ? '#0F62FE' : '#161616'} />
                <path d={svgPaths.p24778380} fill={showEmojiPicker ? '#0F62FE' : '#161616'} />
                <path d={svgPaths.p2a86e940} fill={showEmojiPicker ? '#0F62FE' : '#161616'} />
              </svg>
            </button>
          </div>

          <button 
            onClick={(e) => { e.stopPropagation(); toast.success('Поделиться'); }}
            className="bg-white border border-[#E0E4EA] size-8 rounded-[50px] flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg className="size-4" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p1ed41470} fill="#161616" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        onClick={(e) => {
          e.stopPropagation();
          onOpenComments?.(news.id);
        }}
        className="border-t border-[#E0E4EA] p-3 flex items-center justify-between group"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {/* Mock avatars for comments */}
            <div className="size-8 rounded-full border-[1.6px] border-white overflow-hidden bg-gray-100">
              <ImageWithFallback src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop" alt="" className="size-full object-cover" />
            </div>
            <div className="size-8 rounded-full border-[1.6px] border-white overflow-hidden bg-gray-100 -ml-2">
              <ImageWithFallback src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="" className="size-full object-cover" />
            </div>
            <div className="size-8 rounded-full border-[1.6px] border-white overflow-hidden bg-[#DA1E28] -ml-2 flex items-center justify-center">
              <span className="text-[12px] text-white font-medium">{channel.initial || channel.title.substring(0, 2).toUpperCase()}</span>
            </div>
          </div>
          <span className="text-[14px] text-[#525252] group-hover:text-[#161616] transition-colors">
            {localCommentsCount} {getCommentsText(localCommentsCount)}
          </span>
        </div>
        <svg className="size-4 text-[#161616]" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p71d6e50} fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

function getCommentsText(count: number): string {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'комментариев';
  if (lastDigit === 1) return 'комментарий';
  if (lastDigit >= 2 && lastDigit <= 4) return 'комментария';
  return 'комментариев';
}

export function RightSidebarContent({ onOpenComments, onChannelSelect }: RightSidebarProps) {
  const [digestOpen, setDigestOpen] = useState(false);
  // Find important channel and its latest news
  const importantChannel = CHANNELS_DATA.find(c => c.id === 'important');
  const latestNews = importantChannel?.news[importantChannel.news.length - 1];

  return (
    <div className="flex flex-col gap-3 w-full">
      <Digest onOpenDigest={() => setDigestOpen(true)} />
      <DigestModal isOpen={digestOpen} onClose={() => setDigestOpen(false)} />
      {latestNews && importantChannel && (
        <PinnedNews 
          news={latestNews} 
          channel={importantChannel} 
          onOpenComments={onOpenComments}
          onChannelSelect={onChannelSelect}
        />
      )}
    </div>
  );
}