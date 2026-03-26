"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Dental", href: "/dental" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Salons & Spas", href: "/salons" },
  { label: "Demo", href: "/demo" },
  { label: "Pricing", href: "/#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-600">
          <span className="text-2xl">🎙️</span>
          VoiceDesk
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-brand-600 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/demo"
            className="bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-brand-700 transition-colors"
          >
            Book a Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-gray-700 hover:text-brand-600 border-b border-gray-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demo"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-brand-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full hover:bg-brand-700 transition-colors"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
