import svgPaths from "./svg-ihmualpkis";

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <p className="leading-[16px] min-w-full relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-[min-content]">Аудитория</p>
      <p className="leading-[18px] relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[308px]">Руководители (40 чел), Новые сотрудники, до 3 мес (12 чел), Производство (180 чел)</p>
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

function Icon() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <Edit />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Изменить</p>
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

function Frame() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">
        <span className="leading-[18px] text-[#525252]">{`Всего: `}</span>
        <span className="leading-[18px]">232 человека</span>
      </p>
      <Button />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame1 />
      <Frame />
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
      <Close1 />
      <Divider1 />
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
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Выберите теги</p>
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

function AiIcons2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <DropdownChevron2 />
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

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <TagReadOnly />
      <TagReadOnly1 />
      <TagReadOnly2 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <DropdownComboBoxDefault2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <DropdownComboBoxDefault />
      <DropdownComboBoxDefault1 />
      <Frame9 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame5 />
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

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[275px]">
      <Toggle />
      <Toggle1 />
      <Toggle2 />
      <Toggle3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame4 />
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

export default function Frame7() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[8px] size-full">
      <Frame6 />
      <Accordion />
    </div>
  );
}