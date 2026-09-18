"use client";

import { Briefcase, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";

type Entry = {
  company: string;
  role: string;
  period: string;
  logo?: string;
  slug?: string;
  brand?: string;
};

const ENTRIES: Entry[] = [
  {
    company: "Al-Quran Waqf Agency",
    role: "IT Support",
    period: "2021 - 2022",
    brand: "#0AE448",
    logo: "/bwa.webp",
  },
  {
    company: "Institute of Computerization Development",
    role: "Lab Assistant",
    period: "2023 – Present",
    brand: "#0AE448",
    logo: "https://vm.lepkom.gunadarma.ac.id/assets/front/images/logo-lepkom.png",
  },
];

const COLLAPSED_COUNT = 2.5;
const ROW_HEIGHT = 64;
const ROW_GAP = 8;

export function Experience(): ReactNode {
  const [open, setOpen] = useState(false);
  const collapsedHeight =
    Math.floor(COLLAPSED_COUNT) * ROW_HEIGHT +
    Math.floor(COLLAPSED_COUNT) * ROW_GAP +
    (COLLAPSED_COUNT % 1) * ROW_HEIGHT;
  const hiddenCount = ENTRIES.length - Math.floor(COLLAPSED_COUNT);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Experience
      </h3>
      <div
        className={`border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative overflow-hidden rounded-4xl border px-2 pt-2 sm:px-4 sm:pt-4 ${
          open ? "pb-2 sm:pb-4" : "pb-0"
        }`}
      >
        <motion.div
          className="relative"
          initial={false}
          animate={{
            height: open ? "auto" : collapsedHeight,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex flex-col gap-2">
            {ENTRIES.map((entry) => (
              <li
                key={`${entry.company}-${entry.period}`}
                className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
                style={{ minHeight: ROW_HEIGHT }}
              >
                <CompanyLogo entry={entry} />
                <div className="flex min-w-0 flex-col">
                  <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                    {entry.company}
                  </span>
                  <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                    {entry.role}
                    <span className="text-foreground/30 mx-2">•</span>
                    <span className="text-foreground/55">{entry.period}</span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <AnimatePresence>
          {!open && (
            <motion.div
              key="fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0"
              style={{
                height: ROW_HEIGHT,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                maskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent 0%, black 80%)",
              }}
            />
          )}
        </AnimatePresence>

        {hiddenCount > 0 && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className={`focus-ring text-foreground flex w-full cursor-pointer items-center justify-center gap-1.5 bg-transparent text-[15px] font-medium tracking-tight ${
              open
                ? "relative mt-4"
                : "absolute inset-x-0 bottom-0 z-10 py-3 sm:py-4"
            }`}
          >
            {open ? "Show less" : `Show ${hiddenCount} more`}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="inline-flex"
            >
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </button>
        )}
      </div>
    </div>
  );
}

function CompanyLogo({ entry }: { entry: Entry }): ReactNode {
  const [hasError, setHasError] = useState(false);
  const initials = entry.company.charAt(0);

  const imageSrc =
    entry.logo ||
    (entry.slug && (entry.slug.startsWith("/") || entry.slug.startsWith("http"))
      ? entry.slug
      : entry.slug
        ? `https://cdn.simpleicons.org/${entry.slug}`
        : null);

  const showImage = Boolean(imageSrc && !hasError);

  return (
    <span
      className="border-foreground/15 inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border p-1 transition-colors"
      aria-hidden="true"
      style={{
        backgroundColor: showImage
          ? "transparent"
          : (entry.brand ?? "transparent"),
      }}
    >
      {showImage ? (
        <img
          src={imageSrc!}
          alt={entry.company}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          draggable={false}
          onError={() => setHasError(true)}
        />
      ) : entry.brand ? (
        <span className="text-[17px] font-bold tracking-tight text-white">
          {initials}
        </span>
      ) : (
        <Briefcase
          className="h-5 w-5 text-foreground/70"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
