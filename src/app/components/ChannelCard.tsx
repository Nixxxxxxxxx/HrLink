import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import svgPaths from "../../imports/svg-0ppqn17qej";

interface ChannelCardProps {
  title: string;
  subscribers: string;
  avatar?: string;
  initial?: string;
  initialBg?: string;
  isSubscribed?: boolean;
  onClick?: () => void;
}

export const ChannelCard: React.FC<ChannelCardProps> = ({
  title, subscribers, avatar, initial, initialBg, isSubscribed: initialSubscribed, onClick
}) => {
  const [isSubscribed, setIsSubscribed] = React.useState(initialSubscribed);

  return (
    <div 
      onClick={onClick}
      className="bg-[#f7f7f7] min-w-[172px] flex-1 p-3 flex flex-col items-start gap-1 cursor-pointer active:opacity-80 hover:bg-[#EEEEEE] transition-all"
    >
      <div className="relative mb-1">
        {avatar ? (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <ImageWithFallback src={avatar} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : initial ? (
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${initialBg || 'bg-[#fffcc7]'}`}>
            <span className="text-[15px] font-semibold text-[#161616]">{initial}</span>
          </div>
        ) : null}
      </div>
      
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[14px] text-black leading-[18px] line-clamp-2">{title}</h3>
        <p className="text-[14px] text-black/70">{subscribers}</p>
      </div>

      <div className="mt-auto pt-3">
        {isSubscribed ? (
          <div className="flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d={svgPaths.p3f065700} fill="#161616" />
            </svg>
            <span className="text-[14px] text-black/70">Вы подписаны</span>
          </div>
        ) : (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsSubscribed(true);
            }}
            className="text-[14px] text-[#054ada] font-medium active:opacity-60 hover:underline transition-all cursor-pointer"
          >
            Подписаться
          </button>
        )}
      </div>
    </div>
  );
};
