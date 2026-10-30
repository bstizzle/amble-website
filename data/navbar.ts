import type { NavLink } from '@/interface';

export const navLinks: NavLink[] = [
  { label: 'Hybrid Drum', href: "/"},
  { label: 'About', href: '/about' },
  //{ label: 'Customers', href: '/customers' },
  //{ label: 'Pricing', href: '/pricing' },
  //{ label: 'Journal', href: '/journal' },
];

export const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }, ...navLinks];

export const routeLabels: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  //'/customers': 'Customers',
  /*
  '/pricing': 'Pricing',
  '/journal': 'Journal',
  */
};
