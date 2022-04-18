/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/hiring",
				destination:
					"https://nudge-parenting.notion.site/Nudge-is-hiring-81d4db29705a4420828f8a34441cb9d5",
				permanent: true,
			},
			{
				source: "/vision",
				destination:
					"https://nudge-parenting.notion.site/Nudge-masterplan-5c43ec42eb934b6c994882320351c066",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
