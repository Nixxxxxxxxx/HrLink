import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import svgPaths from "../../imports/svg-7o473cqd6z";
import svgPaths2 from "../../imports/svg-rzvrmqhvy5";
import { AudienceDialog } from './AudienceDialog';
import type { AudienceItem } from './AudienceDialog';
import { TagsDropdown } from './TagsDropdown';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DELIVERY_CHANNELS = ['MAX', 'Telegram', 'Email', 'Push уведомление', 'Портал'] as const;
type DeliveryChannel = typeof DELIVERY_CHANNELS[number];

const EVENT_OPTIONS = [
  'День рождения сотрудника',
  'Годовщина работы в компании',
  'Государственный праздник',
  'Изменение в оргструктуре',
  'Новый сотрудник',
  'Увольнение сотрудника',
] as const;
type EventOption = typeof EVENT_OPTIONS[number];

const PUBLISH_TIMING_OPTIONS = [
  'В день события',
  'За 1 день до события',
  'За 3 дня до события',
  'За неделю до события',
  'На следующий день после события',
] as const;
type PublishTimingOption = typeof PUBLISH_TIMING_OPTIONS[number];

// Generic select dropdown used for Событие / Когда публиковать
const SelectDropdown = ({ label, value, options, onChange, onClear }: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (v: string) => void;
  onClear?: () => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const showClear = !!onClear && !!value;

  return (
    <div className="flex flex-col items-start w-full relative" ref={ref}>
      <div className="pb-[8px] w-full">
        <p className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">{label}</p>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "bg-[#F4F4F4] border-b h-[40px] px-[16px] flex items-center justify-between cursor-pointer transition-colors w-full",
          open ? "border-[#0F62FE]" : "border-[#8D8D8D]"
        )}
      >
        <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px] truncate flex-1">
          {value || 'Выберите'}
        </span>
        <div className="flex items-center gap-[8px] pl-[8px]">
          {showClear && (
            <>
              <button
                className="size-[16px] flex items-center justify-center"
                onClick={(e) => { e.stopPropagation(); onClear?.(); }}
              >
                <svg className="size-[10px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p9429980} fill="#161616" />
                </svg>
              </button>
              <div className="w-px h-[16px] bg-[#C6C6C6]" />
            </>
          )}
          <svg
            className={cn("size-[16px] transition-transform duration-200", open && "rotate-180")}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d={svgPaths.p10dcabc0} fill="#161616" />
          </svg>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 right-0 z-50 mt-[2px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] py-[4px] overflow-hidden"
          >
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={cn(
                  "w-full text-left px-[16px] py-[10px] flex items-center gap-[12px] hover:bg-[#F4F4F4] transition-colors cursor-pointer",
                  value === opt && "bg-[#EDF5FF]"
                )}
              >
                <span className={cn(
                  "font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px]",
                  value === opt ? "text-[#0F62FE]" : "text-[#161616]"
                )}>
                  {opt}
                </span>
                {value === opt && <Check size={14} className="text-[#0F62FE] ml-auto" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ChannelDropdown = ({ label }: { label: string }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Set<DeliveryChannel>>(new Set(DELIVERY_CHANNELS));
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const allSelected = selected.size === DELIVERY_CHANNELS.length;

  const handleToggleAll = () => {
    if (allSelected) {
      setSelected(new Set());
    } else {
      setSelected(new Set(DELIVERY_CHANNELS));
    }
  };

  const handleToggleChannel = (ch: DeliveryChannel) => {
    const next = new Set(selected);
    if (next.has(ch)) {
      next.delete(ch);
      if (next.size === 0) {
        setSelected(new Set(DELIVERY_CHANNELS));
        return;
      }
    } else {
      next.add(ch);
    }
    setSelected(next);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(new Set(DELIVERY_CHANNELS));
  };

  const displayValue = allSelected
    ? 'Все каналы'
    : selected.size === 0
      ? 'Все каналы'
      : Array.from(selected).join(', ');

  const showClear = !allSelected && selected.size > 0;

  return (
    <div className="flex flex-col gap-[8px] w-full relative" ref={ref}>
      <label className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
        {label}
      </label>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "bg-[#F4F4F4] border-b h-[40px] px-[16px] flex items-center justify-between cursor-pointer transition-colors",
          open ? "border-[#0F62FE]" : "border-[#8D8D8D]"
        )}
      >
        <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px] truncate">
          {displayValue}
        </span>
        <div className="flex items-center gap-[8px]">
          {showClear && (
            <>
              <button className="size-[16px] flex items-center justify-center" onClick={handleClear}>
                <svg className="size-[10px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p9429980} fill="#161616" />
                </svg>
              </button>
              <div className="w-px h-[16px] bg-[#C6C6C6]" />
            </>
          )}
          <svg
            className={cn("size-[16px] transition-transform duration-200", open && "rotate-180")}
            viewBox="0 0 16 16"
            fill="none"
          >
            <path d={svgPaths.p10dcabc0} fill="#161616" />
          </svg>
        </div>
      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-full left-0 right-0 z-50 mt-[2px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] py-[4px] overflow-hidden"
          >
            {/* "Все каналы" option */}
            <button
              type="button"
              onClick={handleToggleAll}
              className="w-full text-left px-[16px] py-[10px] flex items-center gap-[12px] hover:bg-[#F4F4F4] transition-colors cursor-pointer"
            >
              <div className={cn(
                "size-[18px] rounded-[2px] border-[2px] flex items-center justify-center shrink-0 transition-colors",
                allSelected ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#525252]"
              )}>
                {allSelected && <Check size={11} className="text-white" strokeWidth={3} />}
              </div>
              <span className={cn(
                "font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px]",
                allSelected ? "text-[#161616]" : "text-[#525252]"
              )}>
                Все каналы
              </span>
            </button>

            <div className="mx-[16px] h-px bg-[#E0E4EA]" />

            {/* Individual channels */}
            {DELIVERY_CHANNELS.map((ch) => {
              const isChecked = selected.has(ch);
              return (
                <button
                  key={ch}
                  type="button"
                  onClick={() => handleToggleChannel(ch)}
                  className="w-full text-left px-[16px] py-[10px] flex items-center gap-[12px] hover:bg-[#F4F4F4] transition-colors cursor-pointer"
                >
                  <div className={cn(
                    "size-[18px] rounded-[2px] border-[2px] flex items-center justify-center shrink-0 transition-colors",
                    isChecked ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#525252]"
                  )}>
                    {isChecked && <Check size={11} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className={cn(
                    "font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px]",
                    isChecked ? "text-[#161616]" : "text-[#525252]"
                  )}>
                    {ch}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle = ({ label, checked, onChange }: ToggleProps) => (
  <div 
    className="flex items-center gap-[8px] cursor-pointer group select-none"
    onClick={() => onChange(!checked)}
  >
    <div className={cn(
      "w-[32px] h-[18px] rounded-[12px] p-[3px] transition-all relative flex items-center shrink-0",
      checked ? "bg-[#24A148]" : "bg-[#8D8D8D]"
    )}>
      <div className={cn(
        "size-[12px] bg-white rounded-full transition-transform duration-200 flex items-center justify-center",
        checked ? "translate-x-[14px]" : "translate-x-0"
      )}>
        {checked && (
          <svg className="size-[8px]" viewBox="0 0 6 6" fill="none">
            <path d={svgPaths2.p30dc080} fill="#24A148" />
          </svg>
        )}
      </div>
    </div>
    <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
      {label}
    </span>
  </div>
);

const Checkbox = ({ label, checked, onChange }: { label: string, checked: boolean, onChange: (val: boolean) => void }) => (
  <div 
    className="flex items-center gap-[12px] cursor-pointer group select-none"
    onClick={() => onChange(!checked)}
  >
    <div className={cn(
      "size-[20px] rounded-[2px] border-[2px] flex items-center justify-center bg-white shrink-0 transition-colors",
      checked ? "border-[#0F62FE]" : "border-[#525252]"
    )}>
      {checked && (
        <svg className="size-[12px]" viewBox="0 0 6 6" fill="none">
          <path d={svgPaths2.p30dc080} fill="#0F62FE" />
        </svg>
      )}
    </div>
    <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
      {label}
    </span>
  </div>
);

const AudienceIcon = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <path d={svgPaths.p8256c00} fill="#8D8D8D" />
      <path d={svgPaths.p294a4800} fill="#8D8D8D" />
    </svg>
  </div>
);

const DropdownField = ({ label, value, onClear }: { label: string, value: string, onClear?: () => void }) => (
  <div className="flex flex-col gap-[8px] w-full">
    <label className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
      {label}
    </label>
    <div className="bg-[#F4F4F4] border-b border-[#8D8D8D] h-[40px] px-[16px] flex items-center justify-between group relative">
      <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px] truncate">
        {value}
      </span>
      <div className="flex items-center gap-[8px]">
        {value !== "Выберите теги" && (
          <>
            <button className="size-[16px] flex items-center justify-center" onClick={onClear}>
              <svg className="size-[10px]" viewBox="0 0 16 16" fill="none">
                <path d={svgPaths.p9429980} fill="#161616" />
              </svg>
            </button>
            <div className="w-px h-[16px] bg-[#C6C6C6]" />
          </>
        )}
        <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p10dcabc0} fill="#161616" />
        </svg>
      </div>
    </div>
  </div>
);

const Tag = ({ label }: { label: string }) => (
  <div className="bg-[#D0E2FF] rounded-[12px] h-[24px] pl-[8px] pr-[4px] flex items-center gap-[4px] shrink-0">
    <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#0043CE] tracking-[0.32px]">
      {label}
    </span>
    <button className="size-[16px] flex items-center justify-center">
      <svg className="size-[8px]" viewBox="0 0 16 16" fill="none">
        <path d={svgPaths.p9429980} fill="#0043CE" />
      </svg>
    </button>
  </div>
);

// ─── Custom Date Picker ────────────────────────────────────────
const MONTH_NAMES_RU = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
const WEEKDAY_NAMES_RU = ['Пн','Вт','Ср','Чт','Пт','Сб','Вс'];

// Hook to compute portal position from trigger ref
function usePortalPos(
  triggerRef: React.RefObject<HTMLDivElement | null>,
  panelRef: React.RefObject<HTMLDivElement | null>,
  open: boolean,
  minWidth?: number
) {
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0, openUp: false, ready: false });

  useEffect(() => {
    if (!open) {
      setPos(p => ({ ...p, ready: false }));
      return;
    }

    const update = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const w = minWidth ? Math.max(rect.width, minWidth) : rect.width;
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Measure actual panel height
      const panelH = panelRef.current?.offsetHeight || 0;

      // Horizontal: prefer left-aligned, shift left if overflows right
      let left = rect.left;
      if (left + w > vw - 8) {
        left = rect.right - w;
      }
      if (left < 8) left = 8;

      // Vertical: open below by default, flip above if no space below
      const spaceBelow = vh - rect.bottom;
      const spaceAbove = rect.top;
      const openUp = panelH > 0 && spaceBelow < panelH + 4 && spaceAbove > spaceBelow;
      const top = openUp ? rect.top - panelH - 4 : rect.bottom + 2;

      setPos({ top, left, width: w, openUp, ready: panelH > 0 });
    };

    // Initial calc + recalc after panel renders
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [open, triggerRef, panelRef, minWidth]);

  return pos;
}

