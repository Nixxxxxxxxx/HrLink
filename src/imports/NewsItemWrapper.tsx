export default function NewsItemWrapper() {
  return (
    <div className="bg-[#014cda] relative rounded-[32px] size-full" data-name="News item wrapper">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">В</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}