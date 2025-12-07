import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="relative w-full py-32 px-4 overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
            alt="Camera Background" 
            className="w-full h-full object-cover opacity-20 blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-black/80 to-[#141414]" />
      </div>

      {/* Fireflies Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
         {[...Array(20)].map((_, i) => (
             <div 
                key={i}
                className="firefly absolute rounded-full bg-yellow-100/60 shadow-[0_0_10px_rgba(255,255,0,0.5)]"
                style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animation: `float ${Math.random() * 10 + 10}s infinite linear, flicker ${Math.random() * 2 + 2}s infinite ease-in-out`
                }}
             />
         ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Side */}
        <div className="flex-1 text-center md:text-right space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl">
            בואו ניצור <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-netflixRed to-orange-500">קסם ביחד</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
            הסיפור של המשפחה שלכם ראוי להיות מסופר בצורה הכי מרגשת, אותנטית ויפה שיש. אני כאן כדי לתפוס את הרגעים שלא תחוו שוב לעולם.
            </p>
            <div className="hidden md:flex flex-col gap-4 text-gray-400 mt-8">
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-netflixRed rounded-full"/> זמינות בכל הארץ</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-netflixRed rounded-full"/> איכות ללא פשרות</div>
                <div className="flex items-center gap-3"><span className="w-2 h-2 bg-netflixRed rounded-full"/> חוויה נעימה ומרגיעה</div>
            </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 w-full max-w-lg">
            <form className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6 transform hover:scale-[1.01] transition duration-500">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">שם מלא</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg outline-none focus:border-netflixRed focus:bg-white/10 transition" placeholder="ישראל ישראלי" />
                </div>
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">אירוע / סוג צילום</label>
                    <select className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg outline-none focus:border-netflixRed focus:bg-white/10 transition [&>option]:bg-gray-900">
                        <option>חתונה קסומה</option>
                        <option>צילומי משפחה</option>
                        <option>בת/בר מצווה</option>
                        <option>הריון וניובורן</option>
                        <option>אחר</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">קצת פרטים על החלום שלכם</label>
                    <textarea rows={3} className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-lg outline-none focus:border-netflixRed focus:bg-white/10 transition" placeholder="תאריך משוער, לוקיישן, או סתם מחשבות..."></textarea>
                </div>
                
                <button type="button" className="w-full bg-gradient-to-r from-netflixRed to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold text-xl py-4 rounded-lg transition-all shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2 group">
                    <span>שריין תאריך</span>
                    <span className="group-hover:translate-x-1 transition-transform">←</span>
                </button>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;