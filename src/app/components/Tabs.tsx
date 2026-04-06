import React from 'react';
import { motion } from 'motion/react';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  badge?: string | number;
}

const Tab: React.FC<TabProps> = ({ label, isActive, onClick, badge }) => {
  return (
    <button 
      onClick={onClick}
      className="relative flex flex-col items-start cursor-pointer transition-all pt-[11px] group outline-none"
    >
      <div className="flex items-center gap-[4px] h-[18px] relative z-10 mb-[12px]">
        <span className={`text-[14px] font-['IBM_Plex_Sans',sans-serif] tracking-[0.16px] leading-[18px] transition-colors ${
          isActive ? "font-semibold text-[#161616]" : "font-normal text-[#525252] group-hover:text-[#161616]"
        }`}>
          {label}
        </span>
        {badge !== undefined && (
          <div className="bg-[rgba(15,98,254,0.1)] flex items-center justify-center px-[4px] rounded-[9px] min-w-[18px] h-[18px]">
            <span className="text-[#0f62fe] text-[12px] leading-[18px] font-medium tracking-[0.16px]">
              {badge}
            </span>
          </div>
        )}
      </div>
      
      {isActive && (
        <motion.div 
          layoutId="activeTabIndicator"
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0f62fe] z-20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </button>
  );
};

interface TabsProps {
  activeTab: 'for-me' | 'all';
  onTabChange: (tab: 'for-me' | 'all') => void;
  allChannelsCount?: number;
}

export const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange, allChannelsCount = 0 }) => {
  return (
    <div className="flex px-[20px] gap-[20px] border-b border-[#E0E4EA] mb-4 bg-white relative">
      <Tab 
        label="Для меня" 
        isActive={activeTab === 'for-me'} 
        onClick={() => onTabChange('for-me')} 
      />
      <Tab 
        label="Все каналы" 
        isActive={activeTab === 'all'} 
        onClick={() => onTabChange('all')} 
        badge={allChannelsCount > 0 ? allChannelsCount : undefined}
      />
    </div>
  );
};
