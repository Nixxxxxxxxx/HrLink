function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8d8d8d] text-[14px] tracking-[0.16px] z-[2]">Вы подписаны</p>
        </div>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#e0e0e0] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] size-full" data-name="Button">
      <ButtonContent />
    </div>
  );
}