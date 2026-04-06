import svgPaths from "./svg-v340kq1h7r";
import imgNewsAvatar from "figma:asset/bd1d57ae9c7325320709486f561078904327bc36.png";
import imgNewsAvatar1 from "figma:asset/042af3e1197385a624517b3072852098912ee9d8.png";
import imgNewsAvatar2 from "figma:asset/2e7b76a50012ba932d4cc7fe71719ed791aeceb2.png";
import imgNewsAvatar3 from "figma:asset/767be3cde6378adbe281df3a1dcde9b07d9b9c5d.png";
import imgNewsAvatar4 from "figma:asset/2f895f69202ac446202d848cccd7500ead552621.png";

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
    <div className="bg-[#f2f4f8] content-stretch flex gap-[6px] h-full items-center justify-center px-[12px] relative rounded-[4px] shrink-0 w-[328px]" data-name="search">
      <Search1 />
      <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Поиск по новостям</p>
      </div>
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

function Icon() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[3]">Все каналы</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent />
    </div>
  );
}

function ChevronDown1() {
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

function Icon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown1 />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[3]">Все таргеты</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent1 />
    </div>
  );
}

function ChevronDown2() {
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

function Icon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown2 />
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[3]">Все статусы</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent2 />
    </div>
  );
}

function ChevronDown3() {
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

function Icon3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown3 />
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[3]">За все время</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon3 />
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

function ChevronDown4() {
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

function Icon4() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown4 />
    </div>
  );
}

function ButtonContent4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] z-[3]">Все авторы</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent4 />
    </div>
  );
}

function Checkbox1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Только важные</p>
    </div>
  );
}

function IconValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <Checkbox1 />
      <ValueMargin />
    </div>
  );
}

function Checkbox() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Checkbox">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <IconValue />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="filters">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Checkbox />
    </div>
  );
}

function SearchFilter() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[112px] top-[150px]" data-name="Search+filter">
      <div className="flex flex-row items-center self-stretch">
        <Search />
      </div>
      <Filters />
    </div>
  );
}

function AiSpacer() {
  return (
    <div className="content-stretch flex items-start relative self-stretch shrink-0" data-name="AI spacer">
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Spacer">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
              <g id="Spacer" opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Checkbox2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[16px] py-[10px] relative shrink-0" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox2 />
    </div>
  );
}

function IconMargin() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[40px] min-w-px relative self-stretch" data-name="Content">
      <div className="content-stretch flex gap-[8px] items-start max-w-[inherit] min-h-[inherit] pl-[16px] pr-[8px] py-[11px] relative size-full">
        <p className="flex-[1_0_0] font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Новость</p>
        <IconMargin />
      </div>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-h-[40px] pl-[16px] pr-[8px] py-[11px] relative self-stretch shrink-0 w-[180.002px]" data-name="Content">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Канал</p>
      <IconMargin1 />
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-h-[40px] pl-[16px] pr-[8px] py-[11px] relative self-stretch shrink-0 w-[286.497px]" data-name="Content">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Таргет</p>
      <IconMargin2 />
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-h-[40px] pl-[16px] pr-[8px] py-[11px] relative self-stretch shrink-0 w-[172px]" data-name="Content">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Статус</p>
      <IconMargin3 />
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="h-[18px] relative shrink-0 w-0" data-name="Icon margin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.99382e-07 18">
        <g id="Icon margin">
          <g id="Spacer" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start min-h-[40px] pl-[16px] py-[11px] relative self-stretch shrink-0 w-[160.002px]" data-name="Content">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Дата публикации</p>
      <IconMargin4 />
    </div>
  );
}

function DataTableHeaderRowItem() {
  return (
    <div className="bg-[#f2f4f8] relative rounded-[4px] shrink-0 w-full z-[2]" data-name="Data table header row item">
      <div className="content-stretch flex items-start pr-[16px] relative w-full">
        <AiSpacer />
        <DataTableSelectCellItem />
        <Content />
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
      </div>
    </div>
  );
}

function Checkbox3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox3 />
    </div>
  );
}

