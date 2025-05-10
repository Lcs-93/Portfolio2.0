// Data models for portfolio content

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: string;
  icon?: string;
  prefix?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string | null;
  githubUrl?: string;
  featured: boolean;
  category: string;
  date: string;
  screenshots?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
  technologies?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  title: string;
  bio: string;
  tagline: string;
  avatarUrl: string;
  resumeUrl?: string;
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  projects: Project[];
  testimonials: Testimonial[];
  experience: ExperienceItem[];
  education: EducationItem[];
}