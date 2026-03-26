import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "VoiceDesk — AI Receptionist for Your Business",
  description:
    "Never miss a call again. VoiceDesk's AI voice agent answers calls 24/7, books appointments, and handles inquiries — so you don't have to.",
  keywords: "AI receptionist, voice agent, dental AI, appointment booking, AI phone answering",
  openGraph: {
    title: "VoiceDesk — AI Receptionist",
    description: "Never miss a patient call again. AI-powered receptionist, 24/7.",
    url: "https://voicedesk.ai",
    siteName: "VoiceDesk",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
