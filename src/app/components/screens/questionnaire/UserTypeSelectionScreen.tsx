import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import SelectionCard from '../../onboarding/SelectionCard';

export default function UserTypeSelectionScreen() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<'personal' | 'school' | null>('personal');

  const handleContinue = () => {
    if (selectedType) {
      navigate('/questionnaire/role');
    }
  };

  return (
    <OnboardingLayout totalSteps={3} currentStep={1}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-gray-900 leading-tight">
            Who are you joining as?
          </h1>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-auto">
          <SelectionCard
            title="On my own"
            subtitle="Personal use"
            selected={selectedType === 'personal'}
            onClick={() => setSelectedType('personal')}
          />
          <SelectionCard
            title="Through my school"
            subtitle="Using an institution code"
            selected={selectedType === 'school'}
            onClick={() => setSelectedType('school')}
          />
        </div>

        {/* Continue Button */}
        <div className="pt-6">
          <button
            onClick={handleContinue}
            disabled={!selectedType}
            className="w-full py-5 rounded-[32px] bg-gradient-to-r from-[#5B4FDB] to-[#4F46E5] text-white font-bold text-[18px] shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 disabled:scale-100"
          >
            Continue →
          </button>

          {/* Terms */}
          <p className="text-center text-[11px] text-gray-500 mt-4">
            BY CONTINUING, YOU AGREE TO BODHI'S{' '}
            <span className="text-[#5B4FDB] font-semibold">TERMS OF SERVICE</span>{' '}
            AND{' '}
            <span className="text-[#5B4FDB] font-semibold">PRIVACY POLICY</span>
          </p>
        </div>
      </div>
    </OnboardingLayout>
  );
}
