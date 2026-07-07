import svgPaths from "./svg-ax4ioyn4zq";
import imgImage17 from "./33c81ac0148d41512ccbf9408cc3b4f4bde8048d.png";
import imgAb6AXuCYxzSpsBUd2DJ4OtxD1IwiObSUb1V7YQIhaBu1Z3P6C7KgXs2PaQrcdwlyR90Ayn12D65T1NQ6PLxaBsm0T6XT4ApUu7JquD9DCwPZiShxrpi5MeiXes2OSeDEwm0GmAc9TjSc0QJ4OFCbnc9WxvwChGqVXmNkkGtfHsTwvQdIdC1Nc1Iryc9GzBa8DKoor1Fg0Mb6ZWVgOe0JTrFgQ3TtuaOZMk0GtGy3MnxXr0YllIjng6ZbAFsvpFGu3NjA28Fno5S from "./85c372723de88a0914f6a74eac3fdd55b305f805.png";
import imgOverlayShadow from "./680b9473c856efcb97e710b14b817e94ed6c94f3.png";
import imgOverlayShadow1 from "./a284d845041011ceb06c656399145b8c5c74bc5d.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[18px] whitespace-nowrap">
        <p className="leading-[28px]">New For You</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[10px] text-center tracking-[0.25px] uppercase w-[47.67px]">
        <p className="leading-[15px]">View All</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Container1 />
    </div>
  );
}

function Background() {
  return (
    <div className="h-[160px] relative shrink-0 w-full z-[2]" style={{ backgroundImage: "linear-gradient(140.729deg, rgb(154, 148, 255) 0%, rgb(101, 76, 161) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute backdrop-blur-[2px] bg-[rgba(255,255,255,0.1)] inset-0" data-name="Overlay+OverlayBlur" />
        <div className="h-[314px] relative shrink-0 w-[343px]" data-name="image 17">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[18px] w-full">
        <p className="leading-[28px]">Chakra Reset Series</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#654ca1] text-[12px] tracking-[0.3px] uppercase w-full">
        <p className="leading-[16px]">Series • 7 Session</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <Container4 />
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center py-[12px] relative rounded-[9999px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)" }} data-name="Button">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f5f1ff] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Begin</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Container3 />
        <Button1 />
      </div>
    </div>
  );
}

function RecommendedCard() {
  return (
    <div className="bg-white h-[302px] relative rounded-[16px] shrink-0 w-[342px]" data-name="Recommended Card 1">
      <div className="content-stretch flex flex-col isolate items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8e7f1] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_30px_0px_rgba(84,75,187,0.3)]" />
    </div>
  );
}

function ForYouRightNowSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15px] items-center left-[25px] right-[23px] shadow-[0px_10px_20px_0px_rgba(84,75,187,0.3)] top-[638px]" data-name="For You Right Now Section">
      <Container />
      <RecommendedCard />
    </div>
  );
}

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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[24px] tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">Hey Anusha</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-medium h-[20px] justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[14px] tracking-[-0.43px] w-[160.39px]">
        <p className="leading-[22px]">Good Morning</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[160.39px]" data-name="Container">
      <Heading />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p164b49c0} fill="var(--fill-0, #5840D4)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[40px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.6)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container8 />
    </div>
  );
}

