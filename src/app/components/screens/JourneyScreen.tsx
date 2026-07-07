import {
  Bell,
  Calendar,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock3,
  Heart,
  Leaf,
  MessageCircle,
  Sparkles,
  Star,
  Sun,
  Target,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel';
import { VoicePoweredOrb } from '../VoicePoweredOrb';
import meditationHeroImage from '../../../imports/ReturnUserHome/33c81ac0148d41512ccbf9408cc3b4f4bde8048d.png';

const journeyHeroImage = '/assets/images/journey_hero.png';

const patternItems = [
  {
    icon: Sun,
    iconClass: 'text-[#5840D4]',
    iconBg: 'bg-[rgba(88,64,212,0.08)]',
    label: 'Most productive',
    value: 'Morning',
    note: '9 AM – 12 PM',
  },
  {
    icon: Star,
    iconClass: 'text-[#5840D4]',
    iconBg: 'bg-[rgba(88,64,212,0.08)]',
    label: 'Best day',
    value: 'Friday',
    note: 'Most consistent on this day',
  },
  {
    icon: Leaf,
    iconClass: 'text-[#5840D4]',
    iconBg: 'bg-[rgba(88,64,212,0.08)]',
    label: 'Most chosen practice',
    value: 'Meditation',
    note: 'Go-to practice',
  },
];

const practiceMetrics = [
  {
    icon: Sparkles,
    value: '12',
    label: 'Meditation Sessions',
    note: '↑ 2 vs last week',
  },
  {
    icon: Target,
    value: '6h 45m',
    label: 'Focus Time',
    note: '↑ 15% vs last week',
  },
  {
    icon: CheckCircle2,
    value: '18',
    label: 'Sessions Completed',
    note: '↑ 2 vs last week',
  },
  {
    icon: CalendarDays,
    value: '5 / 7',
    label: 'Active Days',
    note: 'This week',
    neutral: true,
  },
];

type Tab = 'journey' | 'stats';

export default function JourneyScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('journey');
  const [statsCarouselApi, setStatsCarouselApi] = useState<CarouselApi>();
  const [activeStatsSlide, setActiveStatsSlide] = useState(0);
  const [journeyCarouselApi, setJourneyCarouselApi] = useState<CarouselApi>();
  const [activeJourneySlide, setActiveJourneySlide] = useState(0);

  useEffect(() => {
    if (!statsCarouselApi) return;

    const updateSelectedSlide = () => {
      setActiveStatsSlide(statsCarouselApi.selectedScrollSnap());
    };

    updateSelectedSlide();
    statsCarouselApi.on('select', updateSelectedSlide);
    statsCarouselApi.on('reInit', updateSelectedSlide);

    return () => {
      statsCarouselApi.off('select', updateSelectedSlide);
      statsCarouselApi.off('reInit', updateSelectedSlide);
    };
  }, [statsCarouselApi]);

  useEffect(() => {
    if (!journeyCarouselApi) return;

    const updateSelectedSlide = () => {
      setActiveJourneySlide(journeyCarouselApi.selectedScrollSnap());
    };

    updateSelectedSlide();
    journeyCarouselApi.on('select', updateSelectedSlide);
    journeyCarouselApi.on('reInit', updateSelectedSlide);

    return () => {
      journeyCarouselApi.off('select', updateSelectedSlide);
      journeyCarouselApi.off('reInit', updateSelectedSlide);
    };
  }, [journeyCarouselApi]);

  const isJourney = activeTab === 'journey';

  return (
    <div className="relative min-h-screen bg-white pb-28">
      <div className="absolute top-[-70px] left-[38%] w-[280px] h-[280px] bg-[rgba(102,163,255,0.14)] rounded-full blur-[48px] pointer-events-none" />
      <div className="absolute top-[560px] left-[-90px] w-[300px] h-[300px] bg-[rgba(104,152,249,0.12)] rounded-full blur-[52px] pointer-events-none" />

      <div className="relative z-10">
        <StatusBar />

        <div className="flex items-center justify-between px-6 pt-4 pb-5">
          <div>
            <h1 className="text-[24px] font-bold text-[#5840D4] leading-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hey Anusha ✦
            </h1>
            <p className="text-[14px] font-medium text-[#5A5B62] leading-5 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
              {isJourney ? 'You’re building a steadier mind.' : 'Here’s your progress this week.'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-11 h-11 rounded-full bg-white border border-[rgba(232,231,241,0.85)] flex items-center justify-center shadow-[0px_6px_16px_0px_rgba(84,75,187,0.07)]">
              <Bell className="w-[18px] h-[18px] text-[#5840D4]" strokeWidth={2} />
            </button>
            <div className="w-11 h-11 rounded-full border-2 border-[rgba(88,64,212,0.28)] bg-[#D2BE9F] shadow-[0px_6px_16px_0px_rgba(84,75,187,0.08)]" />
          </div>
        </div>

        <div className="mx-6 mb-6 rounded-full bg-[rgba(88,64,212,0.06)] p-1 flex shadow-[inset_0px_1px_3px_0px_rgba(84,75,187,0.04)]">
          <button
            onClick={() => setActiveTab('journey')}
            className={`h-11 flex-1 rounded-full text-[14px] font-semibold leading-5 transition-all ${isJourney ? 'text-white shadow-[0px_8px_18px_0px_rgba(84,75,187,0.18)]' : 'text-[#5A5B62]'}`}
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundImage: isJourney ? 'linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)' : undefined,
            }}
          >
            Journey
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`h-11 flex-1 rounded-full text-[14px] font-semibold leading-5 transition-all ${!isJourney ? 'text-white shadow-[0px_8px_18px_0px_rgba(84,75,187,0.18)]' : 'text-[#5A5B62]'}`}
            style={{
              fontFamily: 'Inter, sans-serif',
              backgroundImage: !isJourney ? 'linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)' : undefined,
            }}
          >
            Stats
          </button>
        </div>

        {isJourney ? (
          <JourneyContent
            journeyCarouselApi={journeyCarouselApi}
            setJourneyCarouselApi={setJourneyCarouselApi}
            activeJourneySlide={activeJourneySlide}
          />
        ) : (
          <StatsContent
            statsCarouselApi={statsCarouselApi}
            setStatsCarouselApi={setStatsCarouselApi}
            activeStatsSlide={activeStatsSlide}
          />
        )}
      </div>
    </div>
  );
}

