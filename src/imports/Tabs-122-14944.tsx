function TabContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[67px]" data-name="Tab Container">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-nowrap">Для меня</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 2">
            <line id="Line 51" stroke="var(--stroke-0, #0F62FE)" strokeWidth="2" x2="67" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Tab Container">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Все каналы</p>
      </div>
    </div>
  );
}

export default function Tabs() {
  return (
    <div className="content-stretch flex gap-[20px] items-start px-[20px] relative size-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <TabContainer />
      <TabContainer1 />
    </div>
  );
}