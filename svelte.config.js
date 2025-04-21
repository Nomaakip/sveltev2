import adapter from '@sveltejs/adapter-static';
 
/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'dist',
			assets: 'dist',
			fallback: '404.html'
		}),
		paths: {
			base: '/svelte-website',
		},
	},
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/svelte-website" }
 
export default config;