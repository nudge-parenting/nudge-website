import {
	Box,
	Center,
	Heading,
	Icon,
	Image,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
	RiHomeWifiLine,
	RiMailFill,
	RiOpenArmLine,
	RiWalletLine,
} from "react-icons/ri";
import { Button } from "../general";

function WhatNudgeCoachesDoSection() {
	return (
		<VStack
			spacing="56px"
			py="12"
			alignItems={{ base: "center", xl: "start" }}
			width={{ base: "100%", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
		>
			<VStack
				w={{ base: "calc(100% - 32px)", xl: "560px" }}
				alignItems="start"
				spacing="4"
			>
				<Heading size="md">
					What does <br />a{" "}
					<Heading size="md" as="span" color="orange.500">
						Nudge Coach
					</Heading>{" "}
					do?
				</Heading>
				<Text>
					Being a Nudge Coach is a flexible work-from-home
					opportunity. A Nudge Coach runs after-school activity
					classes for children. Nudge provides the exact structure and
					materials necessary for every activity class
				</Text>
			</VStack>
			<ImagesAndFeatures />
		</VStack>
	);
}
function ImagesAndFeatures() {
	const router = useRouter();

	return (
		<Stack
			direction={{
				base: "column-reverse",
				xl: "row",
			}}
			spacing="24"
			width={{ base: "100%", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			// justifyContent="space-between"
			alignItems={{ base: "center", xl: "center" }}
			justifyContent="space-between"
		>
			<Box
				h={{
					base: "320px",
					xl: "490px",
				}}
				w={{
					base: "100%",
					xl: "660px",
				}}
				// bg="pink.200"
				position="relative"
				overflowX={{ base: "clip", xl: "visible" }}
			>
				<Image
					position="absolute"
					bottom="-84px"
					left="-79px"
					src="/home/products/svg-01.svg"
					alt="svg shape"
					zIndex={-1}
					sizes={{
						base: "10px",
						xl: "100%",
					}}
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={200}
				/>
				<Image
					position="absolute"
					bottom="-107px"
					right="-157px"
					src="/home/products/svg-02.svg"
					alt="svg shape"
					zIndex={-1}
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={250}
				/>
				<Image
					position="absolute"
					top="-79px"
					right="-43px"
					src="/home/products/svg-03.svg"
					alt="svg shape"
					zIndex={-1}
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={300}
				/>
				<Image
					position="absolute"
					top="-54px"
					left="-50px"
					src="/home/products/svg-04.svg"
					alt="svg shape"
					zIndex={-1}
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={350}
				/>
				<Image
					position="absolute"
					right="16px"
					bottom="10px"
					src="/become a coach/coach-features-01.png"
					width={{
						base: 240,
						xl: 381,
					}}
					height={{
						base: 110,
						xl: 175,
					}}
					alt="an adult and a child washing a vegetable"
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={400}
				/>
				<Image
					position="absolute"
					top="-5px"
					right="16px"
					src="/become a coach/coach-features-02.png"
					width={{
						base: 298,
						xl: 473,
					}}
					height={{
						base: 185,
						xl: 294,
					}}
					alt="children sitting around a woman"
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={450}
				/>
				<Image
					position="absolute"
					bottom="40px"
					left="12px"
					src="/become a coach/coach-features-03.png"
					width={{
						base: 148,
						xl: 235,
					}}
					height={{
						base: 147,
						xl: 234,
					}}
					alt="child wearing science safety goggles"
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={500}
				/>
				<Image
					position="absolute"
					top="0px"
					left={{
						base: "10px",
						xl: "-10px",
					}}
					src="/become a coach/coach-features-04.png"
					width={{
						base: 106,
						xl: 168,
					}}
					height={{
						base: 104,
						xl: 166,
					}}
					alt="man typing on laptop"
					data-aos="fade-up"
					data-aos-easing="ease-in-out"
					data-aos-duration={1000}
					data-aos-delay={600}
				/>
			</Box>

			<VStack
				spacing="32px"
				alignItems={{ base: "center", xl: "start" }}
				width={{ base: "calc(100% - 32px)", xl: "360px" }}

				// 	data-aos="fade-up"
				// 	data-aos-easing="ease-in-out"
				// 	data-aos-duration={1000}
				// 	data-aos-delay={100}
			>
				<VStack
					spacing="32px"
					alignItems={{ base: "center", xl: "start" }}
				>
					<FeatureCard
						desc="Run activities offline in your home for neighbourhood kids, or online over Zoom for kids from across the world."
						title="Online and Offline"
						icon={RiHomeWifiLine}
					/>
					<FeatureCard
						title="Amazing Activities"
						desc="Do what you like! Choose from a vast library of 1000s of activities on life-skills, SEL, art & craft, STEM and more. "
						icon={RiOpenArmLine}
					/>
					<FeatureCard
						title="Exciting Earnings"
						desc="Earn INR 50,000 or more per month, depending on the number of activities you run every month."
						icon={RiWalletLine}
					/>
				</VStack>
				<Button
					onClick={() => {
						router.push("/apply-coach");
					}}
				>
					apply now
				</Button>
			</VStack>
		</Stack>
	);
}
function FeatureCard({
	title = "Amazing Activities",
	desc = "Do what you like! Choose from a vast library of 1000s of activities on life-skills, SEL, art & craft, STEM and more. ",
	icon = RiMailFill,
}) {
	return (
		<VStack spacing="12px" w="100%" alignItems="start">
			<Center bg="orange.50" p="12px" borderRadius="full">
				<Icon as={icon} w={5} h={5} color="orange.500" />
			</Center>
			<VStack spacing="8px" alignItems="start">
				<Text color="black" fontWeight="semibold">
					{title}
				</Text>
				<Text fontSize="16px" lineHeight="20px">
					{desc}
				</Text>
			</VStack>
		</VStack>
	);
}
export default WhatNudgeCoachesDoSection;
