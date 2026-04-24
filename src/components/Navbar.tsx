import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "/assets/logo.svg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Processes", href: "/Processes" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-card rounded-[32px] px-6 py-3 transition-all duration-500 hover:shadow-[#007AFF]/10">
        <div className="flex justify-between items-center">

          {/* Logo + Brand */}
          <Link
            to="/"
            className="flex items-center select-none group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-[#007AFF]/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img
                src={logo}
                alt="Padmaja Technocast Logo"
                className="h-10 w-10 object-contain relative z-10"
                draggable={false}
              />
            </div>

            <div className="ml-3 leading-tight">
              <span className="block text-base font-black tracking-tight text-white group-hover:text-[#007AFF] transition-colors">
                PADMAJA
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-gray-400 font-bold uppercase">
                TECHNOCAST
              </span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-2 bg-white/5 p-1 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative
                  ${isActive ? "text-white bg-[#007AFF] shadow-lg shadow-[#007AFF]/30" : "text-gray-400 hover:text-white hover:bg-white/10"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA / Contact */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="liquid-button bg-white text-black px-6 py-2.5 text-sm font-bold hover:bg-[#007AFF] hover:text-white transition-all shadow-xl active:scale-95"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
            isOpen ? "max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `p-4 rounded-2xl text-base font-bold transition-all
                  ${isActive ? "text-[#007AFF] bg-[#007AFF]/10" : "text-gray-300 hover:bg-white/5"}`
                }
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-4 p-4 rounded-[24px] bg-[#007AFF] text-white font-bold text-center shadow-lg active:scale-95 transition-transform"
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}