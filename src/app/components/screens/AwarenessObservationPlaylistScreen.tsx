import {
  ArrowLeft,
  Bookmark,
  Clock,
  Eye,
  Play,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router';

const awarenessSessions = [
  {
    title: 'Mind Decode',
    subtitle: 'Observe thoughts, emotions, and patterns without reacting right away.',
    minutes: 12,
    slug: 'mind-decode',
    tone: 'from-[#F4FAFF] via-[#B8D9FF] to-[#5840D4]',
  },
  {
    title: 'The Objective Observer',
    subtitle: 'Separate facts, interpretations, and emotional reactions.',
    minutes: 14,
    slug: 'objective-observer',
    tone: 'from-[#F7F3FF] via-[#C1B5FF] to-[#3B82F6]',
  },
  {
    title: 'Know Your Patterns',
    subtitle: 'Notice recurring triggers, avoidance, impulsive responses, and habits.',
    minutes: 13,
    slug: 'know-your-patterns',
    tone: 'from-[#F2FFF9] via-[#A5E0CF] to-[#5B4FDB]',
  },
  {
    title: 'Pause Before You React',
    subtitle: 'Practice the moment between impulse and response.',
    minutes: 10,
    slug: 'pause-before-you-react',
    tone: 'from-[#FFF8EC] via-[#DCC7FF] to-[#4F67DE]',
  },
  {
    title: 'Build Self-Awareness',
    subtitle: 'A broader foundation for noticing your inner state clearly.',
    minutes: 15,
    slug: 'build-self-awareness',
    tone: 'from-[#EEF8FF] via-[#A7C7FF] to-[#5840D4]',
  },
];

export default function AwarenessObservationPlaylistScreen() {
  const navigate = useNavigate();

  const openSession = (slug: string) => navigate(`/home/awareness-observation/${slug}`);

  return (
    <div
      className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden pb-9"
      style={{
        background:
          'radial-gradient(circle at 84% 5%, rgba(183,216,255,0.46) 0%, rgba(183,216,255,0) 34%), linear-gradient(180deg, #E9EEFF 0%, #F1F4FF 42%, #FBFAFF 100%)',
      }}
    >
      <div className="pointer-events-none absolute left-[-118px] top-[172px] h-[286px] w-[286px] rounded-full bg-[#CBBEFF]/42 blur-[76px]" />
      <div className="pointer-events-none absolute bottom-[148px] right-[-132px] h-[286px] w-[286px] rounded-full bg-[#BDE4FF]/42 blur-[82px]" />

      <div className="relative z-10">
        <StatusBar />

        <header className="grid grid-cols-[52px_minmax(0,1fr)_52px] items-center px-5 pb-4 pt-5">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-white/85 bg-white/82 shadow-[0px_12px_28px_rgba(84,75,187,0.12)] backdrop-blur-xl active:scale-[0.96]"
          >
            <ArrowLeft className="h-7 w-7 text-[#5840D4]" strokeWidth={2.35} />
          </button>

          <div className="min-w-0 text-center">
            <h1 className="bg-[linear-gradient(135deg,#1F2362_0%,#5840D4_55%,#3B82F6_100%)] bg-clip-text text-[22px] font-extrabold leading-8 tracking-normal text-transparent">
              Awareness & Observation
            </h1>
          </div>
          <div />
        </header>

        <main className="px-5">
          <section className="relative overflow-hidden rounded-[26px] border border-white/34 bg-[linear-gradient(135deg,#4F46D8_0%,#5B4FDB_46%,#2CA8EC_100%)] p-5 shadow-[0px_22px_50px_rgba(84,75,187,0.24)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_34%),radial-gradient(circle_at_12%_96%,rgba(180,244,255,0.28)_0%,rgba(180,244,255,0)_38%)]" />
            <div className="pointer-events-none absolute right-[-54px] top-[-46px] h-[174px] w-[174px] rounded-full border border-white/24 bg-white/12 blur-[1px]" />
            <div className="pointer-events-none absolute bottom-[-88px] left-[72px] h-[170px] w-[210px] rounded-full bg-white/14 blur-[38px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/16 px-3 py-1.5 text-[12px] font-extrabold leading-4 text-white shadow-[inset_0px_1px_0px_rgba(255,255,255,0.22)] backdrop-blur-xl">
                  <Eye className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
                  Observation Series
                </div>
                <button
                  aria-label="Save Awareness and Observation"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/16 text-white shadow-[0px_10px_24px_rgba(19,28,94,0.14)] backdrop-blur-xl active:scale-[0.96]"
                >
                  <Bookmark className="h-5 w-5" strokeWidth={2.15} />
                </button>
              </div>

              <h2 className="mt-4 text-[29px] font-extrabold leading-[33px] tracking-normal text-white">
                Awareness & Observation
              </h2>
              <p className="mt-2 text-[14px] font-bold leading-5 text-white/78">
                5 guided sessions · 1 hr 4 min
              </p>
              <p className="mt-3 max-w-[314px] text-[13.5px] font-medium leading-[21px] text-white/88">
                A practical awareness playlist for observing thoughts, emotions, triggers, and patterns with more objectivity before choosing how to respond.
              </p>
            </div>
          </section>

          <section className="mt-7">
            <div className="mb-4 flex items-end justify-between gap-3 px-1">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#8171F2]" fill="#8171F2" strokeWidth={2.1} />
                  <h2 className="text-[23px] font-extrabold leading-7 tracking-normal text-[#151A4D]">
                    All Sessions
                  </h2>
                </div>
                <p className="mt-1 pl-7 text-[14px] font-semibold leading-5 text-[#666A88]">
                  5 guided meditations
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {awarenessSessions.map((session) => (
                <AwarenessSessionCard
                  key={session.title}
                  title={session.title}
                  subtitle={session.subtitle}
                  minutes={session.minutes}
                  tone={session.tone}
                  onOpen={() => openSession(session.slug)}
                  onPlay={() => openSession(session.slug)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function AwarenessSessionCard({
  title,
  subtitle,
  minutes,
  tone,
  onOpen,
  onPlay,
}: {
  title: string;
  subtitle: string;
  minutes: number;
  tone: string;
  onOpen: () => void;
  onPlay: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen();
        }
      }}
      className="rounded-[24px] border-[1.5px] border-[#AFA5FF]/72 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(248,250,255,0.92)_48%,rgba(239,245,255,0.88)_100%)] shadow-[0px_18px_38px_rgba(84,75,187,0.18),inset_0px_0px_0px_1px_rgba(255,255,255,0.82),0px_0px_28px_rgba(105,139,255,0.10)] backdrop-blur-xl"
    >
      <div className="flex min-h-[108px] w-full items-center gap-3 px-3.5 py-4 text-left active:scale-[0.99]">
        <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-[#F3F1FF] shadow-[0px_12px_24px_rgba(84,75,187,0.17)]">
          <AwarenessThumb tone={tone} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[18px] font-extrabold leading-[22px] tracking-normal text-[#151A4D]">
            {title}
          </h3>
          <p className="mt-1 line-clamp-1 text-[12.5px] font-semibold leading-4 text-[#727697]">
            {subtitle}
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-[14px] font-semibold leading-5 text-[#656A8F]">
            <Clock className="h-4 w-4 text-[#5F62A3]" strokeWidth={2.15} />
            <span>{minutes} min</span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-1">
          <button
            aria-label={`Bookmark ${title}`}
            onClick={(event) => event.stopPropagation()}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E4E0FF]/60 bg-white/42 text-[#636A93] active:scale-[0.96]"
          >
            <Bookmark className="h-6 w-6" strokeWidth={2.05} />
          </button>
          <button
            aria-label={`Play ${title}`}
            onClick={(event) => {
              event.stopPropagation();
              onPlay();
            }}
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_54%,#3B82F6_100%)] shadow-[0px_12px_24px_rgba(84,75,187,0.34)] active:scale-[0.96]"
          >
            <Play className="ml-0.5 h-[22px] w-[22px] text-white" fill="white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}

function AwarenessThumb({ tone }: { tone: string }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_34%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_34%)]" />
      <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[2px] border-white/68 bg-white/18 shadow-[0px_0px_18px_rgba(255,255,255,0.32)] backdrop-blur-[1px]">
        <Eye className="h-[19px] w-[19px] text-white drop-shadow-sm" strokeWidth={2.3} />
      </div>
      <span className="absolute left-[12px] top-1/2 h-[2px] w-[38px] -translate-y-1/2 rounded-full bg-white/38" />
      <span className="absolute left-1/2 top-[12px] h-[38px] w-[2px] -translate-x-1/2 rounded-full bg-white/34" />
      <span className="absolute inset-x-4 bottom-3 h-2 rounded-full bg-black/18 blur-[4px]" />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pb-2 pt-8">
      <div className="text-[14px] font-semibold leading-5 tracking-normal text-black">9:41</div>
      <div className="flex items-center gap-1.5">
        <span className="flex h-3 items-end gap-0.5">
          <span className="h-1.5 w-1 rounded-sm bg-black" />
          <span className="h-2 w-1 rounded-sm bg-black" />
          <span className="h-2.5 w-1 rounded-sm bg-black" />
          <span className="h-3 w-1 rounded-sm bg-black" />
        </span>
        <span className="h-3 w-4 rounded-[3px] border-2 border-black border-t-0" />
        <span className="h-[13px] w-[27px] rounded-[5px] border border-black/40 p-[2px]">
          <span className="block h-full w-[20px] rounded-[3px] bg-black" />
        </span>
      </div>
    </div>
  );
}
