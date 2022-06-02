import { Box, Center, Heading } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/react";

export default function Home({}) {
	return (
		<ScaleFade in>
			<Center pb={{ base: "20", xl: "12", "2xl": "20" }} minH="100vh">
				<Heading>Nudge Verse</Heading>
			</Center>
		</ScaleFade>
	);
}
