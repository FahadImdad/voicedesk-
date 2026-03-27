"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const BASE_PRICE = 47;
const PRICE_PER_100_CALLS = 25;

const ADDONS = [
  { id: "booking",    label: "📅 Calendar Booking",        price: 20 },
  { id: "summary",    label: "📋 Daily Call Summaries",     price: 10 },
  { id: "custom",     label: "🎙️ Custom Agent Script",      price: 20 },
  { id: "crm",        label: "🔗 CRM Integration",          price: 40 },
  { id: "sms",        label: "💬 SMS Follow-ups",           price: 25 },
  { id: "multi",      label: "👥 Multiple Agent Personas",  price: 35 },
];

const CALL_STEPS = [50, 100, 200, 300, 500, 750, 1000];

export default function PricingCalculator() {
  const [callIndex, setCallIndex] = useState(1); // default 100 calls
  const [addons, setAddons] = useState<Set<string>>(new Set(["booking", "summary"]));

  const calls = CALL_STEPS[callIndex];

  const toggle = (id: string) => {
    setAddons(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const price = useMemo(() => {
    const callCost = BASE_PRICE + Math.floor(calls / 100) * PRICE_PER_100_CALLS;
    const addonCost = ADDONS.filter(a => addons.has(a.id)).reduce((s, a) => s + a.price, 0);
    return callCost + addonCost;
  }, [calls, addons]);

  const included = [
    "24/7 call answering",
    "Lead qualification",
    "1 dedicated phone number",
    "Setup in 24 hours",
    "Cancel anytime",
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
        <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-500" />

        <div className="p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Build Your Plan</p>
              <p className="text-gray-600 text-sm">Drag the slider. Pick your features. See your price.</p>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black text-gray-900 tabular-nums">${price}</span>
                <span className="text-gray-400 text-sm">/mo</span>
              </div>
              <p className="text-xs text-gray-400 mt-0.5">billed monthly</p>
            </div>
          </div>

          {/* Calls Slider */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <p className="text-sm font-bold text-gray-800">📞 Monthly Calls</p>
              <span className="text-purple-700 font-black text-lg">{calls === 1000 ? "1,000+" : calls}</span>
            </div>
            <input
              type="range"
              min={0}
              max={CALL_STEPS.length - 1}
              value={callIndex}
              onChange={e => setCallIndex(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer accent-purple-700"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1.5">
              <span>50</span>
              <span>250</span>
              <span>500</span>
              <span>750</span>
              <span>1,000+</span>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              ≈ {Math.round(calls / 30)} calls/day · fits {calls <= 100 ? "solo agents" : calls <= 300 ? "active agents" : "high-volume teams"}
            </p>
          </div>

          {/* Add-ons */}
          <div className="mb-8">
            <p className="text-sm font-bold text-gray-800 mb-3">⚡ Add-ons</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADDONS.map(addon => {
                const active = addons.has(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggle(addon.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      active
                        ? "bg-purple-50 border-purple-400 text-purple-800"
                        : "bg-gray-50 border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    <span>{addon.label}</span>
                    <span className={`text-xs font-bold ml-2 ${active ? "text-purple-600" : "text-gray-400"}`}>
                      {active ? `+$${addon.price}` : `+$${addon.price}`}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Always included */}
          <div className="mb-8 bg-gray-50 rounded-2xl p-5">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Always Included</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {included.map(f => (
                <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                  <CheckCircle size={13} className="text-purple-600 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Price summary */}
          <div className="border-t border-gray-100 pt-5 mb-6 space-y-1.5 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Base ({calls} calls/mo)</span>
              <span>${BASE_PRICE + Math.floor(calls / 100) * PRICE_PER_100_CALLS}/mo</span>
            </div>
            {ADDONS.filter(a => addons.has(a.id)).map(a => (
              <div key={a.id} className="flex justify-between text-gray-500">
                <span>{a.label.split(" ").slice(1).join(" ")}</span>
                <span>+${a.price}/mo</span>
              </div>
            ))}
            <div className="flex justify-between font-black text-gray-900 text-base pt-2 border-t border-gray-100">
              <span>Total</span>
              <span>${price}/mo</span>
            </div>
          </div>

          <Link
            href="/contact"
            className="block bg-purple-700 text-white font-black py-4 rounded-xl text-center text-sm hover:bg-purple-800 transition-colors"
          >
            Get Started — ${price}/mo →
          </Link>
          <p className="text-gray-400 text-xs text-center mt-3">+ $200 one-time setup · No credit card to start</p>
        </div>
      </div>
    </div>
  );
}
