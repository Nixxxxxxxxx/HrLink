import svgPaths from "./svg-nyat4cxjv0";

function Heading() {
  return (
    <div className="h-[24.002px] relative shrink-0 w-[150.24px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] left-0 text-[#161616] text-[18px] top-[0.23px]">Добавить новость в папку</p>
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

function ButtonContent() {
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
    <div className="h-[60px] relative shrink-0 w-[463px]" data-name="AddToFolderModal">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[20px] relative size-full">
        <Heading />
        <div className="relative rounded-[40px] shrink-0 size-[32px]" data-name="Button">
          <div aria-hidden="true" className="absolute bg-[#f4f4f4] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none rounded-[40px]" />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
            <ButtonContent />
          </div>
        </div>
      </div>
    </div>
  );
}

function AvatarChannel() {
  return (
    <div className="bg-[rgba(1,76,218,0.2)] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-0 border-[#397dfe] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22ea8600} fill="var(--fill-0, #054ADA)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start overflow-clip right-[16px] top-1/2 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Add">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p22ea8600} fill="var(--fill-0, #0F62FE)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center overflow-clip py-[7px] relative shrink-0 w-full" data-name="Button content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] tracking-[0.16px] z-[3]">Создать папку</p>
      <div className="shrink-0 size-[16px] z-[2]" data-name="Icon spacer" />
      <Icon1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel />
          <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-[137px]" data-name="Button">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none rounded-[4px]" />
            <ButtonContent1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel1() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <Folder />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[22.003px] items-start relative shrink-0 w-[101.64px]" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px]">Контент план</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel1 />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Folder1() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel2() {
  return (
    <div className="bg-[#014cda] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative size-full">
        <Folder1 />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Paragraph">
      <AvatarChannel2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-black">Для важных новостей</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[15.996px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9957 15.9957">
        <g id="Icon">
          <path d={svgPaths.p2e0fbe00} id="Vector" stroke="var(--stroke-0, #0F62FE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33297" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f4f7fb] h-[50px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[20px] py-[11px] relative size-full">
          <Paragraph1 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Folder2() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel3() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <Folder2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[22.003px] items-start relative shrink-0 w-[101.64px]" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px]">3 квартар 2026</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel3 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Folder3() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel4() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <Folder3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[22.003px] items-start relative shrink-0 w-[101.64px]" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px]">Первые публикации</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel4 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Folder4() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel5() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <Folder4 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[22.003px] items-start relative shrink-0 w-[101.64px]" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px]">Коты</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel5 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Folder5() {
  return (
    <div className="relative shrink-0 size-[12.615px]" data-name="Folder">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6154 12.6154">
        <g id="Folder">
          <rect fill="white" fillOpacity="0.01" height="12.6154" style={{ mixBlendMode: "multiply" }} width="12.6154" />
          <g id="Vector">
            <path d={svgPaths.p248b6ac0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f9e2180} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function AvatarChannel6() {
  return (
    <div className="bg-[#014cda] content-stretch flex flex-col items-center justify-center px-[2.029px] py-[1.691px] relative rounded-[30.769px] shrink-0 size-[28px]" data-name="Avatar channel">
      <div aria-hidden="true" className="absolute border-[#397dfe] border-[0.113px] border-solid inset-0 pointer-events-none rounded-[30.769px]" />
      <Folder5 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-0.451px_1.353px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[22.003px] items-start relative shrink-0 w-[101.64px]" data-name="Paragraph">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#161616] text-[16px]">Неделя 5: Подготовка к запуску новой кампании</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[11px] relative w-full">
          <AvatarChannel6 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function AddToFolderModal1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[462.995px]" data-name="AddToFolderModal">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pt-[7.997px] relative size-full">
          <Container1 />
          <Container2 />
          <Container3 />
          <Container4 />
          <Container5 />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function ButtonContent2() {
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

function Frame() {
  return (
    <div className="bg-white h-[79px] relative rounded-bl-[8px] rounded-br-[8px] shrink-0 w-[463px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#0f62fe] bottom-[16px] content-stretch flex flex-col items-center justify-center left-[22px] overflow-clip rounded-[4px] w-[421px]" data-name="Button">
          <ButtonContent2 />
        </div>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] size-full" data-name="Container">
      <AddToFolderModal />
      <AddToFolderModal1 />
      <Frame />
    </div>
  );
}