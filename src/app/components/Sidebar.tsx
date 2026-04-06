import React from 'react';
import svgPaths from "../../imports/svg-f1uge3s9tz";
import { ChatWidget } from './ChatWidget';

interface SidebarItemProps {
  icon: string;
  label: string;
  isActive?: boolean;
  hasNotification?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive, hasNotification }) => (
  <div className={`w-full h-[64px] relative cursor-pointer hover:bg-black/5 transition-colors ${isActive ? 'bg-[#edf5ff]' : ''}`}>
    {isActive && <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#054ada]" />}
    <div className="flex flex-col items-center justify-center h-full pt-2">
      <div className="w-6 h-6 mb-1">
        {label === 'Telegram' ? (
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <path d="M16.0052 2.66406C12.469 2.66406 9.0776 4.06882 6.57712 6.56931C4.07663 9.06979 2.67188 12.4612 2.67188 15.9974C2.67188 19.5336 4.07663 22.925 6.57712 25.4255C9.0776 27.926 12.469 29.3307 16.0052 29.3307C19.5414 29.3307 22.9328 27.926 25.4333 25.4255C27.9338 22.925 29.3385 19.5336 29.3385 15.9974C29.3385 12.4612 27.9338 9.06979 25.4333 6.56931C22.9328 4.06882 19.5414 2.66406 16.0052 2.66406Z" fill="#29B6F6" />
            <path d="M22.6385 10.0026L20.1412 22.7533C20.1412 22.7533 20.0339 23.3359 19.3112 23.3359C18.9272 23.3359 18.7292 23.1533 18.7292 23.1533L13.3199 18.6646L10.6732 17.3306L7.27654 16.4273C7.27654 16.4273 6.67188 16.2526 6.67188 15.7526C6.67188 15.3359 7.29387 15.1373 7.29387 15.1373L21.5045 9.49194C21.5045 9.49194 21.9385 9.33527 22.2552 9.33594C22.4499 9.33594 22.6719 9.41927 22.6719 9.66927C22.6719 9.83594 22.6385 10.0026 22.6385 10.0026Z" fill="white" />
            <path d="M15.3339 20.3401L13.0499 22.5894C13.0499 22.5894 12.9505 22.6661 12.8179 22.6694C12.7719 22.6707 12.7225 22.6634 12.6719 22.6407L13.3145 18.6641L15.3339 20.3401Z" fill="#B0BEC5" />
            <path d="M19.9365 12.1306C19.8239 11.9839 19.6159 11.9573 19.4692 12.0686L10.6719 17.3333C10.6719 17.3333 12.0759 21.2613 12.2899 21.9413C12.5045 22.6219 12.6765 22.6379 12.6765 22.6379L13.3192 18.6613L19.8739 12.5973C20.0205 12.4859 20.0479 12.2773 19.9365 12.1306Z" fill="#CFD8DC" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
            <path d={icon} fill={isActive ? "#054ADA" : "#373D42"} />
          </svg>
        )}
      </div>
      <span className={`text-[12px] leading-tight text-center px-1 ${isActive ? 'text-[#054ada]' : 'text-[#9fa5ad]'}`}>
        {label}
      </span>
    </div>
    {hasNotification && (
      <div className="absolute top-2 right-4 w-2 h-2 bg-[#f44336] rounded-full" />
    )}
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <div className="w-[88px] h-full bg-white border-r border-[#E0E0E0] flex flex-col shrink-0">
      <div className="flex-1 overflow-y-auto">
        <SidebarItem icon={svgPaths.p30dad5f0} label="Главная" />
        <SidebarItem icon={svgPaths.p6f19180} label="Документы" />
        <SidebarItem icon={svgPaths.p1fe8b840} label="Заявления" />
        <SidebarItem icon={svgPaths.p6f19180} label="Справочники" />
        <SidebarItem icon={svgPaths.p294cab80} label="Коллеги" />
        <SidebarItem icon={svgPaths.p351d3a02} label="График отпусков" />
        <SidebarItem icon={svgPaths.p3c30ef70} label="Заместители" />
        <SidebarItem icon={svgPaths.p36dad700} label="Новости" isActive hasNotification />
        <SidebarItem icon={svgPaths.p29659000} label="Telegram" />
      </div>
      
      {/* Bot Icon / Assistant */}
      <div className="p-5 flex justify-center">
        <div className="w-12 h-12">
          <ChatWidget />
        </div>
      </div>
    </div>
  );
};
