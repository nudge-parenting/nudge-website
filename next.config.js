/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/join-the-waitlist",
				destination: "https://nudgeverse.com",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
