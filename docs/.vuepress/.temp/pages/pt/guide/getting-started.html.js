export const data = {
  "key": "v-de1d3eb4",
  "path": "/pt/guide/getting-started.html",
  "title": "Começando",
  "lang": "pt-BR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Pré requisistos",
      "slug": "pre-requisistos",
      "children": []
    },
    {
      "level": 2,
      "title": "Instalação manual",
      "slug": "instalacao-manual",
      "children": []
    }
  ],
  "filePathRelative": "pt/guide/getting-started.md",
  "git": {
    "updatedTime": 1630642732000,
    "contributors": [
      {
        "name": "Daniel Kauffmann",
        "email": "danielvenna2@gmail.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
