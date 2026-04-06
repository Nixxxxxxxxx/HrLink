/**
 * AI Text Transformation Engine (Demo)
 * Rule-based Russian text transformations that simulate AI editing.
 * 
 * KEY: JavaScript \b word boundary does NOT work with Cyrillic.
 * We use (?<![а-яёА-ЯЁa-zA-Z]) and (?![а-яёА-ЯЁa-zA-Z]) instead.
 */

// Cyrillic-aware word boundary helpers
const WB_START = '(?<![а-яёА-ЯЁa-zA-Z])';
const WB_END = '(?![а-яёА-ЯЁa-zA-Z])';

// ---- Synonym dictionaries ----

const SIMPLE_SYNONYMS: Record<string, string> = {
  'осуществлять': 'делать',
  'осуществляет': 'делает',
  'осуществляют': 'делают',
  'осуществить': 'сделать',
  'осуществлено': 'сделано',
  'осуществление': 'выполнение',
  'реализовать': 'сделать',
  'реализация': 'выполнение',
  'функционировать': 'работать',
  'функционирует': 'работает',
  'функционирование': 'работа',
  'использовать': 'применять',
  'использование': 'применение',
  'предоставить': 'дать',
  'предоставлять': 'давать',
  'предоставляет': 'даёт',
  'обеспечивать': 'давать',
  'обеспечивает': 'даёт',
  'обеспечить': 'дать',
  'обеспечение': 'поддержка',
  'оптимизировать': 'улучшить',
  'оптимизация': 'улучшение',
  'модифицировать': 'изменить',
  'модификация': 'изменение',
  'идентифицировать': 'найти',
  'демонстрировать': 'показывать',
  'демонстрирует': 'показывает',
  'иллюстрировать': 'показывать',
  'информировать': 'сообщать',
  'информирует': 'сообщает',
  'инициировать': 'начать',
  'генерировать': 'создавать',
  'генерирует': 'создаёт',
  'интегрировать': 'объединить',
  'интеграция': 'объединение',
  'трансформировать': 'изменить',
  'трансформация': 'изменение',
  'коммуникация': 'общение',
  'дифференциация': 'различие',
  'аккумулировать': 'собирать',
  'инновационный': 'новый',
  'фундаментальный': 'основной',
  'систематический': 'последовательный',
  'необходимо': 'нужно',
  'вследствие': 'из-за',
  'впоследствии': 'потом',
  'в настоящее время': 'сейчас',
  'в связи с тем что': 'потому что',
  'для того чтобы': 'чтобы',
  'в соответствии с': 'по',
  'на основании': 'по',
  'в целях': 'для',
  'посредством': 'через',
  'представляет собой': 'это',
  'является': 'это',
  'данный': 'этот',
  'данная': 'эта',
  'данное': 'это',
  'данные': 'эти',
  'каким-либо образом': 'как-то',
  'в значительной степени': 'во многом',
  'таким образом': 'так',
  'тем не менее': 'но',
  'помимо этого': 'также',
  'кроме того': 'также',
  'безусловно': 'конечно',
  'в первую очередь': 'прежде всего',
  'осуществлять деятельность': 'работать',
  'принимать решение': 'решать',
  'оказывать влияние': 'влиять',
  'оказывать содействие': 'помогать',
  'производить впечатление': 'впечатлять',
  'приобретать': 'покупать',
  'приобретение': 'покупка',
  'аналогичный': 'похожий',
  'существенный': 'важный',
  'значительный': 'большой',
  'незначительный': 'небольшой',
  'приблизительно': 'примерно',
  'исключительно': 'только',
  'непосредственно': 'прямо',
  'соответственно': 'поэтому',
  'первоначально': 'сначала',
  'впоследствие': 'потом',
  'периодически': 'иногда',
  'систематически': 'регулярно',
  'незамедлительно': 'сразу',
  // More common words for better coverage
  'определённый': 'конкретный',
  'определенный': 'конкретный',
  'значительное': 'большое',
  'значительная': 'большая',
  'значительные': 'большие',
  'существенные': 'важные',
  'существенная': 'важная',
  'существенное': 'важное',
  'различные': 'разные',
  'различных': 'разных',
  'различным': 'разным',
  'посредством': 'через',
  'вышеуказанный': 'этот',
  'вышеупомянутый': 'этот',
  'нижеследующий': 'следующий',
  'нижеизложенный': 'описанный',
  'вышеизложенный': 'описанный',
  'надлежащий': 'нужный',
  'надлежащим образом': 'как следует',
  'соответствующий': 'нужный',
  'соответствующие': 'нужные',
  'целесообразно': 'стоит',
  'представляется': 'кажется',
  'свидетельствует': 'говорит',
  'свидетельствуют': 'говорят',
  'характеризуется': 'отличается',
  'обусловлен': 'вызван',
  'обусловлена': 'вызвана',
  'обусловлено': 'вызвано',
  'препятствовать': 'мешать',
  'препятствует': 'мешает',
  'способствовать': 'помогать',
  'способствует': 'помогает',
  'содействовать': 'помогать',
  'содействует': 'помогает',
  'сопровождается': 'идёт с',
  'подразумевает': 'значит',
  'предполагает': 'значит',
  'базируется': 'основан',
  'ориентирован': 'направлен',
  'актуальный': 'важный',
  'актуальная': 'важная',
  'актуальные': 'важные',
  'специфический': 'особый',
  'специфика': 'особенность',
  'позиционировать': 'представлять',
  'позиционирует': 'представляет',
  'формирование': 'создание',
  'формировать': 'создавать',
  'формирует': 'создаёт',
  'регламентировать': 'определять',
  'регламентирует': 'определяет',
  'регламент': 'правила',
  'детерминировать': 'определять',
  'ликвидировать': 'устранить',
  'ликвидация': 'устранение',
  'элиминировать': 'убрать',
  'фиксировать': 'записывать',
  'фиксирует': 'записывает',
  'констатировать': 'отметить',
  'диверсификация': 'разнообразие',
  'имплементация': 'внедрение',
  'пролонгировать': 'продлить',
  'пролонгация': 'продление',
  'консолидация': 'объединение',
  'консолидировать': 'объединить',
  'верификация': 'проверка',
  'верифицировать': 'проверить',
  'валидация': 'проверка',
  'приоритетный': 'главный',
  'приоритет': 'главное',
  'релевантный': 'подходящий',
  'релевантная': 'подходящая',
  'перманентный': 'постоянный',
  'перманентно': 'постоянно',
  'потенциальный': 'возможный',
  'потенциально': 'возможно',
  'оперативный': 'быстрый',
  'оперативно': 'быстро',
  'глобальный': 'мировой',
  'локальный': 'местный',
  'финансирование': 'оплата',
  'лимитировать': 'ограничить',
  'лимитирует': 'ограничивает',
  'дислоцировать': 'разместить',
  'апробировать': 'проверить',
  'апробация': 'проверка',
};

