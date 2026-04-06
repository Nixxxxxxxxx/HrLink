import svgPaths from "./svg-tnu3bhm6yo";

function ChevronDown() {
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
        <div className="content-stretch flex isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Создать новость</p>
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#0f62fe] content-stretch flex flex-col items-start justify-center overflow-clip right-[16px] rounded-[4px] top-[16px] w-[172px]" data-name="Button">
      <ButtonContent />
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

function Icon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <Add />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Создать папку</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start justify-center left-[735px] overflow-clip top-[20px] w-[151px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <ButtonContent1 />
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

export default function Navbar() {
  return (
    <div className="relative size-full" data-name="Navbar">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Button />
      <p className="absolute font-['Montserrat:SemiBold',sans-serif] leading-[24px] left-[16px] not-italic text-[#161616] text-[18px] top-[24px]">Новости и опросы</p>
      <Button1 />
      <TabContainer />
      <TabContainer1 />
      <TabContainer2 />
      <TabContainer3 />
      <TabContainer4 />
    </div>
  );
}