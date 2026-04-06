import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as Popover from '@radix-ui/react-popover';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import svgPaths from "../../imports/svg-mh7wmm279u";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface FilterDropdownProps {
  label: string;
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
  hasSearch?: boolean;
  searchPlaceholder?: string;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
  hasSearch = false,
  searchPlaceholder = "Поиск",
  isOpen,
  onToggle,
  onClose
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleToggleOption = (option: string) => {
    if (option === "Все" || option === "Все каналы" || option === "Все статусы" || option === "Все авторы") {
      if (selectedOptions.includes(option)) {
        onChange([]);
      } else {
        onChange([option, ...options.filter(o => o !== option)]);
      }
      return;
    }

    const newSelected = selectedOptions.includes(option)
      ? selectedOptions.filter(o => o !== option)
      : [...selectedOptions, option];

    // Check if we should auto-select/deselect "All"
    const allOption = options.find(o => o.startsWith("Все"));
    if (allOption) {
      const otherOptions = options.filter(o => o !== allOption);
      const selectedOthers = newSelected.filter(o => o !== allOption);
      
      if (selectedOthers.length === otherOptions.length && selectedOthers.length > 0) {
        onChange([allOption, ...selectedOthers]);
      } else if (selectedOptions.includes(allOption) && option !== allOption) {
        onChange(selectedOthers);
      } else {
        onChange(newSelected);
      }
    } else {
      onChange(newSelected);
    }
  };

  const filteredOptions = options.filter(o => 
    o.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Popover.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Popover.Trigger asChild>
        <button 
          onClick={(e) => {
            e.preventDefault();
            onToggle();
          }}
          className={cn(
            "flex items-center gap-2 text-[#161616] text-[14px] font-normal whitespace-nowrap px-3 py-1.5 rounded-[4px] transition-all outline-none",
            isOpen ? "bg-black/10" : "hover:bg-black/5"
          )}
        >
          {label}
          <ChevronDown size={14} className={cn("text-[#525252] transition-transform", isOpen && "rotate-180")} />
        </button>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content 
          sideOffset={4} 
          align="start" 
          className="z-[1000] outline-none"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="w-[235px] bg-white shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden"
          >
            {hasSearch && (
              <div className="bg-white border-b border-[#E0E0E0] shrink-0">
                <div className="flex gap-[8px] items-center px-[16px] py-[7px] relative w-full">
                  <div className="relative shrink-0 size-[16px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path d={svgPaths.p154b5b00} fill="#525252" />
                    </svg>
                  </div>
                  <input 
                    type="text"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#161616] placeholder-[#a8a8a8] font-normal leading-[18px] tracking-[0.16px]"
                    autoFocus
                  />
                </div>
              </div>
            )}

            <div className="max-h-[300px] overflow-y-auto custom-scrollbar relative">
              {filteredOptions.map((option, idx) => {
                const isSelected = selectedOptions.includes(option);
                return (
                  <div 
                    key={option}
                    onClick={() => handleToggleOption(option)}
                    className={cn(
                      "relative shrink-0 w-full cursor-pointer transition-colors",
                      isSelected ? "bg-[#e0e0e0]" : "bg-[#f4f4f4] hover:bg-[#e8e8e8]"
                    )}
                  >
                    {idx > 0 && (
                      <div className="absolute flex h-0 items-center justify-center left-[16px] right-[16px] top-0">
                        <div className="flex-none h-px w-full bg-[#C6C6C6]" />
                      </div>
                    )}
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[7px] relative w-full">
                        <div className="relative shrink-0 size-[16px]">
                          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                            <path 
                              d={isSelected ? svgPaths.p22803580 : svgPaths.p7335700} 
                              fill="#161616" 
                            />
                          </svg>
                        </div>
                        <p className={cn(
                          "flex-[1_0_0] font-['IBM_Plex_Sans'] h-[18px] leading-[18px] text-[14px] tracking-[0.16px] whitespace-nowrap overflow-hidden text-ellipsis",
                          isSelected ? "text-[#161616]" : "text-[#525252]"
                        )}>
                          {option}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
