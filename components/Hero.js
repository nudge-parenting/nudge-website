import {
	Box,
	Button,
	Center,
	HStack,
	Image,
	SlideFade,
	Spacer,
	Text,
	VStack,
	Wrap,
	WrapItem,
	useBreakpointValue,
} from "@chakra-ui/react";
import router, { useRouter } from "next/router";
import LemonVStack from "./LemonVStack";
// import Particles from "react-particles-js";
const Hero = ({ onContactModalOpen }) => {
	const router = useRouter();
	const particleDensityArea = useBreakpointValue({
		base: 700,
		xl: 1600,
	});
	return (
		<Center pb={{ base: "20", xl: "12", "2xl": "20" }} minH="100vh">
			<LemonVStack>
				<Box>
					<Text
						fontSize={{
							base: "4xl",
							md: "5xl",
							lg: "6xl",
							xl: "5xl",
							"2xl": "7xl",
						}}
						fontWeight="black"
						color="nudgeblack.500"
						w="100%"
						textAlign="center"
						lineHeight="1.05"
					>
						raising smart humans of tomorrow through the power of
						<Text as="span" color="nudgeyellow.200">
							{" "}
							nudge parenting
						</Text>
					</Text>
					<Text
						fontSize={{
							base: "md",
							md: "md",
							lg: "lg",
							xl: "lg",
							"2xl": "2xl",
						}}
						fontWeight="normal"
						color="nudgeblack.500"
						w="100%"
						textAlign="center"
						mt="4"
					>
						building a global 100M+ community of coach parents
						enabled by personalized, actionable and science-backed
						tools to raise happier, healthier, smarter and wiser
						children
					</Text>
				</Box>
				<HStack>
					<Wrap
						alignItems="center"
						alignContent="center"
						justifyContent="center"
						verticalAlign="center"
						display="flex"
						zIndex="0"
					>
						<WrapItem w={["100%", "auto"]}>
							<Button
								w={["100%", "auto"]}
								colorScheme="blackAlpha"
								fontWeight="bold"
								borderRadius="3xl"
								size="lg"
								onClick={onContactModalOpen}
							>
								early access
							</Button>
						</WrapItem>
						{/* <WrapItem w={["100%", "auto"]} bg="white">
							<Button
								colorScheme="nudgeyellow"
								fontWeight="bold"
								borderRadius="3xl"
								variant="outline"
								size={"lg"}
								w={["100%", "auto"]}
								onClick={() => router.push("/work")}
							>
								See our work
							</Button>
						</WrapItem> */}
					</Wrap>
				</HStack>
			</LemonVStack>
		</Center>
	);
};

export default Hero;
