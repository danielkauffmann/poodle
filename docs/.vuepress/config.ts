import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/poodle/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/images/icons/favicon-16x16.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/images/icons/favicon-32x32.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'Poodle' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Poodle' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Poodle',
      description: 'Python wrapper for Moodle Web Service API',
    },
    '/pt/': {
      lang: 'pt-BR',
      title: 'Poodle',
      description: 'Integração em Python para o Moodle Web Service API',
    },
  },

  themeConfig: {
    logo: 'images/rlogo.png',

    repo: 'danielkauffmann/poodle',

    docsRepo: 'danielkauffmann/poodle',
    docsBranch: 'main',
    docsDir: 'docs',

    lastUpdated: true,
    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
        editLinkText: 'Edit this page on GitHub',

        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh',
          },
        },
      },
      '/pt/': {
        // navbar
        navbar: navbar.pt,
        selectLanguageName: 'Portugês (Brasil)',
        selectLanguageText: 'Linguagens',
        selectLanguageAriaLabel: 'Portugês (Brasil)',

        // sidebar
        sidebar: sidebar.pt,

        // page meta
        editLinkText: 'Edite esta página no GitHub',
        lastUpdatedText: 'Última atualização',
        contributorsText: 'Contribuidores',

        // custom containers
        tip: 'Dica',
        warning: 'Aviso',
        danger: 'Cuidado',

        // 404 page
        notFound: [
          'Página não encontrada',
          'Como chegou aqui?',
          'Isto é um erro Quatro-Zero-Quatro',
          'Você está na disney irmão 😵',
        ],
        backToHome: 'Me leve de volta',

        // ally
        openInNewWindow: 'Abrir em uma nova guia',
        toggleDarkMode: 'Alternar para modo escuro',
        toggleSidebar: 'Alternar barra lateral',

        serviceWorker: {
          updatePopup: {
            message: 'Novo conteúdo está disponível.',
            buttonText: 'Atualizar',
          },
        },
      },
    },
  },

  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/pt/': {
            placeholder: 'Buscar',
          },
        },
      },
    ],
  ],

  bundler: '@vuepress/vite',
  bundlerConfig: {
    viteOptions: {
      logLevel: 'warning',
    },
  },
})
