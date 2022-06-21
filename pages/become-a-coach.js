import { VStack } from "@chakra-ui/react";
import {
	BacCta,
	HeroSection,
	WhatActivitiesSection,
	WhatNudgeCoachesDoSection,
} from "../components/become a coach";

function BecomeACoach() {
	return (
		<VStack spacing="48px" w="100%" pb="12">
			<HeroSection />
			<WhatNudgeCoachesDoSection />
			<BacCta />
			<WhatActivitiesSection />
		</VStack>
	);
}

export default BecomeACoach;
