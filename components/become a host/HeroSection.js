import {
	Box,
	Heading,
	HStack,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import FloatingSVGs from "../general/FloatingStuff";

import landingImage1 from "../../public/become a host/bac-image-01.png";
import landingImage2 from "../../public/become a host/bac-image-02.png";
import { Button, MessagePill } from "../general";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Typewriter from "typewriter-effect";

function HeroSection() {
	return (
		<VStack spacing="48px" pb="12" pt="10" w="100%">
			<Stack
				direction={{ base: "column", xl: "row" }}
				width={{ base: "100%", xl: "1160px" }}
				justifyContent="center"
				spacing={{ base: "48px", xl: "140px" }}
				alignItems={{ base: "center", xl: "center" }}
			>
				<HeroText />
				<HeroImages />
			</Stack>
		</VStack>
	);
}
const MotionBox = motion(Box);

function HeroImages() {
	return (
		<VStack
			w={{ base: "100%", xl: "560px" }}
			spacing={{
				base: "4px",
				xl: "-25px",
			}}
		>
			<HStack w="100%" justifyContent="space-between">
				<MotionBox
					whileHover={{
						transition: { duration: 0.4 },
						rotate: "-5deg",
					}}
				>
					<Image
						src={landingImage2}
						alt="hero-1"
						height={290}
						width={290}
					/>
				</MotionBox>
				<FloatingSVGs type="left" pageName="bac" />
			</HStack>
			<HStack w="100%" justifyContent="space-between">
				<FloatingSVGs type="right" pageName="bac" />
				<MotionBox
					whileHover={{
						transition: { duration: 0.4 },
						rotate: "5deg",
					}}
				>
					<Image
						src={landingImage1}
						alt="hero-1"
						height={290}
						width={290}
					/>
				</MotionBox>
			</HStack>
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
		<VStack
			w={{ base: "calc(100% - 64px)", xl: "660px" }}
			spacing="32px"
			alignItems={{ base: "center", xl: "start" }}
			textAlign={{ base: "center", xl: "left" }}
		>
			<VStack
				spacing="16px"
				w="100%"
				alignItems={{ base: "center", xl: "start" }}
			>
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
					<MessagePill />
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
					<Heading size="lg">
						Become a<br />
						<Heading size="lg" as="span" color="orange.500">
							Nudge Host.
						</Heading>
						<br /> Shape the {isMobile ? <br /> : null}
						<Box display="inline-block">
							<Typewriter
								options={{
									strings: [
										"thinkers",
										"builders",
										"readers",
									],
									autoStart: true,
									loop: true,
									cursor: "|",
								}}
							/>
						</Box>
						<br /> of tomorrow.
					</Heading>
				</MotionBox>
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						delay: 0.6,
						mass: 1,
						damping: 40,
						stiffness: 200,
					}}
				>
					<Text>
						Host engaging offline activities for neighbourhood
						children, and earn a full-time income working part-time
						from home!
					</Text>
				</MotionBox>
			</VStack>
			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					delay: 0.9,
					mass: 1,
					damping: 40,
					stiffness: 200,
				}}
			>
				<Button
					onClick={() => {
						router.push("/apply-host");
					}}
					mt="16px"
				>
					apply now
				</Button>
			</MotionBox>
		</VStack>
	);
}

export default HeroSection;
