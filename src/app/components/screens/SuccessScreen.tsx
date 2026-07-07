import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#E8E9F3] via-[#E5E7F2] to-[#E3E5F1] overflow-hidden">
      {/* Animated Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#3B82F6] blur-[100px] opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#5B4FDB] to-[#7C3AED] blur-[100px] opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

      {/* Logo */}
      <div className="relative z-10 mb-8 scale-100 animate-[bounce_1s_ease-in-out]">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <defs>
            <linearGradient id="logoGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B4FDB" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.3"/>
            </filter>
          </defs>
          <path
            d="M40 48C40 43 43 39 48 39C56 39 59 45 65 45C71 45 74 42 74 37C74 32 71 29 65 29C59 29 56 32 52 36C48 40 44 43 38 43C32 43 28 40 28 35C28 30 32 27 37 27C43 27 46 30 50 34"
            stroke="url(#logoGradient3)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            filter="url(#shadow)"
          />
          <path
            d="M74 66C74 71 71 75 66 75C56 75 53 69 47 69C41 69 38 72 38 77C38 82 41 85 47 85C53 85 56 82 60 78C64 74 68 71 74 71C80 71 84 74 84 79C84 84 80 87 75 87C69 87 66 84 62 80"
            stroke="url(#logoGradient3)"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
            filter="url(#shadow)"
          />
        </svg>
      </div>

      {/* Success Icon */}
      <div className="relative z-10 mb-6 animate-[scale-in_0.5s_ease-out_0.3s_both]">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#5B4FDB] to-[#7C3AED] rounded-full blur-xl opacity-60"></div>
          <div className="relative bg-white rounded-full p-4 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-[#5B4FDB]" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {/* Success Text */}
      <div className="relative z-10 text-center animate-[fade-in_0.5s_ease-out_0.5s_both]">
        <h1 className="text-[32px] font-bold text-gray-900 mb-3">
          Verification Successful!
        </h1>
        <p className="text-[16px] text-gray-600 max-w-[280px] mx-auto">
          Your account has been verified. Redirecting you...
        </p>
      </div>

      {/* Loading Dots */}
      <div className="relative z-10 flex gap-2 mt-8 animate-[fade-in_0.5s_ease-out_0.7s_both]">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2.5 h-2.5 rounded-full bg-[#5B4FDB] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          ></div>
        ))}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-3 flex justify-center w-full">
        <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
