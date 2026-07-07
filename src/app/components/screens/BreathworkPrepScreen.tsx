import { ChevronLeft, ArrowRight, Brain, ShieldCheck } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router';
import { VoicePoweredOrb } from '../VoicePoweredOrb';

export default function BreathworkPrepScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const isMeditation = location.pathname.includes('meditation');

  const pillLabel = isMeditation ? '5 MIN MEDITATION' : '2 MIN BREATHWORK';

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      style={{
        background:
          'radial-gradient(ellipse at 50% 35%, #0a1230 0%, #050a1c 45%, #020713 100%)',
      }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute top-[260px] left-1/2 -translate-x-1/2 w-[460px] h-[460px] rounded-full bg-[rgba(109,91,255,0.22)] blur-[100px]" />
      <div className="pointer-events-none absolute top-[420px] left-1/2 -translate-x-1/2 w-[360px] h-[360px] rounded-full bg-[rgba(87,212,255,0.10)] blur-[90px]" />

      {/* Top nav */}
      <div className="relative z-10 flex items-center justify-between pt-[70px] px-6">
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="w-[48px] h-[48px] rounded-full flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.055)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
          }}
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={() => navigate('/home/focus-timer')}
          style={{
            color: '#B7AEFF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Skip
        </button>
      </div>

      {/* Pill label */}
      <div className="relative z-10 mt-6 mx-auto">
        <div
          className="px-5 h-10 inline-flex items-center justify-center rounded-full"
          style={{
            background: 'rgba(20, 18, 52, 0.72)',
            border: '1.5px solid rgba(109,91,255,0.55)',
            boxShadow: '0 0 22px rgba(109,91,255,0.18)',
          }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: '0.7px',
            }}
          >
            {pillLabel}
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 mt-6 px-6 text-center">
        <h1
          className="text-white"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 800,
            fontSize: 30,
            lineHeight: '34px',
            letterSpacing: '-0.5px',
          }}
        >
          Let's reset and focus
        </h1>
        <p
          className="mt-3 mx-auto whitespace-pre-line"
          style={{
            color: '#B7B4D8',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 500,
            fontSize: 17,
            lineHeight: '24px',
            maxWidth: 320,
          }}
        >
          {'Follow the breathing to\nclear your mind.'}
        </p>
      </div>

      {/* Breathing Orb */}
      <div className="relative z-10 mt-8 mx-auto flex items-center justify-center" style={{ width: 'min(300px, 78vw)', aspectRatio: '1 / 1' }}>
        <div className="absolute inset-0 z-0 pointer-events-none animate-[breathe_10s_ease-in-out_infinite]">
          <VoicePoweredOrb hue={0} enableVoiceControl={false} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-white">
          <BreathWavesIcon />
          <span
            className="mt-2"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 28,
              color: '#FFFFFF',
            }}
          >
            Inhale
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 900,
              fontSize: 64,
              lineHeight: '72px',
              color: '#7D6CFF',
              textShadow: '0 0 24px rgba(125,108,255,0.55)',
            }}
          >
            4
          </span>
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 18,
              color: '#B7B4D8',
            }}
          >
            seconds
          </span>
        </div>
      </div>

      {/* Info card */}
      <div className="relative z-10 mt-auto mx-6 mb-4">
        <div
          className="rounded-[22px] p-5 flex items-start gap-4"
          style={{
            background: 'rgba(9, 14, 32, 0.78)',
            border: '1px solid rgba(139,124,255,0.22)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.28)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: 'rgba(9, 15, 30, 0.55)',
              border: '1px solid rgba(145, 125, 255, 0.18)',
            }}
          >
            <Brain className="w-5 h-5" style={{ color: '#7D6CFF' }} />
          </div>
          <div className="flex-1">
            <p
              className="text-white"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 800,
                fontSize: 17,
                lineHeight: '22px',
              }}
            >
              Why breathwork helps
            </p>
            <p
              className="mt-1 whitespace-pre-line"
              style={{
                color: '#B7B4D8',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: 14,
                lineHeight: '20px',
              }}
            >
              {'A few deep breaths can reduce stress,\nimprove focus and prepare your mind\nfor deep work.'}
            </p>
          </div>
        </div>
      </div>

      {/* Continue button */}
      <div className="relative z-10 mx-6 mb-3">
        <button
          onClick={() => navigate('/home/focus-timer')}
          className="w-full h-[60px] rounded-[18px] flex items-center justify-center gap-3 active:scale-[0.98] transition-transform"
          style={{
            background: 'linear-gradient(135deg, #7B68FF 0%, #543BEE 100%)',
            boxShadow: '0 18px 48px rgba(91,70,255,0.45)',
          }}
        >
          <span
            className="text-white"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            Continue
          </span>
          <ArrowRight className="w-6 h-6 text-white" strokeWidth={2.5} />
        </button>
      </div>

      {/* Privacy note */}
      <div className="relative z-10 flex items-center justify-center gap-2 pb-6">
        <ShieldCheck className="w-4 h-4" style={{ color: '#6D5BFF' }} />
        <span
          style={{
            color: '#7D6CFF',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          Always private. Only for you.
        </span>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(0.96); }
          40% { transform: scale(1.04); }
          55% { transform: scale(1.04); }
        }
      `}</style>
    </div>
  );
}

function BreathWavesIcon() {
  return (
    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
      <path d="M2 5 Q 11 0, 20 5 T 38 5" stroke="#7D6CFF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M2 10 Q 11 5, 20 10 T 38 10" stroke="#7D6CFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.85" />
      <path d="M2 15 Q 11 10, 20 15 T 38 15" stroke="#7D6CFF" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
    </svg>
  );
}
