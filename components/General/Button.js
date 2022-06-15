import { Box } from "@chakra-ui/react";

function Button({ variant = "primary", children, ...props }) {
	return (
		<Box
			as="button"
			lineHeight="24px"
			transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
			px="20px"
			py="12px"
			borderRadius="12px"
			fontSize="16px"
			fontWeight="semibold"
			bg={variant === "primary" ? "orange.500" : "orange.50"}
			color={variant === "primary" ? "white" : "orange.700"}
			_hover={{ bg: variant === "primary" ? "orange.600" : "orange.100" }}
			_active={{
				bg: variant === "primary" ? "orange.700" : "orange.300",
				transform: "scale(0.98)",
			}}
			_focus={{
				boxShadow: "0 0 1px 2px #F3985D, 0 1px 1px #F3985D",
			}}
			{...props}
		>
			{children}
		</Box>
	);
}
export default Button;
