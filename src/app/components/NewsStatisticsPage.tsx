import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronDown, Search, Mail, Monitor, Send, Smartphone, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import imgEllipse34 from "figma:asset/72bbc0295c2f6907d7095318f416cbd0dbaba7f1.png";
import imgEllipse35 from "figma:asset/f594637999da9c77492237ad10b3aebb3eda0737.png";
import imgEllipse36 from "figma:asset/71bee72a7357eed6f800e53f7978e5a32fa9509e.png";
import imgEllipse37 from "figma:asset/a3f44437051f669fb72b743e68400f0face520cb.png";
import imgEllipse38 from "figma:asset/839c6d61ec28ae1e318660fcca73cc0ea516d5c9.png";
import imgEllipse39 from "figma:asset/c2e2cda53636bf97d7d3fdd6bc94a5b7facb5224.png";
import imgEllipse40 from "figma:asset/ae2e0d3e48a32d114bfe91e601ade19c87fb876b.png";
import fireSvgPaths from "../../imports/svg-0sjtdf1p2j";

// ─── Types ────────────────────────────────────────────
type ReadStatus = 'read' | 'unread';
type AckStatus = 'ack' | 'not_ack';
type ViewChannel = 'email' | 'screen' | 'send' | 'mobile';

interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  readStatus: ReadStatus;
  ackStatus: AckStatus;
  viewChannels: ViewChannel[];
  viewDate: string;
  comments: number;
  reactions: number;
  avatar: string;
}

// ─── Mock Data ────────────────────────────────────────
const EMPLOYEES: Employee[] = [
  { id: 1, name: 'Петрова Анна', department: 'Бухгалтерия', position: 'Дизайнер интерфейсов', readStatus: 'read', ackStatus: 'ack', viewChannels: ['email'], viewDate: '12 фев. 12:36', comments: 3, reactions: 1, avatar: imgEllipse34 },
  { id: 2, name: 'Иванов Сергей', department: 'Маркетинг', position: 'Специалист по SEO', readStatus: 'unread', ackStatus: 'not_ack', viewChannels: [], viewDate: '13 фев. 14:22', comments: 0, reactions: 0, avatar: imgEllipse35 },
  { id: 3, name: 'Сидорова Александра', department: 'Разработка', position: 'Frontend разработчик', readStatus: 'unread', ackStatus: 'not_ack', viewChannels: [], viewDate: '14 фев. 10:45', comments: 0, reactions: 0, avatar: imgEllipse36 },
  { id: 4, name: 'Кузнецов Александр', department: 'Продажи', position: 'Менеджер по продажам', readStatus: 'read', ackStatus: 'not_ack', viewChannels: ['email'], viewDate: '15 фев. 16:30', comments: 1, reactions: 1, avatar: imgEllipse37 },
  { id: 5, name: 'Лебедев Олег', department: 'HR', position: 'HR менеджер', readStatus: 'read', ackStatus: 'ack', viewChannels: ['email', 'mobile'], viewDate: '16 фев. 09:15', comments: 2, reactions: 1, avatar: imgEllipse38 },
  { id: 6, name: 'Смирнова Екатерина', department: 'Аналитика', position: 'Бизнес-аналитик', readStatus: 'read', ackStatus: 'ack', viewChannels: ['email', 'screen'], viewDate: '17 фев. 11:00', comments: 3, reactions: 0, avatar: imgEllipse39 },
  { id: 7, name: 'Федоров Дмитрий', department: 'Техническая поддержка', position: 'Специалист поддержки', readStatus: 'read', ackStatus: 'not_ack', viewChannels: ['email'], viewDate: '18 фев. 13:45', comments: 1, reactions: 1, avatar: imgEllipse40 },
  { id: 8, name: 'Григорьева Светлана', department: 'Дизайн', position: 'Графический дизайнер', readStatus: 'unread', ackStatus: 'not_ack', viewChannels: [], viewDate: '19 фев. 15:30', comments: 0, reactions: 0, avatar: imgEllipse34 },
  { id: 9, name: 'Морозов Артём', department: 'Логистика', position: 'Логист', readStatus: 'read', ackStatus: 'ack', viewChannels: ['email', 'screen', 'mobile'], viewDate: '20 фев. 08:10', comments: 0, reactions: 2, avatar: imgEllipse35 },
];

