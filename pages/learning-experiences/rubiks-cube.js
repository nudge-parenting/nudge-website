import { Box, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Button } from "../../components/general";
import NLE_Rubiks from "../../public/learning experiences/rubiks-cube.png";

function RubiksCube() {
	return (
		<VStack spacing="48px" py="32px" w="100%" minH="1000px">
			<Stack
				mx={{
					base: "32px",
					xl: "auto",
				}}
				direction={{ base: "column" }}
				width={{ base: "calc(100%-64px)", xl: "1160px" }}
				justifyContent="center"
				spacing={{ base: "32px", xl: "140px" }}
				alignItems="center"
				pb="48px"
			>
				<Image
					src={NLE_Rubiks}
					// layout="responsive"
					alt="Picture of Activity"
					w={1024}
					h={1024}
					style={{
						borderRadius: "12px",
					}}
				/>
				<Button
					onClick={() => {
						// router.push("/apply-coach");
						window.open(
							"https://api.whatsapp.com/send/?phone=919717308827&text=Hello+👋+I+am+here+to+sign+up+for+the+rubiks+cube+workshop&type=phone_number&app_absent=0"
						);
					}}
					w="100%"
					// w="calc(100% - 32px)"
					// position="fixed"
					// bottom="74px"
					// zIndex="100"
				>
					apply now
				</Button>
				<VStack spacing="16px">
					<Heading size="md">
						Learn to solve the Rubik&apos;s Cube!
					</Heading>
					<Text size="lg" lineHeight="26px">
						The Rubik&apos;s Cube is a 3x3x3 cube that is used to
						solve many puzzles. Hi Parents! Nudge (nudgeverse.com)
						is organizing a 3-session &quot;Learn to Solve the
						Rubik&apos;s Cube&quot; workshop at my place, B-345
						Bestech PVSN Sec 47, with the first session on Sunday
						14th July. This Nudge Learning Experience will help your
						child:
					</Text>
				</VStack>
				<BlogPiece
					heading="Why enrol your child in this workshop?"
					body="The Rubik's Cube is a 3x3x3 cube that is used to solve many puzzles. Hi Parents! Nudge (nudgeverse.com) is organizing a 3-session &quot;Learn to Solve the Rubik's Cube&quot; workshop at my place, B-345 Bestech PVSN Sec 47, with the first session on Sunday 14th July. This Nudge Learning Experience will help your child:"
				/>
				<BlogPiece
					heading="Why enrol your child in this workshop?"
					body="The Rubik's Cube is a 3x3x3 cube that is used to solve many puzzles. Hi Parents! Nudge (nudgeverse.com) is organizing a 3-session &quot;Learn to Solve the Rubik's Cube&quot; workshop at my place, B-345 Bestech PVSN Sec 47, with the first session on Sunday 14th July. This Nudge Learning Experience will help your child:"
				/>
				<Button
					onClick={() => {
						// router.push("/apply-coach");
						window.open(
							"https://api.whatsapp.com/send/?phone=919717308827&text=Hello+👋+I+am+here+to+sign+up+for+the+rubiks+cube+workshop&type=phone_number&app_absent=0"
						);
					}}
					w="100%"
					// w="calc(100% - 32px)"
					// position="fixed"
					// bottom="74px"
					// zIndex="100"
				>
					apply now
				</Button>
			</Stack>
		</VStack>
	);
}

function BlogPiece({ heading, body }) {
	return (
		<VStack spacing="16px">
			<Heading size="md">{heading}</Heading>
			<Text size="lg" lineHeight="26px">
				{body}
			</Text>
		</VStack>
	);
}
export default RubiksCube;
