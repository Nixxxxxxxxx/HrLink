import React from 'react';
import svgPaths from "../../imports/svg-aawzcl4ei4";

export const BottomNav: React.FC = () => {
  return (
    <div data-bottom-nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E9E9E9] pb-1 z-50">
      <div className="flex justify-between items-center px-2">
        <NavItem 
          icon={<path d={svgPaths.p33693000} fill="#7D7C78" />} 
          label="Главная" 
          active={false} 
        />
        <NavItem 
          icon={
            <g>
              <path d="M3 4.5H1.5V19.5H3V4.5Z" fill="#7D7C78" />
              <path d="M6 3H4.5V21H6V3Z" fill="#7D7C78" />
              <path d={svgPaths.p3a9b580} fill="#7D7C78" />
              <path d="M19.5 12H10.5V13.5H19.5V12Z" fill="#7D7C78" />
              <path d={svgPaths.p1f5c4e80} fill="#7D7C78" />
            </g>
          } 
          label="Документы" 
          active={false}
          badge
        />
        <NavItem 
          icon={
            <g>
              <path d={svgPaths.p2ce106f0} fill="#7D7C78" />
              <path d="M12 15H7.5V16.5H12V15Z" fill="#7D7C78" />
              <path d="M13.5 12H7.5V13.5H13.5V12Z" fill="#7D7C78" />
              <path d={svgPaths.p13e9cb00} fill="#7D7C78" />
            </g>
          } 
          label="Заявления" 
          active={false} 
        />
        <NavItem 
          icon={
            <g>
              <path d={svgPaths.p1fd83f80} fill="#0F62FE" />
              <path d={svgPaths.pfd21b00} fill="#0F62FE" />
              <path d={svgPaths.p2aced380} fill="#0F62FE" />
              <path d={svgPaths.p2506a700} fill="#0F62FE" />
            </g>
          } 
          label="Ещё" 
          active={true} 
        />
      </div>
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode, label: string, active: boolean, badge?: boolean }> = ({ icon, label, active, badge }) => (
  <div className={`flex flex-col items-center flex-1 py-2 relative`}>
    {active && <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#0F62FE]" />}
    <div className="w-6 h-6 mb-1 relative">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        {icon}
      </svg>
      {badge && (
        <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-[#E11D48] rounded-full border-2 border-white" />
      )}
    </div>
    <span className={`text-[12px] font-['IBM_Plex_Sans'] tracking-wider ${active ? 'text-[#0F62FE]' : 'text-[#7D7C78]'}`}>
      {label}
    </span>
  </div>
);