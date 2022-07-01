import {
	Box,
	Center,
	Heading,
	HStack,
	Icon,
	Stack,
	Text,
	VStack,
	Image,
	Fade,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiAddFill, RiSubtractFill } from "react-icons/ri";

function EarningPotentialSection() {
	const [numStudents, setNumStudents] = useState(6);
	const [numActivities, setNumActivities] = useState(10);
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
				spacing="32px"
				w={{
					base: "100%",
					xl: "760px",
				}}
			>
				<VStack textAlign="center" spacing="16px">
					<Heading>
						My{" "}
						<Heading as="span" color="orange.500">
							Earning Potential <br />
						</Heading>{" "}
						as a Nudge Coach
					</Heading>
					<Text>
						Your earning potential depends upon the number of
						activities you run every month, and the attendees in
						these activities.
					</Text>
				</VStack>
				<Stack
					direction={{
						base: "column",
						xl: "row",
					}}
					spacing={{
						base: "24px",
						xl: "32px",
					}}
				>
					<HStack spacing="12px">
						<IconButton
							icon={RiSubtractFill}
							onClick={() =>
								numStudents == 2
									? null
									: setNumStudents(numStudents - 1)
							}
						/>
						<Text>
							<Text as="span" fontWeight="medium" color="black">
								{numStudents} students
							</Text>
							/activity
						</Text>
						<IconButton
							icon={RiAddFill}
							onClick={() =>
								numStudents == 10
									? null
									: setNumStudents(numStudents + 1)
							}
						/>
					</HStack>
					<HStack spacing="12px">
						<IconButton
							icon={RiSubtractFill}
							onClick={() =>
								numActivities == 1
									? null
									: setNumActivities(numActivities - 1)
							}
						/>
						<Text>
							<Text as="span" fontWeight="medium" color="black">
								{numActivities} activities
							</Text>
							/month
						</Text>
						<IconButton
							icon={RiAddFill}
							onClick={() =>
								numActivities == 15
									? null
									: setNumActivities(numActivities + 1)
							}
						/>
					</HStack>
				</Stack>
			</VStack>
			<Stack
				direction={{
					base: "column",
					xl: "row",
				}}
				spacing="40px"
				w={{
					base: "100%",
					xl: "auto",
				}}
			>
				<BigNumberCard
					isHighlight
					description="As a Nudge Coach you earn"
					number={"₹" + numStudents * numActivities * 600}
					suffix="/month"
				/>
				<BigNumberCard
					description={`With ${numStudents} students per activity, you earn`}
					number={"₹" + numStudents * 600}
					suffix="/activity"
				/>
				<BigNumberCard
					description="Assuming you can take"
					number={numActivities}
					suffix="activities/month"
				/>
			</Stack>
			<Image
				src="./become a coach/earning-image.png"
				alt="adult woman walking besides a child on a bridge"
			/>
		</VStack>
	);
}

function IconButton({ icon = RiAddFill, onClick }) {
	return (
		<Center
			p="4px"
			borderRadius="full"
			bg="orange.50"
			_hover={{
				backgroundColor: "orange.100",
				cursor: "pointer",
			}}
			onClick={onClick}
			_active={{
				backgroundColor: "orange.200",
				transform: "scale(0.98)",
			}}
		>
			<Icon as={icon} w={4} h={4} color="orange.700" />
		</Center>
	);
}

function BigNumberCard({
	number = "₹50,000",
	suffix = "/month",
	description = "With 5 students you earn",
	isHighlight = false,
}) {
	return (
		<VStack
			w={{
				base: "100%",
				xl: "360px",
			}}
			alignItems="center"
			justifyContent="center"
			bg="#F5F5F5"
			borderRadius="12px"
			spacing="12px"
			py="32px"
		>
			<Text>{description}</Text>
			<HStack alignItems="baseline">
				<Heading
					color={isHighlight ? "orange.500" : "black"}
					fontSize="48px"
					lineHeight="52px"
				>
					{number}
				</Heading>
				<Text color={isHighlight ? "orange.500" : "auto"}>
					{suffix}
				</Text>
			</HStack>
		</VStack>
	);
}
export default EarningPotentialSection;
