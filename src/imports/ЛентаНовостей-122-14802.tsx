import svgPaths from "./svg-ag680tb40y";
import imgImage from "figma:asset/ad41ada0fa941594d1cb465d4308b073fc4279f3.png";
import imgImage1 from "figma:asset/90fc2e351473162393ec0d6e2725dcf957c0d556.png";
import imgImage2 from "figma:asset/8b39fac50ba455f7172822f897d6219810b37575.png";
import imgRectangle32 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";
import imgImage3 from "figma:asset/ddbccb37a86d4d5d0d0cf924080b0e9f6fe92557.png";
import imgChannelItemAvatar from "figma:asset/42bc86e73d80506aeb8f346c17490d09bcc3e6fa.png";
import imgNewsItemDescriptionIcon from "figma:asset/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png";
import imgChannelItemAvatar1 from "figma:asset/5c134ebbd02006bf49c42198e659562a3a0ac036.png";
import imgNewsItemDescriptionIcon1 from "figma:asset/c936e8b3093b9815209e2159c3ae99e5a8e4a187.png";
import imgNewsItemDescriptionIcon2 from "figma:asset/e1c4d5265c5a16b5508c9bcbcd71a4ece85b2308.png";

function Container() {
  return (
    <div className="absolute bg-[#014cda] h-[22px] left-[8px] rounded-[32px] top-[134px] w-[62px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">Важное</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
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

function Frame15() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame15 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[164px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container />
      <Container1 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[#161616] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Рекордные показатели производства</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Мы достигли новых высот в этом квартале благодаря внедрению систем ИИ в управлении плавильными процессами.</p>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap" data-name="Text content">
      <Frame13 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] relative shrink-0 text-[#0f62fe] text-[14px] w-full">Показать больше</p>
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

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">62</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
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

function Container2() {
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
      <Container2 />
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
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextContent />
      <ReactionsContainer />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Content />
        </div>
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

function Container4() {
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

function Container5() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
      <Container6 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Container3 />
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

function PostContainer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[calc(43.75%-11.5px)] overflow-clip pb-[4px] rounded-[8px] top-[559px] w-[384px]" data-name="Post container">
      <Image />
      <ContentContainer />
      <CommentsContainer />
    </div>
  );
}

function Icon3() {
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

function Frame16() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon3 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame16 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[164px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container8 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[#161616] w-full whitespace-pre-wrap" data-name="Text content">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Рекордные показатели производства</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Мы достигли новых высот в этом квартале благодаря внедрению систем ИИ в управлении плавильными процессами.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">62</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
    </div>
  );
}

function Icon4() {
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

function Container9() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container9 />
    </div>
  );
}

function Share1() {
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

function Button7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share1 />
    </div>
  );
}

function ReactionsContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextContent1 />
      <ReactionsContainer1 />
    </div>
  );
}

function ContentContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image4 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Image5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image5 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container14 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Container10 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon5() {
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

function CommentsContainer1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Content3 />
          <Icon5 />
        </div>
      </div>
    </div>
  );
}

function PostContainer1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[calc(43.75%-11.5px)] overflow-clip rounded-[8px] top-[183px] w-[384px]" data-name="Post container">
      <Image3 />
      <ContentContainer1 />
      <CommentsContainer1 />
    </div>
  );
}

function Icon6() {
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

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon6 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame17 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image6() {
  return (
    <div className="h-[164px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] not-italic relative shrink-0 text-[#161616] w-full whitespace-pre-wrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Рекордные показатели производства</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Мы достигли новых высот в этом квартале благодаря внедрению систем ИИ в управлении плавильными процессами.</p>
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text content">
      <Frame14 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">62</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
    </div>
  );
}

function Icon7() {
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

function Container16() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container16 />
    </div>
  );
}

function Share2() {
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

function Button11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share2 />
    </div>
  );
}

function ReactionsContainer2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions container">
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Content">
      <TextContent2 />
      <ReactionsContainer2 />
    </div>
  );
}

function ContentContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Image7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image7 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Image8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image8 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container21 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container18 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Container17 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon8() {
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

function CommentsContainer2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Content5 />
          <Icon8 />
        </div>
      </div>
    </div>
  );
}

