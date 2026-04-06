import svgPaths from "./svg-qs3szktluo";
import imgImage from "figma:asset/ddbccb37a86d4d5d0d0cf924080b0e9f6fe92557.png";

function LabelAiSlug() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Label + AI slug">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">Выберите действие</p>
    </div>
  );
}

function ValueMargin() {
  return (
    <div className="content-stretch flex items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
        Оставить
      </p>
    </div>
  );
}

function IconValueAiSlug() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon + Value + AI slug">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Radio-button--checked">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p3d52b680} fill="#161616" />
              <path d={svgPaths.p91fdd00} fill="#161616" />
            </g>
          </svg>
        </div>
      </div>
      <ValueMargin />
    </div>
  );
}

function ValueMargin1() {
  return (
    <div className="content-stretch flex items-start py-px relative shrink-0" data-name="Value margin">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]" dir="auto">
        Заменить
      </p>
    </div>
  );
}

function IconValueAiSlug1() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="Icon + Value + AI slug">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Radio-button">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <path d={svgPaths.p2e910480} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
      <ValueMargin1 />
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[15px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Подтвердить</p>
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="absolute h-[35px] left-[12px] top-[19px] w-[44px]" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[12px] top-[16px]">
      <div className="absolute right-[12px] size-[22px] top-[16px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <g data-figma-bg-blur-radius="64" filter="url(#filter0_i_408_15849)" id="Ellipse 4">
            <circle cx="11" cy="11" fill="var(--fill-0, #616161)" fillOpacity="0.4" r="11" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="150" id="filter0_i_408_15849" width="150" x="-64" y="-64">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-4" />
              <feGaussianBlur stdDeviation="6" />
              <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0" />
              <feBlend in2="shape" mode="color-dodge" result="effect1_innerShadow_408_15849" />
            </filter>
            <clipPath id="bgblur_0_408_15849_clip_path" transform="translate(64 64)">
              <circle cx="11" cy="11" r="11" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute overflow-clip right-[16.71px] size-[12.571px] top-[20.71px]" data-name="Pin--filled">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p1d0c740} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#f2f4f8] h-[72px] left-[16px] overflow-clip rounded-[8px] top-[60px] w-[483px]">
      <Image />
      <Group />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] left-[66px] not-italic text-[#161616] text-[14px] top-[16px] tracking-[0.16px] w-[360px] whitespace-pre-wrap">Новые правила безопасности в офисе: что изменилось и как это повлияет на вашу работу</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-[150.24px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#161616] text-[18px] top-[0.23px]">Уже есть закрепленная новость</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[12.8px]" data-name="Close">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4 6.4">
            <path d={svgPaths.pae2e180} fill="var(--fill-0, #161616)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[9.6px] relative w-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function AddToFolderModal() {
  return (
    <div className="absolute content-stretch flex h-[60px] items-center justify-between left-0 px-[20px] top-0 w-[519px]" data-name="AddToFolderModal">
      <Heading />
      <div className="relative rounded-[40px] shrink-0 size-[32px]" data-name="Button">
        <div aria-hidden="true" className="absolute bg-[#f4f4f4] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none rounded-[40px]" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
          <ButtonContent1 />
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Нет срока публикации">
      <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[16px] top-[152px]" data-name="Radio button group">
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <LabelAiSlug />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <IconValueAiSlug />
        </div>
        <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Radio button">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <IconValueAiSlug1 />
        </div>
      </div>
      <div className="absolute bg-[#0f62fe] bottom-[20px] content-stretch flex flex-col items-center justify-center left-[16px] overflow-clip rounded-[4px] w-[483px]" data-name="Button">
        <ButtonContent />
      </div>
      <Frame />
      <AddToFolderModal />
    </div>
  );
}