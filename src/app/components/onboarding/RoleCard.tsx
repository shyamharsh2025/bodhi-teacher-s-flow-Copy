interface RoleCardProps {
  title: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function RoleCard({ title, icon, selected, onClick }: RoleCardProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 p-6 rounded-3xl transition-all duration-200 ${
        selected
          ? 'bg-[#E8ECFE] border-2 border-[#5B4FDB] shadow-md'
          : 'bg-white/50 border-2 border-transparent shadow-sm hover:bg-white/70'
      }`}
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
            selected ? 'bg-[#5B4FDB]/10' : 'bg-gray-100'
          }`}
        >
          {icon}
        </div>
        <span className="text-[17px] font-bold text-gray-900">{title}</span>
      </div>
    </button>
  );
}
