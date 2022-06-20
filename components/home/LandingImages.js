import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import testPic from "../../public/landing images/landing-image-01.png";

function LandingImages() {
	const swiperSlideStyle = {
		display: "flex",
		justifyContent: "center",
		width: "auto",
	};

	const extraImages = useBreakpointValue({ base: false, xl: true });
	const spaceBetween = useBreakpointValue({ base: 16, xl: 32 });

	return (
		<Swiper
			modules={[Autoplay, FreeMode]}
			freeMode={true} // not working for some reason
			spaceBetween={spaceBetween}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			loop={true}
			slidesPerView="auto"
			direction="horizontal"
			style={{
				width: "100%",
			}}
			speed={10000}
			grabCursor={true}
		>
			<SwiperSlide style={swiperSlideStyle} key={1}>
				<ImagesCol imgNum={1} />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle} key={2}>
				<ImagesCol imgNum={4} hasPt />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle} key={3}>
				<ImagesCol imgNum={7} />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle} key={4}>
				<ImagesCol imgNum={10} hasPt />
			</SwiperSlide>
			{extraImages && (
				<>
					<SwiperSlide style={swiperSlideStyle} key={5}>
						<ImagesCol imgNum={13} />
					</SwiperSlide>
					<SwiperSlide style={swiperSlideStyle} key={6}>
						<ImagesCol imgNum={7} hasPt />
					</SwiperSlide>
				</>
			)}
		</Swiper>
	);
}

function ImagesCol({ imgNum, hasPt }) {
	return (
		<VStack
			spacing={{ base: "4", xl: "8" }}
			pt={hasPt ? { base: "8", xl: "14" } : "0"}
		>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum < 10 ? "0" + imgNum : imgNum
				}.png`}
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum < 10 ? "0" + (imgNum + 1) : imgNum + 1
				}.png`}
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum + 2 < 10 ? "0" + (imgNum + 2) : imgNum + 2
				}.png`}
			/>
		</VStack>
	);
}

function ImageBox({ imgPath, ...props }) {
	return (
		<Box width={288} height={216} {...props}>
			<Image
				width={288}
				height={216}
				src={testPic}
				alt="landing image"
				style={{
					borderRadius: "12px",
				}}
			/>
		</Box>
	);
}

export default LandingImages;
