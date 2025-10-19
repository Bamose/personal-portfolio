import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ProjectItem, ProjectItemProps } from "./ProjectItem";

interface ProjectsProps {
  projects: ProjectItemProps[];
  archiveLink?: string;
}

export function Projects({ projects, archiveLink }: ProjectsProps) {
  return (
    <section
      aria-label="Selected projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </ul>

        {archiveLink && (
          <div className="mt-12">
            <a
              aria-label="View Full Project Archive"
              className="inline-flex items-center font-medium leading-tight text-lightest-slate hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              href={archiveLink}
            >
              <span>
                <span className="whitespace-nowrap">
                  <span className="border-b border-transparent pb-px transition group-hover:border-[#64ffda] motion-reduce:transition-none">
                    View Full Project{" "}
                  </span>
                  <span className="whitespace-nowrap font-semibold">
                    Archive{" "}
                    <svg
                      aria-hidden="true"
                      className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        clipRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
