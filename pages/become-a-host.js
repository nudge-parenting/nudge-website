import { VStack } from "@chakra-ui/react";
import ReactGA from "react-ga4";
import {
	BacCta,
	EarningPotentialSection,
	HeroSection,
	HowSection,
	PerksSection,
	WhatActivitiesSection,
	HowHostingWorks,
} from "../components/become a host";
ReactGA.send({ hitType: "pageview", page: "/host-path" });
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
