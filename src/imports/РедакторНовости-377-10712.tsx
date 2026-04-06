import svgPaths from "./svg-bee99ar7q1";
import imgBackgroundImg from "figma:asset/fad21831c783cdb2382ec714e0a713fb967385a6.png";
import imgNewsAvatar from "figma:asset/bd1d57ae9c7325320709486f561078904327bc36.png";
import imgTelegramPeerPhotoSize217996588487258705141001 from "figma:asset/2611fd9fa521388c79d90cd290b0296c23fd1fa5.png";
import imgImageWithFallback from "figma:asset/a1c9ab373b74bce6a704a666aeefe5eeb20dbcc4.png";

function NewsAvatar() {
  return (
    <div className="h-[216px] relative shrink-0 w-full" data-name="news_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgNewsAvatar} />
      <div className="absolute left-[204px] rounded-[4000px] size-[112px] top-[51px]" data-name="telegram-peer-photo-size-2-1799658848725870514-1-0-0 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[4000px] size-full" src={imgTelegramPeerPhotoSize217996588487258705141001} />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[30px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[50px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[50px] size-full" src={imgImageWithFallback} />
        <div className="absolute bg-[#f2eaff] inset-0 rounded-[50px]" />
      </div>
    </div>
  );
}

function AuthorInfo() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Author Info">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Выбрать канал</p>
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthorContainer() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Author Container">
      <ImageWithFallback />
      <AuthorInfo />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Header Container">
      <AuthorContainer />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#161616] text-[14px] text-ellipsis tracking-[0.16px]">Автор: Полина Лааксо</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 px-[4px] py-[2px] rounded-[4px] top-0">
      <div aria-hidden="true" className="absolute bg-[#f4f4f4] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">{`{username}`}</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] min-w-full relative shrink-0 text-[#161616] text-[18px] w-[min-content] whitespace-pre-wrap">{`                  с днем рождения, пусть жизнь будет полна любви и позитивных впечатлений!`}</p>
      <Frame9 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[16px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <path d={svgPaths.p1a687780} fill="var(--fill-0, #7F2BFD)" id="Vector" stroke="var(--stroke-0, #7F2BFD)" />
        </svg>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">ИИ-интеграция</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[rgba(127,43,253,0.1)] relative rounded-[4px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] py-[12px] relative w-full">
        <Frame16 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">2-3 пожелания, основанных на интересах сотрудника</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame14 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Пусть каждый рабочий день приносит удовлетворение, а все цели уверенно достигаются.</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Благополучия, стабильности и ярких поводов для радости!</p>
    </div>
  );
}

function ContentBlock() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content Block">
      <Frame17 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Желаем крепкого здоровья, энергии и новых профессиональных достижений в команде ПромИнвест</p>
      <Frame15 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[444px] relative shrink-0 w-full" data-name="Content Container">
      <ContentBlock />
    </div>
  );
}

function NewsText() {
  return (
    <div className="relative shrink-0 w-full" data-name="news_text">
      <div className="content-stretch flex flex-col gap-[16px] items-start pl-[24px] relative w-full">
        <HeaderContainer />
        <ContentContainer />
      </div>
    </div>
  );
}

