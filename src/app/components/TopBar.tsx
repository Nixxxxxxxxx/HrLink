import React from 'react';
import svgPaths from "../../imports/svg-f1uge3s9tz";
import QrCode from "../../imports/QrCode";

import BrandingHrlinkLogo from "../../imports/BrandingHrlinkLogo";

interface TopBarProps {
  isAdmin?: boolean;
  onToggleRole?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ isAdmin = false, onToggleRole }) => {
  return (
    <div className="h-[60px] w-full bg-white border-b border-[#E0E0E0] flex items-center px-6 shrink-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2 mr-12 h-[24px] w-[62px]">
        <BrandingHrlinkLogo />
      </div>

      {/* Center Actions */}
      <div className="flex-1 flex items-center justify-end gap-6 h-full">
        <div className="flex items-center gap-2 text-[#525252] text-[14px] cursor-pointer hover:text-[#161616] transition-colors p-1.5 hover:bg-black/5 rounded-[4px]">
          <span>РУ</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className="flex items-center gap-2 text-[#525252] text-[14px] p-1.5 hover:bg-black/5 rounded-[4px] cursor-pointer transition-all">
          <div className="w-5 h-5 bg-[#0F62FE]/10 rounded-full flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p222cfb00} fill="#0F62FE" />
            </svg>
          </div>
          <span>Ваш менеджер: <span className="text-[#0F62FE] font-medium">Иванов Иван</span></span>
        </div>

        <div className="h-full border-l border-[#E0E0E0] mx-2" />

        <div className="flex items-center gap-2 bg-[#F4F4F4] px-4 py-2 rounded-[4px] cursor-pointer hover:bg-[#E8E8E8] transition-all">
          <span className="text-[#161616] text-[14px]">Название пространства</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
            <path d="M1 1L5 5L9 1" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div 
          onClick={onToggleRole}
          className="flex items-center gap-3 p-1 hover:bg-black/5 rounded-[20px] transition-all cursor-pointer"
        >
          <div className={`w-[44px] h-[24px] rounded-full relative p-1 transition-all ${isAdmin ? 'bg-[#0F62FE]' : 'bg-[#E0E0E0]'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${isAdmin ? 'right-1' : 'left-1'}`} />
          </div>
          <span className="text-[#161616] text-[14px] min-w-[100px]">{isAdmin ? 'Администратор' : 'Сотрудник'}</span>
        </div>

        <div className="flex items-center gap-4 ml-2">
          <div className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-full transition-all cursor-pointer">
            <div className="w-6 h-6">
              <QrCode />
            </div>
          </div>
          <div className="w-9 h-9 bg-[#E0E0E0] rounded-full flex items-center justify-center text-[#525252] font-medium text-[14px] cursor-pointer hover:bg-[#D0D0D0] transition-all">
            FS
          </div>
        </div>
      </div>
    </div>
  );
};
