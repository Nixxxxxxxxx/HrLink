import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import svgPaths from '../../imports/svg-nyat4cxjv0';
import { useToast } from './Toast';

interface AddToFolderModalProps {
  isOpen: boolean;
  onClose: () => void;
  folders: string[];
  onConfirm: (selectedFolders: string[]) => void;
  onCreateFolder: (name: string) => void;
  /** Folders the news already belongs to */
  initialSelected?: string[];
}

export const AddToFolderModal: React.FC<AddToFolderModalProps> = ({
  isOpen,
  onClose,
  folders,
  onConfirm,
  onCreateFolder,
  initialSelected = [],
}) => {
  const { showToast } = useToast();
  const [selectedFolders, setSelectedFolders] = useState<string[]>(initialSelected);
  const [isCreating, setIsCreating] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setSelectedFolders(initialSelected);
      setIsCreating(false);
      setNewFolderName('');
    }
  }, [isOpen, initialSelected]);

  const toggleFolder = (folder: string) => {
    setSelectedFolders(prev =>
      prev.includes(folder) ? prev.filter(f => f !== folder) : [...prev, folder]
    );
  };

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      showToast(`Папка «${newFolderName.trim()}» создана`);
      onCreateFolder(newFolderName.trim());
      setSelectedFolders(prev => [...prev, newFolderName.trim()]);
      setNewFolderName('');
      setIsCreating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-[200]"
            onClick={onClose}
          />
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[463px] bg-white rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] z-[201] flex flex-col font-['IBM_Plex_Sans'] max-h-[80vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-[20px] h-[60px] shrink-0">
              <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#161616] text-[18px] leading-[24px]">
                Добавить новость в папку
              </p>
              <button
                onClick={onClose}
                className="size-[32px] rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-[#e0e0e0] transition-colors cursor-pointer"
              >
                <svg width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none">
                  <path d={svgPaths.pae2e180} fill="#161616" />
                </svg>
              </button>
            </div>

            {/* Folder list */}
            <div className="flex-1 overflow-y-auto min-h-0 flex flex-col gap-[4px] pt-[8px]">
              {/* Create folder row */}
              {!isCreating ? (
                <button
                  onClick={() => setIsCreating(true)}
                  className="flex items-center gap-[8px] px-[20px] py-[11px] w-full hover:bg-[#f4f7fb] transition-colors cursor-pointer"
                >
                  {/* Plus avatar */}
                  <div className="bg-[rgba(1,76,218,0.2)] flex items-center justify-center rounded-full size-[28px] relative shrink-0 overflow-hidden">
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                      <path d={svgPaths.p22ea8600} fill="#054ADA" />
                    </svg>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
                  </div>
                  <span className="text-[#0f62fe] text-[14px] leading-[18px] tracking-[0.16px]">
                    Создать папку
                  </span>
                  <svg width="10" height="10" viewBox="0 0 8 8" fill="none" className="">
                    <path d={svgPaths.p22ea8600} fill="#0F62FE" />
                  </svg>
                </button>
              ) : (
                <div className="flex items-center gap-[8px] px-[20px] py-[8px] w-full">
                  {/* Plus avatar */}
                  <div className="bg-[rgba(1,76,218,0.2)] flex items-center justify-center rounded-full size-[28px] relative shrink-0 overflow-hidden">
                    <svg width="10" height="10" viewBox="0 0 8 8" fill="none">
                      <path d={svgPaths.p22ea8600} fill="#054ADA" />
                    </svg>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
                  </div>
                  <div className="flex-1 h-[32px] relative">
                    <div className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Название папки"
                      value={newFolderName}
                      onChange={(e) => setNewFolderName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCreateFolder();
                        if (e.key === 'Escape') { setIsCreating(false); setNewFolderName(''); }
                      }}
                      autoFocus
                      className="w-full h-full px-[12px] py-[7px] bg-[#f4f4f4] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] placeholder:text-[#a8a8a8] outline-none border-none"
                    />
                  </div>
                  <button
                    onClick={handleCreateFolder}
                    disabled={!newFolderName.trim()}
                    className="size-[32px] rounded-full bg-[#0f62fe] hover:bg-[#0043CE] disabled:bg-[#0f62fe]/40 flex items-center justify-center shrink-0 cursor-pointer disabled:cursor-not-allowed transition-colors"
                  >
                    <Check size={16} className="text-white" />
                  </button>
                </div>
              )}

              {/* Folder items */}
              {folders.map((folder) => {
                const isSelected = selectedFolders.includes(folder);
                return (
                  <button
                    key={folder}
                    onClick={() => toggleFolder(folder)}
                    className={`flex items-center gap-[8px] px-[20px] py-[11px] w-full transition-colors cursor-pointer ${
                      isSelected ? 'bg-[#f4f7fb]' : 'hover:bg-[#f4f7fb]'
                    }`}
                  >
                    {/* Folder avatar */}
                    <div className="bg-[#014cda] flex items-center justify-center rounded-full size-[28px] relative shrink-0">
                      <div className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-full" />
                      <svg width="12.6" height="12.6" viewBox="0 0 12.6154 12.6154" fill="none">
                        <path d={svgPaths.p3f9e2180} fill="white" />
                        <path d={svgPaths.p248b6ac0} fill="white" />
                      </svg>
                      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
                    </div>
                    <span className="text-[#161616] text-[16px] leading-[22px] flex-1 text-left truncate">
                      {folder}
                    </span>
                    {isSelected && (
                      <svg width="16" height="16" viewBox="0 0 15.9957 15.9957" fill="none" className="shrink-0">
                        <path d={svgPaths.p2e0fbe00} stroke="#0F62FE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33297" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-[22px] py-[16px] shrink-0">
              <button
                onClick={() => {
                  onConfirm(selectedFolders);
                  onClose();
                }}
                className="w-full h-[48px] bg-[#0f62fe] hover:bg-[#0043CE] rounded-[4px] flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="text-white text-[14px] leading-[18px] tracking-[0.16px]">
                  Подтвердить
                </span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};