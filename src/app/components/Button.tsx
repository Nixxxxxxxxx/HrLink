import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'system';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className, 
  disabled,
  ...props 
}) => {
  const variants = {
    primary: "bg-[#0F62FE] text-white hover:bg-[#0050E6] active:scale-[0.98]",
    secondary: "bg-[#F2F4F8] text-[#161616] hover:bg-[#E2E4E8] active:scale-[0.98]",
    ghost: "bg-transparent text-[#0F62FE] hover:underline",
    system: "bg-[#E0E0E0] text-[#8D8D8D] cursor-not-allowed"
  };

  return (
    <button
      disabled={disabled || variant === 'system'}
      className={cn(
        "h-[40px] px-4 flex items-center justify-center gap-2 rounded-[4px] transition-all",
        "font-['IBM_Plex_Sans'] text-[14px] font-normal leading-[18px] tracking-[0.16px]",
        variants[variant],
        disabled && "opacity-50 cursor-not-allowed active:scale-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