const DatePickerField = ({ label, value, onChange, min }: { label: string; value: string; onChange: (v: string) => void; min?: string }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pos = usePortalPos(triggerRef, panelRef, open, 280);

  const parsed = useMemo(() => {
    if (!value) return new Date(2026, 2, 15);
    const [y, m, d] = value.split('-').map(Number);
    return new Date(y, m - 1, d);
  }, [value]);

  const [viewYear, setViewYear] = useState(parsed.getFullYear());
  const [viewMonth, setViewMonth] = useState(parsed.getMonth());

  useEffect(() => {
    if (open) {
      setViewYear(parsed.getFullYear());
      setViewMonth(parsed.getMonth());
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const firstDayOfWeek = (new Date(viewYear, viewMonth, 1).getDay() + 6) % 7;
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDayOfWeek; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) { setViewMonth(11); setViewYear(y => y - 1); }
    else setViewMonth(m => m - 1);
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) { setViewMonth(0); setViewYear(y => y + 1); }
    else setViewMonth(m => m + 1);
  };

  const handleDayClick = (day: number) => {
    const m = String(viewMonth + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    onChange(`${viewYear}-${m}-${d}`);
    setOpen(false);
  };

  const displayValue = value
    ? parsed.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short', year: 'numeric' }).replace('.', '')
    : 'Выберите';

  const todayStr = '2026-03-02';

  return (
    <div className="flex-1 flex flex-col gap-[8px]" ref={triggerRef}>
      <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">{label}</span>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "bg-[#F4F4F4] border-b h-[40px] px-[16px] flex items-center justify-between cursor-pointer transition-colors",
          open ? "border-[#0F62FE]" : "border-[#8D8D8D]"
        )}
      >
        <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px] truncate">
          {displayValue}
        </span>
        <svg className="size-[16px] shrink-0" viewBox="0 0 16 16" fill="none">
          <path d={svgPaths2.p33c7d000} fill="#161616" />
        </svg>
      </div>

      {ReactDOM.createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed z-[9999] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] p-[12px]"
              style={{ top: pos.top, left: pos.left, width: Math.max(pos.width, 280) }}
            >
              {/* Month Nav */}
              <div className="flex items-center justify-between mb-[8px]">
                <button onClick={handlePrevMonth} className="size-[28px] flex items-center justify-center hover:bg-[#F4F4F4] rounded-[4px] transition-colors cursor-pointer">
                  <ChevronLeft size={16} className="text-[#525252]" />
                </button>
                <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px] font-medium">
                  {MONTH_NAMES_RU[viewMonth]} {viewYear}
                </span>
                <button onClick={handleNextMonth} className="size-[28px] flex items-center justify-center hover:bg-[#F4F4F4] rounded-[4px] transition-colors cursor-pointer">
                  <ChevronRight size={16} className="text-[#525252]" />
                </button>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 mb-[4px]">
                {WEEKDAY_NAMES_RU.map(wd => (
                  <div key={wd} className="flex items-center justify-center h-[28px]">
                    <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] text-[#8D8D8D] tracking-[0.32px]">{wd}</span>
                  </div>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7">
                {days.map((day, i) => {
                  if (day === null) return <div key={`empty-${i}`} />;
                  const m = String(viewMonth + 1).padStart(2, '0');
                  const d = String(day).padStart(2, '0');
                  const dateStr = `${viewYear}-${m}-${d}`;
                  const isSelected = dateStr === value;
                  const isToday = dateStr === todayStr;
                  return (
                    <button
                      key={day}
                      onClick={(e) => { e.stopPropagation(); handleDayClick(day); }}
                      className={cn(
                        "size-[32px] flex items-center justify-center rounded-[4px] text-[13px] font-['IBM_Plex_Sans',sans-serif] transition-colors cursor-pointer",
                        isSelected
                          ? "bg-[#0F62FE] text-white"
                          : isToday
                            ? "bg-[#EDF5FF] text-[#0F62FE] font-medium"
                            : "text-[#161616] hover:bg-[#F4F4F4]"
                      )}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

// ─── Custom Time Picker ────────────────────────────────────────
const TIME_OPTIONS: string[] = [];
for (let h = 0; h < 24; h++) {
  for (let m = 0; m < 60; m += 30) {
    TIME_OPTIONS.push(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
  }
}

const TimePickerField = ({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const pos = usePortalPos(triggerRef, panelRef, open);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (triggerRef.current?.contains(target)) return;
      if (panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Scroll to selected time when opening
  useEffect(() => {
    if (open && listRef.current && value) {
      const idx = TIME_OPTIONS.indexOf(value);
      if (idx >= 0) {
        requestAnimationFrame(() => {
          const el = listRef.current?.children[idx] as HTMLElement;
          if (el) el.scrollIntoView({ block: 'center' });
        });
      }
    }
  }, [open, value]);

  return (
    <div className="flex-1 flex flex-col gap-[8px]" ref={triggerRef}>
      <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">{label}</span>
      <div
        onClick={() => setOpen(!open)}
        className={cn(
          "bg-[#F4F4F4] border-b h-[40px] px-[16px] flex items-center justify-between cursor-pointer transition-colors",
          open ? "border-[#0F62FE]" : "border-[#8D8D8D]"
        )}
      >
        <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
          {value || 'Выберите'}
        </span>
        <svg className={cn("size-[16px] shrink-0 transition-transform duration-200", open && "rotate-180")} viewBox="0 0 16 16" fill="none">
          <path d={svgPaths.p10dcabc0} fill="#161616" />
        </svg>
      </div>

      {ReactDOM.createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="fixed z-[9999] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] overflow-hidden"
              style={{ top: pos.top, left: pos.left, width: pos.width }}
            >
              <div ref={listRef} className="max-h-[200px] overflow-y-auto py-[4px]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#c6c6c6 transparent' }}>
                {TIME_OPTIONS.map((t) => (
                  <button
                    key={t}
                    onClick={(e) => { e.stopPropagation(); onChange(t); setOpen(false); }}
                    className={cn(
                      "w-full text-left px-[16px] py-[8px] flex items-center transition-colors cursor-pointer",
                      value === t
                        ? "bg-[#EDF5FF] text-[#0F62FE]"
                        : "hover:bg-[#F4F4F4] text-[#161616]"
                    )}
                  >
                    <span className={cn(
                      "font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px]",
                      value === t && "font-medium"
                    )}>
                      {t}
                    </span>
                    {value === t && <Check size={14} className="text-[#0F62FE] ml-auto" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export interface NewsSettings {
  schedule: boolean;
  scheduleDate: string;
  scheduleTime: string;
  limitLifetime: boolean;
  lifetimeDate: string;
  lifetimeTime: string;
  important: boolean;
  acknowledge: boolean;
  acknowledgeButtonText: string;
  archiveAfterDeadline?: boolean;
  allowComments: boolean;
  allowReactions: boolean;
}

interface NewsSettingsSidebarProps {
  settings: NewsSettings;
  onSettingsChange: (settings: NewsSettings) => void;
  mode?: 'news' | 'template';
  autoGenerate?: boolean;
  onAutoGenerateChange?: (val: boolean) => void;
  onAudienceChange?: (hasAudience: boolean) => void;
}

export function NewsSettingsSidebar({ settings, onSettingsChange, mode = 'news', autoGenerate = false, onAutoGenerateChange, onAudienceChange }: NewsSettingsSidebarProps) {
  const [isAudienceOpen, setIsAudienceOpen] = useState(false);
  const [hasAudience, setHasAudience] = useState(false);
  const [confirmedAudiences, setConfirmedAudiences] = useState<AudienceItem[]>([]);
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>(['news']);
  const [eventType, setEventType] = useState<string>('День рождения сотрудника');
  const [publishTiming, setPublishTiming] = useState<string>('В день события');
  
  const setSettings = (update: (prev: NewsSettings) => NewsSettings) => {
    onSettingsChange(update(settings));
  };

  const isTemplate = mode === 'template';

  return (
    <div className="flex flex-col gap-[8px] w-full h-fit">
      {/* Template Settings Section (only in template mode) */}
      {isTemplate && (
        <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col gap-[16px] pt-[16px] px-[16px] pb-[16px] w-full">
            <h3 className="font-['IBM_Plex_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#161616]">
              Настройки шаблона
            </h3>
            <Toggle
              label="Автоматически генерировать новости"
              checked={autoGenerate}
              onChange={(val) => onAutoGenerateChange?.(val)}
            />
            <AnimatePresence initial={false}>
              {autoGenerate && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                  style={{ overflow: 'visible' }}
                >
                  <div className="flex flex-col gap-[16px]">
                    <SelectDropdown
                      label="Событие"
                      value={eventType}
                      options={EVENT_OPTIONS}
                      onChange={setEventType}
                      onClear={() => setEventType('')}
                    />
                    <SelectDropdown
                      label="Когда публиковать"
                      value={publishTiming}
                      options={PUBLISH_TIMING_OPTIONS}
                      onChange={setPublishTiming}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Audience Section */}
      <div className="bg-white rounded-[8px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]">
        <div className="flex flex-col gap-[10px] pt-[16px] px-[16px] pb-[12px] w-full">
          <h3 className="font-['IBM_Plex_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#161616]">
            Аудитория
          </h3>
          
          {!hasAudience ? (
            /* Empty state — "��ыбрать аудиторию" button */
            <button
              type="button"
              onClick={() => setIsAudienceOpen(true)}
              className="w-full h-[40px] rounded-[4px] border border-[#0F62FE] bg-transparent flex items-center justify-center cursor-pointer hover:bg-[#EDF5FF] transition-colors"
            >
              <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#0F62FE] tracking-[0.16px]">
                Выбрать аудиторию
              </span>
            </button>
          ) : (
            <>
              <div className="flex flex-col gap-[4px]">
                {confirmedAudiences.filter(a => a.checked).map(a => (
                  <div key={a.id} className="flex items-center gap-[8px]">
                    <AudienceIcon />
                    <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
                      {a.label} · {a.count}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-[#E0E4EA] w-full" />

              <div className="flex items-center justify-between">
                <p className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
                  {confirmedAudiences.filter(a => a.checked).reduce((sum, a) => sum + a.count, 0)} человека получат новость
                </p>
                <button 
                  onClick={() => setIsAudienceOpen(true)}
                  className="flex items-center gap-[8px] text-[#0F62FE] hover:underline transition-all"
                >
                  <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px]">Изменить</span>
                  <svg className="size-[16px]" viewBox="0 0 16 16" fill="none">
                    <path d="M15 13H1V14H15V13Z" fill="#0F62FE" />
                    <path d={svgPaths.p279f5270} fill="#0F62FE" />
                  </svg>
                </button>
              </div>
            </>
          )}

          <AudienceDialog open={isAudienceOpen} onOpenChange={(open) => {
            setIsAudienceOpen(open);
          }} onConfirm={(audiences) => {
            const checked = audiences.filter(a => a.checked);
            if (checked.length > 0) {
              setConfirmedAudiences(audiences);
              setHasAudience(true);
              onAudienceChange?.(true);
            } else {
              onAudienceChange?.(false);
            }
          }} />
        </div>
      </div>

      {/* Main Settings Section */}
      <div className="bg-white rounded-[8px] pt-[16px] px-[16px] pb-[24px] flex flex-col gap-[16px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]">
        <h3 className="font-['IBM_Plex_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#161616]">
          Основные настройки
        </h3>

        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[16px]">
            <ChannelDropdown label="Канал получения" />
            
            <TagsDropdown selectedTagIds={selectedTagIds} onTagsChange={setSelectedTagIds} />
          </div>

          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[12px]">
              <Toggle 
                label="Запланировать публикацию" 
                checked={settings.schedule} 
                onChange={(val) => setSettings(s => ({ ...s, schedule: val }))} 
              />
              {settings.schedule && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex gap-[8px] w-full">
                    <DatePickerField
                      label="Дата"
                      value={settings.scheduleDate}
                      onChange={(v) => setSettings(s => ({ ...s, scheduleDate: v }))}
                    />
                    <TimePickerField
                      label="Время"
                      value={settings.scheduleTime}
                      onChange={(v) => setSettings(s => ({ ...s, scheduleTime: v }))}
                    />
                  </div>
                </motion.div>
              )}
            </div>

            <div className="flex flex-col gap-[12px]">
              <Toggle 
                label="Ограничить срок жизни новости" 
                checked={settings.limitLifetime} 
                onChange={(val) => setSettings(s => ({ ...s, limitLifetime: val }))} 
              />
              {settings.limitLifetime && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-[12px]">
                    <div className="flex gap-[8px] w-full">
                      <DatePickerField
                        label="Дата"
                        value={settings.lifetimeDate}
                        onChange={(v) => setSettings(s => ({ ...s, lifetimeDate: v }))}
                        min={settings.scheduleDate || undefined}
                      />
                      <TimePickerField
                        label="Время"
                        value={settings.lifetimeTime}
                        onChange={(v) => setSettings(s => ({ ...s, lifetimeTime: v }))}
                      />
                    </div>
                    <Checkbox 
                      label="Перенести в архив после дедлайна" 
                      checked={settings.archiveAfterDeadline || false} 
                      onChange={(val) => setSettings(s => ({ ...s, archiveAfterDeadline: val }))} 
                    />
                  </div>
                </motion.div>
              )}
            </div>

            <Toggle 
              label="Важная новость" 
              checked={settings.important} 
              onChange={(val) => setSettings(s => ({ ...s, important: val }))} 
            />
            <div className="flex flex-col gap-[12px]">
              <Toggle 
                label="Добавить кнопку «Ознакомлен" 
                checked={settings.acknowledge} 
                onChange={(val) => setSettings(s => ({ ...s, acknowledge: val }))} 
              />
              {settings.acknowledge && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col gap-[8px]">
                    <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">Текст кнопки</span>
                    <div className="relative bg-[#F4F4F4] border-b border-[#8D8D8D] h-[40px] flex items-center focus-within:border-[#0F62FE] transition-colors">
                      <input
                        type="text"
                        value={settings.acknowledgeButtonText}
                        onChange={(e) => setSettings(s => ({ ...s, acknowledgeButtonText: e.target.value }))}
                        placeholder="Ознакомлен"
                        className="w-full h-full px-[16px] bg-transparent text-[14px] text-[#161616] font-['IBM_Plex_Sans',sans-serif] outline-none border-none placeholder:text-[#A8A8A8] tracking-[0.16px]"
                      />
                      {settings.acknowledgeButtonText && settings.acknowledgeButtonText !== 'Ознакомлен' && (
                        <button
                          onClick={() => setSettings(s => ({ ...s, acknowledgeButtonText: 'Ознакомлен' }))}
                          className="absolute right-[16px] top-1/2 -translate-y-1/2 size-[16px] flex items-center justify-center"
                        >
                          <svg className="size-[10px]" viewBox="0 0 16 16" fill="none">
                            <path d={svgPaths.p9429980} fill="#525252" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Settings Section — expandable accordion */}
      <div className="bg-white rounded-[8px] px-[20px] shadow-[0px_1px_2px_rgba(0,0,0,0.1)]">
        <button 
          onClick={() => setIsAdditionalOpen(prev => !prev)}
          className="flex items-center gap-[16px] py-[14px] w-full text-left cursor-pointer"
        >
          <svg 
            className={`size-[16px] transition-transform duration-200 ${isAdditionalOpen ? 'rotate-180' : ''}`} 
            viewBox="0 0 16 16" 
            fill="none"
          >
            <path d={svgPaths.p10dcabc0} fill="#161616" />
          </svg>
          <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[20px] text-[#161616] tracking-[0.16px]">
            Дополнительные настройки
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isAdditionalOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div className="flex flex-col gap-[16px] pb-[16px]">
                <div 
                  className="flex items-center gap-[8px] cursor-pointer select-none"
                  onClick={() => setSettings(s => ({ ...s, allowComments: !s.allowComments }))}
                >
                  <div className={cn(
                    "size-[20px] rounded flex items-center justify-center shrink-0 border transition-colors",
                    settings.allowComments ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#8D8D8D]"
                  )}>
                    {settings.allowComments && <Check size={12} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
                    Разрешить комментарии
                  </span>
                </div>
                <div 
                  className="flex items-center gap-[8px] cursor-pointer select-none"
                  onClick={() => setSettings(s => ({ ...s, allowReactions: !s.allowReactions }))}
                >
                  <div className={cn(
                    "size-[20px] rounded flex items-center justify-center shrink-0 border transition-colors",
                    settings.allowReactions ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#8D8D8D]"
                  )}>
                    {settings.allowReactions && <Check size={12} className="text-white" strokeWidth={3} />}
                  </div>
                  <span className="font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] text-[#161616] tracking-[0.16px]">
                    Разрешить реакции
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}