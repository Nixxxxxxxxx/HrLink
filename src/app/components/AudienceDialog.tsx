import React, { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronRight, ArrowUp, Trash2, Users } from 'lucide-react';
import { OrgStructureView, FilterState, STATIC_ORG_DATA, getMatchingPersonIds } from './OrgStructureView';
import svgPaths from "../../imports/svg-pk0ob710v8";

export interface AudienceItem {
  id: string;
  label: string;
  count: number;
  checked: boolean;
  type?: 'channel' | 'system' | 'custom';
  description?: string;
  filterSummary?: string;
  selectedIds: string[]; 
  filters?: FilterState;
}

const EMPTY_FILTERS: FilterState = { 
  genders: [], 
  ageRanges: [], 
  locations: [], 
  employmentTypes: [], 
  seniorityRanges: [],
  directorates: [],
  departments: [],
  teams: []
};

const marketingFilters: FilterState = { ...EMPTY_FILTERS, genders: ['Женский'], directorates: ['Дирекция по маркетингу'] };
const itFilters: FilterState = { ...EMPTY_FILTERS, employmentTypes: ['Штат'], directorates: ['Дирекция по IT'] };

let persistedAudiences: AudienceItem[] = [
  { 
    id: 'marketing', label: 'Женщины из Маркетинга', count: getMatchingPersonIds(STATIC_ORG_DATA, marketingFilters).length, checked: false, type: 'custom',
    description: 'Команда маркетинга и аналитики', filterSummary: 'Женский \u2022 Дирекция по маркетингу',
    selectedIds: getMatchingPersonIds(STATIC_ORG_DATA, marketingFilters), filters: marketingFilters
  },
  { 
    id: 'it', label: 'IT-дирекция (Штат)', count: getMatchingPersonIds(STATIC_ORG_DATA, itFilters).length, checked: false, type: 'custom',
    description: 'Сотрудники ИТ-кластера', filterSummary: 'Штат \u2022 Дирекция по IT',
    selectedIds: getMatchingPersonIds(STATIC_ORG_DATA, itFilters), filters: itFilters
  }
];

function CheckboxIcon({ checked }: { checked: boolean }) {
  return (
    <div className="size-5 shrink-0 relative mt-0.5">
      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
        <path d={svgPaths.p2cfc8500} fill={checked ? "#0F62FE" : "#8D8D8D"} />
      </svg>
    </div>
  );
}

/** Compute actual person IDs from a preset's filters */
function computePersonIdsForPreset(preset: AudienceItem): string[] {
  const filters = preset.filters || EMPTY_FILTERS;
  return getMatchingPersonIds(STATIC_ORG_DATA, filters);
}

type DialogTab = 'presets' | 'manual';

