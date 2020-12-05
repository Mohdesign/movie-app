module.exports = {
	async redirects() {
		return [
			{
				source: '/team',
				destination: 'https://movie-app-lake-alpha.vercel.app',
			},
			{
				source: '/about',
				destination: '/',
			},
			// Path Matching - will match `/post/a` but not `/post/a/b`
			{
				source: '/post/:slug',
				destination: '/news/:slug',
			},
			// Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
			{
				source: '/blog/:slug*',
				destination: '/news/:slug*',
			},
			// Rewriting to an external URL
			{
				source: '/docs/:slug',
				destination: 'http://example.com/docs/:slug',
			},
		]
	},
}