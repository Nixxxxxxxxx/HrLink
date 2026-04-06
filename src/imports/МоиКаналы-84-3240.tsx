import svgPaths from "./svg-8d8p40br8k";
import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";
import imgFrame2131330710 from "figma:asset/42bc86e73d80506aeb8f346c17490d09bcc3e6fa.png";
import imgRectangle33 from "figma:asset/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png";
import imgFrame2131330711 from "figma:asset/5c134ebbd02006bf49c42198e659562a3a0ac036.png";
import imgRectangle34 from "figma:asset/c936e8b3093b9815209e2159c3ae99e5a8e4a187.png";
import imgRectangle35 from "figma:asset/e1c4d5265c5a16b5508c9bcbcd71a4ece85b2308.png";

function Search1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p154b5b00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#f2f4f8] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="search">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <Search1 />
          <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Поиск по новостям</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[18px] w-full whitespace-pre-wrap">Новости</p>
      <Search />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame28 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[22px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group 111">
          <g data-figma-bg-blur-radius="64" filter="url(#filter0_i_84_3270)" id="Ellipse 4">
            <circle cx="11" cy="11" fill="var(--fill-0, #616161)" fillOpacity="0.4" r="11" />
          </g>
          <g id="Pin--filled">
            <rect fill="white" fillOpacity="0.01" height="12.5714" style={{ mixBlendMode: "multiply" }} transform="translate(4.71455 4.71409)" width="12.5714" />
            <path d={svgPaths.p3a986900} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_84_3270" width="150" x="-64" y="-64">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="6" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
            <feBlend in2="shape" mode="color-dodge" result="effect1_innerShadow_84_3270" />
          </filter>
          <clipPath id="bgblur_0_84_3270_clip_path" transform="translate(64 64)">
            <circle cx="11" cy="11" r="11" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#f2f4f8] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-start pb-[16px] pl-[12px] pr-[16px] pt-[12px] relative w-full">
          <Group />
          <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[264px] min-h-px min-w-px not-italic relative self-stretch text-[#161616] text-[14px] tracking-[0.16px] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей</p>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Container />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <div className="absolute bottom-0 h-0 left-0 right-0">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 393 1">
            <line id="Line 52" stroke="var(--stroke-0, #E0E4EA)" x2="393" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] left-[20px] not-italic overflow-hidden text-[#161616] text-[14px] text-ellipsis top-0 tracking-[0.16px]">Для меня</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] left-[107px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[9px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Все каналы</p>
      </div>
      <div className="absolute h-0 left-[20px] top-[30px] w-[66px]">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 2">
            <line id="Line 51" stroke="var(--stroke-0, #0F62FE)" strokeWidth="2" x2="66" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative self-stretch shrink-0 text-[#161616] text-[14px] w-[231px] whitespace-pre-wrap">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] overflow-hidden relative shrink-0 text-ellipsis w-full">Все важное за 2 минуты</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] relative shrink-0 tracking-[0.16px] w-full">Дайджест с новостями, которые важно не пропустить</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="h-[64px] relative shrink-0 w-[90px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[54.413px] items-center justify-center left-[calc(50%-9.27px)] top-[calc(50%-4.79px)] w-[69.697px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "761.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-8.83deg]">
          <div className="h-[45.203px] relative rounded-[10px] w-[63.513px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgRectangle32} />
              <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[42.705px] items-center justify-center left-[calc(50%+17.24px)] top-[calc(50%+13.07px)] w-[53.758px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "593.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.79deg]">
          <div className="h-[31.063px] relative rounded-[10px] w-[47.08px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle41} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[rgba(15,98,254,0.1)] relative rounded-[8px] shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between pb-[11px] pt-[8px] px-[12px] relative w-full">
          <Frame48 />
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame10 />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#014cda] relative rounded-[32px] shrink-0 size-[58px]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">В</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function Pin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pin">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1057a580} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Важное</p>
      <Pin />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Frame24 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Обязательно к прочтению</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[20px] top-[12px]">
      <Frame13 />
      <Frame25 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame30 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-y-1/2 absolute left-[20px] rounded-[100px] size-[58px] top-[calc(50%-2px)]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle41} />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] w-[252px] whitespace-pre-wrap">Итоги года</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <g id="Ellipse 25">
              <circle cx="4" cy="4" fill="var(--fill-0, #054ADA)" r="2" />
              <circle cx="4" cy="4" r="3" stroke="var(--stroke-0, #054ADA)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Сейчас онлайн · 272 смотрят</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[2px] items-start left-[90px] top-[calc(50%-2px)]">
      <Frame27 />
      <Frame29 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame14 />
      <Frame26 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">К</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Команда разработки</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Встречайте нового руководителя команды, им станет...`}</p>
      <div className="col-1 h-[14px] ml-0 mt-[2px] relative rounded-[2px] row-1 w-[15px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgRectangle32} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Frame33 />
      <Group1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-start left-[20px] top-[9px]">
      <Frame15 />
      <Frame32 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#0f62fe] h-[28px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[7px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.16px]">@</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[4px] items-start right-[16px] top-[calc(50%-2px)] w-[28px]">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame31 />
      <Frame35 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">9+</p>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-[16px] top-[calc(50%-2px)] w-[28px]">
      <Frame7 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330710} />
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Дизайнерская команда</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="col-1 h-[14px] ml-0 mt-[2px] relative rounded-[2px] row-1 w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgRectangle33} />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Frame41 />
      <Group2 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[20px] top-[9px]">
      <Frame16 />
      <Frame40 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame38 />
      <Frame39 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">5</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-[16px] top-[calc(50%-2px)] w-[28px]">
      <Frame8 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330711} />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Отдел маркетинга</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="col-1 h-[14px] ml-0 mt-[2px] relative rounded-[2px] row-1 w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgRectangle34} />
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Frame46 />
      <Group3 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[20px] top-[9px]">
      <Frame17 />
      <Frame45 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame43 />
      <Frame44 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start right-[16px] top-[calc(50%-2px)] w-[28px]">
      <Frame9 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">К</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Команда поддержки</p>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Мы расширяем график работы для удобства клиентов.`}</p>
      <div className="col-1 h-[14px] ml-0 mt-[2px] relative rounded-[2px] row-1 w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgRectangle35} />
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <Frame54 />
      <Group4 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[20px] top-[9px]">
      <Frame18 />
      <Frame53 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-white h-[80px] overflow-clip relative shrink-0 w-full">
      <Frame51 />
      <Frame52 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame20 />
      <Frame22 />
      <Frame23 />
      <Frame42 />
      <Frame47 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Frame36 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame50 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[920px] items-center left-0 pb-[12px] pt-[16px] top-[43px] w-[393px]">
      <Frame12 />
      <Frame49 />
      <Frame37 />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Home">
          <path d={svgPaths.p33693000} fill="var(--fill-0, #7D7C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Home />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Главная</p>
    </div>
  );
}

