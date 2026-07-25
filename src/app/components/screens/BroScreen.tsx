import { ArrowLeft, Menu, Wind, Zap, MessageSquare, HelpCircle, Moon, RotateCcw, Mic, Send } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useState, useRef, useEffect } from 'react';
import { VoicePoweredOrb } from '../VoicePoweredOrb';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bro';
  timestamp: Date;
  recommendation?: Recommendation;
}

interface Recommendation {
  title: string;
  playlist: string;
  route: string;
  cta: string;
}

interface RecommendationMatch extends Recommendation {
  response: string;
}

const recommendations: Array<{
  test: RegExp;
  title: string;
  playlist: string;
  route: string;
  cta: string;
  response: string;
}> = [
  {
    test: /\b(discipline|self[-\s]?discipline|consistent|consistency|willpower)\b/i,
    title: 'Master Your Mind',
    playlist: 'Regulation & Control',
    route: '/home/regulation-control/master-your-mind',
    cta: 'Start Master Your Mind',
    response:
      "Hey Anusha, if you're trying to build discipline, Master Your Mind is the right practice. It does not ask you to control every thought; it helps you direct attention and choose your response with more steadiness.",
  },
  {
    test: /\b(communicat(e|ion)|speak|speaking|voice|express|confident|confidence|self[-\s]?expression)\b/i,
    title: 'Throat Chakra Meditation',
    playlist: 'Chakra Reset Series',
    route: '/home/chakra-meditation/throat',
    cta: 'Open Throat Chakra',
    response:
      "Hey Anusha, if you want to communicate better or feel more confident expressing yourself, Throat Chakra Meditation is a good fit. It is built around voice, expression, and speaking from a calmer place.",
  },
  {
    test: /\b(study|studying|study session|prepare|prep|revision|homework|assignment|exam)\b/i,
    title: 'NSDR Quick Reset',
    playlist: 'Focus & Concentration',
    route: '/home/focus-concentration/nsdr-quick-reset',
    cta: 'Start NSDR Quick Reset',
    response:
      "Hey Anusha, if you're preparing for a study session, NSDR Quick Reset is a smart start. It gives your mind a short recovery window so you can enter the session clearer and less scattered.",
  },
  {
    test: /\b(tired|tied|exhausted|drained|fatigued|low energy|burnt out|burned out|sleepy)\b/i,
    title: 'NSDR Deep Recovery',
    playlist: 'Focus & Concentration',
    route: '/home/focus-concentration/nsdr-deep-recovery',
    cta: 'Start NSDR Deep Recovery',
    response:
      "Hey Anusha, if you're feeling tired, NSDR Deep Recovery is the better reset. It helps your nervous system recover without asking you to push harder.",
  },
  {
    test: /\b(sleep|sleep better|can't sleep|insomnia|rest|bed|wind down)\b/i,
    title: 'Yog Nidra',
    playlist: 'Focus & Concentration',
    route: '/home/focus-concentration/yog-nidra',
    cta: 'Start Yog Nidra',
    response:
      "Hey Anusha, if you want to sleep better, Yog Nidra is the one I would pick. It helps the body downshift and gives the mind a softer landing before rest.",
  },
  {
    test: /\b(clarity|clear mind|confused|direction|insight|perspective|clearer)\b/i,
    title: 'Third Eye Chakra Meditation',
    playlist: 'Chakra Reset Series',
    route: '/home/chakra-meditation/third-eye',
    cta: 'Open Third Eye Chakra',
    response:
      "Hey Anusha, if you're looking for clarity, Third Eye Chakra Meditation fits beautifully. It is a calmer way to step back, notice what matters, and find a clearer perspective.",
  },
  {
    test: /\b(anxious|anxiety|nervous|uneasy|panic|racing thoughts|tense)\b/i,
    title: 'Calm Your Anxiety',
    playlist: 'Emotional Wellbeing',
    route: '/home/emotional-wellbeing/calm-your-anxiety',
    cta: 'Try Calm Your Anxiety',
    response:
      "Hey Anusha, if you're feeling anxious, Calm Your Anxiety is where I would start. It helps you slow the body down, notice the feeling, and create a little room around the racing thoughts.",
  },
];

function findRecommendation(text: string): RecommendationMatch | null {
  return recommendations.find((item) => item.test.test(text)) ?? null;
}

export default function BroScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const showIntentPills = messages.length === 0 && !inputValue.trim();

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Clear input
    setInputValue('');

    const match = findRecommendation(text);

    // Bro response after a short delay
    setTimeout(() => {
      const broMessage: Message = {
        id: Date.now() + 1,
        text:
          match?.response ??
          "Hey Anusha, I hear you. Tell me what you want help with: discipline, confidence, study prep, tiredness, sleep, clarity, or anxiety, and I'll point you to the right practice.",
        sender: 'bro',
        timestamp: new Date(),
        recommendation: match
          ? {
              title: match.title,
              playlist: match.playlist,
              route: match.route,
              cta: match.cta,
            }
          : undefined,
      };
      setMessages((prev) => [...prev, broMessage]);
    }, 800);
  };

  const handleButtonClick = (buttonText: string) => {
    handleSendMessage(buttonText);
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gradient-to-b from-[#E8ECFE] to-[#F5F7FF] relative">
      <style>{`
        .chat-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .chat-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(91, 79, 219, 0.3);
          border-radius: 10px;
        }

        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(91, 79, 219, 0.5);
        }

        .chat-fade-mask {
          -webkit-mask-image: linear-gradient(
            to bottom,
            transparent 0,
            rgba(0, 0, 0, 0.18) 12px,
            rgba(0, 0, 0, 0.72) 40px,
            #000 68px
          );
          mask-image: linear-gradient(
            to bottom,
            transparent 0,
            rgba(0, 0, 0, 0.18) 12px,
            rgba(0, 0, 0, 0.72) 40px,
            #000 68px
          );
        }

        .liquid-glass {
          background:
            radial-gradient(circle at 18% 8%, rgba(255, 255, 255, 0.92), transparent 34%),
            radial-gradient(circle at 88% 86%, rgba(142, 199, 255, 0.28), transparent 42%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.72), rgba(205, 196, 255, 0.38) 54%, rgba(255, 255, 255, 0.48));
          border: 1px solid rgba(255, 255, 255, 0.82);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.96),
            inset 0 -1px 0 rgba(108, 93, 208, 0.12),
            0 10px 26px rgba(84, 75, 187, 0.13),
            0 2px 7px rgba(95, 82, 197, 0.08);
          backdrop-filter: blur(22px) saturate(165%);
          -webkit-backdrop-filter: blur(22px) saturate(165%);
        }

        .liquid-glass-button {
          cursor: pointer;
          transition: background 200ms ease, box-shadow 200ms ease;
        }

        .liquid-glass-button:hover {
          background:
            radial-gradient(circle at 18% 8%, rgba(255, 255, 255, 0.98), transparent 36%),
            radial-gradient(circle at 88% 86%, rgba(142, 199, 255, 0.34), transparent 44%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.82), rgba(194, 183, 255, 0.46) 54%, rgba(255, 255, 255, 0.58));
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 1),
            inset 0 -1px 0 rgba(108, 93, 208, 0.14),
            0 12px 28px rgba(84, 75, 187, 0.17),
            0 2px 7px rgba(95, 82, 197, 0.10);
        }

        .liquid-glass-primary {
          background:
            radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.48), transparent 32%),
            radial-gradient(circle at 82% 88%, rgba(91, 190, 255, 0.38), transparent 44%),
            linear-gradient(135deg, rgba(91, 79, 219, 0.92), rgba(124, 58, 237, 0.78));
          border: 1px solid rgba(255, 255, 255, 0.58);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.58),
            inset 0 -2px 4px rgba(45, 32, 120, 0.20),
            0 9px 22px rgba(91, 79, 219, 0.32);
          backdrop-filter: blur(18px) saturate(170%);
          -webkit-backdrop-filter: blur(18px) saturate(170%);
        }

        .liquid-glass-primary:hover {
          background:
            radial-gradient(circle at 28% 18%, rgba(255, 255, 255, 0.56), transparent 34%),
            radial-gradient(circle at 82% 88%, rgba(91, 190, 255, 0.44), transparent 46%),
            linear-gradient(135deg, rgba(83, 70, 211, 0.96), rgba(114, 49, 226, 0.84));
        }

        .liquid-glass-tail {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.78), rgba(216, 207, 255, 0.58));
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-4 pb-4 relative z-30">
        <button onClick={() => navigate(-1)} className="liquid-glass liquid-glass-button w-10 h-10 rounded-full flex items-center justify-center">
          <ArrowLeft className="w-5 h-5 text-[#5B4FDB]" />
        </button>
        <h1 className="bg-[linear-gradient(135deg,#3F35B5_0%,#6D52E8_62%,#3B82F6_100%)] bg-clip-text text-[28px] font-black leading-none tracking-[-0.065em] text-transparent drop-shadow-[0_2px_8px_rgba(91,79,219,0.16)]">
          Bro
        </h1>
        <button className="liquid-glass liquid-glass-button w-10 h-10 rounded-full flex items-center justify-center">
          <Menu className="w-5 h-5 text-[#5B4FDB]" />
        </button>
      </div>

      {/* Fixed Bro character orb */}
      <div className="fixed top-[86px] left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div className="relative flex w-[320px] flex-col items-center">
          <div className="relative h-[228px] w-[228px]">
            <div className="pointer-events-none absolute inset-[5%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.72)_0%,rgba(134,196,255,0.22)_30%,rgba(88,64,212,0.22)_54%,transparent_74%)] blur-2xl" />
            <div className="pointer-events-none absolute inset-[14%] rounded-full bg-[#05091F]/[0.04] blur-xl" />
            <VoicePoweredOrb
              variant="energySphere"
              enableVoiceControl={false}
              className="relative z-10"
            />
          </div>

          <div className="liquid-glass -mt-1 relative rounded-[24px] px-7 py-4 text-center">
            <div className="liquid-glass-tail absolute left-1/2 top-[-7px] h-4 w-4 -translate-x-1/2 rotate-45 border-l border-t border-white/80" />
            <h2 className="relative text-[24px] font-bold text-[#2D2E34] leading-8" style={{ fontFamily: 'Inter, sans-serif' }}>
              Hello Anusha
            </h2>
            <p className="relative mt-1 text-[14px] font-medium text-[#5A5B62] leading-5" style={{ fontFamily: 'Inter, sans-serif' }}>
              What's on your mind today?
            </p>
          </div>
        </div>
      </div>

      {/* Scrollable Chat Area */}
      <div
        ref={chatContainerRef}
        className={`mt-[330px] min-h-0 flex-1 overflow-y-auto px-6 pt-4 ${showIntentPills ? 'pb-[400px]' : 'pb-[132px]'} chat-scrollbar chat-fade-mask relative z-10`}
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[75%] px-5 py-3 rounded-3xl ${
                message.sender === 'user'
                  ? 'bg-gradient-to-br from-[#5B4FDB] to-[#7C3AED] text-white'
                  : 'bg-white/70 backdrop-blur-sm text-gray-800'
              } shadow-sm`}
            >
              <p className="text-[15px]">{message.text}</p>
              {message.recommendation && (
                <button
                  onClick={() => navigate(message.recommendation!.route)}
                  className="mt-4 w-full rounded-[22px] border border-[#DCD6FF] bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(244,242,255,0.94)_100%)] p-3.5 text-left shadow-[0px_12px_26px_rgba(84,75,187,0.14)] active:scale-[0.98] transition-transform"
                >
                  <span className="block text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#8171F2]">
                    {message.recommendation.playlist}
                  </span>
                  <span className="mt-1 block text-[17px] font-extrabold leading-6 text-[#2D2E34]">
                    {message.recommendation.title}
                  </span>
                  <span className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8171F2_0%,#5840D4_58%,#3B82F6_100%)] px-4 text-[13px] font-extrabold text-white shadow-[0px_10px_20px_rgba(84,75,187,0.28)]">
                    {message.recommendation.cta}
                  </span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Bottom Section - Buttons and Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-[#F5F7FF] via-[#F5F7FF] to-transparent px-6 pt-4 pb-6 space-y-3 z-30">
        {showIntentPills && (
          <>
            {/* Action Buttons - 2x3 Grid */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleButtonClick('I feel anxious')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <Wind className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Anxious</span>
              </button>
              <button
                onClick={() => handleButtonClick('I want to prepare for a study session')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <Zap className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Study Prep</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleButtonClick('I want to communicate better')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Communicate</span>
              </button>
              <button
                onClick={() => handleButtonClick('I want clarity')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <HelpCircle className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Clarity</span>
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleButtonClick('I am tired')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <Moon className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Tired</span>
              </button>
              <button
                onClick={() => handleButtonClick('I want to build discipline')}
                className="liquid-glass liquid-glass-button px-5 py-3.5 rounded-full flex items-center justify-center gap-2.5"
              >
                <RotateCcw className="w-5 h-5 text-[#5B4FDB]" strokeWidth={2} />
                <span className="text-[15px] font-semibold text-gray-800">Discipline</span>
              </button>
            </div>
          </>
        )}

        {/* Input Field */}
        <form onSubmit={handleInputSubmit} className="relative pt-1">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask me anything..."
            className="w-full px-6 py-4 pr-16 rounded-full bg-white/70 backdrop-blur-sm text-[15px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5B4FDB]/30 shadow-sm"
          />
          <button
            type="submit"
            className="liquid-glass-primary liquid-glass-button absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center"
          >
            {inputValue ? (
              <Send className="w-5 h-5 text-white" />
            ) : (
              <Mic className="w-5 h-5 text-white" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
