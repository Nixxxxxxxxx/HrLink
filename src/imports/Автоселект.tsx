import svgPaths from "./svg-f1uge3s9tz";
import imgImage from "figma:asset/ddbccb37a86d4d5d0d0cf924080b0e9f6fe92557.png";
import imgImage1 from "figma:asset/025e608139f7c6e58344743e68b6f62f2cfd4973.png";
import imgImage2 from "figma:asset/042af3e1197385a624517b3072852098912ee9d8.png";
import imgFrame2131330710 from "figma:asset/71f7db3006c1e17a55a94f5fbe73be4705d5bf9a.png";
import imgRectangle33 from "figma:asset/ac61f51a8aa3a6f6c6d5127ff68f884ef0a7a805.png";
import imgFrame2131330711 from "figma:asset/42bc86e73d80506aeb8f346c17490d09bcc3e6fa.png";
import imgRectangle34 from "figma:asset/ba4dc61507a77d1a33d17c6dfbc92f1fe324f957.png";
import imgFrame2131330712 from "figma:asset/5c134ebbd02006bf49c42198e659562a3a0ac036.png";
import imgRectangle35 from "figma:asset/c936e8b3093b9815209e2159c3ae99e5a8e4a187.png";
import imgFrame2131330713 from "figma:asset/ead55934f0bab2ec314b494c2a704106f1c1bd21.png";
import imgRectangle36 from "figma:asset/e1c4d5265c5a16b5508c9bcbcd71a4ece85b2308.png";
import imgFrame2131330714 from "figma:asset/a0ace302815355598c9cc0e76105481bcae5d435.png";
import imgRectangle37 from "figma:asset/453ad002229007a8c87a85b273bd6ae57312e25e.png";
import imgRectangle38 from "figma:asset/e72b42abb81a6e1ba5c0d9f03561bf400e43d454.png";

function Moon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon />
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">14</p>
    </div>
  );
}

function Chat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`30 `}</p>
    </div>
  );
}

function View() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">20</p>
    </div>
  );
}

function Reply() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1052px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame42 />
      <Frame25 />
      <Frame24 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 16:00</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] left-[370px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">
        <span className="leading-[18px]">Анализ данных</span>
        <span className="leading-[18px]">{` · `}</span>
        <span className="leading-[18px] text-[#054ada]">Важная</span>
      </p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Представлен отчет по квартальным результатам, который демонстрирует рост на 15% по сравнению с предыдущим годом.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Не пропустите ключевые показатели эффективности и их влияние на будущие стратегии.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply />
        </div>
      </div>
    </div>
  );
}

function Moon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon1 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">15</p>
    </div>
  );
}

function Chat1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`5 `}</p>
    </div>
  );
}

function View1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View1 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">25</p>
    </div>
  );
}

function Reply1() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[12px] top-[12px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[22px] left-[12px] rounded-[40px] top-[12px] w-[91px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[32px] not-italic text-[12px] text-white top-[13px] tracking-[0.16px]">Прочитано</p>
      <div className="absolute h-[7.666px] left-[17.82px] top-[18.08px] w-[9.246px]">
        <div className="absolute inset-[-13.05%_-10.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2459 9.66566">
            <path d={svgPaths.p25c18e80} id="Vector 9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1280px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame43 />
      <Frame26 />
      <Frame27 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 17:30</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[370px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">{`Поддержка клиентов `}</p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Команда поддержки успешно решила 200 запросов пользователей, что на 30% больше, чем в прошлом месяце.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Обратите внимание на отзывы клиентов и улучшайте качество обслуживания.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply1 />
        </div>
      </div>
      <Group1 />
    </div>
  );
}

function Moon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">16</p>
    </div>
  );
}

function Chat2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`18 `}</p>
    </div>
  );
}

function View2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View2 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">30</p>
    </div>
  );
}

