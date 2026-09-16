"use client";

import { Mail, User, MessageSquare } from "lucide-react";
import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/motion-primitives";
const EMAIL = "naufal.yurie.pratama@gmail.com";

export function ContactForm(): ReactNode {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setError(false);

    try {
      const response = await fetch("https://formspree.io/f/xrpbzwbv", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setError(true);
      console.error("Form submission failed:", error);
    }
  };

  return (
    <section
      id="contact-form"
      className="mx-auto my-6 w-full max-w-2xl px-6 lg:my-8 lg:px-10"
    >
      <FadeIn>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-8 rounded-[2rem] border border-foreground/8 bg-background p-8 shadow-sm lg:gap-10 lg:p-12"
        >
          <div className="flex w-full flex-col items-center gap-8 lg:gap-10">
            <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-serif text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground lg:text-[2.75rem]">
              Contact Me
            </h2>
            <p className="max-w-[46ch] text-base leading-relaxed text-foreground/60 lg:text-lg">
              Have a question or project in mind? Send me a message and I&rsquo;ll get
              back to you as soon as possible.
            </p>
          </div>

          <div className="w-full space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-foreground/10 bg-background px-4 py-3 transition-all focus-within:border-foreground/20 focus-within:ring-1 focus-within:ring-foreground/10">
                <User className="h-4 w-4 text-foreground/40" aria-hidden="true" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address
              </label>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-foreground/10 bg-background px-4 py-3 transition-all focus-within:border-foreground/20 focus-within:ring-1 focus-within:ring-foreground/10">
                <Mail className="h-4 w-4 text-foreground/40" aria-hidden="true" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <div className="mt-2 flex gap-3 rounded-xl border border-foreground/10 bg-background p-4 transition-all focus-within:border-foreground/20 focus-within:ring-1 focus-within:ring-foreground/10">
                <MessageSquare
                  className="h-4 w-4 shrink-0 text-foreground/40 mt-0.5"
                  aria-hidden="true"
                />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Enter your message"
                  required
                  className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-foreground/40"
                />
              </div>
            </div>
          </div>

          {error ? (
            <p className="text-center text-sm text-red-500">
              Message failed. Check Formspree setup or try again.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={submitted}
            className="focus-ring relative mt-2 w-full rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <span>✓</span>
                <span>Message sent!</span>
              </>
            ) : (
              <>
                <span>Send Message</span>
              </>
            )}
          </button>

            <p className="text-xs text-foreground/50 text-center">
              Or email me directly at{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="text-foreground/70 hover:text-foreground underline"
              >
                {EMAIL}
              </a>
            </p>
          </div>
        </form>
      </FadeIn>
    </section>
  );
}
