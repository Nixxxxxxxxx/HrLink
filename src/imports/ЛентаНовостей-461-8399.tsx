import svgPaths from "./svg-68i57o7z7p";
import imgImage from "figma:asset/47160b24b471d4613ff96bd2db74ec2e2a742a8d.png";
import imgImage1 from "figma:asset/90fc2e351473162393ec0d6e2725dcf957c0d556.png";
import imgImage2 from "figma:asset/8b39fac50ba455f7172822f897d6219810b37575.png";
import imgImage3 from "figma:asset/81153070dc07b7bde18f7839436687dc3d04cdfd.png";
import imgNewsItemDescriptionIcon from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgChannelItemAvatar from "figma:asset/42bc86e73d80506aeb8f346c17490d09bcc3e6fa.png";
import imgChannelItemAvatar1 from "figma:asset/5c134ebbd02006bf49c42198e659562a3a0ac036.png";
import imgImage4 from "figma:asset/ddbccb37a86d4d5d0d0cf924080b0e9f6fe92557.png";
import imgRectangle41 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";

function Icon() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p623fd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pad7e780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ViewsContainer() {
  return (
    <div className="absolute h-[16px] left-[54px] top-[2px] w-[48px]" data-name="Views container">
      <Icon />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[18px] not-italic text-[12px] text-white top-0 tracking-[0.32px]">3229</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[112px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">10:00</p>
      <ViewsContainer />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[#054ada] bottom-[8px] h-[22px] left-[8px] rounded-[32px] w-[62px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">Важное</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image() {
  return (
    <div className="aspect-[384/164] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container1 />
      <Container2 />
    </div>
  );
}

function ArticleContent() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Article content">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] max-w-[334px] relative shrink-0 text-[#161616] text-[18px] w-full">Развитие цифровых инструментов прогнозирования</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] max-w-[334px] not-italic relative shrink-0 text-[#171a1c] text-[0px] text-[14px] tracking-[0.16px] w-full">
        <span className="leading-[20px]">{`Компания расширила применение технологий машинного обучения для анализа состояния оборудования. `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#054ada] underline">Проект</span>
        <span className="leading-[20px]">{` реализуется в рамках программы цифровой трансформации производственных процессов.`}</span>
      </p>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Section">
      <p className="leading-[20px] relative shrink-0 w-full">В рамках исполнения контракта компания обеспечила:</p>
      <ol className="block leading-[0] relative shrink-0 w-full" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">производство стали с улучшенными прочностными характеристиками;</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">поэтапную отгрузку в соответствии с графиком строительства;</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">дополнительный лабораторный контроль качества.</span>
        </li>
      </ol>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#f1f2f3] h-[39.997px] left-0 rounded-[8px] top-0 w-[42.923px]" data-name="Container">
      <div className="absolute left-[11.46px] overflow-clip size-[20px] top-[10px]" data-name="Document icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#5E666E" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#5E666E" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#5E666E" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[35.003px] left-[54.92px] not-italic top-[2.5px] w-[296.199px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] left-0 text-[#155ffa] text-[14px] top-0 tracking-[0.16px]">Отчет по контролю качества</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 text-[#5e666e] text-[12px] top-[19px] tracking-[0.32px]">DOCX · 58.1 КБ</p>
    </div>
  );
}

function FileItem() {
  return (
    <div className="h-[39.997px] relative shrink-0 w-full" data-name="File item">
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-[#f1f2f3] h-[39.997px] left-0 rounded-[8px] top-0 w-[42.923px]" data-name="Container">
      <div className="absolute left-[11.46px] overflow-clip size-[20px] top-[10px]" data-name="Document icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#5E666E" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#5E666E" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#5E666E" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[35.003px] left-[54.92px] not-italic top-[2.5px] w-[296.199px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] left-0 text-[#155ffa] text-[14px] top-0 tracking-[0.16px]">Отчет по лабораторному контролю</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 text-[#5e666e] text-[12px] top-[19px] tracking-[0.32px]">PDF · 522.7 КБ</p>
    </div>
  );
}

function FileItem1() {
  return (
    <div className="h-[39.997px] relative shrink-0 w-full" data-name="File item">
      <Container5 />
      <Container6 />
    </div>
  );
}

function FileContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-[16px] relative shrink-0 w-full" data-name="File container">
      <FileItem />
      <FileItem1 />
    </div>
  );
}

function ImplementationStepsSection() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Implementation steps section">
      <p className="leading-[20px] relative shrink-0 w-full">Основные этапы внедрения:</p>
      <ul className="block leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Формирование единого массива производственных данных.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Обучение алгоритмов на исторических показателях эксплуатации.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">Интеграция аналитических моделей в процессы технического обслуживания.</span>
        </li>
      </ul>
    </div>
  );
}

function FileSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="File section">
      <FileContainer />
      <ImplementationStepsSection />
    </div>
  );
}

function ArticleContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <ArticleContent />
        <Section />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Ключевым приоритетом остается повышение качества и надежности поставок. Особое внимание уделяется цифровизации производственных процессов.</p>
        <FileSection />
      </div>
    </div>
  );
}

function Tags() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-center leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] tracking-[0.16px]" data-name="Tags">
      <p className="relative shrink-0">Важные новости</p>
      <p className="relative shrink-0">Качество</p>
      <p className="relative shrink-0">О нас</p>
    </div>
  );
}

function ButtonContent() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[15px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Ознакомиться</p>
        </div>
      </div>
    </div>
  );
}

function TagsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags section">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <Tags />
        <div className="bg-[#0f62fe] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <ButtonContent />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center pl-[9px] pr-[12px] py-px relative rounded-[50px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-[transparent] text-center">👍</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px]">66</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex font-['IBM_Plex_Sans:Medium',sans-serif] gap-[5px] h-[28px] items-center not-italic pl-[8px] pr-[11px] relative rounded-[50px] shrink-0 text-center" data-name="Button">
      <p className="leading-[27px] relative shrink-0 text-[18px] text-[transparent]">🔥</p>
      <p className="leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.16px]">15</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Add reaction">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_6.25%_6.25%_6.24%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0024 15">
              <g id="Vector">
                <path d={svgPaths.p1498cbf0} fill="#171A1C" />
                <path d={svgPaths.p3020100} fill="#171A1C" />
                <path d={svgPaths.p1f9a9280} fill="#171A1C" />
                <path d={svgPaths.pe749880} fill="#171A1C" />
                <path d={svgPaths.p346e2d00} fill="#171A1C" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reactions() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute left-[6px] overflow-clip size-[16px] top-[6px]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
            <path d={svgPaths.p1a504900} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReactionsAndShare() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Reactions and share">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Reactions />
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute border-2 border-solid border-white left-0 overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image1 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute border-2 border-solid border-white left-[24px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#d02670] left-[-2px] size-[32px] top-[-2px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] left-[7px] not-italic text-[12px] text-white top-[4px]">ДС</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute border-2 border-solid border-white left-[48px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function CommentersAndCount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Commenters and count">
      <Container7 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">9 комментариев</p>
    </div>
  );
}