function Reply2() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[12px] top-[12px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[22px] left-[12px] rounded-[40px] top-[12px] w-[91px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[32px] not-italic text-[12px] text-white top-[13px] tracking-[0.16px]">Прочитано</p>
      <div className="absolute h-[7.666px] left-[17.82px] top-[18.08px] w-[9.246px]">
        <div className="absolute inset-[-13.05%_-10.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2459 9.66566">
            <path d={svgPaths.p25c18e80} id="Vector 9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute h-[11.693px] left-[628px] top-[6px] w-[12.877px]">
      <div className="absolute inset-[-8.55%_-7.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8769 13.6936">
          <g id="Group 10">
            <path d={svgPaths.p2977d80} id="Vector 10" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3c9b7100} id="Vector 11" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pebf2200} id="Vector 12" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pe1a4a00} id="Vector 13" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[628px] top-[3px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[648px] not-italic text-[#0043ce] text-[12px] top-[3px] tracking-[0.32px]">Закреплено</p>
      <Group5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1113px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame44 />
      <Frame28 />
      <Frame29 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 19:00</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[370px] not-italic text-[#0f62fe] text-[12px] top-[2px] tracking-[0.16px]">Управление проектами · Важная</p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Запуск нового проекта по оптимизации процессов в отделе разработки начался успешно, с первыми результатами уже в следующем месяце.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Следите за прогрессом и обсуждайте любые возникающие вопросы.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply2 />
        </div>
      </div>
      <Group2 />
      <Group6 />
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
    <div className="absolute bg-white h-[918px] left-0 top-[62px] w-[96px]" data-name="ui shell / left panel / group / side rail">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip relative rounded-[inherit] size-full">
        <Items />
        <Help />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0e4ea] border-r border-solid inset-[0_-0.5px_0_0] pointer-events-none" />
    </div>
  );
}

function Moon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon3 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">14</p>
    </div>
  );
}

function Chat3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`30 `}</p>
    </div>
  );
}

function View3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View3 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">20</p>
    </div>
  );
}

function Reply3() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1311px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <Frame45 />
      <Frame30 />
      <Frame31 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 16:00</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[0] left-[370px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">
        <span className="leading-[18px]">Анализ данных</span>
        <span className="leading-[18px]">{` · `}</span>
        <span className="leading-[18px] text-[#054ada]">Важная</span>
      </p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Представлен отчет по квартальным результатам, который демонстрирует рост на 15% по сравнению с предыдущим годом.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Не пропустите ключевые показатели эффективности и их влияние на будущие стратегии.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply3 />
        </div>
      </div>
    </div>
  );
}

function Moon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">15</p>
    </div>
  );
}

function Chat4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame32() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`5 `}</p>
    </div>
  );
}

function View4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View4 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">25</p>
    </div>
  );
}

function Reply4() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[12px] top-[12px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[22px] left-[12px] rounded-[40px] top-[12px] w-[91px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[32px] not-italic text-[12px] text-white top-[13px] tracking-[0.16px]">Прочитано</p>
      <div className="absolute h-[7.666px] left-[17.82px] top-[18.08px] w-[9.246px]">
        <div className="absolute inset-[-13.05%_-10.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2459 9.66566">
            <path d={svgPaths.p25c18e80} id="Vector 9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1539px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage1} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame46 />
      <Frame32 />
      <Frame33 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 17:30</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[370px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">{`Поддержка клиентов `}</p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Команда поддержки успешно решила 200 запросов пользователей, что на 30% больше, чем в прошлом месяце.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Обратите внимание на отзывы клиентов и улучшайте качество обслуживания.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply4 />
        </div>
      </div>
      <Group3 />
    </div>
  );
}

function Moon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p21776500} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconWrapper5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start justify-center pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon5 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[284px] top-[182px]">
      <IconWrapper5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.32px]">16</p>
    </div>
  );
}

function Chat5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chat">
          <g id="Vector">
            <path d={svgPaths.pa0a800} fill="#525252" />
            <path d="M15 6.25H5V7.5H15V6.25Z" fill="#525252" />
            <path d="M11.25 10H5V11.25H11.25V10Z" fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[344px] top-[184px]">
      <Chat5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">{`18 `}</p>
    </div>
  );
}

function View5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[398px] top-[184px]">
      <View5 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">30</p>
    </div>
  );
}

