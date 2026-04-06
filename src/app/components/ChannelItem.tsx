import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Notification } from './Notification';
import { X, Play } from 'lucide-react';
import { motion as Motion, AnimatePresence } from 'motion/react';

interface ChannelItemProps {
  id: string;
  title: string;
  subtitle?: string;
  lastMessage?: string;
  avatar?: string;
  initial?: string;
  initialBg?: string;
  badge?: string | number;
  atBadge?: boolean;
  isStream?: boolean;
  watching?: number;
  isPinned?: boolean;
  icon?: string;
  onClick?: () => void;
  lastMessageContent?: string;
  isActive?: boolean;
  isDesktop?: boolean;
  commentsCount?: number;
  lastNewsId?: string;
}

const COLORS = [
  'bg-[#C7FFDB]', // Green
  'bg-[#E9F2FF]', // Blue
  'bg-[#fffcc7]', // Yellow
  'bg-[#FFD7D7]', // Red
  'bg-[#E5D7FF]', // Purple
];

export const ChannelItem: React.FC<ChannelItemProps> = ({
  id, title, subtitle, lastMessage, lastMessageContent, avatar, initial, initialBg, badge, atBadge, isStream, watching, isPinned, icon, onClick, isActive, isDesktop, commentsCount, lastNewsId
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const displayInitial = initial || title.charAt(0).toUpperCase();

  const getCommentsText = (count: number): string => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) return 'комментариев';
    if (lastDigit === 1) return 'комментарий';
    if (lastDigit >= 2 && lastDigit <= 4) return 'комментария';
    return 'комментариев';
  };

  // Deterministic color based on title
  const colorIndex = title.length % COLORS.length;
  const bgClass = initialBg || COLORS[colorIndex];

  return (
    <>
      <div 
        onClick={(e) => {
          if (isStream) {
            e.stopPropagation();
            setShowVideo(true);
          } else if (onClick) {
            onClick();
          }
        }}
        className={`flex items-center gap-[12px] relative group ${onClick || isStream ? 'cursor-pointer' : ''} ${isActive && !isStream && isDesktop ? 'bg-[#0f62fe]' : 'hover:bg-gray-50'} transition-colors px-[20px] py-[12px]`}
      >
        {isActive && !isStream && isDesktop && (
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/30" />
        )}
        
        <div className="relative shrink-0">
          {avatar ? (
            <div className={`${isDesktop ? 'w-12 h-12' : 'w-[58px] h-[58px]'} rounded-full overflow-hidden transition-all duration-300`}>
              <ImageWithFallback src={avatar} alt={title} className="w-full h-full object-cover" />
            </div>
          ) : (
            <div className={`${isDesktop ? 'w-12 h-12' : 'w-[58px] h-[58px]'} rounded-full flex items-center justify-center ${initialBg === '#014cda' ? 'bg-[#014cda]' : bgClass} transition-all duration-300 relative`}>
               {/* Inner shadow and border effect from Figma for blue circles */}
               {initialBg === '#014cda' && (
                 <div className="absolute inset-0 rounded-full overflow-hidden isolation-isolate pointer-events-none">
                   <div 
                     className="absolute inset-0 rounded-full shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] mix-blend-color-dodge" 
                     style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                   />
                   <div className="absolute inset-0 rounded-full border border-[#397dfe]" aria-hidden="true" />
                 </div>
               )}
               <span className={`${isDesktop ? 'text-[16px]' : 'text-[18px]'} font-medium relative z-10 ${initialBg === '#014cda' || (isActive && isDesktop) ? 'text-white/90' : 'text-[#161616]/90'}`}>{displayInitial}</span>
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-[2px]">
            <div className="flex items-center gap-[4px] overflow-hidden">
              <h3 className={`text-[14px] leading-[18px] font-medium truncate font-['IBM_Plex_Sans'] ${isActive && isDesktop ? 'text-white' : 'text-[#161616]'}`}>{title}</h3>
            </div>
            
            {!isDesktop && isStream && (
              <div className="flex items-center gap-[6px]">
                <div className="relative shrink-0 w-[8px] h-[8px] flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="overflow-visible w-[24px] h-[24px] shrink-0">
                      {/* Outer pulse */}
                      <Motion.circle 
                        cx="12" cy="12" r="4" 
                        stroke="#0F62FE" 
                        strokeWidth={1.5}
                        initial={{ scale: 1, opacity: 0.6 }}
                        animate={{ 
                          scale: [1, 2.8], 
                          opacity: [0.6, 0]
                        }}
                        transition={{ 
                          duration: 2.2, 
                          repeat: Infinity, 
                          ease: [0.25, 0.1, 0.25, 1],
                          times: [0, 1]
                        }}
                        style={{ transformOrigin: 'center' }}
                      />
                      {/* Secondary soft pulse for smoothness */}
                      <Motion.circle 
                        cx="12" cy="12" r="4" 
                        stroke="#0F62FE" 
                        strokeWidth={1}
                        initial={{ scale: 1, opacity: 0.4 }}
                        animate={{ 
                          scale: [1, 2.2], 
                          opacity: [0.4, 0]
                        }}
                        transition={{ 
                          duration: 2.2, 
                          repeat: Infinity, 
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: 0.6,
                          times: [0, 1]
                        }}
                        style={{ transformOrigin: 'center' }}
                      />
                      {/* Static center dot */}
                      <circle cx="12" cy="12" r="2.5" fill="#054ADA" />
                    </svg>
                  </div>
                </div>
                <p className="text-[14px] text-[#525252] tracking-[0.16px] leading-[18px] font-['IBM_Plex_Sans']">
                  Сейчас онлайн · {watching} смотрят
                </p>
              </div>
            )}

            {!isDesktop && !isStream && (
              <>
                {!lastMessage && subtitle && (
                  <p className="text-[14px] text-[#525252] truncate leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans']">{subtitle}</p>
                )}

                {lastMessage && (
                  <div className="flex flex-col gap-1 mt-0.5">
                    <p className="text-[14px] font-normal text-[#525252] line-clamp-2 leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans']">
                       {lastMessage}{lastMessageContent ? `. ${lastMessageContent}` : ''}
                    </p>
                    {id === 'important' && (
                      null
                    )}
                  </div>
                )}
              </>
            )}

            {isDesktop && (
              <>
                {lastMessage && (
                  <p className={`text-[14px] font-normal line-clamp-2 leading-[18px] font-['IBM_Plex_Sans'] mt-0.5 ${isActive && isDesktop ? 'text-white/80' : 'text-[#525252]'}`}>
                     {lastMessage}{lastMessageContent ? `. ${lastMessageContent}` : ''}
                  </p>
                )}
              </>
            )}
          </div>
        </div>

        {isDesktop && subtitle && (
          <div className="absolute left-[64px] bottom-full mb-1 z-[100] hidden group-hover:block bg-[#161616]/85 backdrop-blur-sm text-white px-2 py-1.5 rounded-[4px] shadow-lg text-[11px] max-w-[220px] pointer-events-none transition-opacity duration-200">
            <p className="font-normal text-white/95 leading-[14px]">{subtitle}</p>
            <div className="absolute -bottom-1 left-4 w-1.5 h-1.5 bg-[#161616]/85 rotate-45" />
          </div>
        )}

        <div className="flex flex-col items-end gap-1 shrink-0">
          {badge && (
            <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 ${isActive && isDesktop ? 'bg-white' : 'bg-[#f2f4f8]'}`}>
              <span className={`text-[14px] leading-none text-center font-['IBM_Plex_Sans'] ${isActive && isDesktop ? 'text-[#0F62FE] font-medium' : 'text-[#6f6f6f]'}`}>{badge}</span>
            </div>
          )}
          {atBadge && (
            <div className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 ${isActive && isDesktop ? 'bg-white' : 'bg-[#0F62FE]'}`}>
              <span className={`text-[14px] leading-none text-center font-['IBM_Plex_Sans'] ${isActive && isDesktop ? 'text-[#0F62FE] font-medium' : 'text-white'}`}>@</span>
            </div>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isStream && showVideo && (
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" 
            onClick={() => setShowVideo(false)}
          >
            <Motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-xl overflow-hidden max-w-[900px] w-full aspect-video shadow-2xl" 
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors group"
              >
                 <X className="text-white w-6 h-6 transition-transform group-hover:rotate-90" />
              </button>
              
              <div className="w-full h-full bg-black flex items-center justify-center relative group cursor-default">
                <ImageWithFallback 
                  src={avatar || "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1920&auto=format&fit=crop"} 
                  alt={title} 
                  className="w-full h-full object-cover opacity-60" 
                />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                  <div className="w-24 h-24 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/30">
                    <Play className="text-white w-12 h-12 fill-white ml-1" />
                  </div>
                  <div className="px-4 py-1.5 bg-[#FF0000] rounded-[4px] text-white font-bold uppercase tracking-widest text-[14px] flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h2 className="text-white text-[24px] font-semibold leading-[30px] mb-2">{title}</h2>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-white/10 rounded backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 bg-[#054ADA] rounded-full" />
                      <span className="text-white text-[13px] font-medium">{watching} зрителей</span>
                    </div>
                    <span className="text-white/60 text-[13px]">Началось 12 минут назад</span>
                  </div>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
