import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ExperienceItem, ExperienceItemProps } from "./ExperienceItem";
import { ExternalLinkIcon } from "../ui/ExternalLinkIcon";

interface ExperienceProps {
  experiences: ExperienceItemProps[];
  resumeLink?: string;
}

export function Experience({ experiences, resumeLink }: ExperienceProps) {
  return (
    <section
      aria-label="Work experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="experience"
    >
      <SectionHeading>Experience</SectionHeading>
      <div>
        <ol className="group/list">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.title} {...experience} />
          ))}
        </ol>

        {resumeLink && (
          <div className="mt-12">
            <a
              aria-label="View Full Résumé (opens in a new tab)"
              className="inline-flex items-baseline font-medium leading-tight text-lightest-slate hover:text-[#64ffda] focus-visible:text-[#64ffda] group/link text-base"
              href={resumeLink}
              rel="noreferrer noopener"
              target="_blank"
            >
              <span>
                View Full Résumé
                <ExternalLinkIcon />
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
