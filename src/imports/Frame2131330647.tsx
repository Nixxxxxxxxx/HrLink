import svgPaths from "./svg-4v4csl7s7d";
import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";

function PinFilled() {
  return (
    <div className="-translate-y-1/2 absolute left-[325px] size-[16px] top-[calc(50%-2px)]" data-name="Pin--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pin--filled">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p36b60600} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#e9f2ff] relative size-full">
      <PinFilled />
      <div className="absolute h-[45px] left-[8px] top-[13px] w-[56px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle32} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[51px] leading-[16px] left-[71px] not-italic overflow-hidden text-[14px] text-black text-ellipsis top-[calc(50%-25px)] tracking-[0.16px] w-[245px] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей. Рост обеспечили новые фьючерсы и опционы, а также высокая активность частных инвесторов</p>
    </div>
  );
}