function TextEdit() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[60px] overflow-clip pb-[32px] rounded-[8px] top-0 w-[520px]" data-name="text edit">
      <NewsAvatar />
      <NewsText />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Font">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-[21.88%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.625">
            <g id="Vector">
              <path d={svgPaths.p3eff5880} fill="#525252" />
              <path d={svgPaths.p139ad980} fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Bold">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[21.88%_26.65%_21.88%_28.13%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.04438 11.25">
            <path d={svgPaths.p18841800} fill="var(--fill-0, #525252)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Italic">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[21.88%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.25 11.25">
            <path d={svgPaths.p23afd100} fill="var(--fill-0, #525252)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Underline">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[15.63%_12.5%_12.5%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.375">
            <g id="Vector">
              <path d={svgPaths.pd8e5b0} fill="#525252" />
              <path d={svgPaths.p26fc1280} fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Numbered List">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[12.5%_12.5%_12.5%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.25 15">
            <g id="Vector">
              <path d={svgPaths.p31582480} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3d6fafba} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3cf19b72} fill="var(--fill-0, #525252)" />
              <path d="M8.75 2.5H0V3.75H8.75V2.5Z" fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="List Icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <g id="Vector">
              <path d="M15 0H3.75V1.25H15V0Z" fill="#525252" />
              <path d={svgPaths.p14579a00} fill="#525252" />
              <path d={svgPaths.p22ac0800} fill="#525252" />
              <path d={svgPaths.p17e2d380} fill="#525252" />
              <path d="M1.25 0H0V1.25H1.25V0Z" fill="#525252" />
              <path d={svgPaths.p39a2300} fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Link Icon">
        <div className="absolute inset-[15.61%_3.08%_12.5%_3.03%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.7778 14.3783">
            <g id="Vector">
              <path d={svgPaths.pebb6700} fill="#525252" />
              <path d={svgPaths.p2dd4400} fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Document Icon">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#525252" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#525252" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Video Icon">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 12.5">
            <path d={svgPaths.p39681600} fill="var(--fill-0, #525252)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[36px]" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Quotes Icon">
        <div className="absolute inset-[18.75%_12.5%_21.88%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11.875">
            <g id="Vector">
              <path d={svgPaths.p32b71800} fill="#525252" />
              <path d={svgPaths.pf84af80} fill="#525252" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f7f7f7] h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[20px] py-[10px] relative size-full">
          <div className="relative shrink-0 size-[16px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p1a687780} fill="var(--fill-0, #7F7F7F)" id="Vector" stroke="var(--stroke-0, #7F7F7F)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[4px] relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function EditorControls() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] items-center left-0 overflow-clip pb-[4px] pt-[12px] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] top-0 w-[44px]" data-name="editor controls">
      <Container1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
            <line id="Line 41" stroke="var(--stroke-0, #E0E4EA)" strokeLinejoin="bevel" x2="44" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Container2 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 1">
            <line id="Line 41" stroke="var(--stroke-0, #E0E4EA)" strokeLinejoin="bevel" x2="44" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[950px] left-[318px] top-[138px] w-[580px]" data-name="Container">
      <TextEdit />
      <div className="absolute h-0 left-[580.5px] top-[280px] w-[110px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 1">
            <path d="M0 0.5H110" id="Vector 106" stroke="var(--stroke-0, black)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[580.5px] top-[369px] w-[110px]">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 1">
            <path d="M0 0.5H110" id="Vector 106" stroke="var(--stroke-0, black)" strokeOpacity="0.3" />
          </svg>
        </div>
      </div>
      <EditorControls />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron--left">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_33.13%_18.75%_31.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
            <path d={svgPaths.paedcf0} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[12px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#171414] text-[12px] tracking-[0.32px]">Шаблон</p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <Start />
        <End />
      </div>
    </div>
  );
}

function TagContent() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label />
    </div>
  );
}

function SaveStatus() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Save Status">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Save Icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[15.62%_0.08%_12.5%_0.02%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9838 11.5">
            <path d={svgPaths.p37442400} fill="var(--fill-0, #8D8D8D)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">Все изменения сохранены</p>
    </div>
  );
}

function DraftStatus() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Draft Status">
      <div className="bg-[#e5e0df] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
        <TagContent />
      </div>
      <SaveStatus />
    </div>
  );
}

function Status() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Status">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] relative shrink-0 text-[#161616] text-[18px]">Новый шаблон</p>
      <DraftStatus />
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Navigation">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[50px] shrink-0 size-[40px]" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[#f4f4f4] inset-0 mix-blend-multiply pointer-events-none rounded-[50px]" />
        <ButtonContent />
      </div>
      <Status />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[2]">Превью новости в ленте</p>
        </div>
      </div>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Опубликовать из шаблона</p>
        </div>
      </div>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Actions">
      <div className="relative rounded-[4px] shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
          <ButtonContent1 />
        </div>
        <div aria-hidden="true" className="absolute border border-[#0f62fe] border-solid inset-0 pointer-events-none rounded-[4px]" />
      </div>
      <div className="bg-[#0f62fe] content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
        <ButtonContent2 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-between left-[96px] px-[16px] py-[12px] right-0 top-[62px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <Navigation />
      <Actions />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p30dad5f0} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="absolute h-[64px] left-0 top-0 w-[96px]" data-name="Item 2">
      <Frame />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Главная</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="absolute h-[64px] left-0 top-[64px] w-[96px]" data-name="Item 1">
      <Frame1 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Документы</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1fe8b840} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="absolute h-[64px] left-0 top-[128px] w-[96px]" data-name="Item 3">
      <Frame2 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Заявления</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="absolute h-[64px] left-0 top-[192px] w-[96px]" data-name="Item 8">
      <Frame3 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Справочники</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p294cab80} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="absolute h-[64px] left-0 top-[256px] w-[96px]" data-name="Item 4">
      <Frame4 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Коллеги</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute left-[36px] size-[24px] top-[12px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p351d3a02} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="absolute h-[76px] left-0 top-[320px] w-[96px]" data-name="Item 5">
      <Frame5 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px] w-[88px] whitespace-pre-wrap">График отпусков</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.22%_6.25%_6.26%_6.25%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21.0051">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c30ef70} fill="var(--fill-0, #373D42)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute left-[36px] overflow-clip size-[24px] top-[12px]" data-name="Frame">
      <Group />
    </div>
  );
}