function Reply5() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[12px] top-[12px]">
      <div className="absolute bg-[rgba(255,255,255,0.2)] h-[22px] left-[12px] rounded-[40px] top-[12px] w-[91px]" />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[32px] not-italic text-[12px] text-white top-[13px] tracking-[0.16px]">Прочитано</p>
      <div className="absolute h-[7.666px] left-[17.82px] top-[18.08px] w-[9.246px]">
        <div className="absolute inset-[-13.05%_-10.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2459 9.66566">
            <path d={svgPaths.p25c18e80} id="Vector 9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute h-[11.693px] left-[628px] top-[6px] w-[12.877px]">
      <div className="absolute inset-[-8.55%_-7.77%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.8769 13.6936">
          <g id="Group 10">
            <path d={svgPaths.p2977d80} id="Vector 10" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.p3c9b7100} id="Vector 11" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pebf2200} id="Vector 12" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
            <path d={svgPaths.pe1a4a00} id="Vector 13" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[628px] top-[3px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-[648px] not-italic text-[#0043ce] text-[12px] top-[3px] tracking-[0.32px]">Закреплено</p>
      <Group8 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[212px] left-[calc(25%+42px)] overflow-clip top-[1372px] w-[719px]">
      <div className="absolute h-[212px] left-0 top-0 w-[268px]" data-name="Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgImage2} />
          <div className="absolute bg-[rgba(0,0,0,0.2)] inset-0" />
        </div>
      </div>
      <Frame47 />
      <Frame34 />
      <Frame35 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[284px] not-italic text-[#525252] text-[12px] top-[2px] tracking-[0.16px]">30 дек, 19:00</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[370px] not-italic text-[#0f62fe] text-[12px] top-[2px] tracking-[0.16px]">Управление проектами · Важная</p>
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] leading-[22px] left-[284px] not-italic text-[#161616] text-[16px] top-[28px] w-[364px] whitespace-pre-wrap">Запуск нового проекта по оптимизации процессов в отделе разработки начался успешно, с первыми результатами уже в следующем месяце.</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] h-[40px] leading-[20px] left-[284px] not-italic overflow-hidden text-[#525252] text-[14px] text-ellipsis top-[98px] tracking-[0.16px] w-[364px] whitespace-pre-wrap">Следите за прогрессом и обсуждайте любые возникающие вопросы.</p>
      <div className="absolute flex items-center justify-center left-[695px] size-[20px] top-[187px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply5 />
        </div>
      </div>
      <Group4 />
      <Group7 />
    </div>
  );
}

function HrlinkLogo() {
  return (
    <div className="absolute inset-[0.26%_0_2%_0.05%]" data-name="hrlink_logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62.0845 23.4594">
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

function BrandingHrlinkLogo() {
  return (
    <div className="h-[24px] relative shrink-0 w-[62.118px]" data-name="branding / hrlink_logo">
      <HrlinkLogo />
    </div>
  );
}

function Frame39() {
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

function Frame41() {
  return (
    <div className="relative shrink-0 size-[48px]">
      <Frame39 />
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

function Icon() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start overflow-clip relative shrink-0" data-name="Icon">
      <Help1 />
    </div>
  );
}

function Frame38() {
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

function Frame40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <Frame41 />
      <Icon />
      <Frame38 />
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
            <g filter="url(#filter0_d_34_3006)" id="ð¨ Color l Thumb">
              <path clipRule="evenodd" d={svgPaths.p1fd353c0} fill="var(--fill-0, #054ADA)" fillRule="evenodd" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22" id="filter0_d_34_3006" width="22" x="15" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_34_3006" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_34_3006" mode="normal" result="shape" />
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
      <Frame40 />
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

function Frame16() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(15,98,254,0.1)] content-stretch flex flex-col items-center justify-center left-[334px] px-[9px] py-[5px] rounded-[14px] size-[28px] top-[calc(50%-0.5px)]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-center tracking-[0.16px]">2</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] rounded-[32px] size-[64px] top-[calc(50%-0.5px)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330710} />
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[87px] top-[30px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[31px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Встречайте нового руководителя команды, им станет...`}</p>
      <div className="absolute h-[14px] left-[87px] top-[33px] w-[15px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle33} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="-translate-x-1/2 absolute border-[#e0e4ea] border-solid border-t h-[80px] left-[calc(18.75%+16px)] overflow-clip top-[389px] w-[375px]">
      <Frame16 />
      <Frame76 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-black top-[12px] tracking-[0.16px]">Команда разработки</p>
      <Group14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(15,98,254,0.1)] content-stretch flex flex-col items-center justify-center left-[334px] px-[9px] py-[5px] rounded-[14px] size-[28px] top-[calc(50%-0.5px)]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-center tracking-[0.16px]">9+</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] rounded-[32px] size-[64px] top-[calc(50%-0.5px)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330711} />
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[87px] top-[30px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[31px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      У нас новый визуальный стиль, который мы внедрим скоро.`}</p>
      <div className="absolute h-[14px] left-[87px] top-[33px] w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle34} />
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="-translate-x-1/2 absolute border-[#e0e4ea] border-solid border-t h-[80px] left-[calc(18.75%+16px)] overflow-clip top-[469px] w-[375px]">
      <Frame17 />
      <Frame77 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-black top-[12px] tracking-[0.16px]">Дизайнерская команда</p>
      <Group15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(15,98,254,0.1)] content-stretch flex flex-col items-center justify-center left-[334px] px-[9px] py-[5px] rounded-[14px] size-[28px] top-[calc(50%-0.5px)]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-center tracking-[0.16px]">1</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] rounded-[32px] size-[64px] top-[calc(50%-0.5px)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330712} />
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[87px] top-[30px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[31px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Готовится к запуску новой рекламной кампании!`}</p>
      <div className="absolute h-[14px] left-[87px] top-[33px] w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle35} />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="-translate-x-1/2 absolute border-[#e0e4ea] border-solid border-t h-[80px] left-[calc(18.75%+16px)] overflow-clip top-[549px] w-[375px]">
      <Frame18 />
      <Frame78 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-black top-[12px] tracking-[0.16px]">Отдел маркетинга</p>
      <Group16 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] rounded-[32px] size-[64px] top-[calc(50%-0.5px)]">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[32px]">
        <div className="absolute bg-[#c7ffdb] inset-0 rounded-[32px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[32px] size-full" src={imgFrame2131330713} />
      </div>
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[87px] top-[30px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[31px] tracking-[0.16px] w-[242px] whitespace-pre-wrap">{`      Мы расширяем график работы для удобства клиентов.`}</p>
      <div className="absolute h-[14px] left-[87px] top-[33px] w-[15px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle36} />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="-translate-x-1/2 absolute border-[#e0e4ea] border-solid border-t h-[80px] left-[calc(18.75%+16px)] overflow-clip top-[629px] w-[375px]">
      <Frame79 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-black top-[12px] tracking-[0.16px]">Команда поддержки</p>
      <Group17 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="-translate-y-1/2 absolute left-[12px] rounded-[100px] size-[64px] top-1/2">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[100px] size-full" src={imgFrame2131330714} />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[89px] top-[11px]">
      <div className="absolute left-[89px] size-[4px] top-[19px]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <g id="Ellipse 25">
              <circle cx="4" cy="4" fill="var(--fill-0, #054ADA)" r="2" />
              <circle cx="4" cy="4" r="3" stroke="var(--stroke-0, #054ADA)" strokeOpacity="0.2" strokeWidth="2" />
            </g>
          </svg>
        </div>
      </div>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[98px] not-italic text-[12px] text-black top-[11px] tracking-[0.16px]">Сейчас онлайн · 272 смотрят</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="-translate-x-1/2 absolute h-[80px] left-[calc(18.75%+16px)] overflow-clip top-[229px] w-[375px]">
      <Frame80 />
      <p className="absolute font-['IBM_Plex_Sans:Medium',sans-serif] h-[35px] leading-[18px] left-[87px] not-italic overflow-hidden text-[14px] text-black text-ellipsis top-[33px] tracking-[0.16px] w-[262px] whitespace-pre-wrap">Генеральный директор Смирнов Андрей подводит итоги года</p>
      <Group13 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[rgba(15,98,254,0.1)] content-stretch flex flex-col items-center justify-center left-[334px] px-[9px] py-[5px] rounded-[14px] size-[28px] top-[9px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#0f62fe] text-[14px] text-center tracking-[0.16px]">5</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute bg-[#0f62fe] content-stretch flex flex-col items-center justify-center left-[334px] px-[7px] py-[5px] rounded-[14px] size-[28px] top-[41px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[14px] text-center text-white tracking-[0.16px]">@</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c7ffdb] content-stretch flex flex-col items-center justify-center left-[12px] px-[18px] py-[15px] rounded-[32px] size-[64px] top-[calc(50%-0.5px)]">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#161616] text-[30px] tracking-[0.16px]">В</p>
    </div>
  );
}

function Pin() {
  return (
    <div className="absolute left-[143px] size-[14px] top-[24px]" data-name="Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_34_3080)" id="Pin">
          <rect fill="white" fillOpacity="0.01" height="14" style={{ mixBlendMode: "multiply" }} width="14" />
          <path d={svgPaths.p374750f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3080">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[87px] top-[21px]">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[14px] text-black top-[22px] tracking-[0.16px]">Важное</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[87px] not-italic text-[#525252] text-[14px] top-[40px] tracking-[0.16px]">Обязательно к прочтению</p>
      <Pin />
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-white border-[#e0e4ea] border-solid border-t h-[80px] left-[calc(6.25%+18.5px)] overflow-clip top-[309px] w-[375px]">
      <Frame20 />
      <Frame21 />
      <Frame81 />
      <Group12 />
    </div>
  );
}

function TextOverflow() {
  return (
    <div className="content-stretch flex h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#161616] text-[14px] tracking-[0.16px]">Для меня</p>
    </div>
  );
}

function HorizontalTabsItems() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[calc(6.25%+17.5px)] py-[11px] top-[185px] w-[70.576px]" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <div aria-hidden="true" className="absolute border-[#0f62fe] border-b-2 border-solid inset-0 pointer-events-none" />
      <TextOverflow />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] leading-[0] relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[18px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <circle cx="9" cy="9" fill="var(--fill-0, #0F62FE)" fillOpacity="0.1" id="Ellipse 22" r="9" />
        </svg>
      </div>
      <p className="col-1 font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] ml-[5px] mt-0 not-italic relative row-1 text-[#0f62fe] text-[14px] tracking-[0.16px]">5</p>
    </div>
  );
}

function TextOverflow1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[18px] items-start overflow-clip relative shrink-0" data-name="Text overflow">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[14px] tracking-[0.16px]">Все каналы</p>
      <Group10 />
    </div>
  );
}

function HorizontalTabsItems1() {
  return (
    <div className="absolute content-stretch flex items-center left-[calc(6.25%+88.08px)] px-[16px] py-[11px] top-[185px] w-[139.045px]" data-name="_Horizontal tabs items">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <TextOverflow1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[calc(6.25%+17.5px)] top-[185px]">
      <div className="-translate-x-1/2 absolute h-0 left-[calc(18.75%+16px)] top-[225px] w-[375px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 375 1">
            <line id="Line 36" stroke="var(--stroke-0, #E0E4EA)" x2="375" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <HorizontalTabsItems />
      <HorizontalTabsItems1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-[#0f62fe] content-stretch flex flex-col items-center justify-center left-[563px] px-[11px] rounded-[22px] size-[40px] top-[747px]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[28.286px] not-italic relative shrink-0 text-[22px] text-center text-white tracking-[0.2514px]">@</p>
    </div>
  );
}

function Start() {
  return <div className="shrink-0 size-[0.001px]" data-name="Start" />;
}

function End() {
  return <div className="shrink-0 size-[0.001px]" data-name="End" />;
}

function Resizer() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Resizer">
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 mix-blend-multiply pointer-events-none" />
      <Start />
      <End />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-center mr-[-4px] pb-[2px] px-[8px] relative shrink-0" data-name="Label">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0043ce] text-[12px] tracking-[0.32px]">Важная</p>
      <Resizer />
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

function TagReadOnly() {
  return (
    <div className="bg-[#d0e2ff] content-stretch flex items-start pr-[6px] relative rounded-[12px] shrink-0" data-name="Tag - Read-only">
      <TagContent />
    </div>
  );
}

function Frame48() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[12px] top-[20px] w-[559px]">
      <div className="aspect-video relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[125.08%] left-0 max-w-none top-[-24.89%] w-full" src={imgRectangle37} />
          </div>
        </div>
      </div>
      <TagReadOnly />
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-[410px] whitespace-pre-wrap">
        {`Как изменится система премирования `}
        <br aria-hidden="true" />в 2026 году: подготовьтесь к переменам
      </p>
      <div className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] min-w-full not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`В 2026 году система премирования претерпит изменения. Основной упор будет сделан на достижение KPI и командную работу. Будут введены ежеквартальные премии за инновационные решения и оптимизацию процессов. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Особое внимание будет уделено проектам, направленным на повышение клиентской лояльности и увеличение прибыли компании. Подготовьтесь к новым возможностям и покажите свои лучшие результаты!</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="h-[34px] relative shrink-0 w-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 34">
        <g id="Frame 2131330632">
          <circle cx="17" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 9" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="36" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="55" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 11" r="16.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--right">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1aa0f580} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px]">3 комментария</p>
      <ChevronRight />
    </div>
  );
}

function Frame52() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[16px] h-[56px] items-center left-0 px-[12px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.07.28 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e49928e20e4c79a72e50f3cd1d8a9c189a22e774" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">256</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.09.02 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/7ffcca43e8d82e1a1d6d8d8e0a08aceb1bcc50be" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">120</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.08.36 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/2e685457e9612447b49acb9c667e9ee130ead71f" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">24</p>
    </div>
  );
}

function Moon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p19973370} fill="#121619" />
            <path d={svgPaths.p1e05dd80} fill="#121619" />
            <path d={svgPaths.p3c7b1000} fill="#121619" />
            <path d={svgPaths.p3f153300} fill="#121619" />
            <path d={svgPaths.p38b169f0} fill="#121619" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper6() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center mr-[-6px] pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon6 />
    </div>
  );
}

