export const data = {
  "key": "v-5775a167",
  "path": "/pt/api/",
  "title": "API PT",
  "lang": "pt-BR",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "filePathRelative": "pt/api/README.md",
  "git": {
    "updatedTime": 1630693340000,
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
