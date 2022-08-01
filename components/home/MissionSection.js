import { Heading, Text, VStack } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function MissionSection() {
	return (
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
						takes them through a rigid &quot;curriculum&quot;. Even
						hobby classes and extra-curricular activities centre
						around the same few themes like art, music or chess. So,
						most children are never exposed to our natural
						world&apos;s incredible richness, to breakthrough
						scientific progress, to life-changing skills and habits,
						and to deeply satisfying creative endeavours.
					</Text>
					<Text color="#E9C0A6" textAlign="left" w="100%">
						Nudge will change this.
					</Text>
				</VStack>
			</VStack>
		</VStack>
	);
}

export default MissionSection;
