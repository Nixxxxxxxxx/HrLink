import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, MoreHorizontal, Pencil, Trash2, Copy, Eye } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Template {
  id: string;
  name: string;
  type: 'Системный' | 'Пользовательский';
  createdAt: string;
  autoGeneration: boolean;
  newsCount?: number;
  title?: string;
  body?: string;
  coverImage?: string;
}

const INITIAL_TEMPLATES: Template[] = [
  {
    id: 'tpl-1',
    name: 'День рождения',
    type: 'Системный',
    createdAt: '15.05.2024',
    autoGeneration: true,
    newsCount: 24,
    title: 'Поздравляем с Днём рождения! 🎂',
    body: '<p>Дорогой <span data-variable-placeholder="" data-variable-key="fullName"></span>!</p><p>Коллектив ПАО «ПромИнвест» сердечно поздравляет вас с Днём рождения!</p><p>Желаем вам крепкого здоровья, профессиональных успехов, благополучия и отличного настроения. Пусть каждый день приносит радость и новые возможности для реализации самых смелых идей.</p><p>С уважением,<br/>команда <span data-variable-placeholder="" data-variable-key="department"></span></p>',
  },
  {
    id: 'tpl-2',
    name: 'Годовщина работы в компании',
    type: 'Пользовательский',
    createdAt: '15.05.2024',
    autoGeneration: false,
    newsCount: 8,
    title: 'Юбилей работы в ПромИнвест',
    body: '<p>Уважаемый <span data-variable-placeholder="" data-variable-key="fullName"></span>!</p><p>Поздравляем вас с <span data-variable-placeholder="" data-variable-key="anniversary"></span>-летием работы в ПАО «ПромИнвест»! Это значимая дата, которая говорит о вашей преданности компании и высоком профессионализме.</p><p>За эти годы вы внесли неоценимый вклад в развитие подразделения <span data-variable-placeholder="" data-variable-key="department"></span>. Благодарим вас за самоотдачу и надёжность.</p><p>Желаем дальнейших успехов, интересных проектов и карьерного роста!</p>',
  },
  {
    id: 'tpl-3',
    name: 'Государственные праздники',
    type: 'Системный',
    createdAt: '20.06.2024',
    autoGeneration: true,
    newsCount: 12,
    title: 'Поздравляем с праздником!',
    body: '<p>Уважаемые коллеги!</p><p>Поздравляем вас с наступающим государственным праздником! Это прекрасный повод выразить благодарность каждому сотруднику за ваш труд и вклад в общее дело.</p><p>Желаем вам и вашим близким здоровья, мира, благополучия и прекрасного настроения. Пусть выходные дни принесут заслуженный отдых и приятные впечатления.</p><blockquote><p>Помните: сила компании — в каждом из нас.</p></blockquote><p>С уважением,<br/>Руководство ПАО «ПромИнвест»</p>',
  },
  {
    id: 'tpl-4',
    name: 'Изменения в оргструктуре',
    type: 'Системный',
    createdAt: '01.07.2024',
    autoGeneration: true,
    newsCount: 5,
    title: 'Изменения в организационной структуре',
    body: '<p>Уважаемые коллеги!</p><p>Информируем вас о предстоящих изменениях в организационной структуре компании.</p><p><strong>Что меняется:</strong></p><ul><li>Реорганизация структуры подразделения для повышения эффективности</li><li>Назначение новых руководителей направлений</li><li>Обновление зон ответственности</li></ul><p><strong>Сроки вступления в силу:</strong> изменения вступают в силу с ближайшего понедельника.</p><p>Если у вас есть вопросы, обращайтесь к своему непосредственному руководителю или в HR-дирекцию.</p>',
  },
  {
    id: 'tpl-5',
    name: 'Приветствие нового сотрудника',
    type: 'Пользовательский',
    createdAt: '10.08.2024',
    autoGeneration: false,
    title: 'Добро пожаловать в команду ПромИнвест! 🤝',
    body: '<p>Уважаемые коллеги!</p><p>Рады представить вам нового сотрудника — <span data-variable-placeholder="" data-variable-key="fullName"></span>, который присоединился к нашей команде на должность <span data-variable-placeholder="" data-variable-key="position"></span> в подразделении <span data-variable-placeholder="" data-variable-key="department"></span>.</p><p>Мы уверены, что профессиональный опыт и экспертиза нашего нового коллеги станут ценным вкладом в работу команды.</p><p>Просим вас оказать содействие в процессе адаптации и помочь почувствовать себя частью дружного коллектива ПромИнвест.</p><p><em>Добро пожаловать!</em></p>',
  },
  {
    id: 'tpl-6',
    name: 'Еженедельный дайджест',
    type: 'Пользовательский',
    createdAt: '15.09.2024',
    autoGeneration: false,
    newsCount: 32,
    title: 'Еженедельный дайджест новостей ПромИнвест',
    body: '<p>Уважаемые коллеги!</p><p>Представляем вам ключевые события и новости прошедшей недели.</p><h2>Производство</h2><ul><li>Объём выплавки стали за неделю составил рекордные показатели</li><li>Завершён плановый ремонт доменной печи №5</li><li>Запущена новая линия оцинкования</li></ul><h2>Корпоративная жизнь</h2><ul><li>Стартовал набор участников на программу «Лидеры перемен»</li><li>Объявлены результаты конкурса инновационных проектов</li><li>Обновлено расписание корпоративного транспорта</li></ul><h2>HR и развитие</h2><ul><li>Открыта регистрация на осенний цикл обучения</li><li>Обновлены правила оформления командировок</li></ul><p>Подробнее о каждом событии читайте в соответствующих каналах.</p>',
  },
];

