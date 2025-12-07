import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data';

const Pricing: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.getElementsByClassName('pricing-card');
      
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    const container = containerRef.current;
    if(container) {
        container.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
        if(container) container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="py-24 px-4 md:px-12 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-serif text-white/90">החבילות שלי</h2>
        <p className="text-gray-500 font-light tracking-widest text-xs uppercase">Investment in Memories</p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto group">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className="pricing-card relative bg-[#121212] border border-white/5 p-8 rounded-xl overflow-hidden transition-colors duration-300 hover:border-white/10"
          >
            {/* The Spotlight Glow - Warmer Tone */}
            <div 
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 240, 220, 0.08), transparent 40%)`
              }}
            />
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6 text-center">
                    {plan.isPopular && <span className="text-[10px] font-bold bg-white/90 text-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block shadow-lg">הכי מבוקשת</span>}
                    <h3 className="text-xl font-serif text-white/90 mb-2">{plan.name}</h3>
                    <div className="mt-2 flex justify-center items-baseline gap-1">
                        <span className="text-3xl font-light text-white">{plan.price}</span>
                    </div>
                </div>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
                
                <ul className="space-y-4 mb-10 flex-grow px-4">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400 text-right" dir="rtl">
                    <Check size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-light leading-relaxed">{feature}</span>
                    </li>
                ))}
                </ul>

                <button 
                className="w-full py-3 text-xs font-bold tracking-[0.2em] uppercase border border-white/10 text-white/70 hover:bg-white hover:text-black hover:border-white transition duration-500"
                >
                אני רוצה את זה
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;