"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Wrench } from "lucide-react";

const reasons = [
  { id: 1, icon: <Wrench className="w-6 h-6 text-[#007AFF]" />, text: "State-of-the-art in-house manufacturing" },
  { id: 2, icon: <Award className="w-6 h-6 text-[#007AFF]" />, text: "ISO 9001:2015 certified quality systems" },
  { id: 3, icon: <ShieldCheck className="w-6 h-6 text-[#007AFF]" />, text: "Metallurgically & dimensionally precise castings" },
  { id: 4, icon: <Users className="w-6 h-6 text-[#007AFF]" />, text: "Experienced engineers and skilled workforce" },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-black tracking-[0.2em] text-[#007AFF] uppercase backdrop-blur-xl mb-10">
            Professional Partner
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic leading-none">
            Why <span className="metal-text">Choose</span> Us
          </h2>

          <p className="text-xl text-gray-300 font-medium italic mb-12 opacity-90 leading-relaxed border-l-4 border-[#007AFF] pl-8">
            Excellence in precision investment casting through advanced engineering and metallurgical discipline.
          </p>

          <ul className="grid sm:grid-cols-2 gap-6 mb-12">
            {reasons.map((reason, index) => (
              <motion.li
                key={reason.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card flex items-center gap-5 p-6 rounded-[32px] hover:border-[#007AFF]/30 transition-all group shadow-xl"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#007AFF]/10 flex items-center justify-center group-hover:bg-[#007AFF]/20 transition-colors shadow-inner">
                  {reason.icon}
                </div>
                <span className="text-white font-bold text-sm leading-tight tracking-tight">{reason.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Content - Visuals */}
        <div className="grid grid-cols-2 gap-6 relative">
          <div className="absolute -inset-10 bg-[#007AFF]/5 blur-[100px] rounded-full pointer-events-none" />
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="space-y-6"
          >
            <img
              src={`/assets/whychooseus/img1.webp`}
              alt="Precision Casting"
              className="rounded-[40px] shadow-2xl border border-white/5 object-cover h-64 md:h-96 w-full transition-all duration-700 hover:scale-105"
            />
          </motion.div>
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="pt-12 space-y-6"
          >
            <img
              src={`/assets/whychooseus/img2.webp`}
              alt="Advanced Plant"
              className="rounded-[40px] shadow-2xl border border-white/5 object-cover h-64 md:h-96 w-full transition-all duration-700 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      {/* Additional Details Panel */}
      <div className="relative z-10 container mx-auto px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-12 md:p-20 rounded-[60px] shadow-2xl border-white/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#007AFF]/5 blur-[120px] pointer-events-none" />
          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Manufacturing Capacity</h4>
                <p className="text-gray-400 font-medium leading-relaxed italic opacity-80">
                  We manufacture a broad range of valve components — from intricate precision geometries to robust, heavy-duty parts. Our capabilities include metallurgical testing and precision machining.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Rigorous Testing</h4>
                <p className="text-gray-400 font-medium leading-relaxed italic opacity-80">
                  Every component undergoes rigorous testing: hardness, impact testing, and chemical analysis. Only defect-free parts leave our facility.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Specialized Alloys</h4>
                <p className="text-gray-400 font-medium leading-relaxed italic opacity-80">
                  We work with specialized alloys sourced to global standards. Clients can specify materials or rely on our metallurgical expertise.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Partnership Edge</h4>
                <p className="text-gray-400 font-medium leading-relaxed italic opacity-80">
                  Partnering with us delivers competitive pricing and responsive engineering support. We align our manufacturing to your critical schedules.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

