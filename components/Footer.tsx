import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#141414] py-16 px-4 md:px-12 mt-12 text-[#808080]">
      <div className="max-w-5xl mx-auto">
        <div className="flex gap-6 mb-8 text-white">
          <Facebook className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <Instagram className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <Twitter className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          <Youtube className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
            <ul className="space-y-3">
                <li className="hover:underline cursor-pointer">שמע וקול</li>
                <li className="hover:underline cursor-pointer">קשרי משקיעים</li>
                <li className="hover:underline cursor-pointer">פרטיות</li>
                <li className="hover:underline cursor-pointer">צור קשר</li>
            </ul>
             <ul className="space-y-3">
                <li className="hover:underline cursor-pointer">מרכז עזרה</li>
                <li className="hover:underline cursor-pointer">דרושים</li>
                <li className="hover:underline cursor-pointer">העדפות עוגיות</li>
                <li className="hover:underline cursor-pointer">מידע משפטי</li>
            </ul>
             <ul className="space-y-3">
                <li className="hover:underline cursor-pointer">כרטיסי מתנה</li>
                <li className="hover:underline cursor-pointer">תנאי שימוש</li>
                <li className="hover:underline cursor-pointer">תאגיד מידע</li>
            </ul>
             <ul className="space-y-3">
                <li className="hover:underline cursor-pointer">מדיה סנטר</li>
                <li className="hover:underline cursor-pointer">צור קשר</li>
            </ul>
        </div>

        <button className="border border-gray-500 px-4 py-2 text-sm hover:text-white hover:border-white transition mb-4">
             קוד שירות
        </button>
        
        <p className="text-xs">© 2024 Photographer Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;