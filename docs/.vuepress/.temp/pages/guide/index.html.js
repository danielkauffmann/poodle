export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "How it works",
      "slug": "how-it-works",
      "children": []
    },
    {
      "level": 2,
      "title": "Motivation",
      "slug": "motivation",
      "children": []
    },
    {
      "level": 2,
      "title": "Creators",
      "slug": "creators",
      "children": []
    }
  ],
  "filePathRelative": "guide/README.md",
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
