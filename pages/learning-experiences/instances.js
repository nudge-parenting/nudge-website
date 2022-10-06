import { Avatar, Text } from "@chakra-ui/react";
import {
	microscopeImage,
	rubiksCubeActivityImage,
} from "../../public/learning experiences";

const instances = {
	// RBK001: {
	// 	activityImage: rubiksCubeActivityImage,
	// 	activityName: "Learn to Solve the Rubik's Cube",
	// 	activityAddress:
	// 		"Ivory Court - 4, House No - 704, Essel Tower, MG Road",
	// 	activityDescription: () => {
	// 		return (
	// 			<Text size="lg" lineHeight="26px">
	// 				Solving the Rubik&apos;s Cube is a great way to improve your
	// 				memory by learning a process that creates maximum efficiency
	// 				within the motor and memory systems. It is a great way to
	// 				improve your patience and problem-solving skills.
	// 				<br />
	// 				<br />
	// 				When a child is solving the Rubik&apos;s Cube, they have to
	// 				map out their steps in advance which strengthens their
	// 				logical and spatial reasoning abilities. Not just this, but
	// 				solving a cube can even help break mild addictions and help
	// 				the child develop a better sense of gratification.
	// 				<br />
	// 				<br />
	// 				The Nudge&apos;s way of learning also teaches the child how
	// 				to collaborate with others to solve difficult problems. Book
	// 				your slot today and allow your child to experience a unique
	// 				way of learning 🎉.
	// 			</Text>
	// 		);
	// 	},
	// 	activityExpert: "Abhimanyu",
	// 	activityHost: "Pooja",
	// 	expertImage: () => <Avatar size="lg" src="../experts/abhimanyu.png" />,
	// 	hostImage: () => (
	// 		<Avatar
	// 			size="lg"
	// 			src="https://avatars0.githubusercontent.com/u/52709818"
	// 		/>
	// 	),
	// 	activityPrice: 2000,
	// 	whatsappMessage:
	// 		"Hello+👋+I+am+here+to+sign+up+for+the+rubiks+cube+workshop",
	// 	activityDate: "Sunday, 14th July",
	// 	activityDuration: "9 hours",
	// 	activityTakeHomeItems: [
	// 		"1x High Quality Speed Cube",
	// 		"1x NudgeBook Rubik's Cube Guide",
	// 	],
	// },
	RBK002: {
		activityImage: rubiksCubeActivityImage,
		activityName: "Learn to Solve the Rubik's Cube",
		activityAddress: "Dlf Royalton club, Dlf phase 5",
		activityDescription: () => {
			return (
				<Text size="lg" lineHeight="26px">
					Solving the Rubik&apos;s Cube is a great way to improve your
					memory by learning a process that creates maximum efficiency
					within the motor and memory systems. It is a great way to
					improve your patience and problem-solving skills.
					<br />
					<br />
					When a child is solving the Rubik&apos;s Cube, they have to
					map out their steps in advance which strengthens their
					logical and spatial reasoning abilities. Not just this, but
					solving a cube can even help break mild addictions and help
					the child develop a better sense of gratification.
					<br />
					<br />
					The Nudge&apos;s way of learning also teaches the child how
					to collaborate with others to solve difficult problems. Book
					your slot today and allow your child to experience a unique
					way of learning 🎉.
				</Text>
			);
		},
		activityExpert: "Abhimanyu",
		activityHost: "Pooja",
		expertImage: () => <Avatar size="lg" src="../experts/abhimanyu.png" />,
		hostImage: () => (
			<Avatar
				size="lg"
				src="https://avatars0.githubusercontent.com/u/52709818"
			/>
		),
		activityPrice: 2000,
		activityDate: "Sunday, 16th October",
		activityDuration: "3 hours",
		activityTakeHomeItems: [
			"1x High Quality Speed Cube",
			"1x NudgeBook Rubik's Cube Guide",
		],
		razorpayLink: "https://rzp.io/l/V9QPyh5",
	},
	MSC001: {
		activityImage: microscopeImage,
		activityName: "Invisible but there: Tiny ghosts and other friends",
		activityAddress: "Dlf Royalton club, Dlf phase 5",
		activityDescription: () => {
			return (
				<Text size="lg" lineHeight="26px">
					This activity takes your child through the exciting
					adventure of discovering that a microbe can cause a disease,
					with the help of a video game format augmented by hands-on
					tasks involving microscopes.
					<br />
					<br />
					Apart from the information gain, your child will learn the
					scientific method: investigating, developing a hypothesis,
					then testing the hypothesis. This enhances their critical
					thinking, ability to identify conditional relationships, and
					reasoning skills. encourages them to identify as smart
					individuals who can practice STEM if they so choose. These
					processes also encourage your child&apos;s use of language,
					literacy, and mathematics skills in authentic ways.
					<br />
					<br />
					The Nudge way of learning also emphasises collaborative
					learning. This activity especially, also places emphasis on
					science as a collaborative subject, thus busting the myth
					that research is a lonely pursuit. Your child will learn to
					work in a team, to share ideas, to voice their own opinion
					and build off the ideas of others, and hence to work well
					with everyone in their team to win the special prize.
					<br />
					<br />
					Micrographs (pictures of specimens as observed from the
					microscope, like the one above) can also be extremely
					beautiful - possibly a new hobby for a budding
					microbiologist!
				</Text>
			);
		},
		activityExpert: "Saloni Singla",
		activityHost: "Pooja",
		expertImage: () => <Avatar size="lg" src="../experts/saloni.png" />,
		hostImage: () => (
			<Avatar
				size="lg"
				src="https://avatars0.githubusercontent.com/u/52709818"
			/>
		),
		activityPrice: 2500,
		activityDate: "Sunday, 15th October",
		activityDuration: "3 hours",
		activityTakeHomeItems: [
			"1x Polaroid Micrograph of your cheek cells",
			"1x Polaroid Micrograph of soil",
			"1x NudgeBook Activity Guide",
		],
		razorpayLink: "https://rzp.io/l/rtZb9fY5E",
	},
};

export default instances;
