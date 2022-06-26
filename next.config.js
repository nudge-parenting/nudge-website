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
				source: "/apply-coach",
				destination: "https://forms.gle/3t3tCj6K8bcep7sSA",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
