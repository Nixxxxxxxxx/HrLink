import svgPaths from "./svg-3c7v3s2yk7";

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Событие</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">День рождения сотрудника</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[16px] relative shrink-0 w-px" data-name="Divider">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C6C6C6)" x1="0.5" x2="0.5" y2="16" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p314604c0} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <Divider />
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
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

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Когда публиковать</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">В день события</p>
    </div>
  );
}

function AiIcons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
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

function SettingsGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Settings Group">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelMargin />
        <DropdownInput />
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelMargin1 />
        <DropdownInput1 />
      </div>
    </div>
  );
}

export default function SettingsContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Settings Container">
      <SettingsGroup />
    </div>
  );
}