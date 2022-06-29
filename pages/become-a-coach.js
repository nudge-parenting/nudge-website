import { VStack } from "@chakra-ui/react";
import {
	BacCta,
	EarningPotentialSection,
	HeroSection,
	HowSection,
	PerksSection,
	WhatActivitiesSection,
	WhatNudgeCoachesDoSection,
} from "../components/become a coach";

function BecomeACoach() {
	return (
		<VStack spacing="48px" w="100%" pb="12">
			<HeroSection />
			<EarningPotentialSection />
			<WhatNudgeCoachesDoSection />
			<BacCta />
			<WhatActivitiesSection />

			<PerksSection />
			<HowSection />
		</VStack>
	);
}

export default BecomeACoach;