function CommentsContainer() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#d6d9dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <CommentersAndCount />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Comment arrow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
                <path d={svgPaths.p1f22e100} fill="var(--fill-0, #171A1C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReactionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Reactions container">
      <ReactionsAndShare />
      <CommentsContainer />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p623fd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pad7e780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ViewsContainer1() {
  return (
    <div className="absolute h-[16px] left-[54px] top-[2px] w-[48px]" data-name="Views container">
      <Icon1 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[18px] not-italic text-[12px] text-white top-0 tracking-[0.32px]">1,429</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[112px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">14:22</p>
      <ViewsContainer1 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#054ada] bottom-[8px] h-[22px] left-[8px] rounded-[32px] w-[62px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">Важное</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image3() {
  return (
    <div className="aspect-[384/164] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container12 />
      <Container13 />
    </div>
  );
}

function ArticleContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Article content">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] max-w-[334px] relative shrink-0 text-[#161616] text-[18px] w-full">Новые методы контроля качества</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[334px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full">Компания внедрила систему автоматической проверки сварных швов. Проект направлен на повышение надежности выпускаемой продукции.</p>
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Section">
      <p className="leading-[20px] relative shrink-0 w-full">В рамках контракта компания обеспечила:</p>
      <ol className="block leading-[0] relative shrink-0 w-full" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">производство труб большого диаметра;</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">своевременную доставку продукции на объект;</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">расширенную гарантию качества.</span>
        </li>
      </ol>
    </div>
  );
}

function Image4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage3} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[160px] py-[72px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Play--filled--alt">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[12.5%_12.5%_12.5%_18.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.0001">
                <path d={svgPaths.p384b1000} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImplementationStepsSection1() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Implementation steps section">
      <p className="leading-[20px] relative shrink-0 w-full">Основные этапы внедрения:</p>
      <ul className="block leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Сбор данных о параметрах сварки.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Анализ данных с использованием машинного обучения.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">Автоматическое выявление дефектов.</span>
        </li>
      </ul>
    </div>
  );
}

function FileSection1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="File section">
      <ImplementationStepsSection1 />
    </div>
  );
}

function ArticleContainer1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <ArticleContent1 />
        <Section1 />
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Image section">
          <Image4 />
        </div>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Приоритетом является обеспечение высокого уровня качества продукции. Ведется работа по оптимизации производственных процессов.</p>
        <FileSection1 />
      </div>
    </div>
  );
}

function Tags1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-center leading-[18px] not-italic px-[16px] relative text-[#5e666e] text-[14px] tracking-[0.16px] w-full">
          <p className="relative shrink-0">Производство</p>
          <p className="relative shrink-0">Инновации</p>
          <p className="relative shrink-0">Наша миссия</p>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center pl-[9px] pr-[12px] py-px relative rounded-[50px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-[transparent] text-center">👍</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px]">73</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex font-['IBM_Plex_Sans:Medium',sans-serif] gap-[5px] h-[28px] items-center not-italic pl-[8px] pr-[11px] relative rounded-[50px] shrink-0 text-center" data-name="Button">
      <p className="leading-[27px] relative shrink-0 text-[18px] text-[transparent]">🔥</p>
      <p className="leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.16px]">22</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Add reaction">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_6.25%_6.25%_6.24%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0024 15">
              <g id="Vector">
                <path d={svgPaths.p1498cbf0} fill="#171A1C" />
                <path d={svgPaths.p3020100} fill="#171A1C" />
                <path d={svgPaths.p1f9a9280} fill="#171A1C" />
                <path d={svgPaths.pe749880} fill="#171A1C" />
                <path d={svgPaths.p346e2d00} fill="#171A1C" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reactions1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute left-[6px] overflow-clip size-[16px] top-[6px]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
            <path d={svgPaths.p1a504900} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReactionsAndShare1() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Reactions and share">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Reactions1 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function Image5() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute border-2 border-solid border-white left-0 overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image5 />
    </div>
  );
}

function Image6() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute border-2 border-solid border-white left-[24px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-[#d02670] left-[-2px] size-[32px] top-[-2px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] left-[7px] not-italic text-[12px] text-white top-[4px]">АИ</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute border-2 border-solid border-white left-[48px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function CommentersAndCount1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Commenters and count">
      <Container14 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">12 комментариев</p>
    </div>
  );
}

function CommentsContainer1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#d6d9dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <CommentersAndCount1 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Comment arrow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
                <path d={svgPaths.p1f22e100} fill="var(--fill-0, #171A1C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p623fd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pad7e780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ViewsContainer2() {
  return (
    <div className="absolute h-[16px] left-[54px] top-[2px] w-[48px]" data-name="Views container">
      <Icon2 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[18px] not-italic text-[12px] text-white top-0 tracking-[0.32px]">1,894</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[112px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">14:22</p>
      <ViewsContainer2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#054ada] bottom-[8px] h-[22px] left-[8px] rounded-[32px] w-[62px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">Важное</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image7() {
  return (
    <div className="aspect-[384/164] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container19 />
      <Container20 />
    </div>
  );
}

function ArticleContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Article content">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] max-w-[334px] relative shrink-0 text-[#161616] text-[18px] w-full">Новые методы повышения производительности</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[334px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full">Внедрение системы анализа данных позволило повысить эффективность работы оборудования. Проект стал частью стратегии устойчивого развития компании.</p>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Section">
      <p className="leading-[20px] relative shrink-0 w-full">В рамках программы модернизации компания обеспечила:</p>
      <ol className="block leading-[0] relative shrink-0 w-full" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">увеличение объемов производства на 15%;</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">снижение затрат на электроэнергию на 10%;</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">повышение безопасности труда.</span>
        </li>
      </ol>
    </div>
  );
}

