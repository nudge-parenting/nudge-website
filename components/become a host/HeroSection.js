import { Box, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import FloatingSVGs from "../general/FloatingStuff";

import landingImage1 from "../../public/become a host/bac-image-01.png";
import landingImage2 from "../../public/become a host/bac-image-02.png";
import { Button } from "../general";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

function HeroSection() {
	return (
		<VStack spacing="48px" py="12" w="100%">
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
	return (
		<VStack
			w={{ base: "calc(100% - 64px)", xl: "460px" }}
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
						Shape young <br />
						genius. Become a <br />
						<Heading size="lg" as="span" color="orange.500">
							Nudge Host
						</Heading>
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
function MessagePill() {
	return (
		<HStack p="4px" pr="16px" bg="orange.50" borderRadius="full">
			<Text
				fontSize="16px"
				lineHeight="20px"
				color="orange.700"
				fontWeight="medium"
				bg="white"
				borderRadius="full"
				py="4px"
				px="8px"
			>
				New
			</Text>
			<Text color="orange.700" fontSize="16px" lineHeight="20px">
				Applications now open
			</Text>
		</HStack>
	);
}
export default HeroSection;
