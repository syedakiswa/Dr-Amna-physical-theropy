
export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
}

export interface NavLink {
  label: string;
  path: string;
}
