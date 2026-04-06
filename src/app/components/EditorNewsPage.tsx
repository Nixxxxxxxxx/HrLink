import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, Plus, ChevronDown, X, MessageSquare, MoreHorizontal, ChevronLeft, ChevronRight, Eye, Pin } from 'lucide-react';
import { CHANNELS_DATA, NewsItem } from '../data/channels';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './Button';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { TemplatesView } from './TemplatesView';
import type { Template } from './TemplatesView';
import { PinNewsModal } from './PinNewsModal';
import { PinConflictModal } from './PinConflictModal';
import { AddToFolderModal } from './AddToFolderModal';
import folderSvgPaths from '../../imports/svg-cgofl14bux';
import { useToast } from './Toast';
import { NewsStatisticsPage } from './NewsStatisticsPage';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const FILTER_OPTIONS = {
  targets: ["Все таргеты", "Топ менеджмент", "Сотрудники", "Новости компании", "Инженеры", "Маркетологи"],
  channels: ["Все каналы", "Важные новости", "ПромИнвест Новости", "Команда разработки", "Дизайн", "HR"],
  statuses: ["Все статусы", "Опубликовано", "Черновик", "Запланировано", "Архив"],
  authors: ["Все авторы", "Иван Иванов", "Мария Петрова", "Александр Сидоров"],
  time: ["За все время", "За сегодня", "За неделю", "За месяц", "За квартал"]
};

// System tabs (always visible, left of separator)
const SYSTEM_TABS = ["Все", "Шаблоны", "Архив"];

// User-created folder tabs (right of separator)
const INITIAL_FOLDER_TABS = [
  "Контент план",
  "Для важных новостей",
  "3 квартал 2026",
  "4 квартал 2026",
  "Маркетинг",
];

// How many folder tabs to show before "Ещё"
const VISIBLE_FOLDER_COUNT = 5;

const ALL_TABS = [...SYSTEM_TABS, ...INITIAL_FOLDER_TABS];

const RANDOM_TARGETS = [
  "Топ-менеджмент, стратегия, новости компании",
  "Инженеры, менеджеры проектов, инновации",
  "Сотрудники всех уровней, мотивация",
  "Производственный отдел, безопасность",
  "Бухгалтерия, отчетность"
];

const RANDOM_AUTHORS = [
  "Иван Иванов",
  "Мария Петрова",
  "Александр Сидоров",
  "Иван Иванов",
  "Мария Петрова",
];

const StatusTag = ({ status }: { status: string }) => {
  switch (status) {
    case 'Опубликовано':
      return (
        <div className="bg-[#a7f0ba] px-2 py-0.5 rounded-[12px] w-fit flex items-center h-[24px] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)] border border-[#74e792]">
          <span className="text-[#0e6027] text-[12px] font-normal leading-[16px] tracking-[0.32px]">Опубликовано</span>
        </div>
      );
    case 'Черновик':
      return (
        <div className="bg-[#dde1e6] px-2 py-0.5 rounded-[12px] w-fit flex items-center h-[24px]">
          <span className="text-[#121619] text-[12px] font-normal leading-[16px] tracking-[0.32px]">Черновик</span>
        </div>
      );
    case 'Запланировано':
      return (
        <div className="bg-[#e5e0df] px-2 py-0.5 rounded-[12px] w-fit flex items-center h-[24px]">
          <span className="text-[#171414] text-[12px] font-normal leading-[16px] tracking-[0.32px]">Запланировано</span>
        </div>
      );
    case 'Архив':
      return (
        <div className="bg-[#e5e0df] px-2 py-0.5 rounded-[12px] w-fit flex items-center h-[24px]">
          <span className="text-[#171414] text-[12px] font-normal leading-[16px] tracking-[0.32px]">Архив</span>
        </div>
      );
    default:
      return null;
  }
};

