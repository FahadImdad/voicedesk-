import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-16">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 text-white font-black text-xl mb-3">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white text-sm">V</div>
              VoiceDesk
            </div>
            <p className="text-sm leading-relaxed">
              AI voice receptionists that work 24/7. Never miss a call, never lose a customer.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm">
            <div>
              <p className="text-white font-semibold mb-4">Industries</p>
              <ul className="space-y-3">
                <li><Link href="/dental" className="hover:text-white transition-colors">Dental Clinics</Link></li>
                <li><Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link></li>
                <li><Link href="/salons" className="hover:text-white transition-colors">Salons & Spas</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-4">Company</p>
              <ul className="space-y-3">
                <li><Link href="/demo" className="hover:text-white transition-colors">Live Demo</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} VoiceDesk. All rights reserved.</p>
          <p>hello@voicedesk.online</p>
        </div>
      </div>
    </footer>
  );
}
