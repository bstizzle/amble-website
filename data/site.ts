import type { SiteConfig } from '@/interface';

export const site: SiteConfig = {
  name: 'amble.audio',
  legalName: 'amble I/S',
  url: 'https://url.app',
  title: 'amble',
  description:
    'amble builds boutique electro-acoustic instruments for musicians who want electronic sound without sacrificing the feel of their acoustic instrument.',
  email: 'hello@email.com',
  careersEmail: 'careers@email.com',
  accent: '#ffd900',
  cta: {
    primary: { label: 'Buy a drum', href: 'https://www.youtube.com/watch?v=DLzxrzFCyOs' },
    secondary: { label: 'View a demo', href: 'https://www.youtube.com/watch?v=DLzxrzFCyOs' },
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/amble-audio/home/', icon: 'linkedin' }
  ],
};
