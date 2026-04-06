import svgPaths from "./svg-4twkt5ve8i";

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
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">890 из 8K</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[223px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[191px] whitespace-pre-wrap">Изменения в кадровой политике: как это повлияет на вашу зарплату</p>
      <Frame />
    </div>
  );
}

function Fire() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Fire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Fire">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.pf913000} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[8px] relative size-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#d9d9d9] h-[38px] shrink-0 w-[48px]" />
      <Frame1 />
      <Fire />
    </div>
  );
}