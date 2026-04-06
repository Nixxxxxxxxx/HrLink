export interface TagItem {
  id: string;
  label: string;
  group: string;
}

export interface TagTemplate {
  id: string;
  name: string;
  tagIds: string[];
}

export const TAG_GROUPS = [
  'Тематика',
  'Направления',
  'Площадки',
  'Аудитория',
  'Продукты',
] as const;

export type TagGroup = typeof TAG_GROUPS[number];

export const ALL_TAGS: TagItem[] = [
  // Тематика
  { id: 'news', label: 'Новости', group: 'Тематика' },
  { id: 'announcement', label: 'Объявления', group: 'Тематика' },
  { id: 'training', label: 'Обучение', group: 'Тематика' },
  { id: 'event', label: 'Мероприятия', group: 'Тематика' },
  { id: 'contest', label: 'Конкурсы', group: 'Тематика' },
  { id: 'vacancy', label: 'Вакансии', group: 'Тематика' },
  { id: 'interview', label: 'Интервью', group: 'Тематика' },
  { id: 'report', label: 'Отчёты', group: 'Тематика' },
  { id: 'review', label: 'Обзоры', group: 'Тематика' },
  { id: 'regulation', label: 'Регламенты', group: 'Тематика' },
  { id: 'digest', label: 'Дайджест', group: 'Тематика' },
  { id: 'instruction', label: 'Инструкции', group: 'Тематика' },

  // Направления
  { id: 'production', label: 'Производство', group: 'Направления' },
  { id: 'it-digital', label: 'IT и цифра', group: 'Направления' },
  { id: 'hr', label: 'HR и персонал', group: 'Направления' },
  { id: 'safety', label: 'Безопасность', group: 'Направления' },
  { id: 'ecology', label: 'Экология', group: 'Направления' },
  { id: 'logistics', label: 'Логистика', group: 'Направления' },
  { id: 'legal', label: 'Юридические', group: 'Направления' },
  { id: 'finance', label: 'Финансы', group: 'Направления' },
  { id: 'marketing', label: 'Маркетинг', group: 'Направления' },
  { id: 'rnd', label: 'R&D', group: 'Направления' },
  { id: 'quality', label: 'Качество', group: 'Направления' },
  { id: 'service', label: 'Сервис и ЦЕС', group: 'Направления' },

  // Площадки
  { id: 'cherepovets', label: 'Череповец', group: 'Площадки' },
  { id: 'vorkuta', label: 'Воркута', group: 'Площадки' },
  { id: 'karelia', label: 'Карелия', group: 'Площадки' },
  { id: 'moscow', label: 'Москва', group: 'Площадки' },
  { id: 'spb', label: 'Санкт-Петербург', group: 'Площадки' },
  { id: 'olenegorsk', label: 'Оленегорск', group: 'Площадки' },
  { id: 'novosibirsk', label: 'Новосибирск', group: 'Площадки' },

  // Аудитория
  { id: 'urgent', label: 'Срочное', group: 'Аудитория' },
  { id: 'important', label: 'Важное', group: 'Аудитория' },
  { id: 'for-leaders', label: 'Для руководителей', group: 'Аудитория' },
  { id: 'for-newbies', label: 'Для новичков', group: 'Аудитория' },
  { id: 'for-all', label: 'Для всех', group: 'Аудитория' },
  { id: 'mandatory', label: 'Обязательное', group: 'Аудитория' },
  { id: 'for-youth', label: 'Молодёжный совет', group: 'Аудитория' },

  // Продукты
  { id: 'steel', label: 'Сталь', group: 'Продукты' },
  { id: 'resources', label: 'Ресурсы', group: 'Продукты' },
  { id: 'auto', label: 'Автопром', group: 'Продукты' },
  { id: 'construction', label: 'Строительство', group: 'Продукты' },
  { id: 'energy', label: 'Энергетика', group: 'Продукты' },
  { id: 'shipbuilding', label: 'Судостроение', group: 'Продукты' },
  { id: 'infrastructure', label: 'Инфраструктура', group: 'Продукты' },
];

// Default templates
export const DEFAULT_TEMPLATES: TagTemplate[] = [
  {
    id: 'tpl-production-news',
    name: 'Новости производства',
    tagIds: ['news', 'production', 'cherepovets', 'steel'],
  },
  {
    id: 'tpl-safety-all',
    name: 'Безопасность для всех',
    tagIds: ['safety', 'regulation', 'mandatory', 'for-all'],
  },
  {
    id: 'tpl-digital-it',
    name: 'Цифровая трансформация',
    tagIds: ['it-digital', 'rnd', 'news', 'training'],
  },
  {
    id: 'tpl-hr-onboarding',
    name: 'HR и адаптация',
    tagIds: ['hr', 'for-newbies', 'training', 'instruction'],
  },
  {
    id: 'tpl-eco-report',
    name: 'Экология и отчёты',
    tagIds: ['ecology', 'report', 'cherepovets', 'karelia'],
  },
];

// Map channel IDs to suggested tag IDs
export const CHANNEL_TAG_MAP: Record<string, string[]> = {
  'important': ['news', 'important', 'urgent', 'mandatory', 'for-all'],
  'prominvest': ['news', 'steel', 'report', 'for-all'],
  'dev-team': ['it-digital', 'training', 'rnd'],
  'digital-steel': ['it-digital', 'rnd', 'production'],
  'chermk': ['production', 'cherepovets', 'news'],
  'safety': ['safety', 'regulation', 'mandatory', 'instruction'],
  'resource': ['resources', 'karelia', 'vorkuta', 'olenegorsk'],
  'pro-people': ['hr', 'interview', 'vacancy', 'for-all'],
  'eco-agenda': ['ecology', 'report', 'cherepovets'],
  'innovations': ['rnd', 'steel', 'production'],
  'prominvest-life': ['event', 'contest', 'for-all'],
  'ssc': ['service', 'finance', 'instruction'],
  'logistics': ['logistics', 'infrastructure', 'report'],
  'youth-council': ['for-youth', 'event', 'contest', 'training'],
  'legal-news': ['legal', 'regulation', 'compliance'],
};
