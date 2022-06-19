import { Box, Image, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MotionBox = motion(Box);

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

export default FloatingSVGs;
