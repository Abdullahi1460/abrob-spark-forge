import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

type SubscribeStatus = 'idle' | 'loading' | 'success' | 'duplicate' | 'error';

const Footer = () => {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const email = emailInput.value.trim();

    // Client-side validation
    if (!email) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email, source: 'website_footer' });

      if (error) {
        // Supabase unique constraint violation code
        if (error.code === '23505') {
          setStatus('duplicate');
        } else {
          console.error('Supabase error:', error);
          setStatus('error');
          setErrorMessage('Something went wrong. Please try again later.');
        }
        return;
      }

      setStatus('success');
      formRef.current?.reset();
    } catch (err) {
      console.error('Unexpected error:', err);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">A</span>
              </div>
              <span className="text-xl font-poppins font-bold">ABROB INDUSTRY</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Innovating the Future of Robotics, IoT &amp; STEAM Education
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/109802954/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/ABROB_INDUSTRY" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@ABROBINDUSTRY" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/abrob_industry/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/2347070879257" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link to="/education" className="text-sm text-muted-foreground hover:text-primary transition-colors">Education</Link></li>
              <li><Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Nigeria</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@abrobindustry.com" className="hover:text-primary transition-colors">info@abrobindustry.com</a>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/" className="hover:text-primary transition-colors">WhatsApp</a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news and updates from ABROB INDUSTRY
            </p>
            <form ref={formRef} onSubmit={handleSubscribe} noValidate>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  name="email"
                  id="footer-newsletter-email"
                  placeholder="Your email"
                  className="flex-1"
                  disabled={status === 'loading'}
                  aria-label="Email address for newsletter"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="gradient-primary"
                  disabled={status === 'loading'}
                >
                  {status === 'loading'
                    ? <Loader2 className="h-4 w-4 animate-spin" />
                    : 'Subscribe'
                  }
                </Button>
              </div>

              {/* Feedback messages */}
              {status === 'success' && (
                <p className="mt-2 flex items-center gap-1 text-xs text-green-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  You're subscribed! Thank you.
                </p>
              )}
              {status === 'duplicate' && (
                <p className="mt-2 flex items-center gap-1 text-xs text-yellow-400">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  You're already subscribed!
                </p>
              )}
              {status === 'error' && (
                <p className="mt-2 flex items-center gap-1 text-xs text-red-400">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ABROB INDUSTRY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

