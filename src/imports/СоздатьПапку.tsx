function Search() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex items-center justify-center px-[12px] relative rounded-[4px] self-stretch shrink-0 w-[150px]" data-name="search">
      <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Вставьте ссылку</p>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center justify-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Сохранить</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0 w-[100px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
      <ButtonContent />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-start p-[4px] relative rounded-[8px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.3)] size-full" data-name="Создать папку">
      <Search />
      <Button />
    </div>
  );
}