function Item5() {
  return (
    <div className="absolute h-[64px] left-0 top-[396px] w-[96px]" data-name="Item 6">
      <Frame6 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Заместители</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[21px] left-[36px] top-[14px] w-[24px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g clipPath="url(#clip0_375_3832)" id="Frame">
          <path d={svgPaths.p36dad700} fill="var(--fill-0, #054ADA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_375_3832">
            <rect fill="white" height="21" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="absolute bg-[#edf5ff] h-[64px] left-0 top-[460px] w-[96px]" data-name="Item 9">
      <div aria-hidden="true" className="absolute border-[#054ada] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <Frame7 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48px] not-italic text-[#054ada] text-[12px] text-center top-[38px] tracking-[0.32px]">Новости</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute left-[32px] size-[32px] top-[8px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p29659000} fill="var(--fill-0, #29B6F6)" id="Vector" />
          <path d={svgPaths.p3ce1b400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p10811200} fill="var(--fill-0, #B0BEC5)" id="Vector_3" />
          <path d={svgPaths.p380e8600} fill="var(--fill-0, #CFD8DC)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Item6() {
  return (
    <div className="absolute h-[64px] left-0 top-[524px] w-[96px]" data-name="Item 7">
      <Frame8 />
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[48.5px] not-italic text-[#9fa5ad] text-[12px] text-center top-[38px] tracking-[0.32px]">Telegram</p>
    </div>
  );
}

function Items() {
  return (
    <div className="absolute h-[588px] left-0 top-0 w-[96px]" data-name="Items">
      <Item1 />
      <Item />
      <Item2 />
      <Item7 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item8 />
      <Item6 />
    </div>
  );
}

function IbmWatsonxAssistant() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[28px] top-1/2" data-name="ibm-watsonx--assistant 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_375_3890)" id="ibm-watsonx--assistant 1">
          <path d={svgPaths.p1c04d780} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p67aa400} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p27744300} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p12111200} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2a429580} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p1dbf4180} fill="var(--fill-0, white)" id="Vector_6" />
          <g id="&lt;Transparent Rectangle&gt;">
            <g id="Vector_7" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_375_3890">
            <rect fill="white" height="28" width="28" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Wrapper() {
  return (
    <div className="relative rounded-[50px] shrink-0 size-[48px]" data-name="wrapper">
      <IbmWatsonxAssistant />
    </div>
  );
}

function Help() {
  return (
    <div className="absolute h-[100px] left-0 top-[818px] w-[96px]" data-name="Help">
      <div className="absolute bg-[#054ada] content-stretch flex gap-[8px] items-center justify-center left-[22px] p-[12px] rounded-[50px] size-[52px] top-[24px]" data-name="Сhat_widget">
        <Wrapper />
      </div>
    </div>
  );
}

function UiShellLeftPanelGroupSideRail() {
  return (
    <div className="absolute bg-white h-[920px] left-0 top-[62px] w-[96px]" data-name="ui shell / left panel / group / side rail">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Items />
        <Help />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
    </div>
  );
}

