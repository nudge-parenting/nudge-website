import {
	Box,
	Heading,
	HStack,
	Text,
	useBreakpointValue,
	VStack,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button, MessagePill } from "../general";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FloatingSVGs from "../general/FloatingStuff";
import LandingImages from "./LandingImages";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const MotionBox = motion(Box);
function HeroSection() {
	return (
		<VStack minH="100vh" spacing="12" py="12" w="100%">
			<HStack
				width={{ base: "calc(100% - 64px)", xl: "1160px" }}
				mx={{ base: "0px", xl: "auto" }}
				justifyContent="center"
				spacing={{ base: "4px", xl: "100px" }}
				alignItems="center"
			>
				<FloatingSVGs type="left" pageName="home" />
				<HeroText />
				<FloatingSVGs type="right" pageName="home" />
			</HStack>
			<LandingImages />
		</VStack>
	);
}

function HeroText() {
	const router = useRouter();
	const isMobile = useBreakpointValue({
		base: true,
		xl: false,
	});
	return (
		<VStack spacing="8" width={{ base: "100%", xl: "660px" }} mx="auto">
			<VStack spacing="4">
				{/* big heading */}
				<VStack>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							delay: 0.1,
							mass: 1,
							damping: 40,
							stiffness: 200,
							// duration: 1,
						}}
					>
						<Heading
							textAlign="center"
							size="lg"
							fontWeight="semibold"
						>
							Broaden your child&apos;s horizons and help them
							{/* <Heading as="span" color="orange.500" size="lg">
								genius
							</Heading>{" "} */}
						</Heading>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							delay: 0.3,
							mass: 1,
							damping: 40,
							stiffness: 200,
						}}
					>
						<Heading textAlign="center" size="lg" mt="-1">
							become a {isMobile ? <br /> : null}
							<Heading
								as="span"
								color="orange.500"
								size="lg"
								display="inline-block"
							>
								<Typewriter
									options={{
										strings: [
											"thinker",
											"builder",
											"reader",
										],
										autoStart: true,
										loop: true,
										cursor: "|",
									}}
								/>
							</Heading>{" "}
						</Heading>
					</MotionBox>
				</VStack>
				{/* big heading */}
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						delay: 0.5,
						mass: 1,
						damping: 40,
						stiffness: 200,
					}}
				>
					<Text textAlign="center" fontSize="18" lineHeight="24px">
						With high-quality Nudge activities at a physical centre
						near you
					</Text>
				</MotionBox>
			</VStack>
			<Wrap spacing="12px" justify="center">
				<WrapItem>
					<ActivityPill text="STEM 🔬" />
				</WrapItem>
				<WrapItem>
					<ActivityPill text="Life Skills 📖" />
				</WrapItem>
				<WrapItem>
					<ActivityPill text="World Discovery 🌎" />
				</WrapItem>
				<WrapItem>
					<ActivityPill text="Creative Skills 🎨" />
				</WrapItem>
			</Wrap>
			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					delay: 0.7,
					mass: 1,
					damping: 40,
					stiffness: 200,
				}}
				// bg="pink.100"
				// w="100%"
			>
				<VStack spacing="16px">
					<MessagePill text="Launching near you soon" />
					<Button
						onClick={() => {
							router.push("/join-the-waitlist");
						}}
					>
						join the waitlist
					</Button>
				</VStack>
			</MotionBox>
		</VStack>
	);
}
function ActivityPill({ text }) {
	return (
		<VStack px="16px" py="4px" bg="gray.100" borderRadius="full">
			<Text fontSize="12" fontWeight="semibold" color="black">
				{text}
			</Text>
		</VStack>
	);
}
export default HeroSection;
