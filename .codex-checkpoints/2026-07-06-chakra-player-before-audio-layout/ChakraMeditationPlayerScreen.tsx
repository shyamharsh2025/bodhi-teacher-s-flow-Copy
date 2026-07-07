import {
  ArrowLeft,
  Bookmark,
  Download,
  Info,
  Pause,
  Play,
  Share2,
  SkipBack,
  SkipForward,
  Volume2,
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import rootChakraImage from '../../../imports/ReturnUserHome/680b9473c856efcb97e710b14b817e94ed6c94f3.png';

const chakraTitles: Record<string, string> = {
  root: 'Ground Chakra Meditation',
  sacral: 'Sacral Chakra Meditation',
  'solar-plexus': 'Solar Plexus Chakra Meditation',
  heart: 'Heart Chakra Meditation',
  throat: 'Throat Chakra Meditation',
  'third-eye': 'Third Eye Chakra Meditation',
  crown: 'Crown Chakra Meditation',
};

const playerActions = [
  { label: 'Share', icon: Share2 },
  { label: 'Download', icon: Download },
  { label: 'Favorite', icon: Bookmark },
  { label: 'Sound', icon: Volume2 },
  { label: 'Info', icon: Info },
];

export default function ChakraMeditationPlayerScreen() {
  const navigate = useNavigate();
  const { chakra = 'root' } = useParams();
  const [isPlaying, setIsPlaying] = useState(true);
  const title = chakraTitles[chakra] ?? chakraTitles.root;

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-md overflow-hidden bg-[linear-gradient(180deg,#EAF1FF_0%,#F5F0FF_56%,#FFFFFF_100%)] text-[#25263A]">
      <div className="absolute inset-x-0 top-0 h-[58vh] overflow-hidden">
        <img
          src={rootChakraImage}
          alt="Meditating figure in front of a bright moon"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(234,241,255,0.74)_0%,rgba(255,255,255,0.08)_36%,rgba(82,64,185,0.18)_68%,rgba(245,240,255,0.96)_100%)]" />
        <div className="absolute left-1/2 top-[48%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7D72F2]/20 blur-[68px]" />
      </div>

      <div className="relative z-10 min-h-screen pb-[326px]">
        <StatusBar />

        <header className="grid grid-cols-[54px_minmax(0,1fr)_54px] items-center px-5 pb-3 pt-5">
          <button
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 bg-white/84 shadow-[0px_10px_22px_rgba(84,75,187,0.12)] backdrop-blur-xl active:scale-[0.96]"
          >
            <ArrowLeft className="h-6 w-6 text-[#5840D4]" strokeWidth={2.35} />
          </button>

          <h1 className="min-w-0 text-center text-[21px] font-extrabold leading-7 tracking-normal text-[#2D2E34]">
            {title}
          </h1>
          <div />
        </header>

        <div className="absolute inset-x-0 top-[160px] flex flex-col items-center px-6 text-center">
          <div className="relative flex h-[172px] w-[172px] items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.92)_0%,rgba(191,239,255,0.34)_38%,rgba(129,113,242,0.12)_67%,rgba(129,113,242,0)_76%)] blur-[2px]" />
            <div className="absolute inset-[14px] rounded-full border border-white/78 shadow-[0px_0px_36px_rgba(255,255,255,0.78),0px_0px_42px_rgba(129,113,242,0.26)]" />
            <div className="absolute inset-[34px] rounded-full bg-[radial-gradient(circle_at_35%_28%,#FFFFFF_0%,#DFF7FF_26%,#A89DFF_72%,#6B54E6_100%)] shadow-[inset_0px_2px_8px_rgba(255,255,255,0.72),0px_18px_38px_rgba(84,75,187,0.24)]" />
            <div className="absolute h-[118px] w-[118px] rounded-full border border-white/40" />
          </div>

          <div className="-mt-2 rounded-[24px] border border-white/70 bg-white/72 px-6 py-3 shadow-[0px_14px_34px_rgba(84,75,187,0.12)] backdrop-blur-xl">
            <p className="text-[20px] font-extrabold uppercase leading-7 tracking-[0.2px] text-[#2D2E34]">
              Breathe In
            </p>
            <p className="mt-1 text-[14px] font-semibold leading-5 text-[#6B6B86]">
              Follow the orb · 4 counts each
            </p>
          </div>
        </div>
      </div>

      <section className="absolute inset-x-0 bottom-0 z-20 rounded-t-[30px] border border-white/80 bg-white/94 px-6 pb-7 pt-6 shadow-[0px_-18px_46px_rgba(84,75,187,0.16)] backdrop-blur-xl">
        <div className="px-6">
          <div className="relative h-5">
            <div className="absolute left-0 right-0 top-2 h-1.5 rounded-full bg-[#E5E4F0]" />
            <div className="absolute left-0 top-2 h-1.5 w-[39%] rounded-full bg-[linear-gradient(90deg,#8171F2_0%,#5840D4_100%)] shadow-[0px_0px_12px_rgba(129,113,242,0.34)]" />
            <div className="absolute left-[39%] top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white bg-[#5840D4] shadow-[0px_6px_14px_rgba(84,75,187,0.32)]" />
          </div>
          <div className="mt-1 flex items-center justify-between text-[13px] font-semibold leading-5 text-[#6B6B86]">
            <span>6:17</span>
            <span>17:00</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-12">
          <button
            aria-label="Previous"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F1FF] text-[#5840D4] active:scale-[0.96]"
          >
            <SkipBack className="h-9 w-9" strokeWidth={2.1} />
          </button>
          <button
            aria-label="Play meditation"
            onClick={() => setIsPlaying((value) => !value)}
            className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_100%)] text-white shadow-[0px_16px_32px_rgba(84,75,187,0.28)] active:scale-[0.97]"
          >
            {isPlaying ? (
              <Pause className="h-9 w-9 text-white" fill="white" strokeWidth={2} />
            ) : (
              <Play className="ml-1 h-10 w-10 text-white" fill="white" strokeWidth={2} />
            )}
          </button>
          <button
            aria-label="Next"
            className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F4F1FF] text-[#5840D4] active:scale-[0.96]"
          >
            <SkipForward className="h-9 w-9" strokeWidth={2.1} />
          </button>
        </div>

        <div className="mt-7 grid grid-cols-5 gap-2">
          {playerActions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex min-w-0 flex-col items-center gap-2 text-center active:scale-[0.97]"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EEEAFE] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.9)]">
                <Icon className="h-5 w-5 text-[#5840D4]" strokeWidth={2.35} />
              </span>
              <span className="text-[12px] font-semibold leading-4 text-[#6B6B86]">{label}</span>
            </button>
          ))}
        </div>
      </section>
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
