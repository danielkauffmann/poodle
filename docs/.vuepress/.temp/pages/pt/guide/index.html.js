export const data = {
  "key": "v-5b174045",
  "path": "/pt/guide/",
  "title": "Introdução",
  "lang": "pt-BR",
  "frontmatter": {},
  "excerpt": "",
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
  "filePathRelative": "pt/guide/README.md",
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