function Ab6AXuCYxzSpsBUd2DJ4OtxD1IwiObSUb1V7YQIhaBu1Z3P6C7KgXs2PaQrcdwlyR90Ayn12D65T1NQ6PLxaBsm0T6XT4ApUu7JquD9DCwPZiShxrpi5MeiXes2OSeDEwm0GmAc9TjSc0QJ4OFCbnc9WxvwChGqVXmNkkGtfHsTwvQdIdC1Nc1Iryc9GzBa8DKoor1Fg0Mb6ZWVgOe0JTrFgQ3TtuaOZMk0GtGy3MnxXr0YllIjng6ZbAFsvpFGu3NjA28Fno5S() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="AB6AXuC-yxz_SpsBUd2dJ4otxD1IWIObSUb1v7yQIhaBu1Z3p6C7KgXS2PaQrcdwlyR90AYN12_D6_5t1n-Q6PLxaBsm0t6X_t4ApUu7Jqu-D9dCwP_ziShxrpi5meiXes2OSeDEwm0gmAC9TjSc0qJ4oFCbnc9WxvwChGqVXmNkkGtfHSTwvQDIdC1NC1Iryc9GZBa8DKoor1FG0Mb6zWVgOE0jTRFgQ3TtuaO-zMK0GTGy3mnxXR0YllIjng6ZbAFsvpFGu3njA28FNO5s">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgAb6AXuCYxzSpsBUd2DJ4OtxD1IwiObSUb1V7YQIhaBu1Z3P6C7KgXs2PaQrcdwlyR90Ayn12D65T1NQ6PLxaBsm0T6XT4ApUu7JquD9DCwPZiShxrpi5MeiXes2OSeDEwm0GmAc9TjSc0QJ4OFCbnc9WxvwChGqVXmNkkGtfHsTwvQdIdC1Nc1Iryc9GzBa8DKoor1Fg0Mb6ZWVgOe0JTrFgQ3TtuaOZMk0GtGy3MnxXr0YllIjng6ZbAFsvpFGu3NjA28Fno5S} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[40px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Ab6AXuCYxzSpsBUd2DJ4OtxD1IwiObSUb1V7YQIhaBu1Z3P6C7KgXs2PaQrcdwlyR90Ayn12D65T1NQ6PLxaBsm0T6XT4ApUu7JquD9DCwPZiShxrpi5MeiXes2OSeDEwm0GmAc9TjSc0QJ4OFCbnc9WxvwChGqVXmNkkGtfHsTwvQdIdC1Nc1Iryc9GzBa8DKoor1Fg0Mb6ZWVgOe0JTrFgQ3TtuaOZMk0GtGy3MnxXr0YllIjng6ZbAFsvpFGu3NjA28Fno5S />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(88,64,212,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button2 />
      <Border />
    </div>
  );
}

function HeaderTopAppBar() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 px-[24px] py-[16px] right-0 top-[44px]" data-name="Header - Top App Bar">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[28px] justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[18px] w-[104.88px]">
        <p className="leading-[28px]">All Sessions</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Button">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[#544bbb] text-[10px] text-center tracking-[0.25px] uppercase w-[47.67px]">
        <p className="leading-[15px]">View All</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Button3 />
    </div>
  );
}

function OverlayShadow() {
  return (
    <div className="pointer-events-none relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay+Shadow">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[48px] size-full" src={imgOverlayShadow} />
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(88,64,212,0.1)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">FOCUS</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <OverlayShadow />
      <Overlay />
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold h-[17px] justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[13px] w-[93.45px]">
        <p className="leading-[16.25px]">Root Chakra</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#5a5b62] text-[9px] uppercase whitespace-nowrap">
        <p className="leading-[13.5px]">15 min</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[9px] whitespace-nowrap">
        <p className="leading-[13.5px]">75%</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-0 top-[24.25px]" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#e8e7f1] h-[6px] left-0 overflow-clip right-0 rounded-[9999px] top-[41.75px]" data-name="Background">
      <div className="absolute bottom-0 left-0 right-1/4 rounded-[9999px] top-0" style={{ backgroundImage: "linear-gradient(152.195deg, rgb(88, 64, 212) 3.9747%, rgb(0, 153, 191) 111.33%)" }} data-name="Background" />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[47.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading4 />
        <Container13 />
        <Background1 />
      </div>
    </div>
  );
}

function PracticeCard() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[150px] items-start min-h-[100px] p-[17px] relative rounded-[16px] shrink-0 w-[170px]" data-name="Practice Card 1">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_20px_0px_rgba(84,75,187,0.3)]" />
      <Margin />
      <Container12 />
    </div>
  );
}

