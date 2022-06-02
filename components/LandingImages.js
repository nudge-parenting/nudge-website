import { Box, HStack, transition, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
const MotionBox = motion(Box);

function LandingImages() {
	const delay = 1;
	const delayDiff = 0.4;
	const transition = {
		type: "spring",
		mass: 1,
		damping: 8,
		stiffness: 100,
	};

	return (
		<VStack spacing="8">
			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					...transition,
					delay: delay,
				}}
			>
				<ImagesRow imgNum={1} />
			</MotionBox>
			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					...transition,
					delay: delay + delayDiff,
				}}
			>
				<ImagesRow imgNum={6} />
			</MotionBox>
			<MotionBox
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					...transition,
					delay: delay + delayDiff * 2,
				}}
			>
				<ImagesRow imgNum={11} />
			</MotionBox>
		</VStack>
	);
}

function ImagesRow({ imgNum }) {
	return (
		<HStack spacing="8">
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum < 10 ? "0" + imgNum : imgNum
				}.png`}
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum < 10 ? "0" + (imgNum + 1) : imgNum + 1
				}.png`}
				pt="14"
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum + 2 < 10 ? "0" + (imgNum + 2) : imgNum + 2
				}.png`}
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum + 3 < 10 ? "0" + (imgNum + 3) : imgNum + 3
				}.png`}
				pt="14"
			/>
			<ImageBox
				imgPath={`/landing images/landing-image-${
					imgNum + 4 < 10 ? "0" + (imgNum + 4) : imgNum + 4
				}.png`}
			/>
		</HStack>
	);
}

function ImageBox({ imgPath, ...props }) {
	return (
		<Box width={284} height={213} {...props}>
			<Image
				width={284}
				height={213}
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
