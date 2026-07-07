import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function IntroScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E8E9F3] via-[#E5E7F2] to-[#E3E5F1] overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#3B82F6] blur-[120px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#5B4FDB] to-[#7C3AED] blur-[120px] opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Logo */}
      <div className="relative z-10 animate-[fade-in-up_1s_ease-out]">
        <svg width="140" height="140" viewBox="0 0 140 140" fill="none" className="drop-shadow-2xl">
          <defs>
            <linearGradient id="logoGradientIntro" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B4FDB" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            d="M45 55C45 49 49 44 55 44C65 44 69 52 77 52C85 52 89 48 89 41C89 34 85 31 77 31C69 31 65 35 60 40C55 45 50 49 43 49C36 49 31 45 31 38C31 31 36 27 43 27C51 27 55 31 60 36"
            stroke="url(#logoGradientIntro)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
          />
          <path
            d="M89 77C89 83 85 88 79 88C65 88 61 80 53 80C45 80 41 84 41 91C41 98 45 101 53 101C61 101 65 97 70 92C75 87 80 83 87 83C94 83 99 87 99 94C99 101 94 105 87 105C79 105 75 101 70 96"
            stroke="url(#logoGradientIntro)"
            strokeWidth="14"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow)"
          />
        </svg>

        <h1 className="text-[42px] font-bold text-gray-900 text-center mt-8 animate-[fade-in_1s_ease-out_0.5s_both]">
          Bodhi
        </h1>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-3 flex justify-center w-full">
        <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
