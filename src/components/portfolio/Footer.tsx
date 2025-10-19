import React from "react";

export function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-slate sm:pb-0">
      <p>
        Loosely designed in{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://www.stitch.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Stitch
        </a>{" "}
        and coded in{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://cursor.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Cursor
        </a>{" "}
        by yours truly. Built with{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://nextjs.org/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Next.js
        </a>{" "}
        and{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://tailwindcss.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Tailwind CSS
        </a>
        , deployed with{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://cloudflare.com/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Cloudflare
        </a>
        . All text is set in the{" "}
        <a
          className="font-medium text-lightest-slate hover:text-primary focus-visible:text-primary"
          href="https://rsms.me/inter/"
          rel="noreferrer noopener"
          target="_blank"
        >
          Inter
        </a>{" "}
        typeface.
      </p>
    </footer>
  );
}
