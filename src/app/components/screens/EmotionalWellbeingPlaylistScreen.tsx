import {
  ArrowLeft,
  Bookmark,
  Clock,
  Heart,
  Play,
  Sparkles,
} from 'lucide-react';
import { useNavigate } from 'react-router';

const emotionalSessions = [
  {
    title: 'Calm Your Anxiety',
    subtitle: 'For nervousness, racing thoughts, and bodily tension.',
    minutes: 14,
    slug: 'calm-your-anxiety',
    tone: 'from-[#FFF1F6] via-[#C8B9FF] to-[#5B4FDB]',
  },
  {
    title: 'Release Stress',
    subtitle: 'For accumulated pressure, mental fatigue, and feeling stretched.',
    minutes: 13,
    slug: 'release-stress',
    tone: 'from-[#F3FAFF] via-[#9ED7FF] to-[#6A5AE0]',
  },
  {
    title: 'Move Through Anger',
    subtitle: 'Notice, regulate, and respond with more steadiness.',
    minutes: 16,
    slug: 'move-through-anger',
    tone: 'from-[#FFF0EA] via-[#F0A9B4] to-[#5B4FDB]',
  },
  {
    title: 'Ease Overthinking',
    subtitle: 'For looping thoughts and a mind that will not settle.',
    minutes: 12,
    slug: 'ease-overthinking',
    tone: 'from-[#F5F7FF] via-[#B9C8FF] to-[#5247CC]',
  },
  {
    title: 'When You Feel Sad',
    subtitle: 'Gentle emotional acknowledgment without forcing positivity.',
    minutes: 15,
    slug: 'when-you-feel-sad',
    tone: 'from-[#F2F7FF] via-[#AEC8ED] to-[#6C63D8]',
  },
  {
    title: 'Work Through Frustration',
    subtitle: 'For setbacks, relationships, studies, and plans going sideways.',
    minutes: 13,
    slug: 'work-through-frustration',
    tone: 'from-[#FFF8EC] via-[#F2C6A3] to-[#6B5CDA]',
  },
  {
    title: 'Handle Worry',
    subtitle: 'For future-oriented thoughts and what-if spirals.',
    minutes: 12,
    slug: 'handle-worry',
    tone: 'from-[#EEF8FF] via-[#A8DAF5] to-[#4F67DE]',
  },
  {
    title: 'Overcome Self-Doubt',
    subtitle: 'For insecurity, hesitation, and rebuilding inner trust.',
    minutes: 14,
    slug: 'overcome-self-doubt',
    tone: 'from-[#F7F1FF] via-[#C3B3FF] to-[#5543D5]',
  },
  {
    title: 'Release Guilt',
    subtitle: 'For regret, self-blame, and softening the inner critic.',
    minutes: 16,
    slug: 'release-guilt',
    tone: 'from-[#FFF6F0] via-[#E7C2D8] to-[#6554D9]',
  },
  {
    title: 'When You Feel Misunderstood',
    subtitle: 'For feeling unseen, unheard, or emotionally alone.',
    minutes: 13,
    slug: 'feel-misunderstood',
    tone: 'from-[#F0FBFF] via-[#B7DBEA] to-[#6257DA]',
  },
  {
    title: 'When You Feel Judged',
    subtitle: 'For social pressure, comparison, and insecurity.',
    minutes: 12,
    slug: 'feel-judged',
    tone: 'from-[#FFF2FA] via-[#D1B3F2] to-[#5B4FDB]',
  },
  {
    title: 'Handle Expectations',
    subtitle: 'For parental, academic, professional, or self-imposed pressure.',
    minutes: 15,
    slug: 'handle-expectations',
    tone: 'from-[#F3F9FF] via-[#B4C9FF] to-[#436EDB]',
  },
];

export default function EmotionalWellbeingPlaylistScreen() {
  const navigate = useNavigate();

  const openSession = (slug: string) => navigate(`/home/emotional-wellbeing/${slug}`);

  return (
    <div
      className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden pb-9"
      style={{
        background:
          'radial-gradient(circle at 84% 5%, rgba(219,203,255,0.48) 0%, rgba(219,203,255,0) 34%), linear-gradient(180deg, #E9EEFF 0%, #F6F1FF 42%, #FBFAFF 100%)',
      }}
    >
      <div className="pointer-events-none absolute left-[-118px] top-[172px] h-[286px] w-[286px] rounded-full bg-[#DCCBFF]/46 blur-[76px]" />
      <div className="pointer-events-none absolute bottom-[148px] right-[-132px] h-[286px] w-[286px] rounded-full bg-[#BDE4FF]/40 blur-[82px]" />

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
              Emotional Wellbeing
            </h1>
          </div>
          <div />
        </header>

        <main className="px-5">
          <section className="relative overflow-hidden rounded-[26px] border border-white/34 bg-[linear-gradient(135deg,#5B4FDB_0%,#7554E8_46%,#2CA8EC_100%)] p-5 shadow-[0px_22px_50px_rgba(84,75,187,0.24)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_86%_16%,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0)_34%),radial-gradient(circle_at_12%_96%,rgba(255,205,235,0.24)_0%,rgba(255,205,235,0)_38%)]" />
            <div className="pointer-events-none absolute right-[-54px] top-[-46px] h-[174px] w-[174px] rounded-full border border-white/24 bg-white/12 blur-[1px]" />
            <div className="pointer-events-none absolute bottom-[-88px] left-[72px] h-[170px] w-[210px] rounded-full bg-white/14 blur-[38px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/16 px-3 py-1.5 text-[12px] font-extrabold leading-4 text-white shadow-[inset_0px_1px_0px_rgba(255,255,255,0.22)] backdrop-blur-xl">
                  <Heart className="h-3.5 w-3.5 text-white" strokeWidth={2.4} />
                  Emotional Series
                </div>
                <button
                  aria-label="Save Emotional Wellbeing"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/16 text-white shadow-[0px_10px_24px_rgba(19,28,94,0.14)] backdrop-blur-xl active:scale-[0.96]"
                >
                  <Bookmark className="h-5 w-5" strokeWidth={2.15} />
                </button>
              </div>

              <h2 className="mt-4 text-[29px] font-extrabold leading-[33px] tracking-normal text-white">
                Emotional Wellbeing
              </h2>
              <p className="mt-2 text-[14px] font-bold leading-5 text-white/78">
                12 guided sessions · 2 hr 45 min
              </p>
              <p className="mt-3 max-w-[314px] text-[13.5px] font-medium leading-[21px] text-white/88">
                A calm emotional support playlist for noticing difficult feelings, regulating the body, and responding with more clarity, compassion, and steadiness.
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
                  12 guided meditations
                </p>
              </div>
            </div>

            <div className="space-y-3.5">
              {emotionalSessions.map((session) => (
                <EmotionalSessionCard
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

function EmotionalSessionCard({
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
          <EmotionalThumb tone={tone} />
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

function EmotionalThumb({ tone }: { tone: string }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_32%,rgba(255,255,255,0.74)_0%,rgba(255,255,255,0)_35%)]" />
      <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 shadow-[0px_0px_18px_rgba(255,255,255,0.30)] backdrop-blur-[1px]">
        <Heart className="h-[18px] w-[18px] text-white drop-shadow-sm" fill="rgba(255,255,255,0.78)" strokeWidth={2.15} />
      </div>
      <span className="absolute left-[9px] top-[16px] h-2 w-2 rounded-full bg-white/62 blur-[1px]" />
      <span className="absolute bottom-[14px] right-[12px] h-2.5 w-2.5 rounded-full bg-white/46 blur-[1px]" />
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
