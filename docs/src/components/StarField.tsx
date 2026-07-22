import { motion, useScroll, useTransform } from "motion/react";

export default function StarField() {
	const { scrollYProgress } = useScroll();
	const y = useTransform(scrollYProgress, [0, 1], [0, -200]);

	return <motion.div className="star-field" style={{ y }} />;
}
