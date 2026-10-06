import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Cloud, Gauge, Globe, LockKeyhole, MapPin, MessageSquare, Radio, ShieldCheck, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import trackerPresentationImage from "@/assets/presentation.jpg";

const features = [
  {
    icon: Radio,
    title: "Dual-mode connectivity",
    copy: "Stay connected online through the dashboard, with SMS fallback when standard data coverage is unreliable.",
  },
  {
    icon: MapPin,
    title: "Live location visibility",
    copy: "Track a vehicle or valuable asset with location data designed for practical fleet and personal security workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Security-first alerts",
    copy: "Receive fast notifications for movement, panic events and unusual activity so teams can respond with confidence.",
  },
  {
    icon: Smartphone,
    title: "Simple control experience",
    copy: "Bring maps, alerts and asset information into one clear experience that is easy to understand and use.",
  },
  {
    icon: Globe,
    title: "Cloud-connected integration",
    copy: "Synchronize location and device data with cloud services, maps and operational dashboards for a shared view of every asset.",
  },
];

const steps = [
  { number: "01", title: "Scope", copy: "We understand the asset, operating environment, coverage needs and response workflow." },
  { number: "02", title: "Install", copy: "Our team helps position the tracker securely and configure the asset profile." },
  { number: "03", title: "Connect", copy: "The device reports through the best available channel: online data or SMS fallback." },
  { number: "04", title: "Protect", copy: "Monitor movement, receive alerts and make faster decisions from anywhere." },
];

const productSpecs = [
  { label: "Positioning", value: "GPS / GNSS location" },
  { label: "Connectivity", value: "Online data + SMS fallback" },
  { label: "Alerts", value: "Movement, panic and tamper events" },
  { label: "Control", value: "Remote configuration" },
  { label: "Platform", value: "Cloud and mobile experience" },
  { label: "Deployment", value: "Single asset to fleet pilot" },
];

const useCases = [
  { title: "Personal vehicles", copy: "Keep a clearer view of the cars and motorcycles that matter to you.", icon: LockKeyhole },
  { title: "Fleet operations", copy: "Give teams shared visibility for vehicles, routes, and response decisions.", icon: Gauge },
  { title: "Motorcycles and logistics", copy: "Support moving assets with location history, alerts, and practical deployment guidance.", icon: MapPin },
  { title: "High-value equipment", copy: "Extend connected monitoring beyond vehicles to equipment and other valuable assets.", icon: Cloud },
];

const faqs = [
  { question: "What can ABROB-GT track?", answer: "ABROB-GT is designed for vehicles, motorcycles, valuable equipment, and other assets that benefit from location and status visibility." },
  { question: "What happens when internet data is unreliable?", answer: "The product direction includes SMS fallback so essential device communication can continue when standard online data coverage is unavailable." },
  { question: "Can you support more than one asset?", answer: "Yes. The fleet pilot model is intended for multiple devices, shared visibility, and practical rollout support." },
  { question: "Do you provide installation and onboarding?", answer: "The deployment process includes installation guidance, asset setup, and onboarding support shaped around the operating environment." },
  { question: "How do I get pricing?", answer: "Every deployment is different. Choose a starting plan and contact the ABROB team for a tailored quotation and installation conversation." },
];

const pricingPlans = [
  { name: "Single asset", label: "For personal protection", copy: "One ABROB-GT unit, installation guidance, asset setup and onboarding support.", icon: LockKeyhole },
  { name: "Fleet pilot", label: "For growing operations", copy: "A tailored pilot for multiple vehicles, shared visibility and practical deployment support.", icon: Gauge },
  { name: "Enterprise", label: "For large deployments", copy: "Custom rollout planning, integration conversations and support shaped around your operation.", icon: Cloud },
];

