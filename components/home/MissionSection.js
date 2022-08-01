import { Heading, Stack, Text, VStack } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MissionSection() {
	return (
		<VStack spacing="0px" w="100%">
			<VStack
				// width={{ base: "calc(100% - 64px)", xl: "400px" }}
				w="100%"
				px={{ base: "32px", xl: "auto" }}
				spacing="50px"
				justifyContent="center"
				alignItems="center"
				bg="orange.700"
				py="96px"
			>
				<VStack
					w={{ base: "100%", xl: "400px" }}
					justifyContent="center"
					alignItems="center"
					textAlign="center"
					spacing="68px"
				>
					<VStack spacing="16px">
						<Text fontWeight="medium" color="#D89062">
							The Nudge Mission
						</Text>
						<Heading size="md" color="#F7F7F7">
							Broaden every child&apos;s horizons
						</Heading>
					</VStack>
					<VStack textAlign="left" spacing="40px">
						<Text color="#E9C0A6" textAlign="left" w="100%">
							Most children grow up to have limited horizons.
							Traditional schooling and after-school tutoring only
							takes them through a rigid &quot;curriculum&quot;.
							Even hobby classes and extra-curricular activities
							centre around the same few themes like art, music or
							chess. So, most children are never exposed to our
							natural world&apos;s incredible richness, to
							breakthrough scientific progress, to life-changing
							skills and habits, and to deeply satisfying creative
							endeavours.
						</Text>
						<Text color="#E9C0A6" textAlign="left" w="100%">
							Nudge will change this.
						</Text>
					</VStack>
				</VStack>
			</VStack>
			<DictionarySection />
		</VStack>
	);
}
function DictionarySection() {
	return (
		<Stack
			w="100%"
			bg="#141414"
			direction={{
				base: "column",
				xl: "row",
			}}
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="112px"
			justifyContent="center"
			spacing="106px"
		>
			<VStack
				w={{
					base: "100%",
					xl: "405px",
				}}
				alignItems="left"
			>
				<VStack alignItems="left" spacing="32px">
					<VStack alignItems="left" spacing="8px">
						<Text fontSize="12" lineHeight="16px" color="#FAFAFA">
							PHRASE
						</Text>
						<Heading
							fontSize="60"
							lineHeight="60px"
							color="#FAFAFA"
						>
							broaden one&apos;s <br />
							horizons
						</Heading>
					</VStack>
					<Text fontSize="24" lineHeight="28px" color="#FAFAFA">
						/ˈbrɔːdn wʌnz həˈraɪzn/
					</Text>
				</VStack>
			</VStack>
			<VStack
				w={{
					base: "100%",
					xl: "495px",
				}}
				spacing="62px"
			>
				<VStack alignItems="left" spacing="32px" w="100%">
					<VStack alignItems="left" spacing="8px">
						<Text fontSize="12" lineHeight="16px" color="#FAFAFA">
							DEFINITION
						</Text>
						<Heading
							fontSize="24"
							lineHeight="24px"
							color="#FAFAFA"
						>
							1. to increase the range of one&apos;s knowledge,
							understanding, or experience
						</Heading>
					</VStack>
					<Text
						fontSize="24"
						lineHeight="28px"
						color="#FAFAFA"
					></Text>
				</VStack>
				<VStack spacing="8px" alignItems="left" w="100%">
					<Text fontSize="12" lineHeight="16px" color="#FAFAFA">
						EXAMPLE
					</Text>
					<Text
						fontSize="24"
						lineHeight="32px"
						color="#FAFAFA"
						fontWeight="normal"
					>
						In Nudge activities, children will explore all kinds of
						things - like building a radio, human evolution,
						tangrams, art of gratefulness, climate change, fractal
						art, nurturing a growth mindset, quantum computing,
						becoming a better learner, and so much more. Children
						will experience the endless possibilities that life
						offers and get deeply inspired.
						<Text
							mt="4"
							fontSize="24"
							lineHeight="32px"
							color="#FAFAFA"
							fontWeight="normal"
						>
							Nudge will{" "}
							<Text
								as="span"
								fontSize="24"
								lineHeight="32px"
								color="#FAFAFA"
								fontWeight="bold"
							>
								broaden every child&apos;s horizons.
							</Text>
						</Text>
					</Text>
				</VStack>
			</VStack>
		</Stack>
	);
}
export default MissionSection;
