import {
	Center,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { MdHeadsetMic } from "react-icons/md";
import {
	Ri24HoursFill,
	RiFlashlightFill,
	RiSurveyFill,
	RiTeamFill,
	RiWallet3Fill,
} from "react-icons/ri";
import { Button } from "../general";

function PerksSection() {
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="48px"
			bg="#F5F5F5"
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
					Why should I become a
					<Heading color="orange.500">Nudge Coach?</Heading>
				</Heading>
				<Text>
					Becoming a Nudge Coach is one of the most exciting
					work-from-home opportunities in the post-pandemic world,
					when parents are looking more than ever for high-quality
					after-school engagement for their children.
				</Text>
				<Center pt="16px">
					<Button>apply now</Button>
				</Center>
			</VStack>
			<PerksGrid />
		</VStack>
	);
}

function PerksGrid() {
	return (
		<SimpleGrid
			rows={{ base: 6, xl: 2 }}
			columns={{ base: 1, xl: 3 }}
			spacing={{ base: "32px", xl: "40px" }}
			w={{
				base: "100%",
				xl: "1160px",
			}}
		>
			<PerkCard
				icon={Ri24HoursFill}
				heading="Online Flexible opportunity Offline"
				description="Choose your own hours, format (online, offline or both) and activities."
			/>
			<PerkCard
				icon={MdHeadsetMic}
				heading="Complete support"
				description="End-to-end guidance and materials for running your activities."
			/>
			<PerkCard
				icon={RiSurveyFill}
				heading="Easy Registrations"
				description="Nudge gives all the tools to collect and manage your registrations end-to-end."
			/>
			<PerkCard
				icon={RiFlashlightFill}
				heading="Engaging work"
				description="You will have a lot of fun running Nudge's super-engaging activities."
			/>
			<PerkCard
				icon={RiWallet3Fill}
				heading="Income Potential"
				description="Just a few hours of home-based work everyday can get you a full-time income."
			/>
			<PerkCard
				icon={RiTeamFill}
				heading="Community"
				description="Become a part of a thriving intellectual community of Nudge coaches."
			/>
		</SimpleGrid>
	);
}

function PerkCard({ icon = Ri24HoursFill, heading, description }) {
	return (
		<HStack
			bg="#fff"
			borderRadius="24px"
			p="32px"
			spacing="20px"
			alignItems="start"
			justifyContent="start"
		>
			<Center bg="orange.50" p="8px" borderRadius="full">
				<Icon as={icon} w={6} h={6} color="orange.500" />
			</Center>
			<VStack spacing="8px" alignItems="start">
				<Text size="lg" fontWeight="semibold" color="black">
					{heading}
				</Text>
				<Text size="md">{description}</Text>
			</VStack>
		</HStack>
	);
}

export default PerksSection;
