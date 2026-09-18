import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { ContactCardCtas } from "./contact-card-ctas";
import { FadeIn } from "@/components/ui/motion-primitives";
import { Folder } from "@/components/ui/folder";
import { ShaderFlow } from "../shaders/shader-flow";

const CARD_FADE_MASK =
  "radial-gradient(ellipse 90% 110% at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.4) 90%, rgba(0,0,0,0.15) 100%)";

export function ContactCard(): ReactNode {
  return (
    <section className="mx-auto my-6 w-full max-w-275 px-6 sm:my-8 sm:px-10">
      <FadeIn>
        <div className="relative w-full overflow-hidden rounded-4xl border border-foreground/8 bg-background p-1.5 shadow-sm">
          <div className="relative w-full overflow-hidden rounded-[1.6rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-25"
              style={{
                WebkitMaskImage: CARD_FADE_MASK,
                maskImage: CARD_FADE_MASK,
              }}
            >
              <ShaderFlow scale={3} brightness={3}/>
            </div>

            <div className="relative grid gap-8 p-6 sm:gap-10 sm:p-7 md:grid-cols-[1.2fr_1fr] md:items-stretch md:gap-6 md:p-6">
              <div className="flex flex-col gap-5">
                <h2 className="font-serif text-[1.85rem] font-medium leading-[1.05] tracking-tight text-foreground sm:text-[2.25rem] lg:text-[2.75rem]">
                  Let&rsquo;s connect
                </h2>
                <p className="max-w-[29ch] text-[16px] leading-[1.4] tracking-tight text-foreground/65 sm:text-[18px] mb-6">
                  I&rsquo;m always open to discussing new projects, creative
                  ideas, or opportunities to be part of your visions. Just reach out!
                </p>
                <ContactCardCtas />
              </div>

              <div className="flex min-h-44 flex-col items-center justify-center gap-5 ">
                <Folder
                  color="#252525ff"
                  size={1}
                  className="origin-center mt-8"
                  items={[
                    <SocialPaper
                      key="linkedin"
                      href="https://www.linkedin.com/in/naufalyuri/"
                      label="LinkedIn"
                      imageSrc="/linkedin.svg"
                    />,
                    <SocialPaper
                      key="instagram"
                      href="https://instagram.com/fallyur_"
                      label="Instagram"
                      imageSrc="/instagram.svg"
                    />,
                    <SocialPaper
                      key="github"
                      href="https://github.com/Fugakuuu"
                      label="GitHub"
                      imageSrc="/github.svg"
                    />,
                  ]}
                />
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="font-serif text-[20px] font-medium tracking-tight text-foreground/65">
                    See my social media
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

function SocialPaper({
  href,
  label,
  imageSrc,
}: {
  href: string;
  label: string;
  imageSrc: string;
}): ReactNode {
  const isExternal = href.startsWith("http");
  const props = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link
      href={href}
      aria-label={label}
      className="focus-ring flex h-full w-full items-center justify-center rounded-[10px] bg-neutral-200/80 dark:bg-white text-neutral-700"
      {...props}
    >
      <Image
        src={imageSrc}
        alt=""
        width={18}
        height={18}
        aria-hidden="true"
          className="max-h-[18px] max-w-[18px] object-contain"
      />
    </Link>
  );
}
