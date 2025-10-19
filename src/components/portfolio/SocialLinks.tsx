import React from "react";
import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from "../icons/SocialIcons";

const socialLinks = [
  { icon: GitHubIcon, label: "GitHub", href: "https://github.com/Bamose" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
  { icon: TwitterIcon, label: "Twitter", href: "https://twitter.com" },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/anella-negash",
  },
];

export function SocialLinks() {
  return (
    <ul aria-label="Social media" className="ml-1 mt-8 flex items-center">
      {socialLinks.map((link) => (
        <li key={link.label} className="mr-5 text-xs">
          <a
            className="block hover:text-lightest-slate"
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="sr-only">{link.label}</span>
            <link.icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
