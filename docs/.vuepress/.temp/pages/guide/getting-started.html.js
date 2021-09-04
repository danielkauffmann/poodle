export const data = {
  "key": "v-fb0f0066",
  "path": "/guide/getting-started.html",
  "title": "Getting started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Prerequisites",
      "slug": "prerequisites",
      "children": []
    },
    {
      "level": 2,
      "title": "Installation",
      "slug": "installation",
      "children": []
    }
  ],
  "filePathRelative": "guide/getting-started.md",
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
