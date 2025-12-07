import React from 'react';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="relative w-full py-24 px-4 overflow-hidden">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
            alt="Camera Background" 
            className="w-full h-full object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] via-[#141414]/90 to-[#141414]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl">
          מוכנים ליצור את <span className="text-netflixRed">השובר קופות</span> הבא?
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          הסיפור שלכם ראוי לצילום ברמה הקולנועית הגבוהה ביותר. השאירו פרטים ונחזור אליכם לתסריט.
        </p>

        <form className="max-w-xl mx-auto bg-black/50 backdrop-blur-md p-8 rounded-xl border border-gray-800 shadow-2xl space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם מלא" className="bg-[#333] text-white p-4 rounded outline-none focus:ring-2 focus:ring-white transition placeholder-gray-400" />
                <input type="email" placeholder="אימייל" className="bg-[#333] text-white p-4 rounded outline-none focus:ring-2 focus:ring-white transition placeholder-gray-400" />
            </div>
            <select className="w-full bg-[#333] text-white p-4 rounded outline-none focus:ring-2 focus:ring-white transition text-gray-400">
                <option>סוג הצילום המבוקש</option>
                <option>חתונה / אירוע</option>
                <option>בוק אישי / עסקי</option>
                <option>הפקת אופנה</option>
                <option>אחר</option>
            </select>
            <textarea placeholder="ספרו לנו קצת על החזון..." rows={4} className="w-full bg-[#333] text-white p-4 rounded outline-none focus:ring-2 focus:ring-white transition placeholder-gray-400" />
            
            <button type="button" className="w-full bg-netflixRed hover:bg-red-700 text-white font-bold text-xl py-4 rounded transition transform hover:scale-[1.02] shadow-lg">
                שלח הודעה
            </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;