import { Sun, Timer, Compass, TrendingUp } from 'lucide-react';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: 'today' | 'sessions' | 'ai' | 'explore' | 'journey') => void;
}

export default function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  return (
    <div className="absolute bottom-6 left-6 right-6">
      <div className="bg-white/70 backdrop-blur-xl rounded-[32px] px-4 py-3 shadow-lg">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('today')}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${
              currentScreen === 'today' ? 'text-[#5B4FDB]' : 'text-gray-600'
            }`}
          >
            <Sun className="w-6 h-6" />
            <span className="text-[11px] font-medium">Today</span>
          </button>

          <button
            onClick={() => onNavigate('sessions')}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${
              currentScreen === 'sessions' ? 'text-[#5B4FDB]' : 'text-gray-600'
            }`}
          >
            <Timer className="w-6 h-6" />
            <span className="text-[11px] font-medium">Sessions</span>
          </button>

          <button
            onClick={() => onNavigate('ai')}
            className="w-16 h-16 -mt-8 bg-gradient-to-br from-[#5B4FDB] to-[#4F46E5] rounded-full flex items-center justify-center shadow-xl"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </button>

          <button
            onClick={() => onNavigate('explore')}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${
              currentScreen === 'explore' ? 'text-[#5B4FDB]' : 'text-gray-600'
            }`}
          >
            <Compass className="w-6 h-6" />
            <span className="text-[11px] font-medium">Explore</span>
          </button>

          <button
            onClick={() => onNavigate('journey')}
            className={`flex flex-col items-center justify-center gap-1 w-16 transition-colors ${
              currentScreen === 'journey' ? 'text-[#5B4FDB]' : 'text-gray-600'
            }`}
          >
            <TrendingUp className="w-6 h-6" />
            <span className="text-[11px] font-medium">Journey</span>
          </button>
        </div>
      </div>
    </div>
  );
}
