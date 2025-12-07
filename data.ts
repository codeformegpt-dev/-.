import { CategoryRow, Project } from './types';

// Helper to generate random images
const getImg = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`;

const tags = ["רגשי", "קולנועי", "שחור לבן", "אור טבעי", "אורבני", "פראי", "דוקו", "אמנותי"];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

const generateProject = (id: number, cat: string, title: string): Project => ({
  id,
  title,
  category: cat,
  description: "פרויקט זה מתעד את הרגעים האינטימיים והחשובים ביותר, תוך שימוש בתאורה טבעית וקומפוזיציה קולנועית. כל תמונה מספרת סיפור של רגש טהור ואותנטיות חסרת פשרות.",
  thumbnail: getImg(id + 10, 800, 450),
  match: `${Math.floor(Math.random() * (99 - 85) + 85)}% התאמה`,
  duration: `${Math.floor(Math.random() * 50 + 20)} תמונות`,
  resolution: "4K",
  tags: [tags[id % tags.length], tags[(id + 1) % tags.length], "4K"],
  details: {
    client: "לקוח פרטי",
    location: "תל אביב-יפו",
    gear: "Sony A7S III, 24-70mm GM",
  },
  images: [
    getImg(id + 10, 800, 600),
    getImg(id + 11, 800, 1000),
    getImg(id + 12, 1000, 800),
    getImg(id + 13, 800, 800),
    getImg(id + 14, 800, 600),
    getImg(id + 15, 600, 800),
  ]
});

export const rows: CategoryRow[] = [
  {
    title: "פופולרי עכשיו בישראל",
    projects: [
      generateProject(101, "Trending", "אורות הכרך"),
      generateProject(102, "Trending", "דממה במדבר"),
      generateProject(103, "Trending", "פורטרט אורבני"),
      generateProject(104, "Trending", "רגעים גנובים"),
      generateProject(105, "Trending", "השתקפות"),
      generateProject(106, "Trending", "צל ואור"),
    ]
  },
  {
    title: "חתונות וסיפורי אהבה",
    projects: [
      generateProject(201, "Weddings", "הנדר הנצחי"),
      generateProject(202, "Weddings", "אהבה בלבן"),
      generateProject(203, "Weddings", "ריקוד ראשון"),
      generateProject(204, "Weddings", "שקיעה בחופה"),
      generateProject(205, "Weddings", "רגע לפני"),
      generateProject(206, "Weddings", "ביחד ולתמיד"),
    ]
  },
  {
    title: "אופנה ומסחרי",
    projects: [
      generateProject(301, "Commercial", "קולקציית קיץ"),
      generateProject(302, "Commercial", "סטודיו נקי"),
      generateProject(303, "Commercial", "תנועה וסטייל"),
      generateProject(304, "Commercial", "מותגים מובילים"),
      generateProject(305, "Commercial", "אופנת רחוב"),
      generateProject(306, "Commercial", "אלגנטיות מודרנית"),
    ]
  },
  {
    title: "מאחורי הקלעים (Raw Cuts)",
    projects: [
      generateProject(401, "BTS", "על הסט"),
      generateProject(402, "BTS", "הכנות אחרונות"),
      generateProject(403, "BTS", "בחדר העריכה"),
      generateProject(404, "BTS", "צוות צילום"),
      generateProject(405, "BTS", "לוקיישן סודי"),
      generateProject(406, "BTS", "אווירה"),
    ]
  }
];

export const heroProject: Project = {
  ...generateProject(999, "Hero", "הקולקציה השנתית: העין השלישית"),
  description: "מסע ויזואלי עוצר נשימה דרך העדשה. רגעי שיא, טכניקה מוקפדת ואהבה אינסופית לאומנות הצילום. הצטרפו לחוויה קולנועית שמשנה את הדרך בה אתם רואים את העולם.",
  // Updated to a photographer shooting image
  thumbnail: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2535&auto=format&fit=crop", 
  videoPreview: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "נועה ועידן",
    role: "זוג מתחתנים",
    text: "פשוט וואו. התמונות נראות כמו סרט קולנוע. לא האמנו שאנחנו יכולים להיראות כל כך טוב. תודה על הזיכרונות!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "דניאל קורן",
    role: "מנכ״ל FashionIL",
    text: "מקצועיות ברמה בינלאומית. כל פריים מדויק, התאורה מושלמת. הבחירה הראשונה שלנו לכל הפקה.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "שירה לוי",
    role: "מעצבת פנים",
    text: "הצליח לתפוס את הנשמה של הבית. הצילומים העלו את המותג שלי רמה אחת למעלה.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "יוני גל",
    role: "במאי",
    text: "עין של במאי, לב של אמן. חוויה לעבוד עם אדם שכל כך אוהב את מה שהוא עושה.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5
  }
];
