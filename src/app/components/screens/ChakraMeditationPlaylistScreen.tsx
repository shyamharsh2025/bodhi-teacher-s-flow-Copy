import {
  ArrowLeft,
  Bookmark,
  Clock,
  Play,
  Sparkles,
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router';
import rootChakraImage from '../../../imports/ReturnUserHome/680b9473c856efcb97e710b14b817e94ed6c94f3.png';
import sacralChakraImage from '../../../imports/ReturnUserHome/a284d845041011ceb06c656399145b8c5c74bc5d.png';
import heartChakraImage from '../../../imports/ReturnUserHome/33c81ac0148d41512ccbf9408cc3b4f4bde8048d.png';

const sessions = [
  { title: 'Root Chakra', minutes: 18, image: rootChakraImage, tone: 'from-[#F6F7FF] via-[#E9EBF5] to-[#D6D8E6]', path: '/home/chakra-meditation/root' },
  { title: 'Sacral Chakra', minutes: 15, image: sacralChakraImage, tone: 'from-[#FFF0E8] via-[#F5CBA7] to-[#D78B55]', path: '/home/chakra-meditation/sacral' },
  { title: 'Solar Plexus Chakra', minutes: 16, tone: 'from-[#FFF6C8] via-[#E9BE58] to-[#9E7531]', path: '/home/chakra-meditation/solar-plexus' },
  { title: 'Heart Chakra', minutes: 20, image: heartChakraImage, tone: 'from-[#ECFFF5] via-[#ACE5C9] to-[#4B9A73]', path: '/home/chakra-meditation/heart' },
  { title: 'Throat Chakra', minutes: 14, tone: 'from-[#E8F7FF] via-[#9CCFF0] to-[#416BA5]', path: '/home/chakra-meditation/throat' },
  { title: 'Third Eye Chakra', minutes: 17, tone: 'from-[#F8D4EC] via-[#A8BFE5] to-[#564CBA]', path: '/home/chakra-meditation/third-eye' },
  { title: 'Crown Chakra', minutes: 19, tone: 'from-[#FFFFFF] via-[#DCD4FF] to-[#8D74F1]', path: '/home/chakra-meditation/crown' },
];

export default function ChakraMeditationPlaylistScreen() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const assignmentTarget = searchParams.get('assign');
  const selectedCount = Number(searchParams.get('count') || '0');
  const resolvedSelectedCount = selectedCount > 0 ? selectedCount : 1;
  const replaceExisting = searchParams.get('replace') === '1';
  const isClassAssignment = assignmentTarget === 'class';
  const isStudentAssignment = assignmentTarget === 'students';
  const isAssignmentMode = isClassAssignment || isStudentAssignment;
  const assignmentQuery = isStudentAssignment
    ? `?assign=students&count=${resolvedSelectedCount}${replaceExisting ? '&replace=1' : ''}`
    : isClassAssignment
      ? '?assign=class'
      : '';
  const assignmentContext = isStudentAssignment
    ? `Assigning to ${resolvedSelectedCount} ${resolvedSelectedCount === 1 ? 'student' : 'students'}`
    : 'Assigning to Grade 8A';

  const openDetails = (path: string) => navigate(isAssignmentMode ? `${path}${assignmentQuery}` : path);
  const openPlayer = (path: string) => {
    if (isAssignmentMode) {
      navigate(`${path}${assignmentQuery}`);
      return;
    }

    navigate(`${path}/session`);
  };

  return (
    <div
      className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden pb-9"
      style={{
        background:
          'radial-gradient(circle at 84% 5%, rgba(183,216,255,0.48) 0%, rgba(183,216,255,0) 34%), linear-gradient(180deg, #E9EEFF 0%, #F2F0FF 43%, #FBFAFF 100%)',
      }}
    >
      <div className="pointer-events-none absolute left-[-110px] top-[180px] h-[280px] w-[280px] rounded-full bg-[#CBBEFF]/42 blur-[76px]" />
      <div className="pointer-events-none absolute bottom-[140px] right-[-130px] h-[280px] w-[280px] rounded-full bg-[#BDE4FF]/40 blur-[80px]" />

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
            <h1 className="whitespace-nowrap bg-[linear-gradient(135deg,#1F2362_0%,#5840D4_55%,#3B82F6_100%)] bg-clip-text text-[25px] font-extrabold leading-8 tracking-normal text-transparent">
              Chakra Meditation
            </h1>
            {isAssignmentMode && (
              <p className="-mt-1 text-[12px] font-bold leading-4 text-[#5840D4]">
                {assignmentContext}
              </p>
            )}
          </div>
          <div />
        </header>

        <main className="px-5">
          <section className="relative overflow-hidden rounded-[26px] border border-white/34 bg-[linear-gradient(135deg,#5B4FDB_0%,#6042E6_45%,#2CA8EC_100%)] p-5 shadow-[0px_22px_50px_rgba(84,75,187,0.24)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0)_34%),radial-gradient(circle_at_12%_96%,rgba(180,244,255,0.28)_0%,rgba(180,244,255,0)_38%)]" />
            <div className="pointer-events-none absolute right-[-54px] top-[-46px] h-[174px] w-[174px] rounded-full border border-white/24 bg-white/12 blur-[1px]" />
            <div className="pointer-events-none absolute bottom-[-88px] left-[72px] h-[170px] w-[210px] rounded-full bg-white/14 blur-[38px]" />

            <div className="relative">
              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/24 bg-white/16 px-3 py-1.5 text-[12px] font-extrabold leading-4 text-white shadow-[inset_0px_1px_0px_rgba(255,255,255,0.22)] backdrop-blur-xl">
                  <Sparkles className="h-3.5 w-3.5 text-white" fill="white" strokeWidth={2.3} />
                  Visualization Series
                </div>
                <button
                  aria-label="Save Chakra Reset Series"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/16 text-white shadow-[0px_10px_24px_rgba(19,28,94,0.14)] backdrop-blur-xl active:scale-[0.96]"
                >
                  <Bookmark className="h-5 w-5" strokeWidth={2.15} />
                </button>
              </div>

              <h2 className="mt-4 text-[29px] font-extrabold leading-[33px] tracking-normal text-white">
                Chakra Reset Series
              </h2>
              <p className="mt-2 text-[14px] font-bold leading-5 text-white/78">
                7 guided sessions · 1 hr 59 min
              </p>
              <p className="mt-3 max-w-[302px] text-[13.5px] font-medium leading-[21px] text-white/88">
                A visualization-based chakra meditation series that gently guides you through each energy center to restore balance, deepen awareness, and create a calmer, more aligned inner state.
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
              {sessions.map((session) => (
                <SessionCard
                  key={session.title}
                  title={session.title}
                  minutes={session.minutes}
                  image={'image' in session ? session.image : undefined}
                  tone={session.tone}
                  onOpen={() => openDetails(session.path)}
                  onPlay={() => openPlayer(session.path)}
                />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SessionCard({
  title,
  minutes,
  image,
  tone,
  onOpen,
  onPlay,
}: {
  title: string;
  minutes: number;
  image?: string;
  tone: string;
  onOpen: () => void;
  onPlay: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onOpen();
        }
      }}
      className="rounded-[24px] border-[1.5px] border-[#AFA5FF]/72 bg-[linear-gradient(135deg,rgba(255,255,255,0.96)_0%,rgba(248,250,255,0.92)_48%,rgba(239,245,255,0.88)_100%)] shadow-[0px_18px_38px_rgba(84,75,187,0.18),inset_0px_0px_0px_1px_rgba(255,255,255,0.82),0px_0px_28px_rgba(105,139,255,0.10)] backdrop-blur-xl"
    >
      <div
        onClick={onOpen}
        className="flex min-h-[102px] w-full items-center gap-3 px-3.5 py-4 text-left active:scale-[0.99]"
      >
        <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-full border-[2px] border-white bg-[#F3F1FF] shadow-[0px_12px_24px_rgba(84,75,187,0.17)]">
          {image ? (
            <img src={image} alt="" className="h-full w-full object-cover" />
          ) : (
            <ChakraThumb tone={tone} />
          )}
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

function ChakraThumb({ tone }: { tone: string }) {
  return (
    <div className={`relative h-full w-full bg-gradient-to-br ${tone}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0)_35%)]" />
      <div className="absolute inset-x-4 bottom-4 h-3 rounded-full bg-black/20 blur-[4px]" />
      <div className="absolute bottom-[18px] left-1/2 h-[26px] w-[15px] -translate-x-1/2 rounded-full bg-[#11142B]/72" />
      <div className="absolute left-1/2 top-[18px] h-5 w-5 -translate-x-1/2 rounded-full bg-white/66 blur-[1px]" />
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