function PostContainer2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[12px] items-start left-[calc(43.75%-11.5px)] overflow-clip rounded-[8px] top-[-193px] w-[384px]" data-name="Post container">
      <Image6 />
      <ContentContainer2 />
      <CommentsContainer2 />
    </div>
  );
}

function AvatarChannel() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[48px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center">В</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Pin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Pin">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1057a580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black">Важное</p>
      <Pin />
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[176px]" data-name="Text container">
      <Container22 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] min-w-full not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-[min-content] whitespace-pre-wrap">Обязательно к прочтению</p>
    </div>
  );
}

function Channel() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[12px]" data-name="Channel">
      <AvatarChannel />
      <TextContainer />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[7px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#8d8d8d] text-[14px] tracking-[0.16px] z-[2]">Вы подписаны</p>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#e0e0e0] content-stretch flex flex-col items-start justify-center overflow-clip right-[16px] rounded-[4px] top-[20px]" data-name="Button">
      <ButtonContent />
    </div>
  );
}

function HeaderChannel() {
  return (
    <div className="absolute bg-white h-[72px] left-[calc(31.25%+19.5px)] overflow-clip right-[calc(18.75%+36.5px)] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] top-[70px]" data-name="Header channel">
      <Channel />
      <Button12 />
    </div>
  );
}

function DateContainer() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] h-[22px] left-[calc(50%+43px)] rounded-[32px] top-[154px] w-[86px]" data-name="Date container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10 февраля</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

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

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[#161616] text-center w-full whitespace-pre-wrap" data-name="Text container">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis w-full">Все важное за 2 минуты</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Дайджест с новостями, которые важно не пропустить</p>
    </div>
  );
}

function ButtonContent1() {
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

function Button13() {
  return (
    <div className="bg-[#393939] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

function ContentContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <TextContainer1 />
      <Button13 />
    </div>
  );
}

function Digest() {
  return (
    <div className="bg-[rgba(15,98,254,0.1)] relative rounded-[8px] shrink-0 w-full" data-name="Digest">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-[12px] px-[32px] relative w-full">
          <Img />
          <ContentContainer3 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
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

function Group1() {
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

function Icon9() {
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

function Frame18() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon9 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[12px] rounded-[32px] w-[136px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">30 дек, 12:21</p>
          <Frame18 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image9() {
  return (
    <div className="h-[148px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      <Container25 />
      <Group1 />
      <Container26 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[27px] relative shrink-0 w-[18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] h-[32px] items-center pl-[8.556px] pr-[12.556px] py-[2.556px] relative rounded-[50px] shrink-0 w-[55px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text6 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">3</p>
    </div>
  );
}

function Icon10() {
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

function Container27() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container27 />
    </div>
  );
}

function Share3() {
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

function Button16() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share3 />
    </div>
  );
}

function ReactionsContainer3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions container">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[264px] min-w-full not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px] w-[min-content] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей</p>
      <ReactionsContainer3 />
    </div>
  );
}

function ContentContainer4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Content6 />
      </div>
    </div>
  );
}

function Image10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image10 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Image11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Image">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image11 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container29 />
      <Container30 />
      <Container31 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <Container28 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon11() {
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

function CommentsContainer3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Content7 />
          <Icon11 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image9 />
      <ContentContainer4 />
      <CommentsContainer3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[calc(81.25%-24.5px)] top-[70px] w-[296px]" data-name="Container">
      <Digest />
      <Container24 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p30dad5f0} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item1() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 2">
      <Frame />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Главная</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 1">
      <Frame1 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Документы</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p1fe8b840} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item2() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 3">
      <Frame2 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Заявления</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p6f19180} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item7() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 8">
      <Frame3 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Справочники</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p294cab80} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 4">
      <Frame4 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Коллеги</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[15.79%_37.5%_52.63%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p351d3a02} fill="var(--fill-0, #373D42)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Item4() {
  return (
    <div className="h-[76px] relative shrink-0 w-full" data-name="Item 5">
      <Frame5 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-1/2 tracking-[0.32px] whitespace-pre-wrap">График отпусков</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[6.22%_6.25%_6.26%_6.25%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21.0051">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p3c30ef70} fill="var(--fill-0, #373D42)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%] overflow-clip" data-name="Frame">
      <Group />
    </div>
  );
}

