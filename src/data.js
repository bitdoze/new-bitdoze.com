import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Pages',
      links: [
        {
          text: 'About us',
          href: '/about/',
        },
        {
          text: 'Contact',
          href: '/contact/',
        },
        {
          text: 'Terms',
          href: getPermalink('/terms'),
        },
        {
          text: 'Privacy policy',
          href: getPermalink('/privacy'),
        },
      ],
    },
    {
      text: 'VPS',
      href: '/cat/vps/',
    },
    {
      text: 'CMS',
      href: '/cat/cms/',
    },
    {
      text: 'Tools',
      href: '/cat/tools/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ type: 'button', text: 'Contact', href: '/contact/' }],
};

export const footerData = {
  links: [
    {
      title: 'Category',
      links: [
        { text: 'VPS', href: '/cat/vps/' },
        { text: 'CMS', href: '/cat/cms' },
        { text: 'Tools', href: '/cat/tools/' },
      ],
    },
    {
      title: 'Tools',
      links: [
        { text: 'Shots.so', href: '/shots-so-mockups/' },
        { text: 'Uptime Kuma', href: '/uptime-kuma-tool/' },
        { text: 'Plausible', href: '/plausible-tool/' },
      ],
    },
    {
      title: 'Usefull',
      links: [
        { text: 'Heroku Alternative', href: '/coolify-install-heroku-alternative/' },
        { text: 'CloudPanel Install', href: '/install-cloudpanel-host-nodejs/' },
        { text: 'Astro.JS VPS Deploy', href: '/deploy-astro-on-vps/' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms/') },
    { text: 'Privacy Policy', href: getPermalink('/privacy/') },
    { text: 'About', href: getPermalink('/about/') },
  ],
  socialLinks: [
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/bitdoze' },
    {
      ariaLabel: 'Youtube',
      icon: 'tabler:brand-youtube',
      href: 'https://www.youtube.com/channel/UCGsUtKhXsRrMvYAWm8q0bCg',
    },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/bitdozecom' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/bitdoze' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm "></span>
  <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://www.bitdoze.com/"> bitdoze.com</a> · All rights reserved.
  `,
};
export const seriesNames = {
  'Astro-Deploy': 'Astro Deploy',
};