const COMPLEX_SYNONYMS: Record<string, string> = {
  'делать': 'осуществлять',
  'делает': 'осуществляет',
  'делают': 'осуществляют',
  'сделать': 'реализовать',
  'работать': 'функционировать',
  'работает': 'функционирует',
  'работа': 'функционирование',
  'дать': 'предоставить',
  'даёт': 'обеспечивает',
  'давать': 'предоставлять',
  'улучшить': 'оптимизировать',
  'улучшение': 'оптимизация',
  'изменить': 'модифицировать',
  'изменение': 'модификация',
  'найти': 'идентифицировать',
  'показать': 'продемонстрировать',
  'показывать': 'демонстрировать',
  'показывает': 'демонстрирует',
  'сообщать': 'информировать',
  'сообщает': 'информирует',
  'начать': 'инициировать',
  'создавать': 'генерировать',
  'создаёт': 'генерирует',
  'общение': 'коммуникация',
  'нужно': 'необходимо',
  'сейчас': 'в настоящее время',
  'потому что': 'вследствие того, что',
  'через': 'посредством',
  'конечно': 'безусловно',
  'покупать': 'приобретать',
  'покупка': 'приобретение',
  'похожий': 'аналогичный',
  'важный': 'существенный',
  'важная': 'существенная',
  'важное': 'существенное',
  'важные': 'существенные',
  'большой': 'значительный',
  'большая': 'значительная',
  'большое': 'значительное',
  'большие': 'значительные',
  'примерно': 'приблизительно',
  'только': 'исключительно',
  'прямо': 'непосредственно',
  'сначала': 'первоначально',
  'иногда': 'периодически',
  'регулярно': 'систематически',
  'сразу': 'незамедлительно',
  'новый': 'инновационный',
  'новая': 'инновационная',
  'новое': 'инновационное',
  'новые': 'инновационные',
  'основной': 'фундаментальный',
  'основная': 'фундаментальная',
  'основное': 'фундаментальное',
  'помогать': 'оказывать содействие',
  'помогает': 'оказывает содействие',
  'влиять': 'оказывать влияние',
  'влияет': 'оказывает влияние',
  'решать': 'принимать решение',
  'решает': 'принимает решение',
  // More common words
  'разные': 'различные',
  'разных': 'различных',
  'быстрый': 'оперативный',
  'быстро': 'оперативно',
  'главный': 'приоритетный',
  'главная': 'приоритетная',
  'возможный': 'потенциальный',
  'возможно': 'потенциально',
  'постоянный': 'перманентный',
  'постоянно': 'перманентно',
  'местный': 'локальный',
  'мировой': 'глобальный',
  'особый': 'специфический',
  'особенность': 'специфика',
  'правила': 'регламент',
  'проверка': 'верификация',
  'проверить': 'верифицировать',
  'объединение': 'консолидация',
  'объединить': 'консолидировать',
  'внедрение': 'имплементация',
  'продлить': 'пролонгировать',
  'продление': 'пролонгация',
  'создание': 'формирование',
  'направлен': 'ориентирован',
  'записывать': 'фиксировать',
  'записывает': 'фиксирует',
  'мешать': 'препятствовать',
  'мешает': 'препятствует',
  'вызван': 'обусловлен',
  'вызвана': 'обусловлена',
  'вызвано': 'обусловлено',
  'отметить': 'констатировать',
  'разнообразие': 'диверсификация',
  'ограничить': 'лимитировать',
  'ограничивает': 'лимитирует',
  'получить': 'приобрести',
  'получать': 'приобретать',
  'получает': 'приобретает',
  'просить': 'ходатайствовать',
  'менять': 'трансформировать',
  'меняет': 'трансформирует',
  'связь': 'коммуникация',
  'вопрос': 'проблематика',
  'часть': 'компонент',
  'уровень': 'показатель',
  'область': 'сфера',
  'условия': 'обстоятельства',
  'ситуация': 'конъюнктура',
  'способ': 'методология',
  'попытка': 'инициатива',
};

