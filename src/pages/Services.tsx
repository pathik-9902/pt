"use client";

import { useState, memo } from "react";
import { Cpu, Settings, Truck, Layers, ChevronRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- DATA ---------------- */

const highlights = [
  {
    id: "p",
    icon: Cpu,
    tag: "DESIGN → CASTING → FINISH",
    title: "Precision as Standard",
    text:
      "Tolerances, surface finish and metallurgy are controlled so parts fit and perform with minimal rework.",
  },
  {
    id: "pr",
    icon: Settings,
    tag: "TOOLING × PROCESS",
    title: "Process-Led Execution",
    text:
      "Tooling, shell-building and melting are tuned to each part improving yield and repeatability.",
  },
  {
    id: "d",
    icon: Truck,
    tag: "PACKED & READY",
    title: "Delivery Mindset",
    text:
      "Castings supplied closer to fit-and-assemble condition simplifying machining and logistics.",
  },
];

const sectors = [
  {
    title: "General Engineering",
    sub: "Reliable parts for industrial systems",
    items: ["Machine brackets", "Gear housings", "Couplings & clamps"],
  },
  {
    title: "Power Generation & Control",
    sub: "Components that endure heat and duty cycles",
    items: ["Turbine parts", "Pump housings", "Switchgear components"],
  },
  {
    title: "Pumps & Valves",
    sub: "Flow-critical geometry and sealing surfaces",
    items: ["Valve bodies & seats", "Impellers", "Stems & bonnets"],
  },
  {
    title: "Automotive Components",
    sub: "Engineered to automotive expectations",
    items: ["Brackets", "Manifolds", "Steering & suspension parts"],
  },
  {
    title: "Aerospace & Defence",
    sub: "High-performance low-mass solutions",
    items: ["Structural mounts", "Fuel system parts", "Housings"],
  },
  {
    title: "Mining & Heavy Industry",
    sub: "Duty-rated wear-resistant",
    items: ["Wear parts", "Lifting & conveyor hardware"],
  },
];

const gallery = [
  {
    id: "aerospace",
    title: "Aerospace & Defence",
    color: "from-violet-500/20 to-violet-900/5",
    accent: "#a78bfa",
    images: [
      "/assets/services/cat/aerospace1.webp",
      "/assets/services/cat/aerospace2.webp",
      "/assets/services/cat/aerospace3.webp",
    ],
  },
  {
    id: "automotive",
    title: "Automotive Components",
    color: "from-orange-500/20 to-orange-900/5",
    accent: "#fb923c",
    images: [
      "/assets/services/cat/automotive1.webp",
      "/assets/services/cat/automotive2.webp",
      "/assets/services/cat/automotive3.webp",
      "/assets/services/cat/automotive4.webp",
    ],
  },
  {
    id: "fire",
    title: "Fire Safety Components",
    color: "from-red-500/20 to-red-900/5",
    accent: "#f87171",
    images: [
      "/assets/services/cat/fire1.webp",
      "/assets/services/cat/fire2.webp",
    ],
  },
  {
    id: "general",
    title: "General Engineering",
    color: "from-sky-500/20 to-sky-900/5",
    accent: "#38bdf8",
    images: [
      "/assets/services/cat/general1.webp",
      "/assets/services/cat/general2.webp",
      "/assets/services/cat/general3.webp",
    ],
  },
  {
    id: "hardware",
    title: "Industrial Hardware",
    color: "from-amber-500/20 to-amber-900/5",
    accent: "#fbbf24",
    images: ["/assets/services/cat/hardware.webp"],
  },
  {
    id: "pump",
    title: "Pumps & Valves",
    color: "from-emerald-500/20 to-emerald-900/5",
    accent: "#34d399",
    images: [
      "/assets/services/cat/pump_valve1.webp",
      "/assets/services/cat/pump_valve2.webp",
      "/assets/services/cat/pump_valve3.webp",
      "/assets/services/cat/pump_valve4.webp",
      "/assets/services/cat/pump_valve5.webp",
      "/assets/services/cat/pump_valve6.webp",
    ],
  },
];

/* ---------------- LIGHTBOX ---------------- */

function Lightbox({
  src,
  close,
}: {
  src: string | null;
  close: () => void;
}) {
  if (!src) return null;

  return (
    <div
      onClick={close}
      className="fixed inset-0 bg-black/90 z-[999] flex items-center justify-center p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <img src={src} className="w-full h-auto rounded-xl" />
        <button
          onClick={close}
          className="absolute top-3 right-3 bg-black/70 p-2 rounded-full"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}

/* ---------------- CATEGORY ---------------- */

const Category = memo(function Category({
  data,
  open,
}: {
  data: (typeof gallery)[0];
  open: (s: string) => void;
}) {
  return (
    <div className="relative">
      <div
        className="flex items-center gap-6 mb-8"
        style={{ color: data.accent }}
      >
        <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white shrink-0">
          {data.title}
        </h3>
        <div className="flex-1 h-px bg-white/5" />
        <div className="text-[10px] font-black tracking-widest uppercase opacity-40">Series: {data.id}</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {data.images.map((img) => (
          <motion.div
            key={img}
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => open(img)}
            className="aspect-square rounded-[24px] overflow-hidden glass-card cursor-pointer group bg-black/40 ring-1 ring-white/5 hover:ring-sky-500/30 transition-all duration-500"
          >
            <img
              src={img}
              loading="lazy"
              className="w-full h-full object-cover transition-opacity duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
});


/* ---------------- MAIN ---------------- */

export default function ServicesSection() {
  const [lb, setLb] = useState<string | null>(null);

  return (
    <section className="py-32 overflow-hidden">
      <Lightbox src={lb} close={() => setLb(null)} />

      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[#7FA1C3] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase"
          >
            <Layers size={14} />
            Full-Spectrum Casting Solutions
          </motion.div>

          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            Our <span className="metal-text">Expertise</span>
          </h2>

          <p className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90">
            Stable processes and clear communication ensure parts arrive ready for mission-critical assembly.
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {highlights.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[40px] p-10 hover:border-[#7FA1C3]/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7FA1C3]/10 flex items-center justify-center mb-6 border border-[#7FA1C3]/20 group-hover:bg-[#7FA1C3]/20 transition-all">
                <h.icon className="text-[#7FA1C3] w-7 h-7" />
              </div>
              <div className="text-[10px] font-black text-[#7FA1C3]/60 tracking-[0.2em] uppercase mb-2">
                {h.tag}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 italic leading-tight">
                {h.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed italic">{h.text}</p>
            </motion.div>
          ))}
        </div>

        {/* SECTORS + CAPABILITIES */}
        <div className="grid xl:grid-cols-12 gap-12 mb-32 items-start">
          <div className="xl:col-span-8">
            <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-10 pl-4 border-l-4 border-[#7FA1C3]">
              Sector Specializations
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="glass-card rounded-[32px] p-8 hover:bg-white/[0.05] transition-all"
                >
                  <div className="text-white font-black uppercase tracking-tight mb-1">{s.title}</div>
                  <div className="text-[#7FA1C3] text-[10px] font-bold tracking-widest uppercase mb-6 opacity-70">{s.sub}</div>

                  <ul className="space-y-3">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-3 items-center text-gray-400 text-sm font-medium italic">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7FA1C3]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="xl:col-span-4 lg:sticky lg:top-32">
            <div className="glass-card rounded-[48px] p-12 border-[#7FA1C3]/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#7FA1C3]/5  pointer-events-none" />
               <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-10">Technical Scope</h4>

                <div className="space-y-8 relative z-10">
                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Production Capacity</p>
                    <p className="text-white font-black text-2xl tracking-tighter italic">650 Tons / Annum</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Weight Precision</p>
                    <p className="text-white font-black text-2xl tracking-tighter italic">Up to 80kg</p>
                  </div>

                  <div>
                    <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">Material Standard</p>
                    <p className="text-[#7FA1C3] font-bold text-sm tracking-tight">ASTM, AISI, DIN, EN, GOST, GIS</p>
                  </div>
                  
                  <div className="pt-8 border-t border-white/5 font-medium italic text-gray-400">
                    <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Finishing Value</h4>
                    <ul className="text-sm space-y-2 opacity-80">
                      <li>• Passivation & pickling</li>
                      <li>• Electro polishing</li>
                      <li>• Zinc / Chrome finishes</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div className="space-y-24 mb-32">
          {gallery.map((g) => (
            <Category key={g.id} data={g} open={(s) => setLb(s)} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center py-20 relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-white/5" />
          <Link
            to="/contact"
            className="liquid-button relative z-10 glass-card bg-white text-black px-12 py-6 text-xl font-black uppercase tracking-[0.2em] hover:bg-[#7FA1C3] hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 max-w-sm mx-auto group"
          >
            Start Project
            <ChevronRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
}