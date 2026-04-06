import React from 'react';

interface BackButtonProps {
  onClick: () => void;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ onClick, className = "" }) => {
  return (
    <button 
      onClick={onClick}
      className={`w-10 h-10 rounded-full bg-[#F4F4F4] flex items-center justify-center active:scale-95 transition-transform shrink-0 cursor-pointer ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10 12L6 8L10 4" stroke="#161616" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};
