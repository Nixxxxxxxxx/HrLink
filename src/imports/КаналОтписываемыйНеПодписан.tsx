import svgPaths from "./svg-j754ybfc47";
import imgRectangle35 from "figma:asset/b7bfb7bb7338268fbe42087f83eb020cb074bbb7.png";

function Notch() {
  return (
    <div className="absolute h-[30px] left-[77px] top-[-2px] w-[219px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 30">
        <g id="Notch">
          <path d={svgPaths.p7f98200} fill="var(--fill-0, black)" id="Notch_2" />
        </g>
      </svg>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.6613 11.3363">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p2a2e4480} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p28e87170} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p323b7c80} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p3060aa80} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.pa3a6bc0} fill="var(--fill-0, black)" id="Mobile Signal" />
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
    <div className="absolute h-[44px] left-0 overflow-clip top-0 w-[374px]" data-name="iPhone X (or newer)">
      <Notch />
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[60px] not-italic text-center top-[52px] tracking-[0.16px]">
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[24px] left-[calc(50%+1.5px)] overflow-hidden text-[#161616] text-[18px] text-ellipsis top-[52px] w-[257px] whitespace-nowrap">Краткий обзор ключевых мировых новостей</p>
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[186.5px] text-[14px] text-black top-[80px] w-[229px] whitespace-pre-wrap">Все новости мира в одном канале</p>
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="absolute left-[15px] size-[24px] top-[63px]" data-name="Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chevron--left">
          <path d={svgPaths.p3e016100} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="-translate-y-1/2 absolute left-[341px] size-[20px] top-[calc(50%+20.5px)]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <rect fill="black" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p326b8200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white border-[rgba(0,0,0,0.1)] border-b border-solid h-[110px] left-px overflow-clip top-0 w-[374px]">
      <IPhoneXOrNewer />
      <Group />
      <ChevronLeft />
      <Search />
    </div>
  );
}

function View() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <View />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">15</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">30 дек, 14:45</p>
      <Frame5 />
    </div>
  );
}

function Reply() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame11 />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[12px] top-[20px] w-[327px]">
      <div className="h-[183px] relative shrink-0 w-full">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[134.02%] left-0 max-w-none top-[-0.19%] w-full" src={imgRectangle35} />
        </div>
      </div>
      <Frame16 />
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-full whitespace-pre-wrap">Макрон санкционировал своим спецслужбам запуск плана по ликвидации «неугодных лидеров» Африки, — СВР РФ.</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-full whitespace-pre-wrap">Другие заявления Службы внешней разведки:</p>
      <div className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-full whitespace-pre-wrap">
        <p className="mb-0">— Франция причастна к попытке переворота в Буркина-Фасо 3 января, Париж продолжит дестабилизировать страны Cахаро-Cахельского региона;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">— Париж лихорадочно ищет возможности для «политического реванша» в Африке;</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">— Франция прорабатывает варианты свержения нового президента на Мадагаскаре;</p>
        <p className="mb-0">&nbsp;</p>
        <p>— Франция перешла к прямой поддержке террористов «различных мастей», которые становятся ее основными союзниками на Африканском континенте.</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="h-[34px] relative shrink-0 w-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 34">
        <g id="Frame 2131330632">
          <circle cx="17" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 9" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="36" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="55" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 11" r="16.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--right">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1aa0f580} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px]">3 комментария</p>
      <ChevronRight />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[56px] items-center left-0 px-[12px] top-[733px] w-[351px]">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[6px] h-[36px] items-center left-[12px] px-[8px] py-[4px] rounded-[12px] top-[683px]">
      <div className="relative rounded-[100px] shrink-0 size-[21px]" data-name="Запись экрана 2026-02-04 в 13.07.28 1">
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <video autoPlay className="absolute left-[-17.89%] max-w-none size-[133.33%] top-[-21.27%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/e49928e20e4c79a72e50f3cd1d8a9c189a22e774" />
          </video>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">256</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[6px] h-[36px] items-center left-[86px] px-[8px] py-[4px] rounded-[12px] top-[683px]">
      <div className="relative rounded-[100px] shrink-0 size-[21px]" data-name="Запись экрана 2026-02-04 в 13.09.02 1">
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <video autoPlay className="absolute left-[-19.05%] max-w-none size-[133.33%] top-[-19.05%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/7ffcca43e8d82e1a1d6d8d8e0a08aceb1bcc50be" />
          </video>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">120</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[6px] h-[36px] items-center left-[160px] px-[8px] py-[4px] rounded-[12px] top-[683px]">
      <div className="relative rounded-[100px] shrink-0 size-[21px]" data-name="Запись экрана 2026-02-04 в 13.08.36 1">
        <div className="absolute inset-0 overflow-hidden rounded-[100px]">
          <video autoPlay className="absolute left-[-14.94%] max-w-none size-[130.29%] top-[-20.19%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/2e685457e9612447b49acb9c667e9ee130ead71f" />
          </video>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">24</p>
    </div>
  );
}

