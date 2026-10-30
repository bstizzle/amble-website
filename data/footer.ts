import { site } from '@/data/site';
import type { FooterGroup } from '@/interface';

export const footerGroups: FooterGroup[] = [
  {
    title: 'Product',
    links: [
      { label: 'Hybrid Drum', href: '/' },
      { label: site.cta.secondary.label, href: site.cta.secondary.href },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Customers', href: '/customers' },
      /*
      { label: 'Journal', href: '/journal' },
      { label: 'Careers', href: '/about#roles' },
       */
    ],
  },
];

// Contact form delivery via Web3Forms (https://web3forms.com).
// The access key is tied to the recipient address you register with Web3Forms,
// so the address itself never appears in the site. The key is safe to be public.
export const contactForm = {
  endpoint: 'https://api.web3forms.com/submit',
  accessKey: '56a6b721-52b4-4639-8ad3-2ff0b4b78722',
  subject: `New inquiry from the ${site.name} website`,
};

export const footerCopy = {
  contact: {
    title: 'Contact us for any and all inquiries.',
    emailLabel: 'Your email',
    emailPlaceholder: 'you@company.com',
    messageLabel: 'Message',
    messagePlaceholder: 'How can we help?',
    submit: 'Send message',
    note: 'We usually reply within two business days.',
    loading: 'Sending...',
    success: 'Thanks, your message is on its way. We will be in touch soon.',
    errorEmail: 'That email looks incomplete. Try name@company.com.',
    errorMessage: 'Please write a message before sending.',
    errorSend: 'Something went wrong sending your message. Please try again.',
  },
  followTitle: 'Follow',
  backToTop: 'Back to top',
  legal: `© ${new Date().getFullYear()} ${site.legalName}`,
};