function OverlayShadow1() {
  return (
    <div className="pointer-events-none relative rounded-[48px] shrink-0 size-[48px]" data-name="Overlay+Shadow">
      <div className="absolute inset-0 overflow-hidden rounded-[48px]">
        <img alt="" className="absolute h-[178.31%] left-[0.61%] max-w-none top-[-66.76%] w-full" src={imgOverlayShadow1} />
      </div>
      <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(88,64,212,0.1)] content-stretch flex flex-col items-start px-[6px] py-[2px] relative rounded-[12px] shrink-0" data-name="Overlay">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[8px] tracking-[-0.4px] uppercase whitespace-nowrap">
        <p className="leading-[12px]">MEDITATE</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <OverlayShadow1 />
      <Overlay1 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative size-full">
        <Container16 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-0" data-name="Heading 4">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[13px] whitespace-nowrap">
        <p className="leading-[16.25px]">Sacral Chakra</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold h-[14px] justify-center leading-[0] relative shrink-0 text-[#5a5b62] text-[9px] uppercase w-[28.83px]">
        <p className="leading-[13.5px]">10 min</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold h-[14px] justify-center leading-[0] relative shrink-0 text-[#5840d4] text-[9px] w-[21.45px]">
        <p className="leading-[13.5px]">30%</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-0 top-[24.25px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#e8e7f1] h-[6px] left-0 overflow-clip right-0 rounded-[9999px] top-[41.75px]" data-name="Background">
      <div className="absolute inset-[0_70.01%_0_0] rounded-[9999px]" style={{ backgroundImage: "linear-gradient(127.173deg, rgb(88, 64, 212) 3.9747%, rgb(0, 153, 191) 111.33%)" }} data-name="Background" />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[47.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Heading5 />
        <Container18 />
        <Background2 />
      </div>
    </div>
  );
}

function PracticeCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[150px] items-start min-h-[100px] p-[17px] relative rounded-[16px] shrink-0 w-[170px]" data-name="Practice Card 2">
      <div aria-hidden="true" className="absolute border border-[rgba(232,231,241,0.6)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_20px_0px_rgba(84,75,187,0.3)]" />
      <Margin1 />
      <Container17 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <PracticeCard />
      <PracticeCard1 />
    </div>
  );
}

function MyPracticeSectionRefined() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[12px] h-[186px] items-start left-[calc(50%+0.5px)] top-[432px] w-[357px]" data-name="My Practice Section Refined">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Section2DopaMeter() {
  return <div className="absolute h-[120px] left-[17px] min-h-[120px] right-[16px] rounded-[16px] shadow-[0px_10px_20px_0px_rgba(84,75,187,0.3)] top-[292px]" style={{ backgroundImage: "linear-gradient(108.358deg, rgb(88, 64, 212) 3.9747%, rgb(0, 153, 191) 111.33%)" }} data-name="Section - 2. DOPA METER" />;
}

function Group1() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[-12.14%_-6.25%_-9.24%_-6.25%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.2 64">
          <g id="Group 99">
            <path d={svgPaths.p3a95ec00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="12.8" />
            <path d={svgPaths.p17460dd8} id="Vector_2" stroke="var(--stroke-0, #5840D4)" strokeLinecap="round" strokeWidth="7" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(66.67%+7px)] top-[345px]">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter',sans-serif] font-bold h-[36px] justify-center leading-[0] left-[calc(66.67%+7px)] text-[26px] text-white top-[363px] w-[61.41px]">
        <p className="leading-[36px]">78%</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[calc(33.33%+113px)] top-[calc(50%-142.44px)]">
      <div className="absolute flex inset-[33.12%_11.44%_61.61%_62.31%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
          <Group1 />
        </div>
      </div>
      <Group />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-[rgba(255,255,255,0.6)] tracking-[1px] uppercase w-[86.2px]">
        <p className="leading-[15px]">DOPa Meter</p>
      </div>
    </div>
  );
}