const STATS = {
  totalAudience: 123,
  views: 120,
  viewsPercent: 99,
  buttonClicks: 57,
  buttonPercent: 51,
  comments: 4,
  reactions: 12,
  shares: 12,
};

const FILTER_DEPARTMENTS = ['Все отделы', 'Бухгалтерия', 'Маркетинг', 'Разработка', 'Продажи', 'HR', 'Аналитика', 'Техническая поддержка', 'Дизайн', 'Логистика'];
const FILTER_STATUSES = ['Все статусы', 'Прочитал', 'Не прочитал', 'Ознакомился', 'Не ознакомился'];
const FILTER_POSITIONS = ['Все должности', 'Дизайнер интерфейсов', 'Специалист по SEO', 'Frontend разработчик', 'Менеджер по продажам', 'HR менеджер', 'Бизнес-аналитик', 'Специалист поддержки', 'Графический дизайнер', 'Логист'];
const FILTER_CHANNELS = ['Все каналы получения', 'Email', 'Экран', 'Telegram', 'Мобильное приложение'];

interface NewsStatisticsPageProps {
  newsTitle: string;
  onBack: () => void;
}

// ─── Status Tag ───────────────────────────────────────
const StatusTag = ({ text, variant }: { text: string; variant: 'green' | 'red' }) => (
  <div className={`inline-flex items-center rounded-[12px] px-[8px] py-[2px] ${variant === 'green' ? 'bg-[#a7f0ba] border border-[#74e792]' : 'bg-[#ffd7d9] border border-[#ffa8ab]'}`}>
    <span className={`text-[12px] leading-[16px] tracking-[0.32px] font-['IBM_Plex_Sans'] ${variant === 'green' ? 'text-[#0e6027]' : 'text-[#a2191f]'}`}>
      {text}
    </span>
  </div>
);

// ─── Channel Icon ─────────────────────────────────────
const ChannelIcon = ({ type, active }: { type: ViewChannel; active: boolean }) => {
  const color = active ? '#161616' : '#A8A8A8';
  const icons: Record<ViewChannel, React.ReactNode> = {
    email: <Mail size={20} color={color} />,
    screen: <Monitor size={20} color={color} />,
    send: <Send size={20} color={color} />,
    mobile: <Smartphone size={20} color={color} />,
  };
  return <>{icons[type]}</>;
};

// ─── Dropdown Filter ──────────────────────────────────
const FilterDropdown = ({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (v: string) => void }) => {
  const [open, setOpen] = useState(false);
  const isActive = value !== options[0];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-[8px] px-[16px] py-[10px] text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] transition-colors ${isActive ? 'text-[#0F62FE]' : 'text-[#161616]'}`}
      >
        <span>{value}</span>
        <ChevronDown size={16} className={`text-[#525252] transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-[98]" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-[2px] bg-white rounded-[4px] shadow-[0_2px_12px_rgba(0,0,0,0.12)] border border-[#E0E4EA] z-[99] min-w-[200px] py-[4px] max-h-[300px] overflow-y-auto">
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-[16px] py-[10px] text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] hover:bg-[#EDF5FF] transition-colors ${value === opt ? 'bg-[#EDF5FF] text-[#0F62FE]' : 'text-[#161616]'}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

// ─── Emoji Icon for reactions (smiley) ────────────────
const ReactionIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#161616"/>
    <circle cx="8.5" cy="10.5" r="1.5" fill="#161616"/>
    <circle cx="15.5" cy="10.5" r="1.5" fill="#161616"/>
    <path d="M12 17.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" fill="#161616"/>
  </svg>
);

// ─── Fire Icon for summary ────────────────────────────
const FireIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g transform="translate(4.5, 2.25)">
      <path d={fireSvgPaths.p2d874f80} fill="#0F62FE" />
    </g>
  </svg>
);

