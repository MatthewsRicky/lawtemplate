"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Practice Areas", href: "/#practice-areas" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9d6c7] bg-[#f6f1e8]/90 backdrop-blur-md dark:border-[#2d564b] dark:bg-[#0d1117]/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#163a2e] text-sm font-bold text-[#f6e7b6] dark:bg-[#d8ba60] dark:text-[#163a2e]">
            K
          </div>
          <div>
            <div className="text-lg font-semibold tracking-tight text-[#163a2e] dark:text-[#d8ba60]">
              Kivutha & Opiyo
            </div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#5d7a74] dark:text-[#a7bdb6]">
              Advocates
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#476760] dark:text-[#d9e7e3] md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-[#163a2e] dark:hover:text-[#d8ba60]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-md bg-[#163a2e] px-4 py-2.5 text-sm font-semibold text-[#f6e7b6] transition hover:bg-[#1e4a3f] dark:bg-[#d8ba60] dark:text-[#163a2e] dark:hover:bg-[#e6cd76]"
          >
            Book a consult
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#d9d6c7] bg-white text-[#163a2e] md:hidden dark:border-[#2d564b] dark:bg-[#1a3d35] dark:text-[#d8ba60]"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#d9d6c7] bg-[#f6f1e8] md:hidden dark:border-[#2d564b] dark:bg-[#1a3d35]">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm font-medium text-[#476760] dark:text-[#d9e7e3]">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-2 py-2 transition hover:bg-white hover:text-[#163a2e] dark:hover:bg-[#2d564b] dark:hover:text-[#d8ba60]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 px-2 py-2">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
