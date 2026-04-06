import React from 'react';

interface NotificationProps {
  value: string | number;
}

export const Notification: React.FC<NotificationProps> = ({ value }) => {
  return (
    <div className="w-[28px] h-[28px] bg-[#0F62FE]/10 rounded-full flex items-center justify-center shrink-0">
      <span className="text-[14px] text-[#0F62FE] leading-none text-center">
        {value}
      </span>
    </div>
  );
};
