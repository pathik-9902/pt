import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/assets/logo.svg"; // adjust if needed

export default function Footer() {
  return (
    <footer className="relative bg-black/40 border-t border-white/5 py-24 ">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className="w-14 h-14" />
              <h2 className="text-2xl font-black text-white italic uppercase tracking-tighter leading-none">
                Padmaja <span className="white">Technocast</span>
              </h2>
            </div>
            <p className="text-gray-400 font-medium italic leading-relaxed opacity-80">
              Precision casting solutions delivering unmatched metallurgical integrity across the globe since 2016.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h3 className="text-xs font-black white uppercase tracking-[0.3em]">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Processes", href: "/processes" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white font-black uppercase italic tracking-tight hover:white transition-colors duration-300 text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h3 className="text-xs font-black white uppercase tracking-[0.3em]">Direct Support</h3>
            <div className="space-y-6">
              <a href="mailto:info@padmajatechnocast.com" className="block group">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Email</p>
                <p className="text-white font-bold group-hover:white transition-colors">info@padmajatechnocast.com</p>
              </a>
              <a href="tel:+919998140607" className="block group">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                <p className="text-white font-bold group-hover:white transition-colors">+91 99981 40607</p>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-8">
            <h3 className="text-xs font-black white uppercase tracking-[0.3em]">Location</h3>
            <address className="not-italic text-sm font-medium italic text-gray-400 leading-relaxed space-y-2 opacity-80">
              <p className="text-white font-black uppercase not-italic tracking-tight">Plant & Headquarters</p>
              <p>Avadh Industrial Hub, NH-27</p>
              <p>Biliyala, Rajkot, Gujarat</p>
              <p className="text-[10px] font-black tracking-widest white/40">INDIA - 360311</p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Padmaja Technocast LLP. Precision defined.
          </div>
          
          <div className="flex gap-6">
            {[Facebook, Twitter, Linkedin, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-12 h-12 glass-card rounded-full flex items-center justify-center text-white hover:bg-[#39569C] hover:text-white transition-all shadow-xl"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

