import { CategoryRow, Project, Testimonial, PricingPlan, ProcessStep } from './types';

// Helper to generate random images from Unsplash for better quality
// Using specific IDs or keywords to ensure variety
const getImg = (keywords: string) => `https://source.unsplash.com/random/800x600?${keywords}`;

const tags = ["אותנטי", "רגע אמיתי", "אור טבעי", "אהבה", "ללא פילטרים", "זיכרון", "חום", "קסם"];

const familyImages = [
    "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1476703993279-0c5d4f194a31?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1596908070993-f252033c46e0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581952976147-5a2d15560349?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?q=80&w=2070&auto=format&fit=crop"
];

const weddingImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520854221250-8c1295909a3c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop"
];

const kidsImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519340241574-2291ecf8d084?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?q=80&w=2070&auto=format&fit=crop"
];

const btsImages = [
    "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=2070&auto=format&fit=crop", 
    "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500634245200-e5245c7574ef?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2070&auto=format&fit=crop"
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
    client: "משפחות יקרות",
    location: "ישראל",
    gear: "Canon R5, 50mm 1.2",
  },
  images: imgSet.sort(() => 0.5 - Math.random()) // Shuffle images for variety
});

export const rows: CategoryRow[] = [
  {
    title: "רגעים משפחתיים קטנים",
    projects: [
      generateProject(101, "Family", "בוקר של שבת", familyImages, "הגעתי אליכם הביתה ב-9 בבוקר, כשהקפה עוד היה חם. בלי לביים, פשוט הייתי שם כשהילדים קפצו על המיטה."),
      generateProject(102, "Family", "הצחוק של נועה", familyImages, "יצאנו לפארק אחר הצהריים. לא ביקשתי מכם לחייך למצלמה אפילו פעם אחת, והתוצאה? החיוכים הכי אמיתיים שיש."),
      generateProject(103, "Family", "שלושה דורות", familyImages, "סבתא רותי, אמא יעל והנכדה הקטנה. החיבור ביניהן היה מחשמל. כבוד גדול עבורי לתעד את השושלת הזו."),
      generateProject(104, "Family", "הבית שלנו", familyImages, "כי אין מקום כמו בבית. הפינה שלכם, האור שלכם, הריח שלכם. הזיכרונות הכי יפים נוצרים בסלון."),
      generateProject(105, "Family", "שקיעה בחוף", familyImages, "הרוח, החול, והאהבה שלכם. כשהשמש יורדת, הקסם קורה מעצמו."),
    ]
  },
  {
    title: "סיפורי אהבה",
    projects: [
      generateProject(201, "Wedding", "המבט שלו", weddingImages, "שנייה לפני ששברת את הכוס, תפסתי את המבט שלך אליה. זה הרגע ששווה את כל האירוע."),
      generateProject(202, "Wedding", "ריקוד צמוד", weddingImages, "כשכולם כבר היו עייפים, אתם נשארתם על הרחבה. רק שניכם, והמוזיקה."),
      generateProject(203, "Wedding", "אינטימיות בתל אביב", weddingImages, "חתונה קטנה על הגג. בלי רעש וצלצולים, רק החברים הכי טובים והמון יין."),
      generateProject(204, "Wedding", "יחפים בדשא", weddingImages, "חתונת צהריים בקיבוץ. הכל פשוט, הכל ירוק, הכל מלא באהבה."),
      generateProject(205, "Wedding", "רגעים גנובים", weddingImages, "בזמן שכולם אכלו, גנבתי אתכם לצילום קצר בשדה. השקט שלכם בתוך ההמולה."),
    ]
  },
  {
    title: "הילדות היא קסם",
    projects: [
      generateProject(301, "Kids", "עוגה ראשונה", kidsImages, "איזה בלאגן מתוק! גיל שנה זה גיל של גילויים, ובעיקר של טעימות."),
      generateProject(302, "Kids", "החבר הכי טוב", kidsImages, "הקשר בין תום לכלב שלכם הוא משהו נדיר. שמחתי לתפוס את החיבוק הזה."),
      generateProject(303, "Kids", "בועות של אושר", kidsImages, "ההתלהבות הפשוטה מבועות סבון. לפעמים לא צריך יותר מזה כדי להיות מאושר."),
      generateProject(304, "Kids", "מגלי עולמות", kidsImages, "יצאנו ליער לחפש פטריות וגמדים. המבט הסקרן שלהם שווה הכל."),
      generateProject(305, "Kids", "אחים בלב", kidsImages, "רגע אחד רבים, רגע אחרי מתחבקים. אהבת אחים אמיתית וכנה."),
    ]
  }
];

