

module.exports = {
	
	async redirects() {
		return [
			{ source: '/team', destination: 'https://movie-app-lake-alpha.vercel.app', permanent: false }, // a permanent redirect
		];
	},
	
};