import {
	Center,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdHeadsetMic } from "react-icons/md";
import {
	Ri24HoursFill,
	RiFlashlightFill,
	RiSmartphoneFill,
	RiSurveyFill,
	RiTeamFill,
	RiWallet3Fill,
} from "react-icons/ri";
import { Button } from "../general";

function PerksSection() {
	const router = useRouter();
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="48px"
			bg="#F9F9F9"
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
					<Heading color="orange.500">Nudge Host?</Heading>
				</Heading>
				<Text>
					In the post-COVID world, most parents are looking for
					offline engagement options for their children. As a Nudge
					Host, you will be able to tap into this immense demand.
				</Text>
				<Center pt="16px">
					<Button
						onClick={() => {
							router.push("/apply-host");
						}}
					>
						apply now
					</Button>
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
				icon={FaChalkboardTeacher}
				heading="Easy"
				description="An expert will run each activity - your role is to facilitate it."
			/>
			<PerkCard
				icon={Ri24HoursFill}
				heading="Flexible"
				description="Activities are scheduled only in your available time-slots."
			/>
			<PerkCard
				icon={RiFlashlightFill}
				heading="Engaging"
				description="You will have a lot of fun helping children do our activities."
			/>
			<PerkCard
				icon={RiSmartphoneFill}
				heading="Seamless"
				description="Parents will book and pay for activities using the app."
			/>
			<PerkCard
				icon={RiWallet3Fill}
				heading="Lucrative"
				description="You can get to a full-time income in a few months."
			/>
			<PerkCard
				icon={RiTeamFill}
				heading="Community"
				description="You become a part of our tight-knit host community"
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
