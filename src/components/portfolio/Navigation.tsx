"use client";

import React, { useState, useEffect } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden lg:block mt-16 w-max">
      <ul className="text-xs font-bold uppercase tracking-widest text-slate">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              className={`group flex items-center py-3 ${
                activeSection === item.id ? "active" : ""
              }`}
              href={`#${item.id}`}
            >
              <span
                className={`nav-indicator mr-4 h-px bg-slate transition-all group-hover:w-16 group-hover:bg-lightest-slate group-focus-visible:w-16 group-focus-visible:bg-lightest-slate motion-reduce:transition-none ${
                  activeSection === item.id ? "w-16" : "w-8"
                }`}
              />
              <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-lightest-slate group-focus-visible:text-lightest-slate">
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
