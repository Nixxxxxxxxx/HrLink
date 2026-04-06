import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DigestModal } from './DigestModal';

import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";

export const DigestCard: React.FC = () => {
  const [digestOpen, setDigestOpen] = useState(false);

  return (
    <div className="px-[16px] pt-[0px] pb-[8px]">
      <div 
        className="bg-[#0f62fe]/10 rounded-[8px] overflow-hidden cursor-pointer"
        onClick={() => setDigestOpen(true)}
      >
        <div className="flex items-center justify-between pl-3 pr-2 py-3">
          <div className="flex flex-col gap-1 max-w-[230px]">
            <p className="font-medium text-[14px] text-[#161616] leading-[20px]">Все важное за 2 минуты</p>
            <p className="font-regular text-[14px] text-[#161616] leading-[18px] tracking-[0.16px]">
              Дайджест с новостями, которые важно не пропустить
            </p>
          </div>
          
          <div className="relative w-[90px] h-[64px] shrink-0">
             {/* Overlapping images matching Figma */}
             <div className="absolute top-[5px] left-[5px] rotate-[-8.83deg] w-[64px] h-[45px] rounded-[10px] overflow-hidden shadow-sm">
                <ImageWithFallback src={imgRectangle32} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
             </div>
             <div className="absolute top-[28px] left-[38px] rotate-[15.79deg] w-[47px] h-[31px] rounded-[10px] overflow-hidden shadow-sm">
                <ImageWithFallback src={imgRectangle41} alt="" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
      <DigestModal isOpen={digestOpen} onClose={() => setDigestOpen(false)} />
    </div>
  );
};