function TagReadOnly1() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center pr-[6px] relative rounded-[12px] shrink-0 w-[36px]" data-name="Tag - Read-only">
      <IconWrapper6 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[72px] content-stretch flex gap-[3px] items-center left-[calc(50%-126px)] w-[307px]">
      <Frame67 />
      <Frame68 />
      <Frame69 />
      <div className="flex flex-row items-center self-stretch">
        <TagReadOnly1 />
      </div>
    </div>
  );
}

function Reply6() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function View6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <View6 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">15</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">30 дек, 14:45</p>
      <Frame36 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="absolute bottom-[70px] content-stretch flex items-center left-[402px]">
      <Frame54 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute bottom-[70px] contents left-[402px]">
      <div className="absolute bottom-[70px] flex items-center justify-center left-[546px] size-[20px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply6 />
        </div>
      </div>
      <Frame82 />
    </div>
  );
}

function Component1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f7f7] h-[703px] left-1/2 top-[89px] w-[583px]" data-name="Обычная">
      <Frame48 />
      <Frame52 />
      <Frame59 />
      <Group19 />
    </div>
  );
}

function DocumentWordProcessor() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Document--word-processor">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Document--word-processor">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <g id="Vector">
            <path d={svgPaths.pe423d80} fill="#054ADA" />
            <path d={svgPaths.p3f664c00} fill="#054ADA" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute bg-[#d7e4ff] content-stretch flex items-center justify-center left-0 rounded-[100px] size-[40px] top-0">
      <DocumentWordProcessor />
    </div>
  );
}

