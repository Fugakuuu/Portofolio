"use client";

import { GraduationCap } from "lucide-react";
import { useState, type ReactNode } from "react";

type Entry = {
  school: string;
  degree: string;
  period: string;
  logo?: string;
  slug?: string;
};

const ENTRIES: Entry[] = [
  {
    school: "High School Muhammadiyah 7 Jakarta",
    degree: "Computer and Network Engineering",
    period: "2020 – 2022",
    logo: "/Dosq.webp",
  },
  {
    school: "University Gunadarma",
    degree: "Information System",
    period: "2023 – Present",
    logo: "/Gundar.webp",
  },
];

const ROW_HEIGHT = 64;

export function Education(): ReactNode {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-foreground text-[15px] font-semibold tracking-tight">
        Education
      </h3>
      <div className="border-foreground/5 bg-foreground/2 dark:bg-foreground/5 relative rounded-4xl border p-2 sm:p-4">
        <ul className="flex flex-col gap-2">
          {ENTRIES.map((entry) => (
            <li
              key={`${entry.school}-${entry.period}`}
              className="bg-background border-foreground/5 flex items-center gap-4 rounded-3xl border p-2"
              style={{ minHeight: ROW_HEIGHT }}
            >
              <SchoolLogo entry={entry} />
              <div className="flex min-w-0 flex-col">
                <span className="text-foreground text-[17px] font-semibold tracking-tight sm:text-[18px]">
                  {entry.school}
                </span>
                <span className="text-foreground/65 mt-0.5 text-[14px] tracking-tight sm:text-[15px]">
                  {entry.degree}
                  <span className="text-foreground/30 mx-2">•</span>
                  <span className="text-foreground/55">{entry.period}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SchoolLogo({ entry }: { entry: Entry }): ReactNode {
  const [hasError, setHasError] = useState(false);

  // Tentukan sumber gambar: bisa dari properti `logo` langsung,
  // atau jika slug diawali dengan "/" atau "http", gunakan itu,
  // atau coba cdn simpleicons jika slug biasa.
  const imageSrc =
    entry.logo ||
    (entry.slug && (entry.slug.startsWith("/") || entry.slug.startsWith("http"))
      ? entry.slug
      : entry.slug
        ? `https://cdn.simpleicons.org/${entry.slug}`
        : null);

  return (
    <span
      className="border-foreground/15 bg-foreground/[0.03] inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[14px] border p-1"
      aria-hidden="true"
    >
      {imageSrc && !hasError ? (
        <img
          src={imageSrc}
          alt={entry.school}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
          draggable={false}
          onError={() => setHasError(true)}
        />
      ) : (
        <GraduationCap
          className="h-5 w-5 text-foreground/70"
          strokeWidth={2}
          aria-hidden="true"
        />
      )}
    </span>
  );
}
