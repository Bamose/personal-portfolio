import React from "react";
import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";

interface HeaderProps {
  name: string;
  title: string;
  description: string;
}

export function Header({ name, title, description }: HeaderProps) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-lightest-slate sm:text-5xl">
          {name}
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-lightest-slate sm:text-xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">{description}</p>
        <Navigation />
      </div>
      <SocialLinks />
    </header>
  );
}
