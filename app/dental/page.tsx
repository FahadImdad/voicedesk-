import Link from "next/link";
import { CheckCircle } from "lucide-react";

const pains = [
  "Patients call, hit voicemail, and book with a competitor",
  "Your receptionist can't answer every call during busy hours",
  "You lose $150–$300 every time a new patient can't get through",
  "After-hours calls go completely unanswered",
];

const features = [
  { emoji: "⚡", title: "Answers in under 1 second", desc: "No hold music. No voicemail. Instant response, every time." },
  { emoji: "📅", title: "Books appointments", desc: "Syncs with your schedule. Patients book, reschedule, or cancel seamlessly." },
  { emoji: "🌙", title: "Works 24/7", desc: "8pm Friday? Holiday? Doesn't matter — phones always answered." },
  { emoji: "📋", title: "Call summaries", desc: "You get a full recap of every call delivered to your inbox." },
];

const faqs = [
  { q: "Will patients know it's AI?", a: "Our voice sounds natural and warm. Most patients don't ask, and if they do — many clinics are proud to say they use AI." },
  { q: "What if a patient has a complex question?", a: "The agent handles common scenarios. For complex cases, it collects info and flags it for your team to follow up." },
  { q: "How long does setup take?", a: "24 hours. We configure everything and test it before going live. You just forward your calls." },
  { q: "Does it work with my existing number?", a: "Yes. You forward your existing number to VoiceDesk. Works with any phone system — no new hardware needed." },
];

export default function DentalPage() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-5 py-20 text-center bg-white">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
          🦷 For Dental Clinics
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-[1.08] tracking-tight max-w-3xl mb-6">
          Never lose a patient<br />
          <span className="text-brand-600">to voicemail again.</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
          VoiceDesk answers every call, books appointments, and handles patient questions —
          24 hours a day, 7 days a week.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center">
          <Link href="/demo" className="bg-brand-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
            Hear the Demo →
          </Link>
          <Link href="/contact" className="bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-2xl hover:bg-gray-200 transition-colors">
            Book a Call
          </Link>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-20 px-5 bg-red-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-8">Sound familiar?</h2>
          <div className="flex flex-col gap-3">
            {pains.map((p) => (
              <div key={p} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-red-100">
                <span className="text-red-400 text-lg flex-shrink-0 mt-0.5">✗</span>
                <span className="text-gray-700 text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-10">VoiceDesk fixes all of that</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl mb-4 block">{f.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 px-5 bg-brand-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">The math is simple</h2>
          <p className="text-brand-200 mb-10">Most clinics miss 15–30 calls a week. Here's what that costs.</p>
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { num: "20", label: "Missed calls/week" },
              { num: "$200", label: "Value per patient" },
              { num: "$4K", label: "Lost per week" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-2xl p-5 backdrop-blur">
                <p className="text-3xl sm:text-4xl font-black mb-1">{s.num}</p>
                <p className="text-brand-200 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-200 text-sm mb-6">
            VoiceDesk costs <span className="text-white font-bold">$397/month</span>.
            One recovered patient covers 2 months.
          </p>
          <Link href="/contact" className="inline-block bg-white text-brand-600 font-bold px-8 py-4 rounded-2xl hover:bg-brand-50 transition-colors">
            Start Recovering Revenue →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-10">Common questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-white p-6 rounded-2xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 bg-gray-950 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Ready to stop missing patients?</h2>
          <p className="text-gray-400 mb-8">Setup in 24 hours. No contracts. Cancel anytime.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/demo" className="bg-brand-600 text-white font-bold px-8 py-4 rounded-2xl hover:bg-brand-500 transition-colors">
              Hear the Demo
            </Link>
            <Link href="/contact" className="bg-white/10 text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/20 transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