function Shadow() {
  return (
    <div className="content-stretch flex flex-col items-start relative shadow-[0px_0px_12px_0px_rgba(255,255,255,0.4)] shrink-0 w-full" data-name="Shadow">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
        <p className="leading-[28px]">Feeling Good</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.4)] content-stretch flex flex-col h-[20px] items-center justify-center px-[20px] py-[10px] relative rounded-[9999px] shrink-0 w-[83px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white uppercase whitespace-nowrap">
        <p className="leading-[16px]">CHECK IN</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[38px] top-[318px] w-[131px]" data-name="Container">
      <Heading6 />
      <Shadow />
      <Container22 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[17px] top-[292px]">
      <Section2DopaMeter />
      <Group2 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[18px] left-[calc(50%+0.5px)] top-[calc(50%-266px)] w-[127px]" data-name="Container" />;
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#2d2e34] text-[14px] tracking-[-0.35px] whitespace-nowrap">
        <p className="leading-[20px]">12 Day Streak</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-center left-[15px] top-[calc(50%-40px)] w-[124px]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.2px]">
        <p className="leading-[12px]">S</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay2() {
  return (
    <div className="bg-[rgba(88,64,212,0.2)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <Container28 />
    </div>
  );
}

function PastDays() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[16px] top-[8px]" data-name="Past Days">
      <Margin2 />
      <Overlay2 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[7.39px]">
        <p className="leading-[12px]">M</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="bg-[rgba(88,64,212,0.6)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <Container30 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[56px] top-[8px]" data-name="Container">
      <Margin3 />
      <Overlay3 />
    </div>
  );
}

function Margin4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.28px]">
        <p className="leading-[12px]">T</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay4() {
  return (
    <div className="bg-[rgba(88,64,212,0.6)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <Container32 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[96px] top-[8px]" data-name="Container">
      <Margin4 />
      <Overlay4 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[8.17px]">
        <p className="leading-[12px]">W</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay5() {
  return (
    <div className="bg-[rgba(88,64,212,0.6)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <Container34 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[136px] top-[8px]" data-name="Container">
      <Margin5 />
      <Overlay5 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.28px]">
        <p className="leading-[12px]">T</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Overlay6() {
  return (
    <div className="bg-[rgba(88,64,212,0.6)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[24px]" data-name="Overlay">
      <Container36 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[176px] top-[8px]" data-name="Container">
      <Margin6 />
      <Overlay6 />
    </div>
  );
}

function Margin7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[#5840d4] text-[8px] tracking-[0.4px] uppercase w-[29.56px]">
        <p className="leading-[12px]">Today</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[15px] relative shrink-0 w-[12px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
        <g id="Container">
          <path d={svgPaths.p3b1e9f80} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Background3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" style={{ backgroundImage: "linear-gradient(45deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)" }} data-name="Background">
      <div className="-translate-x-1/2 absolute bg-[rgba(255,255,255,0)] left-1/2 rounded-[9999px] shadow-[0px_0px_0px_4px_rgba(74,71,210,0.1),0px_4px_12px_0px_rgba(74,71,210,0.4)] size-[36px] top-0" data-name="Overlay+Shadow" />
      <div className="absolute bg-[rgba(88,64,212,0.2)] blur-[6px] inset-0 rounded-[9999px]" data-name="Overlay+Blur" />
      <Container37 />
    </div>
  );
}

function Today() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[216px] top-[8px]" data-name="TODAY">
      <Margin7 />
      <Background3 />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.2px]">
        <p className="leading-[12px]">S</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 h-[10px] ml-[8px] mt-[7px] relative row-1 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container38 />
      <div className="border-2 border-[#bababa] border-solid col-1 ml-0 mt-0 rounded-[9999px] row-1 size-[24px]" data-name="Border" />
    </div>
  );
}

