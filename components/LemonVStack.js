import { VStack } from "@chakra-ui/layout";

const LemonVStack = ({ children }) => {
	return (
		<VStack
			// height="90vh"
			width="100%"
			mt={{ base: "-12", md: "110", lg: "110", xl: "16", "2xl": "38" }}
			mx={{
				base: "8",
				md: "86",
				xl: "200",
				"2xl": "360",
			}}
			spacing={["5", "10"]}
			justifyContent="center"
		>
			{children}
		</VStack>
	);
};
export default LemonVStack;
