import svgPaths from "./svg-4js3vf9o7i";

export default function DatePickerRangeCalendarDefault() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative size-full" data-name="Date picker - Range calendar - Default">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Дата</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
          <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
                <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">12/02/2026</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                        <path d={svgPaths.p2a858000} fill="var(--fill-0, #161616)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
                  <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Date picker - Single calendar - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Время</p>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Single calendar input">
          <div className="h-[40px] relative shrink-0 w-full" data-name="Date input">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[10px] relative size-full">
                <p className="flex-[1_0_0] font-['IBM_Plex_Mono:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.32px] whitespace-nowrap z-[4]">17:00</p>
                <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[3]" data-name="Icons">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Calendar">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-[6.25%_12.5%_12.5%_12.5%]" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 13">
                        <path d={svgPaths.p2a858000} fill="var(--fill-0, #161616)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-[#f4f4f4] inset-0 z-[1]" data-name="Background">
                  <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}