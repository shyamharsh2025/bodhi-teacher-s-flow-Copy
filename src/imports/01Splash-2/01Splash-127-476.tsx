import svgPaths from "./svg-4gxqxc30lf";

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

function Heading() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+0.5px)] top-[76px]" data-name="Heading 1">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[-0.4px] whitespace-nowrap">
        <p className="leading-[24px]">Timer</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#5a5b62] text-[14px] text-center tracking-[0.35px] w-[204.14px]">
        <p className="leading-[20px]">Math Assignment – Chapter 3</p>
      </div>
    </div>
  );
}

function TaskInfoLabel() {
  return (
    <div className="absolute bg-[#f0f0f9] content-stretch flex gap-[12px] items-center left-[58.92px] px-[24px] py-[10px] rounded-[9999px] top-[159px]" data-name="Task Info Label">
      <div className="bg-[#544bbb] rounded-[9999px] shadow-[0px_0px_8px_0px_rgba(84,75,187,0.4)] shrink-0 size-[8px]" data-name="Background+Shadow" />
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#544bbb] text-[16px] text-center w-[71.56px]">
        <p className="leading-[24px]">I’m Done</p>
      </div>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_8px_10px_rgba(84,75,187,0.3)] flex items-center justify-center py-[16px] relative rounded-[9999px] shrink-0 w-full" data-name="CTA Button">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 size-[11.667px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
        <g id="Container">
          <path d={svgPaths.p133c3580} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] w-[42.19px]">
          <p className="leading-[20px]">Pause</p>
        </div>
      </div>
    </div>
  );
}

function SmallerPauseButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Smaller Pause Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p9899234} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white tracking-[0.35px] whitespace-nowrap">
          <p className="leading-[20px]">Improve Focus</p>
        </div>
      </div>
    </div>
  );
}

function SmallerPauseButton1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[25px] py-[9px] relative rounded-[9999px] shrink-0" data-name="Smaller Pause Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[58px] items-center relative shrink-0">
      <SmallerPauseButton />
      <SmallerPauseButton1 />
    </div>
  );
}

function PrimaryControlCluster() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-center left-[55px] max-w-[280px] right-[55px] top-[545.13px]" data-name="Primary Control Cluster">
      <CtaButton />
      <Frame1 />
    </div>
  );
}

function Svg() {
  return (
    <div className="absolute left-[51px] size-[288px] top-[221px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 288 288">
        <g id="SVG">
          <path d={svgPaths.p2a534b80} id="Vector" stroke="var(--stroke-0, #DCDCE7)" strokeOpacity="0.3" strokeWidth="0.5" />
          <path d={svgPaths.p2a534b80} id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-medium h-[17px] justify-center leading-[0] relative shrink-0 text-[11px] text-[rgba(255,255,255,0.6)] text-center tracking-[1.1px] uppercase w-[178.75px]">
        <p className="leading-[16.5px]">YOU’VE BEEN FOCUSED FOR</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[20.5px] relative shrink-0 w-[178.75px]" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-light h-[60px] justify-center leading-[0] relative shrink-0 text-[60px] text-center text-white tracking-[-3px] w-[145.45px]">
        <p className="leading-[60px]">12:24</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Container">
          <path d={svgPaths.p177ece80} fill="var(--fill-0, white)" fillOpacity="0.7" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[87.16px]" data-name="Container">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-medium h-[17px] justify-center leading-[0] left-1/2 text-[11px] text-center text-white top-[7.5px] tracking-[0.275px] w-[87.16px]">
        <p className="leading-[16.5px]">Planned: 45 min</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(226,226,236,0.4)] content-stretch flex gap-[5.99px] items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Margin">
      <Overlay />
    </div>
  );
}

function TimeTextSubtext() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-[105.63px] top-[304.5px]" data-name="Time Text & Subtext">
      <Margin />
      <Container8 />
      <Margin1 />
    </div>
  );
}

export default function Component01Splash() {
  return (
    <div className="bg-[#544bbb] relative size-full" data-name="01-Splash">
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col h-[54px] items-start left-1/2 pt-[21px] top-0 w-[390px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <div className="absolute bottom-0 h-[34px] left-px w-[374px]" data-name="Home Indicator">
        <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 w-[144px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <Heading />
      <TaskInfoLabel />
      <PrimaryControlCluster />
      <div className="absolute inset-[221px_51px_303px_51px] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(45deg, rgba(84, 75, 187, 0.1) 0%, rgba(101, 76, 161, 0.1) 100%)" }} data-name="Ambient Glow Layer" />
      <div className="absolute backdrop-blur-[6px] bg-[rgba(255,255,255,0.1)] border border-[rgba(172,172,180,0.1)] border-solid inset-[223px_53px_305px_53px] rounded-[9999px]" data-name="Glassmorphism Ring Container" />
      <Svg />
      <TimeTextSubtext />
    </div>
  );
}