import Head from "next/head";
function Header() {
	// const injectGA = () => {
	// 	if (typeof window == "undefined") {
	// 		return;
	// 	}
	// 	window.dataLayer = window.dataLayer || [];
	// 	function gtag() {
	// 		dataLayer.push(arguments);
	// 	}
	// 	gtag("js", new Date());
	// 	gtag("config", "G-LQNKJMXG1S");
	// };

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
					content="NudgeVerse - Broaden your child's horizons."
				/>
				<meta
					name="description"
					content="Broaden your child's horizons.. with high-quality Nudge activities at a physical centre near you"
				/>
				<meta
					name="keywords"
					content="activities, nudge activities, parenting, classes, online, offline, groups, activities, growth, nudge, free, genius, nudgeverse, verse, nudge verse, nudge parenting"
				/>
				<meta name="robots" content="index, follow" />

				{/* <!-- og tags --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.nudgeverse.com/" />
				<meta
					property="og:title"
					content="NudgeVerse - Broaden your child's horizons."
				/>
				<meta
					property="og:description"
					content="Broaden your child's horizons.. with high-quality Nudge activities at a physical centre near you"
				/>
				<meta
					property="og:image"
					content="https://www.nudgeverse.com/meta-image.png"
				/>
				{/* <!-- TWITTER --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://nudgeverse.com" />
				<meta
					property="twitter:title"
					content="NudgeVerse - Broaden your child's horizons."
				/>
				<meta
					property="twitter:description"
					content="Broaden your child's horizons.. with high-quality Nudge activities at a physical centre near you"
				/>
				<meta
					property="twitter:image"
					content="https://www.nudgeverse.com/meta-image.png"
				/>

				{/* <script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LQNKJMXG1S"
				/>
				<script>{injectGA()}</script> */}
			</Head>
		</>
	);
}

export default Header;
