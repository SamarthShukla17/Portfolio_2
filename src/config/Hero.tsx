/*
 * CUSTOMIZATION EXAMPLE
 *
 * Want to customize this portfolio for yourself? Here's how easy it is:
 *
 * 1. Update your personal info:
 *    name: "Your Name"
 *    title: "Your Professional Title"
 *    avatar: "/path/to/your/image.jpg"
 *
 * 2. Add your skills:
 *    skills: [
 *      { name: "Python", href: "https://python.org", component: "Python" }, // Note: You'd need to create Python component
 *      { name: "React", href: "https://react.dev", component: "ReactIcon" },
 *      { name: "Node.js", href: "https://nodejs.org", component: "NodeJs" },
 *    ]
 *
 * 3. Write your description using the template:
 *    template: "I'm a **passionate developer** who loves building apps with {skills:0} and {skills:1}. I specialize in **web development** and enjoy working with {skills:2}."
 *
 * 4. Update your social links:
 *    Just change the href values to your own social media profiles
 *
 * That's it! Your portfolio will automatically update with your information.
 */
import Github from '@/components/svgs/Github';
import LinkedIn from '@/components/svgs/LinkedIn';
import Mail from '@/components/svgs/Mail';
import X from '@/components/svgs/X';
import Bun from '@/components/technologies/Bun';
import CSS from '@/components/technologies/CSS';
import ExpressJs from '@/components/technologies/ExpressJs';
import GithubTech from '@/components/technologies/Github';
import Html from '@/components/technologies/Html';
import JavaScript from '@/components/technologies/JavaScript';
import MongoDB from '@/components/technologies/MongoDB';
import NestJs from '@/components/technologies/NestJs';
import Netlify from '@/components/technologies/Netlify';
import NextJs from '@/components/technologies/NextJs';
import NodeJs from '@/components/technologies/NodeJs';
import PostgreSQL from '@/components/technologies/PostgreSQL';
import Prisma from '@/components/technologies/Prisma';
import ReactIcon from '@/components/technologies/ReactIcon';
import TailwindCss from '@/components/technologies/TailwindCss';
import TypeScript from '@/components/technologies/TypeScript';
import Vercel from '@/components/technologies/Vercel';

// Component mapping for skills
export const skillComponents = {
  TypeScript: TypeScript,
  ReactIcon: ReactIcon,
  NextJs: NextJs,
  Bun: Bun,
  PostgreSQL: PostgreSQL,
  NodeJs: NodeJs,
  MongoDB: MongoDB,
  Prisma: Prisma,
  JavaScript: JavaScript,
  CSS: CSS,
  Html: Html,
  ExpressJs: ExpressJs,
  NestJs: NestJs,
  TailwindCss: TailwindCss,
  Vercel: Vercel,
  Netlify: Netlify,
  GithubTech: GithubTech,
};

