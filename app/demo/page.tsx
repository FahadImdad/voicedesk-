import Link from "next/link";

export default function DemoPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-4 bg-gradient-to-br from-brand-50 via-white to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            🎙️ Live Demo
          </div>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
            Hear VoiceDesk in Action
          </h1>
          <p className="text-lg text-gray-500 mb-12">
            Listen to a real call handled by our AI receptionist. This is the exact
            same agent your patients / clients will interact with.
          </p>

          {/* Demo Audio Placeholder */}
          <div className="bg-white rounded-3xl border-2 border-dashed border-brand-200 p-16 mb-10 shadow-sm">
            <div className="text-6xl mb-4">🎧</div>
            <p className="text-gray-400 font-medium mb-2">Demo call recording</p>
            <p className="text-gray-300 text-sm">
              Upload your Vapi demo recording here
            </p>
            {/* Replace this with an <audio> tag or Vapi widget once you have your demo */}
            {/* Example: <audio controls src="/demo-call.mp3" className="w-full mt-4" /> */}
          </div>

          {/* Vapi Widget Placeholder */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 mb-10">
            <p className="font-bold text-gray-800 text-lg mb-2">🤙 Try It Live</p>
            <p className="text-gray-500 text-sm mb-6">
              Click the button below to start a live conversation with our AI receptionist demo.
            </p>
            {/* Replace with Vapi web SDK embed */}
            <div className="inline-flex items-center gap-2 bg-brand-600 text-white font-semibold px-6 py-3 rounded-full cursor-pointer hover:bg-brand-700 transition-colors">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Start Demo Call (coming soon)
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block bg-brand-600 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-brand-700 transition-colors shadow-lg"
          >
            Get This for Your Business →
          </Link>
        </div>
      </section>
    </div>
  );
}
