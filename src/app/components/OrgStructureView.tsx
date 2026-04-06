import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Check, Users, Search as SearchIcon, X, Filter as FilterIcon, Bookmark } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export interface FilterState {
  genders: string[];
  ageRanges: string[];
  locations: string[];
  employmentTypes: string[];
  seniorityRanges: string[];
  directorates: string[];
  departments: string[];
  teams: string[];
}

const DEFAULT_FILTERS: FilterState = {
  genders: [],
  ageRanges: [],
  locations: [],
  employmentTypes: [],
  seniorityRanges: [],
  directorates: [],
  departments: [],
  teams: []
};

export interface OrgNode {
  id: string;
  name: string;
  type: 'department' | 'team' | 'person';
  count?: number;
  role?: string;
  children?: OrgNode[];
  gender?: 'male' | 'female';
  age?: number;
  location?: string;
  employmentType?: 'Штат' | 'Контракт' | 'Вахта';
  seniority?: number;
  avatar?: string;
  directorate?: string;
  department?: string;
  team?: string;
}

const LOCATIONS = ['Череповец', 'Москва', 'Белгород', 'Воркута', 'Оленегорск'];
const EMPLOYMENT_TYPES = ['Штат', 'Контракт', 'Вахта'];
const SENIORITY_RANGES = ['До 1 года', '1-3 года', '3-5 лет', '5+ лет'];
const DIRECTORATES = ['Дирекция по маркетингу', 'Дирекция по IT', 'Дирекция по кадрам', 'Производственная дирекция'];
const DEPARTMENTS = ['Отдел аналитики', 'Отдел разработки', 'Отдел поддержки'];
const TEAMS = ['Группа Frontend', 'Группа Backend', 'Группа QA'];

const MALE_FIRST_NAMES = ['Александр', 'Дмитрий', 'Максим', 'Сергей', 'Андрей', 'Алексей', 'Игорь', 'Михаил'];
const FEMALE_FIRST_NAMES = ['Елена', 'Мария', 'Наталья', 'Ольга', 'Анна', 'Екатерина', 'Светлана', 'Юлия'];
const MALE_LAST_NAMES = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Соколов'];
const FEMALE_LAST_NAMES = ['Иванова', 'Петрова', 'Сидорова', 'Смирнова', 'Кузнецова', 'Попова', 'Васильева', 'Соколова'];

const getAvatarUrl = (id: string, gender: 'male' | 'female') => {
  const num = (parseInt(id.replace(/\D/g, '') || '0') % 50);
  return `https://xsgames.co/randomusers/assets/avatars/${gender}/${num}.jpg`;
};

const createStaticOrg = (): OrgNode => {
  return {
    id: 'root',
    name: 'ПАО «ПромИнвест»',
    type: 'department',
    count: 120,
    children: DIRECTORATES.map((dirName, dIdx) => ({
      id: `dir-${dIdx}`,
      name: dirName,
      type: 'department',
      count: 30,
      children: DEPARTMENTS.map((deptName, depIdx) => ({
        id: `dir-${dIdx}-dept-${depIdx}`,
        name: deptName,
        type: 'department',
        count: 10,
        children: Array.from({ length: 10 }).map((_, pIdx) => {
          const personId = `dir-${dIdx}-dept-${depIdx}-p-${pIdx}`;
          const isMale = (dIdx + depIdx + pIdx) % 2 === 0;
          const gender = isMale ? 'male' : 'female';
          return {
            id: personId,
            name: `${isMale ? MALE_FIRST_NAMES[pIdx % 8] : FEMALE_FIRST_NAMES[pIdx % 8]} ${isMale ? MALE_LAST_NAMES[pIdx % 8] : FEMALE_LAST_NAMES[pIdx % 8]}`,
            type: 'person',
            role: pIdx === 0 ? 'Начальник отдела' : 'Ведущий специалист',
            location: LOCATIONS[dIdx % LOCATIONS.length],
            age: 24 + (pIdx * 3),
            gender: gender,
            employmentType: EMPLOYMENT_TYPES[pIdx % 3] as any,
            seniority: pIdx,
            avatar: getAvatarUrl(personId, gender),
            directorate: dirName,
            department: deptName,
            team: TEAMS[pIdx % TEAMS.length]
          };
        })
      }))
    }))
  };
};

