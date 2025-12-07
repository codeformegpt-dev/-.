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
    <div className="py-32 px-4 md:px-12 bg-[#080808] border-t border-white/5 relative overflow-hidden">
      
      <div className="text-center mb-24 space-y-4">
        <h2 className="text-4xl md:text-6xl font-serif text-white">השקעה בזיכרונות</h2>
        <p className="text-gray-500 font-light tracking-widest text-sm uppercase">Choose Your Legacy</p>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto group">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className="pricing-card relative bg-white/5 border border-white/10 p-10 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/20"
          >
            {/* The Spotlight Glow */}
            <div 
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)`
              }}
            />
            
            <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                    {plan.isPopular && <span className="text-xs font-bold bg-white text-black px-2 py-1 rounded uppercase tracking-wider mb-3 inline-block">Popular Choice</span>}
                    <h3 className="text-2xl font-serif text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-light text-white">{plan.price}</span>
                    </div>
                </div>

                <div className="w-full h-px bg-white/10 mb-8" />
                
                <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-400">
                    <Check size={18} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-sm font-light leading-relaxed">{feature}</span>
                    </li>
                ))}
                </ul>

                <button 
                className="w-full py-4 text-sm font-bold tracking-widest uppercase border border-white/20 text-white hover:bg-white hover:text-black transition duration-300"
                >
                Select Plan
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;