const REPHRASE_SYNONYMS: Record<string, string> = {
  'важно': 'существенно',
  'существенно': 'критически важно',
  'быстро': 'оперативно',
  'оперативно': 'стремительно',
  'хорошо': 'качественно',
  'качественно': 'на высоком уровне',
  'плохо': 'неудовлетворительно',
  'много': 'в большом количестве',
  'мало': 'в незначительном объёме',
  'часто': 'регулярно',
  'создать': 'разработать',
  'разработать': 'спроектировать',
  'проект': 'инициатива',
  'инициатива': 'проект',
  'команда': 'коллектив',
  'коллектив': 'команда',
  'задача': 'цель',
  'цель': 'задача',
  'результат': 'итог',
  'итог': 'результат',
  'проблема': 'сложность',
  'сложность': 'проблема',
  'успех': 'достижение',
  'достижение': 'успех',
  'компания': 'организация',
  'организация': 'компания',
  'сотрудник': 'специалист',
  'специалист': 'эксперт',
  'эксперт': 'сотрудник',
  'клиент': 'заказчик',
  'заказчик': 'клиент',
  'процесс': 'механизм',
  'механизм': 'процесс',
  'система': 'платформа',
  'платформа': 'система',
  'метод': 'подход',
  'подход': 'метод',
  'план': 'стратегия',
  'стратегия': 'план',
  'развитие': 'рост',
  'рост': 'развитие',
  'опыт': 'практика',
  'практика': 'опыт',
  'однако': 'вместе с тем',
  'поэтому': 'в связи с этим',
  'например': 'в частности',
  'в частности': 'к примеру',
  'также': 'кроме того',
  'кроме того': 'помимо этого',
  'помимо этого': 'вдобавок',
  'но': 'однако',
  'если': 'в случае если',
  'потом': 'впоследствии',
  'сначала': 'на первом этапе',
  'наконец': 'в итоге',
  'работа': 'деятельность',
  'деятельность': 'работа',
  'вопрос': 'тема',
  'тема': 'вопрос',
  'решение': 'вариант',
  'вариант': 'решение',
  'начало': 'старт',
  'старт': 'начало',
  'конец': 'завершение',
  'завершение': 'конец',
  'рынок': 'индустрия',
  'бизнес': 'предприятие',
  'предприятие': 'бизнес',
  'товар': 'продукт',
  'продукт': 'товар',
  'услуга': 'сервис',
  'сервис': 'услуга',
  'производство': 'выпуск',
  'выпуск': 'производство',
  'доход': 'выручка',
  'выручка': 'доход',
  'расход': 'затраты',
  'затраты': 'расходы',
};

// ---- Filler words to strip for "Кратко" ----
const FILLER_WORDS = [
  'собственно говоря',
  'по большому счёту',
  'по большому счету',
  'в целом и общем',
  'в общем и целом',
  'так сказать',
  'как бы то ни было',
  'в принципе',
  'по сути дела',
  'по сути',
  'в общем-то',
  'в общем',
  'на самом деле',
  'по факту',
  'строго говоря',
  'грубо говоря',
  'иными словами',
  'другими словами',
  'надо сказать',
  'стоит отметить',
  'следует отметить',
  'нужно отметить',
  'важно отметить',
  'стоит подчеркнуть',
  'хотелось бы отметить',
  'необходимо подчеркнуть',
  'нельзя не отметить',
  'очевидно, что',
  'очевидно что',
  'безусловно',
  'несомненно',
  'бесспорно',
  'разумеется',
  'естественно',
  'конечно же',
  'само собой',
  'само собой разумеется',
  'как известно',
  'как правило',
  'в большинстве случаев',
  'в некоторой степени',
  'в определённой степени',
  'в определенной степени',
  'в какой-то мере',
  'до некоторой степени',
  'в значительной мере',
  'в той или иной степени',
  'так или иначе',
  'тем или иным образом',
  'довольно-таки',
  'в достаточной мере',
  'при этом',
  'в свою очередь',
  'с другой стороны',
  'с одной стороны',
  'прежде всего',
  'в первую очередь',
  'что касается',
  'стоит заметить',
  'хочется отметить',
  'можно сказать',
  'нужно сказать',
  'важно понимать',
  'следует учитывать',
  'необходимо учитывать',
  'не секрет, что',
  'не секрет что',
  'как мы знаем',
  'как мы видим',
  'как показывает практика',
  'как уже было сказано',
  'как уже отмечалось',
];

