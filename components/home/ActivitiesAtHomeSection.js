import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../general";

import activityImage1 from "../../public/home/activities at home/activity-home-01.png";
import activityImage2 from "../../public/home/activities at home/activity-home-02.png";
import activityImage3 from "../../public/home/activities at home/activity-home-03.png";
import activityImage4 from "../../public/home/activities at home/activity-home-04.png";
import activityImage5 from "../../public/home/activities at home/activity-home-05.png";
import activityImage6 from "../../public/home/activities at home/activity-home-06.png";
import activityImage7 from "../../public/home/activities at home/activity-home-07.png";
import activityImage8 from "../../public/home/activities at home/activity-home-08.png";

const activityImages = [
	activityImage1,
	activityImage2,
	activityImage3,
	activityImage4,
	activityImage5,
	activityImage6,
	activityImage7,
	activityImage8,
];
function ActivitiesAtHomeSection() {
	const router = useRouter();

	return (
		<VStack
			spacing="12"
			width={{ base: "calc(100% - 32px)", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			justifyContent="center"
			py="12"
			alignItems="center"
		>
			<VStack
				spacing="24px"
				data-aos="fade-up"
				data-aos-easing="ease-in-out"
				data-aos-duration={1000}
				data-aos-delay={200}
			>
				<VStack
					spacing="16px"
					alignItems="center"
					textAlign="center"
					w={{ base: "100%", xl: "760px" }}
				>
					<Text fontWeight="medium">Activities At-Home</Text>
					<Heading size="md">
						Want to bond and do <br />
						things with your child?
					</Heading>
					<Heading size="sm">
						Unsure of what will work for your context?
					</Heading>
					<Text>
						Nudge makes it easy. From Montessori tasks to daily
						science experiments, from art & craft projects to
						conversational games, Nudge brings you the world&apos;s
						best collection of at-home activities for you to bond
						and engage with your child and beat harmful screen-time.
					</Text>
				</VStack>
				<Button
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
			</VStack>
			<ActivitiesGrid />
		</VStack>
	);
}

export function ActivitiesGrid() {
	return (
		<SimpleGrid
			rows={{ base: 4, xl: 2 }}
			columns={{ base: 2, xl: 4 }}
			spacing={{ base: "16px", xl: "40px" }}
			data-aos="fade-up"
			data-aos-easing="ease-in-out"
			data-aos-duration={1000}
			data-aos-delay={200}
		>
			<Image
				src={activityImages[0]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[1]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[2]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[3]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[4]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[5]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[6]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
			<Image
				src={activityImages[7]}
				alt="Picture of Activity"
				width={260}
				height={260}
			/>
		</SimpleGrid>
	);
}
export default ActivitiesAtHomeSection;
