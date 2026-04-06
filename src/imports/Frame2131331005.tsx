import svgPaths from "./svg-bs5rxusb0f";

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron--left">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_33.13%_18.75%_31.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
            <path d={svgPaths.paedcf0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative shrink-0 w-full" data-name="Button content">
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
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex isolate items-center justify-center p-[12px] relative rounded-[50px] shrink-0 w-[40px]" data-name="Button">
      <div className="relative shrink-0 size-[16px] z-[1]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
              <path d={svgPaths.p1a504900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[50px] shrink-0 size-[40px]" data-name="Button">
        <div aria-hidden="true" className="absolute bg-white inset-0 mix-blend-multiply pointer-events-none rounded-[50px]" />
        <ButtonContent />
      </div>
      <Button />
    </div>
  );
}