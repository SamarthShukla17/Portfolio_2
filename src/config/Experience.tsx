import Github from '@/components/technologies/Github';
import ReactIcon from '@/components/technologies/ReactIcon';
import TypeScript from '@/components/technologies/TypeScript';

export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
  {
    isCurrent: true,
    company: 'Gumroad',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/gumroad.png',
    description: [
      'Contributing to Gumroad open source project, focusing on e-commerce platform development and digital product sales.',
      'Implementing user authentication, payment processing, and product management features using Ruby on Rails.',
      'Building responsive frontend interfaces and optimizing user experience for digital product creators.',
      'Participating in code reviews, issue discussions, and feature development to improve the platform.',
    ],
    startDate: 'September 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'Ruby',
        href: 'https://www.ruby-lang.org/',
        icon: <Github />,
      },
      {
        name: 'Rails',
        href: 'https://rubyonrails.org/',
        icon: <Github />,
      },
      {
        name: 'Open Source',
        href: 'https://opensource.org/',
        icon: <Github />,
      },
    ],
    website: 'https://gumroad.com',
  },
  {
    isCurrent: true,
    company: 'Gumboard',
    position: 'Open Source Contributor',
    location: 'Remote',
    image: '/company/gumboard.png',
    description: [
      'Contributing to Gumboard open source project, a comprehensive team task management and productivity platform.',
      'Implementing real-time collaboration features for team task tracking and project management.',
      'Building responsive frontend interfaces with TypeScript and modern React patterns.',
      'Participating in open source development workflows and community collaboration.',
    ],
    startDate: 'September 2025',
    endDate: 'Present',
    technologies: [
      {
        name: 'TypeScript',
        href: 'https://www.typescriptlang.org/',
        icon: <TypeScript />,
      },
      {
        name: 'React',
        href: 'https://reactjs.org/',
        icon: <ReactIcon />,
      },
      {
        name: 'Open Source',
        href: 'https://opensource.org/',
        icon: <Github />,
      },
    ],
    website: 'https://gumboard.com',
  },
];
