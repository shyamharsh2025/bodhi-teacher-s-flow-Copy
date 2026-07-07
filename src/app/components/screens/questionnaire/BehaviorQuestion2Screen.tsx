import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RadioOption from '../../onboarding/RadioOption';

const options = [
  "I work best when someone guides me",
  "I do well when I have a routine",
  "I work in bursts when I feel like it",
  "I usually delay things until later",
  "I can work well, but only when I'm in the right mood",
];

export default function BehaviorQuestion2Screen() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string | null>('I do well when I have a routine');

  const handleContinue = () => {
    navigate('/questionnaire/behavior-3');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <OnboardingLayout totalSteps={6} currentStep={2}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900 leading-tight">
            Which one feels most like you?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Think about how you usually work, not how you wish you did
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