function FutureDays() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[268px] opacity-40 top-[8px]" data-name="Future Days">
      <Margin8 />
      <Group4 />
    </div>
  );
}

function Margin9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.2px]">
        <p className="leading-[12px]">S</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-1 h-[10px] ml-[8px] mt-[7px] relative row-1 w-[8px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g id="Container">
          <path d={svgPaths.pbe34500} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Container40 />
      <div className="border-2 border-[#bababa] border-solid col-1 ml-0 mt-0 rounded-[9999px] row-1 size-[24px]" data-name="Border" />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[308px] opacity-40 top-[8px]" data-name="Container">
      <Margin9 />
      <Group5 />
    </div>
  );
}

function Margin10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[7.39px]">
        <p className="leading-[12px]">M</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[348px] opacity-40 top-[8px]" data-name="Container">
      <Margin10 />
      <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[#dcdce7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.28px]">
        <p className="leading-[12px]">T</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[388px] opacity-30 top-[8px]" data-name="Container">
      <Margin11 />
      <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[#dcdce7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[8.17px]">
        <p className="leading-[12px]">W</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[428px] opacity-20 top-[8px]" data-name="Container">
      <Margin12 />
      <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[#dcdce7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold h-[12px] justify-center leading-[0] not-italic relative shrink-0 text-[8px] text-[rgba(90,91,98,0.4)] uppercase w-[5.28px]">
        <p className="leading-[12px]">T</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bottom-[8px] content-stretch flex flex-col items-center left-[468px] opacity-10 top-[8px]" data-name="Container">
      <Margin13 />
      <div className="relative rounded-[9999px] shrink-0 size-[24px]" data-name="Border">
        <div aria-hidden="true" className="absolute border-2 border-[#dcdce7] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[70px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <PastDays />
      <Container29 />
      <Container31 />
      <Container33 />
      <Container35 />
      <Today />
      <FutureDays />
      <Container39 />
      <Container41 />
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[-1px] right-0 rounded-[16px] top-[41px]" data-name="Container">
      <Container27 />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_4px_13px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[13.333px] left-[315.45px] top-[14.96px] w-[14.378px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3775 13.3333">
        <g id="Frame 120">
          <path d={svgPaths.p1eece00} fill="var(--fill-0, #544BBB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents h-[27.256px] left-[308px] top-[7px] w-[27.289px]">
      <Frame1 />
    </div>
  );
}

function Section1StreakSection() {
  return (
    <div className="-translate-y-1/2 absolute bg-white border border-[#e8e7f1] border-solid h-[120px] left-[17px] right-[17px] rounded-[16px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)] top-[calc(50%-288px)]" data-name="Section - 1. STREAK SECTION">
      <Container24 />
      <Container26 />
      <div className="absolute bg-gradient-to-r bottom-[7px] from-[60%] from-white left-[3px] rounded-bl-[16px] rounded-tl-[16px] to-[rgba(255,255,255,0)] top-[41px] w-[32px]" data-name="Gradient Masks" />
      <div className="absolute bg-gradient-to-l bottom-[7px] from-[60%] from-white right-0 rounded-br-[16px] rounded-tr-[16px] to-[rgba(255,255,255,0)] top-[41px] w-[32px]" data-name="Gradient" />
      <Group7 />
    </div>
  );
}

function Group3() {
  return (
    <div className="-translate-y-1/2 absolute contents left-[17px] right-[17px] top-[calc(50%-288px)]">
      <Section1StreakSection />
    </div>
  );
}

export default function ReturnUserHome() {
  return (
    <div className="bg-white relative size-full" data-name="Return User Home">
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
      <ForYouRightNowSection />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[54px] items-start left-1/2 pt-[21px] top-0 w-[390px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <HeaderTopAppBar />
      <MyPracticeSectionRefined />
      <Group6 />
      <Container23 />
      <Group3 />
    </div>
  );
}