export const STATIC_ORG_DATA = createStaticOrg();

export const checkMatches = (node: OrgNode, filters: FilterState): boolean => {
  if (node.type !== 'person') return true;
  if (filters.genders.length > 0 && !filters.genders.includes(node.gender === 'male' ? 'Мужской' : 'Женский')) return false;
  if (filters.locations.length > 0 && !filters.locations.includes(node.location || '')) return false;
  if (filters.employmentTypes.length > 0 && !filters.employmentTypes.includes(node.employmentType || '')) return false;
  if (filters.directorates.length > 0 && !filters.directorates.includes(node.directorate || '')) return false;
  if (filters.departments.length > 0 && !filters.departments.includes(node.department || '')) return false;
  if (filters.teams.length > 0 && !filters.teams.includes(node.team || '')) return false;
  if (filters.ageRanges.length > 0) {
    const range = node.age! < 30 ? 'До 30' : node.age! <= 45 ? '30-45' : '45+';
    if (!filters.ageRanges.includes(range)) return false;
  }
  if (filters.seniorityRanges.length > 0) {
    const s = node.seniority!;
    const range = s < 1 ? 'До 1 года' : s <= 3 ? '1-3 года' : s <= 5 ? '3-5 лет' : '5+ лет';
    if (!filters.seniorityRanges.includes(range)) return false;
  }
  return true;
};

// Recursive helper to get all person IDs that match filters under a node
export const getMatchingPersonIds = (node: OrgNode, filters: FilterState): string[] => {
  if (node.type === 'person') return checkMatches(node, filters) ? [node.id] : [];
  return (node.children || []).flatMap(child => getMatchingPersonIds(child, filters));
};