function HrlinkLogo() {
  return (
    <div className="absolute inset-[0.25%_0_2%_0.05%]" data-name="hrlink_logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0843 23.4594">
        <g id="hrlink_logo">
          <path clipRule="evenodd" d={svgPaths.p19b55400} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path" />
          <rect fill="var(--fill-0, #054ADA)" height="16.0418" id="Rectangle" width="2.74763" x="28.4812" />
          <rect fill="var(--fill-0, #054ADA)" height="10.7697" id="Rectangle_2" width="2.74763" x="33.8923" y="5.27126" />
          <path clipRule="evenodd" d={svgPaths.p11cd21c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p2a2501b0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_3" />
          <rect fill="var(--fill-0, #054ADA)" height="15.3539" id="Rectangle_3" width="2.74763" x="52.1169" y="0.687107" />
          <path clipRule="evenodd" d={svgPaths.p12abd800} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">РУ</p>
      </div>
      <div className="h-[5px] relative shrink-0 w-[10px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
          <path d="M10 0H0L5 5L10 0Z" fill="var(--fill-0, #757575)" id="Vector 8" />
        </svg>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame11 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Help">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g id="Vector">
              <path d={svgPaths.p3953aff0} fill="#054ADA" />
              <path d={svgPaths.pfdd100} fill="#054ADA" />
              <path d={svgPaths.p27365400} fill="#054ADA" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center px-[12px] relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13171a] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p>
          <span className="leading-[18px]">{`Ваш менеджер: `}</span>
          <span className="leading-[18px] text-[#054ada]">Иванов Иван</span>
        </p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame13 />
      <Icon1 />
      <Frame10 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex items-start py-[3px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#13171a] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Сотрудник</p>
      </div>
    </div>
  );
}

function ToggleValue() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Toggle + Value">
      <div className="h-[20px] relative shrink-0 w-[36px]" data-name="Switch">
        <div className="-translate-y-1/2 absolute bg-[#e0e4ea] h-[18px] left-0 rounded-[100px] top-1/2 w-[36px]" data-name="🎨 Color l Track" />
        <div className="absolute inset-[-50%_-27.78%_-50%_16.67%]" data-name="💡States">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <g id="ð¡States" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 top-0 w-[20px]" data-name="Elevation">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path clipRule="evenodd" d={svgPaths.p25566600} fill="var(--fill-0, #212121)" fillOpacity="0.08" fillRule="evenodd" id="Elevation" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 top-0 w-[20px]" data-name="🎨 Color l Thumb">
          <div className="absolute inset-[-5%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <g filter="url(#filter0_d_377_10509)" id="ð¨ Color l Thumb">
                <path clipRule="evenodd" d={svgPaths.pb60700} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_377_10509" width="22" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_377_10509" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_377_10509" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <Margin />
    </div>
  );
}

function ToggleBase() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0" data-name="_Toggle base">
      <ToggleValue />
    </div>
  );
}

function UserAvatarSmall() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="user / avatar / small">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #E0E4EA)" id="Oval" r="20" />
      </svg>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(50%-8.5px)] not-italic text-[#373d42] text-[14px] top-[calc(50%-9px)] tracking-[0.16px]">FS</p>
    </div>
  );
}

function Actions1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[698px] top-[7px]" data-name="actions">
      <Frame12 />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <div className="bg-[#f2f4f8] content-stretch flex gap-[6px] h-[32px] items-center justify-center max-w-[300px] px-[12px] relative rounded-[4px] shrink-0" data-name="Spaces">
        <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[18px] overflow-hidden">{`Название пространства `}</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #525252)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <ToggleBase />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Qr-code">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
            <g id="Vector">
              <path d="M16.5 18V19.5H18V18H16.5Z" fill="#373D42" />
              <path d="M12 15V16.5H13.5V15H12Z" fill="#373D42" />
              <path d={svgPaths.p6d500} fill="#373D42" />
              <path d={svgPaths.p1a0e2180} fill="#373D42" />
              <path d={svgPaths.p27087000} fill="#373D42" />
              <path d={svgPaths.pd6efd00} fill="#373D42" />
              <path d={svgPaths.p1d3d5c80} fill="#373D42" />
              <path d="M12 12V13.5H15V12H12Z" fill="#373D42" />
              <path d="M6 15H3V18H6V15Z" fill="#373D42" />
              <path d={svgPaths.p28694a00} fill="#373D42" />
              <path d="M18 3H15V6H18V3Z" fill="#373D42" />
              <path d={svgPaths.p350569f2} fill="#373D42" />
              <path d="M6 3H3V6H6V3Z" fill="#373D42" />
              <path d={svgPaths.p26044070} fill="#373D42" />
            </g>
          </svg>
        </div>
      </div>
      <UserAvatarSmall />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="absolute bg-white h-[62px] left-0 top-0 w-[1512px]" data-name="_Header Desktop">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="absolute h-[24px] left-[24px] top-[19px] w-[62.118px]" data-name="branding / hrlink_logo">
        <HrlinkLogo />
      </div>
      <Actions1 />
    </div>
  );
}

function ToggleMargin() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Автоматически генерировать новости</p>
      </div>
    </div>
  );
}