function JourneyContent({
  journeyCarouselApi,
  setJourneyCarouselApi,
  activeJourneySlide,
}: {
  journeyCarouselApi: CarouselApi | undefined;
  setJourneyCarouselApi: (api: CarouselApi) => void;
  activeJourneySlide: number;
}) {
  return (
    <>
      <section className="mx-6 mb-5">
        <Carousel
          setApi={setJourneyCarouselApi}
          opts={{ align: 'start', containScroll: 'trimSnaps' }}
          className="w-full rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-[#5840D4]/25"
          aria-label="Journey overview carousel"
          tabIndex={0}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[292px] overflow-hidden rounded-[22px] border border-[rgba(232,231,241,0.85)] bg-white p-5 shadow-[0px_10px_26px_0px_rgba(84,75,187,0.12)]">
                <img
                  src={journeyHeroImage}
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = meditationHeroImage;
                  }}
                  className="absolute inset-0 h-full w-full object-cover object-[64%_center]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.96)_42%,rgba(247,244,255,0.70)_66%,rgba(232,229,255,0.22)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_34%,rgba(255,255,255,0.36)_0%,rgba(154,148,255,0.16)_30%,transparent_62%)]" />
                <div className="absolute inset-x-0 bottom-0 h-[106px] bg-gradient-to-t from-white via-white/86 to-transparent" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(88,64,212,0.16)] bg-white/72 px-3 py-2 text-[12px] font-bold text-[#5840D4] leading-4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9),0px_6px_14px_rgba(84,75,187,0.08)] backdrop-blur-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <Sparkles className="h-4 w-4" strokeWidth={2.2} />
                      Karma 1,240
                    </div>
                    <h2 className="mt-4 max-w-[286px] text-[24px] font-bold text-[#2D2E34] leading-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                      You’re building the person you want to be.
                    </h2>
                    <p className="mt-2 max-w-[260px] text-[14px] font-medium text-[#4F5366] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Small daily practices are helping you grow with more calm and clarity.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <HeroInfoCell icon={Sparkles} label="Current chapter" value="Steady Learner" />
                    <HeroInfoCell icon={Target} label="Growing toward" value="Calm & Centered" />
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="relative h-[292px] overflow-hidden rounded-[22px] border border-[rgba(232,231,241,0.85)] bg-white p-5 shadow-[0px_10px_26px_0px_rgba(84,75,187,0.10)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.99)_0%,rgba(247,246,255,0.96)_54%,rgba(237,245,255,0.88)_100%)]" />
                <div className="absolute right-[-56px] top-[-48px] h-48 w-48 rounded-full bg-[rgba(154,148,255,0.18)] blur-[24px]" />
                <div className="absolute right-4 top-16 h-40 w-40 rounded-full border border-white/70" />
                <div className="absolute right-[-6px] bottom-0 h-24 w-52 rounded-tl-full bg-gradient-to-r from-[rgba(88,64,212,0.08)] to-[rgba(154,148,255,0.18)]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="max-w-[220px] text-[24px] font-bold text-[#2D2E34] leading-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                        What you’re working on
                      </h2>
                      <button className="mt-1 flex shrink-0 items-center gap-1 text-[12px] font-bold text-[#5840D4] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Update
                        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
                      </button>
                    </div>
                    <p className="mt-3 max-w-[282px] text-[14px] font-medium text-[#4F5366] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Your daily practice is helping you build the qualities that matter most.
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <JourneyFocusCard icon={Target} label="Focus" />
                    <JourneyFocusCard icon={Sparkles} label="Clarity" />
                    <JourneyFocusCard icon={Heart} label="Emotional Balance" />
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="mt-3 flex items-center justify-center gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => journeyCarouselApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${activeJourneySlide === idx ? 'w-5 bg-[#5840D4]' : 'w-2 bg-[#DCDCE7]'}`}
              aria-label={`Show journey slide ${idx + 1}`}
              aria-pressed={activeJourneySlide === idx}
            />
          ))}
        </div>
      </section>

      <section className="mx-6 mb-5 overflow-hidden rounded-[22px] border border-[rgba(232,231,241,0.84)] bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(248,246,255,0.96)_58%,rgba(237,245,255,0.92)_100%)] shadow-[0px_10px_26px_0px_rgba(84,75,187,0.12)]">
        <div className="relative p-3">
          <div className="absolute right-[-34px] top-[-42px] h-32 w-32 rounded-full bg-[rgba(154,148,255,0.16)] blur-[18px]" />
          <div className="absolute left-[-30px] bottom-[-42px] h-28 w-28 rounded-full bg-[rgba(104,152,249,0.12)] blur-[18px]" />
          <div className="relative z-10 flex items-center gap-4">
            <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#E7E4FF] to-[#BDB7FF] p-1.5 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.8),0px_10px_22px_rgba(84,75,187,0.16)]">
              <div className="absolute inset-1 rounded-full bg-[rgba(88,64,212,0.18)] blur-[12px]" />
              <div className="relative h-full w-full rounded-full bg-[radial-gradient(circle_at_42%_34%,rgba(255,255,255,0.95)_0%,rgba(154,148,255,0.50)_18%,rgba(88,64,212,0.16)_50%,rgba(47,49,130,0.08)_100%)]">
                <VoicePoweredOrb enableVoiceControl={false} className="scale-[1.30]" />
              </div>
              <div className="absolute inset-2 rounded-full border border-white/45" />
              <MessageCircle className="absolute -right-1 top-1 h-7 w-7 rounded-full bg-white p-1.5 text-[#5840D4] shadow-[0px_5px_12px_0px_rgba(84,75,187,0.12)]" strokeWidth={2.2} />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-[18px] font-bold text-[#2D2E34] leading-7" style={{ fontFamily: 'Inter, sans-serif' }}>
                Journey Check-in with Bro
              </h2>
              <p className="mt-1 text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                Reflect on how you’re feeling and what you want to focus on next.
              </p>
            </div>
          </div>
          <button
            className="relative z-10 mt-3 w-full rounded-full py-2.5 text-center shadow-[0px_8px_18px_0px_rgba(84,75,187,0.18)]"
            style={{ backgroundImage: 'linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)' }}
          >
            <span className="text-[14px] font-bold text-[#F5F1FF] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              Reflect with Bro
            </span>
          </button>
        </div>
        <div className="relative z-10 grid grid-cols-2 border-t border-[#E8E7F1] bg-[rgba(88,64,212,0.035)]">
          <div className="flex items-center gap-2 px-4 py-3 border-r border-[#E8E7F1]">
            <Clock3 className="h-4 w-4 shrink-0 text-[#5A5B62]" strokeWidth={2.1} />
            <span className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Last reflection: 15 days ago
            </span>
          </div>
          <div className="px-4 py-3 text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Next reflection due in <span className="font-bold text-[#5840D4]">2 days</span>
          </div>
        </div>
      </section>

      <section className="mx-6 mb-4 rounded-[22px] border border-[rgba(232,231,241,0.8)] bg-white p-4 shadow-[0px_8px_22px_0px_rgba(84,75,187,0.10)]">
        <SectionHeader title="Latest reflection" action="See past reflections" />
        <div className="relative mt-4 overflow-hidden rounded-[18px] border border-[#E8E7F1] bg-[linear-gradient(145deg,rgba(255,255,255,0.98)_0%,rgba(247,246,255,0.94)_100%)] p-4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9)]">
          <div className="absolute bottom-0 right-0 h-12 w-28 rounded-tl-full bg-[rgba(154,148,255,0.14)]" />
          <div className="inline-flex rounded-full bg-[rgba(88,64,212,0.08)] px-3 py-1 text-[10px] font-bold uppercase text-[#5840D4] leading-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            Today
          </div>
          <p className="relative z-10 mt-3 text-[14px] font-semibold text-[#2D2E34] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
            “I feel more settled before I start studying.”
          </p>
        </div>
      </section>
    </>
  );
}

