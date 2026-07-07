import { useNavigate } from 'react-router';

export default function OnboardingFinalScreen() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top Gradient Orb */}
      <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#3B82F6] blur-[120px] opacity-50"></div>

      {/* Bottom Left Gradient Orb */}
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#C084FC] via-[#A78BFA] to-[#7C3AED] blur-[120px] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-20">
        {/* Circular Gradient Element */}
        <div className="relative w-32 h-32 mb-12">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60A5FA] via-[#5B4FDB] to-[#C084FC] blur-xl opacity-80"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6] via-[#7C3AED] to-[#C084FC]"></div>
        </div>

        {/* Headline */}
        <h1 className="text-[32px] font-bold text-gray-900 text-center leading-tight mb-6">
          Your journey
          <br />
          starts here.
        </h1>

        {/* Body Text */}
        <p className="text-[16px] text-gray-700 text-center leading-relaxed max-w-[320px] mb-12">
          Make Bodhi yours or dive straight in. Either way, we're with you.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={() => navigate('/onboarding-profile')}
          className="w-full max-w-[280px] py-5 rounded-[32px] bg-gradient-to-r from-[#5B4FDB] to-[#4F46E5] text-white font-bold text-[18px] shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200 mb-4"
        >
          Let's go
        </button>

        {/* Secondary Link */}
        <button
          onClick={() => navigate('/home')}
          className="text-[16px] font-semibold text-gray-900 underline underline-offset-4 hover:text-[#5B4FDB] transition-colors"
        >
          Skip for now
        </button>
      </div>

      {/* Home Indicator */}
      <div className="relative z-10 pb-2">
        <div className="w-32 h-1.5 bg-gray-900 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}
