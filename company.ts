// LIMEPAK Company Configuration
// Central configuration file for all company-related data
// Update this file to change company information, leadership, and other details

export interface LeadershipMember {
  role: string;
  name: string;
  status: 'public' | 'secret' | 'classified';
  title?: string;
  description?: string;
  avatar?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  useCases: string[];
  ctaText: string;
  ctaLink: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface FounderInfo {
  name: string;
  title: string;
  birthPlace: string;
  vision: string;
  description: string;
}

export interface SpecialThanks {
  name: string;
  contribution: string;
}

// ============================================
// COMPANY INFORMATION
// ============================================

export const COMPANY = {
  name: 'LIMEPAK',
  tagline: 'Building apps, websites, SaaS systems and AI teams for the next generation.',
  description: 'LIMEPAK is an online technology company building digital products, intelligent systems and AI-powered teams.',
  shortDescription: 'Building the future, one system at a time.',
  founded: 2024,
  location: 'Online Technology Company',
  focusAreas: [
    'Apps',
    'Websites',
    'SaaS Platforms',
    'AI-Powered Systems',
    'AI Agents',
    'Complete AI Teams',
    'Digital Products',
    'Automation Systems',
    'Future Technology Projects',
  ],
};

// ============================================
// LEADERSHIP TEAM
// ============================================

export const LEADERSHIP: LeadershipMember[] = [
  {
    role: 'CEO',
    name: 'J. YOGA DEV',
    status: 'public',
    title: 'Founder & CEO',
    description: 'Visionary leader driving LIMEPAK\'s mission to build the future of digital products and AI systems.',
  },
  {
    role: 'CFO',
    name: 'CLASSIFIED',
    status: 'secret',
    title: 'Chief Financial Officer',
    description: 'Financial strategy and operations leadership.',
  },
  {
    role: 'COO',
    name: 'CLASSIFIED',
    status: 'secret',
    title: 'Chief Operating Officer',
    description: 'Operational excellence and business process optimization.',
  },
  {
    role: 'CMO',
    name: 'CLASSIFIED',
    status: 'secret',
    title: 'Chief Marketing Officer',
    description: 'Brand strategy, marketing, and growth initiatives.',
  },
  {
    role: 'CTO',
    name: 'CLASSIFIED',
    status: 'secret',
    title: 'Chief Technology Officer',
    description: 'Technology vision, architecture, and innovation leadership.',
  },
];

// Additional AI Team roles (expandable organization chart)
export const AI_TEAM_ROLES = [
  { role: 'AI RESEARCH', status: 'secret' },
  { role: 'PRODUCT', status: 'secret' },
  { role: 'ENGINEERING', status: 'secret' },
  { role: 'DESIGN', status: 'secret' },
];

// ============================================
// FOUNDER INFORMATION
// ============================================

export const FOUNDER: FounderInfo = {
  name: 'J. YOGA DEV',
  title: 'Founder & CEO',
  birthPlace: 'Chennai',
  vision: 'LIMEPAK exists to turn ambitious ideas into real digital products.',
  description: 'J. Yoga Dev is the founder and CEO of LIMEPAK, leading the company\'s mission to build innovative digital products, AI systems, and intelligent solutions that shape the future of technology.',
};

// ============================================
// SPECIAL THANKS
// ============================================

export const SPECIAL_THANKS: SpecialThanks[] = [
  {
    name: 'Yien Udaan',
    contribution: 'Support and collaboration on the LIMEPAK journey',
  },
  {
    name: 'Umesh Raghav',
    contribution: 'Support and collaboration on the LIMEPAK journey',
  },
];

// ============================================
// PRODUCT CATEGORIES
// ============================================

export const PRODUCTS: ProductCategory[] = [
  {
    id: 'app',
    title: 'APP DEVELOPMENT',
    description: 'Custom mobile and web applications tailored to your specific needs, built with modern technologies and best practices.',
    icon: '📱',
    useCases: [
      'iOS and Android mobile apps',
      'Progressive Web Apps (PWAs)',
      'Cross-platform applications',
      'Enterprise mobile solutions',
    ],
    ctaText: 'Explore App Development',
    ctaLink: '/products#app',
  },
  {
    id: 'website',
    title: 'WEBSITE DEVELOPMENT',
    description: 'Modern, fast, and beautiful websites that convert visitors into customers and tell your brand story effectively.',
    icon: '🌐',
    useCases: [
      'Corporate websites',
      'E-commerce platforms',
      'Portfolio sites',
      'Landing pages and marketing sites',
    ],
    ctaText: 'Explore Website Development',
    ctaLink: '/products#website',
  },
  {
    id: 'saas',
    title: 'SAAS SYSTEMS',
    description: 'Scalable Software-as-a-Service platforms that solve real business problems and generate recurring revenue.',
    icon: '☁️',
    useCases: [
      'Business management tools',
      'Subscription-based services',
      'Cloud-based applications',
      'Multi-tenant systems',
    ],
    ctaText: 'Explore SaaS Development',
    ctaLink: '/products#saas',
  },
  {
    id: 'ai-agent',
    title: 'AI AGENTS',
    description: 'Intelligent AI agents that automate tasks, provide insights, and enhance decision-making across your organization.',
    icon: '🤖',
    useCases: [
      'Customer support automation',
      'Data analysis and insights',
      'Personalized recommendations',
      'Automated workflows',
    ],
    ctaText: 'Explore AI Agents',
    ctaLink: '/products#ai-agent',
  },
  {
    id: 'ai-team',
    title: 'AI TEAMS',
    description: 'Complete AI-powered teams that work alongside your human team to accelerate development, improve quality, and reduce costs.',
    icon: '👥',
    useCases: [
      'AI-powered development teams',
      'Automated testing and QA',
      'Intelligent project management',
      'AI-enhanced collaboration',
    ],
    ctaText: 'Explore AI Teams',
    ctaLink: '/products#ai-team',
  },
  {
    id: 'automation',
    title: 'AUTOMATION',
    description: 'Business process automation solutions that streamline operations, reduce manual work, and improve efficiency.',
    icon: '⚡',
    useCases: [
      'Workflow automation',
      'Data processing pipelines',
      'Integration solutions',
      'Robotic Process Automation (RPA)',
    ],
    ctaText: 'Explore Automation',
    ctaLink: '/products#automation',
  },
  {
    id: 'digital-platform',
    title: 'DIGITAL PLATFORM',
    description: 'Comprehensive digital platforms that bring together multiple services, users, and data into a unified experience.',
    icon: '🏗️',
    useCases: [
      'Marketplace platforms',
      'Community platforms',
      'Enterprise portals',
      'Digital ecosystem development',
    ],
    ctaText: 'Explore Digital Platforms',
    ctaLink: '/products#digital-platform',
  },
  {
    id: 'future-tech',
    title: 'FUTURE TECHNOLOGY',
    description: 'Innovative projects that push the boundaries of what\'s possible with technology, exploring emerging trends and breakthroughs.',
    icon: '🚀',
    useCases: [
      'Experimental AI systems',
      'Emerging technology research',
      'Proof-of-concept development',
      'Innovation labs',
    ],
    ctaText: 'Explore Future Technology',
    ctaLink: '/products#future-tech',
  },
];

// ============================================
// HOW IT WORKS PROCESS
// ============================================

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'IDEA',
    description: 'Understand the problem and define the vision. We work closely with you to identify opportunities and create a clear roadmap.',
    icon: '💡',
  },
  {
    number: '02',
    title: 'DESIGN',
    description: 'Create the product architecture and user experience. Our design team crafts intuitive interfaces and seamless user journeys.',
    icon: '🎨',
  },
  {
    number: '03',
    title: 'BUILD',
    description: 'Develop the application, website, SaaS platform or AI system. Our engineering team brings the design to life with clean, scalable code.',
    icon: '🔨',
  },
  {
    number: '04',
    title: 'INTELLIGENCE',
    description: 'Integrate AI agents, automation and intelligent workflows when required. We enhance your solution with artificial intelligence capabilities.',
    icon: '🧠',
  },
  {
    number: '05',
    title: 'DEPLOY',
    description: 'Deploy the final product to production. We ensure smooth deployment, rigorous testing, and seamless launch to your users.',
    icon: '🚀',
  },
  {
    number: '06',
    title: 'EVOLVE',
    description: 'Continuously improve the product and develop future versions. We provide ongoing support, updates, and feature enhancements.',
    icon: '🔄',
  },
];

