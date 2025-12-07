import React from 'react';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 px-4 md:px-12 bg-[#141414] border-t border-white/5">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-serif text-white">חבילות צילום</h2>
        <p className="text-gray-400 font-light text-lg">בחרו את החבילה שמתאימה לסיפור שלכם</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingPlans.map((plan) => (
          <div 
            key={plan.id} 
            className={`relative p-8 rounded-xl border flex flex-col transition-all duration-300 hover:transform hover:-translate-y-2 ${
              plan.isPopular 
                ? 'bg-white/10 border-netflixRed/50 shadow-[0_0_30px_rgba(229,9,20,0.2)]' 
                : 'bg-[#181818] border-white/10 hover:border-white/30'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-netflixRed text-white px-4 py-1 text-sm font-bold rounded-full shadow-lg">
                הכי פופולרי
              </div>
            )}
            
            <h3 className="text-2xl font-serif text-white mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold text-white mb-8 font-sans">{plan.price}</div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <Check size={18} className={plan.isPopular ? "text-netflixRed" : "text-gray-500"} />
                  <span className="text-sm md:text-base font-light">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-3 font-bold transition rounded ${
                plan.isPopular 
                  ? 'bg-netflixRed hover:bg-red-700 text-white shadow-lg' 
                  : 'bg-transparent border border-white/30 hover:bg-white hover:text-black text-white'
              }`}
            >
              בחר חבילה
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;