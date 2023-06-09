import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			$containers: 'src/containers',
			$db: 'src/db',
			$dto: 'src/dto',
			$entities: 'src/entities',
			$exceptions: 'src/exceptions',
			$repositories: 'src/repositories',
			$services: 'src/services',
			$types: 'src/types',
		},
	},
};

export default config;
