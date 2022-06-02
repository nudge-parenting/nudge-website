import Icon from "@chakra-ui/icon";
import { Image } from "@chakra-ui/image";
import { Square } from "@chakra-ui/layout";
import { Box, HStack, Spacer, Text } from "@chakra-ui/layout";
import {
	Button,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	SlideFade,
	VStack,
	Stack,
	useToast,
	RadioGroup,
	Radio,
} from "@chakra-ui/react";
import { Fade } from "@chakra-ui/transition";
import Head from "next/head";
import Link from "next/link";
import router, { useRouter } from "next/router";
import {
	MdArrowDropUp,
	MdExpandLess,
	MdLocationOn,
	MdArrowDropDown,
	MdMenu,
	MdArrowDownward,
} from "react-icons/md";
import { motion, useCycle } from "framer-motion";
// import { MenuToggle } from "./MenuToggle";
import React, { useEffect, useRef, useState } from "react";
import { MenuToggle } from "./MenuToggle";
import { useDimensions } from "./use-dimensions";
import { Scrollbar } from "smooth-scrollbar-react";
import LemonLink from "./LemonLink";

const MotionBox = motion(Box);
const MotionSquare = motion(Square);
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure, Input } from "@chakra-ui/react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Field, Form, Formik, FormikProps, getIn } from "formik";
import * as yup from "yup";