function Image8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[8px] size-full" src={imgImage3} />
        <div className="absolute bg-[rgba(0,0,0,0.4)] inset-0 rounded-[8px]" />
      </div>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[160px] py-[72px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Play--filled--alt">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[12.5%_12.5%_12.5%_18.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.5 18.0001">
                <path d={svgPaths.p384b1000} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f1f2f3] h-[39.997px] left-0 rounded-[8px] top-0 w-[42.923px]" data-name="Container">
      <div className="absolute left-[11.46px] overflow-clip size-[20px] top-[10px]" data-name="Document icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#5E666E" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#5E666E" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#5E666E" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute h-[35.003px] left-[54.92px] not-italic top-[2.5px] w-[296.199px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] left-0 text-[#155ffa] text-[14px] top-0 tracking-[0.16px]">Анализ производственных показателей</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 text-[#5e666e] text-[12px] top-[19px] tracking-[0.32px]">XLSX · 72.5 КБ</p>
    </div>
  );
}

function FileItem2() {
  return (
    <div className="h-[39.997px] relative shrink-0 w-full" data-name="File item">
      <Container21 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-[#f1f2f3] h-[39.997px] left-0 rounded-[8px] top-0 w-[42.923px]" data-name="Container">
      <div className="absolute left-[11.46px] overflow-clip size-[20px] top-[10px]" data-name="Document icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#5E666E" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#5E666E" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#5E666E" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute h-[35.003px] left-[54.92px] not-italic top-[2.5px] w-[296.199px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[18px] left-0 text-[#155ffa] text-[14px] top-0 tracking-[0.16px]">План развития производства</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 text-[#5e666e] text-[12px] top-[19px] tracking-[0.32px]">PDF · 610.2 КБ</p>
    </div>
  );
}

function FileItem3() {
  return (
    <div className="h-[39.997px] relative shrink-0 w-full" data-name="File item">
      <Container23 />
      <Container24 />
    </div>
  );
}

function FileContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start pb-[16px] relative shrink-0 w-full" data-name="File container">
      <FileItem2 />
      <FileItem3 />
    </div>
  );
}

function ImplementationStepsSection2() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Implementation steps section">
      <p className="leading-[20px] relative shrink-0 w-full">Ключевые этапы реализации:</p>
      <ul className="block leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Анализ текущего состояния оборудования.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Разработка плана модернизации.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">Внедрение новых технологий и оборудования.</span>
        </li>
      </ul>
    </div>
  );
}

function FileSection2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="File section">
      <FileContainer1 />
      <ImplementationStepsSection2 />
    </div>
  );
}

function ArticleContainer2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <ArticleContent2 />
        <div className="content-stretch flex flex-col gap-[17px] items-center py-[12px] relative shrink-0 w-full" data-name="Quote container">
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                <line id="Line 61" stroke="var(--stroke-0, #1500FF)" x2="352" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px] w-[308px] whitespace-pre-wrap">«Мы видим значительный потенциал в дальнейшем развитии технологий», — заявил главный технолог.</p>
          <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#171a1c] text-[12px] text-center tracking-[0.32px] w-[min-content] whitespace-pre-wrap">Кирилл Петров</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 1">
                <line id="Line 61" stroke="var(--stroke-0, #1500FF)" x2="352" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
        <Section2 />
        <div className="content-stretch flex flex-col items-start py-[12px] relative shrink-0 w-full" data-name="Image section">
          <Image8 />
        </div>
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Приоритетом является снижение воздействия на окружающую среду. Компания активно внедряет новые экологические стандарты.</p>
        <FileSection2 />
      </div>
    </div>
  );
}

function Tags2() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-center leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] tracking-[0.16px]" data-name="Tags">
      <p className="relative shrink-0">Производство</p>
      <p className="relative shrink-0">Экология</p>
      <p className="relative shrink-0">Карьера</p>
    </div>
  );
}

function ButtonContent1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[15px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Ознакомиться</p>
        </div>
      </div>
    </div>
  );
}

function TagsSection1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags section">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <Tags2 />
        <div className="bg-[#0f62fe] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <ButtonContent1 />
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center pl-[9px] pr-[12px] py-px relative rounded-[50px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-[transparent] text-center">👍</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px]">123</p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex font-['IBM_Plex_Sans:Medium',sans-serif] gap-[5px] h-[28px] items-center not-italic pl-[8px] pr-[11px] relative rounded-[50px] shrink-0 text-center" data-name="Button">
      <p className="leading-[27px] relative shrink-0 text-[18px] text-[transparent]">🔥</p>
      <p className="leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.16px]">32</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Add reaction">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_6.25%_6.25%_6.24%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0024 15">
              <g id="Vector">
                <path d={svgPaths.p1498cbf0} fill="#171A1C" />
                <path d={svgPaths.p3020100} fill="#171A1C" />
                <path d={svgPaths.p1f9a9280} fill="#171A1C" />
                <path d={svgPaths.pe749880} fill="#171A1C" />
                <path d={svgPaths.p346e2d00} fill="#171A1C" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reactions2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute left-[6px] overflow-clip size-[16px] top-[6px]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
            <path d={svgPaths.p1a504900} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReactionsAndShare2() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Reactions and share">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Reactions2 />
          <Button11 />
        </div>
      </div>
    </div>
  );
}

function Image9() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute border-2 border-solid border-white left-0 overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image9 />
    </div>
  );
}

function Image10() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute border-2 border-solid border-white left-[24px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image10 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-[#d02670] left-[-2px] size-[32px] top-[-2px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] left-[7px] not-italic text-[12px] text-white top-[4px]">ИВ</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute border-2 border-solid border-white left-[48px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container25() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function CommentersAndCount2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Commenters and count">
      <Container25 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">17 комментариев</p>
    </div>
  );
}

