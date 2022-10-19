import {
	Center,
	Heading,
	HStack,
	Icon,
	SimpleGrid,
	Text,
	VStack,
} from "@chakra-ui/react";
import {
	Ri24HoursFill,
	RiApps2Line,
	RiClipboardLine,
	RiHome7Line,
	RiMapPinUserFill,
	RiUserFollowLine,
} from "react-icons/ri";

function HowItWorksSection() {
	return (
		<VStack bg="#F9F9F9" w="100%" py="96px" spacing="48px">
			<VStack
				// w={{
				// 	base: "100%",
				// 	xl: "460px",
				// }}
				width={{ base: "calc(100% - 64px)", xl: "460px" }}
				mx={{ base: "32px", xl: "auto" }}
				spacing="16px"
				textAlign="center"
			>
				<Heading size="md" fontWeight="semibold" color="black">
					How it{" "}
					<Heading as="span" size="md" color="orange.500">
						works
					</Heading>
				</Heading>
				<Text size="md">
					Activities take place in your neighbourhood at a Nudge
					Host&apos;s centre and are organised by experts.
				</Text>
			</VStack>
			<SimpleGrid
				rows={{ base: 4, xl: 2 }}
				columns={{ base: 1, xl: 2 }}
				spacing={{ base: "32px", xl: "40px" }}
				// w={{
				// 	base: "100%",
				// 	xl: "760px",
				// }}
				width={{ base: "calc(100% - 64px)", xl: "760px" }}
				mx={{ base: "32px", xl: "auto" }}
			>
				<HowCard
					icon={RiHome7Line}
					heading="Find your Nudge Host"
					description="You use the Nudge app to find your nearest Nudge Camp - a trained person will run exciting activities here (centre)"
				/>
				<HowCard
					icon={RiApps2Line}
					heading="Track upcoming activities"
					description="You keep a track of upcoming activities relevant for your child, which last from 2 to 4 hours and are very varied - from radio-building to gratitude journaling to human evolution to even 3D printing!"
				/>
				<HowCard
					icon={RiClipboardLine}
					heading="Sign-up and pay"
					description="You sign up and pay for upcoming activities that you want your child to join. Activities are scheduled on weekends or post-school on weekdays."
				/>
				<HowCard
					icon={RiUserFollowLine}
					heading="Child joins the experience"
					description="Your child joins the activity at the Nudge Camp with a small group of other children. Along with the Host, a Nudge Expert will be present in-person to guide the group."
				/>
			</SimpleGrid>
		</VStack>
	);
}

function HowCard({ icon = Ri24HoursFill, heading, description }) {
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

export default HowItWorksSection;
