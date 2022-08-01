import { VStack } from "@chakra-ui/react";
import {
	ActivitiesAtHomeSection,
	ActivitiesSection,
	CTASection,
	GrowthProductsSection,
	HeroSection,
	HowItWorksSection,
	MissionSection,
	ParentingServicesSection,
} from "../components/home";

export default function Home({}) {
	return (
		<VStack spacing="48px" w="100%" pb="12">
			<HeroSection />
			<HowItWorksSection />
			<ActivitiesSection />
			{/* <ActivitiesAtHomeSection /> */}
			<MissionSection />
			{/* <GrowthProductsSection />
			<ParentingServicesSection /> */}
			<CTASection />
		</VStack>
	);
}
