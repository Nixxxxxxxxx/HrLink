import svgPaths from "./svg-p9ugypgm1u";
import imgImage from "figma:asset/ad41ada0fa941594d1cb465d4308b073fc4279f3.png";
import imgImage1 from "figma:asset/90fc2e351473162393ec0d6e2725dcf957c0d556.png";
import imgImage2 from "figma:asset/8b39fac50ba455f7172822f897d6219810b37575.png";
import imgImage3 from "figma:asset/b7bfb7bb7338268fbe42087f83eb020cb074bbb7.png";

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--left">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--left">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.pfe9f680} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <ChevronLeft />
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

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[14px] overflow-clip rounded-[50px] size-[40px] top-[16px]" data-name="Button">
      <div aria-hidden="true" className="absolute bg-[#f4f4f4] inset-0 mix-blend-multiply pointer-events-none rounded-[50px]" />
      <ButtonContent />
    </div>
  );
}

function ChannelAbout() {
  return (
    <div className="absolute bg-white h-[72px] left-0 overflow-clip rounded-bl-[8px] rounded-br-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] top-[43px] w-[393px]" data-name="channel_about">
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] left-[calc(50%-60.5px)] not-italic text-[14px] text-black top-[calc(50%-20px)]">Мировые новости</p>
      <Button />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[82px] not-italic text-[#525252] text-[14px] top-[36px] tracking-[0.16px]">Все новости мира в одном канале</p>
    </div>
  );
}

function RightSide() {
  return (
    <div className="absolute h-[11.336px] right-[14.67px] top-[17.33px] w-[66.661px]" data-name="Right Side">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66.661 11.3363">
        <g id="Right Side">
          <g id="Battery">
            <path d={svgPaths.p3748100} id="Rectangle" opacity="0.35" stroke="var(--stroke-0, black)" />
            <path d={svgPaths.p2bfee080} fill="var(--fill-0, black)" id="Combined Shape" opacity="0.4" />
            <path d={svgPaths.p26109f00} fill="var(--fill-0, black)" id="Rectangle_2" />
          </g>
          <path d={svgPaths.p2ded9c00} fill="var(--fill-0, black)" id="Wifi" />
          <path d={svgPaths.p1e137f00} fill="var(--fill-0, black)" id="Mobile Signal" />
        </g>
      </svg>
    </div>
  );
}

function Time() {
  return (
    <div className="absolute h-[21px] left-[21px] top-[12px] w-[54px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 21">
        <g id="Time">
          <g id="9:41">
            <path d={svgPaths.p24372f50} fill="var(--fill-0, black)" />
            <path d={svgPaths.p3aa84e00} fill="var(--fill-0, black)" />
            <path d={svgPaths.p2e6b3780} fill="var(--fill-0, black)" />
            <path d={svgPaths.p12b0b900} fill="var(--fill-0, black)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="absolute contents left-[21px] top-[12px]" data-name="Left Side">
      <Time />
    </div>
  );
}

function IPhoneXOrNewer() {
  return (
    <div className="absolute bg-white h-[44px] left-px overflow-clip top-0 w-[392px]" data-name="iPhone X (or newer)">
      <RightSide />
      <LeftSide />
    </div>
  );
}

