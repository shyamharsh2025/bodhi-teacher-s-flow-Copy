import { Check } from 'lucide-react';

interface SelectionCardProps {
  title: string;
  subtitle?: string;
  selected: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export default function SelectionCard({ title, subtitle, selected, onClick, icon }: SelectionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-5 rounded-3xl transition-all duration-200 relative ${
        selected
          ? 'bg-[#E8ECFE] border-2 border-[#5B4FDB] shadow-md'
          : 'bg-white/50 border-2 border-transparent shadow-sm hover:bg-white/70'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="text-left flex-1">
          {icon && <div className="mb-3">{icon}</div>}
          <h3 className="text-[17px] font-bold text-gray-900 mb-1">{title}</h3>
          {subtitle && <p className="text-[14px] text-gray-500">{subtitle}</p>}
        </div>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
            selected ? 'bg-[#5B4FDB]' : 'bg-white border-2 border-gray-300'
          }`}
        >
          {selected && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </div>
      </div>
    </button>
  );
}
