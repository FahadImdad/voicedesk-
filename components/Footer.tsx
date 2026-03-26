import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-500 py-10 border-t border-gray-800">
      <div className="max-w-5xl mx-auto px-5 flex flex-col sm:flex-row justify-between items-start gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-black mb-2">
            <span className="w-6 h-6 bg-purple-700 rounded-md flex items-center justify-center text-white text-xs">V</span>
            VoiceDesk
          </div>
          <p className="text-xs max-w-xs leading-relaxed">AI voice receptionist. Answers calls, books appointments, 24/7.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs">
          <Link href="/dental" className="hover:text-white transition-colors">Dental</Link>
          <Link href="/demo" className="hover:text-white transition-colors">Demo</Link>
          <Link href="/real-estate" className="hover:text-white transition-colors">Real Estate</Link>
          <Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/salons" className="hover:text-white transition-colors">Salons</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
      <p className="text-center text-xs text-gray-600 mt-8">© {new Date().getFullYear()} VoiceDesk</p>
    </footer>
  );
}
