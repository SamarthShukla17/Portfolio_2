export interface PricingConfig {
  currency: string;
  contactMethod: 'whatsapp' | 'email' | 'phone' | 'calendly';
  contactInfo: string;
  showCustomPricing: boolean;
  customPricingText: string;
}

export const pricingConfig: PricingConfig = {
  currency: '$',
  contactMethod: 'whatsapp',
  contactInfo: '9369976077', // Replace with your actual WhatsApp number
  showCustomPricing: true,
  customPricingText: 'Need Something Different?'
};

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  icon: string;
  features: string[];
  popular?: boolean;
  color: string;
  buttonText: string;
  buttonVariant: 'default' | 'secondary' | 'outline';
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'react-nextjs',
    name: 'React + Next.js',
    description: 'Modern React applications with Next.js for optimal performance and SEO',
    price: '499',
    period: 'per project',
    icon: 'Code',
    features: [
      'React 18 with Hooks',
      'Next.js 14 App Router',
      'TypeScript Integration',
      'Tailwind CSS Styling',
      'Server-Side Rendering (SSR)',
      'Static Site Generation (SSG)',
      'API Routes',
      'Image Optimization',
      'SEO Optimization',
      '2 Revisions Included',
      '1 Month Support'
    ],
    color: 'from-blue-500 to-cyan-500',
    buttonText: 'Start React Project',
    buttonVariant: 'default'
  },
  {
    id: 'vue-nuxt',
    name: 'Vue + Nuxt.js',
    description: 'Progressive Vue.js applications with Nuxt for full-stack capabilities',
    price: '499',
    period: 'per project',
    icon: 'Code',
    features: [
      'Vue 3 Composition API',
      'Nuxt 3 Framework',
      'TypeScript Support',
      'Vuex/Pinia State Management',
      'Server-Side Rendering',
      'Static Site Generation',
      'Auto-imports',
      'File-based Routing',
      'SEO Optimization',
      '2 Revisions Included',
      '1 Month Support'
    ],
    popular: true,
    color: 'from-emerald-500 to-teal-500',
    buttonText: 'Start Vue Project',
    buttonVariant: 'default'
  },
  {
    id: 'svelte-kit',
    name: 'Svelte + SvelteKit',
    description: 'Lightning-fast applications with SvelteKit for modern web development',
    price: '499',
    period: 'per project',
    icon: 'Code',
    features: [
      'Svelte 5 Framework',
      'SvelteKit Full-Stack',
      'TypeScript Integration',
      'Reactive Components',
      'Server-Side Rendering',
      'Static Site Generation',
      'Progressive Enhancement',
      'Built-in Animations',
      'SEO Optimization',
      '3 Revisions Included',
      '1.5 Months Support'
    ],
    color: 'from-orange-500 to-red-500',
    buttonText: 'Start Svelte Project',
    buttonVariant: 'default'
  },
  {
    id: 'custom-frontend',
    name: 'Custom Frontend',
    description: 'Tailored frontend solutions with your preferred technology stack',
    price: 'Custom',
    period: 'per project',
    icon: 'Layers',
    features: [
      'Custom Technology Stack',
      'Advanced UI/UX Design',
      'Complex State Management',
      'Third-party Integrations',
      'Performance Optimization',
      'Accessibility Compliance',
      'Cross-browser Testing',
      'Custom Animations',
      'Advanced SEO',
      '5 Revisions Included',
      '2 Months Support',
      'Source Code Ownership'
    ],
    color: 'from-purple-500 to-pink-500',
    buttonText: 'Discuss Custom Project',
    buttonVariant: 'default'
  }
];
