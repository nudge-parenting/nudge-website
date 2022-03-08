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
		gtag("config", "G-4B4KE7FYG7");
	};
	return (
		<>
			<Head>
				{/* <!-- PRIMARY META TAGS --> */}
				<title>Lemon8</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="title"
					content="Lemon8 - Digital Products (Apps, Websites and More)"
				/>
				<meta
					name="description"
					content="Have an idea? Design, build and launch it with us. Create high quality websites and mobile apps customised to your brand’s needs to help launch or grow your business."
				/>
				<meta
					name="keywords"
					content="website, app, android, ios, react native, make website, make apps, make website, developer, designer, UI, UX, lemon8, lemon"
				/>
				<meta name="robots" content="index, follow" />

				{/* <!-- og tags --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://www.lemon8.in/" />
				<meta
					property="og:title"
					content="Lemon8 - Digital Products (Apps, Websites and More)"
				/>
				<meta
					property="og:description"
					content="Have an idea? Design, build and launch it with us. Create high quality websites and mobile apps customised to your brand’s needs to help launch or grow your business."
				/>
				<meta
					property="og:image"
					content="https://www.lemon8.in/meta-image.png"
				/>
				{/* <!-- TWITTER --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://lemon8.in" />
				<meta
					property="twitter:title"
					content="Lemon8 - Digital Products (Apps, Websites and More)"
				/>
				<meta
					property="twitter:description"
					content="Have an idea? Design, build and launch it with us. Create high quality websites and mobile apps customised to your brand’s needs to help launch or grow your business."
				/>
				<meta
					property="twitter:image"
					content="https://www.lemon8.in/meta-image.png"
				/>

				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-4B4KE7FYG7"
				/>
				<script>{injectGA()}</script>
			</Head>

			<Box mt={["12", "0"]} bg={"nudgeyellow.500"}>
				{/* <GoToTopButton /> */}
				<Navbar
					toggleOpen={toggleOpen}
					isOpen={isOpen}
					isContactModalOpen={isContactModalOpen}
					onContactModalOpen={onContactModalOpen}
					onContactModalClose={onContactModalClose}
				/>
				<Box
					minH="50vh"
					color="nudgeblack.100"
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
					{React.cloneElement(children, {
						isContactModalOpen: isContactModalOpen,
						onContactModalOpen: onContactModalOpen,
						onContactModalClose: onContactModalClose,
					})}
				</Box>
				<Footer onContactModalOpen={onContactModalOpen} />
			</Box>
		</>
	);
};