function CommentsContainer2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#d6d9dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <CommentersAndCount2 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Comment arrow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
                <path d={svgPaths.p1f22e100} fill="var(--fill-0, #171A1C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReactionsContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Reactions container">
      <ReactionsAndShare2 />
      <CommentsContainer2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[14px] top-[2px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p623fd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pad7e780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ViewsContainer3() {
  return (
    <div className="absolute h-[16px] left-[54px] top-[2px] w-[48px]" data-name="Views container">
      <Icon3 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[18px] not-italic text-[12px] text-white top-0 tracking-[0.32px]">3229</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[8px] rounded-[32px] w-[112px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[10px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">10:00</p>
      <ViewsContainer3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bg-[#054ada] bottom-[8px] h-[22px] left-[8px] rounded-[32px] w-[62px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">Важное</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image11() {
  return (
    <div className="aspect-[384/164] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      <Container30 />
      <Container31 />
    </div>
  );
}

function ArticleContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Article content">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] max-w-[334px] relative shrink-0 text-[#161616] text-[18px] w-full">Развитие цифровых инструментов прогнозирования</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] max-w-[334px] not-italic relative shrink-0 text-[#171a1c] text-[0px] text-[14px] tracking-[0.16px] w-full">
        <span className="leading-[20px]">{`Компания расширила применение технологий машинного обучения для анализа состояния оборудования. `}</span>
        <span className="[text-decoration-skip-ink:none] decoration-solid leading-[20px] text-[#054ada] underline">Проект</span>
        <span className="leading-[20px]">{` реализуется в рамках программы цифровой трансформации производственных процессов.`}</span>
      </p>
    </div>
  );
}

function Section3() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Section">
      <p className="leading-[20px] relative shrink-0 w-full">В рамках исполнения контракта компания обеспечила:</p>
      <ol className="block leading-[0] relative shrink-0 w-full" start="1">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">производство стали с улучшенными прочностными характеристиками;</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">поэтапную отгрузку в соответствии с графиком строительства;</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">дополнительный лабораторный контроль качества.</span>
        </li>
      </ol>
    </div>
  );
}

function ImplementationStepsSection3() {
  return (
    <div className="content-stretch flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] gap-[4px] items-start not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap" data-name="Implementation steps section">
      <p className="leading-[20px] relative shrink-0 w-full">Основные этапы внедрения:</p>
      <ul className="block leading-[0] list-disc relative shrink-0 w-full">
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Формирование единого массива производственных данных.</span>
        </li>
        <li className="mb-0 ms-[21px]">
          <span className="leading-[20px]">Обучение алгоритмов на исторических показателях эксплуатации.</span>
        </li>
        <li className="ms-[21px]">
          <span className="leading-[20px]">Интеграция аналитических моделей в процессы технического обслуживания.</span>
        </li>
      </ul>
    </div>
  );
}

function FileSection3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="File section">
      <ImplementationStepsSection3 />
    </div>
  );
}

function ArticleContainer3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Article container">
      <div className="content-stretch flex flex-col gap-[12px] items-start px-[16px] relative w-full">
        <ArticleContent3 />
        <Section3 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-full whitespace-pre-wrap">Ключевым приоритетом остается повышение качества и надежности поставок. Особое внимание уделяется цифровизации производственных процессов.</p>
        <FileSection3 />
      </div>
    </div>
  );
}

function Tags3() {
  return (
    <div className="content-stretch flex font-['IBM_Plex_Sans:Regular',sans-serif] gap-[8px] items-center leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] tracking-[0.16px]" data-name="Tags">
      <p className="relative shrink-0">Важные новости</p>
      <p className="relative shrink-0">Качество</p>
      <p className="relative shrink-0">О нас</p>
    </div>
  );
}

function ButtonContent2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center px-[16px] py-[15px] relative w-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-white tracking-[0.16px] z-[2]">Ознакомиться</p>
        </div>
      </div>
    </div>
  );
}

function TagsSection2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Tags section">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative w-full">
        <Tags3 />
        <div className="bg-[#0f62fe] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Button">
          <ButtonContent2 />
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center pl-[9px] pr-[12px] py-px relative rounded-[50px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-[transparent] text-center">👍</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px]">66</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex font-['IBM_Plex_Sans:Medium',sans-serif] gap-[5px] h-[28px] items-center not-italic pl-[8px] pr-[11px] relative rounded-[50px] shrink-0 text-center" data-name="Button">
      <p className="leading-[27px] relative shrink-0 text-[18px] text-[transparent]">🔥</p>
      <p className="leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.16px]">15</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Add reaction">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_6.25%_6.25%_6.24%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0024 15">
              <g id="Vector">
                <path d={svgPaths.p1498cbf0} fill="#171A1C" />
                <path d={svgPaths.p3020100} fill="#171A1C" />
                <path d={svgPaths.p1f9a9280} fill="#171A1C" />
                <path d={svgPaths.pe749880} fill="#171A1C" />
                <path d={svgPaths.p346e2d00} fill="#171A1C" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Reactions3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <Button12 />
      <Button13 />
      <Button14 />
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute left-[6px] overflow-clip size-[16px] top-[6px]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
            <path d={svgPaths.p1a504900} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ReactionsAndShare3() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Reactions and share">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <Reactions3 />
          <Button15 />
        </div>
      </div>
    </div>
  );
}

function Image12() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute border-2 border-solid border-white left-0 overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image12 />
    </div>
  );
}

function Image13() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute border-2 border-solid border-white left-[24px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image13 />
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#d02670] left-[-2px] size-[32px] top-[-2px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] left-[7px] not-italic text-[12px] text-white top-[4px]">ДС</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute border-2 border-solid border-white left-[48px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function CommentersAndCount3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Commenters and count">
      <Container32 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">9 комментариев</p>
    </div>
  );
}

function CommentsContainer3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#d6d9dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <CommentersAndCount3 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Comment arrow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
                <path d={svgPaths.p1f22e100} fill="var(--fill-0, #171A1C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReactionsContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Reactions container">
      <ReactionsAndShare3 />
      <CommentsContainer3 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[calc(43.75%-11.5px)] top-[-488px] w-[384px]" data-name="Container">
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Card news">
        <Image />
        <ArticleContainer />
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Reactions container">
          <TagsSection />
          <ReactionsContainer />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Card news">
        <Image3 />
        <ArticleContainer1 />
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Reactions container">
          <Tags1 />
          <ReactionsAndShare1 />
          <CommentsContainer1 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Card news">
        <Image7 />
        <ArticleContainer2 />
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Reactions container">
          <TagsSection1 />
          <ReactionsContainer1 />
        </div>
      </div>
      <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Card news">
        <Image11 />
        <ArticleContainer3 />
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Reactions container">
          <TagsSection2 />
          <ReactionsContainer2 />
        </div>
      </div>
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