function NewsAvatar() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar} />
    </div>
  );
}

function View() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function Moon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p36b60600} fill="var(--fill-0, #0043CE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Date">
      <Moon />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">до 12.02.2026</p>
    </div>
  );
}

function Containter() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Containter">
      <ViewCounter />
      <Date />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Новые правила безопасности в офисе: что изменилось и как это повлияет на вашу работу</p>
      <Containter />
    </div>
  );
}

function Content5() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar />
        <TextContainer />
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Бухгалтерия</p>
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Топ-менеджмент, старше 50 лет, стратегия, новости компании</p>
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] tracking-[0.32px]">Опубликовано</p>
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
    <div className="bg-[#a7f0ba] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <div aria-hidden="true" className="absolute border border-[#74e792] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <TagContent />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem1 />
        <Content5 />
        <Content6 />
        <Content7 />
        <Content8 />
        <Content9 />
      </div>
    </div>
  );
}

function Checkbox4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox4 />
    </div>
  );
}

function NewsAvatar1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar1} />
    </div>
  );
}

function View1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Внедрение новых технологий в производственный процесс: что нужно знать</p>
      <ViewCounter1 />
    </div>
  );
}

function Content10() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar1 />
        <TextContainer1 />
      </div>
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Производственный отдел</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Инженеры, менеджеры проектов, инновации, развитие</p>
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#171414] text-[12px] tracking-[0.32px]">Запланировано</p>
      <Resizer1 />
    </div>
  );
}

function TagContent1() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label1 />
    </div>
  );
}

function TagReadOnly1() {
  return (
    <div className="bg-[#e5e0df] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent1 />
    </div>
  );
}

function Content13() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly1 />
    </div>
  );
}

function Content14() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem2 />
        <Content10 />
        <Content11 />
        <Content12 />
        <Content13 />
        <Content14 />
      </div>
    </div>
  );
}

function Checkbox5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox5 />
    </div>
  );
}

function NewsAvatar2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar2} />
    </div>
  );
}

function View2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Новые правила безопасности в офисе: что изменилось и как это повлияет на вашу работу</p>
      <ViewCounter2 />
    </div>
  );
}

function Content15() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar2 />
        <TextContainer2 />
      </div>
    </div>
  );
}

function Content16() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Бухгалтерия</p>
    </div>
  );
}

function Content17() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Топ-менеджмент, старше 50 лет, стратегия, новости компании</p>
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] tracking-[0.32px]">Опубликовано</p>
      <Resizer2 />
    </div>
  );
}

function TagContent2() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label2 />
    </div>
  );
}

function TagReadOnly2() {
  return (
    <div className="bg-[#a7f0ba] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent2 />
    </div>
  );
}

function Content18() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly2 />
    </div>
  );
}

function Content19() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem3 />
        <Content15 />
        <Content16 />
        <Content17 />
        <Content18 />
        <Content19 />
      </div>
    </div>
  );
}

function Checkbox6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox6 />
    </div>
  );
}

function NewsAvatar3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar3} />
    </div>
  );
}

function View3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <ViewCounter3 />
    </div>
  );
}

function Content20() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar3 />
        <TextContainer3 />
      </div>
    </div>
  );
}

function Content21() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Команда разработки</p>
    </div>
  );
}

function Content22() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Сотрудники всех уровней, зарплата, мотивация</p>
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] tracking-[0.32px]">Опубликовано</p>
      <Resizer3 />
    </div>
  );
}

function TagContent3() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label3 />
    </div>
  );
}

function TagReadOnly3() {
  return (
    <div className="bg-[#a7f0ba] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent3 />
    </div>
  );
}

function Content23() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly3 />
    </div>
  );
}

function Content24() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem4 />
        <Content20 />
        <Content21 />
        <Content22 />
        <Content23 />
        <Content24 />
      </div>
    </div>
  );
}

function Checkbox7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox7 />
    </div>
  );
}

function NewsAvatar4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgNewsAvatar4} />
        <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
      </div>
    </div>
  );
}