const BatchActionsBar = ({ count, onCancel, onArchive, onDelete, onPin, onUnpin, isPinnedSelected, onAddToFolder }: { count: number; onCancel: () => void; onArchive: () => void; onDelete: () => void; onPin?: () => void; onUnpin?: () => void; isPinnedSelected?: boolean; onAddToFolder?: () => void }) => {
  return (
    <div className="bg-[#0f62fe] flex items-center h-[48px] w-full isolate z-20">
      <div className="flex-[1_0_0] px-[16px] py-[15px]">
        <p className="font-['IBM_Plex_Sans'] text-[14px] text-white tracking-[0.16px] leading-[18px]">
          {count} {count === 1 ? 'новость выбрана' : (count >= 2 && count <= 4 ? 'новости выбрано' : 'новостей выбрано')}
        </p>
      </div>
      <div className="flex items-center self-stretch h-full">
        {count === 1 && (
          isPinnedSelected && onUnpin ? (
            <button 
              onClick={onUnpin}
              className="h-full px-[16px] hover:bg-[#0353e9] transition-colors border-l border-white/10 flex items-center gap-[6px]"
            >
              <Pin size={14} className="text-white" />
              <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Открепить</p>
            </button>
          ) : onPin ? (
            <button 
              onClick={onPin}
              className="h-full px-[16px] hover:bg-[#0353e9] transition-colors border-l border-white/10 flex items-center gap-[6px]"
            >
              <Pin size={14} className="text-white" />
              <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Закрепить</p>
            </button>
          ) : null
        )}
        <button 
          onClick={onArchive}
          className="h-full px-[16px] hover:bg-[#0353e9] transition-colors border-l border-white/10"
        >
          <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">В архив</p>
        </button>
        <button 
          onClick={onDelete}
          className="h-full px-[16px] hover:bg-[#0353e9] transition-colors border-l border-white/10"
        >
          <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Снять с публикации</p>
        </button>
        <button onClick={onAddToFolder} className="h-full px-[16px] hover:bg-[#0353e9] transition-colors border-l border-white/10 cursor-pointer">
          <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Добавить в папку</p>
        </button>
        <div className="w-[1px] h-[24px] bg-white/30 mx-2" />
        <button onClick={onCancel} className="h-full px-[16px] hover:bg-[#da1e28] transition-colors border-l border-white/10 flex items-center gap-2">
          <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Отменить</p>
          <X size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
};

interface EditorNewsPageProps {
  onAddNews: () => void;
  onAddTemplate?: () => void;
  onEditTemplate?: (template: Template) => void;
  onEditNews?: (newsData: { title: string; content: string; image?: string; channelId: string; channelTitle: string }) => void;
  channels: any[];
  setChannels: React.Dispatch<React.SetStateAction<any[]>>;
}

export const EditorNewsPage: React.FC<EditorNewsPageProps> = ({ onAddNews, onAddTemplate, onEditTemplate, onEditNews, channels, setChannels }) => {
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState("Все");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateDropdownOpen, setIsCreateDropdownOpen] = useState(false);
  
  // Filter States — one per dropdown
  const [selectedTarget, setSelectedTarget] = useState("Все таргеты");
  const [selectedChannel, setSelectedChannel] = useState("Все каналы");
  const [selectedStatus, setSelectedStatus] = useState("Все статусы");
  const [selectedAuthor, setSelectedAuthor] = useState("Все авторы");
  const [selectedTime, setSelectedTime] = useState("За все время");
  const [openFilterKey, setOpenFilterKey] = useState<string | null>(null);
  const [showOnlyImportant, setShowOnlyImportant] = useState(false);
  
  // Statistics view state
  const [statisticsNewsTitle, setStatisticsNewsTitle] = useState<string | null>(null);

  // Selection State
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  
  // Pin State
  const [pinnedNewsId, setPinnedNewsId] = useState<string | null>(null);
  const [pinModalOpen, setPinModalOpen] = useState(false);
  const [pinTargetNews, setPinTargetNews] = useState<any>(null);
  const [pinUntilLabel, setPinUntilLabel] = useState<string | null>(null);
  const [pinConflictOpen, setPinConflictOpen] = useState(false);
  
  // Pagination State
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [isItemsPerPageOpen, setIsItemsPerPageOpen] = useState(false);
  const [isPageSelectOpen, setIsPageSelectOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  // Folder State
  const [folderTabs, setFolderTabs] = useState<string[]>(INITIAL_FOLDER_TABS);
  const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const createFolderBtnRef = useRef<HTMLDivElement>(null);
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  // newsId -> set of folder names
  const [newsToFolders, setNewsToFolders] = useState<Record<string, string[]>>({});

  const visibleFolders = folderTabs.slice(0, VISIBLE_FOLDER_COUNT);
  const overflowFolders = folderTabs.slice(VISIBLE_FOLDER_COUNT);

  const allNews = useMemo(() => {
    const seenIds = new Set();
    const flattened: any[] = [];

    channels.forEach(channel => {
      channel.news.forEach((news, idx) => {
        if (!seenIds.has(news.id)) {
          seenIds.add(news.id);
          const isImportant = news.type === 'important' || news.type === 'important_mandatory' || channel.id === 'important';
          const hashVal = news.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
          flattened.push({
            ...news,
            channelTitle: channel.title,
            randomTarget: RANDOM_TARGETS[hashVal % RANDOM_TARGETS.length],
            author: RANDOM_AUTHORS[hashVal % RANDOM_AUTHORS.length],
            status: (news as any).status || (idx % 4 === 0 ? 'Опубликовано' : idx % 4 === 1 ? 'Черновик' : idx % 4 === 2 ? 'Запланировано' : 'Архив'),
            fullPublishedDate: news.date,
            isPinned: news.id === pinnedNewsId,
            isImportant
          });
        }
      });
    });

    const months: Record<string, number> = {
      'янв': 0, 'фев': 1, 'мар': 2, 'апр': 3, 'май': 4, 'июн': 5,
      'июл': 6, 'авг': 7, 'сен': 8, 'окт': 9, 'ноя': 10, 'дек': 11
    };

    const parseDate = (d: string) => {
      try {
        const p = d.split(' ');
        const day = parseInt(p[0]);
        const m = p[1].replace(',', '').toLowerCase().substring(0, 3);
        
        let year = 2026;
        let hours = 0;
        let minutes = 0;
        if (p[2] && p[2].includes(':')) {
          const t = p[2].split(':');
          hours = parseInt(t[0]);
          minutes = parseInt(t[1]);
        }
        
        return new Date(year, months[m] || 0, day, hours, minutes).getTime();
      } catch (e) {
        return 0;
      }
    };

    return flattened.sort((a, b) => {
      if (a.id.startsWith('new-') && !b.id.startsWith('new-')) return -1;
      if (!a.id.startsWith('new-') && b.id.startsWith('new-')) return 1;
      
      const dateA = parseDate(a.fullPublishedDate);
      const dateB = parseDate(b.fullPublishedDate);
      
      if (dateA !== dateB) return dateB - dateA;
      return b.id.localeCompare(a.id);
    });
  }, [channels, pinnedNewsId]);

  const filteredNews = useMemo(() => {
    let res = [...allNews];
    // Tab filter
    if (activeTab !== "Все") {
      if (activeTab === "Архив") res = res.filter(n => n.status === "Архив");
      else if (activeTab === "Для важных новостей") res = res.filter(n => n.channelTitle === "Важные новости");
      else if (folderTabs.includes(activeTab)) {
        res = res.filter(n => (newsToFolders[n.id] || []).includes(activeTab));
      }
    }
    
    // Target filter
    if (selectedTarget !== "Все таргеты") {
      res = res.filter(n => n.randomTarget.toLowerCase().includes(selectedTarget.toLowerCase()));
    }

    // Channel filter
    if (selectedChannel !== "Все каналы") {
      res = res.filter(n => n.channelTitle === selectedChannel);
    }

    // Status filter
    if (selectedStatus !== "Все статусы") {
      res = res.filter(n => n.status === selectedStatus);
    }

    // Author filter
    if (selectedAuthor !== "Все авторы") {
      res = res.filter(n => n.author === selectedAuthor);
    }

    // Time filter
    if (selectedTime !== "За все время") {
      const now = new Date(2026, 2, 2).getTime(); // Today: March 2, 2026
      const monthsMap: Record<string, number> = {
        'янв': 0, 'фев': 1, 'мар': 2, 'апр': 3, 'май': 4, 'июн': 5,
        'июл': 6, 'авг': 7, 'сен': 8, 'окт': 9, 'ноя': 10, 'дек': 11
      };
      const parseD = (d: string) => {
        try {
          const p = d.split(' ');
          const day = parseInt(p[0]);
          const m = p[1].replace(',', '').toLowerCase().substring(0, 3);
          return new Date(2026, monthsMap[m] || 0, day).getTime();
        } catch { return 0; }
      };
      let cutoff = 0;
      switch (selectedTime) {
        case "За сегодня": cutoff = now - 24 * 60 * 60 * 1000; break;
        case "За неделю": cutoff = now - 7 * 24 * 60 * 60 * 1000; break;
        case "За месяц": cutoff = now - 30 * 24 * 60 * 60 * 1000; break;
        case "За квартал": cutoff = now - 90 * 24 * 60 * 60 * 1000; break;
      }
      if (cutoff > 0) {
        res = res.filter(n => parseD(n.fullPublishedDate) >= cutoff);
      }
    }

    if (showOnlyImportant) {
      res = res.filter(n => n.isImportant);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      res = res.filter(n => n.title.toLowerCase().includes(q));
    }
    return res;
  }, [allNews, activeTab, searchQuery, selectedTarget, selectedChannel, selectedStatus, selectedAuthor, selectedTime, showOnlyImportant, folderTabs, newsToFolders]);

  const totalItems = filteredNews.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const paginatedNews = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredNews.slice(start, start + itemsPerPage);
  }, [filteredNews, currentPage, itemsPerPage]);

  const handleToggleSelect = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedIds.length === paginatedNews.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(paginatedNews.map(n => n.id));
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setSelectedIds([]);
  }, [activeTab, searchQuery, itemsPerPage, selectedTarget, selectedChannel, selectedStatus, selectedAuthor, selectedTime, showOnlyImportant]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleBatchArchive = () => {
    const count = selectedIds.length;
    setChannels(prev => {
      return prev.map(channel => {
        const updatedNews = channel.news.map(news => {
          if (selectedIds.includes(news.id)) {
            return { ...news, status: 'Архив' };
          }
          return news;
        });
        return { ...channel, news: updatedNews };
      });
    });
    showToast(`${count} ${count === 1 ? 'новость перемещена' : 'новостей перемещено'} в архив`);
    setSelectedIds([]);
  };

  const handleBatchDelete = () => {
    const count = selectedIds.length;
    setChannels(prev => {
      return prev.map(channel => {
        const updatedNews = channel.news.filter(news => !selectedIds.includes(news.id));
        return { ...channel, news: updatedNews };
      });
    });
    showToast(`${count} ${count === 1 ? 'новость снята' : 'новостей снято'} с публикации`);
    setSelectedIds([]);
  };

  // Show Statistics Page
  if (statisticsNewsTitle) {
    return (
      <NewsStatisticsPage
        newsTitle={statisticsNewsTitle}
        onBack={() => setStatisticsNewsTitle(null)}
      />
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden font-['IBM_Plex_Sans']">
      {/* Header */}
      <div className="px-4 h-[72px] flex items-center justify-between border-b border-[#E0E4EA] shrink-0 bg-white">
        <div className="flex items-center h-full min-w-0 flex-1 mr-[16px]">
          <h1 className="text-[18px] font-semibold text-[#161616] font-['Montserrat'] leading-[24px] mr-[36px] shrink-0">Новости</h1>
          <div className="flex items-center h-full min-w-0">
            {/* System tabs group: Все, Шаблоны, Архив */}
            <div className="flex items-center gap-[24px] h-full shrink-0">
              {SYSTEM_TABS.map(tab => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn("text-[14px] leading-[18px] tracking-[0.16px] transition-all relative h-full flex items-center p-[0px] whitespace-nowrap", isActive
                      ? "text-[#161616] font-semibold font-['IBM_Plex_Sans']"
                      : "text-[#525252] font-normal font-['IBM_Plex_Sans'] hover:text-[#161616]")}
                  >
                    {tab}
                    {isActive && (
                      <motion.div 
                        layoutId="editor-tab-underline" 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Vertical separator */}
            <div className="w-[1px] h-[32px] bg-[#E0E4EA] mx-[16px] shrink-0" />

            {/* Folder tabs group */}
            <div className="flex items-center gap-[24px] h-full shrink-0">
              {visibleFolders.map(tab => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={cn("text-[14px] leading-[18px] tracking-[0.16px] transition-all relative h-full flex items-center p-[0px] whitespace-nowrap", isActive
                      ? "text-[#161616] font-semibold font-['IBM_Plex_Sans']"
                      : "text-[#525252] font-normal font-['IBM_Plex_Sans'] hover:text-[#161616]")}
                  >
                    {tab}
                    {isActive && (
                      <motion.div 
                        layoutId="editor-tab-underline" 
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* "Ещё" overflow button */}
            {overflowFolders.length > 0 && (
              <div className="relative h-full flex items-center ml-[8px] shrink-0">
                <button
                  onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                  className={cn(
                    "flex items-center gap-[8px] px-[16px] py-[11px] text-[14px] leading-[18px] tracking-[0.16px] transition-colors relative h-full",
                    overflowFolders.includes(activeTab)
                      ? "text-[#161616] font-semibold"
                      : "text-[#161616] font-normal hover:text-[#0F62FE]"
                  )}
                >
                  {overflowFolders.includes(activeTab) ? activeTab : "Еще"}
                  <motion.div
                    animate={{ rotate: isMoreDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} className="text-[#525252]" />
                  </motion.div>
                  {overflowFolders.includes(activeTab) && (
                    <motion.div 
                      layoutId="editor-tab-underline" 
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0F62FE]" 
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
                <AnimatePresence>
                  {isMoreDropdownOpen && (
                    <>
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[90]" 
                        onClick={() => setIsMoreDropdownOpen(false)} 
                      />
                      <motion.div 
                        initial={{ opacity: 0, y: 8, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
                        className="absolute left-0 top-full mt-1 w-[200px] bg-white border border-[#E0E0E0] rounded shadow-lg z-[100] py-1 origin-top-left"
                      >
                        {overflowFolders.map(tab => (
                          <button
                            key={tab}
                            onClick={() => { setActiveTab(tab); setIsMoreDropdownOpen(false); }}
                            className={cn(
                              "w-full text-left px-4 py-2 text-[14px] transition-colors whitespace-nowrap",
                              activeTab === tab
                                ? "bg-[#EDF5FF] text-[#0F62FE] font-medium"
                                : "hover:bg-gray-50 text-[#161616] font-normal"
                            )}
                          >
                            {tab}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            )}

            {/* Create folder button */}
            <div ref={createFolderBtnRef} className="relative h-full flex items-center shrink-0 mx-[4px] my-[0px] px-[8px] py-[0px]">
              <Button 
                variant="ghost" 
                className="h-[32px] shrink-0 p-[0px] m-[0px]"
                onClick={() => setIsCreateFolderOpen(true)}
              >
                Создать папку <Plus size={16} />
              </Button>
              <AnimatePresence>
                {isCreateFolderOpen && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[90]" 
                      onClick={() => { setIsCreateFolderOpen(false); setNewFolderName(''); }} 
                    />
                    <motion.div 
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ 
                        duration: 0.2, 
                        ease: [0.2, 0, 0, 1] 
                      }}
                      className="absolute left-0 top-full mt-1 w-[439px] bg-white rounded-[8px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] z-[100] origin-top-left font-['IBM_Plex_Sans']"
                    >
                      {/* Header with icon and title */}
                      <div className="flex items-center gap-[8px] px-[12px] pt-[16px] pb-[12px]">
                        {/* Folder avatar */}
                        <div className="bg-[#014cda] flex items-center justify-center rounded-[26px] size-[24px] relative shrink-0">
                          <div className="absolute border-[#397dfe] border-[0.097px] border-solid inset-0 pointer-events-none rounded-[26px]" />
                          <svg width="11" height="11" viewBox="0 0 10.8132 10.8132" fill="none">
                            <g clipPath="url(#clip_folder_popover)">
                              <path d={folderSvgPaths.p302235f0} fill="white" />
                              <path d={folderSvgPaths.p14cd6100} fill="white" />
                            </g>
                            <defs>
                              <clipPath id="clip_folder_popover">
                                <rect fill="white" height="10.8132" width="10.8132" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.387px_1.16px_0px_rgba(255,255,255,0.55)]" />
                        </div>
                        <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold text-[#161616] text-[14px] leading-[18px]">
                          Создать новую папку
                        </p>
                      </div>
                      {/* Input + Button row */}
                      <div className="flex gap-[12px] items-end px-[12px] pb-[16px]">
                        {/* Text input with label */}
                        <div className="flex-1 flex flex-col">
                          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] text-[#525252] text-[12px] tracking-[0.32px] pb-[8px]">
                            Название папки
                          </p>
                          <div className="h-[32px] relative w-full">
                            <div className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                            <div className="flex items-center size-full">
                              <input
                                type="text"
                                placeholder="Контент план"
                                value={newFolderName}
                                onChange={(e) => setNewFolderName(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' && newFolderName.trim()) {
                                    setFolderTabs(prev => [newFolderName.trim(), ...prev]);
                                    showToast(`Папка «${newFolderName.trim()}» создана`);
                                    setNewFolderName('');
                                    setIsCreateFolderOpen(false);
                                  }
                                }}
                                autoFocus
                                className="w-full h-full px-[16px] py-[7px] bg-[#f4f4f4] font-['IBM_Plex_Sans:Regular',sans-serif] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] placeholder:text-[#a8a8a8] outline-none border-none"
                              />
                            </div>
                          </div>
                        </div>
                        {/* Create button */}
                        <button
                          onClick={() => {
                            if (newFolderName.trim()) {
                              showToast(`Папка «${newFolderName.trim()}» создана`);
                              setFolderTabs(prev => [newFolderName.trim(), ...prev]);
                              setNewFolderName('');
                              setIsCreateFolderOpen(false);
                            }
                          }}
                          disabled={!newFolderName.trim()}
                          className={cn(
                            "h-[32px] w-[166px] shrink-0 rounded-[4px] flex items-center justify-center cursor-pointer transition-colors",
                            newFolderName.trim()
                              ? "bg-[#0f62fe] hover:bg-[#0043CE] text-white"
                              : "bg-[#0f62fe]/50 text-white/70 cursor-not-allowed"
                          )}
                        >
                          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] text-[14px] tracking-[0.16px]">
                            Создать
                          </p>
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="relative shrink-0 ml-[16px]">
          <Button 
            onClick={() => setIsCreateDropdownOpen(!isCreateDropdownOpen)}
            className="gap-4"
          >
            Создать новость
            <motion.div
              animate={{ rotate: isCreateDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </Button>
          <AnimatePresence>
            {isCreateDropdownOpen && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-[90]" 
                  onClick={() => setIsCreateDropdownOpen(false)} 
                />
                <motion.div 
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ 
                    duration: 0.2, 
                    ease: [0.2, 0, 0, 1] 
                  }}
                  className="absolute right-0 mt-1 w-[200px] bg-white border border-[#E0E0E0] rounded shadow-lg z-[100] py-1 origin-top-right"
                >
                  <button className="w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 font-normal transition-colors" onClick={() => { onAddNews(); setIsCreateDropdownOpen(false); }}>Новость</button>
                  <button className="w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 font-normal transition-colors" onClick={() => { onAddTemplate?.(); setIsCreateDropdownOpen(false); }}>Из шаблона</button>
                  <button className="w-full text-left px-4 py-2 text-[14px] hover:bg-gray-50 font-normal transition-colors">Опрос</button>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Templates view */}
      {activeTab === "Шаблоны" ? (
        <TemplatesView onCreateTemplate={onAddTemplate} onEditTemplate={onEditTemplate} />
      ) : (
      <>
      {/* Filters Bar */}
      <div className="px-6 py-3 flex items-center gap-4 border-b border-[#E0E4EA] bg-white shrink-0">
        <div className="relative w-[328px] shrink-0">
          <input 
            type="text" 
            placeholder="Поиск по новостям" 
            className="w-full bg-[#F2F4F8] rounded-[4px] py-2 pl-10 pr-10 text-[14px] outline-none border-none focus:ring-1 focus:ring-[#0F62FE]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#525252]" size={16} />
        </div>

        <div className="flex items-center gap-2">
          {Object.entries(FILTER_OPTIONS).map(([key, options]) => {
            // Map each filter key to its state and setter
            const filterStateMap: Record<string, { value: string; setter: (v: string) => void; defaultVal: string }> = {
              targets: { value: selectedTarget, setter: setSelectedTarget, defaultVal: "Все таргеты" },
              channels: { value: selectedChannel, setter: setSelectedChannel, defaultVal: "Все каналы" },
              statuses: { value: selectedStatus, setter: setSelectedStatus, defaultVal: "Все статусы" },
              authors: { value: selectedAuthor, setter: setSelectedAuthor, defaultVal: "Все авторы" },
              time: { value: selectedTime, setter: setSelectedTime, defaultVal: "За все время" },
            };
            const { value: currentValue, setter, defaultVal } = filterStateMap[key];
            const isActive = currentValue !== defaultVal;
            const isOpen = openFilterKey === key;
            
            return (
              <div key={key} className={cn("relative", isOpen && "z-[100]")}>
                <div 
                  onClick={() => setOpenFilterKey(isOpen ? null : key)}
                  className={cn(
                    "flex items-center gap-1 bg-white border px-3 py-1.5 rounded cursor-pointer transition-colors group",
                    isOpen ? "border-[#0F62FE] bg-gray-50" : "border-transparent hover:bg-gray-50"
                  )}
                >
                  <span className={cn(
                    "text-[14px] whitespace-nowrap",
                    isActive ? "text-[#0F62FE] font-medium" : "text-[#161616]"
                  )}>
                    {currentValue}
                  </span>
                  <ChevronDown size={14} className={cn("transition-transform", isOpen ? "rotate-180 text-[#0F62FE]" : "text-[#525252] group-hover:text-[#161616]")} />
                </div>
                
                <AnimatePresence>
                  {isOpen && (
                    <>
                      <div className="fixed inset-0 z-[9998]" onClick={() => setOpenFilterKey(null)} />
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        className="absolute left-0 mt-1 min-w-full bg-white border border-[#E0E0E0] rounded shadow-lg z-[9999] py-1 max-h-[240px] overflow-y-auto"
                      >
                        {options.map((option) => (
                          <button
                            key={option}
                            onClick={() => {
                              setter(option);
                              setOpenFilterKey(null);
                            }}
                            className={cn(
                              "w-full text-left px-4 py-2 text-[14px] transition-colors whitespace-nowrap",
                              currentValue === option
                                ? "bg-[#F2F4F8] text-[#0F62FE] font-medium"
                                : "hover:bg-gray-50 text-[#161616]"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
          <label className="flex items-center gap-2 text-[#161616] text-[14px] ml-4 cursor-pointer">
            <input 
              type="checkbox" 
              className="w-4 h-4 accent-[#0F62FE]" 
              checked={showOnlyImportant}
              onChange={(e) => setShowOnlyImportant(e.target.checked)}
            />
            Только важные
          </label>
        </div>
      </div>

      {/* Content Table */}
      <div className="flex-1 overflow-auto px-4 py-4">
        <div className="border border-[#E0E4EA] rounded-[4px] overflow-hidden min-w-[1100px] flex flex-col relative">
          
          {/* Header Row */}
          <div className="bg-[#F2F4F8] border-b border-[#E0E4EA] sticky top-0 z-10 h-[40px] flex items-center pr-[16px] shrink-0">
              {/* Select Column Header */}
              <div className="pl-[16px] py-[10px] shrink-0">
                <div 
                  className="size-[20px] cursor-pointer flex items-center justify-center border border-[#161616] bg-white rounded-[2px]"
                  onClick={handleToggleSelectAll}
                >
                  {selectedIds.length > 0 && (
                    <div className={cn(
                      "bg-[#161616]", 
                      selectedIds.length === paginatedNews.length ? "size-[10px]" : "h-[2px] w-[10px]"
                    )} />
                  )}
                </div>
              </div>
              {/* News Column */}
              <div className="flex-[1_0_0] max-w-[520px] h-full pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Новость</p>
              </div>
              {/* Channel Column */}
              <div className="w-[180px] pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Канал</p>
              </div>
              {/* Target Column */}
              <div className="w-[286px] pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Таргет</p>
              </div>
              {/* Status Column */}
              <div className="w-[172px] pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Статус</p>
              </div>
              {/* Date Column */}
              <div className="w-[160px] pl-[16px] py-[11px] shrink-0">
                <div className="flex items-center gap-1">
                  <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Дата публикации</p>
                  <ChevronDown size={14} className="text-[#0F62FE]" />
                </div>
              </div>
          </div>

          {/* Batch Actions Bar (Animated under header) */}
          <AnimatePresence initial={false}>
            {selectedIds.length > 0 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 48, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="overflow-hidden sticky top-[40px] z-[9] border-b border-[#0F62FE]"
              >
                <BatchActionsBar 
                  count={selectedIds.length} 
                  onCancel={() => setSelectedIds([])} 
                  onArchive={handleBatchArchive}
                  onDelete={handleBatchDelete}
                  onPin={() => {
                    const selectedNews = paginatedNews.find(n => n.id === selectedIds[0]);
                    if (selectedNews) {
                      setPinTargetNews(selectedNews);
                      // If there's already a pinned news (different from selected), show conflict modal
                      if (pinnedNewsId && pinnedNewsId !== selectedNews.id) {
                        setPinConflictOpen(true);
                      } else {
                        setPinModalOpen(true);
                      }
                    }
                  }}
                  onUnpin={() => {
                    const selectedNews = paginatedNews.find(n => n.id === selectedIds[0]);
                    if (selectedNews) {
                      setPinnedNewsId(null);
                      setPinUntilLabel(null);
                      showToast('Новость откреплена');
                    }
                    setSelectedIds([]);
                  }}
                  isPinnedSelected={paginatedNews.find(n => n.id === selectedIds[0])?.isPinned}
                  onAddToFolder={() => {
                    setAddToFolderModalOpen(true);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Body */}
          <div className="bg-white flex-1 overflow-visible">
            {paginatedNews.map((news) => {
              const isSelected = selectedIds.includes(news.id);
              return (
                <div 
                  key={news.id} 
                  className={cn(
                    "flex items-start pr-[16px] border-b border-[#E0E4EA] transition-colors group cursor-pointer",
                    isSelected ? "bg-[#EDF5FF]" : "hover:bg-[#F2F4F8]"
                  )}
                  onClick={() => {
                    // Find the channel for this news
                    const channel = channels.find(c => c.news.some(n => n.id === news.id));
                    if (channel && onEditNews) {
                      onEditNews({
                        title: news.title,
                        content: news.content,
                        image: news.image,
                        channelId: channel.id,
                        channelTitle: channel.title,
                      });
                    }
                  }}
                >
                  {/* Select */}
                  <div className="pl-[16px] pt-[14px] pb-[30px] shrink-0">
                    <div 
                      className={cn(
                        "size-[20px] border flex items-center justify-center rounded-[2px] transition-colors",
                        isSelected ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#161616]"
                      )}
                      onClick={(e) => { e.stopPropagation(); handleToggleSelect(news.id, e); }}
                    >
                      {isSelected && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  {/* News */}
                  <div className="flex-[1_0_0] max-w-[520px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0">
                    <div className="flex gap-3">
                      <img src={news.image} alt="" className="w-[72px] h-[48px] object-cover bg-gray-100 rounded-[2px] shrink-0" />
                      <div className="flex flex-col gap-1 min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[14px] text-[#161616] font-medium line-clamp-1 leading-[18px] tracking-[0.16px]" title={news.title}>
                            {news.title}
                          </span>
                          {news.isImportant && (
                            <div className="backdrop-blur-[32px] bg-[#014cda] h-[22px] px-[10px] rounded-[32px] flex items-center justify-center overflow-hidden relative shrink-0">
                              <span className="text-[12px] text-white font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px] relative z-10">Важное</span>
                              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[#525252] text-[14px]">
                          <div className="flex items-center gap-1">
                            <Eye size={14} className="opacity-60" />
                            <span>{news.views} из 15K</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setStatisticsNewsTitle(news.title);
                            }}
                            className="text-[#0F62FE] hover:text-[#0043CE] text-[13px] leading-[18px] tracking-[0.16px] transition-colors"
                          >
                            Статистика
                          </button>
                          {news.isPinned && (
                            <div className="flex items-center gap-1 text-[#0043CE] font-medium">
                               <Pin size={14} />
                               <span>{pinUntilLabel ? pinUntilLabel : 'Навсегда'}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Channel */}
                  <div className="w-[180px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0">
                    <span className="text-[14px] text-[#161616] truncate block leading-[18px] tracking-[0.16px]">{news.channelTitle}</span>
                  </div>
                  {/* Target */}
                  <div className="w-[286px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0">
                    <span className="text-[14px] text-[#161616] line-clamp-2 leading-[18px] tracking-[0.16px]">{news.randomTarget}</span>
                  </div>
                  {/* Status */}
                  <div className="w-[172px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0">
                    <StatusTag status={news.status} />
                  </div>
                  {/* Date */}
                  <div className="w-[160px] pl-[16px] pt-[15px] pb-[16px] shrink-0">
                    <span className="text-[14px] text-[#161616] leading-[18px] tracking-[0.16px]">{news.fullPublishedDate}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {paginatedNews.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-[#525252]">
            <Search size={48} className="opacity-20 mb-4" />
            <p className="text-[16px]">Новости не найдены</p>
          </div>
        )}
      </div>

      {/* Pagination Bar */}
      <div className="px-6 py-3 border-t border-[#E0E4EA] flex items-center justify-between text-[14px] text-[#525252] bg-white shrink-0">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <div className="relative">
              <button 
                onClick={() => setIsItemsPerPageOpen(!isItemsPerPageOpen)}
                className="flex items-center gap-2 bg-[#F2F4F8] px-3 py-1.5 rounded-[4px] cursor-pointer hover:bg-[#e5e7eb] transition-colors"
              >
                <span>{itemsPerPage}</span>
                <ChevronDown size={14} className={cn("transition-transform", isItemsPerPageOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isItemsPerPageOpen && (
                  <>
                    <div className="fixed inset-0 z-[80]" onClick={() => setIsItemsPerPageOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute bottom-full mb-1 left-0 w-full bg-white border border-[#E0E0E0] rounded shadow-lg z-[90] overflow-hidden"
                    >
                      {[10, 20, 50, 100].map(val => (
                        <button 
                          key={val}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                          onClick={() => { setItemsPerPage(val); setIsItemsPerPageOpen(false); }}
                        >
                          {val}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>
          <span className="font-normal">
            {totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}–{Math.min(currentPage * itemsPerPage, totalItems)} из {totalItems} новостей
          </span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button 
                onClick={() => setIsPageSelectOpen(!isPageSelectOpen)}
                className="flex items-center gap-2 bg-[#F2F4F8] px-3 py-1.5 rounded-[4px] cursor-pointer hover:bg-[#e5e7eb] transition-colors"
              >
                <span>{currentPage}</span>
                <ChevronDown size={14} className={cn("transition-transform", isPageSelectOpen && "rotate-180")} />
              </button>
              <AnimatePresence>
                {isPageSelectOpen && (
                  <>
                    <div className="fixed inset-0 z-[80]" onClick={() => setIsPageSelectOpen(false)} />
                    <motion.div 
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="absolute bottom-full mb-1 left-0 w-[80px] bg-white border border-[#E0E0E0] rounded shadow-lg z-[90] max-h-[200px] overflow-y-auto"
                    >
                      {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                          key={i + 1}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                          onClick={() => { setCurrentPage(i + 1); setIsPageSelectOpen(false); }}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
            <span>из {totalPages} страниц</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-1.5 hover:bg-gray-100 rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className="p-1.5 hover:bg-gray-100 rounded-[4px] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      </>
      )}
      {/* Pin Modal */}
      <PinNewsModal
        isOpen={pinModalOpen}
        onClose={() => { setPinModalOpen(false); setPinTargetNews(null); }}
        onConfirm={(pinUntil) => {
          if (pinTargetNews) {
            setPinnedNewsId(pinTargetNews.id);
            if (pinUntil === null) {
              setPinUntilLabel('Навсегда');
            } else {
              setPinUntilLabel(pinUntil);
            }
            showToast('Новость закреплена');
          }
          setPinModalOpen(false);
          setPinTargetNews(null);
          setSelectedIds([]);
        }}
        hasLifetime={pinTargetNews?.status === 'Запланировано'}
        lifetimeEndLabel={pinTargetNews ? `до ${pinTargetNews.fullPublishedDate}` : undefined}
      />
      {/* Pin Conflict Modal */}
      <PinConflictModal
        isOpen={pinConflictOpen}
        onClose={() => { setPinConflictOpen(false); setPinTargetNews(null); }}
        onReplace={() => {
          setPinConflictOpen(false);
          // After closing conflict modal, open the pin modal for the new news
          setPinModalOpen(true);
        }}
        pinnedNews={(() => {
          const pinned = allNews.find(n => n.id === pinnedNewsId);
          return pinned ? { title: pinned.title, coverImage: pinned.image } : null;
        })()}
      />
      {/* Add to Folder Modal */}
      <AddToFolderModal
        isOpen={addToFolderModalOpen}
        onClose={() => setAddToFolderModalOpen(false)}
        folders={folderTabs}
        initialSelected={(() => {
          // Collect all folders that ALL selected news belong to
          if (selectedIds.length === 0) return [];
          const first = newsToFolders[selectedIds[0]] || [];
          return first;
        })()}
        onConfirm={(selectedFolders) => {
          // Update newsToFolders for all selected news ids
          setNewsToFolders(prev => {
            const next = { ...prev };
            selectedIds.forEach(id => {
              next[id] = selectedFolders;
            });
            return next;
          });
          if (selectedFolders.length > 0) {
            showToast(`Добавлено в ${selectedFolders.length === 1 ? 'папку' : 'папки'}`);
          }
          setSelectedIds([]);
        }}
        onCreateFolder={(name) => {
          setFolderTabs(prev => [name, ...prev]);
        }}
      />
    </div>
  );
};