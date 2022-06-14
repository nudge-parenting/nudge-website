import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/outfit/100.css";
import "@fontsource/outfit/200.css";
import "@fontsource/outfit/300.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/outfit/800.css";
import "@fontsource/outfit/900.css";

const nudgeTheme = {
	fonts: { body: "Outfit", heading: "Outfit" },
	colors: {
		orange: {
			50: "#FCE5D6",
			100: "#FCE5D6",
			200: "#F9CBAE",
			300: "#F6B285",
			400: "#F3985D",
			500: "#F07E34",
			600: "#C0652A",
			700: "#904C1F",
			800: "#603215",
			900: "#30190A",
		},
		black: "#222222",
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
	//components
	components: {
		Text: {
			baseStyle: {
				color: "gray.700",
			},
			sizes: {
				lg: {
					fontSize: "18",
					lineHeight: "24px",
				},
			},
		},
		Heading: {
			baseStyle: {
				color: "black",
				fontWeight: "semibold",
				letterSpacing: "-1px",
			},
			sizes: {
				lg: {
					fontSize: "60",
					lineHeight: "64px",
				},
				md: {
					fontSize: "48px",
					lineHeight: "52px",
				},
			},
		},
	},

	//components
};

const theme = extendTheme(nudgeTheme);

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
