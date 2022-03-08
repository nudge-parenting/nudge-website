import {
	Box,
	Button,
	Center,
	Flex,
	HStack,
	Image,
	Stack,
	Text,
	VStack,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import Project from "./Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Services = ({ onContactModalOpen }) => {
	return (
		<Box>
			<Service
				heading="iOS, Android, Web, Progressive"
				lastWord="Apps"
				desc="We design and develop all kind of web and native applications tailored to your requirements. Get your ideas out in the world with user friendly apps for iOS, Android and web!"
				imgPath="./apps.png"
			/>
			<Service
				reverse
				heading="Beautiful and Responsive"
				lastWord="Websites"
				desc="Our Designers make the most breathtaking websites and our developers turn them to reality. Get a website for desktops, mobile phones, tablets and more!"
				imgPath="./websites.png"
			/>
			<ColorBreak onContactModalOpen={onContactModalOpen} />
		</Box>
	);
};

const ColorBreak = ({ onContactModalOpen }) => {
	return (
		<Stack
			mx={{
				base: "8",
				md: "86",
				xl: "200",
				"2xl": "360",
			}}
			bg="nudgeyellow.500"
			maxW="100%"
			borderRadius="xl"
			p={["10", "20"]}
			mt={["20", "160"]}
			direction={["column", "row"]}
			spacing="5"
		>
			<Box w={["100%", "70%"]}>
				<Text
					fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "4xl" }}
					fontWeight="black"
					color="white"
					w="100%"
					lineHeight="1.05"
				>
					Quality and Speed
				</Text>
				<Text
					fontSize={{ base: "md", md: "lg", lg: "lg", xl: "lg" }}
					fontWeight="normal"
					color="white"
					w="100%"
					lineHeight="1.3"
					mt={["4", "6"]}
				>
					We are fast and complete our tasks in the least amount of
					time possible to get your website or app up and running. We
					maintain a high quality of work and deliver custom tailored
					solutions for the unique idea you have.
				</Text>
			</Box>
			<Box w={["100%", "30%"]} justifyContent="center" display="flex">
				<Button
					colorScheme="whiteAlpha"
					fontWeight="bold"
					borderRadius="3xl"
					variant="solid"
					size="lg"
					// w={["100%", "auto"]}
					onClick={onContactModalOpen}
				>
					Get in Touch
				</Button>
			</Box>
		</Stack>
	);
};
const Service = ({
	heading = "iOS, Android, Web, Progressive",
	lastWord = " Apps",
	desc = "We design and develop all kind of web and native applications tailored to your requirements. Get your ideas out in the world with user friendly apps for iOS, Android and web!",
	imgPath = "./apps.png",
	reverse = false,
}) => {
	return (
		<Stack
			mx={{
				base: "8",
				md: "86",
				xl: "200",
				"2xl": "360",
			}}
			mt={["20", "160"]}
			justifyContent="center"
			direction={["column", "row"]}
			// bg="blue.100"
		>
			<Box minW="60%" order={reverse ? ["2", "1"] : ["2", "2"]}>
				<Text
					fontSize={{ base: "2xl", md: "3xl", lg: "4xl", xl: "5xl" }}
					fontWeight="black"
					color="nudgeblack.500"
					w="100%"
					lineHeight="1.05"
				>
					{heading}{" "}
					<Text as="span" color="nudgeyellow.500">
						{lastWord}
					</Text>
				</Text>
				<Text
					fontSize={{ base: "md", md: "md", lg: "lg", xl: "xl" }}
					fontWeight="normal"
					color="lemongrey.400"
					w="100%"
					mt="5"
				>
					{desc}
				</Text>
			</Box>
			<Box
				order={reverse ? ["1", "2"] : ["1", "1"]}
				justifyContent="center"
				// display="block"
			>
				<Image
					src={imgPath}
					alt="featured-project"
					pr={reverse ? "0" : "12"}
					mb={["5", "0"]}
				/>
			</Box>
		</Stack>
	);
};

export default Services;