// ---- Common Russian typos / error corrections ----
const TYPO_FIXES: [RegExp, string][] = [
  [/в течении(?![а-яёА-ЯЁ])/gi, 'в течение'],
  [/втечение(?![а-яёА-ЯЁ])/gi, 'в течение'],
  [/втечении(?![а-яёА-ЯЁ])/gi, 'в течение'],
  [/в последствии(?![а-яёА-ЯЁ])/gi, 'впоследствии'],
  [/впоследствие(?![а-яёА-ЯЁ])/gi, 'впоследствии'],
  [/(?<![а-яёА-ЯЁ])не смотря на(?![а-яёА-ЯЁ])/gi, 'несмотря на'],
  [/несмотря на то что/gi, 'несмотря на то, что'],
  [/(?<![а-яёА-ЯЁ])так же(?![а-яёА-ЯЁ])/gi, 'также'],
  [/(?<![а-яёА-ЯЁ])то же(?![а-яёА-ЯЁ])/gi, 'тоже'],
  [/(?<![а-яёА-ЯЁ])по этому(?![а-яёА-ЯЁ])/gi, 'поэтому'],
  [/(?<![а-яёА-ЯЁ])не которые(?![а-яёА-ЯЁ])/gi, 'некоторые'],
  [/(?<![а-яёА-ЯЁ])не сколько(?![а-яёА-ЯЁ])/gi, 'несколько'],
  [/(?<![а-яёА-ЯЁ])не обходимо(?![а-яёА-ЯЁ])/gi, 'необходимо'],
  [/(?<![а-яёА-ЯЁ])по скольку(?![а-яёА-ЯЁ])/gi, 'поскольку'],
  [/(?<![а-яёА-ЯЁ])в виду(?![а-яёА-ЯЁ])/gi, 'ввиду'],
  [/(?<![а-яёА-ЯЁ])не взирая(?![а-яёА-ЯЁ])/gi, 'невзирая'],
  [/(?<![а-яёА-ЯЁ])что бы(?![а-яёА-ЯЁ])/gi, 'чтобы'],
  [/(?<![а-яёА-ЯЁ])не чего(?![а-яёА-ЯЁ])/gi, 'нечего'],
  [/(?<![а-яёА-ЯЁ])ни чего(?![а-яёА-ЯЁ])/gi, 'ничего'],
  [/(?<![а-яёА-ЯЁ])из за(?![а-яёА-ЯЁ])/gi, 'из-за'],
  [/(?<![а-яёА-ЯЁ])из под(?![а-яёА-ЯЁ])/gi, 'из-под'],
  [/  +/g, ' '],
  [/\s+([.,;:!?])/g, '$1'],
];

// ---- Core transformation functions ----

function applySynonyms(text: string, dict: Record<string, string>): string {
  let result = text;
  // Sort by length descending so multi-word phrases match first
  const entries = Object.entries(dict).sort((a, b) => b[0].length - a[0].length);
  for (const [from, to] of entries) {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Use Cyrillic-aware word boundaries instead of \b
    const regex = new RegExp(`${WB_START}${escaped}${WB_END}`, 'gi');
    result = result.replace(regex, (match) => {
      // Preserve original casing
      if (match[0] === match[0].toUpperCase() && match[0] !== match[0].toLowerCase()) {
        return to.charAt(0).toUpperCase() + to.slice(1);
      }
      return to;
    });
  }
  return result;
}

/** Split text into sentences, handling abbreviations */
function splitSentences(text: string): string[] {
  return text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0);
}

function makeSimpler(text: string): string {
  let result = applySynonyms(text, SIMPLE_SYNONYMS);

  // Remove subordinate clauses with "который/которая/которое/которые"
  result = result.replace(/,\s*котор(?:ый|ая|ое|ые|ого|ой|ому|ых|ым|ыми)\s+[^,.!?]{0,60}([,.!?])/gi, '$1');

  // Break very long sentences (>100 chars) at conjunctions
  result = result.replace(/([^.!?]{100,?})(,\s*(?:и|а|но|однако|при этом|причём|хотя)\s)/g, '$1. ');

  // Remove parenthetical remarks if long
  result = result.replace(/\s*\([^)]{30,}\)\s*/g, ' ');

  // Remove intensifiers before adjectives
  result = result.replace(/(?<![а-яёА-ЯЁ])(весьма|крайне|чрезвычайно|исключительно|достаточно|довольно)\s+/gi, '');

  // Clean up
  result = result.replace(/\s{2,}/g, ' ').trim();

  // Fallback: if text barely changed, simplify structure
  if (result === text || levenshteinSimilarity(result, text) > 0.95) {
    const sentences = splitSentences(result);
    if (sentences.length > 1) {
      // Remove the longest sentence (likely most complex)
      const maxLen = Math.max(...sentences.map(s => s.length));
      result = sentences.filter(s => s.length < maxLen).join(' ');
    } else {
      // Single sentence — trim after the first comma if long enough
      const commaIdx = result.indexOf(',');
      if (commaIdx > 20 && commaIdx < result.length - 10) {
        result = result.substring(0, commaIdx) + '.';
      }
    }
  }

  return result.trim();
}

function makeHarder(text: string): string {
  let result = applySynonyms(text, COMPLEX_SYNONYMS);

  // Fallback: if synonyms didn't change much, add formal connectors
  if (result === text || levenshteinSimilarity(result, text) > 0.95) {
    const sentences = splitSentences(result);
    const connectors = [
      'Следует отметить, что',
      'Необходимо подчеркнуть, что',
      'Вместе с тем',
      'В данном контексте',
      'Таким образом,',
      'Принимая во внимание вышеизложенное,',
      'С учётом вышесказанного,',
    ];
    if (sentences.length >= 2) {
      // Add a connector before the second sentence
      const connectorIdx = Math.floor(Math.random() * connectors.length);
      const lowerFirst = sentences[1].charAt(0).toLowerCase() + sentences[1].slice(1);
      sentences[1] = `${connectors[connectorIdx]} ${lowerFirst}`;
      result = sentences.join(' ');
    } else if (sentences.length === 1) {
      const connectorIdx = Math.floor(Math.random() * 3);
      result = `${connectors[connectorIdx]} ${result.charAt(0).toLowerCase()}${result.slice(1)}`;
    }
  }

  return result.trim();
}

