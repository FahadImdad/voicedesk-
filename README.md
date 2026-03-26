# VoiceDesk — AI Voice Receptionist SaaS

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel (deploy)

## Structure
```
app/
  page.tsx          → Homepage
  dental/           → Dental clinics niche page
  real-estate/      → Real estate niche page
  salons/           → Salons & spas niche page
  demo/             → Demo page (add Vapi widget here)
  contact/          → Contact page (add Calendly embed here)
components/
  Navbar.tsx
  Footer.tsx
```

## Setup

```bash
npm install
npm run dev
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## TODO Before Launch
- [ ] Set up Vapi agent (bright-smile-dental demo)
- [ ] Get Twilio US number, connect to Vapi
- [ ] Record demo call → upload to /public/demo-call.mp3
- [ ] Embed Vapi widget in /demo page
- [ ] Set up Calendly → embed in /contact page
- [ ] Update email in Footer + Contact (hello@voicedesk.ai)
- [ ] Buy domain → point to Vercel
- [ ] Add real testimonials once clients sign up
