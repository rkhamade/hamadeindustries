
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export const FloatingAudit: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Welcome to the Hamade Industries Infrastructure Audit Tool. What specific operational bottleneck are you facing today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      // Create a new GoogleGenAI instance right before making an API call to ensure it uses the most up-to-date configuration.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using 'gemini-3-pro-preview' for complex strategic and business infrastructure reasoning tasks.
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a high-level performance infrastructure consultant for "Hamade Industries". 
          Your tone is extremely professional, objective, serious, and infrastructure-focused. 
          Analyze business problems and suggest systematic solutions (automation, pipelines, workflows). 
          Keep answers concise and executive-level. 
          Remind the user that a full human audit is available at HamadeIndustries.com/audit.`,
        }
      });

      // Correctly access the .text property from GenerateContentResponse (not a method).
      const reply = response.text || "I'm sorry, I was unable to process that analysis. Please contact our main office.";
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'bot', text: "Service error. Please schedule a manual consultation instead." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-white text-black rounded-sm shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
        >
          <MessageSquare size={24} />
        </button>
      ) : (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-zinc-900 border border-white/10 shadow-2xl rounded-sm flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
          <div className="p-4 bg-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-zinc-400" />
              <span className="font-bold text-sm tracking-tight uppercase">Infrastructure Audit AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-sm text-sm ${
                  msg.role === 'user' 
                    ? 'bg-white text-black' 
                    : 'bg-zinc-800 text-zinc-300'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-sm flex gap-2">
                  <Loader2 size={16} className="animate-spin" />
                  <span className="text-xs text-zinc-400">Analyzing Infrastructure...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 bg-zinc-900">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Describe your bottleneck..."
                className="flex-1 bg-zinc-800 border-none text-sm p-3 focus:ring-1 focus:ring-white rounded-sm outline-none placeholder:text-zinc-500"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-white text-black p-3 rounded-sm hover:bg-zinc-200 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
