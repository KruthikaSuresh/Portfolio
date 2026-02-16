import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ParallaxWrapperProps {
  children: ReactNode;
  offset?: number;
}

export function ParallaxWrapper({ children, offset = 50 }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
