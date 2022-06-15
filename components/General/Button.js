import { Box } from "@chakra-ui/react";

function Button() {
	return (
		<Box
			as="button"
			// height="24px"
			lineHeight="24px"
			transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
			// border="1px"
			px="20px"
			py="12px"
			borderRadius="12px"
			fontSize="16px"
			fontWeight="semibold"
			bg="orange.500"
			borderColor="#ccd0d5"
			color="#fff"
			_hover={{ bg: "orange.600" }}
			_active={{
				bg: "#dddfe2",
				transform: "scale(0.98)",
				borderColor: "#bec3c9",
			}}
			_focus={{
				boxShadow:
					"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
			}}
		>
			join the waitlist
		</Box>
	);
}
export default Button;
