export interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoPreview?: string; // Optional URL for hover video
  category: string;
  tags: string[];
  match: string; // e.g., "98% Match"
  duration: string; // e.g., "1h 20m" or "40 Photos"
  resolution: string; // e.g., "4K"
  images: string[]; // For the gallery grid
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