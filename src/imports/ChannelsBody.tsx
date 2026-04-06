import imgSmallPreview from "figma:asset/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png";
import imgChannelItemAvatar from "figma:asset/69f2bbb82b9b2dd47e73e6913631e5a85f0a308f.png";
import imgSmallPreview1 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgChannelItemAvatar1 from "figma:asset/42bc86e73d80506aeb8f346c17490d09bcc3e6fa.png";
import imgChannelItemAvatar2 from "figma:asset/5c134ebbd02006bf49c42198e659562a3a0ac036.png";
import imgChannelItemAvatar3 from "figma:asset/ca4c201076d8b25c312f5d8ef16fa24ba637540b.png";
import imgChannelItemAvatar4 from "figma:asset/6d1b807eeff26135c0a4f75a3a01de096de20752.png";
import imgChannelItemAvatar5 from "figma:asset/3f4b8b780d68e4d730427026d99fe40c2c146728.png";
import imgChannelItemAvatar6 from "figma:asset/3798d2f6e52f386e525385bb6c409b51a6b02a44.png";
import imgChannelItemAvatar7 from "figma:asset/e2878065c0da741a0d49f93877fe7a5908b23d9c.png";

function ChannelItemAvatar() {
  return (
    <div className="bg-[#014cda] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[32px] whitespace-pre-wrap">МН</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function ChannelItemName() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Мировые новости</p>
    </div>
  );
}

function ChannelItemDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Новые цены на нефть повлияют на все отрасли экономики`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName />
      <ChannelItemDesc />
    </div>
  );
}

function ChannelItemInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar />
      <ChannelItemNameDesc />
    </div>
  );
}

function SubscribeButton() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo />
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar1() {
  return (
    <div className="pointer-events-none relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar} />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemName1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Аналитики</p>
    </div>
  );
}

function ChannelItemDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Встречайте нового руководителя команды...`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName1 />
      <ChannelItemDesc1 />
    </div>
  );
}

function ChannelItemInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar1 />
      <ChannelItemNameDesc1 />
    </div>
  );
}

function SubscribeButton1() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo1 />
          <SubscribeButton1 />
        </div>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[349px]" data-name="row 1">
      <ChannelItem />
      <ChannelItem1 />
    </div>
  );
}

function ChannelItemAvatar2() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar1} />
      </div>
    </div>
  );
}

function ChannelItemName2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Дизайнерская команда</p>
    </div>
  );
}

function ChannelItemDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName2 />
      <ChannelItemDesc2 />
    </div>
  );
}

function ChannelItemInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar2 />
      <ChannelItemNameDesc2 />
    </div>
  );
}

function SubscribeButton2() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo2 />
          <SubscribeButton2 />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar3() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar2} />
      </div>
    </div>
  );
}

function ChannelItemName3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Маркетинг</p>
    </div>
  );
}

function ChannelItemDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName3 />
      <ChannelItemDesc3 />
    </div>
  );
}

function ChannelItemInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar3 />
      <ChannelItemNameDesc3 />
    </div>
  );
}

function SubscribeButton3() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo3 />
          <SubscribeButton3 />
        </div>
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[349px]" data-name="row 1">
      <ChannelItem2 />
      <ChannelItem3 />
    </div>
  );
}

function Channels() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="channels">
      <div className="flex flex-row items-center self-stretch">
        <Row />
      </div>
      <Row1 />
    </div>
  );
}

function ChannelsRow() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-[649px]" data-name="channels row 1">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Для вашей должности и интересов</p>
      <Channels />
    </div>
  );
}

function ChannelItemAvatar4() {
  return (
    <div className="pointer-events-none relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar3} />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemName4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Спорт и здоровье</p>
    </div>
  );
}

function ChannelItemDesc4() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Новые цены на нефть повлияют на все отрасли экономики`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName4 />
      <ChannelItemDesc4 />
    </div>
  );
}

function ChannelItemInfo4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar4 />
      <ChannelItemNameDesc4 />
    </div>
  );
}

function SubscribeButton4() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo4 />
          <SubscribeButton4 />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar5() {
  return (
    <div className="pointer-events-none relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute inset-0 rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar} />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar4} />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemName5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Техно-мир</p>
    </div>
  );
}

function ChannelItemDesc5() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Встречайте нового руководителя команды...`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName5 />
      <ChannelItemDesc5 />
    </div>
  );
}

function ChannelItemInfo5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar5 />
      <ChannelItemNameDesc5 />
    </div>
  );
}

function SubscribeButton5() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem5() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo5 />
          <SubscribeButton5 />
        </div>
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-start relative shrink-0 w-[349px]" data-name="row 1">
      <ChannelItem4 />
      <ChannelItem5 />
    </div>
  );
}

function ChannelItemAvatar6() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgChannelItemAvatar5} />
    </div>
  );
}

function ChannelItemName6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Дизайнерская команда</p>
    </div>
  );
}

function ChannelItemDesc6() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName6 />
      <ChannelItemDesc6 />
    </div>
  );
}