export function AudienceDialog({ open, onOpenChange, onConfirm }: { open: boolean, onOpenChange: (open: boolean) => void, onConfirm?: (audiences: AudienceItem[]) => void }) {
  const [audiences, setAudiences] = useState<AudienceItem[]>(persistedAudiences);
  const [view, setView] = useState<'list' | 'org'>('list');
  const [activeTab, setActiveTab] = useState<DialogTab>('presets');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [aiInput, setAiInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [mounted, setMounted] = useState(false);

  // Track manual selection audience item (created from the manual tab)
  const [manualAudience, setManualAudience] = useState<AudienceItem | null>(null);

  const currentEditingPreset = audiences.find(a => a.id === editingId);

  // Use stored person IDs directly; they're already real person IDs
  // If they happen to be department-level IDs (legacy), recompute from filters
  const editingPersonIds = useMemo(() => {
    if (!currentEditingPreset) return [];
    const ids = currentEditingPreset.selectedIds || [];
    // Check if IDs are person-level (contain '-p-') or department-level
    if (ids.length > 0 && ids.some(id => id.includes('-p-'))) {
      return ids;
    }
    // Fallback: compute from filters
    return computePersonIdsForPreset(currentEditingPreset);
  }, [currentEditingPreset]);

  const totalSelected = audiences.filter(a => a.checked).reduce((acc, curr) => acc + curr.count, 0);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    persistedAudiences = audiences;
  }, [audiences]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [aiInput]);

  // Reset view when dialog opens
  useEffect(() => {
    if (open) {
      setView('list');
      setEditingId(null);
    }
  }, [open]);

  const handleAiCreate = () => {
    if (!aiInput.trim()) return;
    setIsAiThinking(true);
    
    setTimeout(() => {
      const lower = aiInput.toLowerCase();
      const df: FilterState = JSON.parse(JSON.stringify(EMPTY_FILTERS));

      if (lower.includes('маркетинг')) { df.directorates.push('Дирекция по маркетингу'); }
      if (lower.includes('ит') || lower.includes('it')) { df.directorates.push('Дирекция по IT'); }
      if (lower.includes('аналитик')) df.departments.push('Отдел аналитики');
      if (lower.includes('женщин')) df.genders.push('Женский');
      if (lower.includes('мужчин')) df.genders.push('Мужской');
      if (lower.includes('москв')) df.locations.push('Москва');
      if (lower.includes('череповец')) df.locations.push('Череповец');
      if (lower.includes('штат')) df.employmentTypes.push('Штат');
      if (lower.includes('контракт')) df.employmentTypes.push('Контракт');

      const summaryParts: string[] = [];
      if (df.directorates.length) summaryParts.push(...df.directorates);
      if (df.genders.length) summaryParts.push(...df.genders);
      if (df.locations.length) summaryParts.push(...df.locations);
      if (df.employmentTypes.length) summaryParts.push(...df.employmentTypes);

      // Compute real person count from filters
      const matchingIds = getMatchingPersonIds(STATIC_ORG_DATA, df);

      const newPreset: AudienceItem = {
        id: `ai-${Date.now()}`,
        label: aiInput.length > 35 ? aiInput.substring(0, 32) + '...' : aiInput,
        count: matchingIds.length || Math.floor(Math.random() * 40) + 5,
        checked: false,
        type: 'custom',
        filterSummary: summaryParts.join(' \u2022 ') || 'Умный подбор',
        selectedIds: matchingIds,
        filters: df
      };

      setAudiences(prev => [newPreset, ...prev]);
      setAiInput('');
      setIsAiThinking(false);
    }, 1000);
  };

  const updateAudience = (id: string, newIds: string[], newCount: number, newName: string, summary: string, filters: FilterState) => {
    setAudiences(prev => prev.map(item => 
      item.id === id ? { ...item, label: newName, count: newCount, checked: true, selectedIds: [...newIds], filterSummary: summary, filters: {...filters} } : item
    ));
    setView('list');
    setEditingId(null);
  };

  const handleManualSave = (ids: string[], count: number, name: string, summary: string, filters: FilterState, wantSaveAsPreset?: boolean, pName?: string) => {
    const manualItem: AudienceItem = {
      id: `manual-${Date.now()}`,
      label: name || `Ручной выбор (${count} чел.)`,
      count,
      checked: true,
      type: 'custom',
      filterSummary: summary,
      selectedIds: ids,
      filters: { ...filters }
    };

    if (wantSaveAsPreset) {
      // Save as a named preset in the persisted list
      const presetItem: AudienceItem = {
        ...manualItem,
        label: (pName && pName.trim()) ? pName.trim() : name,
      };
      const updatedAudiences = [presetItem, ...audiences];
      setAudiences(updatedAudiences);
      persistedAudiences = updatedAudiences;
      onConfirm && onConfirm(updatedAudiences.filter(a => a.checked));
    } else {
      // Just pass to parent without persisting as preset
      const checkedPresets = audiences.filter(a => a.checked);
      onConfirm && onConfirm([manualItem, ...checkedPresets]);
    }
    onOpenChange(false);
  };

  const handleSavePresetOnly = (ids: string[], count: number, name: string, summary: string, filters: FilterState, presetName: string) => {
    const presetItem: AudienceItem = {
      id: `preset-${Date.now()}`,
      label: presetName,
      count,
      checked: false,
      type: 'custom',
      filterSummary: summary,
      selectedIds: ids,
      filters: { ...filters }
    };
    const updatedAudiences = [presetItem, ...audiences];
    setAudiences(updatedAudiences);
    persistedAudiences = updatedAudiences;
    // Don't close the drawer — just save the preset
  };

  if (!mounted) return null;

  const isOrgView = view === 'org';
  const showFooter = !isOrgView && activeTab === 'presets';

  const dialogContent = (
    <div className={`fixed inset-0 z-[9999] ${open ? 'visible' : 'invisible pointer-events-none'}`}>
      <div 
        className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => onOpenChange(false)}
      />
      
      <div 
        className={`absolute right-2 top-2 bottom-2 w-[600px] bg-white rounded-[12px] shadow-2xl flex flex-col font-['IBM_Plex_Sans'] transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-[110%]'}`}
      >
        {/* Header */}
        <div className="flex items-center gap-2 px-[20px] h-[68.5px] border-b border-[#E0E4EA] shrink-0 bg-white rounded-t-[12px]">
          {isOrgView && (
            <button onClick={() => setView('list')} className="p-2 -ml-2 hover:bg-[#F4F4F4] rounded-full transition-colors cursor-pointer">
              <ChevronRight size={20} className="rotate-180" />
            </button>
          )}
          <h2 className="text-[18px] font-semibold text-[#161616] font-['Montserrat'] flex-1">
            {isOrgView ? 'Редактирование пресета' : 'Настройка аудитории'}
          </h2>
          <button onClick={() => onOpenChange(false)} className="size-[36px] flex items-center justify-center hover:bg-[#F4F4F4] rounded-full transition-colors cursor-pointer">
            <X size={20} className="text-[#525252]" />
          </button>
        </div>

        {/* Tabs (only show when not in org editing view) */}
        {!isOrgView && (
          <div className="flex px-[20px] pt-[12px] gap-[4px] shrink-0 bg-white">
            <button
              onClick={() => setActiveTab('presets')}
              className={`px-[16px] py-[10px] text-[14px] leading-[18px] tracking-[0.16px] rounded-t-[8px] transition-colors cursor-pointer ${
                activeTab === 'presets' 
                  ? 'text-[#161616] font-medium border-b-2 border-[#0F62FE]' 
                  : 'text-[#525252] hover:text-[#161616] hover:bg-[#F4F4F4]'
              }`}
            >
              Шаблоны аудитории
            </button>
            <button
              onClick={() => setActiveTab('manual')}
              className={`px-[16px] py-[10px] text-[14px] leading-[18px] tracking-[0.16px] rounded-t-[8px] transition-colors cursor-pointer ${
                activeTab === 'manual' 
                  ? 'text-[#161616] font-medium border-b-2 border-[#0F62FE]' 
                  : 'text-[#525252] hover:text-[#161616] hover:bg-[#F4F4F4]'
              }`}
            >
              Ручной выбор
            </button>
          </div>
        )}

        <div className="flex-1 overflow-hidden flex flex-col bg-white">
          {isOrgView ? (
            /* Editing a preset */
            <div className="flex-1 overflow-hidden bg-white flex flex-col p-[20px]">
              <OrgStructureView 
                key={editingId}
                selectedIds={editingPersonIds} 
                initialFilters={currentEditingPreset?.filters || { ...EMPTY_FILTERS }}
                initialName={currentEditingPreset?.label}
                onBack={() => setView('list')}
                onSave={(ids, count, name, summary, filters) => updateAudience(editingId!, ids, count, name, summary, filters)}
              />
            </div>
          ) : activeTab === 'presets' ? (
            /* Presets AI tab */
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="p-[16px] bg-white shrink-0">
                <div className="flex items-center gap-1.5 mb-[10px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0 8C5.81818 8 8 7.33333 8 0C8 7.33333 10.1818 8 16 8C10.1818 8 8 8.66667 8 16C8 8.66667 5.81818 8 0 8Z" fill="#7F2BFD" stroke="#7F2BFD"/>
                  </svg>
                  <span className="text-[14px] font-medium text-[#161616]">Подбор аудитории через ИИ</span>
                </div>
                <div className="relative">
                  <textarea 
                    ref={textareaRef} 
                    placeholder="Опишите целевую аудиторию, например: «Женщины из маркетинга в Москве»..." 
                    className="w-full min-h-[126px] py-[12.5px] px-[16px] text-[14px] bg-[#F2F4F8] rounded-[4px] border-none outline-none resize-none leading-[18px] text-[#13171A]" 
                    rows={3} 
                    value={aiInput} 
                    onChange={e => setAiInput(e.target.value)} 
                    disabled={isAiThinking} 
                  />
                  <button 
                    onClick={handleAiCreate} 
                    disabled={!aiInput.trim() || isAiThinking} 
                    className={`absolute right-[8px] bottom-[8px] size-[32px] flex items-center justify-center rounded-[8px] transition-all cursor-pointer ${aiInput.trim() && !isAiThinking ? 'bg-[#0F62FE] text-white shadow-lg shadow-[#0F62FE]/20' : 'bg-[#E0E0E0] text-[#A8A8A8]'}`}
                  >
                    {isAiThinking ? <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <ArrowUp size={18} strokeWidth={2.5} />}
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto px-[20px] custom-scrollbar bg-white">
                <h3 className="text-[14px] font-normal text-[#161616] mb-4">Аудитории</h3>
                <div className="flex flex-col gap-3">
                  {audiences.map(item => (
                    <div 
                      key={item.id} 
                      className="flex items-start gap-3 p-3 bg-[#f4f8ff] rounded-[8px] cursor-pointer"
                      onClick={() => setAudiences(prev => prev.map(a => a.id === item.id ? { ...a, checked: !a.checked } : a))}
                    >
                      <CheckboxIcon checked={item.checked} />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-medium text-[#161616] text-[15px] truncate">{item.label}</span>
                          <div className="flex items-center gap-4 shrink-0">
                            <span className="text-[13px] text-[#525252] font-medium">{item.count} чел</span>
                            <div className="flex items-center gap-3">
                              <button 
                                className="text-[13px] text-[#0F62FE] font-medium hover:underline cursor-pointer" 
                                onClick={e => { e.stopPropagation(); setEditingId(item.id); setView('org'); }}
                              >
                                Изменить
                              </button>
                              {item.type !== 'system' && (
                                <button 
                                  className="p-1.5 text-[#525252] hover:text-[#DA1E28] hover:bg-[#FFF1F1] rounded-[4px] transition-colors cursor-pointer" 
                                  onClick={e => { e.stopPropagation(); setAudiences(prev => prev.filter(a => a.id !== item.id)); }}
                                >
                                  <Trash2 size={18} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mt-2 flex-wrap">
                          <span className="text-[12px] text-[#525252]">Фильтры:</span>
                          {(item.filterSummary || 'Все').split(' \u2022 ').map((tag, idx) => (
                            <div key={idx} className="bg-white border border-[#e0e4ea] h-[20px] px-[6px] rounded-[4px] flex items-center shadow-sm">
                              <span className="text-[10px] font-bold text-[#0F62FE] uppercase tracking-tight">{tag}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Manual selection tab */
            <div className="flex-1 overflow-hidden bg-white flex flex-col p-[20px]">
              <OrgStructureView 
                key="manual-selection"
                selectedIds={[]} 
                initialFilters={{ ...EMPTY_FILTERS }}
                initialName=""
                mode="manual"
                onBack={() => setActiveTab('presets')}
                onSave={handleManualSave}
                onSavePresetOnly={handleSavePresetOnly}
              />
            </div>
          )}
        </div>

        {showFooter && (
          <div className="p-[20px] h-[73px] border-t border-[#E0E4EA] bg-[#F8F9FB] shrink-0 flex items-center justify-between rounded-b-[12px]">
            <span className="text-[15px] font-medium text-[#161616]">Охват: {totalSelected} человек</span>
            <button onClick={() => { onOpenChange(false); onConfirm && onConfirm(audiences); }} className="bg-[#0F62FE] text-white px-[16px] py-[11px] rounded-[4px] text-[14px] font-semibold hover:bg-[#0043CE] cursor-pointer">
              Подтвердить
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(dialogContent, document.body);
}