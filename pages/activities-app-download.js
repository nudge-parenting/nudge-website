import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";

function AppDownload() {
	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		// Windows Phone must come first because its UA also contains "Android"
		if (/windows phone/i.test(userAgent)) {
			window.location.href =
				"https://play.google.com/store/apps/details?id=com.nudgeverse.activities";
			return "Windows Phone";
		}

		if (/android/i.test(userAgent)) {
			window.location.href =
				"https://play.google.com/store/apps/details?id=com.nudgeverse.activities";
			return "Android";
		}

		// iOS detection from: http://stackoverflow.com/a/9039885/177710
		if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			window.location.href =
				"https://apps.apple.com/us/app/nudge-activities/id1644538345";
			return "iOS";
		}

		window.location.href =
			"https://play.google.com/store/apps/details?id=com.nudgeverse.activities";
		return "unknown";
	}

	useEffect(() => {
		getMobileOperatingSystem();
	}, []);

	return (
		<Center spacing="48px" w="100%" minH="85vh">
			<VStack spacing="4">
				<Heading as="h1" size="xl">
					Nudge Activities 🔬📕🌍🎨
				</Heading>
				<Text fontSize="lg">
					Download the{" "}
					<Text as="span" textDecoration="underline">
						<Link href="/become-a-host">Nudge Activities App</Link>
					</Text>{" "}
					today
				</Text>
			</VStack>
		</Center>
	);
}

export default AppDownload;
