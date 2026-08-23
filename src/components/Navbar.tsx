import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-[76px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="h-12 w-12 overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
              <img src="/logo.png" alt="ABROB INDUSTRY logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="block font-poppins text-lg font-extrabold tracking-[.12em] text-[#061b5c]">ABROB</span>
              <span className="block mt-1 text-[10px] font-bold tracking-[.28em] text-[#0879c9]">INDUSTRY</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${isActive(item.path) ? "bg-[#061b5c] text-white" : "text-slate-600 hover:bg-slate-100 hover:text-[#061b5c]"}`}>
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="ml-3">
              <Button className="rounded-full bg-[#09bde8] px-5 font-bold text-[#061b5c] shadow-[0_8px_20px_-10px_#09bde8] hover:bg-[#06abd4]">Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>

          <button className="rounded-lg p-2 text-[#061b5c] lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {isOpen && (
          <div className="border-t border-slate-100 py-4 lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-semibold ${isActive(item.path) ? "bg-[#061b5c] text-white" : "text-slate-700 hover:bg-slate-100"}`}>{item.name}</Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2"><Button className="w-full rounded-xl bg-[#09bde8] font-bold text-[#061b5c]">Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" /></Button></Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
