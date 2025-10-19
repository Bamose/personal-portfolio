import React from "react";
import { TechTag } from "../ui/TechTag";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";

export interface ExperienceItemProps {
  period: string;
  periodAria: string;
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  technologies: string[];
}

export function ExperienceItem({
  period,
  periodAria,
  title,
  company,
  companyUrl,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <li className="mb-12">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2">
          {period}
        </header>

        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-lightest-slate">
            <div>
              <a
                aria-label={`${title} at ${company}`}
                className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
                href={companyUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {title} · {company}
                  <ExternalLinkIcon />
                </span>
              </a>
            </div>
          </h3>

          <p className="mt-2 text-sm leading-normal">{description}</p>

          <ul aria-label="Technologies used" className="mt-2 flex flex-wrap">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <TechTag>{tech}</TechTag>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
