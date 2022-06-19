import {
	Box,
	Heading,
	Stack,
	Text,
	VStack,
	Image,
	HStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../general";

function ParentingServicesSection() {
	const router = useRouter();

	return (
		<Stack
			direction={{
				base: "column-reverse",
				xl: "row-reverse",
			}}
			spacing="12"
			width={{ base: "calc(100% - 32px)", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			py="12"
			alignItems={{ base: "left", xl: "center" }}
			justifyContent="space-between"
		>
			<Image
				src="./home/parenting-services.png"
				alt="parenting services photo"
				w={{ base: "100%", xl: 460 }}
				h={{ base: "auto", xl: 527 }}
			/>

			<VStack
				spacing="24px"
				alignItems={{ base: "start", xl: "start" }}
				width={{ base: "100%", xl: "560px" }}
				textAlign={{ base: "left", xl: "left" }}
			>
				<VStack
					spacing="16px"
					alignItems={{ base: "start", xl: "start" }}
				>
					<Text fontWeight="medium">Parenting Guidance</Text>
					<Heading size="md">
						Need advice on a specific parenting issue?
					</Heading>
					<Heading size="sm">
						Want to know what the parent word-of-mouth is about some
						product or service?
					</Heading>
					<Text>
						Nudge solves this too! Nudge brings you the highest
						quality of parenting guidance from experts and other
						parents.
					</Text>
				</VStack>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
				<VStack spacing="12px" alignItems="start">
					<ListItem content="Tips Techniques" />
					<ListItem content="Questions and Answers" />
					<ListItem content="Reviews" />
				</VStack>
			</VStack>
		</Stack>
	);
}

export default ParentingServicesSection;

function ListItem({ content }) {
	return (
		<HStack spacing="12px">
			<Image
				src="./home/ri-checkbox-circle-fill.svg"
				alt="check-circle"
			/>
			<Text
				fontSize="16"
				lineHeight="20px"
				fontWeight="semibold"
				color="black"
			>
				{content}
			</Text>
		</HStack>
	);
}
