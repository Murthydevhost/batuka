import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    const labelTimer = setTimeout(() => setShowLabel(false), 7000);
    return () => {
      clearTimeout(t);
      clearTimeout(labelTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div
        className={`overflow-hidden transition-all duration-500 ${
          showLabel ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-gray-100">
          <span className="text-sm text-gray-700 font-medium">Chat with us!</span>
          <button
            onClick={() => setShowLabel(false)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Dismiss"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-ring"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white" />
      </a>
    </div>
  );
}