// UPDATED HERO PROJECT
export const heroProject: Project = {
  id: 999,
  title: "רוני לוי",
  category: "אודות",
  description: "אני לא מחפש את התמונה המושלמת, אני מחפש את התמונה האמיתית. זו שתרצו להסתכל עליה בעוד 20 שנה ולהרגיש בדיוק את מה שהרגשתם באותו הרגע.",
  thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop", 
  match: "100%",
  duration: "מאז 2014",
  resolution: "Art",
  tags: ["דוקומנטרי", "אומנות", "רגש"],
  images: btsImages,
  details: {
    client: "הסיפור שלי",
    location: "תל אביב",
    gear: "Sony & Canon",
  }
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "משפחת כהן",
    role: "צילומי גיל שנה",
    text: "רוני, פשוט תודה. גרמת לנו להרגיש כל כך בנוח, והתמונות? אין מילים. הצלחת לתפוס את האופי של יונתן בדיוק כמו שהוא.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "עומר ודנה",
    role: "חתונה",
    text: "חיפשנו צלם שלא 'יביים' אותנו, ומצאנו אמן. התמונות יצאו טבעיות, מרגשות ומלאות בסטייל. ממליצים בחום!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "מיכל",
    role: "בת מצווה",
    text: "הבת שלי בדרך כלל מתביישת להצטלם, אבל איתך היא פשוט פרחה. נתת לה להרגיש מלכה ליום אחד.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "חבילת היכרות",
    price: "850₪",
    features: ["45 דקות צילום", "לוקיישן אחד בטבע", "40 תמונות ערוכות", "גלריה דיגיטלית", "מתאים לזוגות / ילדים"],
    isPopular: false
  },
  {
    id: 2,
    name: "הסיפור המלא",
    price: "1,500₪",
    features: ["שעה וחצי צילום", "עד 2 לוקיישנים", "100 תמונות ערוכות", "גלריה דיגיטלית", "מיני-אלבום דיגיטלי", "מתאים למשפחות"],
    isPopular: true
  },
  {
    id: 3,
    name: "החבילה המורחבת",
    price: "2,800₪",
    features: ["בוקר צילום מלא", "סטיילינג אישי", "כל התמונות ערוכות", "סרטון אווירה קצר", "אלבום פרימיום מודפס 30x30"],
    isPopular: false
  }
];

export const beforeAfterImages = {
  before: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop", 
  after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop&sat=0&con=120" 
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    number: "01",
    title: "היכרות",
    description: "אנחנו מתחילים בשיחה. אני רוצה לשמוע את הסיפור שלכם, להבין מה מרגש אתכם ומה הציפיות שלכם. נבחר יחד את הלוקיישן המושלם ונתאם תאריך."
  },
  {
    id: 2,
    number: "02",
    title: "הצילום",
    description: "ביום הצילום, אנחנו פשוט מבלים יחד. אני דואג לאווירה משוחררת ונעימה, ללא העמדות נוקשות. אני שם כדי לתפוס את הרגעים הספונטניים והקסומים ביותר."
  },
  {
    id: 3,
    number: "03",
    title: "עריכה",
    description: "לאחר הצילום, אני עובר על החומרים ובוחר את התמונות הטובות ביותר. כל תמונה עוברת עריכה קפדנית בסגנון הייחודי שלי, שמעניקה לה עומק ורגש."
  },
  {
    id: 4,
    number: "04",
    title: "המסירה",
    description: "תוך זמן קצר, תקבלו גלריה דיגיטלית יפיפייה, מוכנה לשיתוף והורדה. זה הרגע שבו הזיכרונות שלכם הופכים לנצחיים."
  }
];
