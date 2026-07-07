import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GraduationCap, User } from 'lucide-react';
import OnboardingLayout from '../../onboarding/OnboardingLayout';
import RoleCard from '../../onboarding/RoleCard';

export default function RoleSelectionScreen() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState<'student' | 'teacher' | null>('student');
  const [institutionCode, setInstitutionCode] = useState('');

  const handleContinue = () => {
    if (selectedRole) {
      navigate('/questionnaire/basic-info');
    }
  };

  return (
    <OnboardingLayout totalSteps={3} currentStep={2}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-gray-900 leading-tight">
            Who are you?
          </h1>
        </div>

        {/* Role Cards */}
        <div className="flex gap-4 mb-6">
          <RoleCard
            title="Student"
            icon={<GraduationCap className="w-8 h-8 text-[#5B4FDB]" />}
            selected={selectedRole === 'student'}
            onClick={() => setSelectedRole('student')}
          />
          <RoleCard
            title="Teacher"
            icon={<User className="w-8 h-8 text-[#5B4FDB]" />}
            selected={selectedRole === 'teacher'}
            onClick={() => setSelectedRole('teacher')}
          />
        </div>

        {/* Institution Code */}
        <div className="mb-auto">
          <label className="block text-[11px] font-bold text-gray-900 mb-2 tracking-wide">
            ENTER YOUR INSTITUTION CODE
          </label>
          <input
            type="text"
            placeholder="e.g. ABC123"
            value={institutionCode}
            onChange={(e) => setInstitutionCode(e.target.value)}
            className="w-full px-5 py-4 rounded-[24px] bg-white/70 backdrop-blur-sm text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm border border-gray-200"
          />
          <p className="text-[13px] text-gray-500 mt-2">Provided by your school</p>
        </div>

        {/* Continue Button */}
        <div className="pt-6">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
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