function Item5() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 6">
      <Frame6 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Заместители</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute inset-[21.88%_37.5%_45.31%_37.5%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g clipPath="url(#clip0_34_3083)" id="Frame">
          <path d={svgPaths.p36dad700} fill="var(--fill-0, #054ADA)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3083">
            <rect fill="white" height="21" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Item8() {
  return (
    <div className="bg-[#edf5ff] h-[64px] relative shrink-0 w-full" data-name="Item 9">
      <div aria-hidden="true" className="absolute border-[#054ada] border-l-2 border-solid inset-[0_0_0_-1px] pointer-events-none" />
      <Frame7 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#054ada] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Новости</p>
      <div className="absolute bg-[#f44336] left-[81px] rounded-[30px] size-[10px] top-[5px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute inset-[12.5%_33.33%_37.5%_33.33%]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
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
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 7">
      <Frame8 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Telegram</p>
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Items">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g clipPath="url(#clip0_34_3070)" id="ibm-watsonx--assistant 1">
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
          <clipPath id="clip0_34_3070">
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

function hatWidget() {
  return (
    <div className="bg-[#054ada] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[52px]" data-name="Сhat_widget">
      <Wrapper />
    </div>
  );
}

function Help() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Help">
      <hatWidget />
    </div>
  );
}

function UiShellLeftPanelGroupSideRail() {
  return (
    <div className="absolute bg-white h-[920px] left-0 top-[62px] w-[96px]" data-name="ui shell / left panel / group / side rail">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <Items />
        <Help />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
    </div>
  );
}

function HrlinkLogo() {
  return (
    <div className="absolute inset-[0.26%_0_2%_0.05%]" data-name="hrlink_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0844 23.4595">
        <g id="hrlink_logo">
          <path clipRule="evenodd" d={svgPaths.p254a2800} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path" />
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

function BrandingHrlinkLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[62.118px]" data-name="branding / hrlink_logo">
      <HrlinkLogo />
    </div>
  );
}

function Frame10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex gap-[4px] items-center left-1/2 top-1/2">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#757575] text-[14px] tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px]">РУ</p>
      </div>
      <div className="h-[5px] relative shrink-0 w-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
          <path d="M10 0H0L5 5L10 0Z" fill="var(--fill-0, #757575)" id="Vector 8" />
        </svg>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame10 />
    </div>
  );
}

function Help1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Help">
          <rect fill="white" fillOpacity="0.01" height="24" style={{ mixBlendMode: "multiply" }} width="24" />
          <g id="Vector">
            <path d={svgPaths.p11bb3d80} fill="#054ADA" />
            <path d={svgPaths.p128a2e00} fill="#054ADA" />
            <path d={svgPaths.p222cfb00} fill="#054ADA" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0" data-name="Icon">
      <Help1 />
    </div>
  );
}

