import {
	Box,
	Center,
	Heading,
	Icon,
	Image,
	SimpleGrid,
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import { AiOutlineSchedule } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdVideoCameraFront } from "react-icons/md";
import { RiHomeWifiLine, RiMailFill, RiTicket2Line } from "react-icons/ri";

function HowHostingWorks() {
	return (
		<Center bg="#F9F9F9" w="100%" zIndex="-1" py="12">
			<VStack
				spacing="56px"
				py="12"
				alignItems={{ base: "center", xl: "start" }}
				width={{ base: "100%", xl: "1160px" }}
				mx={{ base: "0px", xl: "auto" }}
			>
				<VStack
					w={{ base: "calc(100% - 64px)", xl: "560px" }}
					alignItems="start"
					spacing="4"
				>
					<Heading size="md">
						How does <br />
						<Heading size="md" as="span" color="orange.500">
							Hosting
						</Heading>{" "}
						work?
					</Heading>
					<Text>
						It&apos;s simple. If you are selected as a Nudge Host,
						your house becomes a Nudge Hub, where neighbourhood
						children can now come to join different Nudge
						Activities.
					</Text>
				</VStack>
				<ImagesAndFeatures />
			</VStack>
		</Center>
	);
}
function ImagesAndFeatures() {
	return (
		<VStack
			width={{ base: "100%", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			spacing="40"
		>
			<SimpleGrid
				rows={{ base: 6, xl: 2 }}
				columns={{ base: 1, xl: 3 }}
				spacing={{ base: "32px", xl: "40px" }}
				w={{
					base: "100%",
					xl: "1160px",
				}}
			>
				<FeatureCard
					title="Hub Setup"
					desc="You will need a laptop + good internet + some space for seating a group of children. Nudge will help you with a projector, camera, mic and other accessories."
					icon={RiHomeWifiLine}
				/>
				<FeatureCard
					title="Running an Activity"
					desc="A Nudge Expert will lead the activity virtually (online). Children will see and speak with the expert using the projector + camera + mic. You as the host will be the on-ground facilitator, managing and encouraging the group, and helping out if a child gets stuck."
					icon={FaChalkboardTeacher}
				/>
				<FeatureCard
					title="Host Training"
					desc="For each activity, you will get a basic training on how to facilitate it. But don't worry - the activity will actually be led by the expert, so you only need basic familiarity with it."
					icon={MdVideoCameraFront}
				/>

				<FeatureCard
					title="Activity Scheduling"
					desc="Nudge will auto-schedule activities at your hub. All you have to do is specify your available time-slots on weekday evenings and weekends."
					icon={AiOutlineSchedule}
				/>
				<FeatureCard
					title="Parent Booking"
					desc="Parents will be able to see all upcoming activities of your hub using the Nudge App, as well as book and pay for any activity."
					icon={RiTicket2Line}
				/>
			</SimpleGrid>
			<Stack
				direction="column"
				spacing="24"
				mt="12"
				width="100%"
				alignItems={{ base: "center", xl: "center" }}
				justifyContent="space-between"
			>
				<Box
					h={{
						base: "320px",
						xl: "490px",
					}}
					w={{
						base: "100%",
						xl: "660px",
					}}
					// bg="pink.200"
					position="relative"
					overflowX={{ base: "clip", xl: "visible" }}
				>
					<Image
						position="absolute"
						bottom="-84px"
						left="-79px"
						src="/home/products/svg-01.svg"
						alt="svg shape"
						zIndex={-1}
						sizes={{
							base: "10px",
							xl: "100%",
						}}
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={200}
					/>
					<Image
						position="absolute"
						bottom="-107px"
						right="-157px"
						src="/home/products/svg-02.svg"
						alt="svg shape"
						zIndex={-1}
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={250}
					/>
					<Image
						position="absolute"
						top="-79px"
						right="-43px"
						src="/home/products/svg-03.svg"
						alt="svg shape"
						zIndex={-1}
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={300}
					/>
					<Image
						position="absolute"
						top="-54px"
						left="-50px"
						src="/home/products/svg-04.svg"
						alt="svg shape"
						zIndex={-1}
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={350}
					/>
					<Image
						position="absolute"
						right="16px"
						bottom="10px"
						src="/become a host/coach-features-01.png"
						width={{
							base: 240,
							xl: 381,
						}}
						height={{
							base: 110,
							xl: 175,
						}}
						alt="an adult and a child washing a vegetable"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={400}
					/>
					<Image
						position="absolute"
						top="-5px"
						right="16px"
						src="/become a host/coach-features-02.png"
						width={{
							base: 298,
							xl: 473,
						}}
						height={{
							base: 185,
							xl: 294,
						}}
						alt="children sitting around a woman"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={450}
					/>
					<Image
						position="absolute"
						bottom="40px"
						left="12px"
						src="/become a host/coach-features-03.png"
						width={{
							base: 148,
							xl: 235,
						}}
						height={{
							base: 147,
							xl: 234,
						}}
						alt="child wearing science safety goggles"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={500}
					/>
					<Image
						position="absolute"
						top="0px"
						left={{
							base: "10px",
							xl: "-10px",
						}}
						src="/become a host/coach-features-04.png"
						width={{
							base: 106,
							xl: 168,
						}}
						height={{
							base: 104,
							xl: 166,
						}}
						alt="man typing on laptop"
						data-aos="fade-up"
						data-aos-easing="ease-in-out"
						data-aos-duration={1000}
						data-aos-delay={600}
					/>
				</Box>
			</Stack>
		</VStack>
	);
}
function FeatureCard({
	title = "Amazing Activities",
	desc = "Do what you like! Choose from a vast library of 1000s of activities on life-skills, SEL, art & craft, STEM and more. ",
	icon = RiMailFill,
}) {
	return (
		<VStack
			spacing="12px"
			w="100%"
			alignItems="start"
			bg="#fff"
			borderRadius="24px"
			p="32px"
		>
			<Center bg="orange.50" p="12px" borderRadius="full">
				<Icon as={icon} w={5} h={5} color="orange.500" />
			</Center>
			<VStack spacing="8px" alignItems="start">
				<Text color="black" fontWeight="semibold">
					{title}
				</Text>
				<Text fontSize="16px" lineHeight="20px">
					{desc}
				</Text>
			</VStack>
		</VStack>
	);
}
export default HowHostingWorks;