export const heroConfig = {
  // Personal Information
  name: 'Samarth',
  title: 'A Full Stack web developer.',
  avatar: '/assets/image.png',

  // Skills Configuration
  skills: [
    {
      name: 'JavaScript',
      href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      component: 'JavaScript',
    },
    {
      name: 'TypeScript',
      href: 'https://www.typescriptlang.org/',
      component: 'TypeScript',
    },
    {
      name: 'React',
      href: 'https://react.dev/',
      component: 'ReactIcon',
    },
    {
      name: 'Next.js',
      href: 'https://nextjs.org/',
      component: 'NextJs',
    },
    {
      name: 'Node.js',
      href: 'https://nodejs.org/',
      component: 'NodeJs',
    },
    {
      name: 'Express.js',
      href: 'https://expressjs.com/',
      component: 'ExpressJs',
    },
    {
      name: 'NestJS',
      href: 'https://nestjs.com/',
      component: 'NestJs',
    },
    {
      name: 'MongoDB',
      href: 'https://www.mongodb.com/',
      component: 'MongoDB',
    },
    {
      name: 'PostgreSQL',
      href: 'https://www.postgresql.org/',
      component: 'PostgreSQL',
    },
    {
      name: 'Prisma',
      href: 'https://www.prisma.io/',
      component: 'Prisma',
    },
    {
      name: 'Tailwind CSS',
      href: 'https://tailwindcss.com/',
      component: 'TailwindCss',
    },
    {
      name: 'CSS3',
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      component: 'CSS',
    },
    {
      name: 'HTML5',
      href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      component: 'Html',
    },
    {
      name: 'Bun',
      href: 'https://bun.sh/',
      component: 'Bun',
    },
    {
      name: 'Vercel',
      href: 'https://vercel.com/',
      component: 'Vercel',
    },
    {
      name: 'Netlify',
      href: 'https://www.netlify.com/',
      component: 'Netlify',
    },
    {
      name: 'Git',
      href: 'https://git-scm.com/',
      component: 'GithubTech',
    },
    {
      name: 'C',
      href: 'https://en.wikipedia.org/wiki/C_(programming_language)',
      component: 'GithubTech',
    },
    {
      name: 'C++',
      href: 'https://isocpp.org/',
      component: 'GithubTech',
    },
    {
      name: 'Java',
      href: 'https://www.java.com/',
      component: 'GithubTech',
    },
    {
      name: 'Ruby',
      href: 'https://www.ruby-lang.org/',
      component: 'GithubTech',
    },
    {
      name: 'Rails',
      href: 'https://rubyonrails.org/',
      component: 'GithubTech',
    },
    {
      name: 'MySQL',
      href: 'https://www.mysql.com/',
      component: 'GithubTech',
    },
    {
      name: 'Redis',
      href: 'https://redis.io/',
      component: 'GithubTech',
    },
    {
      name: 'Firebase',
      href: 'https://firebase.google.com/',
      component: 'GithubTech',
    },
    {
      name: 'Cloudflare',
      href: 'https://www.cloudflare.com/',
      component: 'GithubTech',
    },
    {
      name: 'Vue.js',
      href: 'https://vuejs.org/',
      component: 'GithubTech',
    },
    {
      name: 'Vite',
      href: 'https://vitejs.dev/',
      component: 'GithubTech',
    },
    {
      name: 'SASS',
      href: 'https://sass-lang.com/',
      component: 'GithubTech',
    },
    {
      name: 'WordPress',
      href: 'https://wordpress.org/',
      component: 'GithubTech',
    },
    {
      name: 'GitHub Actions',
      href: 'https://github.com/features/actions',
      component: 'GithubTech',
    },
    {
      name: 'Notion',
      href: 'https://www.notion.so/',
      component: 'GithubTech',
    },
  ],

  // Description Configuration
  description: {
    template:
      'I build interactive web apps using {skills:0}, {skills:1}, {skills:2}, {skills:3} and {skills:4}. With expertise in <b>full-stack development</b> and <b>open source contributions</b>. Passionate about <b>Front-End Web Development</b> and continuous learning.',
  },

  // Buttons Configuration
  buttons: [
    {
      variant: 'outline',
      text: 'Resume / CV',
      href: '/resume',
      icon: 'CV',
    },
    {
      variant: 'default',
      text: 'Hire Me',
      href: 'https://www.upwork.com/freelancers/~01ff3911eac4cf278a?mp_source=share',
      icon: 'Chat',
    },
  ],
};

// Social Links Configuration
export const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/Sam39741',
    icon: <X />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/samarth-shukla-986635379/',
    icon: <LinkedIn />,
  },
  {
    name: 'Github',
    href: 'https://github.com/SamarthShukla17',
    icon: <Github />,
  },
  {
    name: 'Email',
    href: 'https://mail.google.com/mail/?view=cm&to=samarthofficial52@gmail.com',
    icon: <Mail />,
  },
];
