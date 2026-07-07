import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function OnboardingProfileScreen() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [classGrade, setClassGrade] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const genderOptions = ['Female', 'Male', 'Other'];

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-[#E8ECFE] via-[#EEF2FF] to-[#E0E7FF]">
      {/* Subtle background orbs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-[#C084FC]/20 to-[#A78BFA]/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-br from-[#5B4FDB]/10 to-[#3B82F6]/10 rounded-full blur-[100px]"></div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col px-6 pt-6 pb-6">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="h-1 bg-gray-300 rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-gray-900 rounded-full transition-all duration-300"></div>
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] font-bold text-gray-900 leading-tight">
            Tell us about you
          </h1>
        </div>

        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 rounded-[24px] bg-white/70 backdrop-blur-sm text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm border border-gray-200"
          />
        </div>

        {/* Class/Grade Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Class/Grade"
            value={classGrade}
            onChange={(e) => setClassGrade(e.target.value)}
            className="w-full px-5 py-4 rounded-[24px] bg-white/70 backdrop-blur-sm text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm border border-gray-200"
          />
        </div>

        {/* Gender Selection */}
        <div className="mb-4">
          <div className="flex gap-3">
            {genderOptions.map((option) => (
              <button
                key={option}
                onClick={() => setGender(option)}
                className={`flex-1 py-3.5 rounded-full text-[15px] font-semibold transition-all ${
                  gender === option
                    ? 'bg-[#5B4FDB] text-white shadow-lg scale-105'
                    : 'bg-white/70 backdrop-blur-sm text-gray-700 shadow-sm border border-gray-200 hover:bg-white/90'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Age Input */}
        <div className="mb-auto">
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full px-5 py-4 rounded-[24px] bg-white/70 backdrop-blur-sm text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm border border-gray-200"
          />
        </div>

        {/* Continue Button */}
        <div className="pt-6">
          <button
            onClick={() => navigate('/home')}
            className="w-full py-5 rounded-[32px] bg-gradient-to-r from-[#5B4FDB] to-[#4F46E5] text-white font-bold text-[18px] shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-200"
          >
            Continue
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="relative z-10 pb-2">
        <div className="w-32 h-1.5 bg-gray-900 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}
