import svgPaths from "./svg-iem5x5t0cc";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--left">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.pfe9f680} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <ChevronLeft />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[12px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[50px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[#f4f4f4] inset-0 mix-blend-multiply pointer-events-none rounded-[50px]" />
      <ButtonContent />
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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#171414] text-[12px] tracking-[0.32px]">Черновик</p>
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
    <div className="bg-[#e5e0df] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent />
    </div>
  );
}

function Cloud() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Cloud">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Cloud">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1e3d4b80} fill="var(--fill-0, #8D8D8D)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Cloud />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">Все изменения сохранены</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <TagReadOnly />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#161616] text-[18px]">Создать новость</p>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Button />
      <Frame5 />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[2]">Превью новости в ленте</p>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <ButtonContent1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#0f62fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Опубликовать</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <ButtonContent2 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Frame1 />
      <Frame2 />
    </div>
  );
}