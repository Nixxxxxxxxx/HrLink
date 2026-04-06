import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Search, X, Bookmark, ChevronRight, Trash2, Save } from 'lucide-react';
import { ALL_TAGS, TAG_GROUPS, DEFAULT_TEMPLATES, type TagItem, type TagTemplate } from '../data/tags';
import svgPaths from "../../imports/svg-7o473cqd6z";
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TagsDropdownProps {
  selectedTagIds: string[];
  onTagsChange: (tagIds: string[]) => void;
}

type DropdownView = 'tags' | 'templates';

export function TagsDropdown({ selectedTagIds, onTagsChange }: TagsDropdownProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [view, setView] = useState<DropdownView>('tags');
  const [saveMode, setSaveMode] = useState(false);
  const [newTemplateName, setNewTemplateName] = useState('');
  const [templates, setTemplates] = useState<TagTemplate[]>(DEFAULT_TEMPLATES);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(TAG_GROUPS));
  const [saveSuccess, setSaveSuccess] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const templateNameRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
        setView('tags');
        setSaveMode(false);
        setNewTemplateName('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Focus search on open
  useEffect(() => {
    if (open && view === 'tags') {
      setTimeout(() => searchRef.current?.focus(), 50);
    }
  }, [open, view]);

  // Focus template name input when entering save mode
  useEffect(() => {
    if (saveMode) {
      setTimeout(() => templateNameRef.current?.focus(), 80);
    }
  }, [saveMode]);

  const selectedSet = useMemo(() => new Set(selectedTagIds), [selectedTagIds]);

  const filteredTags = useMemo(() => {
    if (!search.trim()) return ALL_TAGS;
    const q = search.toLowerCase().trim();
    return ALL_TAGS.filter(t =>
      t.label.toLowerCase().includes(q) || t.group.toLowerCase().includes(q)
    );
  }, [search]);

  const groupedTags = useMemo(() => {
    const map = new Map<string, TagItem[]>();
    for (const g of TAG_GROUPS) {
      const items = filteredTags.filter(t => t.group === g);
      if (items.length > 0) map.set(g, items);
    }
    return map;
  }, [filteredTags]);

  const handleToggleTag = useCallback((tagId: string) => {
    if (selectedSet.has(tagId)) {
      onTagsChange(selectedTagIds.filter(id => id !== tagId));
    } else {
      onTagsChange([...selectedTagIds, tagId]);
    }
  }, [selectedTagIds, selectedSet, onTagsChange]);

  const handleRemoveTag = useCallback((tagId: string) => {
    onTagsChange(selectedTagIds.filter(id => id !== tagId));
  }, [selectedTagIds, onTagsChange]);

  const handleClearAll = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onTagsChange([]);
  }, [onTagsChange]);

  const handleSelectGroupAll = useCallback((group: string) => {
    const groupTagIds = ALL_TAGS.filter(t => t.group === group).map(t => t.id);
    const allSelected = groupTagIds.every(id => selectedSet.has(id));
    if (allSelected) {
      onTagsChange(selectedTagIds.filter(id => !groupTagIds.includes(id)));
    } else {
      const newIds = new Set(selectedTagIds);
      groupTagIds.forEach(id => newIds.add(id));
      onTagsChange(Array.from(newIds));
    }
  }, [selectedTagIds, selectedSet, onTagsChange]);

  const handleToggleGroup = useCallback((group: string) => {
    setExpandedGroups(prev => {
      const next = new Set(prev);
      if (next.has(group)) next.delete(group);
      else next.add(group);
      return next;
    });
  }, []);

  const handleApplyTemplate = useCallback((template: TagTemplate) => {
    onTagsChange([...template.tagIds]);
    setView('tags');
  }, [onTagsChange]);

  const handleSaveTemplate = useCallback(() => {
    if (!newTemplateName.trim() || selectedTagIds.length === 0) return;
    const newTemplate: TagTemplate = {
      id: `tpl-custom-${Date.now()}`,
      name: newTemplateName.trim(),
      tagIds: [...selectedTagIds],
    };
    setTemplates(prev => [...prev, newTemplate]);
    setNewTemplateName('');
    setSaveMode(false);
    // Brief success flash
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 1800);
  }, [newTemplateName, selectedTagIds]);

  const handleDeleteTemplate = useCallback((templateId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setTemplates(prev => prev.filter(t => t.id !== templateId));
  }, []);

  const selectedTags = useMemo(
    () => ALL_TAGS.filter(t => selectedSet.has(t.id)),
    [selectedSet]
  );

  const displayValue = selectedTags.length === 0
    ? 'Выберите теги'
    : selectedTags.length <= 2
      ? selectedTags.map(t => t.label).join(', ')
      : `${selectedTags[0].label}, ${selectedTags[1].label} +${selectedTags.length - 2}`;

  const hasSelection = selectedTags.length > 0;

  return (
    <div className="flex flex-col gap-[12px] w-full">
      <div className="flex flex-col gap-[8px] w-full relative" ref={ref}>
        <label className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.32px]">
          Теги
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={cn(
            "bg-[#F4F4F4] border-b h-[40px] px-[16px] flex items-center justify-between cursor-pointer transition-colors",
            open ? "border-[#0F62FE]" : "border-[#8D8D8D]"
          )}
        >
          <span className={cn(
            "font-['IBM_Plex_Sans',sans-serif] text-[14px] leading-[18px] tracking-[0.16px] truncate",
            hasSelection ? "text-[#161616]" : "text-[#A8A8A8]"
          )}>
            {displayValue}
          </span>
          <div className="flex items-center gap-[8px]">
            {hasSelection && (
              <>
                <button className="size-[16px] flex items-center justify-center" onClick={handleClearAll}>
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

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-full left-0 right-0 z-50 mt-[2px] bg-white rounded-[8px] shadow-[0px_8px_24px_rgba(0,0,0,0.16)] flex flex-col"
              style={{ maxHeight: '420px' }}
            >
              {/* Header: search or tabs */}
              <div className="px-[12px] pt-[10px] pb-[8px] border-b border-[#E0E4EA] shrink-0">
                {view === 'tags' ? (
                  <div className="flex items-center gap-[8px]">
                    <div className="flex-1 flex items-center gap-[8px] bg-[#F4F4F4] rounded-[6px] h-[32px] px-[10px]">
                      <Search size={14} className="text-[#8D8D8D] shrink-0" />
                      <input
                        ref={searchRef}
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Поиск тегов..."
                        className="flex-1 bg-transparent font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] placeholder:text-[#A8A8A8] outline-none"
                      />
                      {search && (
                        <button onClick={() => setSearch('')} className="shrink-0">
                          <X size={12} className="text-[#8D8D8D]" />
                        </button>
                      )}
                    </div>
                    <button
                      onClick={() => setView('templates')}
                      className="size-[32px] rounded-[6px] flex items-center justify-center shrink-0 bg-[#F4F4F4] text-[#525252] hover:bg-[#E8E8E8] transition-colors"
                      title="Шаблоны тегов"
                    >
                      <Bookmark size={14} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-[8px]">
                    <button
                      onClick={() => setView('tags')}
                      className="size-[32px] rounded-[6px] flex items-center justify-center shrink-0 bg-[#F4F4F4] text-[#525252] hover:bg-[#E8E8E8] transition-colors"
                      title="Назад к тегам"
                    >
                      <svg className="size-[14px]" viewBox="0 0 16 16" fill="none">
                        <path d="M10 12L6 8L10 4" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#161616] tracking-[0.16px]">
                      Шаблоны тегов
                    </span>
                  </div>
                )}
              </div>

              {/* Content area */}
              {view === 'tags' ? (
                <>
                  {/* Tag groups — scrollable */}
                  <div className="overflow-y-auto flex-1 py-[4px]" style={{ maxHeight: '280px' }}>
                    {filteredTags.length === 0 ? (
                      <div className="px-[16px] py-[16px] text-center">
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#A8A8A8]">
                          Ничего не найдено
                        </span>
                      </div>
                    ) : (
                      Array.from(groupedTags.entries()).map(([group, tags]) => {
                        const isExpanded = expandedGroups.has(group);
                        const groupTagIds = tags.map(t => t.id);
                        const allGroupSelected = groupTagIds.every(id => selectedSet.has(id));
                        const someGroupSelected = groupTagIds.some(id => selectedSet.has(id));

                        return (
                          <div key={group}>
                            {/* Group header */}
                            <button
                              onClick={() => handleToggleGroup(group)}
                              className="w-full text-left px-[12px] py-[6px] flex items-center gap-[6px] hover:bg-[#FAFAFA] transition-colors"
                            >
                              <ChevronRight
                                size={12}
                                className={cn(
                                  "text-[#8D8D8D] transition-transform duration-200 shrink-0",
                                  isExpanded && "rotate-90"
                                )}
                              />
                              <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#8D8D8D] tracking-[0.32px] uppercase flex-1">
                                {group}
                              </span>
                              <button
                                onClick={(e) => { e.stopPropagation(); handleSelectGroupAll(group); }}
                                className={cn(
                                  "font-['IBM_Plex_Sans',sans-serif] text-[10px] leading-[12px] tracking-[0.16px] px-[6px] py-[2px] rounded-[4px] transition-colors",
                                  allGroupSelected
                                    ? "text-[#0F62FE] bg-[#EDF5FF]"
                                    : someGroupSelected
                                      ? "text-[#525252] hover:bg-[#F4F4F4]"
                                      : "text-[#8D8D8D] hover:bg-[#F4F4F4]"
                                )}
                              >
                                {allGroupSelected ? 'Убрать все' : 'Выбрать все'}
                              </button>
                            </button>

                            {/* Group items */}
                            <AnimatePresence initial={false}>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                                  className="overflow-hidden"
                                >
                                  {tags.map(tag => {
                                    const isChecked = selectedSet.has(tag.id);
                                    return (
                                      <button
                                        key={tag.id}
                                        onClick={() => handleToggleTag(tag.id)}
                                        className="w-full text-left pl-[30px] pr-[12px] py-[7px] flex items-center gap-[10px] hover:bg-[#F4F4F4] transition-colors cursor-pointer"
                                      >
                                        <div className={cn(
                                          "size-[16px] rounded-[2px] border-[1.5px] flex items-center justify-center shrink-0 transition-colors",
                                          isChecked ? "bg-[#0F62FE] border-[#0F62FE]" : "bg-white border-[#525252]"
                                        )}>
                                          {isChecked && <Check size={10} className="text-white" strokeWidth={3} />}
                                        </div>
                                        <span className={cn(
                                          "font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px]",
                                          isChecked ? "text-[#161616]" : "text-[#525252]"
                                        )}>
                                          {tag.label}
                                        </span>
                                      </button>
                                    );
                                  })}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })
                    )}
                  </div>

                  {/* Footer — always visible when tags selected */}
                  {hasSelection && (
                    <div className="border-t border-[#E0E4EA] shrink-0">
                      {/* Save template inline input */}
                      <AnimatePresence>
                        {saveMode && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                            className="overflow-hidden"
                          >
                            <div className="px-[12px] pt-[10px] pb-[2px]">
                              <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#8D8D8D] tracking-[0.32px] mb-[6px] block">
                                Сохранить {selectedTags.length} {selectedTags.length === 1 ? 'тег' : selectedTags.length < 5 ? 'тега' : 'тегов'} как шаблон
                              </span>
                              <div className="flex items-center gap-[6px]">
                                <input
                                  ref={templateNameRef}
                                  type="text"
                                  value={newTemplateName}
                                  onChange={(e) => setNewTemplateName(e.target.value)}
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter') handleSaveTemplate();
                                    if (e.key === 'Escape') { setSaveMode(false); setNewTemplateName(''); }
                                  }}
                                  placeholder="Название шаблона..."
                                  className="flex-1 h-[30px] px-[8px] bg-[#F4F4F4] rounded-[4px] font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#161616] placeholder:text-[#A8A8A8] outline-none focus:ring-1 focus:ring-[#0F62FE]"
                                />
                                <button
                                  onClick={handleSaveTemplate}
                                  disabled={!newTemplateName.trim()}
                                  className={cn(
                                    "h-[30px] px-[12px] rounded-[4px] font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] transition-colors shrink-0",
                                    newTemplateName.trim()
                                      ? "bg-[#0F62FE] text-white hover:bg-[#0353E9]"
                                      : "bg-[#E0E0E0] text-[#A8A8A8] cursor-not-allowed"
                                  )}
                                >
                                  Сохранить
                                </button>
                                <button
                                  onClick={() => { setSaveMode(false); setNewTemplateName(''); }}
                                  className="size-[30px] rounded-[4px] flex items-center justify-center hover:bg-[#F4F4F4] transition-colors shrink-0"
                                >
                                  <X size={13} className="text-[#525252]" />
                                </button>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Count + actions row */}
                      <div className="px-[12px] py-[8px] flex items-center justify-between">
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#525252] tracking-[0.16px]">
                          Выбрано: {selectedTags.length}
                        </span>
                        <div className="flex items-center gap-[12px]">
                          {/* Save as template button */}
                          {!saveMode && (
                            <button
                              onClick={() => setSaveMode(true)}
                              className="flex items-center gap-[4px] text-[#0F62FE] hover:underline transition-all"
                            >
                              <Save size={11} />
                              <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] tracking-[0.16px]">
                                В шаблон
                              </span>
                            </button>
                          )}
                          {/* Success feedback */}
                          <AnimatePresence>
                            {saveSuccess && (
                              <motion.span
                                initial={{ opacity: 0, x: -4 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[14px] text-[#24A148] tracking-[0.16px] flex items-center gap-[3px]"
                              >
                                <Check size={11} /> Сохранено
                              </motion.span>
                            )}
                          </AnimatePresence>
                          <button
                            onClick={() => onTagsChange([])}
                            className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#DA1E28] tracking-[0.16px] hover:underline transition-all"
                          >
                            Сбросить
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Templates view */
                <div className="flex-1 overflow-y-auto" style={{ maxHeight: '340px' }}>
                  <div className="px-[12px] py-[8px] flex flex-col gap-[2px]">
                    {templates.length === 0 ? (
                      <div className="py-[24px] text-center flex flex-col items-center gap-[8px]">
                        <Bookmark size={20} className="text-[#C6C6C6]" />
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] text-[#A8A8A8]">
                          Нет сохранённых шаблонов
                        </span>
                        <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#C6C6C6] max-w-[200px]">
                          Выберите теги и нажмите «В шаблон» для сохранения
                        </span>
                      </div>
                    ) : (
                      templates.map(tpl => {
                        const tplTags = ALL_TAGS.filter(t => tpl.tagIds.includes(t.id));
                        const isActive = tpl.tagIds.length === selectedTagIds.length &&
                          tpl.tagIds.every(id => selectedSet.has(id));
                        const isCustom = tpl.id.startsWith('tpl-custom');

                        return (
                          <button
                            key={tpl.id}
                            onClick={() => handleApplyTemplate(tpl)}
                            className={cn(
                              "w-full text-left px-[10px] py-[8px] rounded-[6px] flex items-start gap-[10px] transition-colors group/tpl",
                              isActive ? "bg-[#EDF5FF]" : "hover:bg-[#F4F4F4]"
                            )}
                          >
                            <Bookmark size={13} className={cn(
                              "shrink-0 mt-[2px]",
                              isActive ? "text-[#0F62FE]" : "text-[#8D8D8D]"
                            )} />
                            <div className="flex-1 min-w-0">
                              <span className={cn(
                                "font-['IBM_Plex_Sans',sans-serif] text-[13px] leading-[18px] tracking-[0.16px] block",
                                isActive ? "text-[#0F62FE]" : "text-[#161616]"
                              )}>
                                {tpl.name}
                              </span>
                              <span className="font-['IBM_Plex_Sans',sans-serif] text-[11px] leading-[16px] text-[#8D8D8D] block mt-[1px]">
                                {tplTags.map(t => t.label).join(', ')}
                              </span>
                            </div>
                            {isCustom && (
                              <button
                                onClick={(e) => handleDeleteTemplate(tpl.id, e)}
                                className="size-[22px] rounded-[4px] flex items-center justify-center opacity-0 group-hover/tpl:opacity-100 hover:bg-[#FFD7D5] transition-all shrink-0 mt-[1px]"
                              >
                                <Trash2 size={12} className="text-[#DA1E28]" />
                              </button>
                            )}
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Selected tag pills */}
      {selectedTags.length > 0 && (
        <div className="flex flex-wrap gap-[6px]">
          {selectedTags.map(tag => (
            <div
              key={tag.id}
              className="bg-[#D0E2FF] rounded-[12px] h-[24px] pl-[8px] pr-[4px] flex items-center gap-[4px] shrink-0"
            >
              <span className="font-['IBM_Plex_Sans',sans-serif] text-[12px] leading-[16px] text-[#0043CE] tracking-[0.32px]">
                {tag.label}
              </span>
              <button
                onClick={() => handleRemoveTag(tag.id)}
                className="size-[16px] flex items-center justify-center hover:bg-[#B4D0FE] rounded-full transition-colors"
              >
                <svg className="size-[8px]" viewBox="0 0 16 16" fill="none">
                  <path d={svgPaths.p9429980} fill="#0043CE" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
