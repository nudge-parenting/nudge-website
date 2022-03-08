import { Box, HStack, VStack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Scrollbar } from "smooth-scrollbar-react";
// import { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import { ScaleFade } from "@chakra-ui/react";

export default function Home({ onContactModalOpen }) {
	// const scrollbar = useRef(BaseScrollbar);
	// useEffect(() => {
	// 	// console.log(scrollbar.current);
	// 	console.log(onContactModalOpen);
	// }, []);

	return (
		<ScaleFade in>
			<Box overflow="hidden" mb="200">
				<Hero onContactModalOpen={onContactModalOpen} />
			</Box>
		</ScaleFade>
	);
}
