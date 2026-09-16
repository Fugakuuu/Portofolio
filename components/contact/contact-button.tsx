"use client";

import { Mail } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ContactButton(): ReactNode {
  const handleScroll = (): void => {
    const element = document.getElementById("contact-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <motion.button
      type="button"
      layout
      onClick={handleScroll}
      transition={{ layout: { duration: 0.55, ease: EASE } }}
      style={{ borderRadius: 12 }}
      className="focus-ring relative inline-flex h-11 cursor-pointer items-center justify-center gap-2 bg-foreground px-5 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
    >
      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>Contact</span>
    </motion.button>
  );
}
