import {
	Box,
	HStack,
	Image,
	Text,
	useBreakpoint,
	useBreakpointValue,
	VStack,
} from "@chakra-ui/react";
// import Project from "./Project";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import LemonLink from "./LemonLink";

const FeaturedProjects = () => {
	const slidePercentage = useBreakpointValue({ base: 70, md: 30 });
	return (
		<Box justifyContent="center" zIndex="-10">
			<VStack spacing="10">
				{/* SHASHWAT KAREGA */}
				<Carousel
					infiniteLoop
					centerMode
					centerSlidePercentage={slidePercentage}
					autoPlay
					transitionTime={3000}
					interval={3000}
					// emulateTouch
					showIndicators={false}
					showArrows={false}
					showStatus={false}
					stopOnHover
					width="100%"
					showThumbs={false}
				>
					<FeaturedImage imgPath="./work/auriga-care.png" />
					<FeaturedImage imgPath="./work/tweek.png" />
					<FeaturedImage imgPath="./work/linkplus.png" />
					<FeaturedImage imgPath="./work/spiritual-app.png" />
					<FeaturedImage imgPath="./work/trend.png" />
				</Carousel>
			</VStack>
		</Box>
	);
};

const FeaturedImage = ({ imgPath }) => {
	return (
		<Box
			mx={["0", "5"]}
			_hover={{
				cursor: "pointer",
				opacity: 0.5,
			}}
			style={{
				transition: "all 0.5s",
				zIndex: -10,
			}}
			p="2"
			zIndex="-10"
		>
			<Image
				zIndex="-10"
				src={imgPath}
				alt="featured-project"
				borderRadius="2xl"
				boxShadow="sm"
				style={{
					zIndex: -10,
				}}
				loading="eager"
			/>
		</Box>
	);
};

export default FeaturedProjects;
