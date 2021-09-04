export const searchIndex = [
  {
    "title": "Home",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Contributing",
    "headers": [],
    "path": "/contributing.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Início",
    "headers": [],
    "path": "/pt/",
    "pathLocale": "/pt/",
    "extraFields": []
  },
  {
    "title": "Contribuir",
    "headers": [],
    "path": "/pt/contributing.html",
    "pathLocale": "/pt/",
    "extraFields": []
  },
  {
    "title": "Guide",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Getting started",
    "headers": [],
    "path": "/guide/getting-started.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "API EN",
    "headers": [],
    "path": "/api/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "Introdução",
    "headers": [
      {
        "level": 2,
        "title": "Como funciona",
        "slug": "como-funciona",
        "children": []
      },
      {
        "level": 2,
        "title": "Motivação",
        "slug": "motivacao",
        "children": []
      },
      {
        "level": 2,
        "title": "Criadores",
        "slug": "criadores",
        "children": []
      }
    ],
    "path": "/pt/guide/",
    "pathLocale": "/pt/",
    "extraFields": []
  },
  {
    "title": "Começando",
    "headers": [
      {
        "level": 2,
        "title": "Pré requisistos",
        "slug": "pre-requisistos",
        "children": []
      },
      {
        "level": 2,
        "title": "Instalação",
        "slug": "instalacao",
        "children": []
      }
    ],
    "path": "/pt/guide/getting-started.html",
    "pathLocale": "/pt/",
    "extraFields": []
  },
  {
    "title": "API PT",
    "headers": [],
    "path": "/pt/api/",
    "pathLocale": "/pt/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
