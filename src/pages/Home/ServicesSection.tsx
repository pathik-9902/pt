"use client";

import { motion } from "framer-motion";
import { Cpu, Settings, Truck } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Cpu,
    title: "Precision Engineering",
    description:
      "Advanced engineering solutions ensuring high-quality, accurate castings.",
  },
  {
    id: 2,
    icon: Settings,
    title: "Innovative Technology",
    description:
      "Utilizing the latest technology to produce efficient and reliable products.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Global Delivery",
    description:
      "Serving clients worldwide with timely and secure delivery solutions.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 overflow-hidden ">
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-24"
        >
          <div className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[#7FA1C3] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase">
             Expert Engineering
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            Core <span className="metal-text">Competencies</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90">
             Advanced metallurgical solutions ensuring high-quality, accurate castings for global industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-[48px] p-12 text-center group hover:border-[#7FA1C3]/30 transition-all duration-700 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#7FA1C3]/5  pointer-events-none" />
              
              <div className="w-20 h-20 rounded-3xl bg-[#7FA1C3]/10 flex items-center justify-center mx-auto mb-10 group-hover:bg-[#7FA1C3]/20 transition-all border border-[#7FA1C3]/10">
                <service.icon size={36} className="text-[#7FA1C3]" />
              </div>

              <span className="block text-[10px] font-black metal-text/60 tracking-widest uppercase mb-2">Service Line {service.id}</span>
              <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter mb-6 leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 font-medium italic leading-relaxed opacity-80">
                {service.description}
              </p>

              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                 <div className="h-1 w-12 bg-[#7FA1C3] rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