function Frame() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p31477f00} fill="var(--fill-0, #373D42)" id="Vector" />
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
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 1">
      <Frame1 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Документы</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p156e5400} fill="var(--fill-0, #373D42)" id="Vector" />
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
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 8">
      <Frame3 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Справочники</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute inset-[18.75%_37.5%_43.75%_37.5%]" data-name="Frame">
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
    <div className="h-[64px] relative shrink-0 w-full" data-name="Item 4">
      <Frame4 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[4.17%] not-italic right-[4.17%] text-[#9fa5ad] text-[12px] text-center top-[calc(50%+6px)] tracking-[0.32px] whitespace-pre-wrap">Коллеги</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute inset-[15.79%_37.5%_52.63%_37.5%]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p2d75ec00} fill="var(--fill-0, #373D42)" id="Vector" />
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
    <div className="absolute inset-[4.17%_4.17%_8.33%_8.33%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p15fc2d00} fill="var(--fill-0, #373D42)" fillRule="evenodd" id="Vector" />
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
        <g id="Frame">
          <path d={svgPaths.p28d16b00} fill="var(--fill-0, #054ADA)" id="Vector" />
        </g>
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p126e2300} fill="var(--fill-0, #29B6F6)" id="Vector" />
          <path d={svgPaths.p2738a800} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p390cf000} fill="var(--fill-0, #B0BEC5)" id="Vector_3" />
          <path d={svgPaths.p1c2c7c00} fill="var(--fill-0, #CFD8DC)" id="Vector_4" />
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
    <div className="content-stretch flex flex-col items-center justify-center py-[24px] relative shrink-0 w-full" data-name="Help">
      <div className="bg-[#054ada] content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[50px] shrink-0 size-[52px]" data-name="Сhat_widget">
        <Wrapper />
      </div>
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
    <div className="absolute inset-[0.25%_0_2%_0.05%]" data-name="hrlink_logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0843 23.4594">
        <g id="hrlink_logo">
          <path clipRule="evenodd" d={svgPaths.p3c1f5500} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path" />
          <rect fill="var(--fill-0, #054ADA)" height="16.0418" id="Rectangle" width="2.74763" x="28.4812" />
          <rect fill="var(--fill-0, #054ADA)" height="10.7697" id="Rectangle_2" width="2.74763" x="33.8922" y="5.27126" />
          <path clipRule="evenodd" d={svgPaths.p11cd21c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_2" />
          <path clipRule="evenodd" d={svgPaths.p23f26772} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_3" />
          <rect fill="var(--fill-0, #054ADA)" height="15.3539" id="Rectangle_3" width="2.74763" x="52.1169" y="0.687107" />
          <path clipRule="evenodd" d={svgPaths.p29845580} fill="var(--fill-0, #054ADA)" fillRule="evenodd" id="Path_4" />
        </g>
      </svg>
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
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5">
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

function Icon4() {
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
      <Icon4 />
      <Frame9 />
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
              <g filter="url(#filter0_d_461_12667)" id="ð¨ Color l Thumb">
                <path clipRule="evenodd" d={svgPaths.pb60700} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_461_12667" width="22" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_461_12667" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_461_12667" mode="normal" result="shape" />
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

function Actions() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="actions">
      <Frame11 />
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

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#171a1c] text-[24px] w-[min-content] whitespace-pre-wrap">Новости</p>
      <div className="bg-[#f2f4f8] content-stretch flex gap-[6px] h-[40px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0 w-[352px]" data-name="Input">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Search">
          <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5177 13.5177">
              <path d={svgPaths.p23d74400} fill="var(--fill-0, #525252)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-[1_0_0] flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#a8a8a8] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
          <p className="leading-[18px] overflow-hidden">Поиск по новостям</p>
        </div>
      </div>
    </div>
  );
}

function HeaderContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Container37 />
      </div>
    </div>
  );
}

function TabContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-[67px]" data-name="Tab Container">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic overflow-hidden relative shrink-0 text-[#171a1c] text-[14px] text-ellipsis tracking-[0.16px] w-full whitespace-nowrap">Для меня</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-2px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67 2">
            <line id="Line 51" stroke="var(--stroke-0, #155FFA)" strokeWidth="2" x2="67" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Counter() {
  return (
    <div className="bg-[#e1eafe] content-stretch flex flex-col items-center justify-center px-[8px] relative rounded-[9px] shrink-0" data-name="Counter">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#155ffa] text-[12px] tracking-[0.16px]">12</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['IBM_Plex_Sans:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#2f3337] text-[14px] text-ellipsis tracking-[0.16px] whitespace-nowrap">
        <p className="leading-[18px] overflow-hidden">Все каналы</p>
      </div>
      <Counter />
    </div>
  );
}

function TabContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Tab Container">
      <Frame14 />
    </div>
  );
}

function Tabs() {
  return (
    <div className="relative shrink-0 w-full" data-name="tabs">
      <div aria-hidden="true" className="absolute border-[#f1f2f3] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
      <div className="content-stretch flex gap-[20px] items-start px-[20px] relative w-full">
        <TabContainer />
        <TabContainer1 />
      </div>
    </div>
  );
}

function ChannelItemAvatar() {
  return (
    <div className="bg-[#054ada] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute border border-[#427efb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white">В</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function HeaderContainer1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Header container">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Важное</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="News item pin">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p343c5b80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <HeaderContainer1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">Обязательно к прочтению</p>
    </div>
  );
}

function ChannelItemInfo() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar />
      <ChannelItemNameDesc />
    </div>
  );
}

function NewsItemIconWrapper() {
  return (
    <div className="bg-[#f1f2f3] h-[28px] relative rounded-[100px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] text-center tracking-[0.16px]">5</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper />
    </div>
  );
}

function ChannelItemAvatar1() {
  return (
    <div className="bg-[#054ada] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute border border-[#427efb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white">ДК</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function ChannelItemDesc() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#e1eafe] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgNewsItemDescriptionIcon} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-white">Дизайнерская команда</p>
      <ChannelItemDesc />
    </div>
  );
}

