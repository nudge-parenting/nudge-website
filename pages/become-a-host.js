import { VStack } from "@chakra-ui/react";
import {
	BacCta,
	EarningPotentialSection,
	HeroSection,
	HowSection,
	PerksSection,
	WhatActivitiesSection,
	HowHostingWorks,
} from "../components/become a host";
function BecomeACoach() {
	return (
		<VStack spacing="48px" w="100%" pb="12">
			<HeroSection />
			<HowHostingWorks />
			<EarningPotentialSection />
			<BacCta />
			<WhatActivitiesSection />

			<PerksSection />
			<HowSection />
		</VStack>
	);
}

export default BecomeACoach;