function Frame58() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full">
      <Frame15 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[48px] not-italic text-[#054ada] text-[14px] top-px tracking-[0.16px] w-[207px] whitespace-pre-wrap">Регламент нового процесса</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[48px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[21px] tracking-[0.16px] w-[207px] whitespace-pre-wrap">Doc, 36 кБ</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[12px] top-[20px] w-[559px]">
      <div className="aspect-video relative shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <img alt="" className="absolute max-w-none object-cover size-full" src={imgRectangle38} />
          <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
        </div>
      </div>
      <p className="font-['IBM_Plex_Sans:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px] w-full whitespace-pre-wrap">Как изменится система премирования в 2026 году: подготовьтесь к переменам</p>
      <div className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black tracking-[0.16px] w-full whitespace-pre-wrap">
        <p className="mb-0">{`В 2026 году система премирования претерпит изменения. Основной упор будет сделан на достижение KPI и командную работу. Будут введены ежеквартальные премии за инновационные решения и оптимизацию процессов. `}</p>
        <p className="mb-0">&nbsp;</p>
        <p>Особое внимание будет уделено проектам, направленным на повышение клиентской лояльности и увеличение прибыли компании. Подготовьтесь к новым возможностям и покажите свои лучшие результаты!</p>
      </div>
      <Frame58 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="h-[34px] relative shrink-0 w-[72px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 34">
        <g id="Frame 2131330632">
          <circle cx="17" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 9" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="36" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10" r="16.5" stroke="var(--stroke-0, white)" />
          <circle cx="55" cy="17" fill="var(--fill-0, #D9D9D9)" id="Ellipse 11" r="16.5" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Chevron--right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Chevron--right">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <path d={svgPaths.p1aa0f580} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px min-w-px relative">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[16px] text-black tracking-[0.16px]">12 комментариев</p>
      <ChevronRight1 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bottom-0 content-stretch flex gap-[16px] h-[56px] items-center left-0 px-[12px] w-[583px]">
      <div aria-hidden="true" className="absolute border-[rgba(0,0,0,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.07.28 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e49928e20e4c79a72e50f3cd1d8a9c189a22e774" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">256</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.09.02 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/7ffcca43e8d82e1a1d6d8d8e0a08aceb1bcc50be" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">120</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.08.36 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/2e685457e9612447b49acb9c667e9ee130ead71f" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">24</p>
    </div>
  );
}