interface CreateTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
  editTemplate?: Template | null;
}

const CreateTemplateModal: React.FC<CreateTemplateModalProps> = ({ isOpen, onClose, onSave, editTemplate }) => {
  const [name, setName] = useState(editTemplate?.name || '');

  React.useEffect(() => {
    setName(editTemplate?.name || '');
  }, [editTemplate, isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/40 z-[200] flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: [0.2, 0, 0, 1] }}
          className="bg-white rounded-[4px] w-[480px] shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-[24px] pt-[24px] pb-[16px]">
            <h2 className="text-[18px] font-semibold text-[#161616] font-['IBM_Plex_Sans'] leading-[24px]">
              {editTemplate ? 'Редактировать шаблон' : 'Создать шаблон'}
            </h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-[#F2F4F8] rounded transition-colors"
            >
              <X size={20} className="text-[#525252]" />
            </button>
          </div>

          {/* Body */}
          <div className="px-[24px] pb-[24px]">
            <label className="block text-[12px] text-[#525252] font-['IBM_Plex_Sans'] leading-[16px] tracking-[0.32px] mb-[8px]">
              Название шаблона
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите название"
              className="w-full bg-[#F2F4F8] rounded-[4px] px-[16px] py-[11px] text-[14px] font-['IBM_Plex_Sans'] tracking-[0.16px] outline-none border-none focus:ring-1 focus:ring-[#0F62FE] transition-all"
              autoFocus
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-[12px] px-[24px] pb-[24px]">
            <button
              onClick={onClose}
              className="h-[40px] px-[16px] text-[14px] font-['IBM_Plex_Sans'] tracking-[0.16px] text-[#0F62FE] hover:bg-[#EDF5FF] rounded-[4px] transition-colors"
            >
              Отмена
            </button>
            <button
              onClick={() => {
                if (name.trim()) {
                  onSave(name.trim());
                  onClose();
                }
              }}
              disabled={!name.trim()}
              className="h-[40px] px-[16px] bg-[#0F62FE] text-white text-[14px] font-['IBM_Plex_Sans'] tracking-[0.16px] rounded-[4px] hover:bg-[#0353E9] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {editTemplate ? 'Сохранить' : 'Создать'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

interface TemplatesViewProps {
  onViewTemplateNews?: (templateId: string) => void;
  onCreateTemplate?: () => void;
  onEditTemplate?: (template: Template) => void;
}

export const TemplatesView: React.FC<TemplatesViewProps> = ({ onViewTemplateNews, onCreateTemplate, onEditTemplate }) => {
  const [templates, setTemplates] = useState<Template[]>(INITIAL_TEMPLATES);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [contextMenuId, setContextMenuId] = useState<string | null>(null);

  const handleToggleSelect = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedIds.length === templates.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(templates.map(t => t.id));
    }
  };

  const handleCreateTemplate = (name: string) => {
    const newTemplate: Template = {
      id: `tpl-${Date.now()}`,
      name,
      type: 'Пользовательский',
      createdAt: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      autoGeneration: false,
    };
    setTemplates(prev => [newTemplate, ...prev]);
  };

  const handleEditTemplate = (name: string) => {
    if (!editingTemplate) return;
    setTemplates(prev => prev.map(t =>
      t.id === editingTemplate.id ? { ...t, name } : t
    ));
    setEditingTemplate(null);
  };

  const handleDeleteTemplate = (id: string) => {
    setTemplates(prev => prev.filter(t => t.id !== id));
    setSelectedIds(prev => prev.filter(i => i !== id));
    setContextMenuId(null);
  };

  const handleDuplicateTemplate = (id: string) => {
    const source = templates.find(t => t.id === id);
    if (!source) return;
    const copy: Template = {
      ...source,
      id: `tpl-${Date.now()}`,
      name: `${source.name} (копия)`,
      type: 'Пользовательский',
      createdAt: new Date().toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' }),
      autoGeneration: false,
    };
    const idx = templates.findIndex(t => t.id === id);
    const updated = [...templates];
    updated.splice(idx + 1, 0, copy);
    setTemplates(updated);
    setContextMenuId(null);
  };

  const handleBatchDelete = () => {
    setTemplates(prev => prev.filter(t => !selectedIds.includes(t.id)));
    setSelectedIds([]);
  };

  return (
    <div className="flex-1 flex flex-col overflow-auto">
      <div className="flex gap-[21px] items-start px-[16px] pt-[16px] pb-[24px]">
        {/* Left sidebar description */}
        <div className="flex flex-col gap-[18px] items-start w-[305px] shrink-0">
          <p className="font-['IBM_Plex_Sans'] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">
            Автоматические новости генерируются по регулярным событиям: дни рождения, государственные праздники, изменения в организационной структуре и&nbsp;т.&nbsp;д.
          </p>
          <button
            onClick={() => {
              if (onCreateTemplate) {
                onCreateTemplate();
              } else {
                setEditingTemplate(null);
                setIsCreateModalOpen(true);
              }
            }}
            className="rounded-[4px] border border-[#0F62FE] bg-transparent px-[16px] py-[7px] text-[14px] font-['IBM_Plex_Sans'] tracking-[0.16px] text-[#0F62FE] leading-[18px] hover:bg-[#EDF5FF] transition-colors"
          >
            Создать шаблон
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 min-w-0">
          <div className="border border-[#E0E4EA] rounded-[4px] overflow-hidden">
            {/* Header Row */}
            <div className="bg-[#F2F4F8] flex items-center pr-[16px] h-[40px] shrink-0">
              {/* Select All */}
              <div className="pl-[16px] py-[10px] shrink-0">
                <div
                  className="size-[20px] cursor-pointer flex items-center justify-center border border-[#161616] bg-white rounded-[2px]"
                  onClick={handleToggleSelectAll}
                >
                  {selectedIds.length > 0 && (
                    <div className={cn(
                      "bg-[#161616]",
                      selectedIds.length === templates.length ? "size-[10px]" : "h-[2px] w-[10px]"
                    )} />
                  )}
                </div>
              </div>
              {/* Name Column */}
              <div className="flex-[1_0_0] max-w-[520px] pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Название</p>
              </div>
              {/* Type Column */}
              <div className="w-[180px] pl-[16px] pr-[8px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Тип</p>
              </div>
              {/* Created Date Column */}
              <div className="w-[160px] pl-[16px] py-[11px] shrink-0">
                <p className="font-['IBM_Plex_Sans'] font-semibold text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate">Дата создания</p>
              </div>
              {/* Actions Column */}
              <div className="w-[160px] pl-[16px] py-[11px] shrink-0" />
            </div>

            {/* Batch Actions Bar */}
            <AnimatePresence initial={false}>
              {selectedIds.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 48, opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="overflow-hidden z-[9] border-b border-[#0F62FE]"
                >
                  <div className="bg-[#0f62fe] flex items-center h-[48px] w-full">
                    <div className="flex-[1_0_0] px-[16px] py-[15px]">
                      <p className="font-['IBM_Plex_Sans'] text-[14px] text-white tracking-[0.16px] leading-[18px]">
                        {selectedIds.length} {selectedIds.length === 1 ? 'шаблон выбран' : (selectedIds.length >= 2 && selectedIds.length <= 4 ? 'шаблона выбрано' : 'шаблонов выбрано')}
                      </p>
                    </div>
                    <div className="flex items-center self-stretch h-full">
                      <button
                        onClick={handleBatchDelete}
                        className="h-full px-[16px] hover:bg-[#da1e28] transition-colors border-l border-white/10"
                      >
                        <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Удалить</p>
                      </button>
                      <div className="w-[1px] h-[24px] bg-white/30 mx-2" />
                      <button onClick={() => setSelectedIds([])} className="h-full px-[16px] hover:bg-[#da1e28] transition-colors border-l border-white/10 flex items-center gap-2">
                        <p className="text-[14px] text-white tracking-[0.16px] leading-[18px]">Отменить</p>
                        <X size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Body */}
            <div className="bg-white">
              {templates.map((template) => {
                const isSelected = selectedIds.includes(template.id);
                return (
                  <div
                    key={template.id}
                    onClick={() => onEditTemplate?.(template)}
                    className={cn(
                      "flex items-center pr-[16px] border-b border-[#E0E4EA] transition-colors group cursor-pointer min-h-[64px]",
                      isSelected ? "bg-[#EDF5FF]" : "hover:bg-[#F2F4F8]"
                    )}
                  >
                    {/* Select */}
                    <div className="pl-[16px] pt-[14px] pb-[30px] shrink-0 self-start">
                      <div
                        className={cn(
                          "size-[20px] border flex items-center justify-center rounded-[2px] transition-colors cursor-pointer",
                          isSelected ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#161616]"
                        )}
                        onClick={(e) => handleToggleSelect(template.id, e)}
                      >
                        {isSelected && (
                          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                            <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="flex-[1_0_0] max-w-[520px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0 self-start">
                      <div className="flex items-center gap-[12px]">
                        <p className="font-['IBM_Plex_Sans'] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616] truncate max-w-[360px]">
                          {template.name}
                        </p>
                        {template.autoGeneration && (
                          <div className="bg-[#E8DAFF] border border-[#C4A3F7] rounded-[12px] px-[8px] py-[2px] flex items-center shrink-0 shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]">
                            <span className="font-['IBM_Plex_Sans'] text-[12px] leading-[16px] tracking-[0.32px] text-[#6929C4]">Авто-генерация</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Type */}
                    <div className="w-[180px] pl-[16px] pr-[8px] pt-[15px] pb-[16px] shrink-0 self-start">
                      <p className="font-['IBM_Plex_Sans'] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">{template.type}</p>
                    </div>

                    {/* Date */}
                    <div className="w-[160px] pl-[16px] pt-[15px] pb-[16px] shrink-0 self-start">
                      <p className="font-['IBM_Plex_Sans'] text-[14px] leading-[18px] tracking-[0.16px] text-[#161616]">{template.createdAt}</p>
                    </div>

                    {/* Actions */}
                    <div className="w-[160px] pl-[16px] pt-[15px] pb-[16px] shrink-0 self-start flex items-center gap-[8px]">
                      {template.autoGeneration && template.newsCount && (
                        <button
                          onClick={() => onViewTemplateNews?.(template.id)}
                          className="font-['IBM_Plex_Sans'] text-[14px] leading-[18px] tracking-[0.16px] text-[#0F62FE] hover:text-[#0353E9] hover:underline transition-colors whitespace-nowrap"
                        >
                          Посмотреть новости
                        </button>
                      )}
                      {!template.autoGeneration && (
                        <div className="relative">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setContextMenuId(contextMenuId === template.id ? null : template.id);
                            }}
                            className="p-1 hover:bg-[#E0E4EA] rounded transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <MoreHorizontal size={16} className="text-[#525252]" />
                          </button>
                          <AnimatePresence>
                            {contextMenuId === template.id && (
                              <>
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="fixed inset-0 z-[90]"
                                  onClick={() => setContextMenuId(null)}
                                />
                                <motion.div
                                  initial={{ opacity: 0, y: 4, scale: 0.95 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, y: 4, scale: 0.95 }}
                                  transition={{ duration: 0.15, ease: [0.2, 0, 0, 1] }}
                                  className="absolute right-0 top-full mt-1 w-[200px] bg-white border border-[#E0E0E0] rounded shadow-lg z-[100] py-1 origin-top-right"
                                >
                                  <button
                                    onClick={() => {
                                      setEditingTemplate(template);
                                      setIsCreateModalOpen(true);
                                      setContextMenuId(null);
                                    }}
                                    className="w-full text-left px-4 py-2 text-[14px] font-['IBM_Plex_Sans'] hover:bg-[#F2F4F8] transition-colors flex items-center gap-[8px]"
                                  >
                                    <Pencil size={14} className="text-[#525252]" />
                                    Переименовать
                                  </button>
                                  <button
                                    onClick={() => handleDuplicateTemplate(template.id)}
                                    className="w-full text-left px-4 py-2 text-[14px] font-['IBM_Plex_Sans'] hover:bg-[#F2F4F8] transition-colors flex items-center gap-[8px]"
                                  >
                                    <Copy size={14} className="text-[#525252]" />
                                    Дублировать
                                  </button>
                                  {template.newsCount && (
                                    <button
                                      onClick={() => { onViewTemplateNews?.(template.id); setContextMenuId(null); }}
                                      className="w-full text-left px-4 py-2 text-[14px] font-['IBM_Plex_Sans'] hover:bg-[#F2F4F8] transition-colors flex items-center gap-[8px]"
                                    >
                                      <Eye size={14} className="text-[#525252]" />
                                      Посмотреть новости
                                    </button>
                                  )}
                                  <div className="h-[1px] bg-[#E0E4EA] my-1" />
                                  <button
                                    onClick={() => handleDeleteTemplate(template.id)}
                                    className="w-full text-left px-4 py-2 text-[14px] font-['IBM_Plex_Sans'] hover:bg-[#FFF1F1] transition-colors flex items-center gap-[8px] text-[#DA1E28]"
                                  >
                                    <Trash2 size={14} />
                                    Удалить
                                  </button>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              {templates.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-[#525252]">
                  <p className="text-[16px] font-['IBM_Plex_Sans'] mb-2">Шаблоны не найдены</p>
                  <p className="text-[14px] font-['IBM_Plex_Sans'] text-[#A8A8A8]">Создайте первый шаблон, чтобы он появился здесь</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Create/Edit Modal */}
      <CreateTemplateModal
        isOpen={isCreateModalOpen}
        onClose={() => { setIsCreateModalOpen(false); setEditingTemplate(null); }}
        onSave={editingTemplate ? handleEditTemplate : handleCreateTemplate}
        editTemplate={editingTemplate}
      />
    </div>
  );
};