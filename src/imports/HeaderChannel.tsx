import svgPaths from "./svg-0l4ael0akf";

function AvatarChannel() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[48px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center">В</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Pin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pin">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1057a580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Важное</p>
      <Pin />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Text container">
      <Container />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-[min-content] whitespace-pre-wrap">Обязательно к прочтению</p>
    </div>
  );
}

function Channel() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[12px]" data-name="Channel">
      <AvatarChannel />
      <TextContainer />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8d8d8d] text-[14px] tracking-[0.16px] z-[2]">Вы подписаны</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex flex-col items-start justify-center overflow-clip right-[16px] rounded-[4px] top-[20px]" data-name="Button">
      <ButtonContent />
    </div>
  );
}

export default function HeaderChannel() {
  return (
    <div className="bg-white overflow-clip relative rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] size-full" data-name="Header channel">
      <Channel />
      <Button />
    </div>
  );
}