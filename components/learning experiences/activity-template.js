import {
	Avatar,
	Divider,
	Heading,
	HStack,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "../../components/general";
import NLE_Rubiks from "../../public/learning experiences/rubiks-cube.png";

import {
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	useDisclosure,
} from "@chakra-ui/react";

function Template({
	activityImage = NLE_Rubiks,
	activityName = "Learn to Solve the Rubik's Cube",
	activityAddress = "Ivory Court - 4, House No - 704, Essel Tower, MG Road",
	activityDescription = () => {
		return (
			<Text size="lg" lineHeight="26px">
				Solving the Rubik&apos;s Cube is a great way to improve your
				memory by learning a process that creates maximum efficiency
				within the motor and memory systems. It is a great way to
				improve your patience and problem-solving skills.
				<br />
				<br />
				When a child is solving the Rubik&apos;s Cube, they have to map
				out their steps in advance which strengthens their logical and
				spatial reasoning abilities. Not just this, but solving a cube
				can even help break mild addictions and help the child develop a
				better sense of gratification.
				<br />
				<br />
				The Nudge&apos;s way of learning also teaches the child how to
				collaborate with others to solve difficult problems. Book your
				slot today and allow your child to experience a unique way of
				learning 🎉.
			</Text>
		);
	},
	activityExpert = "Abhimanyu",
	activityHost = "Pooja",
	expertImage = () => <Avatar src="../coaches/abhimanyu.jpeg" />,
	hostImage = () => <Avatar src="../coaches/abhimanyu.jpeg" />,
	activityPrice = 2000,
	activityDate = "Sunday, 14th July",
	activityDuration = "10 hours",
	activityTakeHomeItems = [
		"1x High Quality Speed Cube",
		"1x NudgeBook Rubik&apos;s Cube Guide",
	],
	razorpayLink = "https://rzp.io/l/rtZb9fY5E",
}) {
	// const whatsappMessage = `Hello+👋+I+am+here+to+sign+up+for+the+"${activityName}"+activity+happening+at+${activityAddress}+(${activityDate})`;
	return (
		<VStack spacing="24px" pb="16px" w="100%" minH="1000px">
			<Image
				src={activityImage}
				alt="Picture of Activity"
				w={1024}
				h={1024}
			/>
			<Stack
				direction={{ base: "column" }}
				width={{ base: "calc(100% - 64px)", xl: "760px" }}
				justifyContent="center"
				spacing={{ base: "32px", xl: "48px" }}
				alignItems="center"
			>
				<VStack spacing="16px" alignItems="start" w="100%">
					<Heading size="md">{activityName}</Heading>
					<Text size="lg">{activityAddress}</Text>
					<Divider />
					<VStack alignItems="start" w="100%">
						<HStack w="100%">
							<VStack alignItems="start" w="100%" spacing="2px">
								<Text size="xl" color="black">
									Activity Led by {activityExpert}
								</Text>
								<Text size="lg">
									Facilitated by {activityHost}
								</Text>
							</VStack>
							<HStack spacing="-10px">
								{expertImage()}
								{hostImage()}
							</HStack>
						</HStack>
					</VStack>
					<Divider />
					<VStack alignItems="start" w="100%" spacing="2px">
						<Text size="xl" color="black">
							Activity on {activityDate}
						</Text>
						<Text size="sm">{activityDuration} Session</Text>
					</VStack>
					<Divider />
				</VStack>
				<BlogPiece
					heading="Why should I enrol in this learning experience?"
					body={activityDescription()}
				/>

				<StickyCTA
					activityPrice={activityPrice}
					takeHomeItems={activityTakeHomeItems}
					razorpayLink={razorpayLink}
				/>
				<Button
					onClick={() => {
						window.open(razorpayLink);
					}}
					w="100%"
				>
					book now
				</Button>
			</Stack>
		</VStack>
	);
}

function StickyCTA({ activityPrice, takeHomeItems, razorpayLink }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	//for each take home item, add a new <Text> component
	const takeHomeItemsList = takeHomeItems.map((item, i) => {
		return (
			<Text key={i} size="md">
				{item}
			</Text>
		);
	});

	return (
		<HStack
			justifyContent="space-between"
			px="32px"
			w="100%"
			position="fixed"
			bottom="0px"
			zIndex="100"
			bg="white"
			py="12px"
			borderTop="1px"
			borderColor="gray.100"
		>
			<VStack alignItems="start" spacing="-1px">
				<HStack justifyContent="space-around" spacing={"4px"}>
					<Text size="md" color="black" fontWeight="semibold">
						₹{activityPrice}
					</Text>
					<Text size="md">/student</Text>
				</HStack>
				<Text fontSize="12px" textDecor="underline" onClick={onOpen}>
					What does this include?
				</Text>
				<Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
					<DrawerOverlay />
					<DrawerContent pb="12px">
						<DrawerHeader borderBottomWidth="1px">
							Workshop Items
						</DrawerHeader>
						<DrawerBody>{takeHomeItemsList}</DrawerBody>
					</DrawerContent>
				</Drawer>
			</VStack>
			<Button
				onClick={() => {
					window.open(razorpayLink);
				}}
			>
				book now
			</Button>
		</HStack>
	);
}
function BlogPiece({ heading, body }) {
	return (
		<VStack spacing="16px" alignItems="start">
			<Heading size="sm">{heading}</Heading>
			{body}
		</VStack>
	);
}
export default Template;
