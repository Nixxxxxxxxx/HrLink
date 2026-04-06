import svgPaths from "./svg-rzvrmqhvy5";

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

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <Close />
      <Divider />
      <DropdownChevron />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Теги</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Выберите теги</p>
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

function AiIcons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <DropdownChevron1 />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Новости</p>
      <Resizer />
    </div>
  );
}

function Close1() {
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
      <Close1 />
    </div>
  );
}

function TagContent() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label />
      <TagCloseButton />
    </div>
  );
}

function TagReadOnly() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Сбер</p>
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

function TagCloseButton1() {
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
      <TagCloseButton1 />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">афксистема</p>
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

function TagCloseButton2() {
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
      <TagCloseButton2 />
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

function SettingsOptions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Settings Options">
      <TagReadOnly />
      <TagReadOnly1 />
      <TagReadOnly2 />
    </div>
  );
}

function SettingsGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Settings Group">
      <DropdownComboBoxDefault1 />
      <SettingsOptions />
    </div>
  );
}

function SettingsGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Settings Group">
      <DropdownComboBoxDefault />
      <SettingsGroup1 />
    </div>
  );
}

function Checkmark() {
  return (
    <div className="absolute inset-[20%]" data-name="Checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_150_12173)" id="Checkmark">
          <rect fill="white" fillOpacity="0.01" height="6" style={{ mixBlendMode: "multiply" }} width="6" />
          <path d={svgPaths.p30dc080} fill="var(--fill-0, #161616)" id="Vector" stroke="var(--stroke-1, #24A148)" />
        </g>
        <defs>
          <clipPath id="clip0_150_12173">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ToggleSwitchSmall() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small">
      <Checkmark />
    </div>
  );
}

function ToggleItem() {
  return (
    <div className="bg-[#24a148] content-stretch flex items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall />
    </div>
  );
}

function ToggleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem />
    </div>
  );
}

function ToggleValue() {
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
      <ToggleValue />
    </div>
  );
}

function LabelMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Дата</p>
    </div>
  );
}

function Calendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p33c7d000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
      <Calendar />
    </div>
  );
}

function DateInput() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">12/02/2026</p>
          <Icons />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCalendarInput() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
      <DateInput />
    </div>
  );
}

function DatePickerSingleCalendarDefault() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin2 />
      <SingleCalendarInput />
    </div>
  );
}

function LabelMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Время</p>
    </div>
  );
}

function Calendar1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p33c7d000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
      <Calendar1 />
    </div>
  );
}

function DateInput1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">17:00</p>
          <Icons1 />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCalendarInput1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
      <DateInput1 />
    </div>
  );
}

function DatePickerSingleCalendarDefault1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin3 />
      <SingleCalendarInput1 />
    </div>
  );
}

function DatePickerRangeCalendarDefault() {
  return (
    <div className="content-stretch flex gap-[2px] h-[64px] items-start relative shrink-0 w-full" data-name="Date picker - Range calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <DatePickerSingleCalendarDefault />
      <DatePickerSingleCalendarDefault1 />
    </div>
  );
}

function SettingsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Settings Container">
      <Toggle />
      <DatePickerRangeCalendarDefault />
    </div>
  );
}

function Checkmark1() {
  return (
    <div className="absolute inset-[20%]" data-name="Checkmark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
        <g clipPath="url(#clip0_150_12173)" id="Checkmark">
          <rect fill="white" fillOpacity="0.01" height="6" style={{ mixBlendMode: "multiply" }} width="6" />
          <path d={svgPaths.p30dc080} fill="var(--fill-0, #161616)" id="Vector" stroke="var(--stroke-1, #24A148)" />
        </g>
        <defs>
          <clipPath id="clip0_150_12173">
            <rect fill="white" height="6" width="6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ToggleSwitchSmall1() {
  return (
    <div className="bg-white overflow-clip relative rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small">
      <Checkmark1 />
    </div>
  );
}

function ToggleItem1() {
  return (
    <div className="bg-[#24a148] content-stretch flex items-start justify-end overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
      <ToggleSwitchSmall1 />
    </div>
  );
}

function ToggleMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end py-px relative shrink-0" data-name="Toggle margin">
      <ToggleItem1 />
    </div>
  );
}

function ToggleValue1() {
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
      <ToggleValue1 />
    </div>
  );
}

function LabelMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Дата</p>
    </div>
  );
}

function Calendar2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p33c7d000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
      <Calendar2 />
    </div>
  );
}

function DateInput2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">12/02/2026</p>
          <Icons2 />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCalendarInput2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
      <DateInput2 />
    </div>
  );
}

function DatePickerSingleCalendarDefault2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin4 />
      <SingleCalendarInput2 />
    </div>
  );
}

function LabelMargin5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Время</p>
    </div>
  );
}

function Calendar3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Calendar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p33c7d000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icons3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
      <Calendar3 />
    </div>
  );
}

function DateInput3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
          <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">17:00</p>
          <Icons3 />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SingleCalendarInput3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
      <DateInput3 />
    </div>
  );
}

function DatePickerSingleCalendarDefault3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <LabelMargin5 />
      <SingleCalendarInput3 />
    </div>
  );
}

function DatePickerRangeCalendarDefault1() {
  return (
    <div className="content-stretch flex gap-[2px] h-[64px] items-start relative shrink-0 w-full" data-name="Date picker - Range calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <DatePickerSingleCalendarDefault2 />
      <DatePickerSingleCalendarDefault3 />
    </div>
  );
}

function SettingsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Settings Container">
      <Toggle1 />
      <DatePickerRangeCalendarDefault1 />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Перенести в архив после дедлайна</p>
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

function SettingsToggles1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Settings Toggles">
      <SettingsContainer2 />
      <Checkbox />
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

function ToggleValue2() {
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
      <ToggleValue2 />
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

function ToggleValue3() {
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
      <ToggleValue3 />
    </div>
  );
}

function SettingsContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Settings Container">
      <Toggle2 />
      <Toggle3 />
    </div>
  );
}

function SettingsToggles() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Settings Toggles">
      <SettingsContainer1 />
      <SettingsToggles1 />
      <SettingsContainer3 />
    </div>
  );
}

function SettingsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Settings Container">
      <SettingsGroup />
      <SettingsToggles />
    </div>
  );
}

export default function SettingsSection() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative rounded-[8px] size-full" data-name="Settings Section">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] w-full whitespace-pre-wrap">Основные настройки</p>
      <SettingsContainer />
    </div>
  );
}