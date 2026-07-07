import {
  ArrowLeft,
  Check,
  ChevronRight,
  Flame,
  Heart,
  HeartHandshake,
  Leaf,
  MoreHorizontal,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
  X,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const badges = [
  {
    title: 'Calm Builder',
    tone: 'mint',
    icon: <Sparkles className="h-7 w-7" strokeWidth={2.2} />,
  },
  {
    title: 'Steady Streak',
    tone: 'amber',
    icon: <Flame className="h-7 w-7" strokeWidth={2.2} />,
  },
  {
    title: 'Focus Initiator',
    tone: 'blue',
    icon: <Target className="h-7 w-7" strokeWidth={2.2} />,
  },
  {
    title: 'Kind Classmate',
    tone: 'violet',
    icon: <HeartHandshake className="h-7 w-7" strokeWidth={2.2} />,
  },
];

const karmaAmounts = [5, 10, 15];

const karmaReasons = [
  {
    label: 'Helped me',
    icon: <HeartHandshake className="h-5 w-5" strokeWidth={2.2} />,
    tone: 'rose',
  },
  {
    label: 'Encouraged me',
    icon: <Sparkles className="h-5 w-5" strokeWidth={2.2} />,
    tone: 'amber',
  },
  {
    label: 'Showed kindness',
    icon: <Heart className="h-5 w-5" strokeWidth={2.2} />,
    tone: 'mint',
  },
  {
    label: 'Was welcoming',
    icon: <UsersRound className="h-5 w-5" strokeWidth={2.2} />,
    tone: 'violet',
  },
];

export default function MemberProfileScreen() {
  const navigate = useNavigate();
  const [isKarmaSheetOpen, setIsKarmaSheetOpen] = useState(false);
  const [selectedKarma, setSelectedKarma] = useState(10);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [note, setNote] = useState('');
  const [isKarmaSentOpen, setIsKarmaSentOpen] = useState(false);

  useEffect(() => {
    if (!isKarmaSentOpen) return;

    const timer = window.setTimeout(() => {
      setIsKarmaSentOpen(false);
      setIsKarmaSheetOpen(false);
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [isKarmaSentOpen]);

  const closeKarmaSent = () => {
    setIsKarmaSentOpen(false);
    setIsKarmaSheetOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white pb-32">
      <div className="pointer-events-none absolute left-[34%] top-[-80px] h-[300px] w-[300px] rounded-full bg-[rgba(102,163,255,0.14)] blur-[50px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[260px] h-[280px] w-[280px] rounded-full bg-[rgba(154,148,255,0.14)] blur-[58px]" />
      <div className="pointer-events-none absolute left-[-110px] top-[610px] h-[260px] w-[260px] rounded-full bg-[rgba(255,207,138,0.12)] blur-[58px]" />

      <div className="relative z-10">
        <StatusBar />

        <header className="flex items-center justify-between px-6 pb-5 pt-4">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(232,231,241,0.85)] bg-white shadow-[0px_6px_16px_0px_rgba(84,75,187,0.07)]"
          >
            <ArrowLeft className="h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
          </button>

          <h1 className="min-w-0 flex-1 px-4 text-center text-[24px] font-bold leading-8 text-[#5840D4]">
            Member Profile
          </h1>

          <button
            aria-label="More options"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(232,231,241,0.85)] bg-white shadow-[0px_6px_16px_0px_rgba(84,75,187,0.07)]"
          >
            <MoreHorizontal className="h-5 w-5 text-[#5840D4]" strokeWidth={2.4} />
          </button>
        </header>

        <main className="space-y-6 px-6">
          <section className="relative overflow-hidden rounded-[22px] border border-[rgba(216,212,240,0.95)] bg-white p-5 shadow-[0px_16px_36px_0px_rgba(84,75,187,0.14)]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,1)_0%,rgba(250,248,255,0.98)_48%,rgba(239,244,255,0.94)_100%)]" />
            <div className="pointer-events-none absolute right-[-70px] top-[-82px] h-48 w-48 rounded-full bg-[rgba(154,148,255,0.18)] blur-[24px]" />

            <div className="relative flex items-center gap-4">
              <ProfileAvatar />
              <div className="min-w-0 flex-1">
                <h2 className="text-[24px] font-bold leading-8 text-[#2D2E34]">
                  Aarav Mehta
                </h2>
                <p className="mt-1 text-[14px] font-semibold leading-5 text-[#5A5B62]">
                  Grade 8A
                </p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[rgba(18,130,99,0.10)] px-3 py-1.5 text-[12px] font-bold leading-4 text-[#128263]">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                  Completed today
                </div>
              </div>
            </div>

            <div className="relative mt-5 border-t border-[#E8E7F1] pt-4">
              <div className="grid grid-cols-3 gap-2">
                <ProfileIndicator
                  icon={<Flame className="h-4 w-4 text-[#5840D4]" strokeWidth={2.2} />}
                  value="12"
                  label="Day streak"
                  tone="violet"
                />
                <ProfileIndicator
                  icon={<ShieldCheck className="h-4 w-4 text-[#D98716]" strokeWidth={2.2} />}
                  value="Steady"
                  label="Consistency tier"
                  tone="amber"
                />
                <ProfileIndicator
                  icon={<Sparkles className="h-4 w-4 text-[#5840D4]" strokeWidth={2.2} />}
                  value="84"
                  label="Karma received"
                  tone="violet"
                />
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-[18px] font-bold leading-7 text-[#2D2E34]">
              Badges
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <BadgeCard key={badge.title} {...badge} />
              ))}
            </div>
          </section>

          <section className="flex items-center gap-3 rounded-[20px] border border-[rgba(232,231,241,0.92)] bg-[rgba(248,247,255,0.82)] px-4 py-4 shadow-[0px_8px_20px_0px_rgba(84,75,187,0.07)]">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(88,64,212,0.09)] text-[#5840D4]">
              <Sparkles className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <p className="text-[14px] font-semibold leading-5 text-[#5A5B62]">
              <span className="font-bold text-[#5840D4]">84 karma</span> received from classmates and teachers
            </p>
          </section>

          <button
            onClick={() => setIsKarmaSheetOpen(true)}
            className="flex h-14 w-full items-center justify-between rounded-full px-6 text-[18px] font-bold leading-7 text-white shadow-[0px_14px_28px_0px_rgba(84,75,187,0.20)]"
            style={{
              backgroundImage:
                'linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)',
            }}
          >
            <span className="flex items-center gap-3">
              <Sparkles className="h-6 w-6" strokeWidth={2.3} />
              Give Karma
            </span>
            <ChevronRight className="h-6 w-6" strokeWidth={2.4} />
          </button>
        </main>
      </div>

      {isKarmaSheetOpen && (
        <div className="fixed inset-0 z-[10000] flex items-end justify-center">
          <button
            aria-label="Close give karma sheet"
            className="absolute inset-0 bg-[rgba(22,23,32,0.46)] backdrop-blur-[2px]"
            onClick={() => setIsKarmaSheetOpen(false)}
          />

          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="give-karma-title"
            className="relative z-10 max-h-[calc(100dvh-16px)] w-full max-w-md overflow-y-auto rounded-t-[32px] border border-white/80 bg-white px-6 pb-[max(1.75rem,calc(env(safe-area-inset-bottom)+1.75rem))] pt-5 shadow-[0px_-18px_42px_rgba(45,46,52,0.18)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-t-[32px] bg-[linear-gradient(145deg,rgba(255,255,255,1)_0%,rgba(250,248,255,0.98)_48%,rgba(242,240,255,0.96)_100%)]" />
            <div className="pointer-events-none absolute right-[-90px] top-[-80px] h-56 w-56 rounded-full bg-[rgba(154,148,255,0.16)] blur-[42px]" />

            <div className="relative">
              <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-[#C9C8D4]" />
              <button
                aria-label="Close"
                onClick={() => setIsKarmaSheetOpen(false)}
                className="absolute right-0 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(232,231,241,0.9)] bg-white shadow-[0px_6px_16px_rgba(84,75,187,0.08)]"
              >
                <X className="h-5 w-5 text-[#2D2E34]" strokeWidth={2.2} />
              </button>

              <div className="pr-14">
                <h2 id="give-karma-title" className="text-[24px] font-bold leading-8 text-[#5840D4]">
                  Give Karma
                </h2>
                <p className="mt-1 text-[14px] font-semibold leading-5 text-[#5A5B62]">
                  to Aarav Mehta
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgba(88,64,212,0.09)] text-[#5840D4]">
                  <Sparkles className="h-5 w-5" strokeWidth={2.2} />
                </div>
                <p className="text-[12px] font-medium leading-4 text-[#5A5B62]">
                  Appreciate a classmate for a meaningful social action.
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-[14px] font-bold leading-5 text-[#2D2E34]">
                  Choose amount
                </h3>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {karmaAmounts.map((amount) => {
                    const selected = selectedKarma === amount;
                    return (
                      <button
                        key={amount}
                        onClick={() => setSelectedKarma(amount)}
                        className={`min-h-[96px] rounded-[20px] border px-2 py-4 text-center shadow-[0px_8px_20px_rgba(84,75,187,0.08)] transition-all ${
                          selected
                            ? 'border-[#5840D4] bg-[rgba(88,64,212,0.055)] ring-2 ring-[rgba(88,64,212,0.14)]'
                            : 'border-[rgba(232,231,241,0.9)] bg-white'
                        }`}
                      >
                        <div
                          className={`mx-auto flex h-10 w-10 items-center justify-center rounded-full ${
                            selected
                              ? 'bg-[#5840D4] text-white shadow-[0px_8px_18px_rgba(84,75,187,0.18)]'
                              : 'bg-[rgba(88,64,212,0.08)] text-[#5840D4]'
                          }`}
                        >
                          <Sparkles className="h-5 w-5" strokeWidth={2.2} />
                        </div>
                        <div
                          className={`mt-3 text-[14px] font-bold leading-5 ${
                            selected ? 'text-[#5840D4]' : 'text-[#2D2E34]'
                          }`}
                        >
                          {amount} karma
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-[14px] font-bold leading-5 text-[#2D2E34]">
                  Reason
                </h3>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  {karmaReasons.map((reason) => (
                    <button
                      key={reason.label}
                      onClick={() => setSelectedReason(reason.label)}
                      className={`flex min-h-[72px] items-center gap-3 rounded-[18px] border px-3 text-left shadow-[0px_8px_18px_rgba(84,75,187,0.07)] transition-all ${
                        selectedReason === reason.label
                          ? 'border-[#5840D4] bg-[rgba(88,64,212,0.045)] ring-2 ring-[rgba(88,64,212,0.10)]'
                          : 'border-[rgba(232,231,241,0.9)] bg-white'
                      }`}
                    >
                      <ReasonIcon tone={reason.tone}>{reason.icon}</ReasonIcon>
                      <span className="text-[12px] font-bold leading-4 text-[#2D2E34]">
                        {reason.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="text-[14px] font-bold leading-5 text-[#2D2E34]">
                  Add a note (optional)
                </label>
                <div className="relative mt-3">
                  <textarea
                    value={note}
                    onChange={(event) => setNote(event.target.value.slice(0, 120))}
                    placeholder="Write a short note..."
                    className="h-28 w-full resize-none rounded-[18px] border border-[rgba(216,212,240,0.95)] bg-white px-4 py-3 text-[14px] font-medium leading-5 text-[#2D2E34] outline-none placeholder:text-[#5A5B62]/55 shadow-[inset_0px_1px_2px_rgba(84,75,187,0.05)]"
                  />
                  <div className="absolute bottom-3 right-4 text-[10px] font-bold leading-3 text-[#5A5B62]/65">
                    {note.length}/120
                  </div>
                </div>
              </div>

              <div className="h-24" />
            </div>
          </section>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 mx-auto max-w-md px-6 pb-[max(1rem,env(safe-area-inset-bottom))] pt-8">
            <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(250,248,255,0)_0%,rgba(250,248,255,0.96)_38%,rgba(250,248,255,1)_100%)]" />
            <button
              onClick={() => setIsKarmaSentOpen(true)}
              className="pointer-events-auto relative flex h-14 w-full items-center justify-center gap-3 rounded-full text-[18px] font-bold leading-7 text-white shadow-[0px_14px_28px_rgba(84,75,187,0.24)]"
              style={{
                backgroundImage:
                  'linear-gradient(8.34389deg, rgb(84, 75, 187) 0%, rgb(154, 148, 255) 100%)',
              }}
            >
              <Sparkles className="h-5 w-5" strokeWidth={2.3} />
              Send Karma
            </button>
          </div>
        </div>
      )}

      {isKarmaSentOpen && (
        <div className="fixed inset-0 z-[10020] flex items-center justify-center px-6">
          <button
            aria-label="Dismiss karma sent acknowledgement"
            className="absolute inset-0 bg-[rgba(22,23,32,0.58)] backdrop-blur-[4px] animate-in fade-in-0 duration-200"
            onClick={closeKarmaSent}
          />

          <section
            role="status"
            aria-live="polite"
            className="relative z-10 w-full max-w-[350px] overflow-hidden rounded-[28px] border border-white/80 bg-white px-6 py-7 text-center shadow-[0px_24px_56px_rgba(22,23,32,0.22)] animate-in fade-in-0 zoom-in-95 duration-200"
          >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,1)_0%,rgba(250,248,255,0.99)_48%,rgba(242,240,255,0.96)_100%)]" />
            <div className="pointer-events-none absolute left-1/2 top-7 h-36 w-36 -translate-x-1/2 rounded-full bg-[rgba(154,148,255,0.16)] blur-[6px]" />

            <div className="relative">
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[rgba(88,64,212,0.07)]">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[inset_0px_1px_0px_rgba(255,255,255,0.95),0px_12px_24px_rgba(84,75,187,0.12)]">
                  <HeartHandshake className="h-10 w-10 text-[#5840D4]" strokeWidth={2.1} />
                </div>
                <Sparkles className="absolute right-4 top-5 h-5 w-5 text-[#5840D4]" strokeWidth={2.2} />
                <Sparkles className="absolute bottom-7 left-4 h-4 w-4 text-[#D98716]" strokeWidth={2.2} />
              </div>

              <h2 className="mt-5 text-[24px] font-bold leading-8 text-[#2D2E34]">
                Karma sent!
              </h2>
              <p className="mx-auto mt-2 max-w-[250px] text-[14px] font-semibold leading-5 text-[#5A5B62]">
                Your kindness will make Aarav&apos;s day a little brighter.
              </p>

              <div className="mt-5 flex items-center rounded-[18px] border border-[rgba(232,231,241,0.92)] bg-white/78 p-3 text-left shadow-[inset_0px_1px_0px_rgba(255,255,255,0.92),0px_8px_18px_rgba(84,75,187,0.07)]">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(154,148,255,0.35)] bg-[rgba(88,64,212,0.08)] text-[12px] font-bold text-[#5840D4]">
                  AM
                </div>
                <div className="min-w-0 flex-1 px-3">
                  <div className="truncate text-[14px] font-bold leading-5 text-[#2D2E34]">
                    Aarav Mehta
                  </div>
                  <div className="text-[12px] font-semibold leading-4 text-[#5A5B62]">
                    Grade 8A
                  </div>
                </div>
                <div className="border-l border-[#E8E7F1] pl-3 text-right">
                  <div className="flex items-center justify-end gap-1 text-[18px] font-bold leading-6 text-[#5840D4]">
                    <Sparkles className="h-4 w-4" strokeWidth={2.2} />
                    +{selectedKarma}
                  </div>
                  <div className="text-[10px] font-bold uppercase leading-3 tracking-[0.3px] text-[#5A5B62]/70">
                    karma
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-[#E8E7F1] pt-5">
                <p className="flex items-center justify-center gap-2 text-[12px] font-bold leading-4 text-[#5A5B62]">
                  <Leaf className="h-4 w-4 text-[#128263]" strokeWidth={2.2} />
                  Small actions. Stronger community.
                </p>
                <div className="mx-auto mt-4 flex items-center justify-center gap-3 text-[#5840D4]">
                  <span className="h-px w-10 bg-[#E8E7F1]" />
                  <Heart className="h-5 w-5" strokeWidth={2.2} />
                  <span className="h-px w-10 bg-[#E8E7F1]" />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

function ReasonIcon({ tone, children }: { tone: string; children: ReactNode }) {
  const tones: Record<string, string> = {
    rose: 'bg-[rgba(240,104,104,0.12)] text-[#B94B57]',
    amber: 'bg-[rgba(255,207,138,0.22)] text-[#D98716]',
    mint: 'bg-[rgba(18,130,99,0.10)] text-[#128263]',
    violet: 'bg-[rgba(88,64,212,0.09)] text-[#5840D4]',
  };

  return (
    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${tones[tone] ?? tones.violet}`}>
      {children}
    </span>
  );
}

function ProfileAvatar() {
  return (
    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-[rgba(154,148,255,0.45)] bg-[linear-gradient(135deg,rgba(88,64,212,0.14),rgba(154,148,255,0.24))] shadow-[inset_0px_2px_0px_rgba(255,255,255,0.9),0px_12px_24px_rgba(84,75,187,0.12)]">
      <span className="text-[24px] font-bold leading-8 text-[#5840D4]">AM</span>
    </div>
  );
}

function ProfileIndicator({
  icon,
  value,
  label,
  tone,
}: {
  icon: ReactNode;
  value: string;
  label: string;
  tone: 'violet' | 'amber';
}) {
  const toneClass =
    tone === 'amber'
      ? 'bg-[rgba(255,207,138,0.18)] text-[#7A5A18]'
      : 'bg-[rgba(88,64,212,0.08)] text-[#5840D4]';

  return (
    <div className="min-w-0 rounded-[18px] border border-white/70 bg-white/66 px-3 py-3 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.92)]">
      <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${toneClass}`}>
        {icon}
      </div>
      <div className="truncate text-[18px] font-bold leading-6 text-[#2D2E34]">
        {value}
      </div>
      <div className="mt-0.5 text-[10px] font-bold uppercase leading-3 tracking-[0.3px] text-[#5A5B62]/70">
        {label}
      </div>
    </div>
  );
}

function BadgeCard({
  title,
  tone,
  icon,
}: {
  title: string;
  tone: string;
  icon: ReactNode;
}) {
  const tones: Record<string, { bg: string; fg: string; ring: string }> = {
    mint: {
      bg: 'linear-gradient(135deg, rgba(18,130,99,0.14), rgba(181,229,205,0.30))',
      fg: '#128263',
      ring: 'rgba(18,130,99,0.22)',
    },
    amber: {
      bg: 'linear-gradient(135deg, rgba(255,207,138,0.28), rgba(255,244,225,0.78))',
      fg: '#D98716',
      ring: 'rgba(255,185,92,0.34)',
    },
    blue: {
      bg: 'linear-gradient(135deg, rgba(0,153,191,0.14), rgba(104,152,249,0.22))',
      fg: '#147DA0',
      ring: 'rgba(0,153,191,0.22)',
    },
    violet: {
      bg: 'linear-gradient(135deg, rgba(88,64,212,0.15), rgba(154,148,255,0.24))',
      fg: '#5840D4',
      ring: 'rgba(88,64,212,0.24)',
    },
  };
  const selected = tones[tone] ?? tones.violet;

  return (
    <div className="rounded-[20px] border border-[rgba(232,231,241,0.9)] bg-white px-3 py-4 text-center shadow-[0px_10px_24px_0px_rgba(84,75,187,0.09)]">
      <div
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9),0px_8px_18px_rgba(84,75,187,0.08)]"
        style={{
          background: selected.bg,
          borderColor: selected.ring,
          color: selected.fg,
        }}
      >
        {icon}
      </div>
      <h3 className="mx-auto mt-3 min-h-10 max-w-[92px] text-[14px] font-bold leading-5 text-[#2D2E34]">
        {title}
      </h3>
      <div className="mt-3 inline-flex rounded-full bg-[rgba(18,130,99,0.10)] px-3 py-1 text-[10px] font-bold uppercase leading-3 tracking-[0.3px] text-[#128263]">
        Earned
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pb-2 pt-4">
      <div className="text-[14px] font-semibold leading-5 tracking-normal">9:41</div>
      <div className="flex items-center gap-1.5">
        <svg className="h-[12px] w-[19px]" viewBox="0 0 19.2 12.2264" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M19.2 1.14623C19.2 0.513183 18.7224 0 18.1333 0H17.0667C16.4776 0 16 0.513183 16 1.14623V11.0802C16 11.7132 16.4776 12.2264 17.0667 12.2264H18.1333C18.7224 12.2264 19.2 11.7132 19.2 11.0802V1.14623ZM11.7659 2.44528H12.8326C13.4217 2.44528 13.8992 2.97078 13.8992 3.61902V11.0527C13.8992 11.7009 13.4217 12.2264 12.8326 12.2264H11.7659C11.1768 12.2264 10.6992 11.7009 10.6992 11.0527V3.61902C10.6992 2.97078 11.1768 2.44528 11.7659 2.44528ZM7.43411 5.09433H6.36745C5.77834 5.09433 5.30078 5.62652 5.30078 6.28301V11.0377C5.30078 11.6942 5.77834 12.2264 6.36745 12.2264H7.43411C8.02322 12.2264 8.50078 11.6942 8.50078 11.0377V6.28301C8.50078 5.62652 8.02322 5.09433 7.43411 5.09433ZM2.13333 7.53962H1.06667C0.477563 7.53962 0 8.06421 0 8.71132V11.0547C0 11.7018 0.477563 12.2264 1.06667 12.2264H2.13333C2.72244 12.2264 3.2 11.7018 3.2 11.0547V8.71132C3.2 8.06421 2.72244 7.53962 2.13333 7.53962Z" fill="black" />
        </svg>
        <svg className="h-[12px] w-[17px]" viewBox="0 0 17.1417 12.3283" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.5713 2.46628C11.0584 2.46639 13.4504 3.38847 15.2529 5.04195C15.3887 5.1696 15.6056 5.16799 15.7393 5.03834L17.0368 3.77487C17.1045 3.70911 17.1422 3.62004 17.1417 3.52735C17.1411 3.43467 17.1023 3.34603 17.0338 3.28104C12.3028 -1.09368 4.83907 -1.09368 0.108056 3.28104C0.039524 3.34598 0.000639766 3.4346 7.82398e-06 3.52728C-0.000624118 3.61996 0.0370483 3.70906 0.104689 3.77487L1.40255 5.03834C1.53615 5.16819 1.75327 5.1698 1.88893 5.04195C3.69167 3.38836 6.08395 2.46628 8.5713 2.46628ZM8.56795 6.68656C9.92527 6.68647 11.2341 7.19821 12.2403 8.12234C12.3763 8.2535 12.5907 8.25065 12.7234 8.11593L14.0106 6.79663C14.0784 6.72742 14.1161 6.63355 14.1151 6.53599C14.1141 6.43844 14.0746 6.34536 14.0054 6.27757C10.9416 3.38672 6.19688 3.38672 3.13305 6.27757C3.06384 6.34536 3.02435 6.43849 3.02345 6.53607C3.02254 6.63365 3.06028 6.72752 3.12822 6.79663L4.41513 8.11593C4.54778 8.25065 4.76215 8.2535 4.89823 8.12234C5.90368 7.19882 7.21152 6.68713 8.56795 6.68656ZM11.0924 9.48011C11.0943 9.58546 11.0572 9.68703 10.9899 9.76084L8.81327 12.2156C8.74946 12.2877 8.66247 12.3283 8.5717 12.3283C8.48093 12.3283 8.39394 12.3283 8.33013 12.2156L6.1531 9.76084C6.08585 9.68697 6.04886 9.58537 6.05085 9.48002C6.05284 9.37467 6.09365 9.27491 6.16364 9.20429C7.55374 7.8904 9.58966 7.8904 10.9798 9.20429C11.0497 9.27497 11.0904 9.37476 11.0924 9.48011Z" fill="black" />
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
