import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function StarField() {
	const { scrollYProgress } = useScroll();

	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 20,
	});

	const y = useTransform(smoothProgress, [0, 1], [0, -120]);

	return <motion.div className="star-field" style={{ y }} />;
}
