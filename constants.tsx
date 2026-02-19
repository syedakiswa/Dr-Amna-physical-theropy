
import React from 'react';
import { 
  Activity, 
  Stethoscope, 
  Dumbbell, 
  UserPlus, 
  HeartPulse, 
  PhoneCall,
  Calendar,
  ShieldCheck,
  Award
} from 'lucide-react';
import { NavLink, ServiceCardProps, TeamMember } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Team', path: '/team' },
  { label: 'Contact', path: '/contact' }
];

export const SERVICES: ServiceCardProps[] = [
  {
    title: 'Musculoskeletal Rehab',
    description: 'Expert treatment for bones, joints, and soft tissue injuries with personalized recovery plans.',
    icon: <Activity className="w-8 h-8 text-medical-primary" />,
    imageUrl: '/rehab.png'
  },
  {
    title: 'Post-Surgical Recovery',
    description: 'Specialized care to help you regain mobility and strength after orthopedic or spinal surgery.',
    icon: <Stethoscope className="w-8 h-8 text-medical-primary" />,
    imageUrl: '/surgical.png'
  },
  {
    title: 'Sports Injury',
    description: 'Tailored rehabilitation for athletes to ensure a safe and efficient return to their sport.',
    icon: <Dumbbell className="w-8 h-8 text-medical-primary" />,
    imageUrl: '/sports.png'
  },
  {
    title: 'Geriatric Care',
    description: 'Enhancing the quality of life for seniors through balance training and pain management.',
    icon: <UserPlus className="w-8 h-8 text-medical-primary" />,
    imageUrl: '/geriatic.png'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Dr. Amna',
    role: 'Lead Physiotherapist',
    specialization: 'Doctor of Physical Therapy (DPT)',
    image: '/dr.amna.png'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Senior Therapist',
    specialization: 'Sports Rehab Specialist',
    image: '/dr.mirchel.png'
  },
  {
    name: 'David Chen',
    role: 'Manual Therapist',
    specialization: 'Orthopedic Manual Specialist',
    image: '/dr.david.png'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Expert Expertise',
    description: 'Certified doctors with years of clinical experience in complex rehab.',
    icon: <Award className="w-10 h-10" />
  },
  {
    title: 'Patient-Centric',
    description: '1-on-1 sessions designed specifically for your unique medical history.',
    icon: <HeartPulse className="w-10 h-10" />
  },
  {
    title: 'Modern Facility',
    description: 'State-of-the-art equipment in a clean, professional clinical environment.',
    icon: <ShieldCheck className="w-10 h-10" />
  }
];
