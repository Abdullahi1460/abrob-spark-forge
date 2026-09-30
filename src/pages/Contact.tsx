import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight, CalendarDays, CheckCircle2, Mail, MessageCircle, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [searchParams] = useSearchParams();
  const isConsultation = searchParams.get("intent") === "consultation";
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [inquiryType, setInquiryType] = useState(isConsultation ? "consultation" : "");
  const consultationWhatsAppUrl = "https://wa.me/2347070879257?text=Hello%20ABROB%20INDUSTRY!%20I%20would%20like%20to%20book%20a%20consultation.";

  useEffect(() => {
    if (isConsultation) setInquiryType("consultation");
  }, [isConsultation]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    const form = e.currentTarget;
    const values = new FormData(form);
    if (!inquiryType) {
      const msg = "Please select an inquiry type.";
      setErrorMsg(msg);
      toast.error(msg);
      setLoading(false);
      return;
    }
    const fullName = String(values.get("fullName") || "").trim();
    const [firstName, ...lastNameParts] = fullName.split(/\s+/);
    const preferredDate = String(values.get("preferredDate") || "").trim();
    const preferredTime = String(values.get("preferredTime") || "").trim();
    const contactPreference = String(values.get("contactPreference") || "").trim();
    const message = String(values.get("message") || "").trim();
    const formData = {
      firstName,
      lastName: lastNameParts.join(" "),
      email: String(values.get("email") || "").trim(),
      phone: String(values.get("phone") || "").trim(),
      inquiryType,
      message: [
        message,
        inquiryType === "consultation" && preferredDate ? `Preferred date: ${preferredDate}` : "",
        inquiryType === "consultation" && preferredTime ? `Preferred time: ${preferredTime}` : "",
        inquiryType === "consultation" && contactPreference ? `Preferred contact method: ${contactPreference}` : "",
      ].filter(Boolean).join("\n\n"),
    };
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        inquiry_type: formData.inquiryType,
        message: formData.message,
      });
      if (error) throw error;
      const successMessage = inquiryType === "consultation" ? "Consultation request received. We will confirm a suitable time shortly." : "Message sent! We'll be in touch soon.";
      setSuccessMsg(successMessage);
      toast.success(successMessage);
      e.target.reset();
      setInquiryType(isConsultation ? "consultation" : "");
    } catch (err) {
      const msg = err?.message || "Something went wrong.";
      setErrorMsg(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-primary">{isConsultation ? "Plan the next step" : "Start a conversation"}</p>
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">{isConsultation ? "Book a Consultation" : "Get in Touch"}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {isConsultation ? "Tell us what you are working on and a preferred time. We will confirm the best available consultation slot by email or WhatsApp." : "Have a question or want to work together? We'd love to hear from you."}
          </p>
          {isConsultation && <div className="mx-auto mt-8 grid max-w-3xl gap-3 text-left sm:grid-cols-3"><div className="rounded-2xl bg-primary/5 p-4"><CalendarDays className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-semibold">Choose a preferred time</p></div><div className="rounded-2xl bg-primary/5 p-4"><CheckCircle2 className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-semibold">Share your project goal</p></div><div className="rounded-2xl bg-primary/5 p-4"><MessageCircle className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-semibold">Get a confirmed response</p></div></div>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-card animate-fade-in">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:info@abrobindustry.com" className="text-sm text-muted-foreground hover:text-primary">
                      info@abrobindustry.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="https://wa.me/2347070879257" className="text-sm text-muted-foreground hover:text-primary">
                      WhatsApp / Call
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15 bg-primary/5 shadow-card animate-fade-in" style={{ animationDelay: '0.05s' }}>
              <CardHeader>
                <CardTitle>Prefer WhatsApp?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">Send a quick message if you would rather start your consultation on WhatsApp.</p>
                <Button className="w-full" asChild><a href={consultationWhatsAppUrl} target="_blank" rel="noreferrer">Book on WhatsApp <ArrowUpRight className="ml-2 h-4 w-4" /></a></Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/company/109802954/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://twitter.com/ABROB_INDUSTRY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.youtube.com/@ABROBINDUSTRY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/abrob_industry/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card id="consultation" className="scroll-mt-24 lg:col-span-2 shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">{isConsultation ? "Request your consultation" : "Send us a Message"}</CardTitle>
              <p className="text-sm leading-relaxed text-muted-foreground">{isConsultation ? "This is a consultation request, not an instant booking. We will confirm availability before scheduling your session." : "Share a few details and the ABROB team will get back to you."}</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input id="fullName" name="fullName" autoComplete="name" placeholder="Your name" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="+234 123 456 7890" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType} required>
                    <SelectTrigger id="inquiryType">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultation">Book a Consultation</SelectItem>
                      <SelectItem value="products">Product Inquiry</SelectItem>
                      <SelectItem value="education">Education Programs</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {inquiryType === "consultation" && <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5"><div className="mb-4 flex items-center gap-3"><CalendarDays className="h-5 w-5 text-primary" /><div><h3 className="font-semibold">Your preferred consultation time</h3><p className="text-sm text-muted-foreground">Optional - we will confirm availability before booking.</p></div></div><div className="grid gap-4 md:grid-cols-3"><div className="space-y-2"><Label htmlFor="preferredDate">Preferred date</Label><Input id="preferredDate" name="preferredDate" type="date" /></div><div className="space-y-2"><Label htmlFor="preferredTime">Preferred time</Label><Input id="preferredTime" name="preferredTime" type="time" /></div><div className="space-y-2"><Label htmlFor="contactPreference">Best way to reach you</Label><Select name="contactPreference"><SelectTrigger id="contactPreference"><SelectValue placeholder="Choose one" /></SelectTrigger><SelectContent><SelectItem value="WhatsApp">WhatsApp</SelectItem><SelectItem value="Phone call">Phone call</SelectItem><SelectItem value="Email">Email</SelectItem></SelectContent></Select></div></div></div>}

                <div className="space-y-2">
                  <Label htmlFor="message">{inquiryType === "consultation" ? "What would you like to discuss? *" : "Message *"}</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder={inquiryType === "consultation" ? "Tell us about the challenge, project, or opportunity you want to explore..." : "Tell us about your project or inquiry..."}
                    rows={5}
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary" disabled={loading}>
                  {loading ? "Sending..." : inquiryType === "consultation" ? "Request a Consultation" : "Send Message"}
                </Button>
                <Button type="button" variant="outline" className="w-full" asChild><a href={consultationWhatsAppUrl} target="_blank" rel="noreferrer">Or continue on WhatsApp <MessageCircle className="ml-2 h-4 w-4" /></a></Button>
              </form>
{errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
{successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}
            </CardContent>
          </Card>
        </div>

        {/* Location Map */}
        <section className="mt-20 animate-fade-in" aria-labelledby="location-heading">
          <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[.18em] text-primary">Visit ABROB INDUSTRY</p>
              <h2 id="location-heading" className="text-3xl font-bold md:text-4xl">Find us at TIC Kano</h2>
              <p className="mt-2 text-muted-foreground">Guda Abdullahi Road, Kano, Nigeria</p>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=TIC+Kano%2C+Guda+Abdullahi+Road%2C+Kano%2C+Nigeria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-primary px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Get Directions
            </a>
          </div>
          <Card className="overflow-hidden shadow-card">
            <div className="relative h-96 bg-muted">
              <iframe
                title="ABROB INDUSTRY location at TIC Kano, Guda Abdullahi Road"
                src="https://www.google.com/maps?q=TIC%20Kano%2C%20Guda%20Abdullahi%20Road%2C%20Kano%2C%20Nigeria&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
