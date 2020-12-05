

module.exports = {
	experimental: {
		async redirects() {
			return [
				{ source: '/team', destination: '/https://movie-app-lake-alpha.vercel.app', permanent: true }, // a permanent redirect
			];
		},
	},
};