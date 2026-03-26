"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { FadeUp, FadeIn, StaggerChildren, StaggerItem } from "@/components/AnimatedSection";

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

      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-5 py-24 text-center bg-white">
        {/* Background blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-100 rounded-full blur-[100px] opacity-30 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-brand-200 text-brand-600 text-xs font-bold px-4 py-2 rounded-full mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full pulse-ring" />
            AI Receptionist · Available 24/7
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-[1.05] tracking-tight max-w-4xl mb-6">
            Your phones,{" "}
            <span className="gradient-text">answered.</span>
            <br />Always.
          </h1>

          <p className="text-lg sm:text-xl text-gray-500 max-w-lg mb-10 leading-relaxed">
            VoiceDesk's AI receptionist answers every call, books appointments, and handles
            inquiries — so you never lose a customer to voicemail again.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:justify-center"
          >
            <Link
              href="/demo"
              className="bg-brand-600 text-white font-bold px-8 py-4 rounded-2xl text-base hover:bg-brand-700 transition-all hover:scale-[1.02] shadow-lg shadow-brand-200 active:scale-[0.98]"
            >
              Hear the Demo →
            </Link>
            <Link
              href="/contact"
              className="bg-gray-100 text-gray-800 font-bold px-8 py-4 rounded-2xl text-base hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Call
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 text-xs text-gray-400"
          >
            No credit card · Setup in 24 hours · Cancel anytime
          </motion.p>
        </motion.div>

        {/* Floating UI mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative z-10 mt-16 w-full max-w-sm mx-auto"
        >
          <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl p-5 text-left">
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-50">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white font-black text-sm float">V</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">VoiceDesk Agent</p>
                <p className="text-xs text-green-500 font-medium">● Online now</p>
              </div>
            </div>
            {[
              { from: "caller", text: "Hi, I'd like to book an appointment for tomorrow?" },
              { from: "agent", text: "Of course! I have 10am and 2pm available. Which works for you?" },
              { from: "caller", text: "10am please" },
              { from: "agent", text: "Perfect! Booked for 10am tomorrow. You'll get a confirmation shortly 📅" },
            ].map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.from === "caller" ? -10 : 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className={`flex mb-3 ${msg.from === "agent" ? "justify-end" : "justify-start"}`}
              >
                <div className={`text-xs px-4 py-2.5 rounded-2xl max-w-[80%] leading-relaxed ${
                  msg.from === "agent"
                    ? "bg-brand-600 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-700 rounded-bl-sm"
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Built for your industry</h2>
            <p className="text-gray-500">Specialized agents trained for your exact business.</p>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industries.map((ind) => (
              <StaggerItem key={ind.href}>
                <Link
                  href={ind.href}
                  className="group block p-7 rounded-2xl border border-gray-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-50 transition-all bg-white hover:-translate-y-1"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 ${ind.color}`}>
                    {ind.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{ind.title}</h3>
                  <p className="text-sm text-gray-500">{ind.desc}</p>
                  <p className="text-brand-600 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">Learn more →</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Everything included</h2>
            <p className="text-gray-500">One agent handles your entire front desk.</p>
          </FadeUp>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                  <span className="text-3xl mb-4 block">{f.emoji}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-5 bg-gray-950 text-white">
        <div className="max-w-3xl mx-auto">
          <FadeUp className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Live in 24 hours</h2>
            <p className="text-gray-400">No tech skills needed. We handle the setup.</p>
          </FadeUp>
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <FadeUp key={s.num} delay={i * 0.1}>
                <div className="flex gap-5 items-start">
                  <div className="w-12 h-12 flex-shrink-0 bg-brand-600 text-white font-black text-lg rounded-2xl flex items-center justify-center glow-purple">
                    {s.num}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-gray-400 text-sm">{s.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-5">
        <div className="max-w-sm mx-auto text-center">
          <FadeUp>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">Simple pricing</h2>
            <p className="text-gray-500 mb-12">One plan. Everything included.</p>

            <div className="relative bg-gray-950 text-white rounded-3xl p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 via-purple-400 to-pink-500" />
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
                className="block bg-brand-600 text-white font-bold py-4 rounded-xl hover:bg-brand-500 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
              >
                Get Started
              </Link>
              <p className="text-gray-500 text-xs mt-3">+ $200 one-time setup fee</p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-5 relative overflow-hidden bg-brand-600 text-white text-center">
        <div className="absolute inset-0 noise-bg pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-[120px] opacity-20 pointer-events-none" />
        <FadeUp className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Stop losing calls. Start growing.</h2>
          <p className="text-brand-200 text-lg mb-8">Every missed call is a missed customer. VoiceDesk fixes that.</p>
          <Link
            href="/demo"
            className="inline-block bg-white text-brand-600 font-bold px-10 py-4 rounded-2xl text-base hover:bg-brand-50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            Hear the Demo →
          </Link>
        </FadeUp>
      </section>
    </div>
  );
}
