import type { SidebarConfig } from '@vuepress/theme-default'

export const pt: SidebarConfig = {
    '/pt/guide/': [
        {
            text: 'Guia',
            children: [
                '/pt/guide/README.md',
                '/pt/guide/getting-started.md',
            ]
        }
    ]
}
