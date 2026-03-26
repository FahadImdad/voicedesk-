import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { RevealOnScroll, StaggerGrid } from "@/components/AnimatedSection";

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
    <div className="pt-16 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-5 py-24 text-center bg-white">
        {/* BG blobs */}
        <div className="blob w-[500px] h-[500px] bg-purple-100 opacity-50 top-0 left-1/2 -translate-x-1/2 -translate-y-1/4" />
        <div className="blob w-72 h-72 bg-pink-100 opacity-40 bottom-10 right-0" />

        <div className="relative z-10 animate-fade-up flex flex-col items-center">
          {/* Live badge */}
          <div className="inline-flex items-center gap-2 bg-white border border-purple-200 text-purple-700 text-xs font-bold px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            AI Receptionist · Live 24/7
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight max-w-4xl mb-6">
            Your phones,{" "}
            <span className="gradient-text">answered.</span>
            <br />Always.
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed">
            VoiceDesk's AI receptionist answers every call, books appointments, and handles
            inquiries — so you never lose a customer to voicemail again.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center delay-200 animate-fade-up">
            <Link href="/demo" className="btn-scale bg-purple-700 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-lg shadow-purple-200">
              Hear the Demo →
            </Link>
            <Link href="/contact" className="btn-scale bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-2xl text-base">
              Book a Call
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-400 delay-300 animate-fade-up">No credit card · Setup in 24 hours · Cancel anytime</p>
        </div>

        {/* ── Voice Agent Visual ── */}
        <div className="relative z-10 mt-16 animate-fade-up delay-400">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-8 w-72 mx-auto text-center">
            {/* Avatar with pulse ring */}
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mx-auto mb-5 flex items-center justify-center animate-float animate-pulse-ring">
              <span className="text-3xl">🎙️</span>
            </div>
            <p className="font-black text-gray-900 text-base mb-1">VoiceDesk Agent</p>
            <p className="text-green-500 text-xs font-semibold mb-6">● Active · Listening</p>

            {/* Sound wave bars */}
            <div className="flex items-end justify-center gap-1.5 h-10 mb-6">
              <span className="bar bg-purple-400 h-3" />
              <span className="bar bg-purple-500 h-6" />
              <span className="bar bg-purple-600 h-9" />
              <span className="bar bg-purple-700 h-7" />
              <span className="bar bg-purple-600 h-10" />
              <span className="bar bg-purple-500 h-6" />
              <span className="bar bg-purple-400 h-4" />
            </div>

            {/* Live transcript line */}
            <div className="bg-gray-50 rounded-xl px-4 py-3 text-left">
              <p className="text-xs text-gray-400 mb-1 font-medium">LIVE TRANSCRIPT</p>
              <p className="text-sm text-gray-700 font-medium">"Sure, I can book that for you…"</p>
            </div>
          </div>

          {/* Floating info pills */}
          <div className="absolute -left-10 top-6 bg-white shadow-lg border border-gray-100 rounded-2xl px-4 py-2.5 text-xs font-bold text-gray-700 whitespace-nowrap animate-float" style={{animationDelay:"0.5s"}}>
            📞 Call answered
          </div>
          <div className="absolute -right-10 bottom-10 bg-white shadow-lg border border-gray-100 rounded-2xl px-4 py-2.5 text-xs font-bold text-gray-700 whitespace-nowrap animate-float" style={{animationDelay:"1s"}}>
            📅 Appointment booked
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Built for your industry</h2>
            <p className="text-gray-500">Specialized agents trained for your exact business.</p>
          </RevealOnScroll>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="card-hover group block p-7 rounded-2xl border border-gray-100 hover:border-purple-200 bg-white"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${ind.color}`}>
                  {ind.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{ind.title}</h3>
                <p className="text-sm text-gray-500">{ind.desc}</p>
                <p className="text-purple-600 text-sm font-semibold mt-4">Learn more →</p>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Everything included</h2>
            <p className="text-gray-500">One agent handles your entire front desk.</p>
          </RevealOnScroll>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-hover bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <span className="text-3xl mb-4 block">{f.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-5 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Live in 24 hours</h2>
            <p className="text-gray-400">No tech skills needed. We handle the setup.</p>
          </RevealOnScroll>
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 120}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-purple-700 text-white font-black text-lg rounded-2xl flex items-center justify-center shadow-lg shadow-purple-900">
                    {s.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-5">
        <div className="max-w-sm mx-auto">
          <RevealOnScroll className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Simple pricing</h2>
            <p className="text-gray-500 mb-12">One plan. Everything included.</p>

            <div className="relative bg-gray-950 text-white rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-pink-500" />
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Professional</p>
              <div className="flex items-end justify-center gap-1 mb-6">
                <span className="text-5xl font-black">$397</span>
                <span className="text-gray-400 mb-1.5 text-sm">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-left mb-8">
                {["Unlimited call minutes","24/7 answering","Appointment booking","Daily call summaries","Custom voice & script","Setup in 24 hours","Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-scale block bg-purple-700 text-white font-bold py-4 rounded-xl text-center hover:bg-purple-600 transition-colors">
                Get Started
              </Link>
              <p className="text-gray-500 text-xs mt-3 text-center">+ $200 one-time setup fee</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-5 relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-pink-600 text-white text-center">
        <div className="blob w-96 h-96 bg-pink-500 opacity-20 top-0 right-0" />
        <div className="blob w-64 h-64 bg-purple-900 opacity-30 bottom-0 left-0" />
        <RevealOnScroll className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Stop losing calls. Start growing.</h2>
          <p className="text-purple-200 text-lg mb-8">Every missed call is a missed customer. VoiceDesk fixes that.</p>
          <Link href="/demo" className="btn-scale inline-block bg-white text-purple-700 font-bold px-10 py-4 rounded-2xl shadow-lg">
            Hear the Demo →
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
}
