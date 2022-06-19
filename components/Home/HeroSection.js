import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../general";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import FloatingSVGs from "../general/FloatingStuff";
import LandingImages from "./LandingImages";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function HeroSection() {
	return (
		<VStack minH="100vh" spacing="12" py="12" w="100%">
			<HStack
				width={{ base: "100%-64px", xl: "1160px" }}
				mx={{ base: "32px", xl: "auto" }}
				justifyContent="center"
				spacing={{ base: "4px", xl: "100px" }}
				alignItems="center"
			>
				<FloatingSVGs type="left" />
				<HeroText />
				<FloatingSVGs type="right" />
			</HStack>
			<LandingImages />
		</VStack>
	);
}

function HeroText() {
	const router = useRouter();
	return (
		<VStack spacing="8" width={{ base: "100%", xl: "560px" }} mx="auto">
			<VStack spacing="4">
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
							There&apos;s{" "}
							<Heading as="span" color="orange.500" size="lg">
								genius
							</Heading>{" "}
							<br />
							inside your child.
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
							<Heading as="span" color="orange.500" size="lg">
								Nudge
							</Heading>{" "}
							it free.
						</Heading>
					</MotionBox>
				</VStack>
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
						With Nudge&apos;s high-quality classes & groups, at-home
						activities, growth products, and parenting guidance that
						you will find nowhere else
					</Text>
				</MotionBox>
			</VStack>

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
			>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
			</MotionBox>
		</VStack>
	);
}

export default HeroSection;
