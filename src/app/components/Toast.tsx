import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-9s9csteufc';

interface ToastItem {
  id: string;
  message: string;
  type?: 'success' | 'error';
}

interface ToastContextValue {
  showToast: (message: string, type?: 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

export const useToast = () => useContext(ToastContext);

function ToastNotification({ toast, onClose }: { toast: ToastItem; onClose: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(toast.id), 4000);
    return () => clearTimeout(timer);
  }, [toast.id, onClose]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.95 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="flex items-stretch bg-[#393939] min-w-[320px] max-w-[420px] shadow-[0px_8px_24px_rgba(0,0,0,0.25)]"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {/* Green left border */}
      <div className="w-[3px] bg-[#42BE65] shrink-0" />

      {/* Checkmark icon */}
      <div className="flex items-center pl-[16px] shrink-0">
        <div className="relative size-[20px]">
          <div className="absolute bg-black inset-1/4" />
          <div className="absolute inset-0">
            <svg className="block size-full" fill="none" viewBox="0 0 20 20">
              <path
                d="M10 0C8.02219 0 6.08879 0.586 4.4443 1.6853C2.79981 2.7846 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2154 17.2002 18.3147 15.5557C19.414 13.9112 20 11.9778 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM8.57143 13.9933L5 10.4221L6.13614 9.28571L8.57143 11.7209L13.8643 6.42857L15.0041 7.56136L8.57143 13.9933Z"
                fill="#42BE65"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 flex items-center py-[15px] px-[16px] min-w-0">
        <p className="text-[14px] leading-[18px] tracking-[0.16px] text-white font-semibold truncate">
          {toast.message}
        </p>
      </div>

      {/* Close button */}
      <button
        onClick={() => onClose(toast.id)}
        className="flex items-center justify-center w-[48px] shrink-0 cursor-pointer hover:bg-white/5 transition-colors"
      >
        <svg className="size-[16px]" fill="none" viewBox="0 0 8 8">
          <path d={svgPaths.p314604c0} fill="white" />
        </svg>
      </button>
    </motion.div>
  );
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: 'success' | 'error' = 'success') => {
    const id = `toast-${Date.now()}-${Math.random()}`;
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div className="fixed top-[16px] right-[16px] z-[99999] flex flex-col gap-[8px] items-end">
          <AnimatePresence mode="popLayout">
            {toasts.map(toast => (
              <ToastNotification key={toast.id} toast={toast} onClose={removeToast} />
            ))}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}