"use client";

import React, { useEffect, useRef } from "react";
import { Header } from "@/components/portfolio/Header";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Footer } from "@/components/portfolio/Footer";
import { portfolioData } from "@/data/portfolio";

export default function Page() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${e.clientX}px`;
        spotlightRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-background-dark min-h-screen text-slate scroll-smooth relative">
      <div
        ref={spotlightRef}
        className="fixed w-[1400px] h-[1400px] rounded-full pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 31, 68, 0.4) 0%, rgba(17, 31, 68, 0.35) 10%, rgba(17, 31, 68, 0.28) 20%, rgba(17, 31, 68, 0.2) 30%, rgba(17, 31, 68, 0.12) 45%, rgba(17, 31, 68, 0.06) 60%, rgba(17, 31, 68, 0.02) 75%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="min-h-screen container mx-auto px-6 md:px-0 lg:px-24 xl:px-48 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header
            name={portfolioData.header.name}
            title={portfolioData.header.title}
            description={portfolioData.header.description}
          />

          <main className="pt-24 lg:w-1/2 lg:py-24" id="content">
            <About paragraphs={portfolioData.about.paragraphs} />

            <Experience
              experiences={portfolioData.experience.items}
              resumeLink={portfolioData.experience.resumeLink}
            />

            <Projects
              projects={portfolioData.projects.items}
              archiveLink={portfolioData.projects.archiveLink}
            />

            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
