import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "ABROB-GT", path: "/tracker" },
  { name: "Education", path: "/education" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => localStorage.getItem("abrob-theme") === "dark");
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("abrob-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => setIsDark((current) => !current);
  const themeLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#061b5c]/90">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-[76px] items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="h-12 w-12 overflow-hidden rounded-xl border border-slate-100 bg-white p-1 shadow-sm transition-transform group-hover:scale-105 dark:border-white/10 dark:bg-[#102b55]">
              <img src="/logo.png" alt="ABROB INDUSTRY logo" className="h-full w-full object-contain" />
            </div>
            <div className="leading-none">
              <span className="block font-poppins text-lg font-extrabold tracking-[.12em] text-[#061b5c] dark:text-white">ABROB</span>
              <span className="mt-1 block text-[10px] font-bold tracking-[.28em] text-[#0879c9] dark:text-[#63ddff]">INDUSTRY</span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${isActive(item.path) ? "bg-[#061b5c] text-white dark:bg-[#09bde8] dark:text-[#061b5c]" : "text-slate-600 hover:bg-slate-100 hover:text-[#061b5c] dark:text-blue-100/80 dark:hover:bg-white/10 dark:hover:text-white"}`}>
                {item.name}
              </Link>
            ))}
            <button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} className="ml-2 rounded-full border border-slate-200 bg-white p-2.5 text-[#061b5c] transition hover:border-[#09bde8] hover:bg-[#09bde8]/10 dark:border-white/15 dark:bg-white/10 dark:text-[#63ddff] dark:hover:bg-white/15">
              {isDark ? <Sun className="h-4 w-4 rotate-0 transition-transform duration-300" /> : <Moon className="h-4 w-4 rotate-180 transition-transform duration-300" />}
            </button>
            <Link to="/contact" className="ml-2">
              <Button className="rounded-full bg-[#09bde8] px-5 font-bold text-[#061b5c] shadow-[0_8px_20px_-10px_#09bde8] hover:bg-[#06abd4]">Let’s talk <ArrowUpRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} className="rounded-lg p-2 text-[#061b5c] transition hover:bg-slate-100 dark:text-[#63ddff] dark:hover:bg-white/10">
              {isDark ? <Sun className="h-5 w-5 rotate-0 transition-transform duration-300" /> : <Moon className="h-5 w-5 rotate-180 transition-transform duration-300" />}
            </button>
            <button type="button" className="rounded-lg p-2 text-[#061b5c] dark:text-white" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="border-t border-slate-100 py-4 dark:border-white/10 lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-semibold ${isActive(item.path) ? "bg-[#061b5c] text-white dark:bg-[#09bde8] dark:text-[#061b5c]" : "text-slate-700 hover:bg-slate-100 dark:text-blue-100 dark:hover:bg-white/10"}`}>{item.name}</Link>
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
