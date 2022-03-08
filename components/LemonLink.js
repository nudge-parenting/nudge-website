import { Text } from "@chakra-ui/react";
import Link from "next/link";
const LemonLink = ({
	children,
	path = "/default",
	target = "/",
	onClick = null,
}) => {
	const isSelected = path === target;
	return (
		<Link href={target} passHref>
			<Text
				onClick={onClick}
				style={{
					transition: "all 0.5s",
				}}
				textAlign="left"
				_hover={{
					color: "gray.800",
					cursor: "pointer",
				}}
				px={["2"]}
				fontSize={["sm", "sm"]}
				fontWeight="medium"
				color={isSelected ? "nudgeblack.100" : "lemongrey.200"}
			>
				{children}
			</Text>
		</Link>
	);
};

export default LemonLink;