function ChannelItemInfo6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar6 />
      <ChannelItemNameDesc6 />
    </div>
  );
}

function SubscribeButton6() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem6() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo6 />
          <SubscribeButton6 />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar7() {
  return (
    <div className="bg-[#014cda] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[32px] whitespace-pre-wrap">Т</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function ChannelItemName7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Маркетинг</p>
    </div>
  );
}

function ChannelItemDesc7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName7 />
      <ChannelItemDesc7 />
    </div>
  );
}

function ChannelItemInfo7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar7 />
      <ChannelItemNameDesc7 />
    </div>
  );
}

function SubscribeButton7() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between pr-[37px] py-[6px] relative w-full">
          <ChannelItemInfo7 />
          <SubscribeButton7 />
        </div>
      </div>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[349px]" data-name="row 1">
      <ChannelItem6 />
      <ChannelItem7 />
    </div>
  );
}

function Channels1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="channels">
      <div className="flex flex-row items-center self-stretch">
        <Row2 />
      </div>
      <Row3 />
    </div>
  );
}

function ChannelsRow1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative shrink-0 w-[649px]" data-name="channels row 2">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Читают коллеги</p>
      <Channels1 />
    </div>
  );
}

function ChannelItemAvatar8() {
  return (
    <div className="pointer-events-none relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar6} />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemName8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Команда поддержки</p>
    </div>
  );
}

function ChannelItemDesc8() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Новые цены на нефть повлияют на все отрасли экономики`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName8 />
      <ChannelItemDesc8 />
    </div>
  );
}

function ChannelItemInfo8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar8 />
      <ChannelItemNameDesc8 />
    </div>
  );
}

function SubscribeButton8() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip py-[6px] relative shrink-0 w-full" data-name="channel_item">
      <ChannelItemInfo8 />
      <SubscribeButton8 />
    </div>
  );
}

function ChannelItemAvatar9() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgChannelItemAvatar7} />
    </div>
  );
}

function ChannelItemName9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Технологии будущего</p>
    </div>
  );
}

function ChannelItemDesc9() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Встречайте нового руководителя команды...`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName9 />
      <ChannelItemDesc9 />
    </div>
  );
}

function ChannelItemInfo9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar9 />
      <ChannelItemNameDesc9 />
    </div>
  );
}

function SubscribeButton9() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip py-[6px] relative shrink-0 w-full" data-name="channel_item">
      <ChannelItemInfo9 />
      <SubscribeButton9 />
    </div>
  );
}

function ChannelItemAvatar10() {
  return (
    <div className="pointer-events-none relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar6} />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemName10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Команда поддержки</p>
    </div>
  );
}

function ChannelItemDesc10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Новые цены на нефть повлияют на все отрасли экономики`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgSmallPreview} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName10 />
      <ChannelItemDesc10 />
    </div>
  );
}

function ChannelItemInfo10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar10 />
      <ChannelItemNameDesc10 />
    </div>
  );
}

function SubscribeButton10() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip py-[6px] relative shrink-0 w-full" data-name="channel_item">
      <ChannelItemInfo10 />
      <SubscribeButton10 />
    </div>
  );
}

function ChannelItemAvatar11() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgChannelItemAvatar7} />
    </div>
  );
}

function ChannelItemName11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="channel_item_name">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] whitespace-pre-wrap">Технологии будущего</p>
    </div>
  );
}

function ChannelItemDesc11() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start relative shrink-0 w-full" data-name="channel_item_desc">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] h-[36px] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#525252] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-pre-wrap">{`      Встречайте нового руководителя команды...`}</p>
      <div className="absolute h-[14px] left-0 rounded-[2px] top-[2px] w-[15px]" data-name="small preview">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgSmallPreview1} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="channel_item_name+desc">
      <ChannelItemName11 />
      <ChannelItemDesc11 />
    </div>
  );
}

function ChannelItemInfo11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[260px]" data-name="channel_item_info">
      <ChannelItemAvatar11 />
      <ChannelItemNameDesc11 />
    </div>
  );
}

function SubscribeButton11() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative rounded-[44px] shrink-0 size-[32px]" data-name="subscribe button">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[16px] text-center tracking-[0.16px]">+</p>
    </div>
  );
}

function ChannelItem11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between overflow-clip py-[6px] relative shrink-0 w-full" data-name="channel_item">
      <ChannelItemInfo11 />
      <SubscribeButton11 />
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative" data-name="row 1">
      <ChannelItem8 />
      <ChannelItem9 />
      <ChannelItem10 />
      <ChannelItem11 />
    </div>
  );
}

function Channels2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="channels">
      <Row4 />
    </div>
  );
}

function ChannelsRow2() {
  return (
    <div className="relative shrink-0 w-full" data-name="channels row 3">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Все остальные</p>
        <Channels2 />
      </div>
    </div>
  );
}

export default function ChannelsBody() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start relative size-full" data-name="channels_body">
      <ChannelsRow />
      <ChannelsRow1 />
      <ChannelsRow2 />
    </div>
  );
}