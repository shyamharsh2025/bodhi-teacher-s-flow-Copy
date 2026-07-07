import {
  ArrowLeft,
  Check,
  ChevronRight,
  CheckCircle2,
  Filter,
  Search,
  Sparkles,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';

type FilterKey = 'all' | 'completed' | 'pending' | 'individual';

const filters: Array<{ key: FilterKey; label: string }> = [
  { key: 'all', label: 'All (30)' },
  { key: 'completed', label: 'Completed (18)' },
  { key: 'pending', label: 'Yet to Show Up (12)' },
  { key: 'individual', label: 'Individually Assigned (5)' },
];

const students = [
  {
    name: 'Kabir Patel',
    status: 'Yet to show up',
    completed: false,
    assignedType: 'class',
    meditation: '5-Min Calm Reset',
    tone: 'violet',
  },
  {
    name: 'Riya Shah',
    status: 'Completed today',
    completed: true,
    assignedType: 'class',
    meditation: '5-Min Calm Reset',
    tone: 'rose',
  },
  {
    name: 'Aarav Mehta',
    status: 'Completed today',
    completed: true,
    assignedType: 'individual',
    meditation: 'Confidence Reset',
    tone: 'blue',
  },
  {
    name: 'Meera Joshi',
    status: 'Yet to show up',
    completed: false,
    assignedType: 'class',
    meditation: '5-Min Calm Reset',
    tone: 'amber',
  },
  {
    name: 'Vivaan Kapoor',
    status: 'Yet to show up',
    completed: false,
    assignedType: 'class',
    meditation: '5-Min Calm Reset',
    tone: 'mint',
  },
  {
    name: 'Ananya Iyer',
    status: 'Completed today',
    completed: true,
    assignedType: 'individual',
    meditation: 'Focus Booster',
    tone: 'peach',
  },
];

export default function AssignIndividuallyScreen() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [query, setQuery] = useState('');
  const [selectedNames, setSelectedNames] = useState<string[]>([]);

  const visibleStudents = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return students.filter((student) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        student.name.toLowerCase().includes(normalizedQuery) ||
        student.meditation.toLowerCase().includes(normalizedQuery);

      const matchesFilter =
        activeFilter === 'all' ||
        (activeFilter === 'completed' && student.completed) ||
        (activeFilter === 'pending' && !student.completed) ||
        (activeFilter === 'individual' && student.assignedType === 'individual');

      return matchesQuery && matchesFilter;
    });
  }, [activeFilter, query]);

  const selectedStudents = useMemo(
    () => students.filter((student) => selectedNames.includes(student.name)),
    [selectedNames],
  );
  const selectedCount = selectedStudents.length;
  const hasReplacement = selectedStudents.some((student) => student.assignedType === 'individual');

  const toggleStudent = (name: string) => {
    setSelectedNames((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  const assignSelectedStudents = () => {
    if (selectedCount === 0) return;

    window.localStorage.setItem(
      'bodhiSelectedStudentAssignmentDraft',
      JSON.stringify({
        names: selectedNames,
        count: selectedCount,
        hasReplacement,
        startedAt: Date.now(),
      }),
    );

    const params = new URLSearchParams({
      assign: 'students',
      count: String(selectedCount),
    });

    if (hasReplacement) params.set('replace', '1');

    navigate(`/home/explore?${params.toString()}`);
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md pb-36">
      <StatusBar />

      <header className="flex items-center justify-between px-5 pb-3 pt-3">
        <button
          aria-label="Go back"
          onClick={() => navigate(-1)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/80 bg-white/80 shadow-[0px_10px_22px_rgba(84,75,187,0.10)] backdrop-blur-xl active:scale-[0.96]"
        >
          <ArrowLeft className="h-5 w-5 text-[#5840D4]" strokeWidth={2.4} />
        </button>

        <div className="min-w-0 flex-1 px-2 text-center">
          <h1 className="whitespace-nowrap text-[25px] font-extrabold leading-8 tracking-normal text-[#5840D4]">
            Assign Individually
          </h1>
          <p className="mt-0.5 text-[15px] font-semibold leading-5 text-[#5A5B62]">
            Grade 8A · 30 students
          </p>
        </div>

        <button
          aria-label="Teacher profile"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#5840D4_0%,#704AF5_100%)] shadow-[0px_12px_24px_rgba(84,75,187,0.22)] active:scale-[0.96]"
        >
          <UserRound className="h-6 w-6 text-white" strokeWidth={2.3} />
        </button>
      </header>

      <main className="space-y-4 px-5">
        <section className="relative overflow-hidden rounded-[24px] border border-white/82 bg-white/76 p-4 shadow-[0px_16px_36px_rgba(84,75,187,0.12)] backdrop-blur-xl">
          <div className="absolute right-[-44px] top-[-48px] h-32 w-32 rounded-full bg-[#CFC8FF]/32 blur-3xl" />
          <div className="absolute bottom-[-58px] left-[-48px] h-32 w-32 rounded-full bg-[#BFD8FF]/28 blur-3xl" />

          <div className="relative grid grid-cols-[76px_minmax(0,1fr)] items-center gap-4">
            <div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#DDD8FF] bg-[linear-gradient(135deg,#FFFFFF_0%,#F1ECFF_100%)] shadow-[0px_12px_28px_rgba(84,75,187,0.14),inset_0px_1px_0px_rgba(255,255,255,0.9)]">
              <UsersRound className="h-8 w-8 text-[#5840D4]" strokeWidth={2.35} />
              <span className="absolute right-1 top-8 flex h-8 w-8 items-center justify-center rounded-full bg-[#DED8FF] shadow-[0px_8px_16px_rgba(84,75,187,0.14)]">
                <Sparkles className="h-4 w-4 text-[#5840D4]" strokeWidth={2.5} />
              </span>
              <Sparkles className="absolute -left-3 top-1 h-3.5 w-3.5 text-[#A59BFF]/70" strokeWidth={2.2} />
              <Sparkles className="absolute -bottom-1 right-[-10px] h-3.5 w-3.5 text-[#A59BFF]/55" strokeWidth={2.2} />
            </div>

            <div className="min-w-0">
              <h2 className="text-[20px] font-extrabold leading-6 tracking-normal text-[#5840D4]">
                Choose students
              </h2>
              <p className="mt-2 text-[14px] font-semibold leading-5 text-[#5A5B62]">
                Select one or more students to assign a meditation for today.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <div className="flex items-center gap-3">
            <label className="flex h-12 min-w-0 flex-1 items-center gap-3 rounded-full border border-[#E2DEF6] bg-white/86 px-4 shadow-[0px_10px_24px_rgba(84,75,187,0.08)] backdrop-blur-xl">
              <Search className="h-5 w-5 shrink-0 text-[#5A5B62]" strokeWidth={2.2} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search students..."
                className="h-full min-w-0 flex-1 bg-transparent text-[14px] font-semibold leading-5 text-[#101221] outline-none placeholder:text-[#5A5B62]/70"
              />
            </label>
            <button
              aria-label="Filter students"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2DEF6] bg-white/86 shadow-[0px_10px_24px_rgba(84,75,187,0.08)] backdrop-blur-xl active:scale-[0.96]"
            >
              <Filter className="h-5 w-5 text-[#5840D4]" strokeWidth={2.35} />
            </button>
          </div>

          <div className="-mx-5 overflow-x-auto px-5 pb-1 scrollbar-hide">
            <div className="flex min-w-max gap-2.5">
              {filters.map((filter) => {
                const active = filter.key === activeFilter;

                return (
                  <button
                    key={filter.key}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`h-10 rounded-full border px-4 text-[13px] font-bold leading-5 active:scale-[0.98] ${
                      active
                        ? 'border-[#5840D4] bg-white text-[#5840D4] shadow-[0px_8px_18px_rgba(84,75,187,0.10)]'
                        : 'border-[#DCD8F2] bg-white/62 text-[#5A5B62]'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-[24px] border border-[#E8E5F5]/86 bg-white/90 shadow-[0px_18px_42px_rgba(84,75,187,0.12)] backdrop-blur-xl">
          {visibleStudents.map((student, index) => (
            <StudentAssignmentRow
              key={student.name}
              student={student}
              isFirst={index === 0}
              isLast={index === visibleStudents.length - 1}
              selected={selectedNames.includes(student.name)}
              onToggle={() => toggleStudent(student.name)}
            />
          ))}

          {visibleStudents.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p className="text-[15px] font-extrabold leading-5 text-[#101221]">No students found</p>
              <p className="mt-1 text-[13px] font-semibold leading-5 text-[#5A5B62]">
                Try a different search or filter.
              </p>
            </div>
          )}
        </section>
      </main>

      {selectedCount > 0 && (
        <div className="fixed inset-x-0 bottom-[108px] z-40 px-4">
          <div className="mx-auto flex max-w-md items-center gap-3 rounded-[26px] border border-white/80 bg-white/92 px-4 py-3 shadow-[0px_16px_42px_rgba(43,38,113,0.20)] backdrop-blur-2xl">
            <div className="min-w-0 flex-1">
              <p className="text-[14px] font-extrabold leading-5 text-[#101221]">
                {selectedCount} {selectedCount === 1 ? 'student' : 'students'} selected
              </p>
              {hasReplacement && (
                <p className="mt-0.5 truncate text-[11px] font-semibold leading-4 text-[#8B5E12]">
                  Existing individual meditation will be replaced
                </p>
              )}
            </div>
            <button
              onClick={() => setSelectedNames([])}
              className="flex h-10 shrink-0 items-center justify-center rounded-full px-2 text-[13px] font-extrabold text-[#5840D4] active:scale-[0.98]"
            >
              Clear
            </button>
            <button
              onClick={assignSelectedStudents}
              className="flex h-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] px-4 text-[13px] font-extrabold text-white shadow-[0px_12px_24px_rgba(84,75,187,0.24)] active:scale-[0.98]"
            >
              Assign Meditation
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function StudentAssignmentRow({
  student,
  isFirst,
  isLast,
  selected,
  onToggle,
}: {
  student: (typeof students)[number];
  isFirst: boolean;
  isLast: boolean;
  selected: boolean;
  onToggle: () => void;
}) {
  const isIndividual = student.assignedType === 'individual';
  const rowRadius = `${isFirst ? 'rounded-t-[24px]' : ''} ${isLast ? 'rounded-b-[24px]' : ''}`;

  return (
    <button
      onClick={onToggle}
      className={`relative flex w-full min-w-0 items-center gap-3 p-4 text-left transition-[background,box-shadow,transform] duration-200 active:scale-[0.99] ${rowRadius} ${
        selected
          ? 'bg-[linear-gradient(135deg,rgba(247,244,255,0.98)_0%,rgba(255,255,255,0.94)_100%)] shadow-[inset_0px_0px_0px_1.5px_rgba(88,64,212,0.28),inset_4px_0px_0px_rgba(88,64,212,0.18)]'
          : 'bg-white/0 hover:bg-white/36'
      } ${isLast ? '' : 'border-b border-[#E8E5F2]'}`}
    >
      <span
        aria-hidden="true"
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition duration-200 ${
          selected
            ? 'border-[#5840D4] bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] shadow-[0px_8px_18px_rgba(84,75,187,0.24),0px_0px_0px_4px_rgba(88,64,212,0.08)]'
            : 'border-[#C9C3E8] bg-white/86 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.95),0px_4px_10px_rgba(84,75,187,0.05)]'
        }`}
      >
        {selected && <Check className="h-4 w-4 text-white" strokeWidth={3} />}
      </span>

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <StudentAvatar name={student.name} tone={student.tone} complete={student.completed} />

        <div className="min-w-0 flex-1">
          <div className="flex min-w-0 items-center gap-1.5">
            <h3 className="truncate text-[17px] font-extrabold leading-6 tracking-normal text-[#171827]">
              {student.name}
            </h3>
            {student.completed && (
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[#128263]" fill="rgba(35,176,109,0.14)" strokeWidth={2.4} />
            )}
          </div>

          <span
            className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[11px] font-extrabold leading-3 ${
              student.completed
                ? 'bg-[rgba(35,176,109,0.12)] text-[#128263]'
                : 'bg-[rgba(255,207,138,0.22)] text-[#D85319]'
            }`}
          >
            {student.status}
          </span>

          <div className="mt-2 flex min-w-0 items-center gap-1.5">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#EEE8FF]/90 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.82)]">
              {isIndividual ? (
                <UserRound className="h-3.5 w-3.5 text-[#5840D4]" strokeWidth={2.3} />
              ) : (
                <UsersRound className="h-3.5 w-3.5 text-[#5840D4]" strokeWidth={2.3} />
              )}
            </span>
            <p className="min-w-0 text-[12.5px] font-semibold leading-4 text-[#5A5B62]">
              <span>{isIndividual ? 'Individual meditation' : 'Class meditation'}</span>
              <span className="px-1 text-[#A19EB6]">·</span>
              <span className="font-bold text-[#2D2E34]">{student.meditation}</span>
            </p>
          </div>
        </div>
      </div>

      <span className="flex h-9 w-8 shrink-0 items-center justify-center rounded-full" aria-hidden="true">
        <ChevronRight className="h-5 w-5 text-[#5A5B62]/62" strokeWidth={2.2} />
      </span>
    </button>
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
    mint: 'from-[#8FDCC7] via-[#D8F6EB] to-[#F0FFF8]',
    peach: 'from-[#FF9F7D] via-[#FFD0BE] to-[#FFF0E8]',
  };

  return (
    <div className="relative flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full border border-[#DCD8F2] bg-white shadow-[0px_8px_18px_rgba(84,75,187,0.10)]">
      <div className={`flex h-[48px] w-[48px] items-center justify-center rounded-full bg-gradient-to-br ${tones[tone] ?? tones.violet}`}>
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
        <svg className="h-[12px] w-[17px]" viewBox="0 0 17.1429 12.328" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.57412 2.40833C10.8971 2.40843 13.1313 3.30023 14.8146 4.89924C14.9414 5.02276 15.1442 5.0212 15.2691 4.89575L16.4814 3.67441C16.5446 3.61087 16.5799 3.52465 16.5794 3.4349C16.5789 3.34515 16.5426 3.25932 16.4787 3.19654C12.0612 -1.06551 5.08579 -1.06551 0.668307 3.19654C0.604336 3.25928 0.568036 3.34509 0.567483 3.43484C0.56693 3.52459 0.602169 3.61083 0.665362 3.67441L1.87802 4.89575C2.00281 5.02139 2.20578 5.02295 2.33249 4.89924C4.01626 3.30012 6.25083 2.40833 8.57412 2.40833ZM8.57412 6.37201C9.85162 6.37193 11.0836 6.84751 12.0302 7.70618C12.1578 7.82787 12.3596 7.82524 12.484 7.70026L13.695 6.47893C13.7588 6.41484 13.7942 6.32769 13.7932 6.23715C13.7922 6.14661 13.7549 6.06028 13.6897 5.99762C10.8047 3.3545 6.34524 3.3545 3.46019 5.99762C3.3949 6.06028 3.35763 6.14666 3.35669 6.23723C3.35576 6.32781 3.39124 6.41496 3.45522 6.47893L4.66582 7.70026C4.79019 7.82524 4.99197 7.82787 5.1196 7.70618C6.06567 6.84808 7.29718 6.37255 8.57412 6.37201ZM11.0039 9.04394C11.0058 9.13476 10.9702 9.2223 10.9055 9.28595L8.80456 11.4028C8.74297 11.4651 8.65905 11.5001 8.57151 11.5001C8.48398 11.5001 8.40006 11.4651 8.33846 11.4028L6.23721 9.28595C6.17256 9.22225 6.13704 9.13467 6.13905 9.04384C6.14107 8.95301 6.18044 8.8671 6.24785 8.80634C7.58917 7.67556 9.55444 7.67556 10.8958 8.80634C10.9633 8.86703 11.0021 8.95305 11.0039 9.04394Z" fill="black" />
        </svg>
        <div className="relative h-[13px] w-[27px]">
          <svg viewBox="0 0 27 13" fill="none" className="h-full w-full">
            <rect x="0.5" y="0.5" width="24" height="12" rx="3.8" stroke="black" opacity="0.35" />
            <rect x="2" y="2" width="20" height="9" rx="2.7" fill="black" />
            <path d="M25 4.5C26.1 4.98 26.8 6 26.8 7.1C26.8 8.2 26.1 9.22 25 9.7V4.5Z" fill="black" opacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
