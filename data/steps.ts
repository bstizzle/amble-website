import type { Step } from '@/interface';
import { site } from '@/data/site';

export const steps: Step[] = [
  {
    verb: 'Play',
    tag: '',
    visual: 'connect',
    title: `All interactions matter, every action influences the sound processing.`,
    body: 'From strike for and location, to tilting the drum, to grip pressure on the frame and skin, and beyond.',
    points: [
    ],
    image: '/images/yellow.jpg',
  },
  {
    verb: 'Process',
    tag: '',
    visual: 'watch',
    title: 'Expressive synthesis on a bespoke embedded controller.',
    body: `Programmable audio FX and physical modeling synthesis engines produce nuanced and highly interactive audio output.`,
    points: [
    ],
    image: '/images/circuitboard.jpg',
  },
  /*
  {
    verb: 'Brief',
    tag: 'Every morning',
    visual: 'brief',
    title: 'The right person hears about it first.',
    body: `When something shifts, ${site.name} writes a short brief with the cause, the size of it and a suggested owner, then sends it where that person works.`,
    points: [
      'Slack, email or a weekly digest',
      'Evidence linked under every claim',
      'Follow-up questions in plain English',
    ],
    image: '/images/step-brief.jpg',
  },
  */
];

export const briefPreview = {
  title: `${site.name} brief`,
  meta: 'For Payments, 7:02',
  priority: 'High',
  text: 'Checkout errors in Germany tripled after Tuesday’s release. 212 orders failed. Likely cause: the new address check.',
  actions: { secondary: 'See evidence', primary: 'Assign to Lena' },
};
