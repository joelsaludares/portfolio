import type { CallToAction } from './types';
import { getPermalink } from './utils/permalinks';
import site from './data/site.json';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    { text: 'Projects', href: getPermalink('/projects') },
    { text: 'About', href: getPermalink('/about') },
    { text: 'Experience', href: getPermalink('/experience') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    {
      text: "Let's Connect",
      href: getPermalink('/contact'),
      variant: 'primary',
    } satisfies CallToAction,
  ],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'Projects', href: getPermalink('/projects') },
        { text: 'About', href: getPermalink('/about') },
        { text: 'Experience', href: getPermalink('/experience') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Focus',
      links: [
        { text: 'Business Systems', href: getPermalink('/projects') },
        { text: 'Automation', href: getPermalink('/projects') },
        { text: 'Process Improvement', href: getPermalink('/projects') },
        { text: 'Data & Reporting', href: getPermalink('/projects') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    ...(site.profile.social.github
      ? [
          {
            ariaLabel: 'GitHub',
            icon: 'tabler:brand-github',
            href: site.profile.social.github,
          },
        ]
      : []),
    ...(site.profile.social.linkedin
      ? [
          {
            ariaLabel: 'LinkedIn',
            icon: 'tabler:brand-linkedin',
            href: site.profile.social.linkedin,
          },
        ]
      : []),
  ],
  footNote: `© ${new Date().getFullYear()} ${site.profile.name}. ${site.profile.title}.`,
};
