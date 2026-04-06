import svgPaths from "./svg-ynjuohcfdf";
import imgImage from "figma:asset/b7bfb7bb7338268fbe42087f83eb020cb074bbb7.png";
import imgImage1 from "figma:asset/90fc2e351473162393ec0d6e2725dcf957c0d556.png";
import imgImage2 from "figma:asset/8b39fac50ba455f7172822f897d6219810b37575.png";

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

function Frame7() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative">
        <Icon />
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
          <Frame7 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[164px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[165.09%] left-0 max-w-none top-[0.01%] w-full" src={imgImage} />
      </div>
      <Container1 />
      <Container2 />
    </div>
  );
}

function Frame1() {
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

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
      <Frame1 />
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
    <div className="h-[27.005px] relative shrink-0 w-[17.778px]" data-name="Text">
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

function Container3() {
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

function Button3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[0.556px] relative rounded-[50px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-[0.556px] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <Share />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[16px] relative w-full">
          <Frame3 />
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Container4 />
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

function Frame5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[16px] pr-[12px] py-[8px] relative size-full">
          <Frame4 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip pb-[4px] relative rounded-[8px] size-full" data-name="Container">
      <Image />
      <Frame6 />
      <Frame5 />
    </div>
  );
}