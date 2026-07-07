import {
  ArrowLeft,
  Bookmark,
  CalendarPlus,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import rootChakraImage from '../../../imports/ReturnUserHome/680b9473c856efcb97e710b14b817e94ed6c94f3.png';

const actions = [
  { label: 'Share', icon: Share2 },
  { label: 'Download', icon: Download },
  { label: 'Save', icon: Bookmark },
  { label: 'Add Session', icon: CalendarPlus },
];

const chakraTitles: Record<string, string> = {
  root: 'Ground Chakra Meditation',
  sacral: 'Sacral Chakra Meditation',
  'solar-plexus': 'Solar Plexus Chakra Meditation',
  heart: 'Heart Chakra Meditation',
  throat: 'Throat Chakra Meditation',
  'third-eye': 'Third Eye Chakra Meditation',
  crown: 'Crown Chakra Meditation',
};

const chakraDurations: Record<string, string> = {
  root: '18 min',
  sacral: '15 min',
  'solar-plexus': '16 min',
  heart: '20 min',
  throat: '14 min',
  'third-eye': '17 min',
  crown: '19 min',
};

const groundBenefits = [
  'Helps settle anxious or scattered energy before you begin.',
  'Builds a steadier connection with the body and breath.',
  'Supports focus by giving the mind one calm anchor.',
  'Creates a slower, safer rhythm when things feel overwhelming.',
];

export default function GroundChakraMeditationScreen() {
  const navigate = useNavigate();
  const { chakra = 'root' } = useParams();
  const [searchParams] = useSearchParams();
  const [assignmentSheet, setAssignmentSheet] = useState<'confirm' | 'success' | null>(null);
  const [showSessionDetails, setShowSessionDetails] = useState(false);
  const title = chakraTitles[chakra] ?? chakraTitles.root;
  const duration = chakraDurations[chakra] ?? chakraDurations.root;
  const assignmentTarget = searchParams.get('assign');
  const selectedCount = Number(searchParams.get('count') || '0');
  const resolvedSelectedCount = selectedCount > 0 ? selectedCount : 1;
  const replaceExisting = searchParams.get('replace') === '1';
  const isClassAssignment = assignmentTarget === 'class';
  const isStudentAssignment = assignmentTarget === 'students';
  const isAssignmentMode = isClassAssignment || isStudentAssignment;
  const assignmentLabel = isStudentAssignment
    ? `${resolvedSelectedCount} ${resolvedSelectedCount === 1 ? 'student' : 'students'}`
    : 'Grade 8A';

  const handleAssignMeditation = () => {
    if (isStudentAssignment) {
      window.localStorage.setItem(
        'bodhiSelectedStudentsMeditation',
        JSON.stringify({
          title,
          count: resolvedSelectedCount,
          replaceExisting,
          assignedAt: Date.now(),
        }),
      );
    } else {
      window.localStorage.setItem(
        'bodhiClassMeditation',
        JSON.stringify({
          title,
          description:
            'A grounding practice to settle the body, steady the breath, and return to a calm inner base.',
          assignedAt: Date.now(),
        }),
      );
    }
    setAssignmentSheet('success');
    window.setTimeout(() => navigate('/home/sessions/league'), 950);
  };

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-[linear-gradient(180deg,#EAF1FF_0%,#F1ECFF_42%,#FFF7FE_78%,#FFFFFF_100%)] text-[#25263A]">
      <div className="pointer-events-none absolute right-[-120px] top-12 h-[290px] w-[290px] rounded-full bg-[#C9D9FF]/80 blur-[72px]" />
      <div className="pointer-events-none absolute left-[-120px] top-[330px] h-[260px] w-[260px] rounded-full bg-[#D9C8FF]/70 blur-[70px]" />
      <div className="pointer-events-none absolute right-[-120px] top-[640px] h-[240px] w-[240px] rounded-full bg-[#BFEFFF]/50 blur-[76px]" />

      <div className="relative z-10">
        <StatusBar />
        <header className="grid grid-cols-[52px_minmax(0,1fr)_52px] items-center px-5 pb-4 pt-4">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/84 shadow-[0px_10px_22px_rgba(84,75,187,0.10)] backdrop-blur-xl active:scale-[0.96]"
          >
            <ArrowLeft className="h-6 w-6 text-[#5840D4]" strokeWidth={2.35} />
          </button>
          <h1 className="min-w-0 text-center text-[21px] font-extrabold leading-7 tracking-normal text-[#2D2E34]">
            {title}
          </h1>
          <div />
        </header>

        <section className="px-5">
          <div className="relative overflow-hidden rounded-[28px] border border-white/85 bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(249,247,255,0.96)_100%)] shadow-[0px_18px_44px_rgba(84,75,187,0.16)] backdrop-blur-xl">
            <div className="pointer-events-none absolute right-[-40px] top-[180px] h-32 w-32 rounded-full bg-[#BFEFFF]/45 blur-3xl" />
            <div className="pointer-events-none absolute left-[-28px] top-[220px] h-36 w-36 rounded-full bg-[#BCAFFF]/35 blur-3xl" />
            <div className="relative h-[218px] bg-[#F5F6FF]">
              <img
                src={rootChakraImage}
                alt="Meditating figure in front of a bright moon"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(226,234,255,0.10)_0%,rgba(255,255,255,0.00)_48%,rgba(86,64,212,0.08)_100%)]" />
            </div>
            <div className="relative z-10 border-t border-white/85 bg-white px-5 pb-5 pt-4">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[linear-gradient(135deg,#F0ECFF_0%,#E5F4FF_100%)] px-3.5 py-2 text-[12px] font-extrabold leading-4 text-[#5840D4] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.95)]">
                  {duration}
                </span>
                <span className="rounded-full bg-white/76 px-3.5 py-2 text-[12px] font-bold leading-4 text-[#6B6B86] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.92)]">
                  Guided
                </span>
                <span className="rounded-full bg-white/76 px-3.5 py-2 text-[12px] font-bold leading-4 text-[#6B6B86] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.92)]">
                  Root Chakra
                </span>
              </div>

              <div className="mt-4">
                <p className="text-[21px] font-extrabold leading-7 tracking-normal text-[#2D2E34]">
                  What this session is like
                </p>
                <p className="mt-2 text-[15.5px] font-semibold leading-[24px] text-[#5F6078]">
                  This meditation brings attention down into the body through the Root Chakra
                  (Muladhara), the energy center associated with steadiness, safety, and inner
                  support.{' '}
                  <button
                    type="button"
                    onClick={() => setShowSessionDetails((value) => !value)}
                    className="font-extrabold text-[#5840D4] underline decoration-[#B7ACFF] decoration-2 underline-offset-4"
                  >
                    {showSessionDetails ? 'Show less' : 'Read more'}
                  </button>
                </p>

                {showSessionDetails && (
                  <div className="mt-3 space-y-3 text-[15px] font-medium leading-[24px] text-[#676982]">
                    <p>
                      The session moves slowly. You will be guided to notice your breath, soften
                      unnecessary tension, and return to a simple physical anchor whenever the mind
                      begins to wander.
                    </p>
                    <p>
                      Choose this when you want less mental noise and a stronger sense of being here,
                      in this moment, with both feet on the ground.
                    </p>
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>

        <main className="px-5 pb-36 pt-5">
          <div className="relative">
            <section className="relative z-10 rounded-[26px] border border-white/80 bg-white/94 px-5 py-5 shadow-[0px_14px_34px_rgba(84,75,187,0.09)] backdrop-blur-xl">
            <h2 className="text-[21px] font-extrabold leading-7 tracking-normal text-[#2D2E34]">
              Benefits
            </h2>
            <ul className="mt-3 space-y-3">
              {groundBenefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-[15px] font-semibold leading-[22px] text-[#5F6078]">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#5840D4]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            </section>

            <section className="relative z-10 mt-4 rounded-[26px] border border-[#E8E5F6] bg-white/88 px-3 py-3 shadow-[0px_10px_26px_rgba(84,75,187,0.08)] backdrop-blur-xl">
              <div className="grid grid-cols-4 gap-1">
                {actions.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    className="flex min-w-0 flex-col items-center gap-2 rounded-[20px] py-2 text-center active:scale-[0.97]"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F2EFFF] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9)]">
                      <Icon className="h-5 w-5 text-[#5840D4]" strokeWidth={2.25} />
                    </span>
                    <span className="text-[11.5px] font-bold leading-4 text-[#6B6B86]">{label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-md bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.92)_32%,#FFFFFF_100%)] px-6 pb-6 pt-8">
        <button
          onClick={() =>
            isAssignmentMode
              ? setAssignmentSheet('confirm')
              : navigate(`/home/chakra-meditation/${chakra}/session`)
          }
          className="flex h-[58px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] text-[18px] font-extrabold leading-7 text-white shadow-[0px_18px_34px_rgba(84,75,187,0.30)] active:scale-[0.98]"
        >
          <Sparkles className="h-5 w-5 text-white" strokeWidth={2.3} />
          {isAssignmentMode ? `Assign to ${assignmentLabel}` : 'Begin Session'}
        </button>
      </footer>

      {assignmentSheet && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#151526]/32 px-4 pb-4 backdrop-blur-[2px]">
          <div className="w-full max-w-md rounded-[28px] border border-white/80 bg-white px-5 pb-5 pt-4 shadow-[0px_-18px_48px_rgba(43,38,113,0.22)]">
            {assignmentSheet === 'confirm' ? (
              <>
                <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-[#D8D2F7]" />
                <h2 className="text-center text-[21px] font-extrabold leading-7 text-[#2D2E34]">
                  Assign this meditation to {assignmentLabel}?
                </h2>
                <p className="mx-auto mt-2 max-w-[310px] text-center text-[14px] font-medium leading-5 text-[#6B6B86]">
                  {isStudentAssignment
                    ? replaceExisting
                      ? "This will replace today's individual meditation for any selected students who already have one."
                      : "Selected students will receive this as today's individual League meditation."
                    : "This will replace today's current class meditation for all students."}
                </p>
                <div className="mt-4 rounded-[20px] border border-[#E7E2FF] bg-[#F7F5FF] px-4 py-3">
                  <p className="text-[16px] font-extrabold leading-5 text-[#2D2E34]">{title}</p>
                  <p className="mt-1 text-[13px] font-bold leading-4 text-[#6B6B86]">
                    Chakra Meditation
                  </p>
                </div>
                <button
                  onClick={handleAssignMeditation}
                  className="mt-4 flex h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] text-[16px] font-extrabold text-white shadow-[0px_14px_28px_rgba(84,75,187,0.24)] active:scale-[0.98]"
                >
                  Assign Meditation
                </button>
                <button
                  onClick={() => setAssignmentSheet(null)}
                  className="mt-2 flex h-11 w-full items-center justify-center rounded-full border border-[#DED8F5] bg-white text-[15px] font-extrabold text-[#5840D4] active:scale-[0.98]"
                >
                  Cancel
                </button>
              </>
            ) : (
              <div className="py-5 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] shadow-[0px_14px_30px_rgba(84,75,187,0.26)]">
                  <Sparkles className="h-7 w-7 text-white" strokeWidth={2.2} />
                </div>
                <h2 className="mt-4 text-[21px] font-extrabold leading-7 text-[#2D2E34]">
                  Meditation assigned to {assignmentLabel}
                </h2>
                <p className="mx-auto mt-2 max-w-[300px] text-[14px] font-medium leading-5 text-[#6B6B86]">
                  {isStudentAssignment
                    ? "They will now see this as today's individual League meditation."
                    : "Students will now see this as today's League meditation."}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
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
