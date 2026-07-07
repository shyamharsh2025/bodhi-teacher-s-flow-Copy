import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { ArrowRight, Clock } from 'lucide-react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';

export default function OTPVerificationScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { value = 'anushafarooqui1999@gmail.com', type = 'email' } = location.state || {};

  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(27);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleVerify = () => {
    if (otp.length === 6) {
      navigate('/questionnaire/user-type');
    }
  };

  const handleResend = () => {
    if (countdown === 0) {
      setCountdown(27);
      setOtp('');
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
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
          <defs>
            <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#5B4FDB" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
            <filter id="shadow">
              <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.2"/>
            </filter>
          </defs>
          <path
            d="M35 40C35 36 37.5 33 41 33C47 33 50 38 54 38C58 38 60 36 60 32C60 28 58 26 54 26C50 26 48 28 45 31C42 34 39 36 34 36C29 36 26 34 26 30C26 26 29 24 33 24C37 24 39 26 42 29"
            stroke="url(#logoGradient2)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            filter="url(#shadow)"
          />
          <path
            d="M60 55C60 59 57.5 62 54 62C47 62 44 57 40 57C36 57 34 59 34 63C34 67 36 69 40 69C44 69 46 67 49 64C52 61 55 59 60 59C65 59 68 61 68 65C68 69 65 71 61 71C57 71 55 69 52 66"
            stroke="url(#logoGradient2)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            filter="url(#shadow)"
          />
        </svg>
      </div>

      {/* Content Card */}
      <div className="flex-1 px-6">
        <div className="bg-white/70 backdrop-blur-xl rounded-[32px] p-8 shadow-[0_8px_32px_rgba(91,79,219,0.12)]">
          <h1 className="text-[28px] font-bold text-gray-900 mb-4 text-center">
            Verify Your {type === 'email' ? 'Email' : 'Phone'}
          </h1>
          <p className="text-[14px] text-gray-600 text-center mb-2">
            Enter the 6-digit code sent to
          </p>
          <p className="text-[15px] font-semibold text-gray-900 text-center mb-10">
            {value}
          </p>

          {/* OTP Input */}
          <div className="flex justify-center mb-8">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup className="gap-3">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <InputOTPSlot
                    key={index}
                    index={index}
                    className="w-12 h-14 rounded-2xl bg-[#F3F3F5] border-2 border-transparent data-[active=true]:border-[#5B4FDB] data-[active=true]:bg-white text-[20px] font-bold text-gray-900 transition-all shadow-sm"
                  />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.length !== 6}
            className="w-full py-4 rounded-[28px] bg-gradient-to-r from-[#5B4FDB] via-[#6B46E5] to-[#7C3AED] text-white font-bold text-[17px] shadow-[0_8px_24px_rgba(91,79,219,0.4)] hover:shadow-[0_12px_32px_rgba(91,79,219,0.5)] transition-all disabled:opacity-50 disabled:shadow-none flex items-center justify-center gap-2 mb-6"
          >
            Verify OTP
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Change Email */}
          <button
            onClick={() => navigate('/login')}
            className="w-full text-[#5B4FDB] font-semibold text-[15px] mb-4"
          >
            Change {type === 'email' ? 'Email' : 'Phone'}
          </button>

          {/* Resend OTP */}
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-[14px]">
              {countdown > 0 ? (
                <>Resend OTP in {countdown}s</>
              ) : (
                <button onClick={handleResend} className="text-[#5B4FDB] font-semibold">
                  Resend OTP
                </button>
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pt-6 pb-3">
        <div className="w-32 h-1 bg-gray-900 rounded-full"></div>
      </div>
    </div>
  );
}
