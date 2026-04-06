export default function DataTableBatchActionsBarItem() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex isolate items-center relative size-full" data-name="Data table batch actions bar item">
      <div className="flex-[1_0_0] min-h-px min-w-px relative z-[8]" data-name="Selected items label container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-start px-[16px] py-[15px] relative w-full">
            <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px]">2 сотрудника выбрано</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0f62fe] content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[6]" data-name="Data table batch actions button">
        <div className="relative shrink-0 w-full" data-name="Button content">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[15px] relative w-full">
              <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[3]">Отправить новость повторно</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[16px] items-center justify-center relative shrink-0 w-0 z-[2]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[16px]" data-name="Divider">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                <line id="Divider" stroke="var(--stroke-0, white)" x2="16" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center self-stretch">
        <div className="bg-[#0f62fe] content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 z-[1]" data-name="Data table batch actions button">
          <div className="relative shrink-0 w-full" data-name="Button content">
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[15px] relative w-full">
                <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[3]">Отменить</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}