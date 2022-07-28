/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/join-the-waitlist",
				destination: "https://forms.gle/LRMdsZWy2MkknUFA9",
				permanent: true,
			},
			{
				source: "/apply-host",
				destination: "https://forms.gle/kSXAx9Ec87R9WoRUA",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
