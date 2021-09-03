export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Home",
  "lang": "en-US",
  "frontmatter": {
    "lang": "en-US",
    "home": true,
    "title": "Home",
    "heroImage": "/images/rlogo.png",
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "Introduction",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present Daniel Kauffmann & Lucas Garcia"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "README.md",
  "git": {
    "updatedTime": 1630555991000,
    "contributors": [
      {
        "name": "Lucas",
        "email": "61513630+lsglucas@users.noreply.github.com",
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
