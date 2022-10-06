import { Spinner, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { ActivityTemplate } from "../../components/learning experiences";
import instances from "./instances";

function ActivityPage() {
	const router = useRouter();
	const { aid } = router.query;

	// if aid is not define or not a key in instances throw to the 404 page
	if (!aid || !instances[aid]) {
		return (
			<VStack m="20" spacing="10" textAlign="center">
				<Spinner size={"lg"} />
				<Text size="md">
					Finding the activity you&apos;re looking for 🔎...
				</Text>
			</VStack>
		);
	}

	return <ActivityTemplate {...instances[aid]} />;
}

export default ActivityPage;
