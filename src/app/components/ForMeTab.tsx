import React from 'react';
import { ChannelItem } from './ChannelItem';
import { Channel } from '../data/channels';
import { DigestCard } from './DigestCard';

interface ForMeTabProps {
  onChannelClick: (id: string) => void;
  selectedChannelId?: string | null;
  isDesktop?: boolean;
  channels: Channel[];
}

export const ForMeTab: React.FC<ForMeTabProps> = ({ onChannelClick, selectedChannelId, isDesktop, channels }) => {
  return (
    <div className="flex flex-col">
      {!isDesktop && <DigestCard />}
      
      <div className="flex flex-col">
        {channels.map(channel => (
          <ChannelItem 
            key={channel.id}
            id={channel.id}
            title={channel.title}
            subtitle={channel.subtitle}
            avatar={channel.avatar}
            initial={channel.initial}
            initialBg={channel.initialBg}
            badge={channel.badge}
            atBadge={channel.atBadge}
            isPinned={channel.isPinned}
            isStream={channel.isStream}
            watching={channel.watching}
            lastMessage={channel.lastMessage}
            lastMessageContent={channel.lastMessageContent}
            commentsCount={channel.commentsCount}
            lastNewsId={channel.lastNewsId}
            icon={channel.icon}
            onClick={() => onChannelClick(channel.id)}
            isActive={selectedChannelId === channel.id}
            isDesktop={isDesktop}
          />
        ))}
      </div>
      
      {channels.length === 0 && (
        <div className="p-10 text-center flex flex-col items-center gap-2">
           <p className="text-[14px] text-[#525252]">Список пуст</p>
           <p className="text-[12px] text-[#525252]/60">Подпишитесь на интересные каналы во вкладке «Все каналы»</p>
        </div>
      )}
    </div>
  );
};
