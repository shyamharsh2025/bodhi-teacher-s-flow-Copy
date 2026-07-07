import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';

export default function LoginScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'email' | 'phone'>('phone');
  const [inputValue, setInputValue] = useState('');

  const handleContinue = () => {
    if (inputValue.trim()) {
      navigate('/otp', { state: { value: inputValue, type: activeTab } });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#E8E9F3] via-[#E5E7F2] to-[#E3E5F1] overflow-hidden">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-8 pt-4 pb-2">
        <div className="text-[15px] font-semibold">9:41</div>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <div key={i} className={`w-0.5 h-3 rounded-full ${i < 3 ? 'bg-gray-900' : 'bg-gray-400'}`}></div>
            ))}
          </div>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="ml-1">
            <path d="M1 6C1 3.79086 2.79086 2 5 2H11C13.2091 2 15 3.79086 15 6C15 8.20914 13.2091 10 11 10H5C2.79086 10 1 8.20914 1 6Z" fill="#000"/>
            <rect x="13" y="3" width="2" height="6" rx="1" fill="#000"/>
          </svg>
          <div className="w-6 h-3 rounded-full bg-gray-900 ml-0.5"></div>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center pt-6 pb-12">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B4FDB" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
          <path
            d="M30 35C30 32 32 30 35 30C40 30 42 34 45 34C48 34 50 32 50 29C50 26 48 24 45 24C42 24 40 26 38 28C36 30 34 32 30 32C26 32 24 30 24 27C24 24 26 22 29 22C32 22 34 24 36 26"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M50 45C50 48 48 50 45 50C40 50 38 46 35 46C32 46 30 48 30 51C30 54 32 56 35 56C38 56 40 54 42 52C44 50 46 48 50 48C54 48 56 50 56 53C56 56 54 58 51 58C48 58 46 56 44 54"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      {/* Content Card */}
      <div className="flex-1 px-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_8px_32px_rgba(91,79,219,0.12)]">
          <h1 className="text-[24px] font-bold text-gray-900 mb-2 text-center">
            Enter Your Email or Number
          </h1>
          <p className="text-[14px] text-gray-500 mb-8 text-center">
            We'll send you a verification code
          </p>

          {/* Toggle */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('email')}
              className={`flex-1 py-3 px-6 rounded-full text-[15px] font-semibold transition-all ${
                activeTab === 'email'
                  ? 'bg-white text-[#5B4FDB] border-2 border-[#5B4FDB] shadow-md'
                  : 'bg-transparent text-gray-600 border-2 border-transparent'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setActiveTab('phone')}
              className={`flex-1 py-3 px-6 rounded-full text-[15px] font-semibold transition-all ${
                activeTab === 'phone'
                  ? 'bg-white text-[#5B4FDB] border-2 border-[#5B4FDB] shadow-md'
                  : 'bg-transparent text-gray-600 border-2 border-transparent'
              }`}
            >
              Phone
            </button>
          </div>

          {/* Input */}
          <input
            type={activeTab === 'email' ? 'email' : 'tel'}
            placeholder={activeTab === 'email' ? 'Email' : 'Phone'}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-6 py-4 rounded-[20px] bg-[#F3F3F5] border-none text-[16px] text-gray-900 placeholder:text-gray-400 mb-6 outline-none focus:ring-2 focus:ring-[#5B4FDB]/20"
          />

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!inputValue.trim()}
            className="w-full py-4 rounded-[28px] bg-gradient-to-r from-[#5B4FDB] via-[#6B46E5] to-[#7C3AED] text-white font-bold text-[17px] shadow-[0_8px_24px_rgba(91,79,219,0.4)] hover:shadow-[0_12px_32px_rgba(91,79,219,0.5)] transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2"
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-[13px] text-gray-400">OR</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <button className="w-full py-4 rounded-[28px] bg-white border border-gray-200 text-gray-700 font-semibold text-[15px] shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3">
            <svg width="20" height="20" viewBox="0 0 20 20">
              <path d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z" fill="#4285F4"/>
              <path d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z" fill="#34A853"/>
              <path d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z" fill="#FBBC05"/>
              <path d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z" fill="#EA4335"/>
            </svg>
            Login with Google
          </button>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pt-6 pb-3">
        <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
