import svgPaths from "./svg-cgofl14bux";

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip pb-[8px] relative" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] text-left tracking-[0.32px] w-full whitespace-pre-wrap">Название папки</p>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function LabelCharacterCount() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Label + Character count">
      <LabelMargin />
      <div className="content-stretch flex items-start opacity-0 relative shrink-0 w-[0.001px]" data-name="Resizer">
        <Start />
        <End />
      </div>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-x-auto overflow-y-clip relative z-[6]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[14px] text-ellipsis text-left tracking-[0.16px] whitespace-nowrap">Контент план</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Text input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] isolate items-center px-[16px] py-[7px] relative size-full">
          <TextOverflow />
          <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
            <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Создать</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-end left-[12px] top-[50px] w-[415px]">
      <button className="content-stretch cursor-pointer flex flex-[1_0_0] flex-col items-start min-h-px min-w-[64px] relative" data-name="Text input - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelCharacterCount />
        <TextInput />
      </button>
      <div className="bg-[#0f62fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[166px]" data-name="Button">
        <ButtonContent />
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[10.813px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8132 10.8132">
        <g clipPath="url(#clip0_409_19211)" id="Folder">
          <rect fill="white" fillOpacity="0.01" height="10.8132" style={{ mixBlendMode: "multiply" }} width="10.8132" />
          <g id="Vector">
            <path d={svgPaths.p302235f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p14cd6100} fill="var(--fill-0, white)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_409_19211">
            <rect fill="white" height="10.8132" width="10.8132" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function AvatarChannel() {
  return (
    <div className="absolute bg-[#014cda] content-stretch flex flex-col items-center justify-center left-[12px] px-[1.739px] py-[1.45px] rounded-[26.374px] size-[24px] top-[16px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.097px] border-solid inset-0 pointer-events-none rounded-[26.374px]" />
      <Folder />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.387px_1.16px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] size-full" data-name="Создать папку">
      <p className="absolute bottom-[105px] font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[18px] left-[47px] text-[#161616] text-[14px] translate-y-full">Создать новую папку</p>
      <Frame />
      <AvatarChannel />
    </div>
  );
}