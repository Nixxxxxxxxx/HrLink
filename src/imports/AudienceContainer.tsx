function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[2]">Выбрать аудиторию</p>
        </div>
      </div>
    </div>
  );
}

function AudienceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Audience Header">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] w-full whitespace-pre-wrap">Аудитория</p>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] w-full">
          <ButtonContent />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0f62fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
    </div>
  );
}

export default function AudienceContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-[12px] pt-[16px] px-[16px] relative rounded-[8px] size-full" data-name="Audience Container">
      <AudienceHeader />
    </div>
  );
}