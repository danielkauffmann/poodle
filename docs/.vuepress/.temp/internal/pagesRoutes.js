import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","Home",["/index.html","/README.md"]],
  ["v-6ce48554","/contributing.html","Contributing",["/contributing","/contributing.md"]],
  ["v-2d0ab112","/pt/","Início",["/pt/index.html","/pt/README.md"]],
  ["v-27a0d45d","/pt/contributing.html","Contribuir",["/pt/contributing","/pt/contributing.md"]],
  ["v-fffb8e28","/guide/","Introduction",["/guide/index.html","/guide/README.md"]],
  ["v-fb0f0066","/guide/getting-started.html","Getting started",["/guide/getting-started","/guide/getting-started.md"]],
  ["v-744497ce","/api/","API EN",["/api/index.html","/api/README.md"]],
  ["v-5b174045","/pt/guide/","Introdução",["/pt/guide/index.html","/pt/guide/README.md"]],
  ["v-de1d3eb4","/pt/guide/getting-started.html","Começando",["/pt/guide/getting-started","/pt/guide/getting-started.md"]],
  ["v-5775a167","/pt/api/","API PT",["/pt/api/index.html","/pt/api/README.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
