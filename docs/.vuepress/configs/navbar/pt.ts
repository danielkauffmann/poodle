import type { NavbarConfig } from '@vuepress/theme-default'

export const pt: NavbarConfig = [
  {
    text: 'Guia',
    link: '/pt/guide/',
  },
  {
    text: 'API',
    children: [
      { text: 'Início', link: '/pt/api/' },
      { text: 'Contribuir', link: '/pt/contributing.md' },
    ],
  },
]