function rephrase(text: string): string {
  let result = applySynonyms(text, REPHRASE_SYNONYMS);

  // If synonyms didn't change enough, apply structural rearrangement
  if (levenshteinSimilarity(result, text) > 0.90) {
    const sentences = splitSentences(result);
    if (sentences.length > 2) {
      // Move the last sentence to the beginning
      const last = sentences.pop()!;
      sentences.unshift(last);
      result = sentences.join(' ');
    } else if (sentences.length === 2) {
      // Swap the two sentences
      result = `${sentences[1]} ${sentences[0]}`;
    } else {
      // Single sentence — swap clauses around a comma
      const commaIdx = result.indexOf(', ');
      if (commaIdx > 10 && commaIdx < result.length - 10) {
        const before = result.substring(0, commaIdx);
        const after = result.substring(commaIdx + 2);
        // Capitalize the "after" part, lowercase the "before" part
        result = after.charAt(0).toUpperCase() + after.slice(0).substring(1) + ', ' +
                 before.charAt(0).toLowerCase() + before.slice(1);
        // Ensure it ends with period
        if (!/[.!?]$/.test(result)) result += '.';
      }
    }
  }

  return result.trim();
}

function makeShorter(text: string): string {
  let result = text;

  // Remove filler words/phrases (sort by length desc)
  const sorted = [...FILLER_WORDS].sort((a, b) => b.length - a.length);
  for (const filler of sorted) {
    const escaped = filler.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`\\s*,?\\s*${escaped}\\s*,?\\s*`, 'gi'), ' ');
  }

  // Remove intensifiers
  result = result.replace(/(?<![а-яёА-ЯЁ])(очень|весьма|крайне|чрезвычайно|довольно|достаточно|абсолютно|совершенно|определённо|определенно)\s+/gi, '');

  // Remove redundant adjective pairs  
  result = result.replace(/(?<![а-яёА-ЯЁ])(очень|весьма|крайне|чрезвычайно|довольно|достаточно)\s+(важн|нужн|хорош|плох|больш|мал)/gi, '$2');

  // Compress "не только X, но и Y" -> "X и Y"
  result = result.replace(/не только\s+(.+?),?\s+но и\s+/gi, '$1 и ');

  // Remove "который/которая/которое" clauses
  result = result.replace(/,\s*котор(?:ый|ая|ое|ые|ого|ой|ому|ых|ым|ыми)\s+[^,.!?]{0,50}([,.!?])/gi, '$1');

  // Remove parenthetical remarks
  result = result.replace(/\s*\([^)]+\)\s*/g, ' ');

  // Clean up
  result = result.replace(/\s{2,}/g, ' ').trim();

  // If text didn't shorten enough, trim sentences
  if (result.length > text.length * 0.80) {
    const sentences = splitSentences(result);
    if (sentences.length > 2) {
      const keepCount = Math.max(1, Math.ceil(sentences.length * 0.6));
      result = sentences.slice(0, keepCount).join(' ');
    } else if (sentences.length === 2) {
      // Keep the shorter sentence
      result = sentences[0].length <= sentences[1].length ? sentences[0] : sentences[1];
    } else {
      // Single long sentence — truncate at a logical break
      const commaIdx = result.lastIndexOf(', ');
      if (commaIdx > result.length * 0.4) {
        result = result.substring(0, commaIdx) + '.';
      }
    }
  }

  return result.trim();
}

function fixErrors(text: string): string {
  let result = text;

  for (const [pattern, replacement] of TYPO_FIXES) {
    if (typeof replacement === 'string') {
      result = result.replace(pattern, replacement);
    } else {
      result = result.replace(pattern, replacement as any);
    }
  }

  // Capitalize after sentence endings
  result = result.replace(/([.!?])\s+([а-яё])/g, (_, punct, letter) => {
    return `${punct} ${letter.toUpperCase()}`;
  });

  // Ensure first character is capitalized
  if (result.length > 0 && /[а-яё]/.test(result[0])) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  // Fix missing period at end
  if (result.length > 0 && !/[.!?…]$/.test(result.trim())) {
    result = result.trim() + '.';
  }

  // Fix multiple consecutive commas/periods
  result = result.replace(/([.,])\1+/g, '$1');

  // Fix space before comma/period
  result = result.replace(/\s+([.,;:!?])/g, '$1');

  // Fix no space after comma/period (before a letter)
  result = result.replace(/([.,;:!?])([а-яёА-ЯЁa-zA-Z])/g, '$1 $2');

  return result.trim();
}