function View4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Внедрение новых технологий в производственный процесс: что нужно знать</p>
      <ViewCounter4 />
    </div>
  );
}

function Content25() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar4 />
        <TextContainer4 />
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Производственный отдел</p>
    </div>
  );
}

function Content27() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Инженеры, менеджеры проектов, инновации, развитие</p>
    </div>
  );
}

function Start4() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End4() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start4 />
      <End4 />
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] tracking-[0.32px]">Опубликовано</p>
      <Resizer4 />
    </div>
  );
}

function TagContent4() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label4 />
    </div>
  );
}

function TagReadOnly4() {
  return (
    <div className="bg-[#a7f0ba] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent4 />
    </div>
  );
}

function Content28() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly4 />
    </div>
  );
}

function Content29() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem5 />
        <Content25 />
        <Content26 />
        <Content27 />
        <Content28 />
        <Content29 />
      </div>
    </div>
  );
}

function Checkbox8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox8 />
    </div>
  );
}

function NewsAvatar5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar} />
    </div>
  );
}

function View5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Новые правила безопасности в офисе: что изменилось и как это повлияет на вашу работу</p>
      <ViewCounter5 />
    </div>
  );
}

function Content30() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar5 />
        <TextContainer5 />
      </div>
    </div>
  );
}

function Content31() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Бухгалтерия</p>
    </div>
  );
}

function Content32() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Топ-менеджмент, старше 50 лет, стратегия, новости компании</p>
    </div>
  );
}

function Start5() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End5() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start5 />
      <End5 />
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121619] text-[12px] tracking-[0.32px]">Черновик</p>
      <Resizer5 />
    </div>
  );
}

function TagContent5() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label5 />
    </div>
  );
}

function TagReadOnly5() {
  return (
    <div className="bg-[#dde1e6] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent5 />
    </div>
  );
}

function Content33() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly5 />
    </div>
  );
}

function Content34() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem6 />
        <Content30 />
        <Content31 />
        <Content32 />
        <Content33 />
        <Content34 />
      </div>
    </div>
  );
}

function Checkbox9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox9 />
    </div>
  );
}

function NewsAvatar6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar1} />
    </div>
  );
}

function View6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter6() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View6 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <ViewCounter6 />
    </div>
  );
}

function Content35() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar6 />
        <TextContainer6 />
      </div>
    </div>
  );
}

function Content36() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Команда разработки</p>
    </div>
  );
}

function Content37() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Сотрудники всех уровней, зарплата, мотивация</p>
    </div>
  );
}

function Start6() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End6() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start6 />
      <End6 />
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121619] text-[12px] tracking-[0.32px]">Архив</p>
      <Resizer6 />
    </div>
  );
}

function TagContent6() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label6 />
    </div>
  );
}

function TagReadOnly6() {
  return (
    <div className="bg-[#dde1e6] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent6 />
    </div>
  );
}

function Content38() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly6 />
    </div>
  );
}

function Content39() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem7 />
        <Content35 />
        <Content36 />
        <Content37 />
        <Content38 />
        <Content39 />
      </div>
    </div>
  );
}

function Checkbox10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox10 />
    </div>
  );
}

function NewsAvatar7() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar1} />
    </div>
  );
}

function View7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter7() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View7 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <ViewCounter7 />
    </div>
  );
}

function Content40() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar7 />
        <TextContainer7 />
      </div>
    </div>
  );
}

function Content41() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Команда разработки</p>
    </div>
  );
}

function Content42() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Сотрудники всех уровней, зарплата, мотивация</p>
    </div>
  );
}

function Start7() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End7() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start7 />
      <End7 />
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121619] text-[12px] tracking-[0.32px]">Архив</p>
      <Resizer7 />
    </div>
  );
}

function TagContent7() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label7 />
    </div>
  );
}

function TagReadOnly7() {
  return (
    <div className="bg-[#dde1e6] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent7 />
    </div>
  );
}

function Content43() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly7 />
    </div>
  );
}

