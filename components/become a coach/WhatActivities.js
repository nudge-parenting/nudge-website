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

import stemActivityImage1 from "../../public/home/activities at home/activity-home-01.png";
import stemActivityImage2 from "../../public/home/activities at home/activity-home-02.png";
import stemActivityImage3 from "../../public/home/activities at home/activity-home-03.png";
import stemActivityImage4 from "../../public/home/activities at home/activity-home-04.png";
import stemActivityImage5 from "../../public/home/activities at home/activity-home-05.png";
import stemActivityImage6 from "../../public/home/activities at home/activity-home-06.png";
import stemActivityImage7 from "../../public/home/activities at home/activity-home-07.png";
import stemActivityImage8 from "../../public/home/activities at home/activity-home-08.png";

import lifeSkillActivityImage1 from "../../public/become a coach/life skills/lifeSkillActivity01.png";
import lifeSkillActivityImage2 from "../../public/become a coach/life skills/lifeSkillActivity02.png";
import lifeSkillActivityImage3 from "../../public/become a coach/life skills/lifeSkillActivity03.png";
import lifeSkillActivityImage4 from "../../public/become a coach/life skills/lifeSkillActivity04.png";
import lifeSkillActivityImage5 from "../../public/become a coach/life skills/lifeSkillActivity05.png";
import lifeSkillActivityImage6 from "../../public/become a coach/life skills/lifeSkillActivity06.png";
import lifeSkillActivityImage7 from "../../public/become a coach/life skills/lifeSkillActivity07.png";
import lifeSkillActivityImage8 from "../../public/become a coach/life skills/lifeSkillActivity08.png";

import creativeMovementActivityImage1 from "../../public/become a coach/creative skills/creativeSkillActivity01.png";
import creativeMovementActivityImage2 from "../../public/become a coach/creative skills/creativeSkillActivity02.png";
import creativeMovementActivityImage3 from "../../public/become a coach/creative skills/creativeSkillActivity03.png";
import creativeMovementActivityImage4 from "../../public/become a coach/creative skills/creativeSkillActivity04.png";

import artCraftActivityImage1 from "../../public/become a coach/art/artSkillActivity01.png";
import artCraftActivityImage2 from "../../public/become a coach/art/artSkillActivity02.png";
import artCraftActivityImage3 from "../../public/become a coach/art/artSkillActivity03.png";
import artCraftActivityImage4 from "../../public/become a coach/art/artSkillActivity04.png";
import artCraftActivityImage5 from "../../public/become a coach/art/artSkillActivity05.png";
import artCraftActivityImage6 from "../../public/become a coach/art/artSkillActivity06.png";
import artCraftActivityImage7 from "../../public/become a coach/art/artSkillActivity07.png";

const stemActivityImages = [
	stemActivityImage1,
	stemActivityImage2,
	stemActivityImage3,
	stemActivityImage4,
	stemActivityImage5,
	stemActivityImage6,
	stemActivityImage7,
	stemActivityImage8,
];

const lifeSkillActivityImages = [
	lifeSkillActivityImage1,
	lifeSkillActivityImage2,
	lifeSkillActivityImage3,
	lifeSkillActivityImage4,
	lifeSkillActivityImage5,
	lifeSkillActivityImage6,
	lifeSkillActivityImage7,
	lifeSkillActivityImage8,
];

const creativeMovementActivityImages = [
	creativeMovementActivityImage1,
	creativeMovementActivityImage2,
	creativeMovementActivityImage3,
	creativeMovementActivityImage4,
];

const artSkillActivitiesImages = [
	artCraftActivityImage1,
	artCraftActivityImage2,
	artCraftActivityImage3,
	artCraftActivityImage4,
	artCraftActivityImage5,
	artCraftActivityImage6,
	artCraftActivityImage7,
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
						will I run
						<br /> as a Nudge Coach?
					</Heading>
					<Text>
						The Nudge library has 1000s of carefully-designed
						offline and online activities on everything from
						life-skills to SEL, art & craft, STEM and many more
						themes. An activity&apos;s duration can range from a
						single session to multiple sessions span several weeks.
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
				<Tab>Art & Craft</Tab>
				<Tab>Life-Skills</Tab>
				<Tab>Creative Movement</Tab>
			</TabList>
			<TabPanels mt="32px" minH="20vh">
				<TabPanel>
					<ActivitiesGrid activityImages={stemActivityImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid activityImages={artSkillActivitiesImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid activityImages={lifeSkillActivityImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid
						activityImages={creativeMovementActivityImages}
					/>
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default WhatActivitiesSection;
