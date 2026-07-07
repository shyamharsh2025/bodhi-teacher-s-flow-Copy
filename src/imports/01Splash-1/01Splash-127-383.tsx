import svgPaths from "./svg-8yr2pt1nll";

function Time() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[16px] pr-[6px] relative size-full">
          <p className="font-['Inter',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] relative size-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
              <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
            </svg>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
              <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
            </svg>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function Container() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p300a1100} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1">
      <Container />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Group />
    </div>
  );
}

function ButtonGoBack() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[29.33px] p-[8px] rounded-[9999px] size-[21.333px] top-[79.33px]" data-name="Button - Go back">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[20px] top-[70px]">
      <div className="absolute left-[20px] size-[40px] top-[70px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
          <g id="Ellipse 74">
            <circle cx="20" cy="20" fill="var(--fill-0, white)" r="20" />
            <circle cx="20" cy="20" r="19.5" stroke="var(--stroke-0, #E8E7F1)" strokeOpacity="0.6" />
          </g>
        </svg>
      </div>
      <ButtonGoBack />
    </div>
  );
}

function Heading() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] top-[76px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[16px] text-center tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Start Focus Sprint</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5b62] text-[15px] w-full">
        <p className="leading-[22.5px]">{`Set your intention. We'll help you stay in the`}</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p9899234} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" data-name="Overlay+Shadow">
      <div aria-hidden="true" className="absolute bg-[rgba(88,64,212,0.05)] inset-0 pointer-events-none rounded-[48px]" />
      <Container2 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[-1px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[18px] whitespace-nowrap">
        <p className="leading-[22.5px]">Start immediately</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[25.75px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[12px] w-[183px]">
        <p className="leading-[16px]">Jump into your session</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOptionCard1DailyMeditation() {
  return (
    <div className="bg-white drop-shadow-[0px_10px_20px_rgba(84,75,187,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button - Option Card 1: Daily Meditation">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.6)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[20px] relative size-full">
          <OverlayShadow />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container4 />
          </div>
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="relative shrink-0 size-[56px]" data-name="Overlay+Shadow">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 56">
        <g filter="url(#filter0_i_127_406)" id="Overlay+Shadow">
          <rect fill="var(--fill-0, #5840D4)" fillOpacity="0.05" height="56" rx="28" width="56" />
          <path d={svgPaths.p3915f500} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="58" id="filter0_i_127_406" width="56" x="0" y="0">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_127_406" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[-1px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[18px] whitespace-nowrap">
        <p className="leading-[22.5px]">2 min Breathwork</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[25.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[12px] w-[155px]">
        <p className="leading-[16px]">Quick breathing to clear your mind</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <Heading2 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOptionCard2FocusSession() {
  return (
    <div className="bg-white drop-shadow-[0px_10px_20px_rgba(84,75,187,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button - Option Card 2: Focus Session">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[20px] relative size-full">
          <OverlayShadow1 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container7 />
          </div>
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[18px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="Container">
          <path d={svgPaths.p9ab9180} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function OverlayShadow2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" data-name="Overlay+Shadow">
      <div aria-hidden="true" className="absolute bg-[rgba(88,64,212,0.05)] inset-0 pointer-events-none rounded-[48px]" />
      <Container10 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[-1px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[18px] whitespace-nowrap">
        <p className="leading-[22.5px]">5 min Meditation</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[25.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1a1a2e] text-[12px] whitespace-nowrap">
        <p className="leading-[16px] mb-0">Deeper preparation for better</p>
        <p className="leading-[16px]">focus</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <Heading3 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[12px] relative shrink-0 w-[7.4px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4 12">
        <g id="Container">
          <path d={svgPaths.p28c84800} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function ButtonOptionCard2FocusSession1() {
  return (
    <div className="bg-white drop-shadow-[0px_10px_20px_rgba(84,75,187,0.2)] relative rounded-[16px] shrink-0 w-full" data-name="Button - Option Card 2: Focus Session">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center p-[20px] relative size-full">
          <OverlayShadow2 />
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
            <Container11 />
          </div>
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function OptionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Options List">
      <ButtonOptionCard1DailyMeditation />
      <ButtonOptionCard2FocusSession />
      <ButtonOptionCard2FocusSession1 />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 pb-[47.25px] pt-[16px] px-[32px] top-[calc(50%+0.13px)] w-[390px]" data-name="Content Area">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[24px] tracking-[-0.65px] w-full">
        <p className="leading-[32.5px]">{` How do you want to start?`}</p>
      </div>
      <Container1 />
      <OptionsList />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[42.25px] relative shrink-0 w-[264px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-normal h-[43px] justify-center leading-[0] left-[130.11px] text-[#5a5b62] text-[13px] text-center top-[20.56px] w-[260.22px]">
          <p className="leading-[21.13px] mb-0">Starting with breathwork or meditation can</p>
          <p className="leading-[21.13px]">improve your focus and retention.</p>
        </div>
      </div>
    </div>
  );
}

function InfoCard() {
  return (
    <div className="absolute content-stretch flex items-start left-[24px] p-[20px] right-[24px] rounded-[32px] top-[636px]" data-name="Info Card">
      <Container14 />
    </div>
  );
}

export default function Component01Splash() {
  return (
    <div className="bg-white relative size-full" data-name="01-Splash">
      <div className="absolute flex items-center justify-center left-[calc(33.33%+13px)] size-[300px] top-[-65px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(102,163,255,0.2)] blur-[40px] rounded-[9999px] size-[300px]" data-name="Background Decorative Blobs" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[-74px] size-[300px] top-[539px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[rgba(104,152,249,0.2)] blur-[40px] rounded-[9999px] size-[300px]" data-name="Background Decorative Blobs" />
        </div>
      </div>
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[54px] items-start left-1/2 pt-[21px] top-0 w-[390px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <div className="absolute bottom-0 h-[34px] left-px w-[374px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Group2 />
      <Heading />
      <ContentArea />
      <InfoCard />
    </div>
  );
}