const Layout = ({ children }) => {
	const [isOpen, toggleOpen] = useCycle(false, true);
	useEffect(() => {
		document.body.style.overflowX = "hidden";
	}, []);
	const {
		isOpen: isContactModalOpen,
		onOpen: onContactModalOpen,
		onClose: onContactModalClose,
	} = useDisclosure();
	const injectGA = () => {
		if (typeof window == "undefined") {
			return;
		}
		window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}
		gtag("js", new Date());
		gtag("config", "G-LQNKJMXG1S");
	};
	return (
		<>
			<Head>
				{/* <!-- PRIMARY META TAGS --> */}
				<title>Nudge Parenting</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					name="description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					name="keywords"
					content="website, app, android, ios, react native, make website, make apps, make website, developer, designer, UI, UX, lemon8, lemon"
				/>
				<meta name="robots" content="index, follow" />

				{/* <!-- og tags --> */}
				<meta property="og:type" content="website" />
				<meta
					property="og:url"
					content="https://www.nudgeparenting.com/"
				/>
				<meta
					property="og:title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					property="og:description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					property="og:image"
					content="https://www.nudgeparenting.com/meta-image.png"
				/>
				{/* <!-- TWITTER --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:url"
					content="https://nudgeparenting.com"
				/>
				<meta
					property="twitter:title"
					content="Nudge Parenting - Raise happier, healthier, smarter humans of tomorrow"
				/>
				<meta
					property="twitter:description"
					content="Raise happier, healthier, smarter humans of tomorrow through the power of nudge parenting"
				/>
				<meta
					property="twitter:image"
					content="https://www.nudgeparenting.com/meta-image.png"
				/>

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-LQNKJMXG1S"
				/>
				<script>{injectGA()}</script>
			</Head>

			<Box mt={["12", "0"]}>
				<GoToTopButton />
				<Navbar
					toggleOpen={toggleOpen}
					isOpen={isOpen}
					isContactModalOpen={isContactModalOpen}
					onContactModalOpen={onContactModalOpen}
					onContactModalClose={onContactModalClose}
				/>
				<Box
					minH="50vh"
					color="black.100"
					opacity={isOpen ? "0.1" : "1"}
					transition="0.5s"
					overflowX="hidden"
					onScroll={() => {
						const winScroll =
							document.body.scrollTop ||
							document.documentElement.scrollTop;

						const height =
							document.documentElement.scrollHeight -
							document.documentElement.clientHeight;

						const scrolled = winScroll / height;
						console.log("SCROLL", scrolled);
					}}
				>
					{React.cloneElement(children)}
				</Box>
				<Footer />
			</Box>
		</>
	);
};

const Navbar = ({ isOpen, toggleOpen }) => {
	const router = useRouter();
	const path = router.asPath;

	return (
		<>
			<DesktopNav isOpen={isOpen} toggleOpen={toggleOpen} path={path} />
			<MobileNav isOpen={isOpen} toggleOpen={toggleOpen} path={path} />
		</>
	);
};

const DesktopNav = ({ path }) => {
	const router = useRouter();
	return (
		<Box
			position="fixed"
			top="0"
			left="0"
			zIndex="10"
			display={{ base: "none", lg: "block" }}
			// borderBottom="1px"
			// borderColor="gray.100"
		>
			<HStack
				px={{
					base: "30px",
					sm: "50px",
					md: "100px",
					lg: "90px",
				}}
				py={"3"}
				w="100vw"
				zIndex="10"
			>
				<Link href="/" passHref>
					<Box w={["24", "32", "32", "28"]}>
						<Image
							src="./nudge-typo-logo.png"
							_hover={{
								cursor: "pointer",
							}}
							alt=""
						/>
					</Box>
				</Link>

				<Spacer />
				<Button
					colorScheme="nudgeorange"
					fontWeight="bold"
					borderRadius="md"
					onClick={() => {
						router.push("/about");
					}}
					variant="outline"
				>
					become a coach
				</Button>
				<Button
					colorScheme="nudgeorange"
					fontWeight="bold"
					borderRadius="md"
					onClick={() => {
						router.push("/about");
					}}
				>
					join waitlist
				</Button>
			</HStack>
		</Box>
	);
};
const MobileNav = ({ isOpen = false, toggleOpen, path }) => {
	return (
		<Box
			borderBottom="1px"
			borderColor="gray.100"
			position="fixed"
			zIndex="10"
			top="0"
			left="0"
			display={{ base: "block", lg: "none" }}
		>
			<HStack
				px={{
					base: "20px",
					sm: "50px",
					md: "100px",
					lg: "90px",
					// xl: "25vw",
					// "2xl": "30vw",
				}}
				py="3"
				bg="white"
				w="100vw"
				zIndex="10"
			>
				<Link href="/" passHref>
					<Box w="32" zIndex="60">
						<Image
							src="./lemon-typo-logo.png"
							// boxSize={["10", "12"]}
							_hover={{
								cursor: "pointer",
							}}
							alt=""
							onClick={() => {
								toggleOpen(0);
							}}
						/>
					</Box>
				</Link>
				<Spacer />

				<Square minW="10" minH="10">
					<MotionSquare
						initial={false}
						animate={isOpen ? "open" : "closed"}
					>
						<MenuToggle
							toggle={() => {
								toggleOpen();
							}}
						/>
						<Box
							position="fixed"
							zIndex="10"
							// variants={sidebar}
							right={isOpen ? "0" : "-100vw"}
							bottom="0"
							// bg="nudgeorange.500"
							bg="white"
							w={["100vw"]}
							h="100vh"
							style={{
								transition: "0.4s",
								transitionTimingFunction: "ease-in-out",
							}}
						>
							<VStack
								spacing="8"
								pt="40"
								w="85%"
								textAlign="left"
								bg="white"
								height="100%"
								alignItems="left"
								pl="12"
							>
								<Box>
									<Text
										fontSize="md"
										fontWeight="normal"
										color="black.300"
										mb="2"
									>
										Menu
									</Text>
									<NavLink
										text="Our Vision"
										path={path}
										// target="/vision"
										toggleOpen={() => {
											toggleOpen();
											window.open(
												"https://nudge-parenting.notion.site/Nudge-masterplan-5c43ec42eb934b6c994882320351c066"
											);
										}}
									/>
								</Box>
								<NavLink
									text="We're Hiring!"
									path={path}
									// target="/hiring"
									toggleOpen={() => {
										// router.push("/hiring");
										toggleOpen();
										window.open(
											"https://nudge-parenting.notion.site/Nudge-is-hiring-81d4db29705a4420828f8a34441cb9d5"
										);
									}}
								/>
								<NavLink
									text="The Team"
									path={path}
									// target="/team"
									toggleOpen={() => {
										toggleOpen();
										window.open(
											"https://nudge-parenting.notion.site/Nudge-team-c1f5f89531c14cf7b4e1f700677862ec"
										);
									}}
								/>
								<Box>
									<Text
										fontSize="md"
										fontWeight="normal"
										mt="4"
										mb="2"
										color="black.300"
									>
										Contact
									</Text>
									<Link
										passHref
										href={
											"mailto:abhimanyu@nudgeparenting.com"
										}
									>
										<Text
											fontSize="2xl"
											fontWeight="medium"
											color="black.500"
											style={{
												transition: "all 0.5s",
											}}
											_hover={{
												color: "black.500",
												cursor: "pointer",
											}}
										>
											{" "}
											hi@nudgeparenting.com
										</Text>
									</Link>
								</Box>
							</VStack>
						</Box>
					</MotionSquare>
				</Square>
			</HStack>
		</Box>
	);
};
const NavLink = ({
	text,
	path = "/default",
	target = "/",
	toggleOpen = () => null,
}) => {
	const isSelected = path === target;
	// const [isSelected, setIsSelected] = useState(path === target);
	return (
		<Box>
			<Link
				href={target}
				passHref
				onClick={() => {
					console.log("Navlink pressed");
				}}
			>
				<Text
					onClick={() => {
						toggleOpen();
					}}
					style={{
						transition: "all 0.5s",
					}}
					textAlign={["left", "left", "center"]}
					_hover={{
						color: "nudgeorange.500",
						cursor: "pointer",
					}}
					px={["0", "0", "2"]}
					fontSize={["5xl", "5xl", "sm"]}
					fontWeight="medium"
					color={
						!isSelected
							? [
									"nudgeorange.500",
									"nudgeorange.500",
									"black.500",
							  ]
							: ["black.500", "black.500", "lemongrey.200"]
					}
					lineHeight="1.0"
				>
					{text}
				</Text>
			</Link>
			<Box
				minW="2"
				minH="4px"
				bg="nudgeorange.500"
				w="15%"
				mt="2"
				// borderRadius="500px"
				display={["block", "block", "none"]}
			/>
		</Box>
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
			// position="fixed"
			// bottom="0"
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
