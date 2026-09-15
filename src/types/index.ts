export type ProjectCategory = 
  | "All"
  | "Poster Design"
  | "Flex & Banner Design"
  | "Social Media Campaign"
  | "Event Branding"
  | "Product Promotion"
  | "Festival Creative"
  | "Campaign Visuals";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  client: string;
  description: string;
  coverImage: string;
  images: string[];
  featured: boolean;
  accent?: "cobalt" | "ice" | "ink";
  dimensions?: string;
  printSpec?: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  aspectRatio?: "portrait" | "landscape" | "square" | "panoramic";
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  specs: string;
  accentColor?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
  keyAction: string;
}

export interface StudioInfo {
  designerName: string;
  studioName: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  whatsappUrl: string;
  instagramUrl: string;
  behanceUrl: string;
  availability: string;
  heroHeadline: string;
  biography: string[];
  strengths: {
    title: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: string;
  }[];
}
