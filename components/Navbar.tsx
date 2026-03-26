"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="font-black text-lg tracking-tight text-gray-900 flex items-center gap-2">
          <span className="w-7 h-7 bg-purple-700 rounded-lg flex items-center justify-center text-white text-xs font-black">V</span>
          VoiceDesk
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/dental" className="hover:text-gray-900 transition-colors">Dental</Link>
          <Link href="/real-estate" className="hover:text-gray-900 transition-colors">Real Estate</Link>
          <Link href="/salons" className="hover:text-gray-900 transition-colors">Salons</Link>
          <Link href="/demo" className="hover:text-gray-900 transition-colors">Demo</Link>
          <Link href="/#pricing" className="hover:text-gray-900 transition-colors">Pricing</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-flex btn bg-purple-700 text-white text-sm font-bold px-5 py-2 rounded-xl">
          Get Started
        </Link>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20}/> : <Menu size={20}/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
          {[["Dental","/dental"],["Real Estate","/real-estate"],["Salons","/salons"],["Demo","/demo"],["Pricing","/#pricing"]].map(([l,h])=>(
            <Link key={h} href={h} onClick={()=>setOpen(false)}>{l}</Link>
          ))}
          <Link href="/contact" onClick={()=>setOpen(false)} className="btn bg-purple-700 text-white font-bold px-5 py-3 rounded-xl text-center">Get Started</Link>
        </div>
      )}
    </header>
  );
}
