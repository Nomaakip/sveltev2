import adapter from '@sveltejs/adapter-static';
 
/** @type {imdwqdport('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
	},
	paths: {
		base: process.env.NODE_ENV === 'production' ? '/sveltev2' : '',
	}
};
 
config.paths = { base: process.argv.includes('dev') ? '' : "/svelte-website" }
 
export default config;