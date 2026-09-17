"use client";

import { ArrowRight } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { FadeIn } from "@/components/ui/motion-primitives";

interface Project {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Virtual Stream Deck",
    summary:
      "Virtual Stream Deck is a web-based platform that allows content creators and streamers to control their multimedia assets in real-time without the need for expensive additional hardware.",
    label: "Web Development",
    author: "Naufal Yuri",
    published: "2026",
    url: "https://vsdnew.vercel.app/",
    image: "/vsd.webp",
    tags: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    id: "project-2",
    title: "A website for recommending books",
    summary:
      "A website that helps you find your next favorite book based on your preferences.",
    label: "Web Development",
    author: "Naufal Yuri",
    published: "2026",
    url: "https://github.com/Fugakuuu/Libary-Online",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["React.js", "Node.js", "TypeScript"],
  },
  {
    id: "project-3",
    title: "Portfolio & Personal Branding Website",
    summary:
      "Portfolio website showcasing work and skills. Built with Next.js, Tailwind CSS, and optimized for SEO and performance.",
    label: "Web Design",
    author: "Naufal Yuri",
    published: "2025",
    url: "https://github.com/Fugakuuu/Portofolio",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    id: "project-4",
    title: "Basic Pac-Man Game",
    summary:
      "A simple Pac-Man game built with vanilla JavaScript.",
    label: "Web Application",
    author: "Naufal Yuri",
    published: "2025",
    url: "https://github.com/Fugakuuu/Pacman-Project",
    image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2022/05/Pacman-Title.jpg?w=1600&h=900&fit=crop",
    tags: ["JavaScript", "HTML", "CSS"],
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const [showAll, setShowAll] = useState(false);
  const items = showAll || !viewMoreVisible ? PROJECTS : PROJECTS.slice(0, 2);

  return (
    <section className="relative w-full py-12 sm:py-20">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pb-12 text-center sm:pb-20">
            <h2 className="font-serif text-[2rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[2.5rem] lg:text-[3rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[16px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[18px]">
              A collection of web applications and IT solutions I&rsquo;ve built.
            </p>
          </FadeIn>
        ) : null}

        <div className="flex flex-col gap-8 sm:gap-12 md:gap-16">
          {items.map((project, index) => (
            <FadeIn key={project.id} delay={Math.min(index * 0.06, 0.3)}>
              <Card className="border-foreground/8 bg-background/50 shadow-none">
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 md:gap-12 p-6 sm:p-8">
                  <div className="order-last sm:order-first flex flex-col justify-between">
                    <div>
                      <div className="mb-4 md:mb-6">
                        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-foreground/50 md:gap-3">
                          {project.tags?.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl text-foreground">
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground/75 transition-colors">
                          {project.title}
                        </a>
                      </h3>
                      <p className="mt-4 text-foreground/65 md:mt-5 leading-relaxed">
                        {project.summary}
                      </p>
                      <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
                        <span className="text-foreground/50">{project.author}</span>
                        <span className="text-foreground/30">•</span>
                        <span className="text-foreground/50">{project.published}</span>
                      </div>
                      <div className="mt-6 flex items-center space-x-2 md:mt-8">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center font-semibold text-foreground hover:text-foreground/75 transition-colors md:text-base"
                        >
                          <span>View project</span>
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="order-first sm:order-last">
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="aspect-video overflow-clip rounded-lg border border-foreground/8">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition-opacity duration-200 hover:opacity-75"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {viewMoreVisible && !showAll ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <button
              onClick={() => setShowAll(true)}
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
