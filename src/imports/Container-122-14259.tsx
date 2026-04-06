import svgPaths from "./svg-9e055dmb5s";
import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";
import imgImage from "figma:asset/ddbccb37a86d4d5d0d0cf924080b0e9f6fe92557.png";
import imgImage1 from "figma:asset/90fc2e351473162393ec0d6e2725dcf957c0d556.png";
import imgImage2 from "figma:asset/8b39fac50ba455f7172822f897d6219810b37575.png";

function Img() {
  return (
    <div className="h-[106px] relative shrink-0 w-full" data-name="Img">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[86.297px] items-center justify-center left-[calc(50%-38.36px)] top-[calc(50%-3.39px)] w-[110.537px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "761.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[-8.83deg]">
          <div className="h-[71.69px] relative rounded-[10px] w-[100.73px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgRectangle32} />
              <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[67.728px] items-center justify-center left-[calc(50%+41px)] top-[calc(50%+2.45px)] w-[85.257px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "593.328125" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.79deg]">
          <div className="h-[49.265px] relative rounded-[10px] w-[74.667px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle41} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#161616] text-center w-full whitespace-pre-wrap" data-name="Text container">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis w-full">Все важное за 2 минуты</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Дайджест с новостями, которые важно не пропустить</p>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Посмотреть дайджест</p>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#393939] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <TextContainer />
      <Button />
    </div>
  );
}

function Digest() {
  return (
    <div className="bg-[rgba(15,98,254,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Digest">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-[12px] px-[32px] relative w-full">
          <Img />
          <ContentContainer />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#014cda] bottom-[8px] h-[22px] left-[12px] rounded-[32px] w-[62px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">Важное</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function PinFilled() {
  return (
    <div className="absolute right-[156.71px] size-[12.571px] top-[122.71px]" data-name="Pin--filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5714 12.5714">
        <g id="Pin--filled">
          <rect fill="white" fillOpacity="0.01" height="12.5714" style={{ mixBlendMode: "multiply" }} width="12.5714" />
          <path d={svgPaths.p2431c90} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[152px] top-[118px]">
      <div className="absolute right-[152px] size-[22px] top-[118px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g data-figma-bg-blur-radius="64" filter="url(#filter0_i_88_57)" id="Ellipse 4">
            <circle cx="11" cy="11" fill="var(--fill-0, #616161)" fillOpacity="0.4" r="11" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_88_57" width="150" x="-64" y="-64">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
              <feBlend in2="shape" mode="color-dodge" result="effect1_innerShadow_88_57" />
            </filter>
            <clipPath id="bgblur_0_88_57_clip_path" transform="translate(64 64)">
              <circle cx="11" cy="11" r="11" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <PinFilled />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[13.993px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9931 13.9931">
        <g clipPath="url(#clip0_101_17613)" id="Icon">
          <path d={svgPaths.p3963f5f0} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p231bf200} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_101_17613">
            <rect fill="white" height="13.9931" width="13.9931" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[12px] rounded-[32px] w-[136px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">30 дек, 12:21</p>
          <Frame />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[148px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container2 />
      <Group />
      <Container3 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center pl-[8.556px] pr-[12.556px] py-[2.556px] relative rounded-[50px] shrink-0 w-[55px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">3</p>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[15.998px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[59.63%_28.59%_25.16%_28.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.84999 2.4338">
          <path d={svgPaths.p39adcf00} fill="var(--fill-0, #161616)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[0_6.25%_68.75%_62.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path d={svgPaths.p2e22d300} fill="var(--fill-0, #161616)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/2 left-[28.12%] right-[56.25%] top-[34.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50004 2.50004">
          <path d={svgPaths.p24778380} fill="var(--fill-0, #161616)" id="Vector" />
        </svg>
      </div>
      <div className="absolute bottom-1/2 left-[56.25%] right-[28.12%] top-[34.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.50003 2.50004">
          <path d={svgPaths.p2a86e940} fill="var(--fill-0, #161616)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[6.25%_6.26%_6.25%_6.24%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.9985 13.9985">
          <path d={svgPaths.p20572000} fill="var(--fill-0, #161616)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container4 />
    </div>
  );
}

function Share() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Share">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Share">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1ed41470} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share />
    </div>
  );
}

function ReactionsContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[264px] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[min-content] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей</p>
      <ReactionsContainer />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container9 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Container5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9983 15.9983">
        <g id="Icon">
          <path d={svgPaths.p71d6e50} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CommentsContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Content1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image />
      <ContentContainer1 />
      <CommentsContainer />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Container">
      <Digest />
      <Container1 />
    </div>
  );
}