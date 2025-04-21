import adapter from '@sveltejs/adapter-vercel';
 
/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/svelte-website" }
 
export default config;