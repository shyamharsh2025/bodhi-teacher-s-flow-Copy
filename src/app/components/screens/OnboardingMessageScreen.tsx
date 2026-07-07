import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function OnboardingMessageScreen() {
  const navigate = useNavigate();

  // Auto-advance to values screen after 3 seconds (or on tap)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding-values');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate('/onboarding-values')}
      className="relative min-h-screen flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Gradient Area */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-8 pt-20 pb-12">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C084FC] via-[#93C5FD] to-[#A78BFA] opacity-40"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#60A5FA] blur-[100px] opacity-30"></div>

        {/* App Icon */}
        <div className="relative z-10 w-28 h-28 rounded-3xl bg-gradient-to-br from-[#5B4FDB] to-[#7C3AED] flex items-center justify-center shadow-2xl mb-16">
          <Sparkles className="w-16 h-16 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-white px-8 pb-20">
        {/* Headline */}
        <div className="text-center mb-6">
          <h1 className="text-[32px] font-bold text-gray-900 leading-tight">
            Small actions.
            <br />
            Big character.
          </h1>
        </div>

        {/* Body Text */}
        <p className="text-[16px] text-gray-700 text-center leading-relaxed max-w-[300px] mx-auto">
          Every reset, every focused session, it shapes who you're becoming.
        </p>
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1.5 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
