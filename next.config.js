module.exports = {
	async rewrites() {
		return [
			{
				source: '/team',
				destination: 'http://www.websolutions.kitchen/bimbo2020/react/home/',
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