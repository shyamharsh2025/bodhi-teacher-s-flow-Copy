import {
  ArrowLeft,
  BarChart3,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Sparkles,
  TrendingDown,
  TrendingUp,
  Zap,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

type Mood =
  | 'Anxious'
  | 'Confused'
  | 'Grounded'
  | 'Tired'
  | 'Inspired'
  | 'Stressed'
  | 'Overwhelmed'
  | 'Frustrated'
  | 'Lonely'
  | 'Low';

type Recommendation = {
  title: string;
  description: string;
  boost: string;
  route: string;
};

const primaryMoods: Array<{ label: Mood; emoji: string }> = [
  { label: 'Anxious', emoji: '😟' },
  { label: 'Confused', emoji: '🤔' },
  { label: 'Grounded', emoji: '☺️' },
  { label: 'Tired', emoji: '😔' },
  { label: 'Inspired', emoji: '🤩' },
];

const additionalMoods: Array<{ label: Mood; emoji: string }> = [
  { label: 'Stressed', emoji: '😣' },
  { label: 'Overwhelmed', emoji: '🤯' },
  { label: 'Frustrated', emoji: '😠' },
  { label: 'Lonely', emoji: '🙁' },
  { label: 'Low', emoji: '😞' },
];

const allMoods = [...primaryMoods, ...additionalMoods];
const primaryMoodLabels = new Set(primaryMoods.map((mood) => mood.label));

const chakraRecommendationRoutes: Partial<Record<string, string>> = {
  'Ground Chakra Meditation': '/home/chakra-meditation/root',
  'Root Chakra Meditation': '/home/chakra-meditation/root',
  'Sacral Chakra Meditation': '/home/chakra-meditation/sacral',
  'Solar Plexus Chakra Meditation': '/home/chakra-meditation/solar-plexus',
  'Heart Chakra Meditation': '/home/chakra-meditation/heart',
  'Throat Chakra Meditation': '/home/chakra-meditation/throat',
  'Third Eye Chakra Meditation': '/home/chakra-meditation/third-eye',
  'Crown Chakra Meditation': '/home/chakra-meditation/crown',
};

const recommendations: Record<Mood, Recommendation> = {
  Anxious: {
    title: 'Ground Chakra Meditation',
    description: 'Anchor your body and settle your nervous system.',
    boost: '+10% calm boost',
    route: '/home/chakra-meditation/root',
  },
  Confused: {
    title: 'Third Eye Chakra Meditation',
    description: 'Clear mental fog and return to one steady direction.',
    boost: '+9% clarity boost',
    route: '/home/chakra-meditation/third-eye',
  },
  Grounded: {
    title: '10-min Focus Sprint',
    description: 'Use this calm state to enter deep, steady focus.',
    boost: '+12% focus boost',
    route: '/home/focus-sprint',
  },
  Tired: {
    title: 'Breathework',
    description: 'Reset your energy with a short guided breath practice.',
    boost: '+8% energy boost',
    route: '/home/breathwork-prep',
  },
  Inspired: {
    title: 'Journaling',
    description: 'Capture the thought while your mind feels open.',
    boost: '+11% insight boost',
    route: '/home/explore/thought-bank/write',
  },
  Stressed: {
    title: 'Breathework',
    description: 'Release pressure with a short nervous-system reset.',
    boost: '+10% calm boost',
    route: '/home/breathwork-prep',
  },
  Overwhelmed: {
    title: 'Ground Chakra Meditation',
    description: 'Return to your body before choosing the next step.',
    boost: '+11% grounding boost',
    route: '/home/chakra-meditation/root',
  },
  Frustrated: {
    title: 'Breathework',
    description: 'Clear the charge before moving back into action.',
    boost: '+9% reset boost',
    route: '/home/breathwork-prep',
  },
  Lonely: {
    title: 'Journaling',
    description: 'Name what you need and feel a little more held.',
    boost: '+8% clarity boost',
    route: '/home/explore/thought-bank/write',
  },
  Low: {
    title: 'Breathework',
    description: 'Start gently and bring a little energy back online.',
    boost: '+8% energy boost',
    route: '/home/breathwork-prep',
  },
};

function getRecommendationRoute(recommendation: Recommendation) {
  return chakraRecommendationRoutes[recommendation.title] ?? recommendation.route;
}

const neutralDopameterScore = 68;

const dopameterStates: Record<
  Mood,
  {
    delta: number;
    feeling: string;
  }
> = {
  Anxious: {
    delta: -15,
    feeling: 'Feeling Anxious',
  },
  Confused: {
    delta: -10,
    feeling: 'Feeling Confused',
  },
  Grounded: {
    delta: 10,
    feeling: 'Feeling Grounded',
  },
  Tired: {
    delta: -15,
    feeling: 'Feeling Tired',
  },
  Inspired: {
    delta: 15,
    feeling: 'Feeling Inspired',
  },
  Stressed: {
    delta: -15,
    feeling: 'Feeling Stressed',
  },
  Overwhelmed: {
    delta: -15,
    feeling: 'Feeling Overwhelmed',
  },
  Frustrated: {
    delta: -10,
    feeling: 'Feeling Frustrated',
  },
  Lonely: {
    delta: -10,
    feeling: 'Feeling Lonely',
  },
  Low: {
    delta: -15,
    feeling: 'Feeling Low',
  },
};

const week = [
  { day: 'Mo', value: 62, color: '#F5A623' },
  { day: 'Tu', value: 71, color: '#5840D4' },
  { day: 'We', value: 48, color: '#F5A623' },
  { day: 'Th', value: 82, color: '#2FA34A' },
  { day: 'Fr', value: 78, color: '#5840D4', selected: true },
  { day: 'Sa', value: null, color: '#D8D7E2', future: true },
  { day: 'Su', value: null, color: '#D8D7E2', future: true },
];

export default function DopaMeterScreen() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<Mood>('Grounded');
  const [moodCardExpanded, setMoodCardExpanded] = useState(false);
  const recommendation = recommendations[selectedMood] ?? recommendations.Grounded;
  const dopameterState = dopameterStates[selectedMood] ?? dopameterStates.Grounded;
  const recommendationRoute = getRecommendationRoute(recommendation);
  const score = neutralDopameterScore + dopameterState.delta;
  const trendIsPositive = dopameterState.delta > 0;
  const trendText = `${trendIsPositive ? '+' : ''}${dopameterState.delta} on Dopameter`;
  const visibleMoods = moodCardExpanded ? allMoods : primaryMoods;

  const meter = useMemo(() => {
    const centerX = 172.5;
    const centerY = 202;
    const radius = 145;
    const startAngle = 180;
    const totalSweep = 180;
    const activeSweep = totalSweep * (score / 100);
    const endAngle = startAngle + activeSweep;
    const trackEndAngle = startAngle + totalSweep;
    const toPoint = (angle: number) => {
      const rad = (angle * Math.PI) / 180;
      return {
        x: centerX + radius * Math.cos(rad),
        y: centerY + radius * Math.sin(rad),
      };
    };
    const start = toPoint(startAngle);
    const end = toPoint(endAngle);
    const trackEnd = toPoint(trackEndAngle);
    const path = (from: typeof start, to: typeof start) =>
      `M ${from.x.toFixed(2)} ${from.y.toFixed(2)} A ${radius} ${radius} 0 0 1 ${to.x.toFixed(2)} ${to.y.toFixed(2)}`;

    return {
      centerX,
      centerY,
      radius,
      start,
      end,
      trackEnd,
      trackPath: path(start, trackEnd),
      activePath: path(start, end),
    };
  }, [score]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white pb-32">
      <div className="absolute top-[-70px] left-[38%] h-[280px] w-[280px] rounded-full bg-[rgba(102,163,255,0.14)] blur-[48px] pointer-events-none" />
      <div className="absolute top-[116px] left-[-40px] h-[430px] w-[480px] bg-[radial-gradient(ellipse_at_50%_36%,rgba(88,64,212,0.13)_0%,rgba(175,167,255,0.08)_36%,rgba(255,255,255,0)_72%)] pointer-events-none" />
      <div className="absolute top-[380px] left-[-90px] h-[300px] w-[300px] rounded-full bg-[rgba(104,152,249,0.12)] blur-[52px] pointer-events-none" />
      <div className="absolute top-[720px] right-[-120px] h-[280px] w-[280px] rounded-full bg-[rgba(154,148,255,0.12)] blur-[52px] pointer-events-none" />

      <div className="relative z-10">
        <StatusBar />

        <header className="grid grid-cols-[48px_1fr_48px] items-center gap-3 px-6 pt-4 pb-3">
          <IconButton label="Go back" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
          </IconButton>

          <div className="text-center">
            <h1 className="text-[24px] font-bold leading-8 text-[#10122B]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Dopameter
            </h1>
            <p className="mt-1 text-[14px] font-medium leading-5 text-[#5A5B62]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Track your mood. Boost your momentum.
            </p>
          </div>

          <IconButton label="View analytics">
            <BarChart3 className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
          </IconButton>
        </header>

        <main className="px-6">
          <section className="relative flex flex-col items-center pt-1 pb-0">
            <div className="absolute top-6 h-[270px] w-[350px] rounded-full bg-[rgba(88,64,212,0.11)] blur-[58px]" />
            <div className="absolute top-[112px] h-[150px] w-[365px] rounded-full bg-[rgba(0,153,191,0.075)] blur-[44px]" />
            <div className="absolute inset-x-[-60px] bottom-[-18px] h-[150px] rounded-full bg-[radial-gradient(ellipse_at_50%_45%,rgba(236,232,255,0.36)_0%,rgba(191,216,255,0.14)_42%,rgba(255,255,255,0)_74%)] blur-[30px]" />
            <Sparkles className="absolute right-7 top-[58px] h-4 w-4 text-[#AFA7FF]/45" strokeWidth={2} />
            <Sparkles className="absolute left-8 top-[154px] h-3.5 w-3.5 text-[#BFD8FF]/55" strokeWidth={2} />

            <div className="relative h-[270px] w-full max-w-[345px] overflow-visible">
              <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 345 270" fill="none">
                <defs>
                  <linearGradient id="dopameterArc" x1="24" y1="200" x2="314" y2="62" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F2C7FF" />
                    <stop offset="0.3" stopColor="#B796FF" />
                    <stop offset="0.62" stopColor="#745BF2" />
                    <stop offset="1" stopColor="#4A32D4" />
                  </linearGradient>
                  <linearGradient id="dopameterTrack" x1="29" y1="203" x2="316" y2="72" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F2DEFF" stopOpacity="0.82" />
                    <stop offset="0.55" stopColor="#E6E3FF" stopOpacity="0.72" />
                    <stop offset="1" stopColor="#DCEBFF" stopOpacity="0.68" />
                  </linearGradient>
                  <radialGradient id="dopameterKnob" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7 5) rotate(58) scale(15)">
                    <stop stopColor="#FFFFFF" />
                    <stop offset="0.5" stopColor="#A195FF" />
                    <stop offset="1" stopColor="#5840D4" />
                  </radialGradient>
                  <filter id="dopameterArcGlow" x="-30" y="-16" width="405" height="268" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="0 0 0 0 0.345 0 0 0 0 0.251 0 0 0 0 0.831 0 0 0 0.58 0"
                    />
                    <feBlend in="SourceGraphic" mode="normal" />
                  </filter>
                  <filter id="dopameterRailGlow" x="-42" y="-32" width="429" height="294" filterUnits="userSpaceOnUse">
                    <feGaussianBlur stdDeviation="9" result="blur" />
                    <feColorMatrix
                      in="blur"
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 0.972 0 0 0 0 1 0 0 0 1 0"
                    />
                    <feBlend in="SourceGraphic" mode="normal" />
                  </filter>
                </defs>

                {[205, 230, 270, 310, 335].map((angle) => {
                  const outer = {
                    x: meter.centerX + (meter.radius + 36) * Math.cos((angle * Math.PI) / 180),
                    y: meter.centerY + (meter.radius + 36) * Math.sin((angle * Math.PI) / 180),
                  };
                  const inner = {
                    x: meter.centerX + (meter.radius + 26) * Math.cos((angle * Math.PI) / 180),
                    y: meter.centerY + (meter.radius + 26) * Math.sin((angle * Math.PI) / 180),
                  };
                  return (
                    <line
                      key={angle}
                      x1={outer.x.toFixed(2)}
                      y1={outer.y.toFixed(2)}
                      x2={inner.x.toFixed(2)}
                      y2={inner.y.toFixed(2)}
                      stroke="rgba(88,64,212,0.34)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  );
                })}
                <path
                  d={meter.trackPath}
                  stroke="rgba(255,255,255,0.78)"
                  strokeWidth="36"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.9"
                  filter="url(#dopameterRailGlow)"
                />
                <path
                  d={meter.trackPath}
                  stroke="rgba(255,255,255,0.62)"
                  strokeWidth="31"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.88"
                />
                <path
                  d={meter.trackPath}
                  stroke="url(#dopameterTrack)"
                  strokeWidth="28"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d={meter.activePath}
                  stroke="url(#dopameterArc)"
                  strokeWidth="36"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.28"
                  filter="url(#dopameterArcGlow)"
                />
                <path
                  key={`arc-${selectedMood}`}
                  d={meter.activePath}
                  stroke="url(#dopameterArc)"
                  strokeWidth="28"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div
                key={`knob-${selectedMood}`}
                className="absolute z-20 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0px_7px_15px_rgba(84,75,187,0.30),0px_0px_14px_rgba(255,255,255,0.94)] ring-[2px] ring-white/75"
                style={{
                  left: `${(meter.end.x / 345) * 100}%`,
                  top: `${(meter.end.y / 270) * 100}%`,
                }}
              >
                <div className="absolute inset-[8px] rounded-full bg-[radial-gradient(circle_at_35%_25%,#FFFFFF_0%,#9C8DFF_45%,#5840D4_100%)] shadow-[inset_0px_2px_5px_rgba(255,255,255,0.42)]" />
                <div className="absolute left-[11px] top-[9px] h-2 w-2 rounded-full bg-white/80 blur-[1px]" />
              </div>

              <div
                className="absolute inset-x-0 top-[104px] flex flex-col items-center text-center"
              >
                <div className="absolute top-1/2 h-[118px] w-[268px] -translate-y-1/2 rounded-full bg-white/60 blur-[30px]" />
                <div className="relative flex items-start justify-center text-[#0E1254]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <span className="text-[52px] font-bold leading-[52px] tracking-normal">{score}</span>
                  <span className="mt-2 text-[24px] font-bold leading-7">%</span>
                </div>
                <div className="relative mt-2 text-[18px] font-bold leading-7 text-[#5840D4]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {dopameterState.feeling}
                </div>
                <div className="relative mt-1 flex items-center gap-1.5 text-[12px] font-semibold leading-4 text-[#5A5B62]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {trendIsPositive ? (
                    <TrendingUp className="h-3.5 w-3.5 text-[#2FA34A]" strokeWidth={2.4} />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5 text-[#D9785F]" strokeWidth={2.4} />
                  )}
                  {trendText}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-4 mt-[-6px] rounded-[22px] border border-[rgba(232,231,241,0.86)] bg-white/94 p-3.5 shadow-[0px_8px_24px_0px_rgba(84,75,187,0.08)]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-[18px] font-bold leading-7 text-[#2D2E34]" style={{ fontFamily: 'Inter, sans-serif' }}>
                How are you feeling?
              </h2>
              <button
                onClick={() => {
                  setMoodCardExpanded((expanded) => {
                    const nextExpanded = !expanded;
                    if (!nextExpanded && !primaryMoodLabels.has(selectedMood)) {
                      setSelectedMood('Grounded');
                    }
                    return nextExpanded;
                  });
                }}
                className="flex h-8 items-center gap-1.5 rounded-full px-1 text-[10px] font-bold uppercase leading-3 tracking-[0.4px] text-[#5840D4]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {moodCardExpanded ? 'View less' : 'View more'}
                {moodCardExpanded ? (
                  <ChevronUp className="h-3.5 w-3.5" strokeWidth={2.4} />
                ) : (
                  <ChevronDown className="h-3.5 w-3.5" strokeWidth={2.4} />
                )}
              </button>
            </div>

            <div className={`grid grid-cols-5 gap-2 ${moodCardExpanded ? 'gap-y-3' : ''}`}>
              {visibleMoods.map((mood) => {
                const selected = selectedMood === mood.label;
                return (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`flex min-h-[68px] flex-col items-center justify-center rounded-[16px] border transition-all ${
                      selected
                        ? 'border-[#5840D4] bg-[rgba(88,64,212,0.06)] shadow-[0px_6px_16px_0px_rgba(84,75,187,0.12)]'
                        : 'border-transparent bg-[#FAFAFF]'
                    }`}
                  >
                    <span className="text-[24px] leading-7">{mood.emoji}</span>
                    <span
                      className={`mt-1 ${mood.label.length > 9 ? 'text-[9px]' : 'text-[10px]'} font-bold leading-3 ${selected ? 'text-[#5840D4]' : 'text-[#5A5B62]'}`}
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {mood.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section
            className="mb-5 overflow-hidden rounded-[22px] border border-white/35 shadow-[0px_12px_28px_0px_rgba(84,75,187,0.16)] backdrop-blur-xl"
            style={{
              backgroundImage:
                'radial-gradient(circle at 18% 18%, rgba(255,255,255,0.26), transparent 32%), linear-gradient(111deg, rgba(88,64,212,0.96) 0%, rgba(62,61,198,0.92) 48%, rgba(0,153,191,0.90) 118%)',
            }}
          >
            <div className="relative p-3">
              <div className="absolute inset-0 bg-white/[0.04]" />
              <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/14 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[16px] bg-white/16 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.35)] ring-1 ring-white/24">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 shadow-[0px_8px_18px_rgba(20,18,70,0.16)]">
                    <Zap className="h-5 w-5 text-white" fill="currentColor" strokeWidth={0} />
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase leading-3 tracking-[0.8px] text-white/62" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Your Next Best Move
                    </span>
                  </div>
                  <h2 className="text-[18px] font-bold leading-7 text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {recommendation.title}
                  </h2>
                  <div className="mt-2 inline-flex h-6 items-center gap-1.5 rounded-full bg-white/15 px-2.5 ring-1 ring-white/18">
                    <Zap className="h-3.5 w-3.5 text-[#FFD36C]" fill="currentColor" strokeWidth={0} />
                    <span className="text-[10px] font-bold leading-3 text-white/92" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {recommendation.boost}
                    </span>
                  </div>
                </div>

                <ChevronRight className="h-5 w-5 shrink-0 text-white/62" strokeWidth={2.2} />
              </div>

              <button
                onClick={() => navigate(recommendationRoute)}
                className="relative mt-3 flex h-9 w-full scroll-mb-32 items-center justify-center rounded-full bg-white/95 text-[14px] font-bold leading-5 text-[#5840D4] shadow-[0px_8px_18px_0px_rgba(20,18,70,0.16)] ring-1 ring-white/70 active:scale-[0.98]"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Start Now
              </button>
            </div>
          </section>

          <section className="rounded-[22px] border border-[rgba(232,231,241,0.86)] bg-white/94 p-4 shadow-[0px_8px_24px_0px_rgba(84,75,187,0.08)]">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[18px] font-bold leading-7 text-[#2D2E34]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Dopameter Calendar
              </h2>
              <button className="text-[10px] font-bold uppercase leading-3 tracking-[0.4px] text-[#5840D4]" style={{ fontFamily: 'Inter, sans-serif' }}>
                This Month
              </button>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {week.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2">
                  <div className="text-[10px] font-bold leading-3 text-[#5A5B62]/70" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.day}
                  </div>
                  <PercentCircle {...item} />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function IconButton({
  children,
  label,
  onClick,
}: {
  children: ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,231,241,0.85)] bg-white shadow-[0px_6px_16px_0px_rgba(84,75,187,0.07)] active:scale-95"
      aria-label={label}
    >
      {children}
    </button>
  );
}

function PercentCircle({
  value,
  color,
  selected = false,
  future = false,
}: {
  value: number | null;
  color: string;
  selected?: boolean;
  future?: boolean;
}) {
  if (future || value === null) {
    return (
      <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#D8D7E2] bg-white/70" />
    );
  }

  return (
    <div
      className={`flex h-11 w-11 items-center justify-center rounded-full ${selected ? 'text-white shadow-[0px_7px_14px_0px_rgba(84,75,187,0.22)]' : 'text-[#2D2E34]'}`}
      style={{
        background: selected
          ? 'linear-gradient(135deg, #5840D4 0%, #7D6DF0 100%)'
          : `conic-gradient(${color} ${value * 3.6}deg, rgba(232,231,241,0.95) ${value * 3.6}deg)`,
      }}
    >
      <div className={`flex h-9 w-9 items-center justify-center rounded-full ${selected ? 'bg-transparent' : 'bg-white'}`}>
        <span className="text-[12px] font-bold leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {value}%
        </span>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <div className="text-[14px] font-semibold leading-5 tracking-normal">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg className="h-[12px] w-[19px]" viewBox="0 0 19.2 12.2264" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z"
            fill="black"
          />
        </svg>
        <svg className="h-[12px] w-[17px]" viewBox="0 0 17.1417 12.3283" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.3283 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z"
            fill="black"
          />
        </svg>
        <svg className="h-[13px] w-[27px]" viewBox="0 0 27.328 13" fill="none">
          <rect x="0.5" y="0.5" width="24" height="12" rx="3.8" stroke="black" opacity="0.35" />
          <path d="M26 4.78113V8.8566C26.8047 8.51143 27.328 7.70847 27.328 6.81886C27.328 5.92926 26.8047 5.1263 26 4.78113" fill="black" opacity="0.4" />
          <rect x="2" y="2" width="21" height="9" rx="2.5" fill="black" />
        </svg>
      </div>
    </div>
  );
}
