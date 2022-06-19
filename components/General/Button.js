import { Box } from "@chakra-ui/react";

function Button({ variant = "primary", children, ...props }) {
	const variantProps = {
		primary: {
			bg: "orange.500",
			textColor: "white",
			hoverColor: "orange.600",
			activeBg: "orange.700",
		},
		secondary: {
			bg: "orange.50",
			textColor: "orange.700",
			hoverColor: "orange.100",
			activeBg: "orange.300",
		},
		alpha: {
			bg: "rgb(255,255,255,0.2)",
			textColor: "#fff",
			hoverColor: "rgb(255,255,255,0.4)",
			activeBg: "rgb(255,255,255,0.1)",
		},
	};
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
			bg={variantProps[variant].bg}
			color={variantProps[variant].textColor}
			_hover={{ bg: variantProps[variant].hoverColor }}
			_active={{
				bg: variantProps[variant].activeBg,
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
