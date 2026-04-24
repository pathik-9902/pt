"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Factory, Award, Users, Linkedin } from "lucide-react";
import { useRef } from "react";

/* ================= PREMIUM IMAGE ================= */

function PremiumImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.img
      loading="lazy"
      decoding="async"
      initial={{ opacity: 0, scale: 1.05 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export default function About() {
  const container = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  /* ===== TIMELINE PROGRESS ===== */
  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothTimeline = useSpring(timelineProgress, {
    stiffness: 30, // Optimized for performance
    damping: 20,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothTimeline, [0, 1], ["0%", "100%"]);

  /* ===== DATA ===== */
  const team = [
    {
      name: "Mr. Hitesh Ranpariya",
      role: "Financial Director",
      image: "/assets/team/hitesh.webp",
      linkedin: "https://www.linkedin.com/in/hitesh-ranpariya-597427230/",
    },
    {
      name: "Mr. Krish Kotadiya",
      role: "Marketing Director",
      image: "/assets/team/krish.webp",
      linkedin: "https://www.linkedin.com/in/krish-kotadiya-7ab139283/",
    },
    {
      name: "Mr. Jashmin Chovatiya",
      role: "Operations Director",
      image: "/assets/team/jashmin.webp",
      linkedin: "https://www.linkedin.com/in/jashmin-chovatiya-872460380/",
    },
    {
      name: "Mr. Sanjay Kotadiya",
      role: "Advisory Director",
      image: "/assets/team/sanjay.webp",
      linkedin: "",
    },
    {
      name: "Mr. Pramod Kotadiya",
      role: "Advisory Director",
      image: "/assets/team/pramod.webp",
      linkedin: "",
    },
    {
      name: "Mr. Pankaj Paghdar",
      role: "Advisory Director",
      image: "/assets/team/pankaj.webp",
      linkedin: "",
    },
  ];

  const milestones = [
    { year: "Nov 2023", title: "Production Started", capacity: "6 MT / Month", description: "Commercial production commenced." },
    { year: "Feb 2024", title: "Capacity Expansion", capacity: "8 MT / Month", description: "Process optimisation increased throughput." },
    { year: "May 2024", title: "ISO Certification", capacity: "10 MT / Month", description: "Structured quality management enabled scaling." },
    { year: "Aug 2024", title: "Operational Optimisation", capacity: "12 MT / Month", description: "Cycle-time reduction improved productivity." },
    { year: "Nov 2024", title: "Advanced QC", capacity: "14 MT / Month", description: "Consistency improvements strengthened output." },
    { year: "Feb 2025", title: "Throughput Improvement", capacity: "16 MT / Month", description: "Continuous process refinement." },
    { year: "May 2025", title: "PED Certification", capacity: "19 MT / Month", description: "Export readiness enhanced." },
    { year: "Jun 2025", title: "Shot Blasting Machine", capacity: "20 MT / Month", description: "Finishing capacity increased." },
    { year: "Jul 2025", title: "Wax Press Expansion", capacity: "21 MT / Month", description: "Moulding throughput strengthened." },
    { year: "Aug 2025", title: "Crucible Furnace", capacity: "22 MT / Month", description: "Melting capacity scaled." },
    { year: "Nov 2025", title: "Infrastructure Scaling", capacity: "25 MT / Month", description: "Major equipment upgrades." },
    { year: "Feb 2026", title: "GE Audit", capacity: "28 MT / Month", description: "Global manufacturing benchmark achieved." },
  ];

  const expertise = [
    { icon: Factory, title: "Focused Facility", desc: "Infrastructure dedicated to investment casting." },
    { icon: Award, title: "Quality Discipline", desc: "Traceable and documented production systems." },
    { icon: Users, title: "Industrial Leadership", desc: "Hands-on metallurgical experience." },
    { icon: Award, title: "Customer Alignment", desc: "Predictable delivery planning & cost transparency." },
  ];

  return (
    <div ref={container} className="text-white overflow-x-hidden selection:bg-sky-500/30">

      {/* STORY */}
      <section className="py-28 relative">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-8 tracking-tight metal-text">
              Engineering-Driven Foundry
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Integrated wax, shell, melting and finishing processes ensure controlled metallurgical output.
            </p>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Continuous equipment upgrades enable progressive capacity scaling without quality compromise.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Long-term partnerships built through delivery reliability and transparent commercial execution.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-sky-500/5 rounded-[60px]" />
            <PremiumImage
              src="/assets/team/about.webp"
              alt="about"
              className="rounded-[40px] shadow-xl border border-white/10 object-cover aspect-square lg:aspect-auto"
            />
          </motion.div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card rounded-[32px] p-10 relative group"
            >
              <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/[0.02] transition-colors rounded-[32px]" />
              <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="text-sky-400 w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-3 tracking-wide">{item.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 tracking-tighter">
            Leadership
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-[40px] overflow-hidden group shadow-2xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.name} loading="lazy" decoding="async"                     className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-10 text-center relative">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{m.name}</h3>
                  <p className="text-[#39569C] font-medium text-sm mb-6 uppercase tracking-widest">{m.role}</p>

                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-white/50 hover:text-[#39569C] transition-colors text-sm font-medium"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      VIEW PROFILE
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section ref={timelineRef} className="py-40 relative">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-32 tracking-tighter">
            Our Evolution
          </h2>

          <div className="relative">
            {/* Desktop Timeline Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5" />
            
            <motion.div
              style={{ height: lineHeight }}
              className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-[1px] bg-gradient-to-b from-[#39569C] via-[#39569C]/50 to-transparent origin-top shadow-[0_0_15px_rgba(57,86,156,0.5)]"
            />

            <div className="space-y-24">
              {milestones.map((m, i) => {
                const isEven = i % 2 === 0;
                return (
                  <motion.div
                    key={m.title}
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  >
                    {/* Placeholder for alignment */}
                    <div className="hidden md:block w-1/2" />

                    {/* Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_20px_rgba(57,86,156,0.8)] border-4 border-black" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'}`}>
                      <div className="glass-card p-8 rounded-[30px] border border-white/5 hover:border-sky-500/20 transition-colors shadow-2xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-[#39569C]/10 text-[#39569C] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase">
                          {m.year}
                        </div>
                        <h3 className="text-xl font-bold mb-2">{m.title}</h3>
                        <div className="text-4xl font-black text-white/90 mb-4 tracking-tighter">
                          {m.capacity}
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}