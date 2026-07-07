import { ArrowLeft, Bookmark, Play } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router';
import rootChakraImage from '../../../imports/ReturnUserHome/680b9473c856efcb97e710b14b817e94ed6c94f3.png';
import sacralChakraImage from '../../../imports/ReturnUserHome/a284d845041011ceb06c656399145b8c5c74bc5d.png';
import heartChakraImage from '../../../imports/ReturnUserHome/33c81ac0148d41512ccbf9408cc3b4f4bde8048d.png';

const sessions = [
  { title: 'Root Chakra', minutes: 18, image: rootChakraImage, path: '/home/chakra-meditation/root' },
  { title: 'Sacral Chakra', minutes: 15, image: sacralChakraImage, path: '/home/chakra-meditation/sacral' },
  { title: 'Solar Plexus Chakra', minutes: 16, tone: 'from-[#F6E4B8] via-[#C7A15D] to-[#78612E]', path: '/home/chakra-meditation/solar-plexus' },
  { title: 'Heart Chakra', minutes: 20, image: heartChakraImage, path: '/home/chakra-meditation/heart' },
  { title: 'Throat Chakra', minutes: 14, tone: 'from-[#E8F2FF] via-[#97C7E8] to-[#415B87]', path: '/home/chakra-meditation/throat' },
  { title: 'Third Eye Chakra', minutes: 17, tone: 'from-[#F4C4D2] via-[#97BDD7] to-[#3F4F89]', path: '/home/chakra-meditation/third-eye' },
  { title: 'Crown Chakra', minutes: 19, tone: 'from-[#FFFFFF] via-[#D9D1FF] to-[#7D68E8]', path: '/home/chakra-meditation/crown' },
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

  return (
    <div
      className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden pb-7"
      style={{
        background:
          'linear-gradient(180deg, #E8ECFE 0%, #EEF2FF 34%, #F5F2FF 68%, #FFFFFF 100%)',
      }}
    >
      <div className="pointer-events-none absolute right-[-110px] top-[-70px] h-[280px] w-[280px] rounded-full bg-[#BFD8FF]/36 blur-[60px]" />
      <div className="pointer-events-none absolute bottom-16 left-[-120px] h-[300px] w-[300px] rounded-full bg-[#DDD8FF]/42 blur-[70px]" />

      <div className="relative z-10">
        <StatusBar />

        <header className="grid grid-cols-[64px_minmax(0,1fr)_64px] items-center px-5 pb-7 pt-6">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#E8E7F1] bg-white/76 shadow-[0px_10px_24px_rgba(84,75,187,0.09)] backdrop-blur-xl active:scale-[0.96]"
          >
            <ArrowLeft className="h-7 w-7 text-[#5840D4]" strokeWidth={2.3} />
          </button>

          <h1 className="min-w-0 text-center text-[24px] font-extrabold leading-8 tracking-normal text-[#2D2E34]">
            Chakra Meditation
          </h1>
          <div />
        </header>

        <main className="px-6">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div className="min-w-0">
              <h2 className="whitespace-nowrap text-[23px] font-extrabold leading-7 tracking-normal text-[#2D2E34]">
                Chakra Reset Series
              </h2>
              {isAssignmentMode && (
                <p className="mt-1 text-[13px] font-bold leading-5 text-[#5840D4]">
                  {assignmentContext}
                </p>
              )}
            </div>
            <span className="shrink-0 pb-1 text-[13px] font-extrabold uppercase leading-4 tracking-[0.4px] text-[#5840D4]">
              7 Sessions
            </span>
          </div>

          <div className="space-y-5">
            {sessions.map((session) => (
              <SessionCard
                key={session.title}
                title={session.title}
                minutes={session.minutes}
                image={'image' in session ? session.image : undefined}
                tone={'tone' in session ? session.tone : undefined}
                onOpen={() => navigate(isAssignmentMode ? `${session.path}${assignmentQuery}` : session.path)}
              />
            ))}
          </div>
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
}: {
  title: string;
  minutes: number;
  image?: string;
  tone?: string;
  onOpen: () => void;
}) {
  return (
    <div className="flex min-h-[108px] items-center gap-3 rounded-[24px] border border-[#E8E7F1] bg-white/92 px-4 py-4 shadow-[0px_16px_36px_rgba(84,75,187,0.12)] backdrop-blur-xl">
      <button
        onClick={onOpen}
        className="flex min-w-0 flex-1 items-center gap-3 text-left active:scale-[0.99]"
      >
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-[#F2F0FF] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.8),0px_8px_18px_rgba(84,75,187,0.10)]">
          {image ? (
            <img src={image} alt="" className="h-full w-full object-cover" />
          ) : (
            <div className={`relative h-full w-full bg-gradient-to-br ${tone ?? 'from-[#EEE8FF] to-[#BFD8FF]'}`}>
              <div className="absolute inset-x-3 bottom-4 h-4 rounded-full bg-black/20 blur-[4px]" />
              <div className="absolute bottom-4 left-1/2 h-7 w-4 -translate-x-1/2 rounded-full bg-[#101221]/80" />
              <div className="absolute left-1/2 top-4 h-5 w-5 -translate-x-1/2 rounded-full bg-white/60 blur-[1px]" />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-[19px] font-extrabold leading-6 tracking-normal text-[#2D2E34]">
            {title}
          </h3>
          <p className="mt-1 text-[18px] font-medium leading-6 text-[#6B6B86]">
            {minutes} min
          </p>
        </div>
      </button>

      <div className="flex shrink-0 items-center gap-2">
        <button
          aria-label={`Bookmark ${title}`}
          className="flex h-10 w-10 items-center justify-center rounded-full active:scale-[0.96]"
        >
          <Bookmark className="h-6 w-6 text-[#63627C]" strokeWidth={2.1} />
        </button>
        <button
          aria-label={`Play ${title}`}
          onClick={onOpen}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] shadow-[0px_10px_22px_rgba(84,75,187,0.24)] active:scale-[0.96]"
        >
          <Play className="ml-1 h-6 w-6 text-white" fill="white" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pb-2 pt-8">
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