function SettingsSection() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Settings Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
        <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[22px] min-w-full not-italic relative shrink-0 text-[#161616] text-[16px] w-[min-content] whitespace-pre-wrap">Настройки шаблона</p>
        <button className="content-stretch cursor-pointer flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <ToggleValue1 />
        </button>
      </div>
    </div>
  );
}

function AudienceItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Audience Item">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Audience Icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <g id="Vector">
              <path d={svgPaths.p33b20100} fill="#8D8D8D" />
              <path d={svgPaths.p325efa80} fill="#8D8D8D" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[308px] whitespace-pre-wrap">Руководители · 40</p>
    </div>
  );
}

function AudienceItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Audience Item">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Audience Icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <g id="Vector">
              <path d={svgPaths.p33b20100} fill="#8D8D8D" />
              <path d={svgPaths.p325efa80} fill="#8D8D8D" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[308px] whitespace-pre-wrap">Новые сотрудники, до 3 мес · 12</p>
    </div>
  );
}

function AudienceItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Audience Item">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Audience Icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 14">
            <g id="Vector">
              <path d={svgPaths.p33b20100} fill="#8D8D8D" />
              <path d={svgPaths.p325efa80} fill="#8D8D8D" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[308px] whitespace-pre-wrap">Производство · 180</p>
    </div>
  );
}

function AudienceList() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Audience List">
      <AudienceItem />
      <AudienceItem1 />
      <AudienceItem2 />
    </div>
  );
}

function AudienceHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Audience Header">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] w-full whitespace-pre-wrap">Аудитория</p>
      <AudienceList />
    </div>
  );
}

function Icon2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Edit">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_6.25%_12.5%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
            <g id="Vector">
              <path d="M14 12H0V13H14V12Z" fill="#0F62FE" />
              <path d={svgPaths.p27b24180} fill="#0F62FE" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Изменить</p>
          <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function AudienceSummary() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Audience Summary">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">232 человека получат новость</p>
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <ButtonContent3 />
      </div>
    </div>
  );
}

function AudienceContainer() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Audience Container">
      <div className="content-stretch flex flex-col gap-[10px] items-start pb-[12px] pt-[16px] px-[16px] relative w-full">
        <AudienceHeader />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
              <line id="Line 39" stroke="var(--stroke-0, #E0E4EA)" strokeLinejoin="bevel" x2="352" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <AudienceSummary />
      </div>
    </div>
  );
}

function LabelMargin() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Канал получения</p>
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Все каналы</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[16px] relative shrink-0 w-px" data-name="Divider">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 16">
        <g id="Divider">
          <line id="Divider_2" stroke="var(--stroke-0, #C6C6C6)" x1="0.5" x2="0.5" y2="16" />
        </g>
      </svg>
    </div>
  );
}

function AiIcons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Close">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p314604c0} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <Divider />
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownInputTrigger() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow />
          <AiIcons />
        </div>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger />
    </div>
  );
}

function LabelMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip pb-[8px] relative shrink-0 w-full" data-name="Label margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px] w-full whitespace-pre-wrap">Теги</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative z-[2]" data-name="Text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic overflow-hidden relative text-[#161616] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">Выберите теги</p>
    </div>
  );
}

function AiIcons1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center pl-[8px] relative shrink-0 z-[1]" data-name="AI + Icons">
      <div className="relative shrink-0 size-[16px]" data-name="_Dropdown chevron">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 overflow-clip" data-name="Chevron--down">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
              <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DropdownInputTrigger1() {
  return (
    <div className="h-[40px] relative shrink-0 w-full z-[4]" data-name="Dropdown input trigger">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] isolate items-center px-[16px] py-[11px] relative size-full">
          <TextOverflow1 />
          <AiIcons1 />
        </div>
      </div>
    </div>
  );
}

function DropdownInput1() {
  return (
    <div className="bg-[#f4f4f4] content-stretch flex flex-col isolate items-start relative shrink-0 w-full" data-name="Dropdown input">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <DropdownInputTrigger1 />
    </div>
  );
}

function Start1() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End1() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Новости</p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <Start1 />
        <End1 />
      </div>
    </div>
  );
}

function TagContent1() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label1 />
      <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
        <div className="relative shrink-0 size-[16px]" data-name="Close">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p314604c0} fill="var(--fill-0, #0043CE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Start2() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End2() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Сбер</p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <Start2 />
        <End2 />
      </div>
    </div>
  );
}

function TagContent2() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label2 />
      <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
        <div className="relative shrink-0 size-[16px]" data-name="Close">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p314604c0} fill="var(--fill-0, #0043CE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Start3() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End3() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">афксистема</p>
      <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <Start3 />
        <End3 />
      </div>
    </div>
  );
}

