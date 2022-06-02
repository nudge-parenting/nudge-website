import {
	Box,
	Button,
	Center,
	Heading,
	ScaleFade,
	Text,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import LandingImages from "../components/LandingImages";
const MotionBox = motion(Box);

export default function Home({}) {
	return (
		<VStack
			pb={{ base: "20", xl: "12", "2xl": "20" }}
			minH="100vh"
			mt="32"
			spacing="20"
		>
			<HeroText />
			<LandingImages />
		</VStack>
	);
}

function HeroText() {
	return (
		<VStack spacing="8">
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
				<Heading textAlign="center">
					There&apos;s genius <br />
					inside your child.
				</Heading>
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
					<Heading textAlign="center">Nudge it free.</Heading>
				</MotionBox>
			</MotionBox>
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
				<Text textAlign="center">
					With Nudge&apos;s high-quality classes & groups, at-home
					activities, growth <br /> products, and parenting guidance
					that you will find nowhere else
				</Text>
			</MotionBox>
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
