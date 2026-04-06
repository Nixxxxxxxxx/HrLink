import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Background from '../../imports/Background';
import svgPaths from '../../imports/svg-l6nshrnylo';
import radioSvgPaths from '../../imports/svg-of5raktq3i';
import calendarSvgPaths from '../../imports/svg-4js3vf9o7i';

interface PinNewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (pinUntil: string | null) => void; // null = forever, string = date
  /** Whether the selected news has a limited publication lifetime */
  hasLifetime: boolean;
  /** Display string like "до 10 фев. 21:30" */
  lifetimeEndLabel?: string;
}

export const PinNewsModal: React.FC<PinNewsModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  hasLifetime,
  lifetimeEndLabel = 'до 10 фев. 21:30',
}) => {
  // 'default' = first option (Навсегда / До окончания срока), 'custom' = Выбрать дату и время
  const [option, setOption] = useState<'default' | 'custom'>('default');
  const [customDate, setCustomDate] = useState('');
  const [customTime, setCustomTime] = useState('');

  const handleConfirm = () => {
    if (option === 'custom' && customDate) {
      onConfirm(`${customDate}${customTime ? 'T' + customTime : ''}`);
    } else {
      onConfirm(hasLifetime ? lifetimeEndLabel : null);
    }
    // Reset state
    setOption('default');
    setCustomDate('');
    setCustomTime('');
  };

  const handleClose = () => {
    setOption('default');
    setCustomDate('');
    setCustomTime('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-[100]"
            onClick={handleClose}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[452px] bg-white rounded-[12px] shadow-[0px_24px_48px_rgba(0,0,0,0.16)] overflow-hidden font-['IBM_Plex_Sans']"
          >
            {/* Preview Image */}
            <div className="relative w-full h-[260px] bg-[#F2F4F8] overflow-hidden">
              <Background />
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-[16px] right-[16px] w-[36px] h-[36px] rounded-full bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer z-10"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d={svgPaths.p314604c0} fill="#161616" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-[24px] px-[16px] py-[20px]">
              {/* Title & Description */}
              <div className="flex flex-col gap-[8px]">
                <h2 className="text-[24px] font-semibold text-[#161616] leading-[30px] font-['Montserrat']">
                  Закрепить новость
                </h2>
                <p className="text-[14px] text-[#525252] leading-[20px] tracking-[0.16px]">
                  Новость будет закреплена в новостной ленте сотрудников сразу после подтверждения
                </p>
              </div>

              {/* Radio Options */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">
                {/* Label */}
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
                  <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                    <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Выберите срок закрепления новости</p>
                  </div>
                </div>

                {/* Option 1 */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 cursor-pointer"
                  onClick={() => setOption('default')}
                >
                  <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                      <div className="absolute inset-[6.25%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                          {option === 'default' ? (
                            <g>
                              <path d={radioSvgPaths.p3d52b680} fill="#161616" />
                              <path d={radioSvgPaths.p91fdd00} fill="#161616" />
                            </g>
                          ) : (
                            <path d={radioSvgPaths.p2e910480} fill="#161616" />
                          )}
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start py-px relative shrink-0">
                      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
                        {hasLifetime
                          ? `До окончания срока публикации ( ${lifetimeEndLabel} )`
                          : 'Навсегда'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Option 2 */}
                <div
                  className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 cursor-pointer"
                  onClick={() => setOption('custom')}
                >
                  <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                  <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                    <div className="overflow-clip relative shrink-0 size-[20px]">
                      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                      <div className="absolute inset-[6.25%]">
                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                          {option === 'custom' ? (
                            <g>
                              <path d={radioSvgPaths.p3d52b680} fill="#161616" />
                              <path d={radioSvgPaths.p91fdd00} fill="#161616" />
                            </g>
                          ) : (
                            <path d={radioSvgPaths.p2e910480} fill="#161616" />
                          )}
                        </svg>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start py-px relative shrink-0">
                      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
                        Выбрать дату и время
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date/Time pickers when custom selected */}
                <AnimatePresence>
                  {option === 'custom' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="content-stretch flex gap-[2px] items-start relative w-full">
                        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                        {/* Date field */}
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full">
                            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Дата</p>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="h-[40px] relative shrink-0 w-full">
                              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
                                  <input
                                    type="date"
                                    value={customDate}
                                    onChange={(e) => setCustomDate(e.target.value)}
                                    className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] tracking-[0.32px] whitespace-nowrap z-[4] bg-transparent border-none outline-none appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                  />
                                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3] pointer-events-none">
                                    <div className="overflow-clip relative shrink-0 size-[16px]">
                                      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                                      <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                                          <path d={calendarSvgPaths.p2a858000} fill="#161616" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-[#f4f4f4] inset-0 z-[1]">
                                    <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Time field */}
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                          <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full">
                            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Время</p>
                          </div>
                          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                            <div className="h-[40px] relative shrink-0 w-full">
                              <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                                <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
                                  <input
                                    type="time"
                                    value={customTime}
                                    onChange={(e) => setCustomTime(e.target.value)}
                                    className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] tracking-[0.32px] whitespace-nowrap z-[4] bg-transparent border-none outline-none appearance-none [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                                  />
                                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3] pointer-events-none">
                                    <div className="overflow-clip relative shrink-0 size-[16px]">
                                      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                                      <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]">
                                        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                                          <path d={calendarSvgPaths.p2a858000} fill="#161616" />
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="absolute bg-[#f4f4f4] inset-0 z-[1]">
                                    <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Confirm Button */}
              <button
                onClick={handleConfirm}
                disabled={option === 'custom' && !customDate}
                className={`w-full h-[48px] rounded-[4px] text-[14px] font-medium tracking-[0.16px] transition-all cursor-pointer ${
                  option === 'custom' && !customDate
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-[#0F62FE] text-white hover:bg-[#0043CE] shadow-[0px_4px_12px_rgba(15,98,254,0.2)]'
                }`}
              >
                Подтвердить
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};