import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

function BecomeACoach() {
	return (
		<Center spacing="48px" w="100%" minH="85vh">
			<VStack spacing="4">
				<Heading as="h1" size="xl">
					Nothing to see here! 💤
				</Heading>
				<Text fontSize="lg">
					You might be looking for the{" "}
					<Text as="span" textDecoration="underline">
						<Link href="/become-a-host">become a host</Link>
					</Text>{" "}
					page
				</Text>
			</VStack>
		</Center>
	);
}

export default BecomeACoach;
