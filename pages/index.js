import { VStack } from "@chakra-ui/react";
import {
	ActivitiesAtHomeSection,
	ActivitiesSection,
	GrowthProductsSection,
	HeroSection,
	MissionSection,
	ParentingServicesSection,
} from "../components/home";

export default function Home({}) {
	return (
		<VStack spacing="48px" w="100%">
			<HeroSection />
			<MissionSection />
			<ActivitiesSection />
			<ActivitiesAtHomeSection />
			<GrowthProductsSection />
			<ParentingServicesSection />
		</VStack>
	);
}
