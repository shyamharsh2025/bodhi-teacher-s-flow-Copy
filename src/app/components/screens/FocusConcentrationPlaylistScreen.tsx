import {
  ArrowLeft,
  Bookmark,
  Clock,
  Play,
  Sparkles,
  Target,
} from 'lucide-react';
import { useNavigate } from 'react-router';

const focusSessions = [
  {
    title: 'NSDR Quick Reset',
    minutes: 12,
    slug: 'nsdr-quick-reset',
    tone: 'from-[#F5FBFF] via-[#BFDFFF] to-[#5B4FDB]',
  },
  {
    title: 'NSDR Deep Recovery',
    minutes: 25,
    slug: 'nsdr-deep-recovery',
    tone: 'from-[#F1F4FF] via-[#AAB8FF] to-[#4B4FD1]',
  },
  {
    title: 'Yog Nidra',
    minutes: 20,
    slug: 'yog-nidra',
    tone: 'from-[#FFF8EC] via-[#DCC7FF] to-[#8171F2]',
  },
  {
    title: 'Trataka Meditation',
    minutes: 14,
    slug: 'trataka-meditation',
    tone: 'from-[#F4FAFF] via-[#8FD4FF] to-[#2CA8EC]',
  },
  {
    title: 'Binaural Beats for Focus',
    minutes: 18,
    slug: 'binaural-beats-for-focus',
    tone: 'from-[#EEF2FF] via-[#A38BFF] to-[#332B8F]',
  },
  {
    title: 'Breathework for Focus',
    minutes: 10,
    slug: 'breathework-for-focus',
    tone: 'from-[#ECFFFA] via-[#8FE8E2] to-[#4F67DE]',
  },
  {
    title: 'Meditation for Grounding and Calm',
    minutes: 15,
    slug: 'grounding-and-calm',
    tone: 'from-[#F3FFF5] via-[#9ECFB2] to-[#465D9D]',
  },
];

export default function FocusConcentrationPlaylistScreen() {
  const navigate = useNavigate();

  const openSession = (slug: string) => navigate(`/home/focus-concentration/${slug}`);

  return (
    <div
      className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden pb-9"
      style={{
        background:
          'radial-gradient(circle at 84% 5%, rgba(183,216,255,0.48) 0%, rgba(183,216,255,0) 34%), linear-gradient(180deg, #E9EEFF 0%, #F3F1FF 42%, #FBFAFF 100%)',
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
            <h1 className="bg-[linear-gradient(135deg,#1F2362_0%,#5840D4_55%,#3B82F6_100%)] bg-clip-text text-[23px] font-extrabold leading-8 tracking-normal text-transparent">
              Focus & Concentration
            </h1>
          </div>
          <div />
        </header>

        <main className="px-5">
          <section className="relative overflow-hidden rounded-[26px] border border-white/34 bg-[linear-gradient(135deg,#4F46D8_0%,#5B4FDB_44%,#1E9FEA_100%)] p-5 shadow-[0px_22px_50px_rgba(84,75,187,0.24)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_18%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_34%),radial-gradient(circle_at_12%_96%,rgba(180,244,255,0.28)_0%,rgba(180,244,255,0)_38%)]" />
            <div className="pointer-events-none absolute right-[-54px] top-[-46px] h-[174px] w-[174px] rounded-full border border-white/24 bg-white/12 blur-[1px]" />
            <div className="pointer-events-none absolute bottom-[-88px] left-[72px] h-[170px] w-[210px] rounded-full bg-white/14 blur-[38px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/16 px-3 py-1.5 text-[12px] font-extrabold leading-4 text-white shadow-[inset_0px_1px_0px_rgba(255,255,255,0.22)] backdrop-blur-xl">
                  <Target className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
                  Focus Series
                </div>
                <button
                  aria-label="Save Focus & Concentration"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/16 text-white shadow-[0px_10px_24px_rgba(19,28,94,0.14)] backdrop-blur-xl active:scale-[0.96]"
                >
                  <Bookmark className="h-5 w-5" strokeWidth={2.15} />
                </button>
              </div>

              <h2 className="mt-4 text-[29px] font-extrabold leading-[33px] tracking-normal text-white">
                Focus & Concentration
              </h2>
              <p className="mt-2 text-[14px] font-bold leading-5 text-white/78">
                7 guided sessions · 1 hr 54 min
              </p>
              <p className="mt-3 max-w-[310px] text-[13.5px] font-medium leading-[21px] text-white/88">
                A focused recovery playlist for resetting attention, relaxing the nervous system, and returning to deep concentration with steadier energy and clarity.
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
                  7 guided meditations
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {focusSessions.map((session) => (
                <FocusSessionCard
                  key={session.title}
                  title={session.title}
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

function FocusSessionCard({
  title,
  minutes,
  tone,
  onOpen,
  onPlay,
}: {
  title: string;
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
      <div className="flex min-h-[102px] w-full items-center gap-3 px-3.5 py-4 text-left active:scale-[0.99]">
        <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-[#F3F1FF] shadow-[0px_12px_24px_rgba(84,75,187,0.17)]">
          <FocusThumb tone={tone} />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[19px] font-extrabold leading-[23px] tracking-normal text-[#151A4D]">
            {title}
          </h3>
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

function FocusThumb({ tone }: { tone: string }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_34%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_34%)]" />
      <div className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-white/78 shadow-[0px_0px_18px_rgba(255,255,255,0.36)]" />
      <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/88 shadow-[0px_0px_16px_rgba(255,255,255,0.55)]" />
      <span className="absolute left-[12px] top-1/2 h-[2px] w-[38px] -translate-y-1/2 rounded-full bg-white/54" />
      <span className="absolute left-1/2 top-[12px] h-[38px] w-[2px] -translate-x-1/2 rounded-full bg-white/44" />
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
