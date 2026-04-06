import svgPaths from "./svg-eq0ttwrb7w";
import imgFrame2131330740 from "figma:asset/bd1d57ae9c7325320709486f561078904327bc36.png";
import imgImageWithFallback from "figma:asset/a1c9ab373b74bce6a704a666aeefe5eeb20dbcc4.png";
import imgFrame2131330833 from "figma:asset/fad21831c783cdb2382ec714e0a713fb967385a6.png";

function Frame16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[12px] content-stretch flex items-center justify-center left-[12px] pb-[3px] px-[6px] rounded-[40px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.8)] tracking-[0.16px]">Источник: «Ведомости»</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[256px] relative shrink-0 w-full">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame2131330740} />
      <Frame16 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[50px] size-full" src={imgImageWithFallback} />
    </div>
  );
}

function DropdownChevron() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">ПромИнвест Новости</p>
      <DropdownChevron />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <ImageWithFallback />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame9 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Автор: Полина Лааксо</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] relative shrink-0 text-[18px] w-full">«Сбер» закрыл сделку по покупке доли АФК «Система» в российском производителе микроэлектроники «Элемент» — «Ъ»</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Долю «Системы» оценили примерно в 24 млрд рублей, а весь «Элемент» — более чем в 50 млрд рублей.</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[12px] items-start leading-[0] relative shrink-0 tracking-[0.16px] w-full">
      <ul className="block relative shrink-0 text-[0px] w-full">
        <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`По `}</span>
          <a className="cursor-pointer leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.kommersant.ru%2Fdoc%2F8362339&postId=2697189">
            <span className="leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.kommersant.ru%2Fdoc%2F8362339&postId=2697189">
              данным
            </span>
          </a>
          <span className="leading-[20px]">{` источника «Ъ», сделку закрыли в конце декабря 2025 года «с `}</span>
          <a className="cursor-pointer leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.kommersant.ru%2Fdoc%2F8362331&postId=2697189">
            <span className="leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.kommersant.ru%2Fdoc%2F8362331&postId=2697189">
              оговорками
            </span>
          </a>
          <span className="leading-[20px]">, которые должны быть устранены» до конца января 2026 года. В «Сбере» на запрос газеты не ответили. В АФК «Система» и «Элементе» отказались от комментариев.</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 text-[14px] w-full">
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[20px]">«Сбер» получит почти все активы группы, утверждает собеседник «Ъ». Среди исключений — «Корпорация роботов», контроль над которой сохранит АФК «Система».</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 text-[14px] w-full">
        <li className="list-disc ms-[21px] whitespace-pre-wrap">
          <span className="leading-[20px]">ПАО «Элемент» расформируют, а управление производственными активами передадут дочерней структуре «Сбера». На её базе банк будет и дальше консолидировать отраслевых игроков. Одним из наиболее вероятных будущих приобретений источники называют производителя микроэлектронных компонентов «НМ-Тех».</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 text-[0px] w-full">
        <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Акции «Элемента» `}</span>
          <a className="cursor-pointer leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.rbc.ru%2Fquote%2Fnews%2Farticle%2F696e79ba9a794720b52bfbae%3Ffrom%3Dcopy&postId=2697189">
            <span className="leading-[20px]" href="https://api.vc.ru/v2.8/redirect?to=https%3A%2F%2Fwww.rbc.ru%2Fquote%2Fnews%2Farticle%2F696e79ba9a794720b52bfbae%3Ffrom%3Dcopy&postId=2697189">
              отреагировали
            </span>
          </a>
          <span className="leading-[20px]">{` на новость ростом более чем на 11%, а потом упёрлись в планку: заявки в стакане были только на покупку, а на продажу их не было.`}</span>
        </li>
      </ul>
      <ul className="block relative shrink-0 text-[0px] w-full">
        <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)] text-[14px] whitespace-pre-wrap">
          <span className="leading-[20px]">{`Опрошенные «Ъ» эксперты `}</span>
          <a className="cursor-pointer leading-[20px]" href="https://vc.ru/tech/2222862-afk-sistema-prodaet-dolyu-v-elemente-sberu">
            <span className="leading-[20px]" href="https://vc.ru/tech/2222862-afk-sistema-prodaet-dolyu-v-elemente-sberu">
              рассказывали
            </span>
          </a>
          <span className="leading-[20px]">, что сделка «выглядит логичной»: для сокращения затрат и снижения зависимости от импорта, необходимого для развития языковых моделей, «Сберу» «стратегически важно» располагать собственным производством микроэлектроники.</span>
        </li>
      </ul>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[444px] not-italic relative shrink-0 text-[#161616] w-full">
      <Frame36 />
      <Frame35 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] relative w-full">
        <Frame10 />
        <Frame37 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[326px] overflow-clip pb-[32px] rounded-[12px] top-[214px] w-[520px]">
      <Frame34 />
      <Frame42 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--left">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.pfe9f680} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <ChevronLeft />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[12px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[50px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[#f4f4f4] inset-0 mix-blend-multiply pointer-events-none rounded-[50px]" />
      <ButtonContent />
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start />
      <End />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#171414] text-[12px] tracking-[0.32px]">Черновик</p>
      <Resizer />
    </div>
  );
}

function TagContent() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label />
    </div>
  );
}

function TagReadOnly() {
  return (
    <div className="bg-[#e5e0df] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[18px]">Создать новость</p>
      <TagReadOnly />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[2]">Превью новости в ленте</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <ButtonContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0f62fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Опубликовать</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <ButtonContent2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">Все изменения сохранены</p>
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[96px] px-[16px] py-[14px] right-0 top-[62px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p30dad5f0} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[96px]" data-name="Item 2">
      <Frame />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Главная</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[64px] left-0 top-[64px] w-[96px]" data-name="Item 1">
      <Frame1 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Документы</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1fe8b840} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[64px] left-0 top-[128px] w-[96px]" data-name="Item 3">
      <Frame2 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Заявления</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[64px] left-0 top-[192px] w-[96px]" data-name="Item 8">
      <Frame3 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Справочники</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p294cab80} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[64px] left-0 top-[256px] w-[96px]" data-name="Item 4">
      <Frame4 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Коллеги</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p351d3a02} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[76px] left-0 top-[320px] w-[96px]" data-name="Item 5">
      <Frame5 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px] w-[88px] whitespace-pre-wrap">График отпусков</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.22%_6.25%_6.26%_6.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21.0051">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c30ef70} fill="var(--fill-0, #373D42)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[36px] overflow-clip size-[24px] top-[12px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute h-[64px] left-0 top-[396px] w-[96px]" data-name="Item 6">
      <Frame6 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Заместители</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[21px] left-[36px] top-[14px] w-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g clipPath="url(#clip0_34_3083)" id="Frame">
          <path d={svgPaths.p36dad700} fill="var(--fill-0, #054ADA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3083">
            <rect fill="white" height="21" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute bg-[#edf5ff] h-[64px] left-0 top-[460px] w-[96px]" data-name="Item 9">
      <div aria-hidden="true" className="absolute border-[#054ada] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <Frame7 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#054ada] text-[12px] text-center top-[38px] tracking-[0.32px]">Новости</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[8px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p29659000} fill="var(--fill-0, #29B6F6)" id="Vector" />
          <path d={svgPaths.p3ce1b400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10811200} fill="var(--fill-0, #B0BEC5)" id="Vector_3" />
          <path d={svgPaths.p380e8600} fill="var(--fill-0, #CFD8DC)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[64px] left-0 top-[524px] w-[96px]" data-name="Item 7">
      <Frame8 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Telegram</p>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute h-[588px] left-0 top-0 w-[96px]" data-name="Items">
      <Item1 />
      <Item />
      <Item2 />
      <Item7 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item8 />
      <Item6 />
    </div>
  );
}

function IbmWatsonxAssistant() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[28px] top-1/2" data-name="ibm-watsonx--assistant 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_34_3070)" id="ibm-watsonx--assistant 1">
          <path d={svgPaths.p1c04d780} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p67aa400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p27744300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p12111200} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2a429580} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1dbf4180} fill="var(--fill-0, white)" id="Vector_6" />
          <g id="&lt;Transparent Rectangle&gt;">
            <g id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_34_3070">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[48px]" data-name="wrapper">
      <IbmWatsonxAssistant />
    </div>
  );
}

function hatWidget() {
  return (
    <div className="absolute bg-[#054ada] content-stretch flex gap-[8px] items-center justify-center left-[22px] p-[12px] rounded-[50px] size-[52px] top-[24px]" data-name="Сhat_widget">
      <Wrapper />
    </div>
  );
}

function Help() {
  return (
    <div className="absolute h-[100px] left-0 top-[818px] w-[96px]" data-name="Help">
      <hatWidget />
    </div>
  );
}

function UiShellLeftPanelGroupSideRail() {
  return (
    <div className="absolute bg-white h-[920px] left-0 top-[62px] w-[96px]" data-name="ui shell / left panel / group / side rail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Items />
        <Help />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
    </div>
  );
}

function HrlinkLogo() {
  return (
    <div className="absolute inset-[0.26%_0_2%_0.05%]" data-name="hrlink_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0845 23.4594">
        <g id="hrlink_logo">
          <path clipRule="evenodd" d={svgPaths.p3c1f5500} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path" />
          <rect fill="var(--fill-0, #054ADA)" height="16.0418" id="Rectangle" width="2.74763" x="28.4812" />
          <rect fill="var(--fill-0, #054ADA)" height="10.7697" id="Rectangle_2" width="2.74763" x="33.8922" y="5.27126" />
          <path clipRule="evenodd" d={svgPaths.p11cd21c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p23f26772} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_3" />
          <rect fill="var(--fill-0, #054ADA)" height="15.3539" id="Rectangle_3" width="2.74763" x="52.1169" y="0.687107" />
          <path clipRule="evenodd" d={svgPaths.p29845580} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_4" />
        </g>
      </svg>
    </div>
  );
}

function BrandingHrlinkLogo() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[19px] w-[62.118px]" data-name="branding / hrlink_logo">
      <HrlinkLogo />
    </div>
  );
}

function Frame19() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">РУ</p>
      </div>
      <div className="h-[5px] relative shrink-0 w-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
          <path d="M10 0H0L5 5L10 0Z" fill="var(--fill-0, #757575)" id="Vector 8" />
        </svg>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame19 />
    </div>
  );
}

function Help1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Help">
          <rect fill="white" fillOpacity="0.01" height="24" style={{ mixBlendMode: "multiply" }} width="24" />
          <g id="Vector">
            <path d={svgPaths.p11bb3d80} fill="#054ADA" />
            <path d={svgPaths.p128a2e00} fill="#054ADA" />
            <path d={svgPaths.p222cfb00} fill="#054ADA" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0" data-name="Icon">
      <Help1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13171a] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p>
          <span className="leading-[18px]">{`Ваш менеджер: `}</span>
          <span className="leading-[18px] text-[#054ada]">Иванов Иван</span>
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame21 />
      <Icon1 />
      <Frame18 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Spaces() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex gap-[6px] h-[32px] items-center justify-center max-w-[300px] px-[12px] relative rounded-[4px] shrink-0" data-name="Spaces">
      <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">{`Название пространства `}</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]" data-name="Switch">
      <div className="absolute inset-[-5%_-2.78%_-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 22">
          <g id="Switch">
            <rect fill="var(--fill-0, #E0E4EA)" height="18" id="ð¨ Color l Track" rx="9" width="36" y="2" />
            <g id="ð¡States" />
            <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #212121)" fillOpacity="0.08" fillRule="evenodd" id="Elevation" />
            <g filter="url(#filter0_d_68_13109)" id="ð¨ Color l Thumb">
              <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_68_13109" width="22" x="15" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_68_13109" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_68_13109" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex items-start py-[3px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13171a] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Сотрудник</p>
      </div>
    </div>
  );
}

function ToggleValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle + Value">
      <Switch />
      <Margin />
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="_Toggle base">
      <ToggleValue />
    </div>
  );
}

function QrCode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Qr-code">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Qr-code">
          <g id="Vector">
            <path d="M18 19.5V21H19.5V19.5H18Z" fill="#373D42" />
            <path d="M13.5 16.5V18H15V16.5H13.5Z" fill="#373D42" />
            <path d={svgPaths.p3fddfe80} fill="#373D42" />
            <path d={svgPaths.p2fa09680} fill="#373D42" />
            <path d={svgPaths.p3aacfd00} fill="#373D42" />
            <path d={svgPaths.p28123200} fill="#373D42" />
            <path d={svgPaths.p27b1800} fill="#373D42" />
            <path d={svgPaths.p35a1a600} fill="#373D42" />
            <path d="M7.5 16.5H4.5V19.5H7.5V16.5Z" fill="#373D42" />
            <path d={svgPaths.p186cab00} fill="#373D42" />
            <path d="M19.5 4.5H16.5V7.5H19.5V4.5Z" fill="#373D42" />
            <path d={svgPaths.p20117e00} fill="#373D42" />
            <path d="M7.5 4.5H4.5V7.5H7.5V4.5Z" fill="#373D42" />
            <path d={svgPaths.p9c73a00} fill="#373D42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UserAvatarSmall() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="user / avatar / small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #E0E4EA)" id="Oval" r="20" />
      </svg>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(50%-8.5px)] not-italic text-[#373d42] text-[14px] top-[calc(50%-9px)] tracking-[0.16px]">FS</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[698px] top-[7px]" data-name="actions">
      <Frame20 />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <Spaces />
      <ToggleBase />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <QrCode />
      <UserAvatarSmall />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="absolute bg-white h-[62px] left-0 top-0 w-[1512px]" data-name="_Header Desktop">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <BrandingHrlinkLogo />
      <Actions />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="leading-[16px] min-w-full relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-[min-content]">Аудитория</p>
      <p className="leading-[18px] relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[308px]">Руководители (40 чел), Новые сотрудники, до 3 мес (12 чел), Производство (180 чел)</p>
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Edit">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d="M15 13H1V14H15V13Z" fill="#0F62FE" />
            <path d={svgPaths.p279f5270} fill="#0F62FE" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <Edit />
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Изменить</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px]">Всего: 232 человека</p>
      <Button3 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame27 />
      <Frame26 />
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Канал получения</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Все каналы</p>
    </div>
  );
}

function Close() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p9429980} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[16px] relative shrink-0 w-px" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C6C6C6)" x1="0.5" x2="0.5" y2="16" />
        </g>
      </svg>
    </div>
  );
}

function DropdownChevron1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <Close />
      <Divider />
      <DropdownChevron1 />
    </div>
  );
}

function DropdownInputTrigger() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow />
          <AiIcons />
        </div>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger />
    </div>
  );
}

function DropdownComboBoxDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin />
      <DropdownInput />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Маршрут согласования</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Без согласования</p>
    </div>
  );
}

function Close1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p9429980} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Divider1() {
  return (
    <div className="h-[16px] relative shrink-0 w-px" data-name="Divider">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C6C6C6)" x1="0.5" x2="0.5" y2="16" />
        </g>
      </svg>
    </div>
  );
}

function DropdownChevron2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <Close1 />
      <Divider1 />
      <DropdownChevron2 />
    </div>
  );
}

function DropdownInputTrigger1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow1 />
          <AiIcons1 />
        </div>
      </div>
    </div>
  );
}

function DropdownInput1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger1 />
    </div>
  );
}

function DropdownComboBoxDefault1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin1 />
      <DropdownInput1 />
    </div>
  );
}

function LabelMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Теги</p>
    </div>
  );
}

function TextOverflow2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Выберите теги</p>
    </div>
  );
}

function DropdownChevron3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <DropdownChevron3 />
    </div>
  );
}

function DropdownInputTrigger2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow2 />
          <AiIcons2 />
        </div>
      </div>
    </div>
  );
}

function DropdownInput2() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger2 />
    </div>
  );
}

function DropdownComboBoxDefault2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin2 />
      <DropdownInput2 />
    </div>
  );
}

function Start1() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End1() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start1 />
      <End1 />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Новости</p>
      <Resizer1 />
    </div>
  );
}

function Close2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p9429980} fill="var(--fill-0, #0043CE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagCloseButton() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
      <Close2 />
    </div>
  );
}

function TagContent1() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label1 />
      <TagCloseButton />
    </div>
  );
}

function TagReadOnly1() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent1 />
    </div>
  );
}

function Start2() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End2() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start2 />
      <End2 />
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Сбер</p>
      <Resizer2 />
    </div>
  );
}

function Close3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p9429980} fill="var(--fill-0, #0043CE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagCloseButton1() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
      <Close3 />
    </div>
  );
}

function TagContent2() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label2 />
      <TagCloseButton1 />
    </div>
  );
}

function TagReadOnly2() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent2 />
    </div>
  );
}

function Start3() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End3() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start3 />
      <End3 />
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">афксистема</p>
      <Resizer3 />
    </div>
  );
}

function Close4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Close">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p9429980} fill="var(--fill-0, #0043CE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TagCloseButton2() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
      <Close4 />
    </div>
  );
}

function TagContent3() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label3 />
      <TagCloseButton2 />
    </div>
  );
}

function TagReadOnly3() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent3 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TagReadOnly1 />
      <TagReadOnly2 />
      <TagReadOnly3 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <DropdownComboBoxDefault2 />
      <Frame29 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <DropdownComboBoxDefault />
      <DropdownComboBoxDefault1 />
      <Frame44 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function ToggleSwitchSmall() {
  return <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />;
}

function ToggleItem() {
  return (
    <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall />
    </div>
  );
}

function ToggleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem />
    </div>
  );
}

function ToggleValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Запланировать публикацию</p>
      </div>
    </div>
  );
}

function Toggle() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ToggleValue1 />
    </div>
  );
}

function ToggleSwitchSmall1() {
  return <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />;
}

function ToggleItem1() {
  return (
    <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall1 />
    </div>
  );
}

function ToggleMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem1 />
    </div>
  );
}

function ToggleValue2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin1 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Ограничить срок жизни новости</p>
      </div>
    </div>
  );
}

function Toggle1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Toggle">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ToggleValue2 />
    </div>
  );
}

function ToggleSwitchSmall2() {
  return <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />;
}

function ToggleItem2() {
  return (
    <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall2 />
    </div>
  );
}

function ToggleMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem2 />
    </div>
  );
}

function ToggleValue3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin2 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Важная новость</p>
      </div>
    </div>
  );
}

function Toggle2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ToggleValue3 />
    </div>
  );
}

function ToggleSwitchSmall3() {
  return <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />;
}

function ToggleItem3() {
  return (
    <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall3 />
    </div>
  );
}

function ToggleMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem3 />
    </div>
  );
}

function ToggleValue4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin3 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Добавить кнопку «Ознакомлен»</p>
      </div>
    </div>
  );
}

function Toggle3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ToggleValue4 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[275px]">
      <Toggle />
      <Toggle1 />
      <Toggle2 />
      <Toggle3 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame43 />
      <Frame30 />
    </div>
  );
}

function ChevronUp() {
  return (
    <div className="relative shrink-0 size-[16px] z-[2]" data-name="Chevron--up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--up">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p23aae480} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AccordionHeader() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center py-[14px] relative shrink-0 w-full" data-name="Accordion header">
      <ChevronUp />
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] tracking-[0.16px] whitespace-pre-wrap z-[1]">Дополнительные настройки</p>
    </div>
  );
}

function CheckboxCheckedFilled() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox--checked--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox--checked--filled">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2cfc8500} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Разрешить проставление реакций</p>
    </div>
  );
}

function IconValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <CheckboxCheckedFilled />
      <ValueMargin />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Checkbox">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <IconValue />
    </div>
  );
}

function CheckboxCheckedFilled1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox--checked--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox--checked--filled">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2cfc8500} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValueMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Разрешить комментирование</p>
    </div>
  );
}

function IconValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <CheckboxCheckedFilled1 />
      <ValueMargin1 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <IconValue1 />
    </div>
  );
}

function CheckboxCheckedFilled2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox--checked--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox--checked--filled">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2cfc8500} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValueMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Показывать автора</p>
    </div>
  );
}

function IconValue2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <CheckboxCheckedFilled2 />
      <ValueMargin2 />
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <IconValue2 />
    </div>
  );
}

function SettingsCheckboxGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="settings checkbox group">
      <Checkbox />
      <Checkbox1 />
      <Checkbox2 />
    </div>
  );
}

function AccordionContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Accordion content">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pl-[32px] pt-[8px] relative w-full">
        <SettingsCheckboxGroup />
      </div>
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <AccordionHeader />
      <AccordionContent />
    </div>
  );
}

function Accordion() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <AccordionItem />
    </div>
  );
}

function Frame41() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] h-[828px] items-start p-[24px] right-[12px] rounded-[10px] top-[142px] w-[408px]">
      <Frame32 />
      <Accordion />
    </div>
  );
}

function TextOverflow3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Обычный текст</p>
    </div>
  );
}

function DropdownChevron4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <DropdownChevron4 />
    </div>
  );
}

function DropdownInputTrigger3() {
  return (
    <div className="h-[32px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative size-full">
          <TextOverflow3 />
          <AiIcons3 />
        </div>
      </div>
    </div>
  );
}

function DropdownInput3() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger3 />
    </div>
  );
}

function DropdownDefault() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[177px]" data-name="Dropdown - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <DropdownInput3 />
    </div>
  );
}

function TextBold() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--bold">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pef1c480} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextItalic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--italic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--italic">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p54b4180} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextUnderline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--underline">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.p3b97ed00} fill="#161616" />
            <path d={svgPaths.p65a6000} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListNumberedMirror() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List--numbered--mirror">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List--numbered--mirror">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.pce76e00} fill="var(--fill-0, #161616)" />
            <path d="M10 13.75H1.25V15H10V13.75Z" fill="var(--fill-0, #161616)" />
            <path d={svgPaths.p3f3dac00} fill="var(--fill-0, #161616)" />
            <path d="M10 5H1.25V6.25H10V5Z" fill="var(--fill-0, #161616)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d="M17.5 3.75H6.25V5H17.5V3.75Z" fill="#161616" />
            <path d="M17.5 15H6.25V16.25H17.5V15Z" fill="#161616" />
            <path d={svgPaths.p1472e8f0} fill="#161616" />
            <path d={svgPaths.pfb58eb0} fill="#161616" />
            <path d="M3.75 3.75H2.5V5H3.75V3.75Z" fill="#161616" />
            <path d="M3.75 15H2.5V16.25H3.75V15Z" fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <TextBold />
      <TextItalic />
      <TextUnderline />
      <ListNumberedMirror />
      <List />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center pr-[20px] relative shrink-0 w-[406px]">
      <DropdownDefault />
      <Frame25 />
    </div>
  );
}

function Quotes() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Quotes">
          <g id="Vector">
            <path d={svgPaths.p1a137840} fill="#525252" />
            <path d={svgPaths.p35724900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Quotes />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Цитата</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Link">
          <g id="Vector">
            <path d={svgPaths.p346b4500} fill="#525252" />
            <path d={svgPaths.p332005f0} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Ссылка</p>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <g id="Vector">
            <path d={svgPaths.p1d614280} fill="#525252" />
            <path d={svgPaths.p4360c80} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Image />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Картинка</p>
    </div>
  );
}

function Document() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Document">
          <g id="Vector">
            <path d={svgPaths.p2d5c9c00} fill="#525252" />
            <path d={svgPaths.p28584100} fill="#525252" />
            <path d={svgPaths.p34ec4400} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Document />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Файл</p>
    </div>
  );
}

function Video() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Video">
          <path d={svgPaths.p356ca270} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Video />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Видео</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-end px-[20px] relative size-full">
          <Frame15 />
          <Frame12 />
          <Frame14 />
          <Frame13 />
          <Frame23 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-white left-[108px] rounded-[8px] top-[142px] w-[972px]">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] w-full">
        <Frame33 />
        <Frame24 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.13)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] relative size-full" data-name="Редактор новости">
      <div className="absolute h-[898px] left-[96px] top-[111px] w-[1416px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFrame2131330833} />
        </div>
      </div>
      <Frame38 />
      <Frame22 />
      <UiShellLeftPanelGroupSideRail />
      <HeaderDesktop />
      <Frame41 />
      <Frame11 />
    </div>
  );
}