function Container1() {
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

function Icon1() {
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

function Frame13() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon1 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame13 />
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
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[#161616] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Рекордные показатели производства</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Мы достигли новых высот в этом квартале благодаря внедрению систем ИИ в управлении плавильными процессами.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <Frame7 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] relative shrink-0 text-[#0f62fe] text-[14px] w-full">Показать больше</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button1() {
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
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
    </div>
  );
}

function Icon2() {
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

function Container3() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container3 />
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

function Button4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame8 />
      <Frame4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Frame9 />
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

function Container5() {
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

function Container6() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container8 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon3() {
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

function Frame11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Frame10 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image />
      <Frame12 />
      <Frame11 />
    </div>
  );
}

function Container10() {
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

function Icon4() {
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

function Frame14() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon4 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame14 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[164px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[165.09%] left-0 max-w-none top-[0.01%] w-full" src={imgImage3} />
      </div>
      <Container10 />
      <Container11 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start leading-[20px] relative shrink-0 text-[#161616] w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Макрон санкционировал своим спецслужбам запуск плана по ликвидации «неугодных лидеров» Африки, — СВР РФ.</p>
      <div className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">
        <p className="mb-0">Другие заявления Службы внешней разведки:</p>
        <p>— Франция причастна к попытке переворота в Буркина-Фасо 3 января...</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <Frame18 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] relative shrink-0 text-[#0f62fe] text-[14px] w-full">Показать больше</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button5() {
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
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
    </div>
  );
}

function Icon5() {
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

function Container12() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container12 />
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

function Button8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame17 />
      <Frame5 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Frame16 />
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

function Container14() {
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

function Container15() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image5 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container14 />
      <Container15 />
      <Container16 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container13 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon6() {
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

function Frame19() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Frame20 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[4px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image3 />
      <Frame15 />
      <Frame19 />
    </div>
  );
}

function Icon7() {
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

function Frame21() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon7 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[90.993px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10:00</p>
          <Frame21 />
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
      <Container19 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[20px] not-italic relative shrink-0 text-[#161616] w-full whitespace-pre-wrap">
      <p className="font-['Montserrat:SemiBold',sans-serif] max-w-[334px] relative shrink-0 text-[16px] w-full">Рекордные показатели производства</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] max-w-[334px] relative shrink-0 text-[14px] tracking-[0.16px] w-full">Мы достигли новых высот в этом квартале благодаря внедрению систем ИИ в управлении плавильными процессами.</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">👍</p>
      </div>
    </div>
  );
}

function Button9() {
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
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] left-[9px] not-italic text-[#0a0a0a] text-[18px] text-center top-[-0.33px]">🔥</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white content-stretch flex gap-[7.995px] h-[32px] items-center pl-[10.556px] pr-[0.556px] py-[0.556px] relative rounded-[50px] shrink-0 w-[65px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Text5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">33</p>
    </div>
  );
}

function Icon8() {
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

function Container20() {
  return (
    <div className="relative shrink-0 size-[15.998px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Container20 />
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

function Button12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame24 />
      <Frame6 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Frame23 />
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

function Container22() {
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

function Container23() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Image8 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[#da1e28] relative shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[12px] text-white">ДС</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f4f4f4] mr-[-8px] relative rounded-[18641400px] shrink-0 size-[32px]" data-name="Container">
      <div className="content-stretch flex items-center justify-center overflow-clip p-[1.667px] relative rounded-[inherit] size-full">
        <Container25 />
      </div>
      <div aria-hidden="true" className="absolute border-[1.667px] border-solid border-white inset-0 pointer-events-none rounded-[18641400px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center pr-[8px] relative shrink-0" data-name="Container">
      <Container22 />
      <Container23 />
      <Container24 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container21 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">49 комментариев</p>
    </div>
  );
}

function Icon9() {
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

function Frame25() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Frame26 />
          <Icon9 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image6 />
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function ChannelsBody() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 px-[16px] top-[-562px] w-[393px]" data-name="channels_body">
      <Container />
      <Container9 />
      <Container18 />
    </div>
  );
}

function Home() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Home">
          <path d={svgPaths.p33693000} fill="var(--fill-0, #7D7C78)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Home />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Главная</p>
    </div>
  );
}

function MenuItemMobile() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function DocumentMultiple() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Document--multiple-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Document--multiple-01">
          <g id="Vector">
            <path d="M3 4.5H1.5V19.5H3V4.5Z" fill="var(--fill-0, #7D7C78)" />
            <path d="M6 3H4.5V21H6V3Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p3a9b580} fill="var(--fill-0, #7D7C78)" />
            <path d="M19.5 12H10.5V13.5H19.5V12Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p1f5c4e80} fill="var(--fill-0, #7D7C78)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <DocumentMultiple />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Документы</p>
    </div>
  );
}

function MenuItemMobile1() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame1 />
          <div className="absolute left-[56px] size-[6px] top-[11px]" data-name="Counter">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
              <circle cx="3" cy="3" fill="var(--fill-0, #F44336)" id="Counter" r="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function DocumentRequirements() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Document--requirements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Document--requirements">
          <g id="Vector">
            <path d={svgPaths.p2ce106f0} fill="var(--fill-0, #7D7C78)" />
            <path d="M12 15H7.5V16.5H12V15Z" fill="var(--fill-0, #7D7C78)" />
            <path d="M13.5 12H7.5V13.5H13.5V12Z" fill="var(--fill-0, #7D7C78)" />
            <path d={svgPaths.p13e9cb00} fill="var(--fill-0, #7D7C78)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <DocumentRequirements />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d7c78] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Заявления</p>
    </div>
  );
}

function MenuItemMobile2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Grid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Grid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Grid">
          <g id="Vector">
            <path d={svgPaths.p1fd83f80} fill="#373D42" />
            <path d={svgPaths.pfd21b00} fill="#373D42" />
            <path d={svgPaths.p2aced380} fill="#373D42" />
            <path d={svgPaths.p2506a700} fill="#373D42" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Grid />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#373d42] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Ещё</p>
    </div>
  );
}

function MenuItemMobile3() {
  return (
    <div className="bg-white flex-[1_0_0] h-[68px] min-h-px min-w-px relative" data-name="_Menu_item_mobile">
      <div aria-hidden="true" className="absolute border-[#054ada] border-solid border-t-2 inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center px-[4px] py-[11px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function BottomRailMobile() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[375px]" data-name="Bottom rail Mobile">
      <div aria-hidden="true" className="absolute border-[#9e9e9e] border-solid border-t inset-[-1px_0_0_0] pointer-events-none" />
      <MenuItemMobile />
      <MenuItemMobile1 />
      <MenuItemMobile2 />
      <MenuItemMobile3 />
    </div>
  );
}

function IOsHomeIndicatorBar() {
  return (
    <div className="h-[16px] relative shrink-0 w-[374px]" data-name="iOS home indicator bar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 374 16">
        <g id="iOS home indicator bar">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="374" />
          <path d={svgPaths.p1b7fbb00} fill="var(--fill-0, black)" id="Bar" />
        </g>
      </svg>
    </div>
  );
}

function BottomNavigationIOsCarbonMobileLibrary() {
  return (
    <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col gap-[16px] items-start left-[calc(50%+0.5px)] w-[394px]" data-name="Bottom navigation - iOS | Carbon Mobile Library">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-solid border-t inset-0 pointer-events-none" />
      <BottomRailMobile />
      <IOsHomeIndicatorBar />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] h-[22px] left-[calc(25%+54.75px)] rounded-[32px] top-[127px] w-[86px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">10 февраля</p>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center px-[16px] py-[11px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Подписаться на канал</p>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0f62fe] bottom-[112px] content-stretch flex flex-col items-start justify-center left-1/2 overflow-clip rounded-[4px]" data-name="Button">
      <ButtonContent1 />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] overflow-clip relative rounded-[24px] size-full" data-name="Страница канала">
      <ChannelAbout />
      <IPhoneXOrNewer />
      <ChannelsBody />
      <BottomNavigationIOsCarbonMobileLibrary />
      <Container26 />
      <Button13 />
    </div>
  );
}