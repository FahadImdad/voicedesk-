import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-2">
              <span>🎙️</span> VoiceDesk
            </div>
            <p className="text-sm max-w-xs">
              AI-powered voice receptionists that work 24/7, so you never miss a call.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <p className="text-white font-semibold mb-3">Industries</p>
              <ul className="space-y-2">
                <li><Link href="/dental" className="hover:text-white transition-colors">Dental Clinics</Link></li>
                <li><Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
                <li><Link href="/salons" className="hover:text-white transition-colors">Salons & Spas</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3">Company</p>
              <ul className="space-y-2">
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-xs text-center">
          © {new Date().getFullYear()} VoiceDesk. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
