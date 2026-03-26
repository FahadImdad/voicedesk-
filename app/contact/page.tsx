export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Let's Talk</h1>
          <p className="text-lg text-gray-500 mb-14">
            Book a 15-minute call and we'll show you exactly how VoiceDesk works for your business.
          </p>

          {/* Calendly Embed Placeholder */}
          <div className="bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 p-16 mb-10">
            <div className="text-5xl mb-4">📅</div>
            <p className="text-gray-400 font-medium">Calendly embed goes here</p>
            <p className="text-gray-300 text-sm mt-1">
              Replace with your Calendly inline embed code
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            Prefer email?{" "}
            <a href="mailto:hello@voicedesk.ai" className="text-brand-600 font-medium hover:underline">
              hello@voicedesk.ai
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
