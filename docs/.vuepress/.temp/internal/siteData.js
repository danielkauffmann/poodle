export const siteData = {
  "base": "/poodle/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "16x16",
        "href": "/images/icons/favicon-16x16.png"
      }
    ],
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "sizes": "32x32",
        "href": "/images/icons/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        "rel": "manifest",
        "href": "/manifest.webmanifest"
      }
    ],
    [
      "meta",
      {
        "name": "application-name",
        "content": "Poodle"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-title",
        "content": "Poodle"
      }
    ],
    [
      "meta",
      {
        "name": "apple-mobile-web-app-status-bar-style",
        "content": "black"
      }
    ],
    [
      "link",
      {
        "rel": "apple-touch-icon",
        "href": "/images/icons/apple-touch-icon.png"
      }
    ]
  ],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "Poodle",
      "description": "Python wrapper for Moodle Web Service API"
    },
    "/pt/": {
      "lang": "pt-BR",
      "title": "Poodle",
      "description": "Integração em Python para o Moodle Web Service API"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
