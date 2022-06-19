import {
	Box,
	Heading,
	Image,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../components/General/Button";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
						src="./home/activity-04.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-05.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-06.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-07.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-08.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={1}>
					<Image
						src="./home/activity-09.png"
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

export default ActivitiesSection;
