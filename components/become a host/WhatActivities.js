import {
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	VStack,
} from "@chakra-ui/react";
import { Button } from "../general";
import { ActivitiesGrid } from "../home/ActivitiesAtHomeSection";

import stemActivityImage1 from "../../public/become a host/activities/STEM/stemActivityImage01.png";
import stemActivityImage2 from "../../public/become a host/activities/STEM/stemActivityImage02.png";
import stemActivityImage3 from "../../public/become a host/activities/STEM/stemActivityImage03.png";
import stemActivityImage4 from "../../public/become a host/activities/STEM/stemActivityImage04.png";

import lifeSkillActivityImage1 from "../../public/become a host/activities/life skills/lifeSkillActivity01.png";
import lifeSkillActivityImage2 from "../../public/become a host/activities/life skills/lifeSkillActivity02.png";
import lifeSkillActivityImage3 from "../../public/become a host/activities/life skills/lifeSkillActivity03.png";
import lifeSkillActivityImage4 from "../../public/become a host/activities/life skills/lifeSkillActivity04.png";

import worldDiscoveryActivityImage1 from "../../public/become a host/activities/world discovery/worldDiscoveryActivityImage01.png";
import worldDiscoveryActivityImage2 from "../../public/become a host/activities/world discovery/worldDiscoveryActivityImage02.png";
import worldDiscoveryActivityImage3 from "../../public/become a host/activities/world discovery/worldDiscoveryActivityImage03.png";
import worldDiscoveryActivityImage4 from "../../public/become a host/activities/world discovery/worldDiscoveryActivityImage04.png";

import creativeSkillsActivityImage1 from "../../public/become a host/activities/creative skills/creativeSkillsActivityImage01.png";
import creativeSkillsActivityImage2 from "../../public/become a host/activities/creative skills/creativeSkillsActivityImage02.png";
import creativeSkillsActivityImage3 from "../../public/become a host/activities/creative skills/creativeSkillsActivityImage03.png";
import creativeSkillsActivityImage4 from "../../public/become a host/activities/creative skills/creativeSkillsActivityImage04.png";

const stemActivityImages = [
	stemActivityImage1,
	stemActivityImage2,
	stemActivityImage3,
	stemActivityImage4,
];

const lifeSkillActivityImages = [
	lifeSkillActivityImage1,
	lifeSkillActivityImage2,
	lifeSkillActivityImage3,
	lifeSkillActivityImage4,
];

const worldDiscoveryActivityImages = [
	worldDiscoveryActivityImage1,
	worldDiscoveryActivityImage2,
	worldDiscoveryActivityImage3,
	worldDiscoveryActivityImage4,
];

const creativeSkillsActivityImages = [
	creativeSkillsActivityImage1,
	creativeSkillsActivityImage2,
	creativeSkillsActivityImage3,
	creativeSkillsActivityImage4,
];

function WhatActivitiesSection() {
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="12"
		>
			<VStack
				textAlign="center"
				spacing="32px"
				w={{
					base: "100%",
					xl: "760px",
				}}
			>
				<VStack textAlign="center" spacing="16px" id="nudge-activities">
					<Heading>
						What kind of <br />
						<Heading as="span" color="orange.500">
							activities
						</Heading>{" "}
						will I host?
					</Heading>
					<Text>
						In Nudge activities, children will explore all kinds of
						things like building a radio, human evolution, tangrams,
						art of gratefulness, climate change, fractal art,
						nurturing a growth mindset, quantum computing, becoming
						a better reader, and so much more.
					</Text>
				</VStack>
				<Button>apply now</Button>
			</VStack>
			<ActivityTabs />
		</VStack>
	);
}

function ActivityTabs() {
	return (
		<Tabs
			variant="soft-rounded"
			variantColor="orange.500"
			alignItems="center"
			// w="100%"
		>
			<TabList justifyContent="center">
				<Tab>STEM</Tab>
				<Tab>Life Skills</Tab>
				<Tab>World Discovery</Tab>
				<Tab>Creative Skills</Tab>
			</TabList>
			<TabPanels mt="32px" minH="20vh">
				<TabPanel>
					<ActivitiesGrid activityImages={stemActivityImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid activityImages={lifeSkillActivityImages} />
				</TabPanel>

				<TabPanel>
					<ActivitiesGrid
						activityImages={worldDiscoveryActivityImages}
					/>
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid
						activityImages={creativeSkillsActivityImages}
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default WhatActivitiesSection;
