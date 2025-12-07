import { CategoryRow, Project, Testimonial } from './types';

// Helper to generate random images from Unsplash for better quality
const getImg = (keywords: string, w: number, h: number) => `https://source.unsplash.com/random/${w}x${h}?${keywords}`;
// Note: Unsplash source is deprecated sometimes, using static reliable URLs or alternate logic is better, 
// but for this demo I will use specific IDs or reliable keywords.

const tags = ["מרגש", "אור טבעי", "משפחה", "אהבה", "ספונטני", "אותנטי", "ילדות", "קסם"];

const familyImages = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476703993279-0c5d4f194a31?q=80&w=2070&auto=format&fit=crop"
];

const weddingImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop"
];

const kidsImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=2070&auto=format&fit=crop"
];

const generateProject = (id: number, cat: string, title: string, imgSet: string[], desc: string): Project => ({
  id,
  title,
  category: cat,
  description: desc,
  thumbnail: imgSet[id % imgSet.length],
  match: `${Math.floor(Math.random() * (99 - 90) + 90)}% רגש`,
  duration: `${Math.floor(Math.random() * 100 + 50)} תמונות`,
  resolution: "HD",
  tags: [tags[id % tags.length], tags[(id + 1) % tags.length], "Story"],
  details: {
    client: "משפחת כהן/לוי",
    location: "חוף הים / יער בן שמן",
    gear: "Canon R5, 50mm 1.2",
  },
  images: [
    imgSet[0], imgSet[1], imgSet[2], imgSet[3], imgSet[0], imgSet[1]
  ]
});

export const rows: CategoryRow[] = [
  {
    title: "רגעים משפחתיים שנשארים לתמיד",
    projects: [
      generateProject(101, "Family", "שבת בבוקר", familyImages, "תיעוד דוקומנטרי של בוקר משפחתי רגוע. בלי העמדות, בלי פילטרים, רק אהבה וקפה של בוקר."),
      generateProject(102, "Family", "צחוק מתגלגל", familyImages, "יום כיף בפארק שהפך לאלבום למזכרת. הרגעים הקטנים שבין לבין הם החשובים באמת."),
      generateProject(103, "Family", "שלושה דורות", familyImages, "סשן מרגש המאחד סבתא, אמא ונכדה. חיבור בין דורי שתועד ברכות ורגישות."),
      generateProject(104, "Family", "הבית שלנו", familyImages, "צילום לייף-סטייל בתוך הבית. המקום בו אתם מרגישים הכי בנוח."),
      generateProject(105, "Family", "טיול שקיעה", familyImages, "אור זהוב וחיבוקים אינסופיים על קו החוף. הזיכרונות הכי יפים של הקיץ."),
    ]
  },
  {
    title: "סיפורי אהבה וחתונות",
    projects: [
      generateProject(201, "Wedding", "הנדר", weddingImages, "הרגע המדויק בו העיניים נפגשות מתחת לחופה. תיעוד מלא של יום החתונה באווירה קולנועית."),
      generateProject(202, "Wedding", "ריקוד אחרון", weddingImages, "אנרגיות מטורפות ברחבה, ורגעי שקט אינטימיים בצילומי הזוגיות."),
      generateProject(203, "Wedding", "פשוט אהבה", weddingImages, "חתונה אורבנית קטנה ואיכותית בתל אביב. בלי מסכות, רק אתם."),
      generateProject(204, "Wedding", "ביער הקסום", weddingImages, "חתונת צהריים בטבע. ירוק, לבן והמון שמחה באוויר."),
      generateProject(205, "Wedding", "רגעים גנובים", weddingImages, "המבטים הקטנים שאף אחד אחר לא ראה, חוץ מהעדשה שלי."),
    ]
  },
  {
    title: "ילדות קסומה",
    projects: [
      generateProject(301, "Kids", "גיל שנה", kidsImages, "חגיגת ה'סמאש קייק' הכי מתוקה שיש. לכלוך, צחוק ושמחה טהורה."),
      generateProject(302, "Kids", "החברים הכי טובים", kidsImages, "צילומים עם חיית המחמד המשפחתית. רגעים של תום."),
      generateProject(303, "Kids", "בועות סבון", kidsImages, "קסם של אחר הצהריים. תפיסת הרגעים הספונטניים ביותר של הילדים."),
      generateProject(304, "Kids", "חוקרים את העולם", kidsImages, "סקרנות של ילדים בטבע. מבט בגובה העיניים על העולם שלהם."),
      generateProject(305, "Kids", "אחים", kidsImages, "הקשר המיוחד בין אחים ואחיות. חיבוקים, מריבות ומשחקים."),
    ]
  }
];

export const heroProject: Project = {
  id: 999,
  title: "האלבום המשפחתי: סיפור מסע",
  category: "Featured",
  description: "זה לא סתם צילום, זה הסיפור שלכם. מסע ויזואלי עוצר נשימה המתעד את הרגעים הקטנים שהופכים למזכרות הגדולות ביותר. הצטרפו לחוויה שמשנה את הדרך בה אתם רואים את המשפחה שלכם.",
  thumbnail: "https://images.unsplash.com/photo-1629249673977-2f14b6002c0b?q=80&w=2670&auto=format&fit=crop", // Warm family photo
  match: "99% התאמה",
  duration: "120 תמונות",
  resolution: "4K",
  tags: ["משפחה", "דוקומנטרי", "מרגש"],
  images: familyImages,
  details: {
    client: "משפחת ישראלי",
    location: "כל הארץ",
    gear: "Sony Alpha 1",
  }
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "משפחת כהן",
    role: "צילומי גיל שנה",
    text: "וואו! לא הפסקנו לבכות מהתרגשות כשראינו את האלבום. תפסת רגעים שלא שמנו לב אליהם בכלל.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "איתי ורוני",
    role: "חתונה",
    text: "הצלם הכי טוב שיכולנו לבקש. הרגשנו בנוח, צחקנו, והתוצאות נראות כמו ממגזין בינלאומי.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "מיכל לוי",
    role: "בת מצווה",
    text: "מקצוען אמיתי עם גישה מדהימה לילדים. הבת שלי עפה על התמונות וגם הסבתות!",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
  {
    id: 4,
    name: "יונתן",
    role: "בוק בר מצווה",
    text: "היה פשוט כיף! לא הרגשתי שאני בצילומים, הרגשתי שאני מטייל עם חבר. יצא אש.",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
    rating: 5
  },
  {
    id: 5,
    name: "שרה",
    role: "צילומי הריון",
    text: "רגישות, עדינות ומקצועיות. הרגשתי הכי יפה בעולם.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    rating: 5
  },
  {
    id: 6,
    name: "משפחת אברהמי",
    role: "צילומי דורות",
    text: "מזכרת לכל החיים. אין מילים לתאר את האיכות.",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    rating: 5
  }
];