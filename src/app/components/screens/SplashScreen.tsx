import { Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function SplashScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden">
      {/* Top Gradient Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#3B82F6] blur-[120px] opacity-60"></div>

      {/* Bottom Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#3B82F6] via-[#5B4FDB] to-[#7C3AED] blur-[120px] opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-20">
        {/* App Icon */}
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#5B4FDB] to-[#7C3AED] flex items-center justify-center shadow-2xl mb-6">
          <Sparkles className="w-14 h-14 text-white" strokeWidth={2} />
        </div>

        {/* App Name */}
        <h1 className="text-[36px] font-bold text-gray-900 mb-8">Bodhi</h1>

        {/* Tagline */}
        <p className="text-[22px] text-gray-700 text-center leading-relaxed max-w-[320px]">
          A system to help you focus, reset, and stay consistent.
        </p>
      </div>

      {/* Begin Button */}
      <div className="relative z-10 w-full px-8 pb-12">
        <button
          onClick={() => navigate('/onboarding')}
          className="w-full py-5 rounded-[32px] bg-gradient-to-r from-[#5B4FDB] to-[#4F46E5] text-white font-bold text-[18px] shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200"
        >
          Begin
        </button>
      </div>

      {/* Home Indicator */}
      <div className="relative z-10 pb-2">
        <div className="w-32 h-1.5 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