function helpWithText(text: string): string {
  // Combination: fix errors + simplify a bit + remove fillers
  let result = fixErrors(text);

  // Light filler removal
  const lightFillers = [
    'в общем-то', 'в общем', 'так сказать', 'собственно говоря',
    'по сути дела', 'по большому счёту', 'по большому счету',
    'на самом деле', 'по факту', 'стоит отметить', 'следует отметить',
    'нужно отметить', 'важно отметить', 'конечно же', 'как известно',
  ];
  for (const filler of lightFillers) {
    const escaped = filler.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    result = result.replace(new RegExp(`\\s*,?\\s*${escaped}\\s*,?\\s*`, 'gi'), ' ');
  }

  // Light synonym simplification
  const lightSimplify: Record<string, string> = {
    'осуществлять': 'выполнять',
    'осуществляет': 'выполняет',
    'функционировать': 'работать',
    'функционирует': 'работает',
    'в настоящее время': 'сейчас',
    'представляет собой': 'является',
    'вследствие того что': 'потому что',
    'для того чтобы': 'чтобы',
    'в соответствии с': 'согласно',
    'на основании': 'на основе',
  };
  result = applySynonyms(result, lightSimplify);

  // Remove intensifiers
  result = result.replace(/(?<![а-яёА-ЯЁ])(очень|весьма|крайне|чрезвычайно)\s+/gi, '');

  result = result.replace(/\s{2,}/g, ' ').trim();

  // If barely changed, do light shortening
  if (levenshteinSimilarity(result, text) > 0.95) {
    const sentences = splitSentences(result);
    if (sentences.length > 3) {
      // Remove the least informative sentence (shortest one in middle)
      const midSentences = sentences.slice(1, -1);
      const shortest = midSentences.reduce((a, b) => a.length < b.length ? a : b);
      result = sentences.filter(s => s !== shortest).join(' ');
    }
  }

  return result;
}

// ---- Similarity helper (simple char-level) ----
function levenshteinSimilarity(a: string, b: string): number {
  if (a === b) return 1;
  const longer = a.length > b.length ? a : b;
  if (longer.length === 0) return 1;
  // Quick similarity based on common characters (not full Levenshtein for perf)
  let matches = 0;
  const len = Math.min(a.length, b.length);
  for (let i = 0; i < len; i++) {
    if (a[i] === b[i]) matches++;
  }
  return matches / longer.length;
}

// ---- Public API ----

export type AiAction = 'fix' | 'simpler' | 'harder' | 'rephrase' | 'shorten' | 'help';

export function transformText(text: string, action: AiAction): string {
  switch (action) {
    case 'fix': return fixErrors(text);
    case 'simpler': return makeSimpler(text);
    case 'harder': return makeHarder(text);
    case 'rephrase': return rephrase(text);
    case 'shorten': return makeShorter(text);
    case 'help': return helpWithText(text);
    default: return text;
  }
}

export const AI_ACTION_LABELS: Record<AiAction, string> = {
  fix: 'Исправить ошибки',
  simpler: 'Проще',
  harder: 'Сложнее',
  rephrase: 'Другими словами',
  shorten: 'Кратко',
  help: 'Помочь с текстом',
};

// ---- Free-text instruction processor ----

type IntentTag =
  | 'catchy'       // сделать цепляющим, привлекательным, ярким
  | 'shorten'      // сократить, короче, кратко
  | 'simplify'     // упростить, проще, понятно
  | 'formalize'    // формально, официально, сложнее
  | 'rephrase'     // перефразировать, другими словами
  | 'fix'          // исправить, ошибки, грамотно
  | 'soften'       // вежливо, мягче, деликатно
  | 'strengthen'   // убедительно, сильнее, жёстче
  | 'headline'     // заголовок, headline
  | 'list'         // список, пункты, структурировать
  | 'expand'       // расширить, дополнить, подробнее
  | 'emotional';   // эмоциональнее, живее, ярче

const INTENT_KEYWORDS: Record<IntentTag, string[]> = {
  catchy: ['цепля', 'привлекат', 'ярк', 'завлека', 'кликбейт', 'интригу', 'внимание', 'броск', 'запоминающ', 'вирусн', 'крут', 'вау'],
  shorten: ['корот', 'крат', 'сократ', 'урезать', 'компакт', 'укоротить', 'меньше слов', 'лаконич'],
  simplify: ['прост', 'упрост', 'понятн', 'легче', 'доступн', 'ясн', 'без сложных'],
  formalize: ['формальн', 'официальн', 'деловой', 'деловом', 'канцеляр', 'бюрократ', 'протокольн'],
  rephrase: ['перепиш', 'перефразир', 'другими словами', 'переформулир', 'переделай', 'измени текст', 'по-другому'],
  fix: ['исправ', 'ошибк', 'грамотн', 'правильн', 'орфограф', 'пунктуац', 'граммат'],
  soften: ['вежлив', 'мягче', 'мягк', 'деликатн', 'тактичн', 'дипломатичн', 'аккуратн', 'корректн'],
  strengthen: ['убедительн', 'сильнее', 'жёстч', 'жестч', 'настойчив', 'уверенн', 'твёрд', 'твёрже', 'решительн', 'мощн'],
  headline: ['заголов', 'headline', 'тайтл', 'title', 'название'],
  list: ['списо', 'пункт', 'структурир', 'нумерова', 'перечисл', 'bullet'],
  expand: ['расшир', 'дополн', 'подробн', 'развёрн', 'разверн', 'детальн', 'больше информац', 'добавь'],
  emotional: ['эмоциональн', 'живее', 'живой', 'экспрессивн', 'чувствен', 'душевн', 'тёпл', 'тепл'],
};

