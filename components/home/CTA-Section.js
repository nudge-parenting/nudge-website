import { Heading, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Button } from "../general";

function CTASection() {
	const router = useRouter();
	return (
		<VStack
			w={{ base: "calc(100% - 32px)", xl: "1160px" }}
			bgImage="./home/CTA-background-image.png"
			borderRadius="12px"
			h="524px"
			my="12"
			justifyContent="center"
			alignItems="start"
			p="12"
			data-aos="fade-up"
			data-aos-easing="ease-in-out"
			data-aos-duration={1000}
			data-aos-delay={0}
		>
			<VStack
				spacing="32px"
				w={{ base: "100%", xl: "370px" }}
				alignItems="start"
			>
				<VStack spacing="16px" alignItems="start">
					<Heading size="md" color="white">
						Become an early Nudgester
					</Heading>
					<Text color="white" fontWeight="300">
						Join our early community of enthusiastic parents and
						you&apos;ll be the first to know when we launch near
						you.
					</Text>
				</VStack>
				<Button
					variant="alpha"
					onClick={() => {
						router.push("/join-the-waitlist");
					}}
				>
					join the waitlist
				</Button>
			</VStack>
		</VStack>
	);
}

export default CTASection;