function ChannelItemInfo1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar1 />
      <ChannelItemNameDesc1 />
    </div>
  );
}

function NewsItemIconWrapper1() {
  return (
    <div className="bg-[#f1f2f3] h-[28px] relative rounded-[100px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] text-center tracking-[0.16px]">9+</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconWrapper2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[14px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[7px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#155ffa] text-[14px] text-center tracking-[0.16px]">@</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper1 />
      <NewsItemIconWrapper2 />
    </div>
  );
}

function ChannelItemAvatar2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgChannelItemAvatar} />
    </div>
  );
}

function ChannelItemDesc1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgNewsItemDescriptionIcon} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Отдел маркетинга</p>
      <ChannelItemDesc1 />
    </div>
  );
}

function ChannelItemInfo2() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar2 />
      <ChannelItemNameDesc2 />
    </div>
  );
}

function NewsItemIconWrapper3() {
  return (
    <div className="bg-[#f1f2f3] h-[28px] relative rounded-[100px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] text-center tracking-[0.16px]">2</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper3 />
    </div>
  );
}

function ChannelItemAvatar3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[58px]" data-name="channel_item_avatar">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[32px] size-full" src={imgChannelItemAvatar1} />
    </div>
  );
}

function ChannelItemDesc2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[36px] items-start py-[2px] relative shrink-0 w-[242px]" data-name="channel_item_desc">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-0 not-italic text-[#525252] text-[14px] top-0 tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Мы расширяем график работы для удобства клиентов.`}</p>
      <div className="h-[14px] relative rounded-[2px] shrink-0 w-[15px]" data-name="News item description icon">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[2px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[2px] size-full" src={imgNewsItemDescriptionIcon} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[2px]" />
        </div>
      </div>
    </div>
  );
}

function ChannelItemNameDesc3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="channel_item_name+desc">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#161616] text-[14px]">Команда поддержки</p>
      <ChannelItemDesc2 />
    </div>
  );
}

function ChannelItemInfo3() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="channel_item_info">
      <ChannelItemAvatar3 />
      <ChannelItemNameDesc3 />
    </div>
  );
}

function NewsItemIconWrapper4() {
  return (
    <div className="bg-[#f1f2f3] h-[28px] relative rounded-[100px] shrink-0 w-full" data-name="News item icon wrapper">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[9px] py-[5px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#5e666e] text-[14px] text-center tracking-[0.16px]">1</p>
        </div>
      </div>
    </div>
  );
}

function NewsItemIconContainer3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[28px]" data-name="News item icon container">
      <NewsItemIconWrapper4 />
    </div>
  );
}

function Channels() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Channels">
      <div className="content-stretch flex items-start relative shrink-0" data-name="channel_item state">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] py-[11px] relative shrink-0 w-[384px]" data-name="channel_item">
          <ChannelItemInfo />
          <NewsItemIconContainer />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="channel_item state">
        <div className="bg-[#155ffa] content-stretch flex items-center justify-between overflow-clip px-[20px] py-[11px] relative shrink-0 w-[384px]" data-name="channel_item">
          <ChannelItemInfo1 />
          <NewsItemIconContainer1 />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="channel_item state">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] py-[11px] relative shrink-0 w-[384px]" data-name="channel_item">
          <ChannelItemInfo2 />
          <NewsItemIconContainer2 />
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="channel_item state">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[20px] py-[11px] relative shrink-0 w-[384px]" data-name="channel_item">
          <ChannelItemInfo3 />
          <NewsItemIconContainer3 />
        </div>
      </div>
    </div>
  );
}

function ChannelsBody() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="channels_body">
      <Tabs />
      <Channels />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents right-[152px] top-[118px]">
      <div className="absolute right-[152px] size-[22px] top-[118px]">
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
      <div className="absolute overflow-clip right-[156px] size-[13px] top-[123px]" data-name="Pin--filled">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.375 11.375">
            <path d={svgPaths.p1a177c00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p623fd00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pad7e780} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-[33px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end relative w-full">
        <Icon5 />
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">13</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute backdrop-blur-[32px] bg-[rgba(97,97,97,0.6)] bottom-[8px] h-[22px] right-[12px] rounded-[32px] w-[136px]" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center pb-[17px] pt-[15px] px-[18px] relative size-full">
          <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-white tracking-[0.32px]">30 дек, 12:21</p>
          <Frame13 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#054ada] h-[22px] left-[12px] rounded-[32px] top-[118px] w-[62px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-white top-[2px] tracking-[0.32px]">Важное</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Image14() {
  return (
    <div className="h-[148px] overflow-clip relative shrink-0 w-full" data-name="Image (Рекордные показатели производства)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4} />
      <Group1 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-white content-stretch flex gap-[5px] h-[28px] items-center pl-[9px] pr-[12px] py-px relative rounded-[50px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-[transparent] text-center">👍</p>
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#171a1c] text-[14px] text-center tracking-[0.16px]">66</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#0f62fe] content-stretch flex font-['IBM_Plex_Sans:Medium',sans-serif] gap-[5px] h-[28px] items-center not-italic pl-[8px] pr-[11px] relative rounded-[50px] shrink-0 text-center" data-name="Button">
      <p className="leading-[27px] relative shrink-0 text-[18px] text-[transparent]">🔥</p>
      <p className="leading-[21px] relative shrink-0 text-[14px] text-white tracking-[0.16px]">15</p>
    </div>
  );
}

function Button18() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="relative shrink-0 size-[16px]" data-name="Add reaction">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[0_6.25%_6.25%_6.24%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.0024 15">
              <g id="Vector">
                <path d={svgPaths.p1498cbf0} fill="#171A1C" />
                <path d={svgPaths.p3020100} fill="#171A1C" />
                <path d={svgPaths.p1f9a9280} fill="#171A1C" />
                <path d={svgPaths.pe749880} fill="#171A1C" />
                <path d={svgPaths.p346e2d00} fill="#171A1C" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-white relative rounded-[50px] shrink-0 size-[28px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e3e5e8] border-solid inset-0 pointer-events-none rounded-[50px]" />
      <div className="absolute left-[6px] overflow-clip size-[16px] top-[6px]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
            <path d={svgPaths.p1a504900} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Reactions4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Reactions">
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Content">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] max-w-[264px] min-w-full not-italic relative shrink-0 text-[#171a1c] text-[14px] tracking-[0.16px] w-[min-content] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей</p>
      <Reactions4 />
    </div>
  );
}

