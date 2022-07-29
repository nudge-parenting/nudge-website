import { Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../general";

function BacCTA() {
	const router = useRouter();
	return (
		<Stack
			direction={{
				base: "column",
				xl: "row",
			}}
			mx={{
				base: "32px",
				xl: "auto",
			}}
			justifyContent="center"
			alignItems="center"
		>
			<VStack
				spacing="32px"
				w={{
					base: "calc(100% - 64px)",
					xl: "460px",
				}}
				alignItems={{
					base: "center",
					xl: "start",
				}}
			>
				<VStack spacing="16px">
					<Heading size="md">Become a Host Today</Heading>
					<Text>
						Being a Nudge Host is a flexible work-from-home
						opportunity. A Nudge Host facilitates after-school
						activity classes for children. Nudge provides the exact
						structure and materials necessary for every activity
						class
					</Text>
				</VStack>
				<Button
					onClick={() => {
						router.push("/apply-host");
					}}
				>
					apply now
				</Button>
			</VStack>
			<Image
				src="./become a coach/bac-cta.png"
				w={{
					base: "100%",
					xl: "674px",
				}}
				h={{
					base: "auto",
					xl: "545px",
				}}
				alt="adult man with child"
			/>
		</Stack>
	);
}

export default BacCTA;
