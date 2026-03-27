import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Reveal, StaggerGrid } from "@/components/AnimatedSection";
import PricingCalculator from "@/components/PricingCalculator";

export default function Home() {
  return (
    <div className="pt-14">

      {/* HERO — tight, dark, no scroll needed */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-5 py-16 bg-gray-950 overflow-hidden">
        {/* subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-700 opacity-10 rounded-full blur-[120px] pointer-events-none" />

        {/* Left — text */}
        <div className="relative z-10 max-w-xl text-center lg:text-left fade-up">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 border border-purple-800 bg-purple-950 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"/>
            AI Voice Receptionist
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.08] tracking-tight mb-5">
            Never miss a call.<br/>
            <span className="gradient-text">Never lose a customer.</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            VoiceDesk answers every call, books appointments, and handles inquiries — 24/7. Your business keeps running even when you don't pick up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link href="/demo" className="btn bg-purple-700 text-white font-bold px-7 py-3.5 rounded-xl text-base">
              Hear a Live Demo →
            </Link>
            <Link href="/contact" className="btn bg-white/10 border border-white/15 text-white font-bold px-7 py-3.5 rounded-xl text-base">
              Talk to Us
            </Link>
          </div>
          <p className="mt-5 text-xs text-gray-500">No credit card · Live in 24 hours · Cancel anytime</p>
        </div>

        {/* Right — voice agent visual */}
        <div className="relative z-10 fade-up d2">
          <div className="w-64 bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-7 text-center">
            {/* avatar */}
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl float shadow-xl shadow-purple-900">
              🎙️
            </div>
            <p className="text-white font-bold text-sm mb-0.5">Sarah · VoiceDesk</p>
            <p className="text-green-400 text-xs mb-5">● Live now</p>
            {/* wave */}
            <div className="flex items-end justify-center gap-1.5 h-8 mb-5">
              <span className="bar" style={{height:"10px"}}/>
              <span className="bar" style={{height:"18px"}}/>
              <span className="bar" style={{height:"28px"}}/>
              <span className="bar" style={{height:"22px"}}/>
              <span className="bar" style={{height:"28px"}}/>
            </div>
            {/* transcript */}
            <div className="bg-black/30 rounded-xl p-3 text-left mb-4 border border-white/10">
              <p className="text-purple-300 text-[10px] font-bold mb-1 uppercase tracking-wider">Transcript</p>
              <p className="text-white text-xs leading-relaxed">"I have 10am available — shall I book that for you?"</p>
            </div>
            {/* status row */}
            <div className="flex justify-between text-[11px]">
              <span className="text-gray-400">Call duration</span>
              <span className="text-white font-semibold">0:42</span>
            </div>
          </div>
          {/* pills */}
          <div className="absolute -left-12 top-10 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-bold text-gray-800 whitespace-nowrap float" style={{animationDelay:".4s"}}>
            📞 Answered in 0.8s
          </div>
          <div className="absolute -right-10 bottom-12 bg-white rounded-2xl shadow-lg px-3 py-2 text-xs font-bold text-gray-800 whitespace-nowrap float" style={{animationDelay:"1.2s"}}>
            ✅ Appointment booked
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR — 3 cards, compact */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Built for businesses that can't afford to miss calls</h2>
            <p className="text-gray-500 text-sm">Choose your industry below.</p>
          </Reveal>
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            items={[
              { icon: "🦷", title: "Dental Clinics", desc: "Patients call, get answered instantly, and book — even at 9pm.", href: "/dental", from: "from-violet-600", to: "to-blue-500" },
              { icon: "🏠", title: "Real Estate", desc: "Every lead answered. Showings booked. No missed opportunities.", href: "/real-estate", from: "from-emerald-500", to: "to-teal-400" },
              { icon: "💆", title: "Salons & Spas", desc: "Clients book any time. Your chair stays full.", href: "/salons", from: "from-rose-500", to: "to-pink-400" },
            ]}
            renderItem={(ind: any) => (
              <Link href={ind.href} className={`group block p-6 rounded-2xl bg-gradient-to-br ${ind.from} ${ind.to} text-white overflow-hidden relative hover:opacity-90 transition-opacity`}>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full"/>
                <div className="text-3xl mb-4">{ind.icon}</div>
                <h3 className="font-black text-base mb-1">{ind.title}</h3>
                <p className="text-white/75 text-xs leading-relaxed mb-4">{ind.desc}</p>
                <span className="text-white/90 text-xs font-bold">Learn more →</span>
              </Link>
            )}
          />
        </div>
      </section>

      {/* WHAT IT DOES — clean list, no cards */}
      <section className="py-16 px-5 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">One agent. Your whole front desk.</h2>
          </Reveal>
          <StaggerGrid
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            items={[
              ["⚡", "Answers in under 1 second", "No hold music. No voicemail."],
              ["📅", "Books appointments", "Syncs with your calendar automatically."],
              ["🌙", "Works 24/7", "Nights, weekends, holidays — always on."],
              ["🎙️", "Sounds natural", "Warm, human voice. Not robotic."],
              ["📋", "Sends you summaries", "Know what every caller said."],
              ["🔧", "Custom trained", "Knows your business, services, FAQs."],
            ]}
            renderItem={([emoji, title, desc]: any) => (
              <div className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100">
                <span className="text-2xl flex-shrink-0">{emoji}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{desc}</p>
                </div>
              </div>
            )}
          />
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps, minimal */}
      <section className="py-16 px-5 bg-white">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Up and running in 24 hours</h2>
            <p className="text-gray-500 text-sm">Zero tech skills needed.</p>
          </Reveal>
          <div className="relative">
            <div className="absolute left-6 top-8 bottom-8 w-px bg-gray-100 hidden sm:block"/>
            <div className="flex flex-col gap-6">
              {[
                ["We build your agent", "Configured for your business — services, tone, FAQs."],
                ["You forward your calls", "Point your existing number to VoiceDesk. 2 minutes."],
                ["It handles everything", "Calls answered. Bookings made. Summaries sent to you."],
              ].map(([title, desc], i) => (
                <Reveal key={i} delay={i * 100}>
                  <div className="flex gap-5 items-start sm:pl-0">
                    <div className="w-12 h-12 flex-shrink-0 bg-purple-700 text-white font-black text-base rounded-2xl flex items-center justify-center z-10">
                      {i + 1}
                    </div>
                    <div className="pt-2">
                      <p className="font-bold text-gray-900 text-sm">{title}</p>
                      <p className="text-gray-500 text-xs mt-1">{desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — interactive calculator */}
      <section id="pricing" className="py-16 px-5 bg-gray-950">
        <div className="max-w-2xl mx-auto">
          <Reveal className="text-center mb-10">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-3">Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Build your own plan</h2>
            <p className="text-gray-400 text-sm">Slide to your volume. Pick your features. See your price instantly.</p>
          </Reveal>
          <Reveal>
            <PricingCalculator />
          </Reveal>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 px-5 bg-purple-700 text-center text-white">
        <Reveal className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Stop losing calls. Start growing.</h2>
          <p className="text-purple-200 mb-7 text-sm">Your next missed call could be your next best customer.</p>
          <Link href="/demo" className="btn inline-block bg-white text-purple-700 font-black px-8 py-3.5 rounded-xl shadow-lg">
            Hear the Demo →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
