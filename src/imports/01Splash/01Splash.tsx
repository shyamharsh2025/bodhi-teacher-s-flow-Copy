import svgPaths from "./svg-ptptpnugyb";

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
        <p className="leading-[22.5px]">Set the right state for your best work.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[264px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#acacb4] text-[16px] w-full">
        <p className="leading-[normal]">Task Name</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="relative rounded-[32px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute bg-[#f0f0f9] inset-0 pointer-events-none rounded-[32px]" />
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[18px] pt-[17px] px-[20px] relative size-full">
          <Container2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Container">
          <path d={svgPaths.p256e1340} fill="var(--fill-0, #544BBB)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[48px] shrink-0 size-[56px]" data-name="Overlay+Shadow">
      <div aria-hidden="true" className="absolute bg-[rgba(88,64,212,0.05)] inset-0 pointer-events-none rounded-[48px]" />
      <Container3 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[-1px]" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[17px] whitespace-nowrap">
        <p className="leading-[25.5px]">45 minutes</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-[-0.38px] top-[25.88px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#5a5b62] text-[13px] whitespace-nowrap">
        <p className="leading-[19.5px]">Good fit for deep focus</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <Heading1 />
      <Container6 />
    </div>
  );
}

function Container7() {
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
    <div className="absolute bg-white content-stretch drop-shadow-[0px_10px_20px_rgba(84,75,187,0.2)] flex gap-[20px] items-center left-0 p-[20px] right-0 rounded-[16px] top-[35.5px]" data-name="Button - Option Card 2: Focus Session">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.16)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <OverlayShadow />
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Container5 />
      </div>
      <Container7 />
    </div>
  );
}

function SuggestedTimeSection() {
  return (
    <div className="h-[125.5px] relative shrink-0 w-full" data-name="Suggested Time Section">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-bold h-[20px] justify-center leading-[0] left-[4px] text-[13px] text-[rgba(45,46,52,0.6)] top-[9px] tracking-[1.3px] w-[129.84px]">
        <p className="leading-[19.5px]">SUGGESTED TIME</p>
      </div>
      <ButtonOptionCard2FocusSession />
    </div>
  );
}

function InterestItem() {
  return (
    <div className="bg-[#f0f0f9] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0" data-name="Interest item">
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d2e34] text-[14px] whitespace-nowrap">30 Min</p>
    </div>
  );
}

function InterestItem1() {
  return (
    <div className="bg-[rgba(84,75,187,0.1)] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0" data-name="Interest item">
      <div aria-hidden="true" className="absolute border border-[#5840d4] border-solid inset-0 pointer-events-none rounded-[1000px]" />
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#544bbb] text-[14px] whitespace-nowrap">45 Min</p>
    </div>
  );
}

function InterestItem2() {
  return (
    <div className="bg-[#f0f0f9] content-stretch flex items-center px-[12px] py-[8px] relative rounded-[1000px] shrink-0" data-name="Interest item">
      <p className="font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2d2e34] text-[14px] whitespace-nowrap">60 Min</p>
    </div>
  );
}

function About() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="About">
      <InterestItem />
      <InterestItem1 />
      <InterestItem2 />
    </div>
  );
}

function InterestsContent() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[680px] relative shrink-0 w-[326px]" data-name="Interests content">
      <About />
    </div>
  );
}

function OptionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Options List">
      <Input />
      <SuggestedTimeSection />
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[20px] justify-center leading-[0] relative shrink-0 text-[13px] text-[rgba(45,46,52,0.6)] tracking-[1.3px] uppercase w-[129.84px]">
        <p className="leading-[19.5px]">Change TIME</p>
      </div>
      <InterestsContent />
    </div>
  );
}

function ContentArea() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[10px] items-start left-1/2 pb-[47.25px] pt-[16px] px-[32px] top-[calc(50%+0.13px)] w-[390px]" data-name="Content Area">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[24px] tracking-[-0.65px] w-full">
        <p className="leading-[32.5px]">How do you want to start?</p>
      </div>
      <Container1 />
      <OptionsList />
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
    </div>
  );
}