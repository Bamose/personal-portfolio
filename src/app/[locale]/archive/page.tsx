"use client";

import React, { useEffect, useRef } from "react";
import { portfolioData } from "@/data/portfolio";
import { TechTag } from "@/components/ui/TechTag";
import { ExternalLinkIcon } from "@/components/ui/ExternalLinkIcon";
import Noise from "@/components/Noise";

type ArchiveItem = {
  year: number;
  title: string;
  madeAt?: string;
  builtWith: string[];
  linkUrl?: string;
  linkLabel?: string;
  links?: { url: string; label: string }[];
  badges?: string[];
};

export default function ArchivePage() {
  const items = (portfolioData.projects.archive?.items || []) as ArchiveItem[];

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
      {/* Animated Noise Background with Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Noise patternAlpha={40} patternRefreshInterval={2} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.3) 100%)",
            mixBlendMode: "overlay",
          }}
        />
      </div>

      {/* Spotlight following the cursor */}
      <div
        ref={spotlightRef}
        className="fixed w-[1400px] h-[1400px] rounded-full pointer-events-none z-[5] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(circle, rgba(17, 31, 68, 0.4) 0%, rgba(17, 31, 68, 0.35) 10%, rgba(17, 31, 68, 0.28) 20%, rgba(17, 31, 68, 0.2) 30%, rgba(17, 31, 68, 0.12) 45%, rgba(17, 31, 68, 0.06) 60%, rgba(17, 31, 68, 0.02) 75%, transparent 100%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="container mx-auto px-6 md:px-0 lg:px-24 xl:px-48 py-16 relative z-10">
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center text-sm text-slate hover:text-lightest-slate"
          >
            <span className="mr-2">←</span> Anella N. Bekena
          </a>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-lightest-slate">
            All Projects
          </h1>
        </div>

        {/* Header row */}
        <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-slate/80">
          <div className="col-span-2">Year</div>
          <div className="col-span-4">Project</div>
          <div className="col-span-3">Made at</div>
          <div className="col-span-3">Built with</div>
        </div>

        <div className="divide-y divide-slate/20 rounded-md   bg-[#0b1222]/40 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)]">
          {items.map((p, i) => (
            <div
              key={`${p.title}-${i}`}
              className="grid grid-cols-12 items-center px-4 py-4 gap-4 hover:bg-light-navy/30 transition-colors"
            >
              <div className="col-span-12 md:col-span-2 text-sm text-slate/80">
                {p.year}
              </div>

              <div className="col-span-12 md:col-span-4">
                {p.links && p.links.length > 0 ? (
                  <div>
                    <span className="font-medium text-lightest-slate">{p.title}</span>
                    {p.badges && p.badges.length > 0 && (
                      <span className="ml-2 inline-flex gap-2 align-middle">
                        {p.badges.map((b) => (
                          <span
                            key={b}
                            className="ml-1 inline-flex items-center rounded-full bg-[#64ffda]/10 px-2 py-0.5 text-[10px] font-semibold leading-4 text-[#64ffda]"
                          >
                            {b}
                          </span>
                        ))}
                      </span>
                    )}
                    <div className="mt-1 flex flex-wrap gap-2 text-sm">
                      {p.links.map((lnk) => (
                        <a
                          key={lnk.url}
                          href={lnk.url}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="text-slate hover:text-[#64ffda] inline-flex items-center"
                          aria-label={`${lnk.label} (opens in a new tab)`}
                        >
                          {lnk.label}
                          <ExternalLinkIcon />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : p.linkUrl ? (
                  <a
                    href={p.linkUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-medium text-lightest-slate hover:text-[#64ffda]"
                    aria-label={`${p.title} (opens in a new tab)`}
                  >
                    {p.title}
                    <ExternalLinkIcon />
                  </a>
                ) : (
                  <span className="font-medium text-lightest-slate">{p.title}</span>
                )}
              </div>

              <div className="col-span-12 md:col-span-3 text-sm text-slate/90">
                {p.madeAt || "—"}
              </div>

              <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2">
                {p.builtWith?.map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
