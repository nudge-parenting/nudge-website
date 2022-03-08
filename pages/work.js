import {
	Text,
	Box,
	Square,
	Image,
	ScaleFade,
	Stack,
	VStack,
	Center,
	SimpleGrid,
	Button,
	HStack,
	Wrap,
} from "@chakra-ui/react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import LemonVStack from "../components/LemonVStack";
import { useDisclosure, Input } from "@chakra-ui/react";

const Work = () => {
	// const work = [
	// 	{ title: "Tweek", imagePath: "./work/tweek.png" },
	// 	{ title: "AurigaCare", imagePath: "./work/auriga-care.png" },
	// ];
	// const workTiles = work.map((work, index) => {
	// 	<WorkTile imgPath={work.imagePath} title={work.title} key={index} />;
	// });
	return (
		<ScaleFade in>
			<Center>
				<LemonVStack>
					<Text
						fontSize={{
							base: "md",
							md: "sm",
							lg: "sm",
						}}
						fontWeight="bold"
						color="lemongrey.200"
						w="100%"
						textAlign="center"
						letterSpacing="widest"
						mt={{
							base: "5",
							"2xl": "16",
						}}
					>
						PAST PROJECTS
					</Text>
					<Text
						fontSize={{
							base: "4xl",
							md: "5xl",
							lg: "6xl",
							xl: "7xl",
						}}
						fontWeight="black"
						color="nudgeblack.500"
						w="100%"
						textAlign="center"
						lineHeight="1.05"
					>
						Your{" "}
						<Text as="span" color="nudgeyellow.500">
							Idea{" "}
						</Text>
						Could be here!
					</Text>
					<Text
						fontSize={{
							base: "md",
							md: "md",
							lg: "lg",
							xl: "xl",
						}}
						fontWeight="normal"
						color="lemongrey.200"
						w="100%"
						textAlign="center"
					>
						Have a glance at these past projects we have worked on.
						Most of our work revolves around designing websites,
						apps and them taking them live. We also help startups
						design the UX for their digital products
					</Text>

					<SimpleGrid
						columns={[1, 1, 2]}
						spacing={{ base: 0, md: 0, lg: 8, xl: 8 }}
					>
						<WorkTile
							imgPath="./work/linkplus.png"
							title="LinkPlusAI"
							description="This project aimed at developing a mobile app for android and ios devices which would help customers improve their linkedin profile. Designed and Deployed in 4 weeks, the app analyses users linkedin profile, finds unfilled fields, calculates profile scores, sales indices, leaderboard ranks and much more! Download the app today to have a first hand experience!"
							android="https://play.google.com/store/apps/details?id=com.linkplusai.linkplusai"
							ios="https://apps.apple.com/us/app/link-ai/id1581076809"
						/>
						<WorkTile
							imgPath="./work/trend.png"
							title="Trend Laminates"
							description="We redesigned the existing website for the brand TrendPVC to generate a fresh look for the company selling premium quality laminates."
							web="https://trendpvc.com"
						/>

						<WorkTile
							imgPath="./work/tweek.png"
							title="Tweek Labs"
							description="This project aimed at designing and
							developing two native mobile applications.
							One for the coaches in cricket acadmies and
							another for the athletes in those academies. Another significant hurdle to overcome was
							to present complicated biomechanical
							concepts in laymans terms"
							caseStudy="https://www.abhimanyujha.me/PDF/tweeklabs.pdf"
						/>
						<WorkTile
							imgPath="./work/auriga-care.png"
							title="Auriga Care"
							description="Designed the UI elements and the UX for a telemedicine ecosystem 'AurigaCare'. Designed 3 applications for three stakeholders namely Doctors, Patients and Testing Parties."
						/>

						<WorkTile
							imgPath="./work/hostel.png"
							title="Rent Management App"
							description="Mobile App created for iOS and Android devices for PG hostels, with a visitor management, rent mangement, room allocation and much more."
						/>
						<WorkTile
							imgPath="./work/brze.png"
							title="BRZE Community Forum"
							description="Designed a Flarum forum for BRZE Singapore to create a community platform for people to discuss about their automobiles."
							web="https://ask.brze.sg"
						/>
						<WorkTile
							imgPath="./work/sewahub.png"
							title="SewaHub"
							description="SewaHub is a community platform for residential societies in India. SewaHub breaks the barriers and overcomes hurdles between residents and their Residents Welfare Associations (RWAs), improving residential spaces' quality of life.
							Get live announcements, upcoming events, register/track complaints, put your upcoming local business in the spotlight and even make RWA payments!
							Contact us to sign up your Society on our platform and gain from all of our free features!"
							android="https://play.google.com/store/apps/details?id=com.lemon8.sewahub"
						/>

						<WorkTile
							imgPath="./work/spiritual-app.png"
							title="Spiritual App"
							description="Created an app for the spiritual community "
						/>
					</SimpleGrid>
				</LemonVStack>
			</Center>
		</ScaleFade>
	);
};
const WorkTile = ({
	title,
	description,
	imgPath,
	android = false,
	ios = false,
	web = false,
	caseStudy = false,
}) => {
	const {
		isOpen: isContactModalOpen,
		onOpen: onContactModalOpen,
		onClose: onContactModalClose,
	} = useDisclosure();
	return (
		<>
			<WorkModal
				isContactModalOpen={isContactModalOpen}
				onContactModalClose={onContactModalClose}
				imgPath={imgPath}
				title={title}
				description={description}
				android={android}
				ios={ios}
				web={web}
				caseStudy={caseStudy}
			/>
			<Box
				// mx={["0", "5"]}
				_hover={{
					opacity: 0.5,
				}}
				style={{
					transition: "all 0.5s",
					cursor: "pointer",
				}}
				p="2"
				onClick={onContactModalOpen}
			>
				<Image
					src={imgPath}
					alt="featured-project"
					borderRadius="lg"
					boxShadow="sm"
				/>
			</Box>
		</>
	);
};
const WorkModal = ({
	isContactModalOpen,
	onContactModalClose,
	imgPath,
	title,
	description,
	caseStudy = false,
	android = true,
	ios = true,
	web = false,
}) => {
	return (
		<Modal
			isCentered
			isOpen={isContactModalOpen}
			onClose={onContactModalClose}
			size="xl"
			scrollBehavior="inside"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalCloseButton />
				<ModalBody p="0">
					{/* <Text>HELLO WORLD</Text> */}
					<Stack direction={["column", "column"]}>
						<VStack
							w={["100%", "100%", "100%"]}
							// bg="green.100"
							// px={["2", "2", "10"]}
							// py={["8", "8", "16"]}
						>
							<Image
								src={imgPath}
								alt=""
								w="100%"
								fit="scale-down"
								borderTopLeftRadius="md"
								borderTopRightRadius="md"
							/>
						</VStack>
						<VStack
							w={["100%", "100%", "100%"]}
							// bg="blue.100"
							h="100%"
							pt={["3", "3", "3"]}
							pb="10"
							px="10"
							spacing="4"
							// borderLeft={["0px", "0px", "2px"]}
							// borderColor={[
							// 	"transparent",
							// 	"transparent",
							// 	"gray.100",
							// ]}
						>
							<Text
								fontSize="4xl"
								fontWeight="bold"
								lineHeight="1.1"
								mb="3"
								w="100%"
							>
								{title}
							</Text>
							<VStack w="100%">
								{caseStudy && (
									<Button
										size="md"
										variant="outline"
										colorScheme="blackAlpha"
										w="100%"
										onClick={() => window.open(caseStudy)}
									>
										CASE STUDY
									</Button>
								)}
								{android && (
									<Button
										size="md"
										variant="outline"
										colorScheme="blackAlpha"
										w="100%"
										onClick={() => window.open(android)}
									>
										PLAYSTORE
									</Button>
								)}
								{ios && (
									<Button
										size="md"
										variant="outline"
										colorScheme="blackAlpha"
										w="100%"
										onClick={() => window.open(ios)}
									>
										APPSTORE
									</Button>
								)}
								{web && (
									<Button
										size="md"
										variant="outline"
										colorScheme="blackAlpha"
										w="100%"
										onClick={() => window.open(web)}
									>
										WEBSITE
									</Button>
								)}
							</VStack>
							<Box>
								<Text
									fontSize="sm"
									fontWeight="medium"
									w="100%"
									color="lemongrey.200"
								>
									DESCRIPTION
								</Text>
								<Text fontSize="md" fontWeight="normal" mt="3">
									{description}
								</Text>
							</Box>
							{/* <Box>
								<Text
									fontSize="sm"
									fontWeight="medium"
									w="100%"
									color="lemongrey.200"
								>
									PROJECT LINKS
								</Text>
								<Text fontSize="md" fontWeight="normal" mt="3">
									{description}
								</Text>
							</Box> */}
						</VStack>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default Work;