const Tracker = () => (
  <>
    <SEO
      title="ABROB-GT Tracker | Smart GPS Security"
      description="Discover ABROB-GT, a practical dual-mode GPS tracker for vehicles and valuable assets, built with online monitoring and SMS fallback."
    />
    <main className="min-h-screen bg-white overflow-hidden">
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7fafc]">
        <div className="absolute -right-32 -top-32 h-96 w-96 animate-pulse-soft rounded-full bg-[#09bde8]/15 blur-3xl" />
        <div className="container relative mx-auto grid items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:py-28 reveal">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#09bde8]/30 bg-[#09bde8]/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-[#0879c9]"><Zap className="h-4 w-4" /> Product spotlight</div>
            <h1 className="text-5xl leading-[1.02] text-[#061b5c] sm:text-6xl lg:text-7xl">Know where it is. <span className="text-[#0879c9]">Protect what matters.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">ABROB-GT is a practical bidirectional, dual-mode GPS tracker built for vehicles, devices and valuable assets in real-world environments.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY%2C%20I%20want%20to%20learn%20more%20about%20ABROB-GT%20Tracker." target="_blank" rel="noreferrer"><Button size="lg" className="h-14 rounded-full bg-[#061b5c] px-7 text-base font-bold text-white hover:bg-[#0b2d7f]">Request a demo <ArrowRight className="ml-2 h-5 w-5" /></Button></a>
              <Link to="/projects"><Button size="lg" variant="outline" className="h-14 rounded-full border-slate-300 px-7 text-base font-bold text-[#061b5c] hover:border-[#09bde8] hover:bg-[#09bde8]/10">View project work</Button></Link>
            </div>
            <div className="mt-10 grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
              {["Online + SMS", "Real-time view", "Built for Nigeria"].map((item) => <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="h-4 w-4 text-[#09bde8]" />{item}</div>)}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-5 top-8 z-10 hidden rounded-2xl border border-white/80 bg-white/95 p-4 shadow-xl sm:block"><div className="flex items-center gap-3"><div className="rounded-xl bg-[#09bde8]/15 p-3 text-[#0879c9]"><LockKeyhole className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-wider text-slate-400">ABROB-GT</p><p className="font-bold text-[#061b5c]">Security in motion</p></div></div></div>
            <div className="animate-float overflow-hidden rounded-[2rem] bg-[#061b5c] p-2 shadow-2xl shadow-[#061b5c]/20">
              <img src={trackerPresentationImage} alt="ABROB founder presenting the ABROB-GT tracker" loading="lazy" decoding="async" className="h-[420px] w-full rounded-[1.5rem] object-cover sm:h-[540px]" />
              <div className="absolute inset-2 rounded-[1.5rem] bg-gradient-to-t from-[#061b5c]/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white"><p className="text-sm font-bold uppercase tracking-[.2em] text-[#09bde8]">TRACK. ALERT. RESPOND.</p><p className="mt-2 max-w-md text-2xl font-bold">A clearer view of every journey.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24"><div className="container mx-auto px-4 sm:px-6"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">Why ABROB-GT</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">Reliable visibility when it matters most.</h2><p className="mt-5 text-lg leading-8 text-slate-600">ABROB-GT combines resilient communication, useful alerts and a focused monitoring experience to make asset security more accessible.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, copy }, index) => <div key={title} style={{ animationDelay: `${index * 0.08}s` }} className="reveal rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:border-[#09bde8]/50 hover:shadow-glow"><div className="mb-8 inline-flex rounded-2xl bg-[#061b5c] p-3.5 text-[#09bde8]"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-bold text-[#061b5c]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></div>)}</div></div></section>

      <section className="border-y border-slate-200 bg-[#061b5c] py-20 text-white sm:py-24"><div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#09bde8]">See the product experience</p><h2 className="max-w-2xl text-4xl leading-tight sm:text-5xl">From a device on the road to a clearer operating picture.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-blue-100/75">Watch the existing ABROB product introduction, then request a live walkthrough shaped around your vehicle, fleet, or asset-monitoring needs.</p><div className="mt-8 space-y-4">{["Location and device status in one view", "Alerts designed for faster response", "A practical path from single asset to fleet pilot"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-semibold text-blue-100"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#09bde8]" />{item}</div>)}</div><a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY%2C%20I%20would%20like%20a%20live%20ABROB-GT%20demo." target="_blank" rel="noreferrer"><Button size="lg" className="mt-9 h-14 rounded-full bg-[#09bde8] px-8 font-bold text-[#061b5c] hover:bg-white">Request a live demo <ArrowRight className="ml-2 h-5 w-5" /></Button></a></div><div className="overflow-hidden rounded-3xl border border-white/15 bg-black shadow-2xl"><div className="aspect-video"><iframe className="h-full w-full" src="https://www.youtube.com/embed/aVy5JRKhshY" title="ABROB product introduction video" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div><p className="border-t border-white/10 px-5 py-3 text-xs text-blue-100/60">Product introduction video. Request a tailored walkthrough for your use case.</p></div></div></section>

      <section className="border-y border-slate-200 bg-[#f7fafc] py-20 sm:py-24"><div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">How it works</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">From installation to insight.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A focused process that helps individuals, fleet operators and organisations get value quickly.</p></div><div className="grid gap-4">{steps.map((step) => <div key={step.number} className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-card"><span className="font-poppins text-2xl font-bold text-[#09bde8]">{step.number}</span><div><h3 className="text-xl font-bold text-[#061b5c]">{step.title}</h3><p className="mt-2 leading-7 text-slate-600">{step.copy}</p></div></div>)}</div></div></section>

      <section className="bg-[#f7fafc] py-20 sm:py-24"><div className="container mx-auto px-4 sm:px-6"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">Pricing & purchase</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">A plan that fits the way you operate.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Every deployment is different. Choose the starting point that matches your needs, then talk to our team for a clear quotation and installation plan.</p></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{pricingPlans.map(({ name, label, copy, icon: Icon }, index) => <div key={name} style={{ animationDelay: `${index * 0.1}s` }} className={`reveal relative rounded-3xl border bg-white p-7 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-glow ${index === 1 ? "border-[#09bde8] ring-2 ring-[#09bde8]/15" : "border-slate-200"}`}>{index === 1 && <span className="absolute -top-3 left-7 rounded-full bg-[#09bde8] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#061b5c]">Popular starting point</span>}<div className="mb-8 flex items-center justify-between"><div className="rounded-2xl bg-[#061b5c] p-3.5 text-[#09bde8]"><Icon className="h-6 w-6" /></div><span className="text-xs font-bold uppercase tracking-wider text-[#0879c9]">{label}</span></div><h3 className="text-2xl font-bold text-[#061b5c]">{name}</h3><p className="mt-3 min-h-20 leading-7 text-slate-600">{copy}</p><div className="my-6 border-t border-slate-200 pt-5"><p className="text-sm font-bold uppercase tracking-[.15em] text-slate-400">Pricing</p><p className="mt-1 text-xl font-bold text-[#061b5c]">Request a tailored quote</p></div><a href={`https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY%2C%20I%20want%20a%20quote%20for%20the%20${encodeURIComponent(name)}%20ABROB-GT%20package.`} target="_blank" rel="noreferrer"><Button variant={index === 1 ? "default" : "outline"} className={`w-full rounded-full font-bold ${index === 1 ? "bg-[#061b5c] text-white hover:bg-[#0b2d7f]" : "border-slate-300 text-[#061b5c] hover:border-[#09bde8]"}`}>Request pricing <ArrowRight className="ml-2 h-4 w-4" /></Button></a></div>)}</div></div></section>\n\n      <section className="bg-[#061b5c] py-20 text-white sm:py-24"><div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#09bde8]">Built for practical security</p><h2 className="max-w-3xl text-4xl leading-tight sm:text-5xl">Ready to put better visibility in motion?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100/75">Talk to the ABROB team about fitment, pilot programmes, fleet use and deployment support.</p></div><a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY%2C%20I%20want%20a%20demo%20of%20ABROB-GT%20Tracker." target="_blank" rel="noreferrer"><Button size="lg" className="h-14 rounded-full bg-[#09bde8] px-8 font-bold text-[#061b5c] hover:bg-[#08acd3]">Talk to our team <MessageSquare className="ml-2 h-5 w-5" /></Button></a></div></section>

      <section className="bg-white py-16"><div className="container mx-auto grid gap-5 px-4 sm:px-6 md:grid-cols-3"><div className="rounded-3xl border border-slate-200 p-6"><Gauge className="h-6 w-6 text-[#0879c9]" /><h3 className="mt-5 font-bold text-[#061b5c]">Operational clarity</h3><p className="mt-2 text-sm leading-7 text-slate-600">Designed to reduce uncertainty around movement, location and response.</p></div><div className="rounded-3xl border border-slate-200 p-6"><Cloud className="h-6 w-6 text-[#0879c9]" /><h3 className="mt-5 font-bold text-[#061b5c]">Connected dashboard</h3><p className="mt-2 text-sm leading-7 text-slate-600">Online monitoring and data visibility for teams that need a shared picture.</p></div><div className="rounded-3xl border border-slate-200 p-6"><LockKeyhole className="h-6 w-6 text-[#0879c9]" /><h3 className="mt-5 font-bold text-[#061b5c]">Practical protection</h3><p className="mt-2 text-sm leading-7 text-slate-600">A hardware-led security layer shaped around local operating realities.</p></div></div></section>
      <section className="bg-white py-20 sm:py-24"><div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-start"><div><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">Product at a glance</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">The essentials, clearly explained.</h2><p className="mt-5 text-lg leading-8 text-slate-600">A practical product direction built around resilient communication, useful alerts, and a deployment path that can grow with your operation.</p><a href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY%2C%20I%20have%20a%20question%20about%20ABROB-GT%20specifications." target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center font-bold text-[#0879c9]">Ask about specifications <ArrowRight className="ml-2 h-4 w-4" /></a></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{productSpecs.map((spec) => <div key={spec.label} className="rounded-2xl border border-slate-200 bg-[#f7fafc] p-5 transition hover:-translate-y-1 hover:border-[#09bde8]/50 hover:shadow-glow"><p className="text-xs font-bold uppercase tracking-[.14em] text-slate-400">{spec.label}</p><p className="mt-3 font-bold leading-6 text-[#061b5c]">{spec.value}</p></div>)}</div></div></section>

      <section className="bg-[#f7fafc] py-20 sm:py-24"><div className="container mx-auto px-4 sm:px-6"><div className="mx-auto max-w-3xl text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">Where it fits</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">One platform, several practical use cases.</h2><p className="mt-5 text-lg leading-8 text-slate-600">Start with the asset or workflow that matters most, then shape the deployment around the way your team operates.</p></div><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{useCases.map(({ title, copy, icon: Icon }) => <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:border-[#09bde8]/50 hover:shadow-glow"><div className="mb-8 inline-flex rounded-2xl bg-[#061b5c] p-3.5 text-[#09bde8]"><Icon className="h-6 w-6" /></div><h3 className="text-xl font-bold text-[#061b5c]">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{copy}</p></article>)}</div></div></section>

      <section className="bg-white py-20 sm:py-24"><div className="container mx-auto max-w-4xl px-4 sm:px-6"><div className="mb-10 text-center"><p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-[#0879c9]">Frequently asked questions</p><h2 className="text-4xl text-[#061b5c] sm:text-5xl">Before you start a pilot.</h2></div><div className="space-y-3">{faqs.map((faq) => <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-[#f7fafc] p-5"><summary className="cursor-pointer list-none pr-8 text-lg font-bold text-[#061b5c] marker:hidden">{faq.question}</summary><p className="mt-3 max-w-3xl leading-7 text-slate-600">{faq.answer}</p></details>)}</div></div></section>

    </main>
  </>
);

export default Tracker;
