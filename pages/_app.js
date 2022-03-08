import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

const indTheme = {
	fonts: { body: "Inter", heading: "Inter" },
	colors: {
		nudgeyellow: {
			500: "#FFFA54",
			200: "#6B6F25",
		},
		nudgeblack: {
			500: "#323913",
		},
		lemongreen: {
			500: "#98DB7C",
		},
		lemongrey: {
			50: "#F2F2F2",
			100: "#DBDBDB",
			200: "#C4C4C4",
			300: "#ADADAD",
			400: "#969696",
			500: "#808080",
			600: "#666666",
			700: "#4D4D4D",
			800: "#333333",
			900: "#1A1A1A",
		},
	},
	fontSizes: {
		xs: "0.75rem",
		sm: "0.875rem",
		md: "1rem",
		lg: "1.125rem",
		xl: "1.25rem",
		"2xl": "1.5rem",
		"3xl": "1.875rem",
		"4xl": "2.25rem",
		"5xl": "3rem",
		"6xl": "3.75rem",
		"7xl": "4.5rem",
		"8xl": "6rem",
		"9xl": "8rem",
	},
};

const theme = extendTheme(indTheme);

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	);
}

export default MyApp;
