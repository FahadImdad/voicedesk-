import Link from "next/link";
import { CheckCircle } from "lucide-react";

const features = [
  "Answers buyer & seller inquiries instantly",
  "Qualifies leads before passing to your agents",
  "Books property showings 24/7",
  "Follows up with cold leads automatically",
  "Handles listing FAQs (price, location, specs)",
  "Works while you're showing other properties",
];

export default function RealEstatePage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-green-50 via-white to-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🏠 Built for Real Estate
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Qualify Every Lead.{" "}
            <span className="text-brand-600">Close More Deals.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            VoiceDesk's AI agent answers every call, qualifies buyers and sellers,
            and books showings — even while you're with another client.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo" className="bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg">
              Hear the Demo →
            </Link>
            <Link href="/contact" className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-brand-400 hover:text-brand-600 transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-14">What VoiceDesk Does for Agents</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Every Lead Deserves an Instant Response</h2>
          <p className="text-gray-400 text-lg mb-10">Speed to lead wins deals. VoiceDesk makes you the fastest agent in your market.</p>
          <Link href="/contact" className="inline-block bg-brand-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-brand-500 transition-colors">
            Get Started →
          </Link>
        </div>
      </section>
    </div>
  );
}