function Moon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p19973370} fill="white" />
            <path d={svgPaths.p1e05dd80} fill="white" />
            <path d={svgPaths.p3c7b1000} fill="white" />
            <path d={svgPaths.p3f153300} fill="white" />
            <path d={svgPaths.p38b169f0} fill="white" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center mr-[-6px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon />
    </div>
  );
}

function TagSelectable() {
  return (
    <div className="absolute bg-[#161616] content-stretch flex items-center justify-center left-[204px] pr-[6px] rounded-[16px] size-[36px] top-[67px]" data-name="Tag - Selectable">
      <IconWrapper />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-white content-start flex flex-wrap gap-[12px] items-start justify-between left-0 overflow-clip p-[12px] rounded-[12px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] top-0 w-[240px]">
      <div className="relative shrink-0 size-[36px]" data-name="Запись экрана 2026-02-04 в 13.07.28 2">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e49928e20e4c79a72e50f3cd1d8a9c189a22e774" />
        </video>
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="Запись экрана 2026-02-04 в 13.08.36 2">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/2e685457e9612447b49acb9c667e9ee130ead71f" />
        </video>
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="Запись экрана 2026-02-04 в 13.09.02 2">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/7ffcca43e8d82e1a1d6d8d8e0a08aceb1bcc50be" />
        </video>
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="Запись экрана 2026-02-04 в 13.09.16 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/72f28b61d850b50e259ce3dd0384a429a804cdc7" />
        </video>
      </div>
      <div className="relative shrink-0 size-[36px]" data-name="Запись экрана 2026-02-04 в 09.08.01 4">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay className="absolute h-[109.37%] left-[-7.63%] max-w-none top-[-9.38%] w-[107.63%]" controlsList="nodownload" loop playsInline>
            <source src="/_videos/v1/720d6131925a5e81e0749a49d48dae4ebaddafe0" />
          </video>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[103px] left-[21px] top-[616px] w-[240px]">
      <TagSelectable />
      <Frame15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute bg-[#f7f7f7] h-[796px] left-[12px] top-[122px] w-[351px]">
      <Frame6 />
      <Frame10 />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame17 />
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
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] items-start left-[calc(50%+0.5px)]" data-name="Bottom navigation - iOS | Carbon Mobile Library">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <BottomRailMobile />
      <IOsHomeIndicatorBar />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-end justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Подписаться на канал</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0f62fe] bottom-[100px] content-stretch flex flex-col items-center justify-center left-[calc(50%+0.5px)] overflow-clip w-[374px]" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute bottom-0 contents left-[calc(50%+0.5px)]">
      <BottomNavigationIOsCarbonMobileLibrary />
      <Button />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Канал отписываемый - не подписан">
      <Frame4 />
      <Frame7 />
      <Group1 />
    </div>
  );
}