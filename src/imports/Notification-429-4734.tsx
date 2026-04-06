import svgPaths from "./svg-9s9csteufc";

export default function Notification() {
  return (
    <div className="bg-[#393939] content-stretch flex gap-[16px] items-start relative size-full" data-name="Notification">
      <div className="flex h-[48px] items-center justify-center relative shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[48px]" data-name="Border">
            <div className="absolute inset-[-3px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 3">
                <line id="Border" stroke="var(--stroke-0, #42BE65)" strokeWidth="3" x2="48" y1="1.5" y2="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Icon margin">
        <div className="relative shrink-0 size-[20px]" data-name="Status icon">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute bg-black inset-1/4" data-name="Fill" />
          <div className="absolute inset-0 overflow-clip" data-name="Checkmark--filled">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[6.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
                <path d={svgPaths.p37900200} fill="var(--fill-0, #42BE65)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[2.75px] h-[48px] items-center min-h-px min-w-px py-[15px] relative" data-name="Title + Message">
        <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
          <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px]">Папка успешно создана</p>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px overflow-clip relative" data-name="Text overflow">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px]">{` `}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Action + Close">
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[48px]" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="relative shrink-0 w-full" data-name="Button content">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex isolate items-center p-[16px] relative w-full">
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
                  <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
                    <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
                    <div className="absolute inset-1/4" data-name="Vector">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
                        <path d={svgPaths.p314604c0} fill="var(--fill-0, white)" id="Vector" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}