function detectIntents(instruction: string): IntentTag[] {
  const lower = instruction.toLowerCase();
  const intents: IntentTag[] = [];
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [IntentTag, string[]][]) {
    for (const kw of keywords) {
      if (lower.includes(kw)) {
        intents.push(intent);
        break;
      }
    }
  }
  return intents;
}

function makeCatchy(text: string): string {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return text;

  // Try to transform the first sentence into a hook
  let first = sentences[0];

  // Strategy 1: Turn statement into a question
  // "Компания запустила новый продукт" → "А вы знали? Компания запустила новый продукт"
  const hooks = [
    'А вы знали?',
    'Это важно:',
    'Внимание!',
    'Вот что произошло:',
    'Не пропустите:',
  ];
  const hookIdx = Math.floor(Math.random() * hooks.length);

  // Strategy 2: Add emotional amplifiers
  const amplifiers: Record<string, string> = {
    'запустил': 'наконец запустил',
    'объявил': 'громко объявил',
    'представил': 'впервые представил',
    'открыл': 'торжественно открыл',
    'выпустил': 'с гордостью выпустил',
    'достиг': 'блестяще достиг',
    'завершил': 'успешно завершил',
    'вырос': 'значительно вырос',
    'увеличил': 'резко увеличил',
    'сократил': 'существенно сократил',
    'улучшил': 'кардинально улучшил',
    'изменил': 'полностью изменил',
    'создал': 'с нуля создал',
    'разработал': 'впервые разработал',
    'решил': 'окончательно решил',
  };

  let amplified = first;
  for (const [word, replacement] of Object.entries(amplifiers)) {
    const regex = new RegExp(`${WB_START}${word}`, 'gi');
    amplified = amplified.replace(regex, (m) => {
      const rep = replacement;
      return m[0] === m[0].toUpperCase() ? rep.charAt(0).toUpperCase() + rep.slice(1) : rep;
    });
  }

  if (amplified !== first) {
    sentences[0] = amplified;
  } else {
    // If no amplifiers matched, prepend a hook
    sentences[0] = `${hooks[hookIdx]} ${first}`;
  }

  return sentences.join(' ').trim();
}

function makeHeadline(text: string): string {
  // Strip to first sentence or use as-is
  let headline = text.replace(/[.!?]+$/, '').trim();

  // Remove filler words
  const headlineFillers = ['стоит отметить что', 'следует отметить что', 'важно что', 'как известно', 'дело в том что'];
  for (const f of headlineFillers) {
    headline = headline.replace(new RegExp(f, 'gi'), '').trim();
  }

  // If very long, cut to core
  if (headline.length > 80) {
    const commaIdx = headline.indexOf(',');
    if (commaIdx > 15 && commaIdx < 70) {
      headline = headline.substring(0, commaIdx);
    } else {
      // Take first 60-70 chars at word boundary
      const cut = headline.substring(0, 70);
      const lastSpace = cut.lastIndexOf(' ');
      headline = cut.substring(0, lastSpace > 30 ? lastSpace : 70);
    }
  }

  // Capitalize first letter
  if (headline.length > 0) {
    headline = headline.charAt(0).toUpperCase() + headline.slice(1);
  }

  return headline;
}

function makeCatchyHeadline(text: string): string {
  let headline = makeHeadline(text);

  // Add power words / emotional hooks
  const patterns: [RegExp, string][] = [
    [/^(.+?)\s+(запуск|открыт|старт)/i, '🚀 $1 $2'],
    [/^(.+?)\s+(рост|увеличен|подъём)/i, '📈 $1 $2'],
    [/^(.+?)\s+(снижен|падени|сокращен)/i, '📉 $1 $2'],
    [/^(.+?)\s+(победа|успех|достижен)/i, '🏆 $1 $2'],
  ];

  for (const [pattern, replacement] of patterns) {
    if (pattern.test(headline)) {
      headline = headline.replace(pattern, replacement);
      return headline;
    }
  }

  // Generic catchy starters
  const starters = [
    'Как ', 'Почему ', 'Что изменилось: ', 'Главное: ',
  ];
  const starterIdx = Math.floor(Math.random() * starters.length);
  const lower = headline.charAt(0).toLowerCase() + headline.slice(1);

  return `${starters[starterIdx]}${lower}`;
}

function softenText(text: string): string {
  let result = text;

  const softenings: Record<string, string> = {
    'должен': 'мог бы',
    'должна': 'могла бы',
    'должны': 'могли бы',
    'нельзя': 'лучше не стоит',
    'запрещено': 'не рекомендуется',
    'обязан': 'было бы хорошо',
    'обязана': 'было бы хорошо',
    'немедленно': 'по возможности скорее',
    'требую': 'прошу',
    'требуется': 'было бы полезно',
    'плохо': 'не совсем удачно',
    'ужасно': 'не лучшим образом',
    'провал': 'не лучший результат',
    'ошибка': 'неточность',
    'виноват': 'допустил неточность',
    'виновата': 'допустила неточность',
    'неправильно': 'не совсем верно',
    'невозможно': 'затруднительно',
    'категорически': 'скорее',
  };
  result = applySynonyms(result, softenings);

  // Add softening phrases
  if (result === text) {
    const sentences = splitSentences(result);
    if (sentences.length > 0) {
      sentences[0] = `Хотелось бы обратить внимание: ${sentences[0].charAt(0).toLowerCase()}${sentences[0].slice(1)}`;
      result = sentences.join(' ');
    }
  }

  return result.trim();
}

