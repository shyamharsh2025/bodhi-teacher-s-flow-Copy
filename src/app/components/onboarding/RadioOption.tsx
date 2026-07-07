interface RadioOptionProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function RadioOption({ label, selected, onClick }: RadioOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4 rounded-full text-left transition-all duration-200 flex items-center gap-3 ${
        selected
          ? 'bg-[#E8ECFE] border-2 border-[#5B4FDB]'
          : 'bg-white/50 border-2 border-transparent hover:bg-white/70'
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
          selected ? 'bg-white border-[6px] border-[#5B4FDB]' : 'bg-white border-2 border-gray-300'
        }`}
      />
      <span className="text-[15px] text-gray-900">{label}</span>
    </button>
  );
}