function Content44() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem8 />
        <Content40 />
        <Content41 />
        <Content42 />
        <Content43 />
        <Content44 />
      </div>
    </div>
  );
}

function Checkbox11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox11 />
    </div>
  );
}

function NewsAvatar8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar2} />
    </div>
  );
}

function View8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter8() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View8 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0043ce] text-[14px] tracking-[0.16px]">Статистика</p>
    </div>
  );
}

function TextContainer8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <ViewCounter8 />
    </div>
  );
}

function Content45() {
  return (
    <div className="flex-[1_0_0] max-w-[520px] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start max-w-[inherit] min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar8 />
        <TextContainer8 />
      </div>
    </div>
  );
}

function Content46() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Команда разработки</p>
    </div>
  );
}

function Content47() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Сотрудники всех уровней, зарплата, мотивация</p>
    </div>
  );
}

function Start8() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End8() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer8() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start8 />
      <End8 />
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121619] text-[12px] tracking-[0.32px]">Архив</p>
      <Resizer8 />
    </div>
  );
}

function TagContent8() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label8 />
    </div>
  );
}

function TagReadOnly8() {
  return (
    <div className="bg-[#dde1e6] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent8 />
    </div>
  );
}

function Content48() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[172px] z-[2]" data-name="Content">
      <TagReadOnly8 />
    </div>
  );
}

function Content49() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem9 />
        <Content45 />
        <Content46 />
        <Content47 />
        <Content48 />
        <Content49 />
      </div>
    </div>
  );
}

function Checkbox12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Checkbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Checkbox">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pce6f280} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DataTableSelectCellItem10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[30px] pl-[16px] pt-[14px] relative self-stretch shrink-0 z-[6]" data-name="Data table select cell item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Checkbox12 />
    </div>
  );
}

function NewsAvatar9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar2} />
    </div>
  );
}

function View9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="View">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p3345a780} fill="#161616" />
            <path d={svgPaths.p2fbb9300} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ViewCounter9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="View counter">
      <View9 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
    </div>
  );
}

function TextContainer9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Text container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] max-w-[360px] min-w-full not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-[min-content] whitespace-nowrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <ViewCounter9 />
    </div>
  );
}

function Content50() {
  return (
    <div className="flex-[1_0_0] min-h-[64px] min-w-px relative z-[5]" data-name="Content">
      <div className="content-stretch flex gap-[12px] items-start min-h-[inherit] pb-[16px] pt-[15px] px-[16px] relative w-full">
        <NewsAvatar9 />
        <TextContainer9 />
      </div>
    </div>
  );
}

function Content51() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[180.002px] z-[4]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[148.002px] whitespace-pre-wrap">Команда разработки</p>
    </div>
  );
}

function Content52() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[286.497px] z-[3]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Сотрудники всех уровней, зарплата, мотивация</p>
    </div>
  );
}

function Start9() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End9() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start9 />
      <End9 />
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#121619] text-[12px] tracking-[0.32px]">Архив</p>
      <Resizer9 />
    </div>
  );
}

function TagContent9() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label9 />
    </div>
  );
}

function TagReadOnly9() {
  return (
    <div className="bg-[#dde1e6] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent9 />
    </div>
  );
}

function Content53() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pt-[15px] px-[16px] relative shrink-0 w-[134px] z-[2]" data-name="Content">
      <TagReadOnly9 />
    </div>
  );
}

function Content54() {
  return (
    <div className="content-stretch flex flex-col items-start min-h-[64px] pb-[16px] pl-[16px] pt-[15px] relative shrink-0 w-[160.002px] z-[1]" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[128.002px] whitespace-pre-wrap">15.05.2024</p>
    </div>
  );
}

function DataTableBodyRowItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Data table body row item">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex isolate items-start pr-[16px] relative w-full">
        <DataTableSelectCellItem10 />
        <Content50 />
        <Content51 />
        <Content52 />
        <Content53 />
        <Content54 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col h-[776.001px] items-start relative shrink-0 w-full z-[1]" data-name="Body">
      <DataTableBodyRowItem />
      <DataTableBodyRowItem1 />
      <DataTableBodyRowItem2 />
      <DataTableBodyRowItem3 />
      <DataTableBodyRowItem4 />
      <DataTableBodyRowItem5 />
      <DataTableBodyRowItem6 />
      <DataTableBodyRowItem7 />
      <DataTableBodyRowItem8 />
      <DataTableBodyRowItem9 />
    </div>
  );
}

