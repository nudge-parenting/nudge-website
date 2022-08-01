import { HStack, Text } from "@chakra-ui/react";

function MessagePill({ text = "Applications now open!" }) {
	return (
		<HStack
			p="4px"
			pr="16px"
			bg="orange.50"
			borderRadius="full"
			w="fit-content"
		>
			<Text
				fontSize="16px"
				lineHeight="20px"
				color="orange.700"
				fontWeight="medium"
				bg="white"
				borderRadius="full"
				py="4px"
				px="8px"
			>
				New
			</Text>
			<Text color="orange.700" fontSize="16px" lineHeight="20px">
				{text}
			</Text>
		</HStack>
	);
}

export default MessagePill;
