import React from "react";
import { SectionHeading } from "../ui/SectionHeading";

interface AboutProps {
  paragraphs: string[];
}

export function About({ paragraphs }: AboutProps) {
  return (
    <section
      aria-label="About me"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="about"
    >
      <SectionHeading>About</SectionHeading>
      <div>
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="mb-4"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </section>
  );
}
