import { Link } from "react-router-dom";
import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, Twitter, Youtube } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const Footer = () => (
  <footer className="bg-[#061b5c] text-white">
    <div className="container mx-auto px-4 py-14 sm:px-6">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3"><div className="h-12 w-12 rounded-xl bg-white p-1"><img src="/logo.png" alt="ABROB INDUSTRY logo" className="h-full w-full object-contain" /></div><div><p className="font-poppins text-lg font-extrabold tracking-[.12em]">ABROB</p><p className="text-[10px] font-bold tracking-[.28em] text-[#09bde8]">INDUSTRY</p></div></Link>
          <p className="mt-6 max-w-xs leading-7 text-blue-100/70">Engineering practical technology for people, organisations and communities.</p>
          <div className="mt-6 flex gap-3"><a aria-label="LinkedIn" href="https://www.linkedin.com/company/109802954/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2.5 text-blue-100 transition hover:border-[#09bde8] hover:text-[#09bde8]"><Linkedin className="h-4 w-4" /></a><a aria-label="Twitter" href="https://twitter.com/ABROB_INDUSTRY" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2.5 text-blue-100 transition hover:border-[#09bde8] hover:text-[#09bde8]"><Twitter className="h-4 w-4" /></a><a aria-label="YouTube" href="https://www.youtube.com/@ABROBINDUSTRY" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2.5 text-blue-100 transition hover:border-[#09bde8] hover:text-[#09bde8]"><Youtube className="h-4 w-4" /></a><a aria-label="Instagram" href="https://www.instagram.com/abrob_industry/" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2.5 text-blue-100 transition hover:border-[#09bde8] hover:text-[#09bde8]"><Instagram className="h-4 w-4" /></a></div>
        </div>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#09bde8]">Explore</p><div className="grid gap-3 text-sm text-blue-100/70"><Link to="/about" className="hover:text-white">About us</Link><Link to="/solutions" className="hover:text-white">Solutions</Link><Link to="/education" className="hover:text-white">Education</Link><Link to="/projects" className="hover:text-white">Projects</Link></div></div>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#09bde8]">Company</p><div className="grid gap-3 text-sm text-blue-100/70"><Link to="/blog" className="hover:text-white">Insights & news</Link><Link to="/contact" className="hover:text-white">Contact team</Link><a href="mailto:info@abrobindustry.com" className="hover:text-white">Partnerships</a></div></div>
        <div><p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-[#09bde8]">Get in touch</p><div className="grid gap-4 text-sm text-blue-100/70"><div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#09bde8]" /><span>Nigeria</span></div><a href="mailto:info@abrobindustry.com" className="flex items-center gap-3 hover:text-white"><Mail className="h-4 w-4 text-[#09bde8]" />info@abrobindustry.com</a><a href="https://wa.me/2347070879257" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><WhatsAppIcon className="h-4 w-4 text-[#09bde8]" />WhatsApp us <ArrowUpRight className="h-3.5 w-3.5" /></a></div></div>
      </div>
      <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/50 sm:flex-row"><p>© {new Date().getFullYear()} ABROB INDUSTRY. All rights reserved.</p><p>Robotics · IoT · STEAM · Innovation</p></div>
    </div>
  </footer>
);

export default Footer;
