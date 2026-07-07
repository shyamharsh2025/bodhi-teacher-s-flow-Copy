import { useNavigate } from 'react-router';
import { useEffect } from 'react';

export default function OnboardingWordsScreen() {
  const navigate = useNavigate();

  const words = [
    'Focus',
    'Clarity',
    'Calm',
    'Effort',
    'Awareness',
    'Reset',
    'Reflect',
    'Steady',
    'Presence',
    'Intention',
    'Breathe',
    'Grow',
    'Restore',
    'Begin',
    'Balance',
    'Show Up',
    'Try Again',
    'Small Steps',
    'Be Here',
  ];

  // Focus is active by default (index 0)
  const activeIndex = 0;

  // Auto-advance to message screen after 3 seconds (or on tap)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding-message');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      onClick={() => navigate('/onboarding-message')}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E8ECFE] via-[#EEF2FF] to-[#E0E7FF] cursor-pointer"
    >
      {/* Gradient Orb - positioned near "Focus" (active word) */}
      <div
        className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#5B4FDB] via-[#7C3AED] to-[#3B82F6] blur-[80px] opacity-70 transition-all duration-700 ease-in-out"
        style={{
          top: `${120 + activeIndex * 42}px`,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      ></div>

      {/* Word List */}
      <div className="relative z-10 flex flex-col items-center gap-3 py-20">
        {words.map((word, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={word}
              className={`transition-all duration-500 ease-in-out ${
                isActive
                  ? 'text-[32px] font-bold text-gray-900'
                  : 'text-[28px] font-normal text-gray-400'
              }`}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
        <div className="w-32 h-1.5 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
