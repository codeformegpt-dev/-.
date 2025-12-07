import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="relative w-full py-24 md:py-32 px-4 overflow-hidden bg-[#0a0a0a] text-white">
      
      {/* Background Texture - Grain */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
          <div className="w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain"></div>
      </div>
      
      {/* Editorial Background Image - Monochrome */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a] to-[#0a0a0a] z-10"></div>
        <img 
            src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=2070&auto=format&fit=crop" 
            alt="Editorial" 
            className="w-full h-full object-cover grayscale opacity-30"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <div className="space-y-10 text-center md:text-right">
            <div className="space-y-4">
                <p className="text-gray-400 tracking-[0.2em] text-sm uppercase">Contact The Studio</p>
                <h2 className="text-5xl md:text-7xl font-serif italic font-light tracking-tight leading-tight">
                    Let's Create <br />
                    <span className="not-italic font-bold text-white">Timeless Art</span>
                </h2>
            </div>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-md mx-auto md:mr-0 md:ml-auto">
                הזמנה ליצירה משותפת. בין אם זו חתונה אינטימית, רגע משפחתי נדיר או הפקת אופנה. בואו נהפוך את החזון שלכם למציאות ויזואלית שתישאר לנצח.
            </p>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-8 justify-center md:justify-start text-sm tracking-wider">
                <div>
                    <h4 className="font-bold text-white mb-1">LOCATION</h4>
                    <p className="text-gray-500">Tel Aviv, Israel</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1">EMAIL</h4>
                    <p className="text-gray-500">studio@photographer.com</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1">SOCIAL</h4>
                    <p className="text-gray-500">@photographer_studio</p>
                </div>
            </div>
        </div>

        {/* Form Side - Clean Minimalist */}
        <div className="bg-[#111] p-8 md:p-12 border border-white/5 shadow-2xl relative group">
            <div className="absolute top-0 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left"></div>
            
            <form className="space-y-8">
                <div className="space-y-6">
                    <div className="relative">
                        <input type="text" id="name" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white outline-none transition-colors placeholder-transparent" placeholder="Name" />
                        <label htmlFor="name" className="absolute right-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white pointer-events-none">שם מלא</label>
                    </div>

                    <div className="relative">
                        <input type="email" id="email" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white outline-none transition-colors placeholder-transparent" placeholder="Email" />
                        <label htmlFor="email" className="absolute right-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white pointer-events-none">אימייל</label>
                    </div>

                    <div className="relative">
                        <select id="type" className="peer w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-white outline-none transition-colors appearance-none cursor-pointer [&>option]:bg-[#111] text-right">
                            <option value="" disabled selected className="text-gray-500">בחרו סוג צילום</option>
                            <option>חתונה / Wedding</option>
                            <option>משפחה / Family</option>
                            <option>אופנה / Editorial</option>
                            <option>אחר / Other</option>
                        </select>
                        <div className="absolute left-0 top-4 pointer-events-none text-gray-500">▼</div>
                    </div>
                </div>

                <button type="button" className="w-full bg-white text-black font-serif italic font-bold text-xl py-4 mt-4 hover:bg-gray-200 transition-colors flex items-center justify-center gap-4 group">
                    <span>Send Request</span>
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;