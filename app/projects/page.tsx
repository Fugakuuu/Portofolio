import { Projects } from "@/components/projects/projects";
import { LogoLoop, type LogoItem } from "@/components/ui/logo-loop";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import {
  SiGithub,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const metadata: Metadata = createMetadata({
  title: "Projects",
  description: "Selected work and case studies.",
  path: "/projects",
});

const TECH_LOGOS: LogoItem[] = [
  { node: <SiReact className="text-foreground transition-colors duration-300" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-foreground transition-colors duration-300" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-foreground transition-colors duration-300" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-foreground transition-colors duration-300" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs className="text-foreground transition-colors duration-300" />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiPostgresql className="text-foreground transition-colors duration-300" />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiGithub className="text-foreground transition-colors duration-300" />, title: "GitHub", href: "https://github.com" },
  { node: <SiJavascript className="text-foreground transition-colors duration-300" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
];

export default function ProjectsPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-275 px-6 pt-28 pb-12 sm:px-10 sm:pt-72 sm:pb-16">
        <FadeIn className="flex flex-col items-center gap-5 text-center">
          <h1 className="font-serif text-[2.25rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.75rem] lg:text-[3.25rem]">
            My recent work
          </h1>
          <p className="max-w-[33ch] text-[17px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[19px]">
            Experiments, collaborations, and projects I&rsquo;m especially proud to have shipped.
          </p>
        </FadeIn>
        <FadeIn delay={0.12} className="mt-10 sm:mt-14 w-full">
          <div className="relative mx-auto flex w-full max-w-225 flex-col items-center gap-3">
            <div className="w-full overflow-hidden rounded-2xl  py-4.5">
              <LogoLoop
                logos={TECH_LOGOS}
                speed={70}
                direction="left"
                logoHeight={50}
                gap={36}
                hoverSpeed={0}
                scaleOnHover
                fadeOut={true}
              />
            </div>
          </div>
        </FadeIn>
      </section>

      <Projects />
      <div className="h-12 sm:h-16" />
    </main>
  );
}
