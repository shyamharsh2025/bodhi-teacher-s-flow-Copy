import { useState } from 'react';
import { useNavigate } from 'react-router';
import OnboardingLayout from '../../onboarding/OnboardingLayout';

const moods = [
  { label: 'Low', color: 'bg-[#F87171]' },
  { label: 'Tired', color: 'bg-[#FBBF24]' },
  { label: 'Okay', color: 'bg-[#93C5FD]' },
  { label: 'Good', color: 'bg-[#86EFAC]' },
  { label: 'Thriving', color: 'bg-[#C084FC]' },
];

export default function EmotionalCheckInScreen() {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState<string>('Okay');
  const [note, setNote] = useState('');

  const handleContinue = () => {
    navigate('/home');
  };

  const handleSkip = () => {
    navigate('/home');
  };

  const selectedMoodData = moods.find((m) => m.label === selectedMood);

  return (
    <OnboardingLayout totalSteps={6} currentStep={6} showProgress={false}>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-gray-900 leading-tight">
            How are you feeling right now?
          </h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Just a quick check-in.
          </p>
        </div>

        {/* Large Selected Mood */}
        <div className="flex justify-center mb-8">
          <div
            className={`w-32 h-32 rounded-full ${selectedMoodData?.color} bg-gradient-to-br flex items-center justify-center shadow-lg`}
          >
            <span className="text-[17px] font-semibold text-gray-900">
              {selectedMood}
            </span>
          </div>
        </div>

        {/* Mood Selector */}
        <div className="bg-white/60 backdrop-blur-sm rounded-full p-3 shadow-lg mb-6">
          <div className="flex items-center justify-between gap-2">
            {moods.map((mood) => (
              <button
                key={mood.label}
                onClick={() => setSelectedMood(mood.label)}
                className={`flex-1 h-16 rounded-full ${mood.color} bg-gradient-to-br flex items-center justify-center transition-all ${
                  selectedMood === mood.label
                    ? 'scale-110 shadow-xl'
                    : 'scale-90 opacity-70 hover:opacity-90'
                }`}
              >
                <span className="text-[13px] font-semibold text-gray-900">
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Note Input */}
        <div className="mb-auto">
          <input
            type="text"
            placeholder="Anything on your mind......."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full px-5 py-4 rounded-[24px] bg-white/70 backdrop-blur-sm text-[16px] text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm border border-gray-200"
          />
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
