export const data = {
  "key": "v-2d0ab112",
  "path": "/pt/",
  "title": "Início",
  "lang": "pt-BR",
  "frontmatter": {
    "lang": "pt-BR",
    "home": true,
    "title": "Início",
    "description": "Início",
    "heroImage": "/images/rlogo.png",
    "actions": [
      {
        "text": "Começar",
        "link": "/pt/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Introdução",
        "link": "/pt/guide/",
        "type": "secondary"
      }
    ],
    "footer": "Licenciado MIT | Todos os direitos reservados © 2021-agora Daniel Kauffmann & Lucas Garcia"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "pt/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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
