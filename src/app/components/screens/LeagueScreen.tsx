import {
  ArrowLeft,
  Bell,
  Check,
  CheckCircle2,
  ChevronRight,
  Flame,
  Hourglass,
  PencilLine,
  Sparkles,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import meditationHeroImage from '../../../imports/ReturnUserHome/33c81ac0148d41512ccbf9408cc3b4f4bde8048d.png';

const filters = ['All Members (30)', 'Completed (18)', 'Yet to Show Up (12)'];

const students = [
  { name: 'Kabir Patel', status: 'Completed today', streak: 17, karma: 125, complete: true, tone: 'violet' },
  { name: 'Riya Shah', status: 'Completed today', streak: 12, karma: 110, complete: true, tone: 'rose' },
  { name: 'Aarav Mehta', status: 'Yet to show up', streak: 4, karma: 85, complete: false, tone: 'blue' },
  { name: 'Meera Joshi', status: 'Yet to show up', streak: 3, karma: 70, complete: false, tone: 'amber' },
];

const heroMetrics = [
  {
    icon: <UsersRound className="h-4 w-4 text-[#5840D4]" strokeWidth={2.4} />,
    iconClassName: 'bg-[linear-gradient(135deg,#F6F3FF_0%,#DDD8FF_100%)]',
    value: '30',
    label: 'Students',
  },
  {
    icon: <Check className="h-4 w-4 text-[#128263]" strokeWidth={2.7} />,
    iconClassName: 'bg-[linear-gradient(135deg,#E5FFF3_0%,#BDF2E5_100%)]',
    value: '18',
    label: 'Completed',
  },
  {
    icon: <Hourglass className="h-4 w-4 text-[#D98716]" strokeWidth={2.4} />,
    iconClassName: 'bg-[linear-gradient(135deg,#FFF6E3_0%,#FFE2AB_100%)]',
    value: '12',
    label: 'Pending',
  },
  {
    icon: <Flame className="h-4 w-4 text-[#F05A3B]" strokeWidth={2.4} />,
    iconClassName: 'bg-[linear-gradient(135deg,#FFF1ED_0%,#FFD9CE_100%)]',
    value: '67%',
    label: '7-Day Avg',
  },
];

export default function LeagueScreen() {
  const navigate = useNavigate();
  const [classMeditation, setClassMeditation] = useState({
    title: '5-Min Calm Reset',
    description: 'A short reset to pause, breathe, and return with more clarity.',
  });

  useEffect(() => {
    const savedMeditation = window.localStorage.getItem('bodhiClassMeditation');
    if (!savedMeditation) return;

    try {
      const parsed = JSON.parse(savedMeditation) as Partial<typeof classMeditation>;
      setClassMeditation((current) => ({
        title: parsed.title || current.title,
        description: parsed.description || current.description,
      }));
    } catch {
      // Ignore malformed prototype state and keep the default class meditation.
    }
  }, []);

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md pb-6">
      <StatusBar />

      <header className="flex items-center justify-between px-5 pb-3 pt-3">
        <button
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/80 shadow-[0px_10px_22px_rgba(84,75,187,0.10)] backdrop-blur-xl active:scale-[0.96]"
        >
          <ArrowLeft className="h-5 w-5 text-[#5840D4]" strokeWidth={2.4} />
        </button>

        <div className="min-w-0 flex-1 px-3 text-center">
          <h1 className="text-[31px] font-extrabold leading-9 tracking-normal text-[#5840D4]">
            League
          </h1>
          <p className="mt-0.5 text-[15px] font-semibold leading-5 text-[#5A5B62]">
            Grade 8A · 30 students
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <button
            aria-label="Notifications"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/80 bg-white/80 shadow-[0px_10px_22px_rgba(84,75,187,0.10)] backdrop-blur-xl active:scale-[0.96]"
          >
            <Bell className="h-[18px] w-[18px] text-[#2D2E34]" strokeWidth={2.4} />
          </button>
          <button
            aria-label="Teacher profile"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5840D4_0%,#704AF5_100%)] shadow-[0px_12px_24px_rgba(84,75,187,0.22)] active:scale-[0.96]"
          >
            <UserRound className="h-6 w-6 text-white" strokeWidth={2.3} />
          </button>
        </div>
      </header>

      <main className="space-y-4 px-5">
        <section className="overflow-hidden rounded-[24px] bg-[linear-gradient(126deg,#5840D4_0%,#6751F3_45%,#39A2F4_100%)] p-3.5 text-white shadow-[0px_18px_38px_rgba(84,75,187,0.24)]">
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_12%,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0)_34%),linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_52%,rgba(189,242,229,0.16)_100%)]" />
            <div className="absolute -right-16 -top-14 h-40 w-40 rounded-full bg-white/12 blur-3xl" />

            <div className="relative">
              <div className="inline-flex h-8 items-center gap-2 rounded-full border border-white/24 bg-white/18 px-4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.30)] backdrop-blur-xl">
                <UsersRound className="h-4 w-4" strokeWidth={2.3} />
                <span className="text-[11px] font-extrabold uppercase leading-4 text-white/95">
                  Today&apos;s Class Status
                </span>
              </div>

              <div className="relative mt-4 min-h-[92px]">
                <div className="absolute right-[-2px] top-[-12px]">
                  <ProgressRing />
                </div>
                <div className="min-w-0 pr-[104px]">
                  <h2 className="max-w-[250px] text-[17px] font-extrabold leading-[22px] tracking-normal text-white">
                    18 of 30 students completed today&apos;s meditation.
                  </h2>
                  <p className="mt-2.5 max-w-[240px] text-[13px] font-semibold leading-[18px] text-white/86">
                    60% of Grade 8A completed today
                  </p>
                </div>
              </div>

              <HeroStatStrip />
            </div>
          </div>
        </section>

        <section className="relative min-h-[204px] rounded-[24px] border border-white/82 bg-white/90 p-4 shadow-[0px_16px_36px_rgba(84,75,187,0.13)] backdrop-blur-xl">
          <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-[rgba(18,130,99,0.10)] px-2.5 py-1 text-[10px] font-bold leading-3 text-[#126C55]">
            <CheckCircle2 className="h-3 w-3" strokeWidth={2.4} />
            Assigned
          </div>

          <div className="grid grid-cols-[70px_minmax(0,1fr)] gap-3.5">
            <div className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0px_12px_26px_rgba(84,75,187,0.12)]">
              <div className="h-[58px] w-[58px] overflow-hidden rounded-full bg-[#EEF2FA]">
              <img src={meditationHeroImage} alt="Meditation artwork" className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <p className="max-w-[172px] whitespace-nowrap text-[10px] font-extrabold uppercase leading-4 text-[#6D5BFF]">
                Today&apos;s Class Meditation
              </p>
              <h2 className="mt-1 max-w-[158px] text-[19px] font-extrabold leading-[23px] tracking-normal text-[#101221]">
                {classMeditation.title}
              </h2>
              <p className="mt-1.5 text-[13.5px] font-semibold leading-[18px] text-[#5A5B62]">
                Ready for today&apos;s class practice
              </p>
            </div>
          </div>

          <div className="mt-9 grid grid-cols-[1.03fr_0.97fr] gap-3">
            <button
              onClick={() => navigate('/home/explore?assign=class')}
              className="flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[linear-gradient(135deg,#7457FF_0%,#5840D4_52%,#4F7CF7_100%)] px-3 text-center text-[12.5px] font-extrabold leading-4 text-white shadow-[0px_12px_24px_rgba(84,75,187,0.24),inset_0px_1px_0px_rgba(255,255,255,0.22)] active:scale-[0.98]"
            >
              <PencilLine className="h-4 w-4 shrink-0" strokeWidth={2.3} />
              <span>Change Meditation</span>
            </button>
            <button
              onClick={() => navigate('/home/sessions/assign-individually')}
              className="flex min-h-[46px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#E0DCF4] bg-[linear-gradient(135deg,#FFFFFF_0%,#F5F1FF_100%)] px-3 text-center text-[12.5px] font-extrabold leading-4 text-[#5840D4] shadow-[0px_10px_20px_rgba(84,75,187,0.09),inset_0px_1px_0px_rgba(255,255,255,0.9)] active:scale-[0.98]"
            >
              <UsersRound className="h-4 w-4 shrink-0" strokeWidth={2.3} />
              <span>Assign Individually</span>
            </button>
          </div>
        </section>

        <section className="pb-4">
          <h2 className="px-1 text-[22px] font-extrabold leading-8 tracking-normal text-[#101221]">
            Students
          </h2>

          <div className="-mx-5 mt-3 overflow-x-auto px-5 pb-1 scrollbar-hide">
            <div className="flex min-w-max gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`h-10 rounded-full border px-5 text-[13px] font-bold leading-5 active:scale-[0.98] ${
                    index === 0
                      ? 'border-[#5840D4] bg-white text-[#5840D4] shadow-[0px_8px_18px_rgba(84,75,187,0.10)]'
                      : 'border-[#DCD8F2] bg-white/62 text-[#5A5B62]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {students.map((student) => (
              <button
                key={student.name}
                onClick={() => navigate('/home/sessions/member-profile')}
                className="flex w-full items-center gap-3 rounded-[22px] border border-white/84 bg-white/84 p-3 text-left shadow-[0px_10px_24px_rgba(84,75,187,0.10)] backdrop-blur-xl active:scale-[0.99]"
              >
                <StudentAvatar name={student.name} tone={student.tone} complete={student.complete} />
                <div className="min-w-0 flex-1">
                  <div className="flex min-w-0 items-center justify-between gap-2">
                    <div className="min-w-0">
                      <h3 className="truncate text-[15px] font-extrabold leading-5 text-[#101221]">
                        {student.name}
                      </h3>
                      <span
                        className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold leading-3 ${
                          student.complete
                            ? 'bg-[rgba(35,176,109,0.13)] text-[#128263]'
                            : 'bg-[rgba(255,207,138,0.24)] text-[#D85319]'
                        }`}
                      >
                        {student.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-2">
                    <div className="inline-flex min-w-0 items-center gap-1 rounded-full bg-[#FFF4E4] px-2.5 py-1.5 text-[11.5px] font-extrabold leading-4 text-[#A36B12]">
                      <Flame className="h-3.5 w-3.5 shrink-0 text-[#D98716]" strokeWidth={2.4} />
                      <span className="truncate tabular-nums">{student.streak}-day streak</span>
                    </div>
                    <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#EEE8FF] px-2.5 py-1.5 text-[11.5px] font-extrabold leading-4 text-[#5840D4]">
                      <Sparkles className="h-3.5 w-3.5" strokeWidth={2.3} />
                      <span className="tabular-nums">{student.karma}</span>
                      <span>karma</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 shrink-0 text-[#5A5B62]/55" strokeWidth={2.2} />
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ProgressRing() {
  const radius = 39;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex h-[108px] w-[108px] items-center justify-center">
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="leagueRingGradient" x1="10" y1="10" x2="90" y2="90">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="42%" stopColor="#F7FEFF" />
            <stop offset="74%" stopColor="#D7FFF7" />
            <stop offset="100%" stopColor="#A9F0FF" />
          </linearGradient>
          <filter id="leagueRingGlow" x="-35%" y="-35%" width="170%" height="170%">
            <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor="#FFFFFF" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#DDFBFF" floodOpacity="0.55" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,0.30)" strokeWidth="12" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.82)"
          strokeWidth="13"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.4}
          filter="url(#leagueRingGlow)"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="url(#leagueRingGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.4}
        />
      </svg>
      <div className="text-center">
        <div className="text-[16.5px] font-extrabold leading-5 text-white">18/30</div>
        <div className="text-[8px] font-bold leading-3 text-white/92">Completed</div>
      </div>
    </div>
  );
}

function HeroStatStrip() {
  return (
    <div className="relative mt-3 flex h-[78px] items-stretch overflow-hidden rounded-[17px]">
        {heroMetrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`relative flex h-full w-[calc((100%+30px)/4)] shrink-0 flex-col items-center justify-center px-1.5 text-center backdrop-blur-xl ${
              index === 0
                ? 'z-[4] rounded-l-[17px] rounded-r-[6px] border border-white/32 bg-white/25 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.36),0px_8px_18px_rgba(43,35,139,0.10)]'
                : index === 1
                  ? 'z-[3] -ml-2.5 rounded-l-none rounded-r-[6px] border-y border-r border-white/30 bg-white/23 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.34),0px_8px_18px_rgba(43,35,139,0.09)]'
                  : index === 2
                    ? 'z-[2] -ml-2.5 rounded-l-none rounded-r-[6px] border-y border-r border-white/28 bg-white/21 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.32),0px_8px_18px_rgba(43,35,139,0.08)]'
                    : 'z-[1] -ml-2.5 rounded-l-none rounded-r-[17px] border-y border-r border-white/28 bg-white/23 shadow-[inset_1px_1px_0px_rgba(255,255,255,0.30),0px_8px_18px_rgba(43,35,139,0.08)]'
            }`}
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.10)_55%,rgba(219,246,255,0.18)_100%)]" />
            <div className="relative">
              <div className={`mx-auto flex h-[30px] w-[30px] items-center justify-center rounded-full shadow-[inset_0px_1px_0px_rgba(255,255,255,0.72),0px_6px_14px_rgba(84,75,187,0.08)] ${metric.iconClassName}`}>
                {metric.icon}
              </div>
              <div className="mt-1 text-[18px] font-extrabold leading-[22px] text-[#101221] tabular-nums">
                {metric.value}
              </div>
              <div className="text-[9.5px] font-semibold leading-3 text-[#2D2E34]/74">
                {metric.label}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

function StudentAvatar({ name, tone, complete }: { name: string; tone: string; complete: boolean }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('');

  const tones: Record<string, string> = {
    violet: 'from-[#6D5BFF] via-[#A29BFF] to-[#DDD9FF]',
    rose: 'from-[#F49AB8] via-[#FFD2DC] to-[#FFF0F2]',
    blue: 'from-[#58A8F5] via-[#C9E7FF] to-[#EEF7FF]',
    amber: 'from-[#F3B15B] via-[#FFE0B8] to-[#FFF2D8]',
  };

  return (
    <div className="relative flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full border border-[#DCD8F2] bg-white shadow-[0px_7px_16px_rgba(84,75,187,0.10)]">
      <div className={`flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br ${tones[tone] ?? tones.violet}`}>
        <span className="text-[13px] font-extrabold leading-4 text-[#101221]">{initials}</span>
      </div>
      <span className={`absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-white ${complete ? 'bg-[#23B06D]' : 'bg-[#F3A545]'}`} />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-2 pt-4">
      <div className="text-[14px] font-semibold leading-5 tracking-normal text-black">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg className="h-[12px] w-[19px]" viewBox="0 0 19.2 12.2264" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" fill="black" />
        </svg>
        <svg className="h-[12px] w-[17px]" viewBox="0 0 17.1417 12.3283" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.2877 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" fill="black" />
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
