import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import radioSvgPaths from '../../imports/svg-qs3szktluo';
import svgPaths from '../../imports/svg-l6nshrnylo';

interface PinConflictModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** User chose "Заменить" — proceed to pin the new news */
  onReplace: () => void;
  /** Currently pinned news info */
  pinnedNews: {
    title: string;
    coverImage?: string;
  } | null;
}

export const PinConflictModal: React.FC<PinConflictModalProps> = ({
  isOpen,
  onClose,
  onReplace,
  pinnedNews,
}) => {
  const [action, setAction] = useState<'keep' | 'replace'>('keep');

  const handleConfirm = () => {
    if (action === 'replace') {
      onReplace();
    } else {
      onClose();
    }
    setAction('keep');
  };

  const handleClose = () => {
    setAction('keep');
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
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[519px] bg-white rounded-[8px] shadow-[0px_24px_48px_rgba(0,0,0,0.16)] overflow-hidden font-['IBM_Plex_Sans']"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-[60px] px-[20px]">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#161616] text-[18px] leading-[24px]">
                Уже есть закрепленная новость
              </p>
              <button
                onClick={handleClose}
                className="w-[36px] h-[36px] rounded-full bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.12)] flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d={svgPaths.p314604c0} fill="#161616" />
                </svg>
              </button>
            </div>

            {/* Pinned news card */}
            <div className="mx-[16px] bg-[#f2f4f8] rounded-[8px] overflow-hidden h-[72px] relative flex items-center">
              {/* Thumbnail */}
              {pinnedNews?.coverImage && (
                <div className="ml-[12px] w-[44px] h-[35px] rounded-[2px] overflow-hidden shrink-0 relative">
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={pinnedNews.coverImage}
                  />
                </div>
              )}
              {/* Title */}
              <p
                className={`font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic text-[#161616] text-[14px] tracking-[0.16px] whitespace-pre-wrap flex-1 min-w-0 ${pinnedNews?.coverImage ? 'ml-[10px]' : 'ml-[12px]'} mr-[42px]`}
              >
                {pinnedNews?.title || 'Закрепленная новость'}
              </p>
              {/* Pin icon badge */}
              <div className="absolute right-[12px] top-1/2 -translate-y-1/2">
                <div className="relative size-[22px]">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                    <g filter="url(#filter_pin_conflict)">
                      <circle cx="11" cy="11" fill="#616161" fillOpacity="0.4" r="11" />
                    </g>
                    <defs>
                      <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter_pin_conflict" width="22" x="0" y="0">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="absolute overflow-clip right-[4.71px] size-[12.571px] top-[4.71px]">
                  <div className="absolute inset-[6.25%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                      <path d={radioSvgPaths.p1d0c740} fill="white" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio options */}
            <div className="content-stretch flex flex-col gap-[8px] items-start px-[16px] pt-[20px]">
              {/* Label */}
              <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Выберите действие</p>
              </div>

              {/* Option: Оставить */}
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 cursor-pointer"
                onClick={() => setAction('keep')}
              >
                <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-[6.25%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                        {action === 'keep' ? (
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
                      Оставить
                    </p>
                  </div>
                </div>
              </div>

              {/* Option: Заменить */}
              <div
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 cursor-pointer"
                onClick={() => setAction('replace')}
              >
                <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-[20px]">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-[6.25%]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                        {action === 'replace' ? (
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
                      Заменить
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <div className="px-[16px] py-[20px]">
              <button
                onClick={handleConfirm}
                className="w-full h-[48px] bg-[#0f62fe] rounded-[4px] flex items-center justify-center cursor-pointer hover:bg-[#0043CE] transition-colors"
              >
                <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic text-[14px] text-white tracking-[0.16px]">
                  Подтвердить
                </p>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};