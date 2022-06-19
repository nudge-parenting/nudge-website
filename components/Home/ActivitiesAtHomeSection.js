import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../general";

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
					src="/home/activities at home/activity-home-01.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-02.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-03.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-04.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-05.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-06.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-07.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
				<Image
					src="/home/activities at home/activity-home-08.png"
					alt="Picture of Activity"
					width={260}
					height={260}
				/>
			</SimpleGrid>
		</VStack>
	);
}

export default ActivitiesAtHomeSection;
