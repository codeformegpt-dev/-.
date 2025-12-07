export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoPreview?: string; // Optional URL for hover video (can be ignored now for slideshow preference)
  category: string;
  tags: string[];
  match: string; // e.g., "98% Match"
  duration: string; // e.g., "1h 20m" or "40 Photos"
  resolution: string; // e.g., "4K"
  images: string[]; // For the gallery grid AND slideshow
  details: {
    client: string;
    location: string;
    gear: string;
  };
}

export interface CategoryRow {
  title: string;
  projects: Project[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface ProcessStep {
  id: number;
  number: string;
  title: string;
  description: string;
}