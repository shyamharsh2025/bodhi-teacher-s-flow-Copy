import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RadioOption from '../../onboarding/RadioOption';

const options = [
  "I get upset or frustrated",
  "I go quiet and lose interest",
  "I start doubting myself",
  "I push harder despite the stress",
  "I move on without thinking much",
];

export default function BehaviorQuestion4Screen() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>('I go quiet and lose interest');

  const handleContinue = () => {
    navigate('/questionnaire/behavior-5');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <OnboardingLayout totalSteps={6} currentStep={4}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900 leading-tight">
            When things don't go well, what happens first?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Go with your gut, what's the very first thing you notice in yourself
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
