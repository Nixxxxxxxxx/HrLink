import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import svgPaths from "../../imports/svg-46rfm05w70";

interface ReactionButtonProps {
  onSelect?: (emoji: string) => void;
  className?: string;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const EMOJI_REACTIONS = ["👍", "❤️", "😊", "😕", "😐", "🔥"];

export const ReactionButton: React.FC<ReactionButtonProps> = ({ onSelect, className, isOpen: externalIsOpen, setIsOpen: setExternalIsOpen }) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = setExternalIsOpen !== undefined ? setExternalIsOpen : setInternalIsOpen;
  
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuStyle, setMenuStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updatePosition = () => {
      if (isOpen && menuRef.current) {
        const parent = menuRef.current.parentElement;
        if (parent) {
          const parentRect = parent.getBoundingClientRect();
          const isDesktop = window.innerWidth >= 1024;
          
          if (isDesktop) {
            setMenuStyle({
              left: '50%',
              // Use a special property to communicate with motion
              ['--menu-x' as any]: '-50%',
              transformOrigin: 'bottom center'
            });
          } else {
            // Mobile logic: align with screen left edge (16px padding)
            const leftOffset = 16 - parentRect.left;
            setMenuStyle({
              left: `${leftOffset}px`,
              ['--menu-x' as any]: '0%',
              transformOrigin: 'bottom left'
            });
          }
        }
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, [isOpen]);

  return (
    <div className={`relative ${className || ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-[36px] h-[36px] flex items-center justify-center active:scale-95 transition-all cursor-pointer ${
          isOpen ? 'bg-[#161616]' : 'bg-[rgba(0,0,0,0.05)]'
        }`}
      >
        <div className="relative size-[16px]">
          <svg className="block size-full" fill="none" viewBox="0 0 16 16">
            <path d={svgPaths.p19973370} fill={isOpen ? "white" : "#161616"} />
            <path d={svgPaths.p1e05dd80} fill={isOpen ? "white" : "#161616"} />
            <path d={svgPaths.p3c7b1000} fill={isOpen ? "white" : "#161616"} />
            <path d={svgPaths.p3f153300} fill={isOpen ? "white" : "#161616"} />
            <path d={svgPaths.p38b169f0} fill={isOpen ? "white" : "#161616"} />
          </svg>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.8, y: 10, x: (menuStyle as any)['--menu-x'] || 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: (menuStyle as any)['--menu-x'] || 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10, x: (menuStyle as any)['--menu-x'] || 0 }}
            style={{ 
              left: menuStyle.left, 
              transformOrigin: menuStyle.transformOrigin 
            }}
            className="absolute bottom-full mb-3 bg-white flex gap-[8px] p-[10px] shadow-[0px_8px_24px_rgba(0,0,0,0.18)] z-[100] rounded-xl border border-[rgba(0,0,0,0.08)] whitespace-nowrap"
          >
            {EMOJI_REACTIONS.map((emoji, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  onSelect?.(emoji);
                  setIsOpen(false);
                }}
                className="text-[26px] shrink-0 active:scale-125 transition-transform cursor-pointer hover:bg-[rgba(0,0,0,0.03)] p-1.5 rounded-lg"
              >
                {emoji}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
