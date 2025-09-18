export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  university?: string;
  program?: string;
  year?: number;
  createdAt: Date;
}

export interface Assessment {
  id: string;
  userId: string;
  type: 'anxiety' | 'depression' | 'stress' | 'general';
  score: number;
  level: 'low' | 'moderate' | 'high' | 'severe';
  completedAt: Date;
  recommendations: string[];
}

export interface Therapist {
  id: string;
  name: string;
  avatar: string;
  specialization: string[];
  rating: number;
  languages: string[];
  availability: 'available' | 'busy' | 'offline';
  nextAvailable?: Date;
  sessionPrice: number;
  bio: string;
}

export interface Appointment {
  id: string;
  userId: string;
  therapistId: string;
  scheduledAt: Date;
  duration: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

export interface JournalEntry {
  id: string;
  userId: string;
  mood: 'great' | 'good' | 'okay' | 'bad' | 'terrible';
  content: string;
  tags: string[];
  createdAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  category: 'meditation' | 'exercise' | 'article' | 'video' | 'podcast';
  description: string;
  thumbnail?: string;
  duration?: number;
  url?: string;
  tags: string[];
}

export interface ForumPost {
  id: string;
  authorId: string;
  anonymous: boolean;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  createdAt: Date;
  tags: string[];
}