// ─── Main Component ───────────────────────────────────
export const NewsStatisticsPage: React.FC<NewsStatisticsPageProps> = ({ newsTitle, onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [department, setDepartment] = useState(FILTER_DEPARTMENTS[0]);
  const [status, setStatus] = useState(FILTER_STATUSES[0]);
  const [position, setPosition] = useState(FILTER_POSITIONS[0]);
  const [channel, setChannel] = useState(FILTER_CHANNELS[0]);
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [allSelected, setAllSelected] = useState(false);

  const filteredEmployees = useMemo(() => {
    let result = [...EMPLOYEES];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(e => e.name.toLowerCase().includes(q) || e.position.toLowerCase().includes(q));
    }
    if (department !== FILTER_DEPARTMENTS[0]) {
      result = result.filter(e => e.department === department);
    }
    if (status !== FILTER_STATUSES[0]) {
      switch (status) {
        case 'Прочитал': result = result.filter(e => e.readStatus === 'read'); break;
        case 'Не прочитал': result = result.filter(e => e.readStatus === 'unread'); break;
        case 'Ознакомился': result = result.filter(e => e.ackStatus === 'ack'); break;
        case 'Не ознакомился': result = result.filter(e => e.ackStatus === 'not_ack'); break;
      }
    }
    if (position !== FILTER_POSITIONS[0]) {
      result = result.filter(e => e.position === position);
    }

    return result;
  }, [searchQuery, department, status, position, channel]);

  const toggleSelectAll = () => {
    if (allSelected) {
      setSelectedRows(new Set());
      setAllSelected(false);
    } else {
      setSelectedRows(new Set(filteredEmployees.map(e => e.id)));
      setAllSelected(true);
    }
  };

  const toggleRow = (id: number) => {
    setSelectedRows(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const selectedCount = selectedRows.size;

  const getSelectedLabel = (count: number) => {
    if (count === 1) return '1 сотрудник выбран';
    if (count >= 2 && count <= 4) return `${count} сотрудника выбрано`;
    return `${count} сотрудников выбрано`;
  };

  const truncatedTitle = newsTitle.length > 80 ? newsTitle.substring(0, 80) + '...' : newsTitle;

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Header */}
      <div className="shrink-0 border-b border-[#E0E4EA]">
        <div className="flex items-center justify-between px-[16px] py-[16px]">
          <div className="flex items-center gap-[16px] flex-1 min-w-0">
            <button
              onClick={onBack}
              className="w-[40px] h-[40px] rounded-full bg-[#f4f4f4] flex items-center justify-center shrink-0 hover:bg-[#e8e8e8] transition-colors"
            >
              <ChevronLeft size={16} className="text-[#161616]" />
            </button>
            <p className="font-['Montserrat'] font-semibold text-[18px] leading-[24px] text-[#161616] truncate">
              Статистика: «{truncatedTitle}»
            </p>
          </div>
          <button className="shrink-0 ml-[16px] px-[16px] py-[10px] rounded-[4px] border border-[#0F62FE] text-[#0F62FE] text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] hover:bg-[#EDF5FF] transition-colors">
            Скачать отчет .xls
          </button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="shrink-0 border-b border-[#E0E4EA] px-[16px] py-[20px]">
        <div className="flex gap-[32px] items-start">
          {/* Views */}
          <div className="flex flex-col">
            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-[#525252] font-['IBM_Plex_Sans']">Просмотры</span>
            <div className="flex items-center gap-[8px] mt-[4px]">
              <span className="text-[28px] leading-[32px] text-[#161616] font-['IBM_Plex_Sans']">{STATS.views} из {STATS.totalAudience}</span>
              <div className="bg-[#00ce1f] rounded-[5px] px-[5px] py-[2px]">
                <span className="text-[14px] leading-[20px] tracking-[0.16px] text-white font-['IBM_Plex_Sans']">{STATS.viewsPercent}%</span>
              </div>
            </div>
          </div>

          {/* Button Clicks */}
          <div className="flex flex-col">
            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-[#525252] font-['IBM_Plex_Sans']">Нажал кнопку</span>
            <div className="flex items-center gap-[8px] mt-[4px]">
              <span className="text-[28px] leading-[32px] text-[#161616] font-['IBM_Plex_Sans']">{STATS.buttonClicks} из {STATS.totalAudience}</span>
              <div className="bg-[#ce1800] rounded-[5px] px-[5px] py-[2px]">
                <span className="text-[14px] leading-[20px] tracking-[0.16px] text-white font-['IBM_Plex_Sans']">{STATS.buttonPercent}%</span>
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="flex flex-col">
            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-[#525252] font-['IBM_Plex_Sans']">Комментарии</span>
            <span className="text-[28px] leading-[32px] text-[#161616] font-['IBM_Plex_Sans'] mt-[4px]">{STATS.comments}</span>
          </div>

          {/* Reactions */}
          <div className="flex flex-col">
            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-[#525252] font-['IBM_Plex_Sans']">Реакции</span>
            <div className="flex items-center gap-[4px] mt-[4px]">
              <span className="text-[28px] leading-[32px] text-[#161616] font-['IBM_Plex_Sans']">{STATS.reactions}</span>
              <FireIcon />
            </div>
          </div>

          {/* Shares */}
          <div className="flex flex-col">
            <span className="text-[16px] leading-[20px] tracking-[0.16px] text-[#525252] font-['IBM_Plex_Sans']">Поделился</span>
            <span className="text-[28px] leading-[32px] text-[#161616] font-['IBM_Plex_Sans'] mt-[4px]">{STATS.shares}</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="shrink-0 border-b border-[#E0E4EA] px-[16px] py-[8px] flex items-center gap-[12px]">
        <div className="flex items-center bg-[#f2f4f8] rounded-[4px] px-[12px] h-[40px] w-[328px]">
          <Search size={16} className="text-[#525252] shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Поиск по сотруднику"
            className="flex-1 bg-transparent outline-none ml-[6px] text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616] placeholder:text-[#525252]"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="ml-1">
              <X size={14} className="text-[#525252]" />
            </button>
          )}
        </div>
        <FilterDropdown label="Все отделы" options={FILTER_DEPARTMENTS} value={department} onChange={setDepartment} />
        <FilterDropdown label="Все статусы" options={FILTER_STATUSES} value={status} onChange={setStatus} />
        <FilterDropdown label="Все должности" options={FILTER_POSITIONS} value={position} onChange={setPosition} />
        <FilterDropdown label="Все каналы" options={FILTER_CHANNELS} value={channel} onChange={setChannel} />
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full min-w-[1200px]">
          <thead className="sticky top-0 z-10">
            <tr className="bg-[#f2f4f8]">
              <th className="w-[52px] pl-[16px] py-[10px] text-left">
                <div
                  onClick={toggleSelectAll}
                  className={`w-[20px] h-[20px] border rounded-[3px] cursor-pointer flex items-center justify-center transition-colors ${allSelected ? 'bg-[#0F62FE] border-[#0F62FE]' : selectedCount > 0 ? 'border-[#161616] bg-white' : 'border-[#161616]'}`}
                >
                  {allSelected && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {!allSelected && selectedCount > 0 && (
                    <div className="h-[2px] w-[10px] bg-[#161616]" />
                  )}
                </div>
              </th>
              <th className="text-left pl-[16px] pr-[8px] py-[10px] w-[310px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Сотрудник</span>
              </th>
              <th className="text-left pl-[16px] pr-[8px] py-[10px] w-[210px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Должность</span>
              </th>
              <th className="text-left pl-[16px] pr-[8px] py-[10px] w-[250px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Статус</span>
              </th>
              <th className="text-left pl-[16px] pr-[8px] py-[10px] w-[190px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Где посмотрел</span>
              </th>
              <th className="text-left pl-[16px] py-[10px] w-[160px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Дата просмотра</span>
              </th>
              <th className="text-left pl-[16px] py-[10px] w-[160px]">
                <span className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">Действия</span>
              </th>
              <th className="w-[40px]" />
            </tr>
          </thead>

          {/* Batch Actions Bar */}
          <AnimatePresence initial={false}>
            {selectedCount > 0 && (
              <motion.thead
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 48, opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="sticky top-[40px] z-[9]"
              >
                <tr>
                  <th colSpan={8} className="p-0">
                    <div className="bg-[#0f62fe] flex items-center h-[48px] w-full">
                      {/* Selected label */}
                      <div className="flex-1 px-[16px] py-[15px]">
                        <p className="font-['IBM_Plex_Sans'] text-[14px] text-white tracking-[0.16px] leading-[18px] text-left">
                          {getSelectedLabel(selectedCount)}
                        </p>
                      </div>
                      {/* Resend button */}
                      <button
                        onClick={() => {
                          setSelectedRows(new Set());
                          setAllSelected(false);
                        }}
                        className="h-full px-[16px] hover:bg-[#0050e6] transition-colors flex items-center"
                      >
                        <p className="font-['IBM_Plex_Sans'] text-[14px] text-white tracking-[0.16px] leading-[18px]">Отправить новость повторно</p>
                      </button>
                      {/* Divider */}
                      <div className="flex items-center justify-center h-[16px] w-0">
                        <div className="w-[1px] h-[16px] bg-white/50" />
                      </div>
                      {/* Cancel button */}
                      <button
                        onClick={() => {
                          setSelectedRows(new Set());
                          setAllSelected(false);
                        }}
                        className="h-full px-[16px] hover:bg-[#0050e6] transition-colors flex items-center"
                      >
                        <p className="font-['IBM_Plex_Sans'] text-[14px] text-white tracking-[0.16px] leading-[18px]">Отменить</p>
                      </button>
                    </div>
                  </th>
                </tr>
              </motion.thead>
            )}
          </AnimatePresence>

          <tbody>
            {filteredEmployees.map(emp => {
              const isSelected = selectedRows.has(emp.id);
              return (
                <tr key={emp.id} className="border-b border-[#E0E4EA] hover:bg-[#f8f9fb] transition-colors">
                  {/* Checkbox */}
                  <td className="pl-[16px] py-[14px] align-top pt-[22px]">
                    <div
                      onClick={() => toggleRow(emp.id)}
                      className={`w-[20px] h-[20px] border rounded-[3px] cursor-pointer flex items-center justify-center transition-colors ${isSelected ? 'bg-[#0F62FE] border-[#0F62FE]' : 'border-[#161616]'}`}
                    >
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      )}
                    </div>
                  </td>
                  {/* Employee */}
                  <td className="pl-[16px] pr-[8px] py-[10px]">
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[46px] h-[46px] rounded-full overflow-hidden shrink-0">
                        <ImageWithFallback src={emp.avatar} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616]">{emp.name}</span>
                        <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#525252]">{emp.department}</span>
                      </div>
                    </div>
                  </td>
                  {/* Position */}
                  <td className="pl-[16px] pr-[8px] py-[10px]">
                    <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616]">{emp.position}</span>
                  </td>
                  {/* Status */}
                  <td className="pl-[16px] pr-[8px] py-[10px]">
                    <div className="flex gap-[8px] flex-wrap">
                      <StatusTag
                        text={emp.readStatus === 'read' ? 'Прочитал' : 'Не прочитал'}
                        variant={emp.readStatus === 'read' ? 'green' : 'red'}
                      />
                      <StatusTag
                        text={emp.ackStatus === 'ack' ? 'Ознакомился' : 'Не ознакомился'}
                        variant={emp.ackStatus === 'ack' ? 'green' : 'red'}
                      />
                    </div>
                  </td>
                  {/* View Channels */}
                  <td className="pl-[16px] pr-[8px] py-[10px]">
                    <div className="flex gap-[16px]">
                      {(['email', 'screen', 'send', 'mobile'] as ViewChannel[]).map(ch => (
                        <ChannelIcon key={ch} type={ch} active={emp.viewChannels.includes(ch)} />
                      ))}
                    </div>
                  </td>
                  {/* Date */}
                  <td className="pl-[16px] py-[10px]">
                    <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616]">{emp.viewDate}</span>
                  </td>
                  {/* Actions */}
                  <td className="pl-[16px] py-[10px]">
                    <div className="flex items-center gap-[16px]">
                      {emp.comments > 0 && (
                        <div className="flex items-center gap-[4px]">
                          <MessageSquare size={20} className="text-[#161616]" />
                          <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616]">{emp.comments}</span>
                        </div>
                      )}
                      {emp.reactions > 0 && (
                        <div className="flex items-center gap-[4px]">
                          <ReactionIcon />
                          <span className="text-[14px] leading-[18px] tracking-[0.16px] font-['IBM_Plex_Sans'] text-[#161616]">{emp.reactions}</span>
                        </div>
                      )}
                    </div>
                  </td>
                  {/* Bell */}
                  <td className="pr-[16px] py-[10px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="cursor-pointer hover:opacity-70 transition-opacity">
                      <path d="M20.25 17.25H3.75V15.75H5.25V9.75C5.25 6.02208 8.27208 3 12 3C15.7279 3 18.75 6.02208 18.75 9.75V15.75H20.25V17.25ZM9.75 18.75H14.25C14.25 19.9926 13.2426 21 12 21C10.7574 21 9.75 19.9926 9.75 18.75Z" fill="#0F62FE"/>
                    </svg>
                  </td>
                </tr>
              );
            })}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center py-[40px]">
                  <p className="text-[16px] text-[#525252] font-['IBM_Plex_Sans']">Ничего не найдено</p>
                  <p className="text-[14px] text-[#525252]/60 font-['IBM_Plex_Sans'] mt-1">Попробуйте изменить фильтры</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};