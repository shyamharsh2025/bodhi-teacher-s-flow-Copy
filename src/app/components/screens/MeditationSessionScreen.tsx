import { X, SkipBack, Pause, SkipForward, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function MeditationSessionScreen() {
  const navigate = useNavigate();

  return (
    <div className="h-full bg-gradient-to-b from-white to-[#F8F9FA] flex flex-col items-center justify-between px-6 py-8">
      {/* Top Section */}
      <div className="text-center pt-8">
        <h1 className="text-[28px] font-bold text-gray-900 mb-2">Calm Reset</h1>
        <p className="text-[15px] text-gray-400 italic">Just this breath. Nothing else</p>
      </div>

      {/* Center Focus Area - Gradient Orb */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[320px] h-[320px] flex items-center justify-center">
          {/* Soft gradient orb with heavy blur */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] blur-[80px] opacity-70"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60A5FA] via-[#8B5CF6] to-[#EC4899] blur-[60px] opacity-50"></div>

          {/* Instruction Text */}
          <div className="relative z-10">
            <p className="text-[32px] font-light text-white text-center">Breathe in</p>
          </div>
        </div>
      </div>

      {/* Bottom Area - Progress Indicator, Timeline and Controls */}
      <div className="w-full">
        {/* Progress Indicator */}
        <div className="text-center mb-6">
          <p className="text-[14px] text-gray-400">Round 1 of 4</p>
        </div>

        {/* Timeline Progress Bar */}
        <div className="w-full mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[13px] text-gray-500">1:13</span>
            <span className="text-[13px] text-gray-500">5:00</span>
          </div>
          <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-[24%] bg-gray-800 rounded-full"></div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-center gap-4 pb-6">
          <button
            onClick={() => navigate(-1)}
            className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg"
          >
            <X className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          <button className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <SkipBack className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          <button className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <Pause className="w-6 h-6 text-white" strokeWidth={2.5} fill="white" />
          </button>
          <button className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <SkipForward className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          <button className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center shadow-lg">
            <Volume2 className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
