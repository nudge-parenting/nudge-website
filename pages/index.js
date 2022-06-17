import {
	Box,
	Heading,
	HStack,
	Image,
	Stack,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "../components/General/Button";
import LandingImages from "../components/Home/LandingImages";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MotionBox = motion(Box);

export default function Home({}) {
	return (
		<VStack spacing="48px" w="100%">
			<HeroSection />
			<MissionSection />
			<ActivitiesSection />
		</VStack>
	);
}

function ActivitiesSection() {
	const router = useRouter();
	const swiperSlideStyle = {
		display: "flex",
		justifyContent: "center",
	};
	const spaceBetween = useBreakpointValue({ base: 16, xl: 8 });
	const slidesPerView = useBreakpointValue({ base: 1, xl: 3 });
	return (
		<VStack
			spacing="12"
			width={{ base: "calc(100% - 32px)", xl: "760px" }}
			mx={{ base: "0px", xl: "auto" }}
			justifyContent="center"
			py="12"
			alignItems="center"
		>
			<VStack spacing="24px">
				<VStack spacing="16px" alignItems="center" textAlign="center">
					<Heading size="md">
						Want your child to be constructively engaged?
					</Heading>
					<Heading size="sm">
						Tired of searching for hobby classes?
					</Heading>
					<Text>
						Nudge solves it all. Paid classes, or free groups.
						Online over Zoom, or offline in your neighbourhood. From
						STEM to SEL & Art to Artificial Intelligence. Nudge
						brings you the world&apos;s best ecosystem of
						after-school classes and groups for your child.
					</Text>
				</VStack>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
			</VStack>
			<Swiper
				modules={[Autoplay]}
				spaceBetween={spaceBetween}
				autoplay={{
					delay: useBreakpointValue({ base: 1000, xl: 1 }),
					disableOnInteraction: false,
				}}
				loop={true}
				slidesPerView={slidesPerView}
				direction="horizontal"
				style={{
					width: "100%",
				}}
				speed={useBreakpointValue({ base: 500, xl: 3000 })}
				grabCursor={true}
			>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-03.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-03.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-03.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
			</Swiper>
		</VStack>
	);
}
function MissionSection() {
	return (
		<Stack
			direction={{ base: "column-reverse", xl: "row" }}
			width={{ base: "calc(100% - 32px)", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			spacing="50px"
			justifyContent="center"
			py="12"
			alignItems="center"
		>
			<VStack
				spacing={{ base: "96px", xl: "48px" }}
				alignItems="start"
				w={{ base: "100%", xl: "560px" }}
			>
				<VStack spacing="16px" alignItems="start">
					<Text fontWeight="medium">The Nudge Mission</Text>
					<Heading size="md">
						Empower you the parent to nudge free the genius inside
						your child
					</Heading>
					<Text>
						Parenting is the most powerful job in the world. I want
						Nudge to become every parent&apos;s best friend and ally
						in this job of shaping their child&apos;s unique genius.
					</Text>
				</VStack>
				<VStack alignItems="start" spacing="4px">
					<Text size="md" fontWeight="semibold">
						Pooja Pande
					</Text>
					<Text size="md">Founder, Nudge</Text>
				</VStack>
			</VStack>
			<Box
				w={{ base: "100%", xl: "524px" }}
				h={{ base: "auto", xl: "auto" }}
				position="relative"
			>
				<Image
					src="./home/message.png"
					alt="child reading a map"
					w={{ base: "100%", xl: "524px" }}
					h={{ base: "auto", xl: "auto" }}
				/>
				<Image
					src="./home/message-founder.png"
					alt="excerpt of message from the founder"
					w="180px"
					h="76px"
					position="absolute"
					bottom={{ base: "-10px", xl: "0px" }}
					left={{ base: "20px", xl: "-20px" }}
				/>
			</Box>
		</Stack>
	);
}

function HeroSection() {
	return (
		<VStack minH="100vh" spacing="12" py="12" w="100%">
			<HStack
				width={{ base: "100%-64px", xl: "1160px" }}
				mx={{ base: "32px", xl: "auto" }}
				justifyContent="center"
				spacing={{ base: "4px", xl: "100px" }}
				alignItems="center"
			>
				<FloatingSVGs type="left" />
				<HeroText />
				<FloatingSVGs type="right" />
			</HStack>
			<LandingImages />
		</VStack>
	);
}

function HeroText() {
	const router = useRouter();
	return (
		<VStack spacing="8" width={{ base: "100%", xl: "560px" }} mx="auto">
			<VStack spacing="4">
				<VStack>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							delay: 0.1,
							mass: 1,
							damping: 40,
							stiffness: 200,
							// duration: 1,
						}}
					>
						<Heading
							textAlign="center"
							size="lg"
							fontWeight="semibold"
						>
							There&apos;s{" "}
							<Heading as="span" color="orange.500" size="lg">
								genius
							</Heading>{" "}
							<br />
							inside your child.
						</Heading>
					</MotionBox>
					<MotionBox
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							type: "spring",
							delay: 0.3,
							mass: 1,
							damping: 40,
							stiffness: 200,
						}}
					>
						<Heading textAlign="center" size="lg" mt="-1">
							<Heading as="span" color="orange.500" size="lg">
								Nudge
							</Heading>{" "}
							it free.
						</Heading>
					</MotionBox>
				</VStack>
				<MotionBox
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						type: "spring",
						delay: 0.5,
						mass: 1,
						damping: 40,
						stiffness: 200,
					}}
				>
					<Text textAlign="center" fontSize="18" lineHeight="24px">
						With Nudge&apos;s high-quality classes & groups, at-home
						activities, growth products, and parenting guidance that
						you will find nowhere else
					</Text>
				</MotionBox>
			</VStack>

			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					type: "spring",
					delay: 0.7,
					mass: 1,
					damping: 40,
					stiffness: 200,
				}}
			>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
			</MotionBox>
		</VStack>
	);
}

function FloatingSVGs({ type = "left" }) {
	return (
		<VStack w="180px" h="200px" display={{ base: "none", xl: "block" }}>
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-06.svg"
							: "./svg shapes/svg-shape-02.svg"
					}
					alt="svg-elemnent"
					mr={type === "left" ? "0px" : "130px"}
				/>
			</FloatingBox>
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-05.svg"
							: "./svg shapes/svg-shape-03.svg"
					}
					alt="svg-elemnent"
					mr={type === "left" ? "90px" : "0px"}
					ml={type === "left" ? "0px" : "120px"}
				/>
			</FloatingBox>
			<FloatingBox>
				<Image
					src={
						type === "left"
							? "./svg shapes/svg-shape-01.svg"
							: "./svg shapes/svg-shape-04.svg"
					}
					alt="svg-elemnent"
					ml={type === "left" ? "70px" : "40px"}
				/>
			</FloatingBox>
		</VStack>
	);
}

function FloatingBox({ floatLength = 20, children, ...props }) {
	return (
		<MotionBox
			initial={{ y: floatLength / 2 }}
			animate={{ y: -floatLength / 2 }}
			transition={{
				type: "ease",
				repeat: Infinity,
				repeatType: "reverse",
				duration: Math.random() + 2,
			}}
			{...props}
		>
			{children}
		</MotionBox>
	);
}