function HeroInfoCell({ icon: Icon, label, value }: { icon: typeof Target; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] border border-white/70 bg-white/72 px-3 py-2.5 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9),0px_6px_14px_rgba(84,75,187,0.07)] backdrop-blur-sm">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(88,64,212,0.08)]">
        <Icon className="h-[18px] w-[18px] text-[#5840D4]" strokeWidth={2.2} />
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-bold uppercase text-[#5A5B62]/75 leading-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          {label}
        </div>
        <div className="mt-1 text-[12px] font-bold text-[#2D2E34] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
          {value}
        </div>
      </div>
    </div>
  );
}

function StatsContent({
  statsCarouselApi,
  setStatsCarouselApi,
  activeStatsSlide,
}: {
  statsCarouselApi: CarouselApi | undefined;
  setStatsCarouselApi: (api: CarouselApi) => void;
  activeStatsSlide: number;
}) {
  return (
    <>
      <div className="mx-6 mb-5 flex items-center justify-between">
        <button className="h-11 rounded-full border border-[#E8E7F1] bg-white px-4 flex items-center gap-2 shadow-[0px_6px_16px_0px_rgba(84,75,187,0.06)]">
          <Calendar className="h-5 w-5 text-[#5A5B62]" strokeWidth={2} />
          <span className="text-[14px] font-semibold text-[#2D2E34] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
            This Week
          </span>
          <ChevronDown className="h-4 w-4 text-[#5A5B62]" strokeWidth={2} />
        </button>
        <div className="text-[14px] font-semibold text-[#5A5B62] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
          7 – 13 Sept 2025
        </div>
      </div>

      <section className="mx-6 mb-7">
        <Carousel
          setApi={setStatsCarouselApi}
          opts={{ align: 'start', containScroll: 'trimSnaps' }}
          className="w-full rounded-[22px] outline-none focus-visible:ring-2 focus-visible:ring-[#5840D4]/25"
          aria-label="Weekly stats carousel"
          tabIndex={0}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="h-[286px] rounded-[22px] border border-[rgba(232,231,241,0.8)] bg-white p-5 shadow-[0px_8px_22px_0px_rgba(84,75,187,0.10)]">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-full bg-[rgba(88,64,212,0.08)] flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[14px] font-bold text-[#2D2E34] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      What Helped
                    </h2>
                    <p className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Your week felt steadier after calming practice
                    </p>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-[18px] font-bold text-[#5840D4] leading-7" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Meditation was your strongest reset
                  </div>
                  <p className="mt-1 max-w-[282px] text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    On calmer days, you were more likely to complete sessions.
                  </p>
                </div>

                <div className="mt-5 space-y-2">
                  <InsightRow icon={Clock3} text="Best mood: 6 – 8 PM" />
                  <InsightRow icon={Sparkles} text="Boosted by: Meditation" />
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="h-[286px] rounded-[22px] border border-[rgba(232,231,241,0.8)] bg-white p-5 shadow-[0px_8px_22px_0px_rgba(84,75,187,0.10)]">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-full bg-[rgba(88,64,212,0.08)] flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
                  </div>
                  <div>
                    <h2 className="text-[14px] font-bold text-[#2D2E34] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Practice Summary
                    </h2>
                    <p className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Your practice rhythm this week
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2">
                  {practiceMetrics.map((metric, idx) => {
                    const Icon = metric.icon;
                    return (
                      <div
                        key={metric.label}
                        className={`flex gap-3 ${idx % 2 === 0 ? 'border-r border-[#E8E7F1] pr-3' : 'pl-3'} ${idx < 2 ? 'border-b border-[#E8E7F1] pb-4' : 'pt-4'}`}
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(88,64,212,0.08)]">
                          <Icon className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[18px] font-bold text-[#2D2E34] leading-7" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {metric.value}
                          </div>
                          <div className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                            {metric.label}
                          </div>
                          <div
                            className={`mt-1 text-[10px] font-bold leading-3 ${metric.neutral ? 'text-[#5A5B62]' : 'text-[#128263]'}`}
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {metric.note}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>

        <div className="mt-3 flex items-center justify-center gap-2">
          {[0, 1].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => statsCarouselApi?.scrollTo(idx)}
              className={`h-2 rounded-full transition-all ${activeStatsSlide === idx ? 'w-5 bg-[#5840D4]' : 'w-2 bg-[#E8E7F1]'}`}
              aria-label={`Show carousel slide ${idx + 1}`}
              aria-pressed={activeStatsSlide === idx}
            />
          ))}
        </div>
      </section>

      <section className="mx-6 mb-7">
        <h2 className="mb-4 text-[18px] font-bold text-[#2D2E34] leading-7" style={{ fontFamily: 'Inter, sans-serif' }}>
          Your Patterns
        </h2>
        <div className="rounded-[22px] border border-[rgba(232,231,241,0.8)] bg-white p-4 shadow-[0px_8px_22px_0px_rgba(84,75,187,0.10)]">
          <div className="grid grid-cols-3 divide-x divide-[#E8E7F1]">
            {patternItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="px-2 text-center first:pl-0 last:pr-0">
                  <div className={`mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full ${item.iconBg}`}>
                    <Icon className={`h-5 w-5 ${item.iconClass}`} strokeWidth={2.2} />
                  </div>
                  <div className="text-[10px] font-semibold text-[#5A5B62]/80 leading-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.label}
                  </div>
                  <div className="mt-1 text-[14px] font-bold text-[#5840D4] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.value}
                  </div>
                  <div className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {item.note}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-4 pb-2">
      <div className="text-[14px] font-semibold leading-5 tracking-normal">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg className="w-[19px] h-[12px]" viewBox="0 0 19.2 12.2264" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" fill="black" />
        </svg>
        <svg className="w-[17px] h-[12px]" viewBox="0 0 17.1417 12.3283" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" fill="black" />
        </svg>
        <svg className="w-[27px] h-[13px]" viewBox="0 0 27.328 13" fill="none">
          <rect x="0.5" y="0.5" width="24" height="12" rx="3.8" stroke="black" opacity="0.35" />
          <path d="M26 4.78113V8.8566C26.8047 8.51143 27.328 7.70847 27.328 6.81886C27.328 5.92926 26.8047 5.1263 26 4.78113" fill="black" opacity="0.4" />
          <rect x="2" y="2" width="21" height="9" rx="2.5" fill="black" />
        </svg>
      </div>
    </div>
  );
}

function SectionHeader({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-[18px] font-bold text-[#2D2E34] leading-7" style={{ fontFamily: 'Inter, sans-serif' }}>
        {title}
      </h2>
      <button className="flex shrink-0 items-center gap-1 text-[12px] font-bold text-[#5840D4] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {action}
        <ChevronRight className="h-4 w-4" strokeWidth={2.2} />
      </button>
    </div>
  );
}

function JourneyFocusCard({ icon: Icon, label }: { icon: typeof Target; label: string }) {
  return (
    <div className="flex min-h-[92px] flex-col items-center justify-center rounded-[18px] border border-[#E8E7F1] bg-white/72 px-2 text-center shadow-[inset_0px_1px_0px_rgba(255,255,255,0.92),0px_6px_14px_rgba(84,75,187,0.06)] backdrop-blur-sm">
      <span className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(88,64,212,0.08)] shadow-[0px_4px_10px_0px_rgba(84,75,187,0.08)]">
        <Icon className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
      </span>
      <span className="text-[12px] font-bold text-[#2D2E34] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </span>
    </div>
  );
}

function InsightRow({ icon: Icon, text }: { icon: typeof Clock3; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(88,64,212,0.08)]">
        <Icon className="h-3.5 w-3.5 text-[#5840D4]" strokeWidth={2.2} />
      </div>
      <span className="text-[12px] font-medium text-[#5A5B62] leading-4" style={{ fontFamily: 'Inter, sans-serif' }}>
        {text}
      </span>
    </div>
  );
}
