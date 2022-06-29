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
import activityImage1 from "../../public/home/activities at home/activity-home-01.png";
import activityImage2 from "../../public/home/activities at home/activity-home-02.png";
import activityImage3 from "../../public/home/activities at home/activity-home-03.png";
import activityImage4 from "../../public/home/activities at home/activity-home-04.png";
import activityImage5 from "../../public/home/activities at home/activity-home-05.png";
import activityImage6 from "../../public/home/activities at home/activity-home-06.png";
import activityImage7 from "../../public/home/activities at home/activity-home-07.png";
import activityImage8 from "../../public/home/activities at home/activity-home-08.png";

const stemActivityImages = [
	activityImage1,
	activityImage2,
	activityImage3,
	activityImage4,
	activityImage5,
	activityImage6,
	activityImage7,
	activityImage8,
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
				<VStack textAlign="center" spacing="16px">
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
					<ActivitiesGrid activityImages={stemActivityImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid activityImages={stemActivityImages} />
				</TabPanel>
				<TabPanel>
					<ActivitiesGrid activityImages={stemActivityImages} />
				</TabPanel>
			</TabPanels>
		</Tabs>
	);
}

export default WhatActivitiesSection;
