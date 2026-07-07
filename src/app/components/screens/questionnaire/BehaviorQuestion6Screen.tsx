import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RadioOption from '../../onboarding/RadioOption';

const options = [
  "Taking a short break or moving around",
  "Talking to someone I trust",
  "Listening to music or calming sounds",
  "Sitting quietly or breathing slowly",
  "Honestly, I'm not sure what helps",
];

export default function BehaviorQuestion6Screen() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>('Talking to someone I trust');

  const handleContinue = () => {
    navigate('/questionnaire/emotional-check-in');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <OnboardingLayout totalSteps={6} currentStep={6}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900 leading-tight">
            When your mind feels heavy, messy, or tired, what helps most?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            The thing you reach for, even if it's just instinct
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-auto">
          {options.map((option) => (
            <RadioOption
              key={option}
              label={option}
              selected={selectedOption === option}
              onClick={() => setSelectedOption(option)}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="pt-6 space-y-3">
          <button
            onClick={handleContinue}
            className="w-full py-5 rounded-[32px] bg-gradient-to-r from-[#5B4FDB] to-[#4F46E5] text-white font-bold text-[18px] shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200"
          >
            Continue
          </button>
          <button
            onClick={handleSkip}
            className="w-full text-[15px] font-semibold text-gray-900 py-3"
          >
            Skip for now
          </button>
        </div>
      </div>
    </OnboardingLayout>
  );
}
