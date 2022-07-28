import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";

function Error() {
	return (
		<Center spacing="48px" w="100%" minH="85vh">
			<VStack spacing="4">
				<Heading as="h1" size="xl">
					Nothing to see here! 💤
				</Heading>
				<Text fontSize="lg">
					Here&apos;s a{" "}
					<Text as="span" textDecoration="underline">
						<Link href="/">link</Link>
					</Text>{" "}
					to nudge you back to safety
				</Text>
			</VStack>
		</Center>
	);
}

export default Error;
