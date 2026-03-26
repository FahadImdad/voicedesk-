import Link from "next/link";
import { CheckCircle } from "lucide-react";

const industries = [
  { icon: "🦷", title: "Dental Clinics", desc: "Never miss a patient call again.", href: "/dental", color: "bg-blue-50 text-blue-600" },
  { icon: "🏠", title: "Real Estate", desc: "Qualify leads. Book showings. Close more deals.", href: "/real-estate", color: "bg-green-50 text-green-600" },
  { icon: "💆", title: "Salons & Spas", desc: "Fill your calendar without lifting a finger.", href: "/salons", color: "bg-pink-50 text-pink-600" },
];

const features = [
  { emoji: "⚡", title: "Instant Answer", desc: "Responds in under 1 second. No hold music, no voicemail." },
  { emoji: "📅", title: "Books Appointments", desc: "Syncs with your calendar and confirms bookings in real time." },
  { emoji: "🌙", title: "24/7 Coverage", desc: "Nights, weekends, holidays — always available." },
  { emoji: "🎙️", title: "Sounds Human", desc: "Natural, warm voice. Callers feel heard." },
  { emoji: "📋", title: "Call Summaries", desc: "Get a full recap of every call delivered to your inbox." },
  { emoji: "🔧", title: "Custom Script", desc: "Trained on your business, services, and FAQs." },
];

const steps = [
  { num: "1", title: "We build your agent", desc: "We configure your AI with your business info, services, and tone." },
  { num: "2", title: "Forward your calls", desc: "Point your number to VoiceDesk. Takes 2 minutes. No tech needed." },
  { num: "3", title: "It handles everything", desc: "Every call answered, every booking logged. You get daily summaries." },
];

export default function Home() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-5 py-20 text-center bg-white">
        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 text-xs font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          AI Receptionist · Available 24/7
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.08] tracking-tight max-w-4xl mb-6">
          Your phones,{" "}
          <span className="text-brand-600">answered.</span>
          <br />Always.
        </h1>

        <p className="text-lg sm:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed">
          VoiceDesk's AI receptionist answers every call, books appointments, and handles
          inquiries — so you never lose a customer to voicemail again.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center">
          <Link
            href="/demo"
            className="bg-brand-600 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
          >
            Hear the Demo →
          </Link>
          <Link
            href="/contact"
            className="bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-2xl text-base hover:bg-gray-200 transition-colors"
          >
            Book a Call
          </Link>
        </div>

        <p className="mt-5 text-xs text-gray-400">No credit card · Setup in 24 hours · Cancel anytime</p>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Built for your industry</h2>
            <p className="text-gray-500">Specialized agents trained for your exact business.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-brand-300 hover:shadow-lg transition-all bg-white"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${ind.color}`}>
                  {ind.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{ind.title}</h3>
                <p className="text-sm text-gray-500">{ind.desc}</p>
                <p className="text-brand-600 text-sm font-semibold mt-4">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Everything included</h2>
            <p className="text-gray-500">One agent handles your entire front desk.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl mb-4 block">{f.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Live in 24 hours</h2>
            <p className="text-gray-500">No tech skills needed. We handle the setup.</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5 items-start">
                <div className="w-12 h-12 flex-shrink-0 bg-brand-600 text-white font-black text-lg rounded-2xl flex items-center justify-center">
                  {s.num}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 px-5">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Simple pricing</h2>
          <p className="text-gray-500 mb-12">One plan. Everything included.</p>

          <div className="bg-gray-950 text-white rounded-3xl p-8 shadow-2xl">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Professional</p>
            <div className="flex items-end justify-center gap-1 mb-6">
              <span className="text-5xl font-black">$397</span>
              <span className="text-gray-400 mb-1.5 text-sm">/mo</span>
            </div>
            <ul className="space-y-3 text-sm text-left mb-8">
              {[
                "Unlimited call minutes",
                "24/7 answering",
                "Appointment booking",
                "Daily call summaries",
                "Custom voice & script",
                "Setup in 24 hours",
                "Cancel anytime",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-500 transition-colors text-center"
            >
              Get Started
            </Link>
            <p className="text-gray-500 text-xs mt-3">+ $200 one-time setup fee</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 px-5 bg-brand-600 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Stop losing calls. Start growing.</h2>
          <p className="text-brand-200 text-lg mb-8">Every missed call is a missed customer. VoiceDesk fixes that.</p>
          <Link
            href="/demo"
            className="inline-block bg-white text-brand-600 font-bold px-10 py-4 rounded-2xl text-base hover:bg-brand-50 transition-colors"
          >
            Hear the Demo →
          </Link>
        </div>
      </section>
    </div>
  );
}
