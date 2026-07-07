import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RadioOption from '../../onboarding/RadioOption';

const options = [
  "When I can see progress clearly",
  "When it feels fun or interesting",
  "When I do it with friends or others",
  "When someone appreciates or notices my effort",
  "When I know it will help me achieve something important",
];

export default function BehaviorQuestion5Screen() {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState<string[]>(['When it feels fun or interesting']);

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
    navigate('/questionnaire/behavior-6');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  return (
    <OnboardingLayout totalSteps={6} currentStep={5}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold text-gray-900 leading-tight">
            What makes it easiest for you to keep going?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Select up to 2 that actually keeps you moving, not what you think should
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
