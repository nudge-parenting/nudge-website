import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Spacer, Square } from "@chakra-ui/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCycle } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { MdExpandLess } from "react-icons/md";
import Header from "./Header";
import LemonLink from "./LemonLink";
import Navbar from "./Navigation.js";

const Layout = ({ children }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	useEffect(() => {
		document.body.style.overflowX = "hidden";
		AOS.init({
			once: true,
		});
	}, []);

	return (
		<>
			<Header />
			<Box>
				<GoToTopButton />
				<Navbar toggleOpen={toggleOpen} isOpen={isOpen} />
				<Box
					minH="50vh"
					opacity={isOpen ? "0.1" : "1"}
					transition="0.5s"
				>
					{children}
				</Box>
				{/* <Footer /> */}
			</Box>
		</>
	);
};

const GoToTopButton = () => {
	return (
		<Square
			bg="gray.900"
			w={9}
			h={9}
			borderRadius="100px"
			_hover={{
				cursor: "pointer",
				transform: "scale(1.1)",
				transition: "all 0.3s",
				opacity: "1",
			}}
			position="fixed"
			onClick={() => {
				window.scrollTo(0, 0);
			}}
			right={["10", "20"]}
			bottom={["10", "20"]}
			opacity="0.2"
			zIndex="9"
		>
			<Icon as={MdExpandLess} w={9} h={9} color="white" />
		</Square>
	);
};
const Footer = () => {
	return (
		<HStack
			px={{
				base: "8",
				md: "90",
				lg: "250",
				xl: "350",
				"2xl": "450",
			}}
			py="3"
			bg="white"
			w="100vw"
			zIndex="10"
			my="5"
		>
			<Link href="/" passHref>
				<Box w={["32"]}>
					<Image
						src="./nudge-typo-logo.png"
						// boxSize={["10", "12"]}
						_hover={{
							cursor: "pointer",
						}}
						alt=""
					/>
				</Box>
			</Link>
			<Spacer />
			<LemonLink>Terms</LemonLink>
			<LemonLink>Privacy</LemonLink>
			<LemonLink>Contact</LemonLink>
		</HStack>
	);
};

export default Layout;
