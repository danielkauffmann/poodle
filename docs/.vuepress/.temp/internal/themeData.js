export const themeData = {
  "logo": "images/rlogo.png",
  "repo": "danielkauffmann/poodle",
  "docsRepo": "danielkauffmann/poodle",
  "docsBranch": "main",
  "docsDir": "docs",
  "lastUpdated": true,
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Guide",
          "link": "/guide/"
        },
        {
          "text": "API",
          "children": [
            {
              "text": "Home",
              "link": "/api/"
            },
            {
              "text": "Contributing",
              "link": "/api/contributing.md"
            }
          ]
        }
      ],
      "sidebar": {
        "/guide/": [
          {
            "text": "Guide",
            "children": [
              "/guide/README.md",
              "/guide/getting-started.md"
            ]
          }
        ]
      },
      "editLinkText": "Edit this page on GitHub",
      "serviceWorker": {
        "updatePopup": {
          "message": "New content is available.",
          "buttonText": "Refresh"
        }
      },
      "selectLanguageName": "English"
    },
    "/pt/": {
      "navbar": [
        {
          "text": "Guia",
          "link": "/pt/guide/"
        },
        {
          "text": "API",
          "children": [
            {
              "text": "Início",
              "link": "/pt/api/"
            },
            {
              "text": "Contribuir",
              "link": "/pt/api/contributing.md"
            }
          ]
        }
      ],
      "selectLanguageName": "Portugês (Brasil)",
      "selectLanguageText": "Linguagens",
      "selectLanguageAriaLabel": "Portugês (Brasil)",
      "sidebar": {
        "/pt/guide/": [
          {
            "text": "Guia",
            "children": [
              "/pt/guide/README.md",
              "/pt/guide/getting-started.md"
            ]
          }
        ]
      },
      "editLinkText": "Edite esta página no GitHub",
      "lastUpdatedText": "Última atualização",
      "contributorsText": "Contribuidores",
      "tip": "Ajuda",
      "warning": "Aviso",
      "danger": "Cuidado",
      "notFound": [
        "Página não encontrada",
        "Como chegou aqui?",
        "Isto é um erro Quatro-Zero-Quatro",
        "Você está na disney irmão 😵"
      ],
      "backToHome": "Me leve de volta",
      "openInNewWindow": "Abrir em uma nova guia",
      "toggleDarkMode": "Alternar para modo escuro",
      "toggleSidebar": "Alternar barra lateral",
      "serviceWorker": {
        "updatePopup": {
          "message": "Novo conteúdo está disponível.",
          "buttonText": "Atualizar"
        }
      }
    }
  },
  "navbar": [],
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebar": "auto",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