function Moon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Moon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Moon">
          <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} width="16" />
          <g id="Vector">
            <path d={svgPaths.p19973370} fill="#121619" />
            <path d={svgPaths.p1e05dd80} fill="#121619" />
            <path d={svgPaths.p3c7b1000} fill="#121619" />
            <path d={svgPaths.p3f153300} fill="#121619" />
            <path d={svgPaths.p38b169f0} fill="#121619" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconWrapper7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center mr-[-6px] pl-[4px] relative shrink-0 w-[22px]" data-name="Icon wrapper">
      <Moon7 />
    </div>
  );
}

function TagReadOnly2() {
  return (
    <div className="bg-white content-stretch flex h-full items-center justify-center pr-[6px] relative rounded-[12px] shrink-0 w-[36px]" data-name="Tag - Read-only">
      <IconWrapper7 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[72px] content-stretch flex gap-[3px] items-center left-[calc(50%-126px)] w-[307px]">
      <Frame70 />
      <Frame71 />
      <Frame72 />
      <div className="flex flex-row items-center self-stretch">
        <TagReadOnly2 />
      </div>
    </div>
  );
}

function Reply7() {
  return (
    <div className="relative size-[20px]" data-name="Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Reply">
          <path d={svgPaths.p2ba00e00} fill="var(--fill-0, #525252)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function View7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="View">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="View">
          <g id="Vector">
            <path d={svgPaths.p932eb00} fill="#525252" />
            <path d={svgPaths.p3701b900} fill="#525252" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <View7 />
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">15</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#525252] text-[12px] tracking-[0.16px]">30 дек, 14:45</p>
      <Frame37 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="absolute bottom-[70px] content-stretch flex items-center left-[402px]">
      <Frame57 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute bottom-[70px] contents left-[402px]">
      <div className="absolute bottom-[70px] flex items-center justify-center left-[546px] size-[20px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Reply7 />
        </div>
      </div>
      <Frame83 />
    </div>
  );
}

