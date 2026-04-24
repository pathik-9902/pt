"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  ShieldCheck,
  Smile,
  Award,
  Handshake,
} from "lucide-react";

export default function WelcomeSection() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision" | "values">(
    "mission"
  );

  const tabs = {
    mission: {
      title: "Mission",
      icon: ShieldCheck,
      content:
        "We deliver top-quality investment castings that redefine precision, reliability, and performance — built through disciplined processes and full transparency.",
      features: [
        {
          icon: ShieldCheck,
          title: "Relentless Quality",
          desc: "Continuous process control so every casting meets specification.",
        },
        {
          icon: Users,
          title: "Customer-Led Delivery",
          desc: "Collaborative engineering and responsive planning.",
        },
      ],
    },
    vision: {
      title: "Vision",
      icon: Globe,
      content:
        "To transform the investment casting industry using advanced metallurgical, digital, and sustainable manufacturing technologies.",
      features: [
        {
          icon: Globe,
          title: "Technology-Forward",
          desc: "AI, IoT and modern metallurgy for deeper insight.",
        },
        {
          icon: Award,
          title: "Sustainable Growth",
          desc: "Environment-first processes without compromise.",
        },
      ],
    },
    values: {
      title: "Values",
      icon: Handshake,
      content:
        "Integrity, accountability, and customer-first thinking guide every decision — building partnerships that grow stronger over time.",
      features: [
        {
          icon: Handshake,
          title: "Partnership",
          desc: "Clear communication, reliability, and aligned goals.",
        },
        {
          icon: Smile,
          title: "Improvement",
          desc: "Investing in better processes and smarter technology.",
        },
      ],
    },
  };

  const aims = [
    "Empower engineers with casting expertise blended with modern technology.",
    "Become a trusted partner by converting complex ideas into manufacturable solutions.",
    "Advance eco-friendly alloys and reduce production impact.",
    "Use AI and IoT to strengthen quality control and efficiency.",
    "Encourage cross-disciplinary collaboration for next-gen components.",
    "Innovate continually to produce highly detailed and miniature castings.",
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <div className="glass-card px-6 py-2 rounded-full border border-[#1877F2]/20 text-xs font-black tracking-widest text-[#1877F2] uppercase">
               Precision since 2016
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-10 leading-none uppercase italic"
          >
            Shaping the <span className="metal-text">Future</span> of Casting
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-gray-300 font-medium italic opacity-90 leading-relaxed">
              Based in Rajkot, Gujarat, Padmaja Technocast LLP has shaped metal into precision components for over a decade.
            </p>
            <div className="h-px w-24 bg-[#1877F2] mx-auto" />
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">
              We support ferrous and non-ferrous alloys for valves, pumps, and engineering applications with dependable quality and controlled metallurgy.
            </p>
          </div>
        </div>

        {/* Dynamic Interaction Section */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Interactive Tabs */}
          <div className="lg:col-span-12">
            <div className="glass-card p-2 md:p-3 rounded-full flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
              {Object.keys(tabs).map((key) => {
                const tabKey = key as keyof typeof tabs;
                const active = activeTab === tabKey;
                return (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`flex-1 min-w-[120px] px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest transition-all duration-500 ${
                      active ? "bg-[#1877F2] text-white shadow-lg shadow-[#1877F2]/40" : "text-gray-500 hover:text-white"
                    }`}
                  >
                    {tabs[tabKey].title}
                  </button>
                );
              })}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="glass-card p-12 rounded-[48px] border-[#1877F2]/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#1877F2]/5 rounded-full pointer-events-none" />
                <h3 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#1877F2] rounded-2xl flex items-center justify-center">
                    {(() => {
                      const Icon = tabs[activeTab].icon;
                      return <Icon className="text-white w-6 h-6" />;
                    })()}
                  </div>
                  {tabs[activeTab].title}
                </h3>
                <p className="text-xl text-gray-300 font-medium leading-relaxed italic mb-8">
                  "{tabs[activeTab].content}"
                </p>
                <div className="h-1 w-20 bg-[#1877F2]" />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {tabs[activeTab].features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-[40px] hover:border-[#1877F2]/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#1877F2]/20 group-hover:border-[#1877F2]/40 transition-all">
                      <f.icon className="w-6 h-6 text-[#1877F2]" />
                    </div>
                    <h4 className="text-white font-black uppercase tracking-tight text-lg mb-3">{f.title}</h4>
                    <p className="text-gray-400 text-sm italic leading-relaxed">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom: Aims */}
          <div className="lg:col-span-12 mt-20">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 md:p-20 rounded-[60px] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full metal-texture opacity-5" />
              <h3 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter mb-16 text-center">
                Our Strategic <span className="metal-text">Objectives</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {aims.map((aim, i) => (
                  <div key={i} className="flex gap-6 items-start p-6 rounded-[32px] hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                    <div className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-black shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-300 font-medium text-base leading-relaxed italic">
                      {aim}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

