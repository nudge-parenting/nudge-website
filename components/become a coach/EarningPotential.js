import { Heading, Text, VStack } from "@chakra-ui/react";
import { Button } from "../general";

function WhatActivitiesSection() {
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="12"
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
				<Button>apply now</Button>
			</VStack>
		</VStack>
	);
}

export default WhatActivitiesSection;
