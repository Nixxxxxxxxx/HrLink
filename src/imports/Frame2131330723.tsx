function Frame() {
  return (
    <div className="bg-[rgba(15,98,254,0.1)] content-stretch flex flex-col items-center justify-center px-[4px] relative rounded-[9px] shrink-0 size-[18px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px]">5</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Selected</p>
      <Frame />
    </div>
  );
}

function HorizontalTabsItems() {
  return (
    <div className="absolute content-stretch flex h-[40px] items-center justify-center left-[36px] py-[11px] top-[99px] w-[102px]" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#0f62fe] border-b-2 border-solid inset-0 pointer-events-none" />
      <TextOverflow />
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Default</p>
    </div>
  );
}

function HorizontalTabsItems1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[36px] py-[11px] top-[31px] w-[67px]" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <TextOverflow1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <HorizontalTabsItems />
      <HorizontalTabsItems1 />
    </div>
  );
}