import svgPaths from "./svg-of5raktq3i";

function LabelAiSlug() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label + AI slug">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Выберите срок закрепления новости</p>
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
        Навсегда
      </p>
    </div>
  );
}

function IconValueAiSlug() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon + Value + AI slug">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Radio-button--checked">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p3d52b680} fill="#161616" />
              <path d={svgPaths.p91fdd00} fill="#161616" />
            </g>
          </svg>
        </div>
      </div>
      <ValueMargin />
    </div>
  );
}

function ValueMargin1() {
  return (
    <div className="content-stretch flex items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
        Выбрать дату и время
      </p>
    </div>
  );
}

function IconValueAiSlug1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon + Value + AI slug">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Radio-button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p2e910480} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <ValueMargin1 />
    </div>
  );
}

export default function RadioButtonGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative size-full" data-name="Radio button group">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelAiSlug />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <IconValueAiSlug />
      </div>
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <IconValueAiSlug1 />
      </div>
    </div>
  );
}