function DataTable() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[834px] isolate items-start left-[112px] overflow-clip top-[206px] w-[1384px]" data-name="Data table">
      <DataTableHeaderRowItem />
      <Body />
    </div>
  );
}

function LabelMargins() {
  return (
    <div className="content-stretch flex items-start py-[11px] relative shrink-0" data-name="Label margins">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Items per page:</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0 z-[3]" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">10</p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 z-[2]" data-name="Icons">
      <ChevronDown5 />
    </div>
  );
}

function SelectMenuDropdownItems() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] isolate items-center overflow-clip pl-[8px] pr-[16px] py-[14px] relative shrink-0" data-name="Select menu dropdown items">
      <TextOverflow />
      <Icons />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply z-[1]" data-name="Background" />
    </div>
  );
}

function SelectMenuOverflow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Select menu + Overflow">
      <SelectMenuDropdownItems />
    </div>
  );
}

function SelectMenuInlineBase() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_Select menu inline base">
      <SelectMenuOverflow />
    </div>
  );
}

function SelectDefault() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Select - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargins />
      <SelectMenuInlineBase />
    </div>
  );
}

function SelectDivider() {
  return (
    <div className="content-stretch flex items-center pl-[16px] relative shrink-0" data-name="Select + Divider">
      <SelectDefault />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Divider" stroke="var(--stroke-0, #C6C6C6)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ItemsShownOfTotal() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Items shown of total">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[16px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">1–10 из 100 новостей</p>
        </div>
      </div>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0 z-[3]" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">1</p>
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 z-[2]" data-name="Icons">
      <ChevronDown6 />
    </div>
  );
}

function SelectMenuDropdownItems1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] isolate items-center overflow-clip px-[8px] py-[14px] relative shrink-0" data-name="Select menu dropdown items">
      <TextOverflow1 />
      <Icons1 />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply z-[1]" data-name="Background" />
    </div>
  );
}

function SelectMenuOverflow1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Select menu + overflow">
      <SelectMenuDropdownItems1 />
    </div>
  );
}

function SelectMenuInlineBase1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="_Select menu inline base">
      <SelectMenuOverflow1 />
    </div>
  );
}

function SelectMenu() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Select menu">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <SelectMenuInlineBase1 />
    </div>
  );
}

function TotalPagesMargins() {
  return (
    <div className="content-stretch flex items-start py-[11px] relative self-stretch shrink-0" data-name="Total pages margins">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">из 10 страниц</p>
    </div>
  );
}

function CurrentPageTotalPages1() {
  return (
    <div className="content-stretch flex items-start pl-[8px] pr-[16px] relative shrink-0" data-name="Current page + Total pages">
      <SelectMenu />
      <TotalPagesMargins />
    </div>
  );
}

function CaretLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Caret--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Caret--left">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d="M10 12L5 8L10 4V12Z" fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <CaretLeft />
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[12px] relative w-full">
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent5 />
    </div>
  );
}

function CaretRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Caret--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Caret--right">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d="M6 4L11 8L6 12V4Z" fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <CaretRight />
    </div>
  );
}

function ButtonContent6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center p-[12px] relative w-full">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent6 />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Nav">
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Divider" stroke="var(--stroke-0, #C6C6C6)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Button5 />
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Divider" stroke="var(--stroke-0, #C6C6C6)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Button6 />
    </div>
  );
}

function CurrentPageTotalPages() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Current page + Total pages">
      <div className="flex h-[40px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "153.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[40px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 1">
                <line id="Divider" stroke="var(--stroke-0, #C6C6C6)" x2="40" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <CurrentPageTotalPages1 />
      <Nav />
    </div>
  );
}

