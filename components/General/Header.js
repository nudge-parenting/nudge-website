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
				<title>NudgeVerse</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="title"
					content="NudgeVerse - There's genius in your child. Nudge it free."
				/>
				<meta
					name="description"
					content="There's genius in your child. Nudge it free.. with high-quality classes & groups, at-home activities, growth products, and parenting guidance that you will find nowhere else"
				/>
				<meta
					name="keywords"
					content="parenting, classes, online, offline, groups, activities, growth, nudge, free, genius, nudgeverse"
				/>
				<meta name="robots" content="index, follow" />

				{/* <!-- og tags --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.nudgeverse.com/" />
				<meta
					property="og:title"
					content="NudgeVerse - There's genius in your child. Nudge it free."
				/>
				<meta
					property="og:description"
					content="There's genius in your child. Nudge it free.. with high-quality classes & groups, at-home activities, growth products, and parenting guidance that you will find nowhere else"
				/>
				<meta
					property="og:image"
					content="https://www.nudgeverse.com/meta-image.png"
				/>
				{/* <!-- TWITTER --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://nudgeparenting.com"
				/>
				<meta
					property="twitter:title"
					content="NudgeVerse - There's genius in your child. Nudge it free."
				/>
				<meta
					property="twitter:description"
					content="There's genius in your child. Nudge it free.. with high-quality classes & groups, at-home activities, growth products, and parenting guidance that you will find nowhere else"
				/>
				<meta
					property="twitter:image"
					content="https://www.nudgeverse.com/meta-image.png"
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
