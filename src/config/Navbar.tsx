export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const navbarConfig = {
  logo: {
    src: '/assets/image.png',
    alt: 'Samarth Shukla',
    width: 50,
    height: 50,
  },
  navItems: [
    {
      label: 'Experience',
      href: '#experience',
    },
    {
      label: 'Projects',
      href: '#projects',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'GitHub',
      href: '#github',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
  ] as NavItem[],
  hireButton: {
    label: 'Hire Me',
    href: 'https://www.upwork.com/freelancers/~01ff3911eac4cf278a?mp_source=share',
    isExternal: true,
  },
};
