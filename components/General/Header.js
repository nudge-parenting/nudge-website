import Head from "next/head";

function Header() {
	const injectGA = () => {
		if (typeof window == "undefined") {
			return;
		}
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());
		gtag("config", "G-LQNKJMXG1S");
	};
	return (
		<>
			<Head>
				{/* <!-- PRIMARY META TAGS --> */}
				<title>Nudge Parenting</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					name="description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					name="keywords"
					content="website, app, android, ios, react native, make website, make apps, make website, developer, designer, UI, UX, lemon8, lemon"
				/>
				<meta name="robots" content="index, follow" />

				{/* <!-- og tags --> */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.nudgeparenting.com/"
				/>
				<meta
					property="og:title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					property="og:description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					property="og:image"
					content="https://www.nudgeparenting.com/meta-image.png"
				/>
				{/* <!-- TWITTER --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://nudgeparenting.com"
				/>
				<meta
					property="twitter:title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					property="twitter:description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					property="twitter:image"
					content="https://www.nudgeparenting.com/meta-image.png"
				/>

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LQNKJMXG1S"
				/>
				<script>{injectGA()}</script>
			</Head>
		</>
	);
}

export default Header;
