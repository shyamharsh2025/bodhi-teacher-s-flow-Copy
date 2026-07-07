import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RadioOption from '../../onboarding/RadioOption';

const options = [
  "My phone or other apps",
  "My thoughts keep wandering",
  "I get bored quickly",
  "I feel tired or low on energy",
  "I start thinking about whether I'll do well or fail",
];

export default function BehaviorQuestion3Screen() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['My thoughts keep wandering']);

  const handleToggle = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      if (selectedOptions.length < 2) {
        setSelectedOptions([...selectedOptions, option]);
      }
    }
  };

  const handleContinue = () => {
    navigate('/questionnaire/behavior-4');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <OnboardingLayout totalSteps={6} currentStep={3}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900 leading-tight">
            What usually pulls you away when you're trying to focus?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Select up to 2 that feel most true, there's no wrong answer
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-auto">
          {options.map((option) => (
            <RadioOption
              key={option}
              label={option}
              selected={selectedOptions.includes(option)}
              onClick={() => handleToggle(option)}
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
