import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
};

export default function FadeIn({
  children,
  delay = 0,
}: FadeInProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
