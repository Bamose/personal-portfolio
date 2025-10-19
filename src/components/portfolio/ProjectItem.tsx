import React from "react";
import { TechTag } from "../ui/TechTag";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";

export interface ProjectItemProps {
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function ProjectItem({
  title,
  description,
  technologies,
  projectUrl,
  imageUrl,
  imageAlt,
}: ProjectItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a
              aria-label={`${title} (opens in a new tab)`}
              className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
              href={projectUrl}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
              <span>
                {title}
                <ExternalLinkIcon />
              </span>
            </a>
          </h3>

          <p className="mt-2 text-sm leading-normal">{description}</p>

          <ul aria-label="Technologies used:" className="mt-2 flex flex-wrap">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <TechTag>{tech}</TechTag>
              </li>
            ))}
          </ul>
        </div>

        {imageUrl && (
          <img
            alt={imageAlt || title}
            className="rounded border-2 border-slate/10 transition group-hover:border-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            height="48"
            src={imageUrl}
            width="200"
          />
        )}
      </div>
    </li>
  );
}