function ContentContainer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content container">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Content />
      </div>
    </div>
  );
}

function Image15() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute border-2 border-solid border-white left-0 overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image15 />
    </div>
  );
}

function Image16() {
  return (
    <div className="absolute left-[-2px] size-[32px] top-[-2px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute border-2 border-solid border-white left-[24px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Image16 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#d02670] left-[-2px] size-[32px] top-[-2px]" data-name="Container">
      <p className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[24px] left-[7px] not-italic text-[12px] text-white top-[4px]">ДС</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute border-2 border-solid border-white left-[48px] overflow-clip rounded-[1000px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] size-[32px] top-0" data-name="Container">
      <Container46 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[32px] relative shrink-0 w-[80px]" data-name="Container">
      <Container43 />
      <Container44 />
      <Container45 />
    </div>
  );
}

function CommentersAndCount4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Commenters and count">
      <Container42 />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">9 комментариев</p>
    </div>
  );
}

function CommentsContainer4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Comments container">
      <div aria-hidden="true" className="absolute border-[#d6d9dc] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <CommentersAndCount4 />
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Comment arrow">
            <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
                <path d={svgPaths.p1f22e100} fill="var(--fill-0, #171A1C)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Image14 />
      <ContentContainer />
      <CommentsContainer4 />
    </div>
  );
}

function Img() {
  return (
    <div className="h-[106px] relative shrink-0 w-full" data-name="Img">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[86.645px] items-center justify-center left-[calc(50%-38.57px)] top-[calc(50%-3.17px)] w-[110.851px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-8.83deg]">
          <div className="h-[72px] relative rounded-[10px] w-[101px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[10px]">
              <img alt="" className="absolute max-w-none object-cover rounded-[10px] size-full" src={imgNewsItemDescriptionIcon} />
              <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0 rounded-[10px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[67.564px] items-center justify-center left-[calc(50%+41.42px)] top-[calc(50%+2.78px)] w-[85.505px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[15.79deg]">
          <div className="h-[49px] relative rounded-[10px] w-[75px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgRectangle41} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-[#171a1c] text-center w-full whitespace-pre-wrap" data-name="Text container">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[24px] overflow-hidden relative shrink-0 text-[16px] text-ellipsis w-full">Все за 2 минуты</p>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] tracking-[0.16px] w-full">Дайджест с новостями, которые важно не пропустить</p>
    </div>
  );
}

function ButtonContent3() {
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

function ContentContainer1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full" data-name="Content container">
      <TextContainer />
      <div className="bg-[#393939] content-stretch flex flex-col items-start justify-center overflow-clip relative rounded-[4px] shrink-0" data-name="Button">
        <ButtonContent3 />
      </div>
    </div>
  );
}

function Digest() {
  return (
    <div className="bg-[#e1eafe] relative rounded-[8px] shrink-0 w-full" data-name="Digest">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[32px] pt-[12px] px-[32px] relative w-full">
          <Img />
          <ContentContainer1 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[calc(81.25%-24.5px)] top-[70px] w-[296px]" data-name="Container">
      <Container39 />
      <Digest />
    </div>
  );
}

function ChannelItemAvatar4() {
  return (
    <div className="bg-[#054ada] content-stretch flex flex-col items-center justify-center px-[18px] py-[15px] relative rounded-[32px] shrink-0 size-[48px]" data-name="channel_item_avatar">
      <div aria-hidden="true" className="absolute border border-[#427efb] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-center text-white">ДК</p>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-4px_12px_0px_rgba(255,255,255,0.55)]" />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <p className="font-['IBM_Plex_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#171a1c] text-[14px]">Дизайнерская команда</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Pin">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p343c5b80} fill="var(--fill-0, #171A1C)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TextContainer1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text container">
      <Container47 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#2f3337] text-[14px] tracking-[0.16px]">Новости нашей прекрасной команды</p>
    </div>
  );
}

function Channel() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[16px] top-[12px]" data-name="Channel">
      <ChannelItemAvatar4 />
      <TextContainer1 />
    </div>
  );
}