function TagContent3() {
  return (
    <div className="content-stretch flex h-[24.001px] items-center mr-[-6px] pr-[4px] py-[3px] relative rounded-[24px] shrink-0" data-name="Tag content">
      <Label3 />
      <div className="bg-[#d0e2ff] content-stretch flex flex-col items-start mr-[-4px] p-[4px] relative rounded-[12px] shrink-0" data-name="_Tag close button">
        <div className="relative shrink-0 size-[16px]" data-name="Close">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p314604c0} fill="var(--fill-0, #0043CE)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsOptions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Settings Options">
      <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
        <TagContent1 />
      </div>
      <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
        <TagContent2 />
      </div>
      <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
        <TagContent3 />
      </div>
    </div>
  );
}

function SettingsGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Settings Group">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelMargin1 />
        <DropdownInput1 />
      </div>
      <SettingsOptions />
    </div>
  );
}

function SettingsGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Settings Group">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Dropdown - Combo box - Default">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <LabelMargin />
        <DropdownInput />
      </div>
      <SettingsGroup1 />
    </div>
  );
}

function ToggleMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin1 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Запланировать публикацию</p>
      </div>
    </div>
  );
}

function ToggleMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue3() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin2 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Ограничить срок жизни новости</p>
      </div>
    </div>
  );
}

function ToggleMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin3 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Важная новость</p>
      </div>
    </div>
  );
}

function ToggleMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start py-px relative shrink-0" data-name="Toggle margin">
      <div className="bg-[#8d8d8d] content-stretch flex items-start overflow-clip p-[3px] relative rounded-[12px] shrink-0 w-[32px]" data-name="_Toggle item">
        <div className="bg-white rounded-[20px] shrink-0 size-[10px]" data-name="_Toggle switch - Small" />
      </div>
    </div>
  );
}

function ToggleValue5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Toggle + Value">
      <ToggleMargin4 />
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#161616] text-[14px] text-left tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">Добавить кнопку «Ознакомлен»</p>
      </div>
    </div>
  );
}

function SettingsToggles() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col gap-[12px] items-start relative shrink-0 w-[275px]" data-name="Settings Toggles">
      <button className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <ToggleValue2 />
      </button>
      <button className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Toggle">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <ToggleValue3 />
      </button>
      <button className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <ToggleValue4 />
      </button>
      <button className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Toggle">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <ToggleValue5 />
      </button>
    </div>
  );
}

function SettingsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Settings Container">
      <SettingsGroup />
      <SettingsToggles />
    </div>
  );
}

function SettingsSection1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Settings Section">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[24px] pt-[16px] px-[16px] relative w-full">
        <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px] w-full whitespace-pre-wrap">Основные настройки</p>
        <SettingsContainer />
      </div>
    </div>
  );
}

function AccordionHeader() {
  return (
    <div className="content-stretch flex gap-[16px] isolate items-center py-[14px] relative shrink-0 w-full" data-name="Accordion header">
      <div className="overflow-clip relative shrink-0 size-[16px] z-[2]" data-name="Chevron--down">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
            <path d={svgPaths.p32d32200} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] min-h-px min-w-px not-italic relative text-[#161616] text-[14px] tracking-[0.16px] whitespace-pre-wrap z-[1]">Дополнительные настройки</p>
    </div>
  );
}

function AdditionalSettingsSection() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Additional Settings Section">
      <div className="content-stretch flex flex-col items-start px-[20px] relative w-full">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Additional Settings Accordion">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Accordion item">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <AccordionHeader />
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[856px] items-start left-[1120px] pr-[8px] pt-[8px] top-[126px] w-[392px]" data-name="Sidebar container">
      <SettingsSection />
      <AudienceContainer />
      <SettingsSection1 />
      <AdditionalSettingsSection />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] relative size-full" data-name="Редактор новости">
      <div className="absolute h-[898px] left-[96px] top-[111px] w-[1416px]" data-name="Background img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgBackgroundImg} />
        </div>
      </div>
      <Container />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[946px] not-italic text-[#525252] text-[12px] top-[420px] tracking-[0.32px]">Заголовок</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[924px] not-italic text-[#525252] text-[12px] top-[509px] tracking-[0.32px]">Текст новости</p>
      <Header />
      <UiShellLeftPanelGroupSideRail />
      <HeaderDesktop />
      <SidebarContainer />
    </div>
  );
}