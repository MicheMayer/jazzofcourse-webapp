import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import{ vanillaExtractPlugin }from'@vanilla-extract/vite-plugin';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	vite:{
		plugins:[vanillaExtractPlugin()],
	},
	integrations: [mdx(), sitemap()],
	server: {
		host: '0.0.0.0',
		port: 3000
	},
});
