import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import{ vanillaExtractPlugin }from'@vanilla-extract/vite-plugin';
import sitemap from '@astrojs/sitemap';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	site: 'https://jazzofcourse.de',
	vite:{
		plugins:[
			tsconfigPaths(),
			vanillaExtractPlugin({
			})
		],
	},
	integrations: [mdx(), sitemap()],
	server: {
		host: '0.0.0.0',
		port: 3000
	},
});
