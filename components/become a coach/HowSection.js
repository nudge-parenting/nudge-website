import { Center, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../general";

function HowSection() {
	const router = useRouter();
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="60px"
		>
			<VStack
				textAlign="center"
				spacing="16px"
				w={{
					base: "100%",
					xl: "760px",
				}}
			>
				<Heading>
					How can I become a
					<Heading color="orange.500">Nudge Host?</Heading>
				</Heading>
				<Text>
					If you are good with children, and passionate about doing
					impactful work, you should consider applying. We will take
					you step-by-step through a friendly selection and training
					process.
				</Text>
				<Center pt="16px">
					<Button
						onClick={() => {
							router.push("/apply-coach");
						}}
					>
						apply now
					</Button>
				</Center>
			</VStack>
			<StepsAndImage />
		</VStack>
	);
}

function StepsAndImage() {
	return (
		<Stack
			spacing="104px"
			direction={{
				base: "column",
				xl: "row",
			}}
			w={{
				base: "100%",
				xl: "1160px",
			}}
			justifyContent="space-between"
			// bg="pink.100"
			alignItems="start"
		>
			<VStack
				spacing="32px"
				alignItems="start"
				pl={{
					base: 0,
					xl: "220px",
				}}
			>
				<StepCard
					stepNum={1}
					heading="Apply to become a coach"
					description="Apply by filling out a simple form."
				/>
				<StepCard
					stepNum={2}
					heading="Video Conversation"
					description="We will connect with you over a Zoom call to understand your background and interests, and explain the opportunity to you."
				/>
				<StepCard
					stepNum={3}
					heading="Training & Certification"
					description="If we mutually decide to go ahead, we will take you through a two-week training and certification process around running various Nudge activities."
				/>
				<StepCard
					stepNum={4}
					heading="Get started"
					description="That's it. You are ready to run your first activity as a Nudge Host!"
				/>
			</VStack>
			<Image
				src="./become a coach/steps.png"
				alt="painting of adult and child on concrete sidewalk"
				w={{ base: "100%", xl: 506 }}
				h={{ base: "auto", xl: 610 }}
				position="relative"
				top="-24px"
			/>
		</Stack>
	);
}

function StepCard({
	stepNum = 1,
	heading = "Apply to become a coach",
	description = "Apply by filling out a simple form.",
}) {
	return (
		<VStack spacing="16px" alignItems="start" justifyContent="start">
			<Center bg="orange.500" p="8px" borderRadius="full">
				<Text
					size="md"
					fontSize="semibold"
					color="white"
					h="18px"
					w="18px"
					textAlign="center"
				>
					{stepNum}
				</Text>
			</Center>
			<VStack spacing="8px" alignItems="start">
				<Text size="lg" fontWeight="semibold" color="black">
					{heading}
				</Text>
				<Text size="md">{description}</Text>
			</VStack>
		</VStack>
	);
}
export default HowSection;
