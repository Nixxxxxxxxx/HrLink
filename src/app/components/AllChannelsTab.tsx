import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Channel } from '../data/channels';

interface RecommendationItemProps {
  id: string;
  title: string;
  subtitle: string;
  avatar?: string;
  initial?: string;
  initialBg?: string;
  icon?: string;
  onClick: () => void;
  isSubscribed?: boolean;
  className?: string;
  onToggleSubscribe?: (id: string) => void;
}

const RecommendationItem: React.FC<RecommendationItemProps> = ({
  id, title, subtitle, avatar, initial, initialBg, icon, onClick, isSubscribed, className, onToggleSubscribe
}) => {
  const displayInitial = initial || title.charAt(0).toUpperCase();

  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-[12px] shrink-0 cursor-pointer active:bg-black/5 transition-colors py-[6px] ${className || 'w-[300px] mr-[36px]'}`}
    >
      <div className="relative shrink-0 w-[58px] h-[58px] lg:w-12 lg:h-12">
        {avatar ? (
          <div className="w-full h-full rounded-full overflow-hidden">
            <ImageWithFallback src={avatar} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className={`w-full h-full rounded-full flex items-center justify-center relative overflow-hidden ${initialBg === '#014cda' ? 'bg-[#014cda]' : 'bg-[#E9F2FF]'}`}>
            {initialBg === '#014cda' && (
              <>
                <div 
                  className="absolute inset-0 rounded-full shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] mix-blend-color-dodge pointer-events-none" 
                  style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
                />
                <div className="absolute inset-0 rounded-full border border-[#397dfe] pointer-events-none" aria-hidden="true" />
              </>
            )}
            <span className={`text-[18px] lg:text-[16px] font-medium ${initialBg === '#014cda' ? 'text-white/90' : 'text-[#161616]'}`}>{displayInitial}</span>
          </div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-[14px] font-medium text-[#161616] leading-[20px] truncate">{title}</h4>
        <div className="relative mt-[2px]">
          <p className="text-[14px] text-[#525252] leading-[18px] tracking-[0.16px] line-clamp-2 text-left">
            {subtitle}
          </p>
        </div>
      </div>

      <button 
        onClick={(e) => {
          e.stopPropagation();
          if (onToggleSubscribe) onToggleSubscribe(id);
        }}
        className={`w-[32px] h-[32px] rounded-full flex items-center justify-center shrink-0 transition-colors ${isSubscribed ? 'bg-[#0F62FE]/10 text-[#0F62FE]' : 'bg-[#f2f4f8] text-[#6f6f6f]'}`}
      >
        {isSubscribed ? (
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M13.5 4.5L6.5 11.5L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <span className="text-[16px] font-medium">+</span>
        )}
      </button>
    </div>
  );
};

export const AllChannelsTab: React.FC<{ 
  onChannelClick: (id: string) => void, 
  isDesktop?: boolean, 
  channels: Channel[], 
  onToggleSubscribe: (id: string) => void 
}> = ({ onChannelClick, isDesktop, channels, onToggleSubscribe }) => {
  
  const forYouData = channels.filter(c => ['safety', 'digital-steel', 'chermk', 'resource'].includes(c.id));
  const colleaguesData = channels.filter(c => ['pro-people', 'eco-agenda', 'innovations', 'prominvest-life'].includes(c.id));
  const allOthersData = channels.filter(c => ['ssc', 'logistics', 'youth-council', 'legal-news', 'important', 'prominvest', 'dev-team', 'itogi-goda'].includes(c.id) && !forYouData.includes(c) && !colleaguesData.includes(c));

  const chunkArray = (arr: any[], size: number) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const forYouChunks = chunkArray(forYouData, 2);
  const colleaguesChunks = chunkArray(colleaguesData, 2);

  return (
    <div className="flex flex-col gap-6 pt-2 pb-10">
      {forYouData.length > 0 && (
        <section className="flex flex-col gap-3">
          <h3 className="px-5 text-[14px] text-[#525252] leading-[18px] tracking-[0.16px] font-normal">Для вашей должности и интересов</h3>
          <div className="flex flex-col px-5">
            {forYouData.map((item) => (
              <RecommendationItem 
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                avatar={item.avatar}
                initial={item.initial}
                initialBg={item.initialBg}
                icon={item.icon}
                className="w-full mr-0"
                onClick={() => onChannelClick(item.id)}
                onToggleSubscribe={onToggleSubscribe}
                isSubscribed={false}
              />
            ))}
          </div>
        </section>
      )}

      {colleaguesData.length > 0 && (
        <section className="flex flex-col gap-3">
          <h3 className="px-5 text-[14px] text-[#525252] leading-[18px] tracking-[0.16px] font-normal">Читают коллеги</h3>
          <div className="flex flex-col px-5">
            {colleaguesData.map((item) => (
              <RecommendationItem 
                key={item.id}
                id={item.id}
                title={item.title}
                subtitle={item.subtitle}
                avatar={item.avatar}
                initial={item.initial}
                initialBg={item.initialBg}
                icon={item.icon}
                className="w-full mr-0"
                onClick={() => onChannelClick(item.id)}
                onToggleSubscribe={onToggleSubscribe}
                isSubscribed={false}
              />
            ))}
          </div>
        </section>
      )}

      {allOthersData.length > 0 && (
        <section className="flex flex-col gap-3">
          <h3 className="px-5 text-[14px] text-[#525252] leading-[18px] tracking-[0.16px] font-normal">Все остальные</h3>
          <div className="flex flex-col px-5">
            {allOthersData.map((item) => (
              <div key={item.id} className="w-full">
                <RecommendationItem 
                  id={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  avatar={item.avatar}
                  initial={item.initial}
                  initialBg={item.initialBg}
                  icon={item.icon}
                  className="w-full mr-0"
                  onClick={() => onChannelClick(item.id)}
                  onToggleSubscribe={onToggleSubscribe}
                  isSubscribed={false}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {channels.length === 0 && (
        <div className="p-10 text-center flex flex-col items-center gap-2">
           <p className="text-[14px] text-[#525252]">Вы подписаны на все каналы!</p>
           <p className="text-[12px] text-[#525252]/60">Все новости теперь доступны во вкладке «Для меня»</p>
        </div>
      )}
    </div>
  );
};