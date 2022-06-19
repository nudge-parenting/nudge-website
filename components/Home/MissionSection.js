import { Box, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MotionBox = motion(Box);

function MissionSection() {
	return (
		<Stack
			direction={{ base: "column-reverse", xl: "row" }}
			width={{ base: "calc(100% - 32px)", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			spacing="50px"
			justifyContent="center"
			py="12"
			alignItems="center"
		>
			<VStack
				spacing={{ base: "96px", xl: "48px" }}
				alignItems="start"
				w={{ base: "100%", xl: "560px" }}
			>
				<VStack spacing="16px" alignItems="start">
					<Text fontWeight="medium">The Nudge Mission</Text>
					<Heading size="md">
						Empower you the parent to nudge free the genius inside
						your child
					</Heading>
					<Text>
						Parenting is the most powerful job in the world. I want
						Nudge to become every parent&apos;s best friend and ally
						in this job of shaping their child&apos;s unique genius.
					</Text>
				</VStack>
				<VStack alignItems="start" spacing="4px">
					<Text size="md" fontWeight="semibold">
						Pooja Pande
					</Text>
					<Text size="md">Founder, Nudge</Text>
				</VStack>
			</VStack>
			<Box
				w={{ base: "100%", xl: "524px" }}
				h={{ base: "auto", xl: "auto" }}
				position="relative"
			>
				<Image
					src="./home/message.png"
					alt="child reading a map"
					w={{ base: "100%", xl: "524px" }}
					h={{ base: "auto", xl: "auto" }}
				/>
				<Image
					src="./home/message-founder.png"
					alt="excerpt of message from the founder"
					w="180px"
					h="76px"
					position="absolute"
					bottom={{ base: "-10px", xl: "0px" }}
					left={{ base: "20px", xl: "-20px" }}
				/>
			</Box>
		</Stack>
	);
}

export default MissionSection;