function Component2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#f7f7f7] h-[724px] left-1/2 top-[808px] w-[583px]" data-name="Обычная">
      <Frame49 />
      <Frame53 />
      <Frame60 />
      <Group20 />
    </div>
  );
}

function Search() {
  return (
    <div className="-translate-y-1/2 absolute left-[582px] size-[20px] top-[calc(50%+3px)]" data-name="Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Search">
          <rect fill="black" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p326b8200} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#c7ffdb] content-stretch flex flex-col items-center justify-center left-[27px] px-[13.5px] py-[11.25px] rounded-[24px] size-[48px] top-[calc(50%+1px)]">
      <p className="font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#161616] text-[22.5px] tracking-[0.12px]">В</p>
    </div>
  );
}

function Pin1() {
  return (
    <div className="absolute left-[153px] size-[14px] top-[27px]" data-name="Pin">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_34_3080)" id="Pin">
          <rect fill="white" fillOpacity="0.01" height="14" style={{ mixBlendMode: "multiply" }} width="14" />
          <path d={svgPaths.p374750f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3080">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="absolute bg-white border-[rgba(0,0,0,0.1)] border-b border-solid h-[89px] left-0 overflow-clip top-[-1px] w-[623px]">
      <Search />
      <Frame84 />
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[20px] left-[83px] not-italic text-[16px] text-black top-[24px] tracking-[0.16px]">Важное</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] left-[83px] not-italic text-[#525252] text-[14px] top-[46px] tracking-[0.16px]">Обязательно к прочтению</p>
      <Pin1 />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Chevron--down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Chevron--down">
          <rect fill="white" fillOpacity="0.01" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2c255280} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame85() {
  return (
    <div className="absolute bg-[#393939] content-stretch flex items-center justify-center left-[563px] p-[10px] rounded-[100px] size-[40px] top-[821px]">
      <ChevronDown1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#5b94ff] content-stretch flex flex-col items-center justify-center left-[calc(50%+271.5px)] px-[9px] py-[5px] rounded-[14px] size-[28px] top-[calc(50%+379.5px)]">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[0.16px]">9+</p>
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[563px] top-[807px]">
      <Frame85 />
      <Frame23 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="absolute bg-white h-[883px] left-[calc(31.25%+42.5px)] overflow-clip top-[86px] w-[623px]">
      <Frame22 />
      <Component1 />
      <Component2 />
      <Frame87 />
      <Group21 />
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

function SearchIcon() {
  return (
    <div className="content-stretch flex items-center justify-center p-[12px] relative shrink-0" data-name="Search icon">
      <Search1 />
    </div>
  );
}

function HideTextOverflow() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[18px] items-start min-h-px min-w-px overflow-clip relative" data-name="Hide text overflow">
      <p className="flex-[1_0_0] font-['IBM_Plex_Sans:Regular',sans-serif] h-[18px] leading-[18px] min-h-px min-w-px not-italic relative text-[#a8a8a8] text-[14px] tracking-[0.16px] whitespace-pre-wrap">Поиск по каналам</p>
    </div>
  );
}

function SearchDefault() {
  return (
    <div className="absolute bg-white content-stretch flex items-center left-[calc(6.25%+17.5px)] top-[134px] w-[375px]" data-name="Search - Default">
      <div aria-hidden="true" className="absolute border-[#8d8d8d] border-b border-solid inset-0 pointer-events-none" />
      <SearchIcon />
      <HideTextOverflow />
    </div>
  );
}

function Frame73() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.07.28 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/e49928e20e4c79a72e50f3cd1d8a9c189a22e774" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">256</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.09.02 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/7ffcca43e8d82e1a1d6d8d8e0a08aceb1bcc50be" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">120</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[6px] items-center px-[8px] py-[4px] relative rounded-[12px] shrink-0">
      <div className="relative shrink-0 size-[28px]" data-name="Запись экрана 2026-02-04 в 13.08.36 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop playsInline>
          <source src="/_videos/v1/2e685457e9612447b49acb9c667e9ee130ead71f" />
        </video>
      </div>
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-black tracking-[0.32px]">24</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="-translate-x-1/2 absolute bottom-[611px] content-stretch flex gap-[3px] items-center left-[calc(87.5%-3.5px)]">
      <Frame73 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute left-[calc(93.75%+39.5px)] size-[28px] top-[96px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Group 111">
          <circle cx="14" cy="14" fill="var(--fill-0, #D0E2FF)" id="Ellipse 4" r="14" />
          <g id="Pin--filled">
            <rect fill="white" fillOpacity="0.01" height="16" style={{ mixBlendMode: "multiply" }} transform="translate(6 6)" width="16" />
            <path d={svgPaths.p3b155bf0} fill="var(--fill-0, #161616)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents left-[calc(75%+10px)] top-[86px]">
      <div className="absolute bg-white h-[312px] left-[calc(75%+10px)] top-[86px] w-[351px]" />
      <Frame61 />
      <Group11 />
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[18px] left-[calc(81.25%+52.5px)] not-italic text-[#525252] text-[12px] top-[209px] tracking-[0.16px]">30 дек, 12:21</p>
      <p className="-translate-x-1/2 absolute font-['IBM_Plex_Sans:Medium',sans-serif] h-[92px] leading-[22px] left-[calc(87.5%-3px)] not-italic overflow-hidden text-[#161616] text-[16px] text-center text-ellipsis top-[calc(50%-256px)] w-[250px] whitespace-pre-wrap">Объём торгов на срочном рынке Московской биржи в 2025 году вырос на 45 % и достиг 145 трлн рублей. Рост обеспечили новые фьючерсы и опционы, а также высокая активность частных инвесторов</p>
      <div className="-translate-x-1/2 absolute h-[78px] left-[calc(87.5%-3px)] top-[110px] w-[98px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f2f4f8] relative size-full" data-name="Автоселект">
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <UiShellLeftPanelGroupSideRail />
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <HeaderDesktop />
      <Frame63 />
      <Frame64 />
      <Frame65 />
      <Frame66 />
      <Frame62 />
      <Frame19 />
      <Group18 />
      <Frame86 />
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[24px] left-[calc(6.25%+17.5px)] not-italic text-[#161616] text-[20px] top-[86px] tracking-[0.16px]">Каналы</p>
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[24px] left-[calc(12.5%+9px)] not-italic text-[20px] text-[rgba(22,22,22,0.4)] top-[86px] tracking-[0.16px]">Дайджест</p>
      <SearchDefault />
      <Group9 />
    </div>
  );
}