function ButtonContent4() {
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

function HeaderChannel() {
  return (
    <div className="absolute bg-white h-[72px] left-[calc(31.25%+19.5px)] overflow-clip right-[calc(18.75%+36.5px)] rounded-[8px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.13)] top-[70px]" data-name="Header channel">
      <Channel />
      <div className="absolute bg-[#c6c6c6] content-stretch flex flex-col items-start justify-center overflow-clip right-[16px] rounded-[4px] top-[20px]" data-name="Button">
        <ButtonContent4 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 z-[1]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron--right">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-[18.75%_31.25%_18.75%_33.13%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.7 10">
            <path d={svgPaths.p1f22e100} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonContent5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button content">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex isolate items-center justify-center p-[16px] relative w-full">
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="-translate-x-1/2 absolute h-[8px] left-[calc(50%-7px)] top-[821px] w-[88px]" data-name="Pagination">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 8">
        <g id="Pagination">
          <circle cx="4" cy="4" fill="var(--fill-0, white)" id="Ellipse 38" r="4" />
          <circle cx="24" cy="4" fill="var(--fill-0, #E3E5E8)" fillOpacity="0.3" id="Ellipse 37" r="4" />
          <circle cx="44" cy="4" fill="var(--fill-0, #E3E5E8)" fillOpacity="0.3" id="Ellipse 41" r="4" />
          <circle cx="64" cy="4" fill="var(--fill-0, #E3E5E8)" fillOpacity="0.3" id="Ellipse 42" r="4" />
          <circle cx="84" cy="4" fill="var(--fill-0, #E3E5E8)" fillOpacity="0.3" id="Ellipse 40" r="4" />
        </g>
      </svg>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex isolate items-center justify-center left-[24px] p-[12px] rounded-[50px] top-[24px] w-[40px]" data-name="Button">
      <div className="relative shrink-0 size-[16px] z-[1]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-[6.15%_12.5%_6.25%_6.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.0125 14.0157">
              <path d={svgPaths.p1a504900} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex isolate items-center justify-center left-[calc(75%+57.75px)] p-[12px] rounded-[50px] top-[24px] w-[40px]" data-name="Button">
      <div className="relative shrink-0 size-[16px] z-[1]" data-name="Share icon">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] bg-clip-padding border-0 border-[transparent] border-solid inset-0 mix-blend-multiply pointer-events-none" />
        <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute inset-1/4" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
              <path d={svgPaths.p314604c0} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsItem() {
  return (
    <div className="bg-[rgba(171,192,255,0.1)] h-[68px] relative rounded-[12px] shrink-0 w-full" data-name="News Item">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-white w-[333px] whitespace-pre-wrap">
          <span className="leading-[22px]">{`ПромИнвест `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] text-[#78a9ff] underline">инвестирует</span>
          <span className="leading-[22px]">{` в разработку ИИ-системы для оптимизации логистики.`}</span>
        </p>
      </div>
    </div>
  );
}

function NewsItem1() {
  return (
    <div className="bg-[rgba(171,192,255,0.1)] h-[90px] relative rounded-[12px] shrink-0 w-full" data-name="News Item">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-white w-[333px] whitespace-pre-wrap">
          <span className="leading-[22px]">{`ПромИнвест `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] text-[#78a9ff] underline">объявляет</span>
          <span className="leading-[22px]">{` о внедрении цифровых двойников в производственные процессы.`}</span>
        </p>
      </div>
    </div>
  );
}

function NewsItem2() {
  return (
    <div className="bg-[rgba(171,192,255,0.1)] h-[90px] relative rounded-[12px] shrink-0 w-full" data-name="News Item">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-white w-[333px] whitespace-pre-wrap">
          <span className="leading-[22px]">{`На заводах Северстали `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] text-[#78a9ff] underline">стартует</span>
          <span className="leading-[22px]">{` пилотный проект с использованием VR-тренажеров для обучения персонала.`}</span>
        </p>
      </div>
    </div>
  );
}

function NewsItem3() {
  return (
    <div className="bg-[rgba(171,192,255,0.1)] h-[90px] relative rounded-[12px] shrink-0 w-full" data-name="News Item">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-white w-[333px] whitespace-pre-wrap">
          <span className="leading-[22px]">{`Искусственный интеллект `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] text-[#78a9ff] underline">поможет</span>
          <span className="leading-[22px]">{` Северстали прогнозировать спрос и оптимизировать запасы.`}</span>
        </p>
      </div>
    </div>
  );
}

function NewsItem4() {
  return (
    <div className="bg-[rgba(171,192,255,0.1)] h-[90px] relative rounded-[12px] shrink-0 w-full" data-name="News Item">
      <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
        <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] not-italic relative self-stretch shrink-0 text-[0px] text-[16px] text-white w-[333px] whitespace-pre-wrap">
          <span className="leading-[22px]">{`ПромИнвест `}</span>
          <span className="[text-decoration-skip-ink:none] decoration-solid leading-[22px] text-[#78a9ff] underline">разрабатывает</span>
          <span className="leading-[22px]">{` онлайн-платформу для обмена опытом между сотрудниками.`}</span>
        </p>
      </div>
    </div>
  );
}

function NewsContainer() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[204px] w-[439px]" data-name="News Container">
      <NewsItem />
      <NewsItem1 />
      <NewsItem2 />
      <NewsItem3 />
      <NewsItem4 />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute bg-[#1b1f29] h-[853px] left-[calc(37.5%-8px)] overflow-clip rounded-[12px] top-[65px] w-[487px]" data-name="Сотрудник">
      <div className="absolute h-[462px] left-[-208px] top-[717px] w-[816px]">
        <div className="absolute inset-[-59.31%_-33.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1364 1010">
            <g filter="url(#filter0_f_461_12636)" id="Ellipse 44">
              <ellipse cx="682" cy="505" fill="var(--fill-0, #0F62FE)" rx="408" ry="231" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1010" id="filter0_f_461_12636" width="1364" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_461_12636" stdDeviation="137" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[calc(100%+61px)] size-[28px] top-[166px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <circle cx="14" cy="14" fill="var(--fill-0, #0F62FE)" id="Ellipse 23" r="14" />
        </svg>
      </div>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(100%+66px)] not-italic text-[14px] text-white top-[170px] tracking-[0.16px]">22</p>
      <div className="absolute font-['IBM_Plex_Sans:Bold',sans-serif] leading-[32px] left-[24px] not-italic text-[28px] text-white top-[88px] tracking-[0.16px] w-[289px] whitespace-pre-wrap">
        <p className="mb-0">Дайджест главных новостей за неделю</p>
        <p>9–15 февраля</p>
      </div>
      <Pagination />
      <Button20 />
      <Button21 />
      <NewsContainer />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] relative size-full" data-name="Лента новостей">
      <Container />
      <div className="absolute bg-gradient-to-b from-[#f2f4f8] h-[16px] left-[calc(31.25%+19.5px)] to-[rgba(242,244,248,0)] top-[62px] w-[700px]" />
      <DateContainer />
      <UiShellLeftPanelGroupSideRail />
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex h-[62px] items-center justify-between left-1/2 px-[24px] top-0 w-[1512px]" data-name="_Header Desktop">
        <div aria-hidden="true" className="absolute border-[#e0e4ea] border-b border-solid inset-[0_0_-0.5px_0] pointer-events-none" />
        <div className="h-[24px] relative shrink-0 w-[62.118px]" data-name="branding / hrlink_logo">
          <HrlinkLogo />
        </div>
        <Actions />
      </div>
      <div className="absolute bg-white content-stretch flex flex-col gap-[20px] h-[920px] items-center left-[96px] pb-[12px] pt-[16px] top-[62px] w-[384px]" data-name="Navigation channels">
        <HeaderContainer />
        <ChannelsBody />
      </div>
      <Container38 />
      <HeaderChannel />
      <div className="absolute bg-[rgba(35,35,35,0.75)] h-[982px] left-0 top-0 w-[1512px]" />
      <div className="absolute bg-[#393939] content-stretch flex flex-col items-center justify-center left-[calc(68.75%+22.5px)] overflow-clip rounded-[50px] size-[48px] top-[468px]" data-name="Button">
        <ButtonContent5 />
      </div>
      <Component1 />
    </div>
  );
}