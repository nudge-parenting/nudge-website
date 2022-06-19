import { Box, Heading, Stack, Text, VStack, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "../general";

function GrowthProductsSection() {
	const router = useRouter();

	return (
		<Stack
			direction={{
				base: "column-reverse",
				xl: "row",
			}}
			spacing="24"
			width={{ base: "100%", xl: "1160px" }}
			mx={{ base: "0px", xl: "auto" }}
			// justifyContent="space-between"
			py="12"
			alignItems={{ base: "center", xl: "start" }}
			justifyContent="space-between"
		>
			<Box
				h={{
					base: "320px",
					xl: "490px",
				}}
				w={{
					base: "100%",
					xl: "460px",
				}}
				// bg="pink.200"
				position="relative"
				overflowX={{ base: "clip", xl: "visible" }}
			>
				<Image
					position="absolute"
					bottom="-84px"
					left="-79px"
					src="/home/products/svg-01.svg"
					alt="svg shape"
					zIndex={-1}
					sizes={{
						base: "10px",
						xl: "100%",
					}}
				/>
				<Image
					position="absolute"
					bottom="-107px"
					right="-157px"
					src="/home/products/svg-02.svg"
					alt="svg shape"
					zIndex={-1}
				/>
				<Image
					position="absolute"
					top="-79px"
					right="-43px"
					src="/home/products/svg-03.svg"
					alt="svg shape"
					zIndex={-1}
				/>
				<Image
					position="absolute"
					top="-54px"
					left="-50px"
					src="/home/products/svg-04.svg"
					alt="svg shape"
					zIndex={-1}
				/>
				<Image
					position="absolute"
					right="16px"
					bottom="0px"
					src="/home/products/product-01.png"
					width={{
						base: 218,
						xl: 325,
					}}
					height={{
						base: 117,
						xl: 175,
					}}
					alt="growth products by Nudge (apparel)"
				/>
				<Image
					position="absolute"
					top="-5px"
					right="16px"
					src="/home/products/product-02.png"
					width={{
						base: 195,
						xl: 290,
					}}
					height={{
						base: 197,
						xl: 294,
					}}
					alt="growth products by Nudge (games)"
				/>
				<Image
					position="absolute"
					bottom="40px"
					left="20px"
					src="/home/products/product-03.png"
					width={{
						base: 135,
						xl: 202,
					}}
					height={{
						base: 157,
						xl: 234,
					}}
					alt="growth products by Nudge (educational kits)"
				/>
				<Image
					position="absolute"
					top="0px"
					left="40px"
					src="/home/products/product-04.png"
					width={{
						base: 148,
						xl: 220,
					}}
					height={{
						base: 111,
						xl: 166,
					}}
					alt="growth products by Nudge (books)"
				/>
			</Box>

			<VStack
				spacing="24px"
				alignItems={{ base: "center", xl: "start" }}
				width={{ base: "calc(100% - 32px)", xl: "560px" }}
				textAlign={{ base: "center", xl: "left" }}
			>
				<VStack
					spacing="16px"
					alignItems={{ base: "center", xl: "start" }}
				>
					<Text fontWeight="medium">Growth Products</Text>
					<Heading size="md">
						Need to buy something that engages your child?
					</Heading>
					<Heading size="sm">
						Want to gift something thoughtful to a friend’s child?
					</Heading>
					<Text>
						Nudge has you covered! Nudge brings you a
						carefully-curated collection of growth products that
						help make positive parenting a breeze.
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
		</Stack>
	);
}

export default GrowthProductsSection;
