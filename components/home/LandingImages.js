import { Box, useBreakpointValue, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import landingImage1 from "../../public/landing images/landing-image-01.png";
import landingImage2 from "../../public/landing images/landing-image-02.png";
import landingImage3 from "../../public/landing images/landing-image-03.png";
import landingImage4 from "../../public/landing images/landing-image-04.png";
import landingImage5 from "../../public/landing images/landing-image-05.png";
import landingImage6 from "../../public/landing images/landing-image-06.png";
import landingImage7 from "../../public/landing images/landing-image-07.png";
import landingImage8 from "../../public/landing images/landing-image-08.png";
import landingImage9 from "../../public/landing images/landing-image-09.png";
import landingImage10 from "../../public/landing images/landing-image-10.png";
import landingImage11 from "../../public/landing images/landing-image-11.png";
import landingImage12 from "../../public/landing images/landing-image-12.png";
import landingImage13 from "../../public/landing images/landing-image-13.png";
import landingImage14 from "../../public/landing images/landing-image-14.png";
import landingImage15 from "../../public/landing images/landing-image-15.png";

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
				// imgPath={`/landing images/landing-image-${
				// 	imgNum < 10 ? "0" + imgNum : imgNum
				// }.png`}
				imgNum={imgNum}
			/>
			<ImageBox
				// imgPath={`/landing images/landing-image-${
				// 	imgNum < 10 ? "0" + (imgNum + 1) : imgNum + 1
				// }.png`}
				imgNum={imgNum + 1}
			/>
			<ImageBox
				// imgPath={`/landing images/landing-image-${
				// 	imgNum + 2 < 10 ? "0" + (imgNum + 2) : imgNum + 2
				// }.png`}
				imgNum={imgNum + 2}
			/>
		</VStack>
	);
}

function ImageBox({ imgNum, ...props }) {
	const landingImages = [
		landingImage1,
		landingImage2,
		landingImage3,
		landingImage4,
		landingImage5,
		landingImage6,
		landingImage7,
		landingImage8,
		landingImage9,
		landingImage10,
		landingImage11,
		landingImage12,
		landingImage13,
		landingImage14,
		landingImage15,
	];
	return (
		<Box width={288} height={216} {...props}>
			<Image
				width={288}
				height={216}
				src={landingImages[imgNum - 1]}
				alt="landing image"
				style={{
					borderRadius: "12px",
				}}
			/>
		</Box>
	);
}

export default LandingImages;
