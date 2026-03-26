"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Dental", href: "/dental" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Salons", href: "/salons" },
  { label: "Demo", href: "/demo" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-black text-xl tracking-tight text-gray-900">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white text-sm">V</div>
          VoiceDesk
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-500">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/#pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
            Pricing
          </Link>
          <Link
            href="/contact"
            className="bg-brand-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-700 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button className="md:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-gray-700 border-b border-gray-50 last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 bg-brand-600 text-white text-sm font-semibold px-5 py-3 rounded-xl text-center hover:bg-brand-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
