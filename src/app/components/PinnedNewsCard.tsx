import React from 'react';
import svgPaths from "../../imports/svg-rhahmj2h1i";
import { NewsItem, Channel } from '../data/channels';

interface PinnedNewsCardProps {
  news?: NewsItem;
  channel?: Channel;
  onClick?: (channelId: string, newsId: string) => void;
}

export const PinnedNewsCard: React.FC<PinnedNewsCardProps> = ({ news, channel, onClick }) => {
  if (!news || !channel) return null;

  return (
    <div 
      className="px-[16px] pt-[0px] pb-[8px] cursor-pointer"
      onClick={() => onClick?.(channel.id, news.id)}
    >
      <div className="bg-[#f2f4f8] rounded-[8px] p-3 flex gap-3 items-start active:bg-[#e2e4e8] transition-colors">
        <div className="relative shrink-0 w-[22px] h-[22px] mt-0.5">
          <svg className="absolute inset-0 size-full" fill="none" viewBox="0 0 22 22">
            <g filter="url(#pin-bg-inner-shadow)">
              <circle cx="11" cy="11" fill="#616161" fillOpacity="0.4" r="11" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="pin-bg-inner-shadow" width="150" x="-64" y="-64">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="-4" />
                <feGaussianBlur stdDeviation="6" />
                <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
                <feBlend in2="shape" mode="color-dodge" result="effect1_innerShadow" />
              </filter>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12.5714 12.5714" fill="none">
              <rect fill="white" fillOpacity="0.01" height="12.5714" style={{ mixBlendMode: "multiply" }} width="12.5714" />
              <path d="M11.2301 5.23038L11.7857 4.675L7.85714 0.785714L7.34085 1.34161L7.8067 1.80742L3.29214 5.6267L2.61804 4.95263L2.0625 5.5L4.28497 7.73037L0.785714 11.2291L1.33964 11.7857L4.84043 8.28587L7.07143 10.5082L7.61864 9.95272L6.94434 9.2785L10.7645 4.76477L11.2301 5.23038Z" fill="white" />
            </svg>
          </div>
        </div>
        <p className="flex-1 font-regular text-[14px] text-[#161616] leading-[20px] tracking-[0.16px] line-clamp-4">
          {news.content}
        </p>
      </div>
    </div>
  );
};
