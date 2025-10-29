# Frontend Development Pricing Component - Bento Grid Layout

## Overview
The Pricing component now features a modern **bento grid layout** that showcases four tiers of frontend development services in an asymmetrical, visually dynamic arrangement. This design creates visual hierarchy and draws attention to the most popular option while maintaining perfect balance.

## Features

### 🎨 **Visual Design**
- **Bento Grid Layout**: Asymmetrical 12-column grid system creating visual hierarchy
- **Premium Glassmorphism**: Ultra-modern glass-like cards with enhanced backdrop blur
- **Dynamic Gradient Backgrounds**: Beautiful color gradients with animated glow effects
- **Advanced Hover Animations**: Smooth transitions, scale effects, and shine animations
- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Dark Mode Support**: Fully compatible with light/dark themes
- **Animated Elements**: Slow-spinning gradient rings around icons for visual appeal
- **Premium Shadows**: Multi-layered shadow effects for depth and dimension

### 💰 **Pricing Tiers**

#### 1. React + Next.js - $400
- React 18 with Hooks
- Next.js 14 App Router
- TypeScript Integration
- Tailwind CSS Styling
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- API Routes
- Image Optimization
- SEO Optimization
- 2 Revisions Included
- 1 Month Support

#### 2. Vue + Nuxt.js - $450 (Most Popular)
- Vue 3 Composition API
- Nuxt 3 Framework
- TypeScript Support
- Vuex/Pinia State Management
- Server-Side Rendering
- Static Site Generation
- Auto-imports
- File-based Routing
- SEO Optimization
- 2 Revisions Included
- 1 Month Support

#### 3. Svelte + SvelteKit - $500
- Svelte 5 Framework
- SvelteKit Full-Stack
- TypeScript Integration
- Reactive Components
- Server-Side Rendering
- Static Site Generation
- Progressive Enhancement
- Built-in Animations
- SEO Optimization
- 3 Revisions Included
- 1.5 Months Support

#### 4. Custom Frontend - $600
- Custom Technology Stack
- Advanced UI/UX Design
- Complex State Management
- Third-party Integrations
- Performance Optimization
- Accessibility Compliance
- Cross-browser Testing
- Custom Animations
- Advanced SEO
- 5 Revisions Included
- 2 Months Support
- Source Code Ownership

### 🔧 **Technical Features**

#### **Bento Grid System**
- **12-Column Grid**: Uses CSS Grid with `lg:grid-cols-12` for precise control
- **Asymmetrical Layout**: Cards span different column widths for visual interest
  - React + Next.js: `lg:col-span-3` (3 columns)
  - Vue + Nuxt.js: `lg:col-span-4` (4 columns - Most Popular)
  - Svelte + SvelteKit: `lg:col-span-3` (3 columns)
  - Custom Frontend: `lg:col-span-2` (2 columns)
- **Auto Rows**: `auto-rows-fr` ensures equal height cards
- **Responsive Breakpoints**: Adapts to mobile (1 column) and tablet (2 columns)

#### **Enhanced Card Design**
- **Background Glow**: Dynamic gradient glow effects that intensify on hover
- **Animated Icons**: Large icons with slow-spinning gradient rings
- **Premium Typography**: Gradient text effects for titles and pricing
- **Interactive Elements**: Hover effects on features with color transitions
- **Button Animations**: Shine effects that sweep across buttons on hover

#### **Advanced Layout**
- **Elevated Popular Card**: Most popular tier (Vue + Nuxt.js) takes center stage
- **Consistent Spacing**: Optimized padding and margins for visual balance
- **Feature Icons**: Green gradient checkmarks with shadow effects
- **Pricing Display**: Large, bold pricing in gradient text containers
- **Responsive Grid**: Seamless adaptation across all screen sizes

#### **Animation System**
- **Slow Spin Animation**: 8-second rotation for gradient rings
- **Hover Transitions**: 700ms duration for smooth interactions
- **Scale Effects**: Cards grow on hover with shadow enhancement
- **Shine Effects**: Button shine animations on hover
- **Pulse Animation**: Popular badge pulses for attention

```typescript
export const pricingConfig: PricingConfig = {
  currency: '$',
  contactMethod: 'whatsapp', // 'whatsapp' | 'email' | 'phone' | 'calendly'
  contactInfo: '919876543210', // Your contact information
  showCustomPricing: true,
  customPricingText: 'Need a Custom Solution?'
};
```

### 📱 **Contact Integration**

The component supports multiple contact methods:

- **WhatsApp**: Opens WhatsApp with pre-filled message
- **Email**: Opens email client with pre-filled subject and body
- **Phone**: Can be extended to open phone dialer
- **Calendly**: Can be extended to open booking calendar

### 🎯 **Customization Options**

#### Colors
Each tier has its own color scheme:
- Frontend: Blue to Cyan gradient
- Backend: Purple to Pink gradient (with popular badge)
- Full Stack: Emerald to Teal gradient

#### Features
- Easy to add/remove features for each tier
- Configurable pricing and periods
- Customizable button text and variants

#### Layout
- Responsive grid (1 column on mobile, 3 columns on desktop)
- Popular tier scales up slightly on desktop
- Consistent spacing and typography

### 🚀 **Usage**

The component is already integrated into the main page (`src/app/page.tsx`) and appears between the Projects and About sections.

### 📁 **File Structure**

```
src/
├── components/
│   └── landing/
│       └── Pricing.tsx          # Main pricing component
├── config/
│   └── Pricing.tsx              # Configuration file
└── app/
    └── page.tsx                 # Main page (includes Pricing)
```

### 🎨 **Styling**

The component uses Tailwind CSS with:
- Custom gradient backgrounds
- Glassmorphism effects
- Smooth animations and transitions
- Responsive design utilities
- Dark mode support

### 🔄 **Future Enhancements**

Potential improvements:
- Add more contact methods (Calendly, phone)
- Implement dynamic pricing based on project complexity
- Add testimonials or case studies
- Include project timeline estimates
- Add FAQ section
- Implement pricing calculator

### 📞 **Contact Setup**

To set up contact integration:

1. **WhatsApp**: Replace `919876543210` with your actual WhatsApp number
2. **Email**: Change `contactMethod` to `'email'` and update `contactInfo` with your email
3. **Custom**: Extend the `handleContact` function to support additional contact methods

The pricing component is now fully functional and ready to help convert visitors into clients!
