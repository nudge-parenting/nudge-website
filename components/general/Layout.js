import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Spacer, Square, Text } from "@chakra-ui/layout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCycle } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { MdExpandLess } from "react-icons/md";
import {
	RiTwitterFill,
	RiInstagramFill,
	RiLinkedinBoxFill,
	RiMailFill,
} from "react-icons/ri";
import Header from "./Header";
import Navbar from "./Navigation.js";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	useEffect(() => {
		document.body.style.overflowX = "hidden";
		document.body.style.userSelect = "none";
		AOS.init({
			once: true,
		});
	}, []);

	useEffect(() => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0";
			} else {
				document.getElementById("navbar").style.top = "-64px";
			}
			prevScrollpos = currentScrollPos;
		};
	}, []);

	return (
		<>
			<Header />
			<Box>
				{/* <GoToTopButton /> */}
				<Navbar toggleOpen={toggleOpen} isOpen={isOpen} />
				<Box
					minH="50vh"
					opacity={isOpen ? "0.1" : "1"}
					transition="0.5s"
				>
					{children}
				</Box>
				<Footer />
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
			right={["8", "20"]}
			bottom={["20", "20"]}
			opacity="0.2"
			zIndex="9"
		>
			<Icon as={MdExpandLess} w={9} h={9} color="white" />
		</Square>
	);
};
const Footer = () => {
	const router = useRouter();

	return (
		<>
			<HStack
				px={{
					base: "8",
					md: "90",
					lg: "250",
					xl: "280",
				}}
				pt="3"
				bg="white"
				maxW="100vw"
				zIndex="10"
				mt="5"
				justifyContent="space-between"
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
				<HStack spacing="16px">
					<Icon
						as={RiTwitterFill}
						w={6}
						h={6}
						color="gray.500"
						_hover={{
							cursor: "pointer",
						}}
						onClick={() => {
							window.open("https://twitter.com/nudgeverse");
						}}
					/>
					<Icon
						as={RiInstagramFill}
						w={6}
						h={6}
						color="gray.500"
						_hover={{
							cursor: "pointer",
						}}
						onClick={() => {
							window.open(
								"https://www.instagram.com/nudgeverse/?hl=en"
							);
						}}
					/>
					<Icon
						as={RiLinkedinBoxFill}
						w={6}
						h={6}
						color="gray.500"
						_hover={{
							cursor: "pointer",
						}}
						onClick={() => {
							window.open(
								"https://www.linkedin.com/company/nudgeparenting"
							);
						}}
					/>
					<Icon
						as={RiMailFill}
						w={6}
						h={6}
						color="gray.500"
						_hover={{
							cursor: "pointer",
						}}
						onClick={() => {
							window.open("mailto:hi@nudgeverse.com");
						}}
					/>
				</HStack>
			</HStack>
			<HStack
				px={{
					base: "8",
					md: "90",
					lg: "250",
					xl: "280",
				}}
				bg="white"
				maxW="100vw"
				zIndex="10"
				mt="0"
				justifyContent="space-between"
				alignItems="center"
				w="100%"
			>
				<Text color="gray.400" fontSize="xs" w="100%">
					(Nudge) NudgeVerse is an initiative by Khurma Technocom
					(OPC) Pvt Ltd.
				</Text>
			</HStack>
			<HStack
				px={{
					base: "8",
					md: "90",
					lg: "250",
					xl: "280",
				}}
				pb="3"
				bg="white"
				maxW="100vw"
				zIndex="10"
				mt="0"
				mb="5"
				alignItems="center"
				w="100%"
			>
				<Text
					onClick={() => {
						router.push("/privacy-policy");
					}}
					color="gray.400"
					fontSize="xs"
					fontWeight="bold"
					textDecoration="underline"
				>
					Privacy Policy
				</Text>
				<Text
					onClick={() => {
						router.push("/terms-and-conditions");
					}}
					color="gray.400"
					fontSize="xs"
					fontWeight="bold"
					textDecoration="underline"
				>
					Terms {`&`} Conditions
				</Text>
				<Text
					onClick={() => {
						router.push("/cancellation-and-refund-policy");
					}}
					color="gray.400"
					fontSize="xs"
					fontWeight="bold"
					textDecoration="underline"
				>
					Cancellation/Refund Policy
				</Text>
			</HStack>
		</>
	);
};

export default Layout;
