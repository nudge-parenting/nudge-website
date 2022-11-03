import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Heading,
	Text,
	VStack,
} from "@chakra-ui/react";

function FAQ() {
	// array of FAQ objects
	const faqs = [
		{
			question: "What are my responsibilities as a Nudge Host?",
			answer: () => (
				<Text size="md">
					As a nudge host, your <b>two</b> primary responsibilities
					are
					<br />
					1. To arrange for a clean, well-lit space large enough to
					cater at least 12 students
					<br />
					2. To advertise the Nudge Activity happening at your venue
					<br />
					{"    "}A) Online (through WhatsApp, MyGate etc.)
					<br /> B) Offline (through physical posters that Nudge can
					put up near your venue)
					<br />
					<span
						style={{
							textDecoration: "underline",
						}}
					>
						All the material for advertising will be provided to you
						by Nudge.
					</span>
				</Text>
			),
		},
		{
			question: "Is “Nudge Activities” a regular class?",
			answer: () => (
				<Text size="md">
					No, Nudge Activities are one-time workshops that happen only
					on days (usually weekends) when kids have an off from their
					school. This is similar to weekend camps.
				</Text>
			),
		},

		{
			question: "Are the Activities related to any curriculum?",
			answer: () => (
				<Text size="md">
					No. Nudge Activities are light-touch activities that expose
					children to the natural world&apos;s incredible richness, to
					breakthrough scientific progress, to life-changing skills
					and habits, and to deeply satisfying creative endeavors.
				</Text>
			),
		},
		{
			question: "What type of activities will I host?",
			answer: () => (
				<Text size="md">
					Nudge Activities are broadly divided into 4 categories:
					<br />
					1. STEM:
					<br />- Learning to solve the Rubik&apos;s cube
					<br />- Exploring microscopes and microbes
					<br />- Morphology in Virtual Reality
					<br />- 3D Printing products
					<br />- Arduino-based circuits
					<br />
					2. Life Skills:
					<br />- How to be an empathy hero
					<br />- Building a growth mindset
					<br />
					3. Creative Skills:
					<br />- Learning to design UI for mobile apps
					<br />- Calligraphy
					<br />
					4. World Discovery:
					<br />- How Telegraphs were used in WW2
				</Text>
			),
		},
		{
			question: "What will be the timings for the activities?",
			answer: () => (
				<Text size="md">
					The duration of a Nudge Activity ranges from 1.5hrs to 3hrs.
					As a host you posses the local expertise to decide what will
					be the best time to conduct the activities. YOU decide the
					time slot and let us know when our expert should arrive at
					your venue to conduct the activity. We suggest two slots:
					**10:30 AM to 1:30 PM** and **4PM to 7PM.**
				</Text>
			),
		},
		{
			question: "What is the typical class size?",
			answer: () => (
				<Text size="md">
					Nudge Activities typically caters to an age-varied class
					size of 12-20 students.
				</Text>
			),
		},
		{
			question: "How will I get sign-ups for an activity?",
			answer: () => (
				<Text size="md">
					Nudge has a mobile app with which parents can enroll their
					kids for an activity. Your job is to share the app download
					link with parents to get sign-ups
				</Text>
			),
		},
		{
			question: "Do I need to provide any furniture or projector?",
			answer: () => (
				<Text size="md">
					If you have tables and chairs that can cater to at least 12
					children, perfect. If not, Nudge will setup their space with
					their own furniture. We will carry our own whiteboards,
					projector or any other devices needed for an activity.
				</Text>
			),
		},
		{
			question: "What age group does Nudge cater to?",
			answer: () => (
				<Text size="md">
					As of now, most of our activities are designed for ages
					8-15yo. Each activity has its own age-group.
				</Text>
			),
		},
	];
	//generate the accordion items
	const faqItems = faqs.map((faq, index) => {
		return (
			<AccordionItem key={index} py="4">
				<h2>
					<AccordionButton>
						<Text
							size="lg"
							fontWeight="semibold"
							color="black"
							textAlign="left"
						>
							{faq.question}
						</Text>
						<AccordionIcon />
					</AccordionButton>
				</h2>
				<AccordionPanel pb={4}>{faq.answer()}</AccordionPanel>
			</AccordionItem>
		);
	});
	console.log(faqItems);
	return (
		<VStack
			w="100%"
			px={{
				base: "32px",
				xl: "auto",
			}}
			py="12"
			spacing="60px"
		>
			<VStack
				w={{ base: "calc(100% - 32px)", xl: "800px" }}
				alignItems="center"
				spacing="4"
				textAlign={"center"}
			>
				<Heading size="md">
					Frequently Asked{" "}
					<Heading size="md" as="span" color="orange.500">
						Questions
					</Heading>{" "}
				</Heading>
				<Text>FAQs by Potential Nudge Hosts</Text>
			</VStack>
			<Accordion
				w={{ base: "calc(100% - 16px)", xl: "800px" }}
				allowToggle
				textAlign="left"
			>
				{
					// this is where the accordion items are generated
					faqItems
				}
			</Accordion>
		</VStack>
	);
}

export default FAQ;
