"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/commercial-roofing", label: "Commercial Roofing" },
  { href: "/repair-service", label: "Repair / Service" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-extrabold tracking-tight text-white">
            DES MOINES <span className="text-brand-red">ROOFING</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-white/90 hover:text-brand-red transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="bg-brand-red text-white px-5 py-2.5 rounded-md text-sm font-bold hover:bg-red-700 transition-colors"
          >
            {site.phoneDisplay}
          </a>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-lg p-4 flex flex-col gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white font-semibold py-1"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="bg-brand-red text-white px-5 py-2.5 rounded-md text-sm font-bold text-center"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
