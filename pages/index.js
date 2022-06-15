import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Button from "../components/General/Button";
import LandingImages from "../components/Home/LandingImages";
const MotionBox = motion(Box);

export default function Home({}) {
	return <HeroSection />;
}
function HeroSection() {
	return (
		<VStack minH="100vh" spacing="12" py="12">
			<HStack
				width="1160px"
				mx="auto"
				justifyContent="center"
				spacing="100px"
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
	return (
		<VStack spacing="8" width="560px" mx="auto">
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

function FloatingSVGs({ type = "left" }) {
	return (
		<VStack w="180px" h="200px">
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-06.svg"
							: "./svg shapes/svg-shape-02.svg"
					}
					alt="svg-elemnent"
					ml={type === "left" ? "90px" : "0px"}
					mr={type === "left" ? "0px" : "130px"}
				/>
			</FloatingBox>
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-05.svg"
							: "./svg shapes/svg-shape-03.svg"
					}
					alt="svg-elemnent"
					mr={type === "left" ? "90px" : "0px"}
					ml={type === "left" ? "0px" : "120px"}
				/>
			</FloatingBox>
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-01.svg"
							: "./svg shapes/svg-shape-04.svg"
					}
					alt="svg-elemnent"
					ml={type === "left" ? "70px" : "40px"}
				/>
			</FloatingBox>
		</VStack>
	);
}

function FloatingBox({ floatLength = 20, children }) {
	return (
		<MotionBox
			initial={{ y: floatLength / 2 }}
			animate={{ y: -floatLength / 2 }}
			transition={{
				type: "ease",
				repeat: Infinity,
				repeatType: "reverse",
				//random duration
				duration: Math.random() + 2,
			}}
		>
			{children}
		</MotionBox>
	);
}
