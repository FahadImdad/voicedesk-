import Link from "next/link";
import { Phone, Clock, Calendar, Star, ChevronRight, CheckCircle } from "lucide-react";

const industries = [
  {
    icon: "🦷",
    title: "Dental Clinics",
    desc: "Never miss a patient call. AI answers, books, and confirms appointments 24/7.",
    href: "/dental",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    desc: "Qualify leads instantly. AI follows up, answers questions, and books showings.",
    href: "/real-estate",
  },
  {
    icon: "💆",
    title: "Salons & Spas",
    desc: "Keep your chair full. AI handles bookings, cancellations, and reminders.",
    href: "/salons",
  },
];

const features = [
  { icon: <Phone size={22} />, title: "Answers Every Call", desc: "No more missed calls or voicemails that go unchecked." },
  { icon: <Clock size={22} />, title: "Works 24/7/365", desc: "Nights, weekends, holidays — always available." },
  { icon: <Calendar size={22} />, title: "Books Appointments", desc: "Syncs with your calendar and confirms bookings automatically." },
  { icon: <Star size={22} />, title: "Sounds Human", desc: "Natural, warm voice — callers won't know it's AI." },
];

const steps = [
  { num: "01", title: "We set up your agent", desc: "We configure your AI with your business info, services, and schedule." },
  { num: "02", title: "Forward your calls", desc: "Point your existing number to VoiceDesk. Takes 2 minutes." },
  { num: "03", title: "It handles everything", desc: "Answers, books, and logs every call. You get a summary." },
];

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Owner, Bright Smile Dental",
    text: "We were missing 20+ calls a week. VoiceDesk paid for itself in the first 3 days.",
    stars: 5,
  },
  {
    name: "James Thornton",
    role: "Real Estate Agent, NYC",
    text: "My leads get answered instantly now. I've closed 2 extra deals this month because of faster follow-up.",
    stars: 5,
  },
  {
    name: "Maria Lopez",
    role: "Owner, Bloom Spa",
    text: "My clients love that they can book at midnight. No more phone tag.",
    stars: 5,
  },
];

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-brand-50 via-white to-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            AI Receptionist — Live 24/7
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Your Business Deserves an{" "}
            <span className="text-brand-600">AI Receptionist</span> That Never Sleeps
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            VoiceDesk answers every call, books appointments, and handles inquiries — 24/7.
            No missed calls. No hold music. No extra staff.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
            >
              See Live Demo →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-brand-400 hover:text-brand-600 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">No credit card required · Setup in 24 hours</p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-gray-950 text-white py-5">
        <div className="max-w-4xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300">
          <span>⭐ 4.9/5 average rating</span>
          <span>📞 500,000+ calls handled</span>
          <span>🕒 &lt;1s average response time</span>
          <span>🏢 Trusted by 200+ businesses</span>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Built for Your Industry</h2>
            <p className="text-lg text-gray-500">Specialized agents trained for your specific business needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-brand-300 hover:shadow-xl hover:shadow-brand-50 transition-all"
              >
                <div className="text-5xl mb-5">{ind.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{ind.desc}</p>
                <span className="flex items-center gap-1 text-brand-600 text-sm font-semibold">
                  Learn more <ChevronRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Everything You Need</h2>
            <p className="text-lg text-gray-500">One agent. All your front-desk needs covered.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-11 h-11 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Up and Running in 24 Hours</h2>
            <p className="text-lg text-gray-500">No tech skills needed. We handle everything.</p>
          </div>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-6 items-start">
                <div className="w-14 h-14 flex-shrink-0 bg-brand-600 text-white font-extrabold text-lg rounded-2xl flex items-center justify-center">
                  {s.num}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-gray-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Businesses Love VoiceDesk</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Simple, Honest Pricing</h2>
          <p className="text-lg text-gray-500 mb-14">One plan. Everything included. Cancel anytime.</p>
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white rounded-3xl p-10 shadow-2xl shadow-brand-200 max-w-md mx-auto">
            <p className="text-brand-200 font-semibold uppercase tracking-widest text-sm mb-4">Professional</p>
            <div className="flex items-end justify-center gap-1 mb-6">
              <span className="text-6xl font-extrabold">$397</span>
              <span className="text-brand-200 mb-2">/month</span>
            </div>
            <ul className="space-y-3 text-sm text-left mb-8">
              {[
                "Unlimited minutes",
                "24/7 call answering",
                "Appointment booking",
                "Call summaries via email",
                "Custom voice & script",
                "Setup in 24 hours",
                "Cancel anytime",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-green-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="block bg-white text-brand-600 font-bold py-4 rounded-full hover:bg-brand-50 transition-colors text-center"
            >
              Get Started Today
            </Link>
            <p className="text-brand-200 text-xs mt-4">+ One-time $200 setup fee</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Stop Losing Calls. Start Growing.</h2>
          <p className="text-gray-400 text-lg mb-10">
            Every missed call is a missed opportunity. Let VoiceDesk handle it.
          </p>
          <Link
            href="/demo"
            className="inline-block bg-brand-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-brand-500 transition-colors shadow-lg"
          >
            See the Demo →
          </Link>
        </div>
      </section>
    </div>
  );
}
