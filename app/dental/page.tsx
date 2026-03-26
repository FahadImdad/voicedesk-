import Link from "next/link";
import { Phone, Clock, Calendar, Shield, CheckCircle, Star } from "lucide-react";

const painPoints = [
  "Patients call, go to voicemail, and book with a competitor",
  "Your receptionist is on lunch, with a patient, or off after 5pm",
  "Staff spend hours on repetitive scheduling calls",
  "You lose $150–$300 every time a new patient can't get through",
];

const features = [
  { icon: <Phone size={20} />, title: "Answers Every Call Instantly", desc: "No hold music. No voicemail. Every caller gets a live response in under a second." },
  { icon: <Calendar size={20} />, title: "Books Appointments", desc: "Syncs with your scheduling software. Patients book, reschedule, or cancel seamlessly." },
  { icon: <Clock size={20} />, title: "24/7 Availability", desc: "8pm on a Friday? Holiday weekend? Doesn't matter — your phones are always answered." },
  { icon: <Shield size={20} />, title: "HIPAA Conscious", desc: "Built with patient privacy in mind. No sensitive data stored unnecessarily." },
];

const faqs = [
  { q: "Will patients know it's AI?", a: "Our voice is designed to sound natural and warm. Most patients don't ask, and if they do — you can be transparent. Many clinics are proud to say they use AI." },
  { q: "What if the patient has a complex question?", a: "The agent handles common scenarios. For anything complex, it collects info and flags it for your staff to call back." },
  { q: "How long does setup take?", a: "24 hours from sign-up. We configure your agent, set up the phone number, and test it. You just forward your calls." },
  { q: "Does it work with my existing phone system?", a: "Yes. You simply forward calls to your VoiceDesk number. Works with any phone system." },
  { q: "Can I customize what it says?", a: "Absolutely. We build a custom script based on your clinic's services, FAQs, and tone." },
];

export default function DentalPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🦷 Built for Dental Clinics
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Never Miss a Patient Call{" "}
            <span className="text-brand-600">Again</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            VoiceDesk's AI receptionist answers every call, books appointments, and handles
            patient inquiries — 24 hours a day, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-brand-600 text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
            >
              Hear the Demo →
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg hover:border-brand-400 hover:text-brand-600 transition-colors"
            >
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4 bg-red-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Sound Familiar?</h2>
          <p className="text-gray-500 mb-10">These are the silent revenue leaks every dental clinic faces.</p>
          <ul className="space-y-4 text-left">
            {painPoints.map((p) => (
              <li key={p} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-red-100 shadow-sm">
                <span className="text-red-500 text-xl flex-shrink-0">✗</span>
                <span className="text-gray-700">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              VoiceDesk Fixes All of That
            </h2>
            <p className="text-lg text-gray-500">
              One AI agent. Every call answered. Zero patients lost.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-5 p-7 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-11 h-11 flex-shrink-0 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 px-4 bg-brand-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">The Math Is Simple</h2>
          <p className="text-brand-200 text-lg mb-12">
            Most clinics miss 15–30 calls per week. Here's what that costs you.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-10">
            {[
              { num: "20", label: "Missed calls/week" },
              { num: "$200", label: "Avg. value per new patient" },
              { num: "$4,000", label: "Lost revenue per week" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                <p className="text-4xl font-extrabold mb-1">{stat.num}</p>
                <p className="text-brand-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-brand-200 mb-6">
            VoiceDesk costs <span className="text-white font-bold">$397/month</span>. One recovered patient covers 2 months.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-brand-600 font-bold px-10 py-4 rounded-full hover:bg-brand-50 transition-colors"
          >
            Start Recovering Revenue →
          </Link>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex gap-1 justify-center mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />)}
          </div>
          <blockquote className="text-2xl font-medium text-gray-800 leading-relaxed mb-8">
            "We were missing 20+ calls a week. VoiceDesk paid for itself in the first 3 days.
            Our front desk team is so much less stressed now."
          </blockquote>
          <div>
            <p className="font-bold text-gray-900">Dr. Sarah Mitchell</p>
            <p className="text-gray-500 text-sm">Owner, Bright Smile Dental — Chicago, IL</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-14">
            Common Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-gray-950 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Stop Missing Patients?</h2>
          <p className="text-gray-400 text-lg mb-10">
            Set up in 24 hours. No contracts. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-brand-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-brand-500 transition-colors"
            >
              Hear the Demo
            </Link>
            <Link
              href="/contact"
              className="border-2 border-gray-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:border-white transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
