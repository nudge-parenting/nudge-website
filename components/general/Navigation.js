import { Image } from "@chakra-ui/image";
import { Box, HStack, Spacer, Square, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Button from "./Button";
import MenuToggle from "./MenuToggle";

const MotionSquare = motion(Square);

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
			position="sticky"
			top="0"
			left="0"
			zIndex="10"
			display={{ base: "none", xl: "flex" }}
			borderBottom="1px"
			borderColor="gray.100"
			bg="white"
			height="16"
			alignItems="center"
			justifyContent="center"
		>
			<HStack
				px={{
					base: "30px",
					xl: "90px",
				}}
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
					onClick={() => {
						router.push("/become-a-coach");
					}}
					variant="secondary"
					size="md"
				>
					become a coach
				</Button>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
					size="md"
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
			position="sticky"
			zIndex="10"
			top="0"
			left="0"
			display={{ base: "flex", xl: "none" }}
		>
			<HStack
				px={{
					base: "16px",
					xl: "90px",
				}}
				py="3"
				bg="white"
				w="100vw"
				zIndex="10"
			>
				<Link href="/" passHref>
					<Box
						w="32"
						zIndex="60"
						onClick={() => {
							toggleOpen(0);
						}}
					>
						<Text
							fontSize="24px"
							lineHeight="28px"
							fontWeight="semibold"
							color="orange.500"
						>
							nudge
						</Text>
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
							// bg="orange.500"
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
						color: "orange.500",
						cursor: "pointer",
					}}
					px={["0", "0", "2"]}
					fontSize={["5xl", "5xl", "sm"]}
					fontWeight="medium"
					color={
						!isSelected
							? ["orange.500", "orange.500", "black.500"]
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
				bg="orange.500"
				w="15%"
				mt="2"
				// borderRadius="500px"
				display={["block", "block", "none"]}
			/>
		</Box>
	);
};

export default Navbar;