function PaginationTableBar() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch flex items-start justify-end left-[96px] right-0" data-name="Pagination - Table bar">
      <div aria-hidden="true" className="absolute border-[#c6c6c6] border-solid border-t inset-0 pointer-events-none" />
      <SelectDivider />
      <ItemsShownOfTotal />
      <CurrentPageTotalPages />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0844 23.4595">
        <g id="hrlink_logo">
          <path clipRule="evenodd" d={svgPaths.p254a2800} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path" />
          <rect fill="var(--fill-0, #054ADA)" height="16.0418" id="Rectangle" width="2.74763" x="28.4812" />
          <rect fill="var(--fill-0, #054ADA)" height="10.7697" id="Rectangle_2" width="2.74763" x="33.8923" y="5.27126" />
          <path clipRule="evenodd" d={svgPaths.p11cd21c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p2a2501b0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_3" />
          <rect fill="var(--fill-0, #054ADA)" height="15.3539" id="Rectangle_3" width="2.74763" x="52.1169" y="0.687107" />
          <path clipRule="evenodd" d={svgPaths.p12abd800} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_4" />
        </g>
      </svg>
    </div>
  );
}

function BrandingHrlinkLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[62.118px]" data-name="branding / hrlink_logo">
      <HrlinkLogo />
    </div>
  );
}

function Frame10() {
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

function Frame12() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame10 />
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

function Icon7() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0" data-name="Icon">
      <Help1 />
    </div>
  );
}

function Frame9() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame12 />
      <Icon7 />
      <Frame9 />
    </div>
  );
}

function ChevronDown7() {
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
      <ChevronDown7 />
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
            <g filter="url(#filter0_d_125_112569)" id="ð¨ Color l Thumb">
              <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_125_112569" width="22" x="15" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_125_112569" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_125_112569" mode="normal" result="shape" />
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
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="actions">
      <Frame11 />
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
    <div className="absolute bg-white content-stretch flex h-[62px] items-center justify-between left-0 px-[24px] top-0 w-[1512px]" data-name="_Header Desktop">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <BrandingHrlinkLogo />
      <Actions />
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <ChevronDown8 />
    </div>
  );
}

function ButtonContent7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Создать новость</p>
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#0f62fe] content-stretch flex flex-col items-start justify-center overflow-clip right-[16px] rounded-[4px] top-[16px] w-[172px]" data-name="Button">
      <ButtonContent7 />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Add">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p349d7700} fill="var(--fill-0, #0F62FE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <Add />
    </div>
  );
}

function ButtonContent8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Создать папку</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start justify-center left-[735px] overflow-clip top-[20px] w-[151px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent8 />
    </div>
  );
}

function TabContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] h-[45px] items-start left-[226px] top-[27px] w-[25px]" data-name="Tab container">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-nowrap">Все</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 2">
            <line id="Line 51" stroke="var(--stroke-0, #0F62FE)" strokeWidth="2" x2="25" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] h-[45px] items-start left-[271px] top-[27px]" data-name="Tab container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px]">Контент план</p>
    </div>
  );
}

function TabContainer2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] h-[45px] items-start left-[382px] top-[27px]" data-name="Tab container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px]">Для важных новостей</p>
    </div>
  );
}

function TabContainer3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] h-[45px] items-start left-[550px] top-[27px]" data-name="Tab container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px]">3 квартал 2026</p>
    </div>
  );
}

function TabContainer4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[27px] h-[45px] items-start left-[674px] top-[27px]" data-name="Tab container">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px]">Архив</p>
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute h-[72px] left-[96px] top-[62px] w-[1416px]" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Button7 />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[24px] left-[16px] not-italic text-[#161616] text-[18px] top-[24px]">Новости и опросы</p>
      <Button8 />
      <TabContainer />
      <TabContainer1 />
      <TabContainer2 />
      <TabContainer3 />
      <TabContainer4 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="Лента для редактора">
      <SearchFilter />
      <DataTable />
      <PaginationTableBar />
      <UiShellLeftPanelGroupSideRail />
      <HeaderDesktop />
      <Navbar />
    </div>
  );
}