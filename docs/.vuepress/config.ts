import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
	lang: "en-US",
	title: "Poodle Docs",
	description: "Poodle documentation",

	base: "/poodle/",

	themeConfig: {
		docsRepo: "danielkauffmann/poodle",
		docsBranch: "main",
		navbar: [
			{
				text: "Guide",
				link: "/guide/",
			},
			{
				text: "API",
				children: [
					{ text: "Home", link: "/api/" },
					{ text: "Contributing", link: "/api/contributing.md" },
				],
			},
		],
	},

	bundler: "@vuepress/vite",
});
