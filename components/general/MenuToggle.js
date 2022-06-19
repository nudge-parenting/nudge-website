import * as React from "react";
import { motion } from "framer-motion";

const MotionPath = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 18%)"
		strokeLinecap="round"
		{...props}
	/>
);

const MenuToggle = ({ toggle }) => (
	<button
		onClick={toggle}
		style={{
			zIndex: 50,
			marginTop: 10,
			position: "fixed",
			WebkitTapHighlightColor: "transparent",
			WebkitTouchCallout: "none",
			WebkitUserSelect: "none",
			KhtmlUserSelect: "none",
			MozUserSelect: "none",
			msUserSelect: "none",
			userSelect: "none",
		}}
	>
		<svg width="23" height="23" viewBox="0 0 23 23">
			<MotionPath
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			{/* <MotionPath
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/> */}
			<MotionPath
				variants={{
					closed: { d: "M 2 12.346 L 20 12.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</button>
);

export default MenuToggle;
