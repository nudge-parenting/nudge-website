import {
	Avatar,
	Box,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Heading,
	HStack,
	Stack,
	Text,
	useDisclosure,
	VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "../../components/general";
import NLE_Rubiks from "../../public/learning experiences/rubiks-cube.png";

function RubiksCube() {
	return (
		<VStack spacing="24px" pb="16px" w="100%" minH="1000px">
			<Image
				src={NLE_Rubiks}
				// layout="responsive"
				alt="Picture of Activity"
				w={1024}
				h={1024}
				// style={{
				// 	borderRadius: "12px",
				// }}
			/>
			<Stack
				// mx={{
				// 	base: "32px",
				// 	xl: "auto",
				// }}
				direction={{ base: "column" }}
				width={{ base: "calc(100% - 64px)", xl: "760px" }}
				justifyContent="center"
				spacing={{ base: "32px", xl: "48px" }}
				alignItems="center"
			>
				<VStack spacing="16px" alignItems="start" w="100%">
					<Heading size="md">
						Learn to Solve the Rubik&apos;s Cube
					</Heading>
					<Text size="lg">
						Ivory Court - 4, House No - 704, Essel Tower, MG Road
					</Text>
					{/* // horizontal line */}
					<Divider />
					<VStack alignItems="start" w="100%">
						<HStack w="100%">
							<VStack alignItems="start" w="100%" spacing="2px">
								<Text size="xl" color="black">
									Learning Experience Organised by Abhimanyu
								</Text>
								<Text size="lg">Hosted by Anuradha</Text>
							</VStack>
							<HStack spacing="-15px">
								<Avatar src="../coaches/abhimanyu.jpeg" />
								<Avatar src="https://avatars0.githubusercontent.com/u/52709818?s=460&u=f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8f8&v=4" />
							</HStack>
						</HStack>
					</VStack>
					<Divider />
					<VStack alignItems="start" w="100%" spacing="2px">
						<Text size="xl" color="black">
							First Session on Sunday, 14th July
						</Text>
						<Text size="sm">1.5 Hour Sessions • 3 Sessions</Text>
					</VStack>
					<Divider />
				</VStack>
				<BlogPiece
					heading="Why should I enrol in this learning experience?"
					body={
						<Text size="lg" lineHeight="26px">
							Solving the Rubik&apos;s Cube is a great way to
							improve your memory by learning a process that
							creates maximum efficiency within the motor and
							memory systems. It is a great way to improve your
							patience and problem-solving skills.
							<br />
							<br />
							When a child is solving the Rubik&apos;s Cube, they
							have to map out their steps in advance which
							strengthens their logical and spatial reasoning
							abilities. Not just this, but solving a cube can
							even help break mild addictions and help the child
							develop a better sense of gratification.
							<br />
							<br />
							The Nudge&apos;s way of learning also teaches the
							child how to collaborate with others to solve
							difficult problems. Book your slot today and allow
							your child to experience a unique way of learning
							🎉.
						</Text>
					}
				/>

				<StickyCTA />
				<Button
					onClick={() => {
						window.open(
							"https://api.whatsapp.com/send/?phone=919717308827&text=Hello+👋+I+am+here+to+sign+up+for+the+rubiks+cube+workshop&type=phone_number&app_absent=0"
						);
					}}
					w="100%"
				>
					book now
				</Button>
			</Stack>
		</VStack>
	);
}
function StickyCTA() {
	const { isOpen, onOpen, onClose } = useDisclosure();
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
						₹3000
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
						<DrawerBody>
							<Text size="md">1x High Quality Speed Cube</Text>
							<Text size="md">
								1x NudgeBook Rubik&apos;s Cube Guide
							</Text>
						</DrawerBody>
					</DrawerContent>
				</Drawer>
			</VStack>
			<Button
				onClick={() => {
					window.open(
						"https://api.whatsapp.com/send/?phone=919717308827&text=Hello+👋+I+am+here+to+sign+up+for+the+rubiks+cube+workshop&type=phone_number&app_absent=0"
					);
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
export default RubiksCube;
