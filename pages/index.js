import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import LandingImages from "../components/Home/LandingImages";
const MotionBox = motion(Box);

export default function Home({}) {
	return <HeroSection />;
}

function HeroText() {
	return (
		<VStack spacing="8">
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
							size="md"
							fontWeight="semibold"
							letterSpacing="-1px"
						>
							There&apos;s{" "}
							<Heading as="span" color="orange.500" size="md">
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
						<Heading textAlign="center" size="md">
							<Heading as="span" color="orange.500" size="md">
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
						activities, growth <br /> products, and parenting
						guidance that you will find nowhere else
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
				<Button>join the waitlist</Button>
			</MotionBox>
		</VStack>
	);
}

function HeroSection() {
	return (
		<VStack minH="100vh" spacing="12">
			<VStack
				mt="16"
				spacing="20"
				w="100%"
				// bg="pink.100"
				maxW="1160px"
				mx="auto"
			>
				<HeroText />
			</VStack>
			<LandingImages />
		</VStack>
	);
}