// ============================================
// LAYER PRODUCT INFORMATION
// ============================================

export const LAYER = {
  name: 'LAYER',
  tagline: 'Intelligent Digital Workspace',
  description: 'LAYER is an intelligent digital workspace designed to help users organize, build and interact with their digital work through a unified interface.',
  features: [
    'Unified workspace for all your digital work',
    'Intelligent organization and search',
    'Seamless integration with your existing tools',
    'AI-powered assistance and automation',
  ],
  ctaText: 'Open LAYER',
  ctaLink: '/layer',
};

// ============================================
// NAVIGATION
// ============================================

export const NAVIGATION = {
  main: [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'PRODUCTS', href: '/products' },
    { label: 'HOW IT WORKS', href: '/how-it-works' },
    { label: 'COMPANY', href: '/company' },
    { label: 'TEAM', href: '/team' },
    { label: 'DOWNLOAD', href: '/download' },
  ],
  footer: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Team', href: '/team' },
    { label: 'Founder', href: '/founder' },
    { label: 'Download', href: '/download' },
  ],
};

// ============================================
// APK DOWNLOAD CONFIGURATION
// ============================================

export interface APKConfig {
  enabled: boolean;
  filePath: string;
  version: string;
  platform: string;
  releaseStatus: string;
  fileSize?: string;
  downloadUrl?: string;
}

export const APK_CONFIG: APKConfig = {
  enabled: false, // Set to true when APK is available
  filePath: '/apk/limepak.apk',
  version: '1.0.0',
  platform: 'Android',
  releaseStatus: 'Coming Soon',
  // When APK is available, update these:
  // fileSize: 'XX MB',
  // downloadUrl: 'https://github.com/your-repo/releases/download/v1.0.0/limepak.apk',
};

// ============================================
// SECRET SWITCH CONFIGURATION
// ============================================

export const SECRET_SWITCH = {
  // Mechanism: Hold the LIMEPAK logo for 3 seconds
  mechanism: 'logo-hold',
  duration: 3000, // 3 seconds
  // Alternative mechanisms (uncomment to use):
  // mechanism: 'keyboard-sequence',
  // sequence: ['l', 'i', 'm', 'e', 'p', 'a', 'k'],
  // mechanism: 'click-count',
  // elementId: 'secret-trigger',
  // clicksRequired: 5,
};
