import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function LandingImages() {
	const swiperSlideStyle = {
		display: "flex",
		justifyContent: "center",
		// backgroundColor: "green",
		width: "auto",
	};

	const extraImages = useBreakpointValue({ base: false, xl: true });

	return (
		<Swiper
			modules={[Autoplay, FreeMode]}
			freeMode={true} // not working for some reason
			spaceBetween={32}
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
			speed={4000}
			grabCursor={true}
		>
			<SwiperSlide style={swiperSlideStyle}>
				<ImagesCol imgNum={1} />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle}>
				<ImagesCol imgNum={4} hasPt />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle}>
				<ImagesCol imgNum={7} />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle}>
				<ImagesCol imgNum={10} hasPt />
			</SwiperSlide>
			<SwiperSlide style={swiperSlideStyle}>
				<ImagesCol imgNum={13} />
			</SwiperSlide>
			{extraImages && (
				<SwiperSlide style={swiperSlideStyle}>
					<ImagesCol imgNum={7} hasPt />
				</SwiperSlide>
			)}
		</Swiper>
	);
}

function ImagesCol({ imgNum, hasPt }) {
	return (
		<VStack spacing="8" pt={hasPt ? "14" : "0"}>
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
				src={imgPath}
				alt="landing image"
				style={{
					borderRadius: "12px",
				}}
			/>
		</Box>
	);
}

export default LandingImages;
