import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { RevealOnScroll, StaggerGrid } from "@/components/AnimatedSection";

const industries = [
  { icon: "🦷", title: "Dental Clinics", desc: "Never miss a patient call again.", href: "/dental", bg: "from-blue-600 to-cyan-500" },
  { icon: "🏠", title: "Real Estate", desc: "Qualify leads. Book showings. Close more deals.", href: "/real-estate", bg: "from-emerald-600 to-teal-400" },
  { icon: "💆", title: "Salons & Spas", desc: "Fill your calendar without lifting a finger.", href: "/salons", bg: "from-pink-600 to-rose-400" },
];

const features = [
  { emoji: "⚡", title: "Instant Answer", desc: "Under 1 second. Every time.", bg: "bg-amber-50 border-amber-100", accent: "text-amber-600" },
  { emoji: "📅", title: "Books Appointments", desc: "Syncs with your calendar in real time.", bg: "bg-purple-50 border-purple-100", accent: "text-purple-600" },
  { emoji: "🌙", title: "24/7 Coverage", desc: "Nights, weekends, holidays — always on.", bg: "bg-indigo-50 border-indigo-100", accent: "text-indigo-600" },
  { emoji: "🎙️", title: "Sounds Human", desc: "Natural, warm voice. Callers feel heard.", bg: "bg-pink-50 border-pink-100", accent: "text-pink-600" },
  { emoji: "📋", title: "Call Summaries", desc: "Full recap delivered to your inbox.", bg: "bg-green-50 border-green-100", accent: "text-green-600" },
  { emoji: "🔧", title: "Custom Script", desc: "Trained on your exact business.", bg: "bg-orange-50 border-orange-100", accent: "text-orange-600" },
];

const steps = [
  { num: "1", title: "We build your agent", desc: "Configured with your business info, services, and tone.", color: "from-purple-600 to-violet-500" },
  { num: "2", title: "Forward your calls", desc: "Point your number to VoiceDesk. 2 minutes. No tech needed.", color: "from-blue-600 to-cyan-500" },
  { num: "3", title: "It handles everything", desc: "Every call answered, every booking logged. You get daily summaries.", color: "from-emerald-600 to-teal-500" },
];

