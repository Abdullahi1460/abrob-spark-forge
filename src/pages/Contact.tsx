import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { supabase } from "@/lib/supabase";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
    if (!inquiryType) {
      const msg = "Please select an inquiry type.";
      setErrorMsg(msg);
      toast.error(msg);
      setLoading(false);
      return;
    }
    const formData = {
      firstName: e.target.firstName?.value.trim(),
      lastName: e.target.lastName?.value.trim(),
      email: e.target.email?.value.trim(),
      phone: e.target.phone?.value.trim(),
      inquiryType,
      message: e.target.message?.value.trim(),
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
      setSuccessMsg("✅ Message sent! We'll be in touch soon.");
      toast.success("Message sent successfully!");
      e.target.reset();
      setInquiryType("");
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
          <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a question or want to work together? We'd love to hear from you.
          </p>
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
          <Card className="lg:col-span-2 shadow-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+234 123 456 7890" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select value={inquiryType} onValueChange={setInquiryType} required>
                    <SelectTrigger id="inquiryType">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="products">Product Inquiry</SelectItem>
                      <SelectItem value="education">Education Programs</SelectItem>
                      <SelectItem value="custom">Custom Project</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project or inquiry..." 
                    rows={6}
                    required 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary" disabled={loading}>
                  Send Message
                </Button>
              </form>
{errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
{successMsg && <p className="text-green-500 mt-2">{successMsg}</p>}
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <section className="mt-20 animate-fade-in">
          <Card className="shadow-card overflow-hidden">
            <div className="h-96 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder - Add Google Maps embed here</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;
