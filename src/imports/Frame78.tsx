import svgPaths from "./svg-g8k5z9ilr6";

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Обычный текст</p>
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
      <DropdownChevron />
    </div>
  );
}

function DropdownInputTrigger() {
  return (
    <div className="h-[32px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative size-full">
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

function DropdownDefault() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Dropdown - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <DropdownInput />
    </div>
  );
}

function TextBold() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--bold">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--bold">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.pef1c480} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextItalic() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--italic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--italic">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p54b4180} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TextUnderline() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Text--underline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Text--underline">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.p3b97ed00} fill="#161616" />
            <path d={svgPaths.p65a6000} fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function ListNumberedMirror() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List--numbered--mirror">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List--numbered--mirror">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.pce76e00} fill="var(--fill-0, #161616)" />
            <path d="M10 13.75H1.25V15H10V13.75Z" fill="var(--fill-0, #161616)" />
            <path d={svgPaths.p3f3dac00} fill="var(--fill-0, #161616)" />
            <path d="M10 5H1.25V6.25H10V5Z" fill="var(--fill-0, #161616)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="List">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d="M17.5 3.75H6.25V5H17.5V3.75Z" fill="#161616" />
            <path d="M17.5 15H6.25V16.25H17.5V15Z" fill="#161616" />
            <path d={svgPaths.p1472e8f0} fill="#161616" />
            <path d={svgPaths.pfb58eb0} fill="#161616" />
            <path d="M3.75 3.75H2.5V5H3.75V3.75Z" fill="#161616" />
            <path d="M3.75 15H2.5V16.25H3.75V15Z" fill="#161616" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <TextBold />
      <TextItalic />
      <TextUnderline />
      <ListNumberedMirror />
      <List />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[24px] h-[32px] items-center pr-[20px] relative shrink-0 w-[406px]">
      <DropdownDefault />
      <Frame7 />
    </div>
  );
}

function Quotes() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Quotes">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Quotes">
          <g id="Vector">
            <path d={svgPaths.p1a137840} fill="#525252" />
            <path d={svgPaths.p35724900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Quotes />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Цитата</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Link">
          <g id="Vector">
            <path d={svgPaths.p346b4500} fill="#525252" />
            <path d={svgPaths.p332005f0} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Link />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Ссылка</p>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Image">
          <g id="Vector">
            <path d={svgPaths.p1d614280} fill="#525252" />
            <path d={svgPaths.p4360c80} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Image />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Картинка</p>
    </div>
  );
}

function Document() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Document">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Document">
          <g id="Vector">
            <path d={svgPaths.p2d5c9c00} fill="#525252" />
            <path d={svgPaths.p28584100} fill="#525252" />
            <path d={svgPaths.p34ec4400} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Document />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Файл</p>
    </div>
  );
}

function Video() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Video">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Video">
          <path d={svgPaths.p356ca270} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Video />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Видео</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[24px] items-center justify-end px-[20px] relative size-full">
          <Frame4 />
          <Frame1 />
          <Frame3 />
          <Frame2 />
          <Frame5 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative rounded-[8px] size-full">
      <div className="content-stretch flex gap-[20px] items-center overflow-clip p-[16px] relative rounded-[inherit] size-full">
        <Frame8 />
        <Frame6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e4ea] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_3px_6px_0px_rgba(0,0,0,0.13)]" />
    </div>
  );
}