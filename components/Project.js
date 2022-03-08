// import { HStack, Text, VStack, Image } from "@chakra-ui/react";

// const Project = ({ name, tags, title, description, image }) => {
// 	name = "Tweek Labs";
// 	tags = ["UX Research", "UI Design", "Development"];
// 	title = "Sports performance analytics";
// 	description =
// 		"Designed and developed tablet and mobile apps for analysing sports metrics for coaches and players.";
// 	image = "../public/tweek-labs.png";
// 	const _image = require("../public/tweek-labs.png");
// 	return (
// 		<HStack>
// 			<VStack>
// 				<Text fontSize="5xl" fontWeight="extrabold">
// 					{name}
// 				</Text>
// 				{tags.map((tag) => (
// 					<Text key={tag} fontSize="1xl" fontWeight="bold">
// 						{tag}
// 					</Text>
// 				))}
// 			</VStack>
// 			<VStack>
// 				<Image src={_image} alt={name} />
// 			</VStack>
// 			<VStack>
// 				<Text fontSize="3xl" fontWeight="bold">
// 					{title}
// 				</Text>
// 				<Text color="lemongrey.100">{description}</Text>
// 			</VStack>
// 		</HStack>
// 	);
// };

// export default Project;
