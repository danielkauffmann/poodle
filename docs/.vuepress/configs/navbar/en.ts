import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
  },
  {
    text: 'API',
    children: [
      { text: 'Home', link: '/api/' },
      { text: 'Contributing', link: '/contributing.md' },
    ],
  },
]
