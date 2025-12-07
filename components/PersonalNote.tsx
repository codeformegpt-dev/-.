import React from 'react';

const PersonalNote: React.FC = () => {
  return (
    <div className="py-32 px-6 md:px-20 bg-[#0c0c0c] text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-3xl font-serif text-white italic">
                "אני מאמין שכל תמונה צריכה לספר סיפור. לא את הסיפור שלי, אלא את הסיפור שלכם."
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg md:text-xl">
                <p>
                    היי, אני רוני. אני לא סתם מצלם תמונות, אני אוסף רגעים.
                    בעולם שבו הכל מהיר ודיגיטלי, אני מחפש את ההשתהות, את המבט האמיתי, את החיבוק שלא נגמר.
                </p>
                <p>
                    הגישה שלי היא פשוטה: להיות שם, אבל לא להפריע. לתת לכם להיות אתם, ולתפוס את היופי הטבעי שיוצא מכם כשאתם מרגישים בנוח.
                    בין אם זו חתונה, ברית או סתם יום שישי בבית – אני כאן כדי להפוך את הרגעים האלו לזיכרונות שתוכלו להחזיק ביד.
                </p>
            </div>
            
            <div className="pt-8">
                <div className="font-serif text-4xl text-white/80" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Roni Levi
                </div>
                <div className="text-xs tracking-widest text-gray-600 mt-2 uppercase">Photographer & Storyteller</div>
            </div>
        </div>
    </div>
  );
};

export default PersonalNote;