const TreeNode = ({ node, level = 0, onToggle, filters, searchQuery, selectedIds }: { node: OrgNode, level?: number, onToggle: (ids: string[]) => void, filters: FilterState, searchQuery: string, selectedIds: Set<string> }) => {
  const matchesFilter = useMemo(() => checkMatches(node, filters), [node, filters]);
  const matchesSearch = useMemo(() => !searchQuery || node.name.toLowerCase().includes(searchQuery.toLowerCase()), [node.name, searchQuery]);
  const [isOpen, setIsOpen] = useState(level < 1 || !!searchQuery);
  const hasChildren = node.children && node.children.length > 0;

  const matchingUnder = useMemo(() => getMatchingPersonIds(node, filters), [node, filters]);
  const selectedUnderCount = useMemo(() => matchingUnder.filter(id => selectedIds.has(id)).length, [matchingUnder, selectedIds]);
  
  const selectionStatus = useMemo(() => {
    if (matchingUnder.length === 0) return 'none';
    if (selectedUnderCount === 0) return 'none';
    if (selectedUnderCount === matchingUnder.length) return 'all';
    return 'partial';
  }, [matchingUnder, selectedUnderCount]);

  const isExcluded = node.type === 'person' && !matchesFilter;
  const isDimmed = node.type === 'department' ? matchingUnder.length === 0 : isExcluded;

  if (searchQuery && !matchesSearch && (!hasChildren || node.children?.every(c => !getMatchingPersonIds(c, filters).length))) return null;

  return (
    <div className={`flex flex-col ${isDimmed ? 'opacity-30 grayscale' : 'opacity-100'}`}>
      <div className="flex items-center gap-2 py-1.5 px-2 hover:bg-[#F4F4F4] cursor-pointer rounded group transition-colors" style={{ paddingLeft: `${level * 20 + 8}px` }} onClick={() => setIsOpen(!isOpen)}>
        <div className="size-4 flex items-center justify-center">{hasChildren && <ChevronRight size={14} className={`text-[#525252] transition-transform ${isOpen ? 'rotate-90' : ''}`} />}</div>
        
        <div 
          onClick={(e) => { e.stopPropagation(); if (!isDimmed) onToggle(matchingUnder); }} 
          className={`size-5 rounded flex items-center justify-center shrink-0 border transition-colors ${selectionStatus === 'all' ? 'bg-[#0F62FE] border-[#0F62FE]' : selectionStatus === 'partial' ? 'bg-white border-[#0F62FE]' : 'bg-white border-[#8D8D8D]'} ${isExcluded ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {selectionStatus === 'all' && <Check size={12} className="text-white" strokeWidth={3} />}
          {selectionStatus === 'partial' && <div className="size-2 bg-[#0F62FE] rounded-[1px]" />}
        </div>

        <div className="flex items-center gap-2 flex-1 min-w-0">
          {node.type === 'department' ? <Users size={16} className="text-[#525252] shrink-0" /> : 
            <div className="size-6 rounded-full overflow-hidden shrink-0 border border-[#E0E4EA] bg-[#F4F4F4]">
              <ImageWithFallback src={node.avatar || ''} alt={node.name} className="size-full object-cover" />
            </div>
          }
          <div className="flex flex-col min-w-0">
            <span className={`text-[14px] leading-tight truncate ${selectionStatus !== 'none' && !isExcluded ? 'text-[#161616] font-medium' : 'text-[#525252]'}`}>{node.name}</span>
            {node.role && <span className="text-[11px] text-[#525252] leading-tight">{node.role}</span>}
          </div>
        </div>
        {node.type === 'department' && matchingUnder.length > 0 && (
          <div className="flex items-center gap-1">
             <span className="text-[11px] font-bold text-[#0F62FE] px-1.5 py-0.5 bg-[#EDF5FF] rounded">{selectedUnderCount}</span>
             <span className="text-[10px] text-[#A8A8A8]">/ {matchingUnder.length}</span>
          </div>
        )}
      </div>
      {isOpen && hasChildren && (
        <div className="flex flex-col">
          {node.children!.map(child => <TreeNode key={child.id} node={child} level={level + 1} onToggle={onToggle} filters={filters} searchQuery={searchQuery} selectedIds={selectedIds} />)}
        </div>
      )}
    </div>
  );
};

export function OrgStructureView({ onBack, onSave, onSavePresetOnly, selectedIds: initialSelectedIds = [], initialName = '', initialFilters, mode = 'edit' }: { onBack: () => void, onSave: (ids: string[], count: number, name: string, summary: string, filters: FilterState, saveAsPreset?: boolean, presetName?: string) => void, onSavePresetOnly?: (ids: string[], count: number, name: string, summary: string, filters: FilterState, presetName: string) => void, selectedIds?: string[], initialName?: string, initialFilters: FilterState, mode?: 'edit' | 'manual' }) {
  const [presetName, setPresetName] = useState(initialName || (mode === 'manual' ? '' : ''));
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>(() => ({ ...DEFAULT_FILTERS, ...initialFilters }));
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set(initialSelectedIds));
  const [saveAsPreset, setSaveAsPreset] = useState(false);
  const [presetSaved, setPresetSaved] = useState(false);

  const matchingAll = useMemo(() => getMatchingPersonIds(STATIC_ORG_DATA, filters), [filters]);
  const currentMatchingSelectedCount = useMemo(() => matchingAll.filter(id => selectedIds.has(id)).length, [matchingAll, selectedIds]);

  const handleToggleIds = (ids: string[]) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      const allPresent = ids.every(id => next.has(id));
      if (allPresent) {
        ids.forEach(id => next.delete(id));
      } else {
        ids.forEach(id => next.add(id));
      }
      return next;
    });
  };

  const selectAllMatching = () => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      matchingAll.forEach(id => next.add(id));
      return next;
    });
  };

  const clearSelection = () => setSelectedIds(new Set());

  const toggleFilter = (key: keyof FilterState, value: string) => setFilters(prev => {
    if (value === 'all') return { ...prev, [key]: [] };
    const current = prev[key] || [];
    return { ...prev, [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] };
  });

  const activeFiltersCount = useMemo(() => Object.values(filters).reduce((acc, curr) => acc + (Array.isArray(curr) ? curr.length : 0), 0), [filters]);

  const filterSummary = useMemo(() => {
    const parts: string[] = [];
    const f = { ...DEFAULT_FILTERS, ...filters };
    if (f.directorates?.length) parts.push(...f.directorates);
    if (f.genders?.length) parts.push(...f.genders);
    if (f.locations?.length) parts.push(...f.locations);
    return parts.length > 0 ? parts.join(' • ') : "Настроенная структура";
  }, [filters]);

  return (
    <div className="flex flex-col flex-1 min-h-0 font-['IBM_Plex_Sans'] relative overflow-hidden -m-[20px]">
      <div className="flex flex-col gap-3 p-[20px] pb-4 bg-white border-b border-[#E0E4EA] shrink-0">
        {/* Preset name — always show in edit mode, toggleable in manual mode */}
        {mode === 'edit' ? (
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="text-[11px] font-bold text-[#525252] uppercase mb-1 block tracking-wider">Название пресета</label>
              <input type="text" value={presetName} onChange={e => setPresetName(e.target.value)} className="w-full h-[40px] px-[12px] bg-[#F2F4F8] rounded-[4px] border-none outline-none text-[14px]" placeholder="Введите название..." />
            </div>
            <div className="w-[120px]">
              <label className="text-[11px] font-bold text-[#525252] uppercase mb-1 block tracking-wider">Итого охват</label>
              <div className="h-[40px] flex items-center px-[12px] bg-[#F2F4F8] rounded-[4px] font-medium text-[#161616] text-[14px]">{currentMatchingSelectedCount} чел.</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-medium text-[#161616]">Выбрано:</span>
              <span className="text-[14px] font-bold text-[#0F62FE]">{currentMatchingSelectedCount} чел.</span>
            </div>
          </div>
        )}
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full h-[38px] pl-[36px] bg-[#F2F4F8] rounded-[4px] text-[14px] outline-none" placeholder="Поиск..." />
            <SearchIcon size={16} className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#525252]" />
          </div>
          <button onClick={() => setShowFilters(!showFilters)} className={`h-[38px] px-3 flex items-center gap-2 rounded-[4px] border transition-all ${showFilters ? 'bg-[#0F62FE] text-white border-[#0F62FE]' : 'bg-white text-[#161616] border-[#E0E4EA]'}`}>
            <FilterIcon size={16} />
            <span className="text-[13px] font-medium">Фильтры</span>
            {activeFiltersCount > 0 && <span className="size-4 rounded-full bg-[#0F62FE] text-white text-[10px] flex items-center justify-center">{activeFiltersCount}</span>}
          </button>
        </div>

        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => currentMatchingSelectedCount === matchingAll.length ? clearSelection() : selectAllMatching()}>
            <div className={`size-5 rounded border flex items-center justify-center ${currentMatchingSelectedCount === matchingAll.length ? 'bg-[#0F62FE] border-[#0F62FE]' : currentMatchingSelectedCount > 0 ? 'bg-white border-[#0F62FE]' : 'bg-white border-[#8D8D8D]'}`}>
              {currentMatchingSelectedCount === matchingAll.length && <Check size={12} className="text-white" />}
              {currentMatchingSelectedCount > 0 && currentMatchingSelectedCount < matchingAll.length && <div className="size-2 bg-[#0F62FE]" />}
            </div>
            <span className="text-[13px] font-medium">{activeFiltersCount > 0 ? `Выбрать всех подходящих (${matchingAll.length})` : 'Выбрать всю компанию'}</span>
          </div>
          <button onClick={clearSelection} className="text-[12px] text-[#DA1E28] hover:underline font-medium">Сбросить выбор</button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden relative bg-[#F8F9FB]">
        <div className="flex-1 overflow-y-auto p-[20px] pt-2 custom-scrollbar">
          <TreeNode node={STATIC_ORG_DATA} onToggle={handleToggleIds} filters={filters} searchQuery={searchQuery} selectedIds={selectedIds} />
        </div>
        
        <AnimatePresence>
          {showFilters && (
            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} className="absolute right-0 top-0 bottom-0 w-[300px] bg-white border-l border-[#E0E4EA] z-20 flex flex-col shadow-xl">
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-[12px] font-bold uppercase">Фильтрация</span>
                <button onClick={() => setShowFilters(false)}><X size={18}/></button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-6">
                {activeFiltersCount > 0 && (
                  <div className="bg-[#EDF5FF] p-3 rounded-[6px] border border-[#D0E2FF]">
                     <p className="text-[12px] text-[#0043CE] leading-[16px] mb-2">Найдено <b>{matchingAll.length}</b> чел. по фильтрам.</p>
                     <button onClick={selectAllMatching} className="w-full bg-[#0F62FE] text-white py-1.5 rounded-[4px] text-[13px] font-semibold">Выбрать эти {matchingAll.length} чел.</button>
                  </div>
                )}
                <FilterGroup label="Дирекция" options={DIRECTORATES} selected={filters.directorates} onToggle={v => toggleFilter('directorates', v)} />
                <FilterGroup label="Отдел" options={DEPARTMENTS} selected={filters.departments} onToggle={v => toggleFilter('departments', v)} />
                <FilterGroup label="Команда" options={TEAMS} selected={filters.teams} onToggle={v => toggleFilter('teams', v)} />
                <FilterGroup label="Пол" options={['Мужской', 'Женский']} selected={filters.genders} onToggle={v => toggleFilter('genders', v)} />
                <FilterGroup label="Тип занятости" options={EMPLOYMENT_TYPES} selected={filters.employmentTypes} onToggle={v => toggleFilter('employmentTypes', v)} />
                <FilterGroup label="Стаж" options={SENIORITY_RANGES} selected={filters.seniorityRanges} onToggle={v => toggleFilter('seniorityRanges', v)} />
                <FilterGroup label="Локация" options={LOCATIONS} selected={filters.locations} onToggle={v => toggleFilter('locations', v)} />
                <FilterGroup label="Возраст" options={['До 30', '30-45', '45+']} selected={filters.ageRanges} onToggle={v => toggleFilter('ageRanges', v)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="p-[20px] border-t border-[#E0E4EA] bg-[#F8F9FB] shrink-0 mt-auto flex flex-col gap-3">
        {mode === 'manual' && (
          <div className="flex flex-col gap-2">
            <div 
              className="flex items-center gap-2 cursor-pointer select-none" 
              onClick={() => setSaveAsPreset(!saveAsPreset)}
            >
              <div className={`size-[18px] rounded-[3px] border flex items-center justify-center transition-colors ${saveAsPreset ? 'bg-[#0F62FE] border-[#0F62FE]' : 'bg-white border-[#8D8D8D]'}`}>
                {saveAsPreset && <Check size={11} className="text-white" strokeWidth={3} />}
              </div>
              <div className="flex items-center gap-1.5">
                <Bookmark size={14} className="text-[#525252]" />
                <span className="text-[13px] text-[#525252]">Сохранить как пресет</span>
              </div>
            </div>
            {saveAsPreset && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <input 
                    type="text" 
                    value={presetName} 
                    onChange={e => { setPresetName(e.target.value); setPresetSaved(false); }} 
                    className="flex-1 h-[36px] px-[12px] bg-[#F2F4F8] rounded-[4px] border-none outline-none text-[13px]" 
                    placeholder="Название пресета..." 
                    autoFocus
                  />
                  <button
                    disabled={!presetName.trim() || currentMatchingSelectedCount === 0 || presetSaved}
                    onClick={() => {
                      const name = presetName.trim();
                      if (onSavePresetOnly) {
                        onSavePresetOnly(Array.from(selectedIds), currentMatchingSelectedCount, name, filterSummary, filters, name);
                      }
                      setPresetSaved(true);
                    }}
                    className={`h-[36px] px-[16px] rounded-[4px] text-[13px] font-medium whitespace-nowrap cursor-pointer transition-colors ${
                      presetSaved
                        ? 'bg-[#42BE65] text-white'
                        : presetName.trim() && currentMatchingSelectedCount > 0
                          ? 'bg-[#0F62FE] text-white hover:bg-[#0043CE]'
                          : 'bg-[#E0E0E0] text-[#A8A8A8] cursor-not-allowed'
                    }`}
                  >
                    {presetSaved ? (
                      <span className="flex items-center gap-1.5">
                        <Check size={14} strokeWidth={2.5} />
                        Сохранено
                      </span>
                    ) : 'Сохранить'}
                  </button>
                </div>
                {presetSaved && (
                  <p className="text-[12px] text-[#42BE65] flex items-center gap-1">
                    <Check size={12} strokeWidth={2.5} />
                    Пресет «{presetName.trim()}» сохранён в шаблоны аудитории
                  </p>
                )}
              </div>
            )}
          </div>
        )}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              const name = mode === 'manual' 
                ? (saveAsPreset && presetName.trim() ? presetName.trim() : `Ручной выбор (${currentMatchingSelectedCount} чел.)`)
                : presetName;
              onSave(Array.from(selectedIds), currentMatchingSelectedCount, name, filterSummary, filters, saveAsPreset, presetName);
            }} 
            disabled={currentMatchingSelectedCount === 0 || (mode === 'edit' && !presetName.trim())} 
            className={`flex-1 h-[40px] rounded-[4px] font-semibold cursor-pointer ${
              (currentMatchingSelectedCount > 0 && (mode === 'manual' || presetName.trim())) 
                ? 'bg-[#0F62FE] text-white hover:bg-[#0043CE]' 
                : 'bg-[#E0E0E0] text-[#A8A8A8] cursor-not-allowed'
            }`}
          >
            {mode === 'manual' ? 'Добавить аудиторию' : 'Сохранить изменения'}
          </button>
          <button onClick={onBack} className="px-6 h-[40px] border border-[#E0E4EA] text-[#161616] rounded-[4px] font-medium cursor-pointer hover:bg-[#F4F4F4]">Отмена</button>
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ label, options, selected, onToggle }: { label: string, options: string[], selected: string[], onToggle: (val: string) => void }) {
  const isAll = (selected || []).length === 0;
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[11px] font-bold text-[#8D8D8D] uppercase">{label}</span>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => onToggle('all')} className={`px-3 py-1.5 rounded-[4px] text-[13px] border ${isAll ? 'bg-[#EDF5FF] border-[#0F62FE] text-[#0F62FE] font-semibold' : 'bg-white border-[#E0E4EA] text-[#525252]'}`}>Все</button>
        {options.map(opt => (
          <button key={opt} onClick={() => onToggle(opt)} className={`px-3 py-1.5 rounded-[4px] text-[13px] border ${(selected || []).includes(opt) ? 'bg-[#EDF5FF] border-[#0F62FE] text-[#0F62FE] font-semibold' : 'bg-white border-[#E0E4EA] text-[#525252]'}`}>{opt}</button>
        ))}
      </div>
    </div>
  );
}