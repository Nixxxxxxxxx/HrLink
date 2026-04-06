import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner';
import { motion as Motion } from 'motion/react';
import { Share2, MoreHorizontal } from 'lucide-react';

const imgNewsItemDescriptionIcon = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&h=200&auto=format&fit=crop";
const imgChannelItemAvatar = "https://images.unsplash.com/photo-1616015060912-48a864032a88?q=80&w=100&h=100&auto=format&fit=crop";
const imgPinnedNews = "https://images.unsplash.com/photo-1728933102332-a4f1a281a621?q=80&w=1080&auto=format&fit=crop";

export const RightPanel: React.FC = () => {
  return (
    <aside className="w-[340px] p-6 shrink-0 bg-[#F4F6F9] overflow-y-auto hidden lg:flex flex-col gap-6 font-['IBM_Plex_Sans']">
      {/* Digest Card */}
      <div className="bg-[#0f62fe]/10 rounded-[8px] overflow-hidden flex flex-col items-center p-[32px] pt-[12px] text-center gap-4 border border-[#0f62fe]/5">
        <div className="h-[106px] relative w-full mb-2">
          {/* Overlapping images from Figma */}
          <div className="absolute top-[15px] left-[20px] rotate-[-8.83deg] w-[100px] h-[72px] rounded-[10px] overflow-hidden shadow-lg border border-white/20">
            <ImageWithFallback src={imgNewsItemDescriptionIcon} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="absolute top-[35px] left-[120px] rotate-[15.79deg] w-[75px] h-[50px] rounded-[10px] overflow-hidden shadow-lg border border-white/20">
            <ImageWithFallback src={imgChannelItemAvatar} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-[16px] text-[#161616] leading-[24px] font-['Montserrat']">Все важное за 2 минуты</p>
          <p className="text-[14px] text-[#161616] leading-[20px] tracking-[0.16px]">
            Дайджест с новостями, которые важно не пропустить
          </p>
        </div>
        
        <button 
          onClick={() => toast.info('Открываем дайджест')}
          className="w-full h-[40px] bg-[#393939] text-white rounded-[4px] text-[14px] font-medium transition-all hover:bg-[#262626] cursor-pointer shadow-sm"
        >
          Посмотреть дайджест
        </button>
      </div>

      {/* Pinned News Card */}
      <div className="bg-white rounded-[8px] overflow-hidden flex flex-col border border-[#E0E4EA] shadow-sm">
        <div className="relative w-full aspect-[264/148] overflow-hidden">
          <ImageWithFallback src={imgPinnedNews} alt="" className="w-full h-full object-cover" />
          
          <div className="absolute top-2 left-2 bg-[#0F62FE] text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wider">
            Важное
          </div>

          <div className="absolute top-2 right-2 flex items-center gap-2">
             <div className="w-6 h-6 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black/40 transition-colors">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M14.2929 6.65685L15 5.95L10 1L9.3429 1.7075L9.9358 2.30035L4.19 7.16125L3.33205 6.30335L2.625 7L5.4536 9.83865L1 14.2915L1.705 15L6.16055 10.5456L9 13.3741L9.69645 12.6671L8.83825 11.809L13.7002 6.06425L14.2929 6.65685Z" fill="white" /></svg>
             </div>
          </div>

          <div className="absolute bottom-2 right-3 backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] h-[22px] px-[10px] rounded-[32px] flex items-center gap-[10px] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]">
            <span className="text-[12px] text-white tracking-[0.32px]">30 дек, 12:21</span>
            <div className="flex items-center gap-[4px]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 7C3.5 5.067 5.067 3.5 7 3.5C8.933 3.5 10.5 5.067 10.5 7C10.5 8.933 8.933 10.5 7 10.5C5.067 10.5 3.5 8.933 3.5 7ZM7 2.5C4.51472 2.5 2.5 4.51472 2.5 7C2.5 9.48528 4.51472 11.5 7 11.5C9.48528 11.5 11.5 9.48528 11.5 7C11.5 4.51472 9.48528 2.5 7 2.5Z" fill="white" fillRule="evenodd" clipRule="evenodd" /></svg>
              <span className="text-[12px] text-white tracking-[0.32px]">13</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex flex-col gap-3">
          <p className="text-[14px] text-[#161616] leading-[20px] font-medium line-clamp-4 font-['IBM_Plex_Sans']">
            Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей. Рост обеспечили новые фьючерсы и опционы.
          </p>
          
          <div className="flex items-center gap-2">
            <Motion.button 
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 h-[32px] bg-white border border-[#E0E4EA] rounded-full text-[14px] transition-all hover:bg-[#F2F4F8] cursor-pointer"
            >
              <span className="text-[18px]">👍</span>
              <span className="font-medium text-[#161616]">3</span>
            </Motion.button>
            <Motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-[#E0E4EA] flex items-center justify-center bg-white hover:bg-[#F2F4F8] cursor-pointer transition-all"
            >
              <Share2 size={16} className="text-[#161616]" />
            </Motion.button>
            <Motion.button 
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-[#E0E4EA] flex items-center justify-center bg-white hover:bg-[#F2F4F8] cursor-pointer transition-all"
            >
              <MoreHorizontal size={16} className="text-[#161616]" />
            </Motion.button>
          </div>
        </div>

        <div onClick={() => toast.info('Открываем обсуждение')} className="border-t border-[#E0E4EA] h-[48px] flex items-center justify-between px-4 hover:bg-[#F2F4F8] cursor-pointer transition-colors">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2 mr-1">
              {['ДС', 'АИ', 'МП'].map((init, i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[8px] font-bold shadow-sm" 
                  style={{ backgroundColor: i === 0 ? '#DA1E28' : i === 1 ? '#0F62FE' : '#24A148' }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="text-[12px] text-[#525252] tracking-[0.16px] font-medium">
              49 комментариев
            </span>
          </div>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      </div>
    </aside>
  );
};