function Frame9() {
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

function Frame11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame12 />
      <Icon12 />
      <Frame9 />
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p10dcabc0} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Spaces() {
  return (
    <div className="bg-[#f2f4f8] content-stretch flex gap-[6px] h-[32px] items-center justify-center max-w-[300px] px-[12px] relative rounded-[4px] shrink-0" data-name="Spaces">
      <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">{`Название пространства `}</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Switch() {
  return (
    <div className="h-[20px] relative shrink-0 w-[36px]" data-name="Switch">
      <div className="absolute inset-[-5%_-2.78%_-5%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 22">
          <g id="Switch">
            <rect fill="var(--fill-0, #E0E4EA)" height="18" id="ð¨ Color l Track" rx="9" width="36" y="2" />
            <g id="ð¡States" />
            <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #212121)" fillOpacity="0.08" fillRule="evenodd" id="Elevation" />
            <g filter="url(#filter0_d_122_13340)" id="ð¨ Color l Thumb">
              <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_122_13340" width="22" x="15" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_122_13340" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_122_13340" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
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
      <Switch />
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

function QrCode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Qr-code">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Qr-code">
          <g id="Vector">
            <path d="M18 19.5V21H19.5V19.5H18Z" fill="#373D42" />
            <path d="M13.5 16.5V18H15V16.5H13.5Z" fill="#373D42" />
            <path d={svgPaths.p3fddfe80} fill="#373D42" />
            <path d={svgPaths.p2fa09680} fill="#373D42" />
            <path d={svgPaths.p3aacfd00} fill="#373D42" />
            <path d={svgPaths.p28123200} fill="#373D42" />
            <path d={svgPaths.p27b1800} fill="#373D42" />
            <path d={svgPaths.p35a1a600} fill="#373D42" />
            <path d="M7.5 16.5H4.5V19.5H7.5V16.5Z" fill="#373D42" />
            <path d={svgPaths.p186cab00} fill="#373D42" />
            <path d="M19.5 4.5H16.5V7.5H19.5V4.5Z" fill="#373D42" />
            <path d={svgPaths.p20117e00} fill="#373D42" />
            <path d="M7.5 4.5H4.5V7.5H7.5V4.5Z" fill="#373D42" />
            <path d={svgPaths.p9c73a00} fill="#373D42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function UserAvatarSmall() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="user / avatar / small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" fill="var(--fill-0, #E0E4EA)" id="Oval" r="20" />
      </svg>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(50%-8.5px)] not-italic text-[#373d42] text-[14px] top-[calc(50%-9px)] tracking-[0.16px]">FS</p>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="actions">
      <Frame11 />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <Spaces />
      <ToggleBase />
      <div className="bg-[#e0e4ea] h-[20px] shrink-0 w-px" />
      <QrCode />
      <UserAvatarSmall />
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="-translate-x-1/2 absolute bg-white content-stretch flex h-[62px] items-center justify-between left-1/2 px-[24px] top-0 w-[1512px]" data-name="_Header Desktop">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <BrandingHrlinkLogo />
      <Actions />
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Search">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p154b5b00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#f2f4f8] h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="search">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] relative size-full">
          <Search1 />
          <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#13171a] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
            <p className="leading-[18px] overflow-hidden">Поиск по новостям</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Montserrat:SemiBold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#161616] text-[24px] w-full whitespace-pre-wrap">Новости</p>
      <Search />
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Container33 />
      </div>
    </div>
  );
}

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

function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="content-stretch flex gap-[20px] items-start px-[20px] relative w-full">
        <TabContainer />
        <TabContainer1 />
      </div>
    </div>
  );
}

function ChannelItemAvatar() {
  return (
    <div className="bg-[#014cda] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[18px] py-[15px] relative rounded-[inherit] size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">В</p>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
    </div>
  );
}

function NewsItemPin() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="News item pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="News item pin">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1057a580} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function NewsItemTitleWrapper() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="News item title wrapper">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Важное</p>
      <NewsItemPin />
    </div>
  );
}

function NewsItemTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="News item text container">
      <NewsItemTitleWrapper />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px]">Обязательно к прочтению</p>
    </div>
  );
}

function ChannelItemInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar />
      <NewsItemTextContainer />
    </div>
  );
}

function ChannelItemActive() {
  return (
    <div className="bg-[#0f62fe] relative shrink-0 w-full" data-name="channel_item / active">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[20px] py-[11px] relative w-full">
          <ChannelItemInfo />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar1() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgRectangle41} />
    </div>
  );
}

function ChannelItemDesc() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="channel_item_desc">
      <div className="relative shrink-0 size-[4px]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <g id="Ellipse 25">
              <circle cx="4" cy="4" fill="var(--fill-0, #054ADA)" r="2" />
              <circle cx="4" cy="4" r="3" stroke="var(--stroke-0, #054ADA)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Сейчас онлайн · 272 смотрят</p>
    </div>
  );
}

function ChannelItemNameDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] w-[252px] whitespace-pre-wrap">Итоги года</p>
      <ChannelItemDesc />
    </div>
  );
}

function ChannelItem() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[20px] py-[11px] relative w-full">
          <ChannelItemAvatar1 />
          <ChannelItemNameDesc />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar2() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">К</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Встречайте нового руководителя команды, им станет...`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgRectangle32} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Команда разработки</p>
      <ChannelItemDesc1 />
    </div>
  );
}

function ChannelItemInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar2 />
      <ChannelItemNameDesc1 />
    </div>
  );
}

function NewsItemIconWrapper() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">5</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconWrapper1() {
  return (
    <div className="bg-[#0f62fe] h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[7px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.16px]">@</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper />
      <NewsItemIconWrapper1 />
    </div>
  );
}

function ChannelItem1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative w-full">
          <ChannelItemInfo1 />
          <NewsItemIconContainer />
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
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar} />
      </div>
    </div>
  );
}

function ChannelItemDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgNewsItemDescriptionIcon} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Дизайнерская команда</p>
      <ChannelItemDesc2 />
    </div>
  );
}

function ChannelItemInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar3 />
      <ChannelItemNameDesc2 />
    </div>
  );
}

function NewsItemIconWrapper2() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">9+</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper2 />
    </div>
  );
}

function ChannelItem2() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative w-full">
          <ChannelItemInfo2 />
          <NewsItemIconContainer1 />
        </div>
      </div>
    </div>
  );
}

function ChannelItemAvatar4() {
  return (
    <div className="relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgChannelItemAvatar1} />
      </div>
    </div>
  );
}

function ChannelItemDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgNewsItemDescriptionIcon1} />
      </div>
    </div>
  );
}

function ChannelItemNameDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Отдел маркетинга</p>
      <ChannelItemDesc3 />
    </div>
  );
}

function ChannelItemInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar4 />
      <ChannelItemNameDesc3 />
    </div>
  );
}

function NewsItemIconWrapper3() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">5</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper3 />
    </div>
  );
}

function ChannelItem3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative w-full">
          <ChannelItemInfo3 />
          <NewsItemIconContainer2 />
        </div>
      </div>
    </div>
  );
}

function NewsItemIcon() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="News item icon">
      <div aria-hidden="true" className="absolute border border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.9)] text-center w-[16px] whitespace-pre-wrap">К</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function NewsItemDescriptionWrapper() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0" data-name="News item description wrapper">
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-0 mt-0 not-italic relative row-1 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Мы расширяем график работы для удобства клиентов.`}</p>
      <div className="col-1 h-[14px] ml-0 mt-[2px] relative rounded-[2px] row-1 w-[15px]" data-name="News item description icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2px] size-full" src={imgNewsItemDescriptionIcon2} />
      </div>
    </div>
  );
}

function NewsItemTextContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="News item text container">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Команда поддержки</p>
      <NewsItemDescriptionWrapper />
    </div>
  );
}

function NewsItemWrapper() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="News item wrapper">
      <NewsItemIcon />
      <NewsItemTextContainer1 />
    </div>
  );
}

function NewsItemIconWrapper4() {
  return (
    <div className="bg-[#f2f4f8] h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#6f6f6f] text-[14px] text-center tracking-[0.16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper4 />
    </div>
  );
}

function ChannelItem4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="channel_item">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative w-full">
          <NewsItemWrapper />
          <NewsItemIconContainer3 />
        </div>
      </div>
    </div>
  );
}

function Channels() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Channels">
      <ChannelItemActive />
      <ChannelItem />
      <ChannelItem1 />
      <ChannelItem2 />
      <ChannelItem3 />
      <ChannelItem4 />
    </div>
  );
}

function ChannelsBody() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="channels_body">
      <Tabs />
      <Channels />
    </div>
  );
}

function MainContainer() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[920px] items-center left-[96px] pb-[12px] pt-[16px] top-[62px] w-[384px]" data-name="Main container">
      <HeaderContainer />
      <ChannelsBody />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] relative size-full" data-name="Лента новостей">
      <PostContainer />
      <PostContainer1 />
      <PostContainer2 />
      <div className="absolute bg-gradient-to-b from-[#f2f4f8] h-[16px] left-[calc(31.25%+19.5px)] to-[rgba(242,244,248,0)] top-[62px] w-[700px]" />
      <HeaderChannel />
      <DateContainer />
      <Container23 />
      <UiShellLeftPanelGroupSideRail />
      <HeaderDesktop />
      <MainContainer />
    </div>
  );
}