export default function Home() {
  return (
    <div className="pt-16 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-5 py-24 text-center bg-gray-950">
        <div className="blob w-[600px] h-[600px] bg-purple-700 opacity-20 top-0 left-1/2 -translate-x-1/2" />
        <div className="blob w-80 h-80 bg-pink-600 opacity-15 bottom-0 right-0" />
        <div className="blob w-64 h-64 bg-blue-600 opacity-10 top-20 left-0" />

        <div className="relative z-10 animate-fade-up flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            AI Receptionist · Live 24/7
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-[1.05] tracking-tight max-w-4xl mb-6">
            Your phones,{" "}
            <span className="gradient-text">answered.</span>
            <br />Always.
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-lg mb-10 leading-relaxed">
            VoiceDesk answers every call, books appointments, and handles inquiries —
            so you never lose a customer to voicemail again.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center animate-fade-up delay-200">
            <Link href="/demo" className="btn-scale bg-purple-600 text-white font-bold px-8 py-4 rounded-2xl text-base shadow-lg shadow-purple-900">
              Hear the Demo →
            </Link>
            <Link href="/contact" className="btn-scale bg-white/10 border border-white/20 text-white font-bold px-8 py-4 rounded-2xl text-base backdrop-blur-sm">
              Book a Call
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-500 animate-fade-up delay-300">No credit card · Setup in 24 hours · Cancel anytime</p>
        </div>

        {/* Voice agent card */}
        <div className="relative z-10 mt-16 animate-fade-up delay-400">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-8 w-72 mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-5 flex items-center justify-center animate-float shadow-lg shadow-purple-900">
              <span className="text-3xl">🎙️</span>
            </div>
            <p className="font-black text-white text-base mb-1">VoiceDesk Agent</p>
            <p className="text-green-400 text-xs font-semibold mb-6">● Active · Listening</p>
            <div className="flex items-end justify-center gap-1.5 h-10 mb-6">
              {["h-3","h-6","h-9","h-7","h-10","h-6","h-4"].map((h, i) => (
                <span key={i} className={`bar bg-purple-400 ${h}`} />
              ))}
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3 text-left border border-white/10">
              <p className="text-xs text-gray-400 mb-1 font-medium">LIVE TRANSCRIPT</p>
              <p className="text-sm text-white font-medium">"Sure, I can book that for you…"</p>
            </div>
          </div>
          <div className="absolute -left-8 top-8 bg-white shadow-xl rounded-2xl px-3 py-2 text-xs font-bold text-gray-800 whitespace-nowrap animate-float" style={{animationDelay:"0.5s"}}>
            📞 Call answered
          </div>
          <div className="absolute -right-8 bottom-12 bg-white shadow-xl rounded-2xl px-3 py-2 text-xs font-bold text-gray-800 whitespace-nowrap animate-float" style={{animationDelay:"1s"}}>
            📅 Appointment booked ✓
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Built for your industry</h2>
            <p className="text-gray-500">Specialized agents, trained for your exact business.</p>
          </RevealOnScroll>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className={`card-hover group block p-8 rounded-3xl bg-gradient-to-br ${ind.bg} text-white overflow-hidden relative`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8" />
                <div className="text-4xl mb-5">{ind.icon}</div>
                <h3 className="font-black text-xl mb-2">{ind.title}</h3>
                <p className="text-white/80 text-sm mb-5">{ind.desc}</p>
                <span className="inline-flex items-center gap-1 text-white font-bold text-sm bg-white/20 px-4 py-1.5 rounded-full">
                  Learn more →
                </span>
              </Link>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-5 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Everything included</h2>
            <p className="text-gray-400">One agent handles your entire front desk.</p>
          </RevealOnScroll>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className={`card-hover p-6 rounded-2xl border ${f.bg}`}>
                <span className="text-3xl mb-4 block">{f.emoji}</span>
                <h3 className={`font-black text-gray-900 mb-1 ${f.accent}`}>{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Live in 24 hours</h2>
            <p className="text-gray-500">No tech skills needed. We handle the setup.</p>
          </RevealOnScroll>
          <div className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 120}>
                <div className={`flex gap-5 items-center p-6 rounded-2xl bg-gradient-to-r ${s.color} text-white`}>
                  <div className="w-12 h-12 flex-shrink-0 bg-white/20 font-black text-2xl rounded-2xl flex items-center justify-center">
                    {s.num}
                  </div>
                  <div>
                    <h3 className="font-black text-lg mb-0.5">{s.title}</h3>
                    <p className="text-white/80 text-sm">{s.desc}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-24 px-5 bg-gray-950">
        <div className="max-w-sm mx-auto">
          <RevealOnScroll className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">Simple pricing</h2>
            <p className="text-gray-400 mb-12">One plan. Everything included.</p>
            <div className="relative rounded-3xl p-8 overflow-hidden" style={{background:"linear-gradient(135deg,#3b0764 0%,#4c1d95 50%,#5b21b6 100%)"}}>
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400" />
              <div className="blob w-40 h-40 bg-pink-600 opacity-20 top-0 right-0" />
              <p className="text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">Professional</p>
              <div className="flex items-end justify-center gap-1 mb-6">
                <span className="text-6xl font-black text-white">$397</span>
                <span className="text-purple-300 mb-2 text-sm">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-left mb-8">
                {["Unlimited call minutes","24/7 answering","Appointment booking","Daily call summaries","Custom voice & script","Setup in 24 hours","Cancel anytime"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-purple-100">
                    <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-scale block bg-white text-purple-700 font-black py-4 rounded-2xl text-center hover:bg-purple-50 transition-colors">
                Get Started Today
              </Link>
              <p className="text-purple-400 text-xs mt-3 text-center">+ $200 one-time setup fee</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-5 relative overflow-hidden text-white text-center" style={{background:"linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #ec4899 100%)"}}>
        <div className="blob w-96 h-96 bg-white opacity-5 top-0 right-0" />
        <RevealOnScroll className="relative max-w-2xl mx-auto">
          <p className="text-white/60 font-bold uppercase tracking-widest text-xs mb-4">Ready to grow?</p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Stop losing calls.<br />Start winning customers.</h2>
          <p className="text-white/70 text-lg mb-8">Every missed call is a missed customer. VoiceDesk fixes that — starting tomorrow.</p>
          <Link href="/demo" className="btn-scale inline-block bg-white text-purple-700 font-black px-10 py-4 rounded-2xl shadow-2xl shadow-purple-900">
            Hear the Demo →
          </Link>
        </RevealOnScroll>
      </section>
    </div>
  );
}