function MenuItemMobile() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function DocumentMultiple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Document--multiple-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Document--multiple-01">
          <g id="Vector">
            <path d="M3 4.5H1.5V19.5H3V4.5Z" fill="var(--fill-0, #7D7C78)" />
            <path d="M6 3H4.5V21H6V3Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p3a9b580} fill="var(--fill-0, #7D7C78)" />
            <path d="M19.5 12H10.5V13.5H19.5V12Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p1f5c4e80} fill="var(--fill-0, #7D7C78)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <DocumentMultiple />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Документы</p>
    </div>
  );
}

function MenuItemMobile1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame1 />
          <div className="absolute left-[56px] size-[6px] top-[11px]" data-name="Counter">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #F44336)" id="Counter" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentRequirements() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Document--requirements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Document--requirements">
          <g id="Vector">
            <path d={svgPaths.p2ce106f0} fill="var(--fill-0, #7D7C78)" />
            <path d="M12 15H7.5V16.5H12V15Z" fill="var(--fill-0, #7D7C78)" />
            <path d="M13.5 12H7.5V13.5H13.5V12Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p13e9cb00} fill="var(--fill-0, #7D7C78)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <DocumentRequirements />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Заявления</p>
    </div>
  );
}

function MenuItemMobile2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Grid">
          <g id="Vector">
            <path d={svgPaths.p1fd83f80} fill="#373D42" />
            <path d={svgPaths.pfd21b00} fill="#373D42" />
            <path d={svgPaths.p2aced380} fill="#373D42" />
            <path d={svgPaths.p2506a700} fill="#373D42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Grid />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#373d42] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Ещё</p>
    </div>
  );
}

function MenuItemMobile3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div aria-hidden="true" className="absolute border-[#054ada] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function BottomRailMobile() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bottom rail Mobile">
      <div aria-hidden="true" className="absolute border-[#9e9e9e] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      <MenuItemMobile />
      <MenuItemMobile1 />
      <MenuItemMobile2 />
      <MenuItemMobile3 />
    </div>
  );
}

function IOsHomeIndicatorBar() {
  return (
    <div className="h-[16px] relative shrink-0 w-[374px]" data-name="iOS home indicator bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 374 16">
        <g id="iOS home indicator bar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="374" />
          <path d={svgPaths.p1b7fbb00} fill="var(--fill-0, black)" id="Bar" />
        </g>
      </svg>
    </div>
  );
}

function BottomNavigationIOsCarbonMobileLibrary() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] items-start left-[calc(50%+0.5px)] w-[394px]" data-name="Bottom navigation - iOS | Carbon Mobile Library">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <BottomRailMobile />
      <IOsHomeIndicatorBar />
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.661 11.3363">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p15fbbb80} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p315c3700} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p270e2e80} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p2ded9c00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p1e137f00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IPhoneXOrNewer() {
  return (
    <div className="absolute bg-white h-[44px] left-px overflow-clip top-0 w-[392px]" data-name="iPhone X (or newer)">
      <RightSide />
      <LeftSide />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Мои каналы">
      <Frame21 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(100%+66px)] not-italic text-[14px] text-white top-[170px] tracking-[0.16px]">22</p>
      <BottomNavigationIOsCarbonMobileLibrary />
      <IPhoneXOrNewer />
    </div>
  );
}