function strengthenText(text: string): string {
  let result = text;

  const strengthenings: Record<string, string> = {
    'может быть': 'однозначно',
    'возможно': 'определённо',
    'наверное': 'без сомнения',
    'кажется': 'очевидно',
    'попробуем': 'сделаем',
    'попробовать': 'сделать',
    'хотелось бы': 'необходимо',
    'было бы неплохо': 'нужно',
    'стоит подумать': 'нужно решить',
    'рассмотрим': 'решим',
    'по возможности': 'обязательно',
    'желательно': 'обязательно',
    'рекомендуется': 'требуется',
    'неплохо': 'отлично',
    'неплохой': 'отличный',
    'хороший': 'выдающийся',
    'хорошо': 'превосходно',
    'нормально': 'на отлично',
  };
  result = applySynonyms(result, strengthenings);

  // Add conviction if no changes
  if (result === text) {
    const sentences = splitSentences(result);
    if (sentences.length > 0) {
      const lastIdx = sentences.length - 1;
      if (!/[!]$/.test(sentences[lastIdx])) {
        sentences[lastIdx] = sentences[lastIdx].replace(/[.]+$/, '!');
      }
      if (sentences.length > 1) {
        sentences.splice(1, 0, 'Это принципиально важно.');
      }
      result = sentences.join(' ');
    }
  }

  return result.trim();
}

function makeEmotional(text: string): string {
  let result = applySynonyms(text, REPHRASE_SYNONYMS);

  const emotionals: Record<string, string> = {
    'сообщаем': 'рады сообщить',
    'информируем': 'с радостью делимся',
    'запустили': 'наконец-то запустили',
    'завершили': 'с гордостью завершили',
    'достигли': 'с восторгом отмечаем: достигли',
    'открыли': 'с огромной радостью открыли',
    'представляем': 'с восхищением представляем',
    'приглашаем': 'с нетерпением приглашаем',
    'благодарим': 'от всего сердца благодарим',
  };
  result = applySynonyms(result, emotionals);

  // Exclamation marks instead of periods for short sentences
  const sentences = splitSentences(result);
  const enhanced = sentences.map(s => {
    if (s.length < 60 && s.endsWith('.')) {
      return s.slice(0, -1) + '!';
    }
    return s;
  });

  return enhanced.join(' ').trim();
}

function expandText(text: string): string {
  const sentences = splitSentences(text);
  if (sentences.length === 0) return text;

  const expansions = [
    'Это открывает новые возможности для всей команды.',
    'Подробности будут доступны в ближайшее время.',
    'Мы уверены, что это принесёт значимые результаты.',
    'Каждый сотрудник может внести свой вклад в этот процесс.',
    'Ожидается, что эффект будет заметен уже в ближайшие недели.',
  ];

  const expandIdx = Math.floor(Math.random() * expansions.length);

  // Add detail sentence after the first sentence
  if (sentences.length >= 1) {
    sentences.splice(1, 0, expansions[expandIdx]);
  }

  return sentences.join(' ').trim();
}

function toList(text: string): string {
  const sentences = splitSentences(text);
  if (sentences.length <= 1) {
    // Try splitting by commas
    const parts = text.split(/,\s*/);
    if (parts.length >= 3) {
      return parts.map((p, i) => `${i + 1}. ${p.trim().charAt(0).toUpperCase()}${p.trim().slice(1)}`).join('\n');
    }
    return text;
  }

  return sentences.map((s, i) => `${i + 1}. ${s.trim()}`).join('\n');
}

/**
 * Process a free-text instruction and transform the given text.
 * Analyzes the user's instruction for keywords and applies the best matching transformation.
 */
export function processInstruction(text: string, instruction: string): string {
  const intents = detectIntents(instruction);

  // No intents detected → apply a generic rephrase
  if (intents.length === 0) {
    // Default: rephrase + light fix
    let result = rephrase(text);
    result = fixErrors(result);
    return result;
  }

  let result = text;

  // Priority: headline + catchy = catchy headline
  if (intents.includes('headline') && intents.includes('catchy')) {
    return makeCatchyHeadline(text);
  }

  // Single-intent or chained processing
  if (intents.includes('headline')) {
    result = makeHeadline(result);
  }
  if (intents.includes('catchy')) {
    result = makeCatchy(result);
  }
  if (intents.includes('list')) {
    return toList(result);
  }
  if (intents.includes('fix')) {
    result = fixErrors(result);
  }
  if (intents.includes('simplify')) {
    result = makeSimpler(result);
  }
  if (intents.includes('formalize')) {
    result = makeHarder(result);
  }
  if (intents.includes('shorten')) {
    result = makeShorter(result);
  }
  if (intents.includes('expand')) {
    result = expandText(result);
  }
  if (intents.includes('rephrase') && !intents.includes('catchy') && !intents.includes('headline')) {
    result = rephrase(result);
  }
  if (intents.includes('soften')) {
    result = softenText(result);
  }
  if (intents.includes('strengthen')) {
    result = strengthenText(result);
  }
  if (intents.includes('emotional')) {
    result = makeEmotional(result);
  }

  // If nothing changed (rare), at least rephrase
  if (result === text) {
    result = rephrase(text);
  }

  return result.trim();
}