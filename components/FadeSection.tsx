"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type FadeSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function FadeSection({ id, className, children }: FadeSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-12% 0px -12% 0px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
