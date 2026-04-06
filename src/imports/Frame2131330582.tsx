import svgPaths from "./svg-6bvhqwg1fh";

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

function IconValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon +  Value">
      <Checkbox1 />
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

function Frame7() {
  return (
    <div className="content-stretch flex h-full items-start justify-center pl-[18px] pr-[6px] py-[8px] relative shrink-0 w-[52px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <Checkbox />
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

function Frame() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <View />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">428 из 15K</p>
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

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center mr-[-6px] pl-[4px] relative self-stretch shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Закрепленная</p>
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
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <IconWrapper />
      <TagContent />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[225px] whitespace-pre-wrap">Новые правила безопасности в офисе: что изменилось и как это повлияет на вашу работу</p>
      <Frame />
      <TagReadOnly />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] h-full items-start py-[8px] relative shrink-0 w-[326px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[48px]" />
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-full items-start px-[16px] py-[8px] relative shrink-0 w-[172px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Бухгалтерия</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex h-full items-start py-[8px] relative shrink-0 w-[255px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[226px] whitespace-pre-wrap">Топ-менеджмент, старше 50 лет, стратегия, новости компании</p>
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0e6027] text-[12px] tracking-[0.32px]">Опубликовано</p>
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
    <div className="bg-[#a7f0ba] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px py-[8px] relative">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <TagReadOnly1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex h-full items-start py-[8px] relative shrink-0 w-[136px]">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">15.05.2024</p>
    </div>
  );
}

export default function Frame8() {
  return (
    <div className="content-stretch flex items-center relative size-full">
      <div className="flex flex-row items-center self-stretch">
        <Frame7 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame2 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame4 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame3 />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Frame5 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <Frame6 />
      </div>
    </div>
  );
}