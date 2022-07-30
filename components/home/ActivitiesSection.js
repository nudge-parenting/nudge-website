import {
	Heading,
	Image,
	Text,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "../general";

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
			width={{ base: "calc(100% - 64px)", xl: "760px" }}
			mx={{ base: "0px", xl: "auto" }}
			justifyContent="center"
			py="12"
			alignItems="center"
			data-aos="fade-up"
			data-aos-easing="ease-in-out"
			data-aos-duration={1000}
			data-aos-delay={200}
		>
			<VStack spacing="24px">
				<VStack spacing="16px" alignItems="center" textAlign="center">
					<Text fontWeight="medium">Activities by Coaches</Text>

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
						src="./become a host/activities/STEM/stemActivityImage01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={2}>
					<Image
						src="./become a host/activities/creative skills/creativeSkillsActivityImage01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={3}>
					<Image
						src="./become a host/activities/life skills/lifeSkillActivity01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={4}>
					<Image
						src="./become a host/activities/world discovery/worldDiscoveryActivityImage01.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={5}>
					<Image
						src="./become a host/activities/STEM/stemActivityImage02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={6}>
					<Image
						src="./become a host/activities/creative skills/creativeSkillsActivityImage02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={7}>
					<Image
						src="./become a host/activities/life skills/lifeSkillActivity02.png"
						alt="child reading a map"
						w={{ base: "100%", xl: "230px" }}
						h={{ base: "auto", xl: "230px" }}
						borderRadius="12px"
					/>
				</SwiperSlide>
				<SwiperSlide style={swiperSlideStyle} key={8}>
					<Image
						src="./become a host/activities/world discovery/worldDiscoveryActivityImage02.png"
						alt="worldDiscoveryImage02"
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
