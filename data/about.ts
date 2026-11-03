import { site } from '@/data/site';
import type { Milestone, Role, TeamMember, Value } from '@/interface';

export const milestones: Milestone[] = [
  {
    year: '\'24',
    title: 'Idea',
    body: `Casper has the initial idea and begins R&D.`,
    image: '/images/casper-idea.jpg',
  },
  {
    year: '\'25',
    title: 'NIME 2025',
    body: 'Prototype is succesfully evalutated and published at the New Interfaces for Music Expression conference.',
    image: '/images/casper-2025.jpg',
  },
  {
    year: '\'26',
    title: 'NIME 2026',
    body: 'Product is refined, further evaluated, and the new research published.',
    image: '/images/nime-logo.jpg',
  },
  {
    year: 'Nov \'26',
    title: 'Company Founded',
    body: 'Ben joins as co-founder and head of software, and the company is founded.',
    image: '/images/about-studio.jpg',
  },
];

export const values: Value[] = [
  {
    title: 'Early beats perfect',
    body: 'A rough signal on Tuesday is worth more than a polished report on Friday. We ship the useful version first.',
  },
  {
    title: 'Quiet by default',
    body: `Every alert costs someone their focus. ${site.name} stays silent unless it has something worth saying.`,
  },
  {
    title: 'Show the evidence',
    body: 'No claim without a link to the data behind it. Trust is earned one checkable sentence at a time.',
  },
  {
    title: 'Operators first',
    body: 'We build for the people who act on the numbers, not the people who admire them.',
  },
];

export const team: TeamMember[] = [
  { name: 'Casper Preisler', role: 'Founder, CEO', image: '/images/casper-profile.jpg' },
  { name: 'Benjamin Stein', role: 'Co-founder, CTO', image: '/images/ben-profile.jpg' },
];

export const roles: Role[] = [
  { title: 'Senior Product Engineer', team: 'Engineering', location: 'Remote, Europe' },
  { title: 'Machine Learning Engineer', team: 'Signals', location: 'Berlin or remote' },
  { title: 'Product Designer', team: 'Design', location: 'Remote, Americas' },
  { title: 'Customer Success Lead', team: 'Customers', location: 'London' },
];
