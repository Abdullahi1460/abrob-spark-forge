import React, { useEffect, useState } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/sonner";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  ChevronDown
} from "lucide-react";
import { supabase } from "@/lib/supabase";

// Asset imports
import maximumImage from "@/assets/maximum.jpg";

const Solutions = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    launched: false,
  });

  // Waitlist form state
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const target = new Date("2026-07-28T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, launched: true });
        clearInterval(interval);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds, launched: false });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    try {
      const { error } = await supabase
        .from("waitlist")
        .insert({ name, email, phone });
      if (error) throw error;
      toast.success("Success! You have been added to the waitlist.");
    } catch (err: any) {
      console.error("Supabase waitlist error", err);
      toast.error(err?.message ?? "Failed to submit waitlist.");
    }
    setIsWaitlistOpen(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  const renderTimerCard = (value: number, label: string) => (
    <div className="flex flex-col items-center justify-center p-3 sm:p-5 bg-card/90 border border-primary/20 rounded-2xl shadow-glow min-w-[75px] sm:min-w-[100px] backdrop-blur-md hover:scale-105 transition-transform duration-300">
      <span className="text-2xl sm:text-4xl font-extrabold font-mono text-primary tracking-tight">
        {value.toString().padStart(2, "0")}
      </span>
      <span className="text-[9px] sm:text-xs text-muted-foreground uppercase tracking-wider font-semibold mt-1 sm:mt-2">
        {label}
      </span>
    </div>
  );

  return (
    <>
      <SEO
        title="Solutions | ABROB INDUSTRY"
        description="Explore ABROB-GTpay, our cutting-edge dual-mode GPS tracking system. Protect vehicles and devices with offline SMS capability and real-time Firebase monitoring."
      />
      <main className="min-h-screen py-20 relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto px-4 z-10 relative">
          {/* 1. Hero Section (GTpay Countdown) */}
          <section className="mb-20 animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm px-4 py-1.5 text-xs sm:text-sm text-primary mb-6 font-semibold mx-auto hover:border-primary/50 transition-colors">
              <Zap className="w-4 h-4 animate-pulse" /> Launching July 28, 2026
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight font-poppins mb-8 max-w-5xl mx-auto">
              <span className="block text-primary text-3xl sm:text-5xl md:text-6xl mb-4 font-bold tracking-normal">ABROB-GTpay</span>
              <span className="block">
                Track your Asset <span className="bg-gradient-to-r from-primary via-blue-400 to-secondary bg-clip-text text-transparent">Online or Offline</span>
              </span>
            </h1>

            <p className="text-center text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              🎉 First 10 sign‑ups get <strong className="text-primary">10% off</strong> ABROB-GTpay! Use code <code className="bg-primary/15 text-primary px-2 py-0.5 rounded font-mono text-sm border border-primary/30">ABROB10</code>.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto text-left">
              {/* Left Column: Product Image */}
              <div className="lg:col-span-5 flex justify-end lg:order-2 self-start items-start">
                <div className="relative group rounded-2xl overflow-hidden border border-border shadow-glow bg-card w-full max-w-sm">
                  <img 
                    src={maximumImage} 
                    alt="ABROB-GT Hardware Tracker" 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Right Column: Text, Countdown, Buttons */}
              <div className="lg:col-span-7 space-y-6 self-start lg:order-1">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Tackling vehicle & phone theft with offline-ready hardware tracking, affordable security modules, and secure instant payments—leveraging Nigeria’s 11M vehicles and 200M mobile users.
                </p>

                {/* Countdown Grid */}
                {!timeLeft.launched ? (
                  <div className="flex gap-2 sm:gap-3 justify-start items-center my-6">
                    {renderTimerCard(timeLeft.days, "Days")}
                    {renderTimerCard(timeLeft.hours, "Hours")}
                    {renderTimerCard(timeLeft.minutes, "Mins")}
                    {renderTimerCard(timeLeft.seconds, "Secs")}
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-secondary animate-pulse my-6">
                    🚀 GTpay is officially Launched!
                  </div>
                )}

                {/* Waitlist and Scroll CTAs */}
                <div className="flex flex-wrap gap-4 justify-start pt-2">
                  <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="gap-2 gradient-primary shadow-glow text-base px-8 hover-scale">
                        Join the Wait List <ArrowRight className="w-5 h-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-card border-border">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-poppins font-bold">Join the Product Waitlist</DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                          Sign up to get early access, beta test invites, and release alerts for GTpay.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleWaitlistSubmit} className="space-y-5 pt-4">
                        <div className="space-y-2">
                          <Label htmlFor="waitlist-name">Full Name *</Label>
                          <Input
                            id="waitlist-name"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="bg-muted border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="waitlist-email">Email Address *</Label>
                          {/* Discount offer banner */}
                          <p className="text-sm text-primary mb-2">
                            🎉 First 10 sign‑ups get <strong>10% off</strong> ABROB-GTpay! Use code <code>ABROB10</code>.
                          </p>
                          <Input
                            id="waitlist-email"
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="bg-muted border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="waitlist-phone">Phone Number (Optional)</Label>
                          <Input
                            id="waitlist-phone"
                            type="tel"
                            placeholder="+234..."
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="bg-muted border-border"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/90 transition"
                        >
                          Join the Wait List
                        </button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" size="lg" className="text-base px-8" onClick={() => scrollToSection("gps-tracker")}>
                    Learn More <ChevronDown className="w-5 h-5 ml-1 animate-bounce" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Metrics Dashboard Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-20 pt-10 border-t border-border/60">
              <div className="p-6 rounded-2xl bg-card/30 border border-border/80 hover:border-primary/30 transition-colors">
                <span className="block text-4xl font-extrabold text-primary mb-2">11M+</span>
                <span className="text-sm text-muted-foreground font-medium">Vehicles in Nigeria targeted for anti-theft tracking</span>
              </div>
              <div className="p-6 rounded-2xl bg-card/30 border border-border/80 hover:border-primary/30 transition-colors">
                <span className="block text-4xl font-extrabold text-primary mb-2">200M+</span>
                <span className="text-sm text-muted-foreground font-medium">Mobile active subscribers across the telecom network</span>
              </div>
              <div className="p-6 rounded-2xl bg-card/30 border border-border/80 hover:border-primary/30 transition-colors">
                <span className="block text-4xl font-extrabold text-primary mb-2">99.9%</span>
                <span className="text-sm text-muted-foreground font-medium">Uptime capability with SMS offline backup networks</span>
              </div>
            </div>
          </section>

          {/* 2. Product: GTpay & GPS Tracker Section */}
          <section id="gps-tracker" className="py-24 border-t border-border/60 scroll-mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs text-secondary font-medium uppercase tracking-wider">
                  Hardware Security
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                  ABROB-GT Dual-Mode GPS Tracker
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The ABROB-GT is a proprietary security device engineered to combat vehicle and smartphone theft in environments with volatile cell service. It integrates online database logging with offline cellular channels.
                </p>

                {/* Features list using imported lucide icons */}
                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Anti-Jamming Panic Button</h4>
                      <p className="text-sm text-muted-foreground">Trigger instantaneous security dispatch notifications on-demand.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Dual-Mode Communication Channel</h4>
                      <p className="text-sm text-muted-foreground">Maintains data reporting via cellular SMS backup when standard internet data packages fail.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mt-1">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base">Universal Integration</h4>
                      <p className="text-sm text-muted-foreground">Synchronizes with maps, delivery terminals, and logistics dashboards via Firebase APIs.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Video Section */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border shadow-glow relative bg-card">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/aVy5JRKhshY"
                  title="GTpay Introduction Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>


          </section>

          {/* Bottom CTA Block */}
          <section className="my-20 p-12 rounded-3xl gradient-hero text-center border border-primary/20 shadow-glow animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-poppins font-black mb-6">
              Empowering Africa Through Hardware Innovation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We specialize in custom Embedded design, sensor telemetry, and IoT network integrations. Get in touch with us to design a custom engineering solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20have%20a%20custom%20IoT%20or%20embedded%20design%20project%20in%20mind.%20Let%27s%20discuss%20collaboration."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gradient-primary text-base px-8 flex items-center gap-2 hover-scale">
                  Start Custom Design Project
                </Button>
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Solutions;
