import { Text, Box, Square } from "@chakra-ui/react";
import { ScaleFade } from "@chakra-ui/react";
const Team = () => (
	<ScaleFade in>
		<Square
			minW="50"
			minH="90vh"
			mt={{ base: "10", md: "110", lg: "110", xl: "140" }}
			bg="lemongreen.500"
			mx={{
				base: "8",
				md: "90",
				lg: "250",
				xl: "350",
				"2xl": "450",
			}}
			borderRadius="xl"
		>
			The Team, coming soon.
		</Square>
	</ScaleFade>
);
export default Team;
