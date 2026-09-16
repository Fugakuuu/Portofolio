import { Education } from "@/components/about/education";
import { Experience } from "@/components/about/experience";
import { Skills } from "@/components/about/skills";
import { Stack } from "@/components/about/stack";
import { FadeIn } from "@/components/ui/motion-primitives";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: "About me, background, and how to get in touch.",
  path: "/about",
});

export default function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <section className="mx-auto w-full max-w-160 px-6 pt-40 pb-16 sm:px-10 sm:pt-56 sm:pb-24">
        <FadeIn delay={0.5}>
           <div className="rounded-4xl border border-foreground/5 bg-foreground/1.5 p-8 sm:p-12 dark:bg-foreground/3">
             <h1 className="font-serif text-[1.75rem] font-medium tracking-tight text-foreground sm:text-[2rem]">
               Hello! I&rsquo;m <span className="border-b border-foreground/30 pb-0.5">Naufal Yuri</span>.
             </h1>
             <div className="mt-8 space-y-6 text-[17px] leading-[1.7] tracking-tight text-foreground/75 sm:text-[18px]">
               <p>
                 An <strong className="font-semibold text-foreground">IT Support specialist and web developer</strong> dedicated to solving technical challenges and building modern web solutions. With expertise in <strong className="font-semibold text-foreground">system administration</strong> and <strong className="font-semibold text-foreground">full-stack development</strong>, I bridge the gap between infrastructure and user-facing applications.
               </p>
               <p>
                 My career started with a passion for understanding how systems work and helping others navigate technology. This led me to develop <strong className="font-semibold text-foreground">comprehensive technical knowledge</strong> combined with an ability to communicate complex concepts in simple terms.
               </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[40rem] px-6 pb-20 sm:px-10 sm:pb-28">
        <FadeIn delay={0.1}>
          <div className="flex flex-col gap-10">
            <Experience />
            <Education />
            <Skills />
            <Stack />
          </div>
        </FadeIn>
      </section>

      <div className="h-12 sm:h-16" />
    </main>
  );
}
