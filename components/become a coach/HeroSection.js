import { Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import FloatingSVGs from "../general/FloatingStuff";

import landingImage1 from "../../public/become a coach/bac-image-01.png";
import landingImage2 from "../../public/become a coach/bac-image-02.png";
import { Button } from "../general";

function HeroSection() {
	return (
		<VStack minH="100vh" spacing="48px" py="12" w="100%">
			<Stack
				direction={{ base: "column", xl: "row" }}
				width={{ base: "100%-64px", xl: "1160px" }}
				justifyContent="center"
				spacing={{ base: "48px", xl: "140px" }}
				alignItems={{ base: "center", xl: "start" }}
			>
				<HeroText />
				<HeroImages />
			</Stack>
		</VStack>
	);
}
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
				<Image
					src={landingImage2}
					alt="hero-1"
					height={290}
					width={290}
				/>
				<FloatingSVGs type="left" />
			</HStack>
			<HStack w="100%" justifyContent="space-between">
				<FloatingSVGs type="right" />
				<Image
					src={landingImage1}
					alt="hero-1"
					height={290}
					width={290}
				/>
			</HStack>
		</VStack>
	);
}
function HeroText() {
	return (
		<VStack
			mx={{ base: "32px", xl: "auto" }}
			w={{ base: "100%", xl: "460px" }}
			spacing="32px"
			alignItems={{ base: "center", xl: "start" }}
			textAlign={{ base: "center", xl: "left" }}
		>
			<VStack
				spacing="16px"
				w="100%"
				alignItems={{ base: "center", xl: "start" }}
			>
				<MessagePill />
				<Heading size="lg">
					Shape young <br />
					genius. Become a <br />
					<Heading size="lg" as="span" color="orange.500">
						Nudge Coach
					</Heading>
				</Heading>
				<Text>
					Run super-engaging offline & online activity classes for
					children, and earn a full-time income working part-time from
					your home!
				</Text>
			</VStack>
			<Button mt="16px">apply now</Button>
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