const Navbar = ({
	isOpen,
	toggleOpen,
	isContactModalOpen,
	onContactModalOpen,
	onContactModalClose,
}) => {
	const router = useRouter();
	const path = router.asPath;
	// const { isContactModalOpen, onContactModalOpen, onContactModalClose } =
	// 	useDisclosure();

	return (
		<>
			<ContactModal
				isContactModalOpen={isContactModalOpen}
				onContactModalClose={onContactModalClose}
			/>
			<DesktopNav
				isOpen={isOpen}
				toggleOpen={toggleOpen}
				path={path}
				onContactModalOpen={onContactModalOpen}
			/>
			<MobileNav isOpen={isOpen} toggleOpen={toggleOpen} path={path} />
		</>
	);
};
const ContactModal = ({ isContactModalOpen, onContactModalClose }) => {
	const toast = useToast();
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const validationSchema = yup.object().shape({
		name: yup.string().required("Name is a required field"),
		email: yup.string().email().required("Email is a required field"),
		phone: yup
			.string()
			.matches(phoneRegExp, "Phone number is not valid")
			.required("Phone is a required field"),
	});
	return (
		<Modal
			isOpen={isContactModalOpen}
			onClose={onContactModalClose}
			size="4xl"
			isCentered
			scrollBehavior="inside"
		>
			<ModalOverlay />
			<ModalContent>
				{/* <ModalHeader>Modal Title</ModalHeader> */}
				<ModalCloseButton />
				<ModalBody>
					{/* <Text>HELLO WORLD</Text> */}
					<Stack direction={["column", "row"]}>
						<VStack
							w={["100%", "100%", "50%"]}
							// bg="green.100"
							pt={{ base: "8", xl: "8", "2xl": "16" }}
							px={["2", "2", "10"]}
						>
							<Box
								w="52"
								mb={{ base: "5", xl: "5", "2xl": "10" }}
							>
								<Image
									src="./lemon-typo-logo.png"
									_hover={{
										cursor: "pointer",
									}}
									alt=""
								/>
							</Box>
							<Box>
								<Text
									fontSize="2xl"
									fontWeight="bold"
									lineHeight="1.1"
									mb="6"
								>
									Schedule a consultation call for free!
								</Text>
								<Text fontSize="md" fontWeight="normal">
									Schedule a quick 30 min call with us to get
									started with your project. Web conferencing
									details will be provided to you upon
									confirmation.
								</Text>
								<Text
									fontSize="md"
									fontWeight="normal"
									pt={["2", "2", "4"]}
								>
									In this call, we will: Understand your idea,
									suggest a plan, and quote a price range for
									your project.
								</Text>
							</Box>
						</VStack>
						<VStack
							w={["100%", "100%", "50%"]}
							// bg="blue.100"
							h="100%"
							py={["4", "4", "4", "5"]}
							px={["2", "2", "10"]}
							spacing="4"
							borderLeft={["0px", "0px", "2px"]}
							borderColor={[
								"transparent",
								"transparent",
								"gray.100",
							]}
							// overflowY={{ xl: "scroll", "2xl": "initial" }}
							// maxH="md"
						>
							<Formik
								onSubmit={(values) => {
									onContactModalClose();

									toast({
										title: "Request Submitted.",
										description:
											"We'll get in touch with you soon!",
										status: "success",
										duration: 9000,
										isClosable: true,
									});
									console.log(values);

									const checkBoxValues = values.mobile
										? "Mobile|"
										: "" + values.website
										? "Website|"
										: "" + values.content
										? "Content|"
										: "" + values.consultation
										? "Business Consultation"
										: "";

									// Update the form values
									const dictMapping = {
										name: "entry.212771160",
										email: "entry.557613743",
										phone: "entry.2124275952",
										category: "entry.333729521",
									};

									let baseUrl =
										"https://docs.google.com/forms/d/e/1FAIpQLSfbjgddaCo0EMHwBv7YdqVsDX1MPZ9xnUMiv2yKqI0WkRwU9A/formResponse?usp=pp_url&submit=Submit";

									// Iterate over dictMapping and check if key exists in values
									Object.keys(dictMapping).forEach((key) => {
										baseUrl += "&" + dictMapping[key] + "=";
										if (values[key]) {
											// If key exists, add to the form values
											baseUrl += values[key]
												.replace("+", "%2B")
												.replace(" ", "+");
										}
									});

									baseUrl += checkBoxValues
										.replace("+", "%2B")
										.replace(" ", "+");

									console.log(baseUrl);
									fetch(baseUrl)
										.then((response) =>
											console.log(response)
										)
										.catch((e) =>
											console.log("Form Error", e)
										);
								}}
								initialValues={{
									name: "",
									email: "",
									phone: "",
									mobile: false,
									website: false,
									content: false,
									consultation: false,
								}}
								validationSchema={validationSchema}
							>
								<Form>
									<Field
										name="name"
										component={({ form, field }) => {
											const errorText =
												getIn(
													form.touched,
													field.name
												) &&
												getIn(form.errors, field.name);
											return (
												<FormControl
													mb="3"
													isInvalid={!!errorText}
												>
													<FormLabel>Name</FormLabel>
													<Input
														size="md"
														type="text"
														{...field}
														placeholder="John Doe"
													/>
													<FormErrorMessage>
														{errorText}
													</FormErrorMessage>
												</FormControl>
											);
										}}
									/>
									<Field
										name="email"
										component={({ form, field }) => {
											const errorText =
												getIn(
													form.touched,
													field.name
												) &&
												getIn(form.errors, field.name);
											return (
												<FormControl
													mb="3"
													isInvalid={!!errorText}
												>
													<FormLabel>Email</FormLabel>
													<Input
														type="email"
														placeholder="johndoe@email.com"
														{...field}
													/>
													{/* <FormHelperText>
														We&apos;ll use this to
														schedule a meeting with
														you.
													</FormHelperText> */}
													<FormErrorMessage>
														{errorText}
													</FormErrorMessage>
												</FormControl>
											);
										}}
									/>
									<Field
										name="phone"
										component={({ form, field }) => {
											const errorText =
												getIn(
													form.touched,
													field.name
												) &&
												getIn(form.errors, field.name);
											return (
												<FormControl
													mb="3"
													isInvalid={!!errorText}
												>
													<FormLabel>Phone</FormLabel>
													<Input
														type="phone"
														placeholder="99999 99999"
														{...field}
													/>
													<FormHelperText>
														We&apos;ll use this to
														schedule a meeting with
														you.
													</FormHelperText>
													<FormErrorMessage>
														{errorText}
													</FormErrorMessage>
												</FormControl>
											);
										}}
									/>

									<FormControl>
										<FormLabel>Category</FormLabel>
										<CheckboxGroup
											colorScheme="nudgeyellow"
											defaultValue={["Mobile App"]}
										>
											<Box>
												<Field
													name="mobile"
													component={({
														form,
														field,
													}) => {
														return (
															<Checkbox
																size="md"
																mr="4"
																isChecked={
																	field.value
																}
																onChange={
																	field.onChange
																}
																onBlur={
																	field.onBlur
																}
																name={
																	field.name
																}
															>
																Mobile App
															</Checkbox>
														);
													}}
												/>
												<Field
													name="website"
													component={({
														form,
														field,
													}) => {
														return (
															<Checkbox
																size="md"
																mr="4"
																isChecked={
																	field.value
																}
																onChange={
																	field.onChange
																}
																onBlur={
																	field.onBlur
																}
																name={
																	field.name
																}
															>
																Website
															</Checkbox>
														);
													}}
												/>
												<Field
													name="content"
													component={({
														form,
														field,
													}) => {
														return (
															<Checkbox
																size="md"
																mr="4"
																isChecked={
																	field.value
																}
																onChange={
																	field.onChange
																}
																onBlur={
																	field.onBlur
																}
																name={
																	field.name
																}
															>
																Content Writing
															</Checkbox>
														);
													}}
												/>
												<Field
													name="consultation"
													component={({
														form,
														field,
													}) => {
														return (
															<Checkbox
																size="md"
																mr="4"
																isChecked={
																	field.value
																}
																onChange={
																	field.onChange
																}
																onBlur={
																	field.onBlur
																}
																name={
																	field.name
																}
															>
																Consultation
															</Checkbox>
														);
													}}
												/>
											</Box>
										</CheckboxGroup>
										<FormHelperText>
											What do you need help with?
										</FormHelperText>
									</FormControl>

									<HStack
										justifyContent="right"
										w="100%"
										pt="6"
									>
										<Button
											variant="ghost"
											onClick={onContactModalClose}
										>
											Close
										</Button>
										<Button
											type="submit"
											colorScheme="nudgeyellow"
											mr={3}
											onClick={() => null}
										>
											Submit
										</Button>
									</HStack>
								</Form>
							</Formik>
						</VStack>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

const DesktopNav = ({ path, onContactModalOpen }) => {
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
				bg={"nudgeyellow.500"}
				w="100vw"
				zIndex="10"
			>
				<Link href="/" passHref>
					<Box w={["24", "32", "32", "28"]}>
						<Image
							src="./lemon-typo-logo.png"
							_hover={{
								cursor: "pointer",
							}}
							alt=""
						/>
					</Box>
				</Link>
				<Spacer />
				{/* <NavLink text="How we work" path={path} target="/method" /> */}
				{/* <NavLink text="The Team" path={path} target="/team" /> */}
				{/* <NavLink text="Past Projects" path={path} target="/work" /> */}
				<Spacer />
				<Button
					colorScheme="nudgeyellow"
					fontWeight="bold"
					borderRadius="md"
					onClick={() => {
						router.push("/work");
					}}
					variant="ghost"
				>
					we&apos;re hiring!
				</Button>
				<Button
					colorScheme="nudgeyellow"
					fontWeight="bold"
					borderRadius="md"
					onClick={() => {
						onContactModalOpen();
						// alert("contact");
					}}
				>
					early access
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
							// bg="nudgeyellow.500"
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
										color="lemongrey.200"
										mb="2"
									>
										Menu
									</Text>
									<NavLink
										text="How we work"
										path={path}
										target="/method"
										toggleOpen={toggleOpen}
									/>
								</Box>
								<NavLink
									text="Past Projects"
									path={path}
									target="/work"
									toggleOpen={toggleOpen}
								/>
								<NavLink
									text="The Team"
									path={path}
									target="/team"
									toggleOpen={toggleOpen}
								/>
								<Box>
									<Text
										fontSize="md"
										fontWeight="normal"
										mt="4"
										mb="2"
										color="lemongrey.500"
									>
										Contact
									</Text>
									<Text
										fontSize="2xl"
										fontWeight="medium"
										color="nudgeblack.500"
									>
										hi@lemon8.in
									</Text>
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
						// zIndex: 50,
						// position: "fixed",
						// WebkitTapHighlightColor: "transparent",
						// WebkitTouchCallout: "none",
						// WebkitUserSelect: "none",
						// KhtmlUserSelect: "none",
						// MozUserSelect: "none",
						// msUserSelect: "none",
						// userSelect: "none",
					}}
					textAlign={["left", "left", "center"]}
					_hover={{
						color: "nudgeblack.500",
						cursor: "pointer",
					}}
					px={["0", "0", "2"]}
					fontSize={["5xl", "5xl", "sm"]}
					fontWeight="medium"
					color={
						isSelected
							? [
									"nudgeyellow.500",
									"nudgeyellow.500",
									"nudgeblack.500",
							  ]
							: [
									"nudgeblack.500",
									"nudgeblack.500",
									"lemongrey.200",
							  ]
					}
					lineHeight="1.0"
				>
					{text}
				</Text>
			</Link>
			<Box
				minW="2"
				minH="3px"
				bg="nudgeyellow.200"
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
const Footer = ({ onContactModalOpen }) => {
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
						src="./lemon-typo-logo.png"
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
			<LemonLink onClick={onContactModalOpen}>Contact</LemonLink>
		</HStack>
	);
};

export default Layout;
