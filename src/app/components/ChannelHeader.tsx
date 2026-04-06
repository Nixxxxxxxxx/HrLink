import React from 'react';
import { Button } from './Button';

interface ChannelHeaderProps {
  title: string;
  subtitle?: string;
  isSubscribed: boolean;
  isSystemChannel: boolean;
  onToggleSubscribe: () => void;
}

export const ChannelHeader: React.FC<ChannelHeaderProps> = ({ 
  title, 
  subtitle, 
  isSubscribed, 
  isSystemChannel,
  onToggleSubscribe 
}) => {
  return (
    <div className="bg-white rounded-[8px] p-4 flex items-center justify-between border border-[#E0E4EA] h-[72px] shadow-[0px_4px_24px_rgba(0,0,0,0.06)]">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="w-10 h-10 rounded-full bg-[#014cda] flex items-center justify-center shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 rounded-full shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] mix-blend-color-dodge pointer-events-none" />
          <span className="text-[16px] font-medium text-white/90 leading-none">{title.charAt(0).toUpperCase()}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <h2 className="text-[14px] font-medium text-[#161616] truncate leading-[18px] font-['IBM_Plex_Sans']">{title}</h2>
          <p className="text-[14px] text-[#525252] truncate leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans']">
            {subtitle || 'Все новости мира в одном канале'}
          </p>
        </div>
      </div>
      
      <Button
        variant={isSystemChannel ? 'system' : isSubscribed ? 'secondary' : 'primary'}
        onClick={onToggleSubscribe}
        className="shrink-0"
      >
        {isSystemChannel ? 'Системный' : isSubscribed ? 'Вы подписаны' : 'Подписаться'}
      </Button>
    </div>
  );
};
