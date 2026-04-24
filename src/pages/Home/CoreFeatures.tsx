"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Wrench, DollarSign, Smile } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <BadgeCheck size={36} className="text-[#39569C]" />,
    title: "Quality Assurance",
    description:
      "Ensuring top quality through strict compliance with international standards.",
  },
  {
    id: 2,
    icon: <Wrench size={36} className="text-[#39569C]" />,
    title: "Certified Mechanics",
    description:
      "Skilled and certified professionals delivering precision engineering.",
  },
  {
    id: 3,
    icon: <DollarSign size={36} className="text-[#39569C]" />,
    title: "Competitive Prices",
    description:
      "Offering cost-effective solutions without compromising quality.",
  },
  {
    id: 4,
    icon: <Smile size={36} className="text-[#39569C]" />,
    title: "Client Satisfaction",
    description:
      "Building trust and long-term relationships with our valued clients.",
  },
];

export default function CoreFeatures() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-16 uppercase italic leading-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Core <span className="metal-text">Disciplines</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-[32px] p-10 relative group transition-all duration-500 hover:shadow-[#39569C]/10"
            >
              <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 rounded-2xl bg-[#39569C]/10 flex items-center justify-center border border-[#39569C]/20 group-hover:bg-[#39569C]/20 transition-colors">
                   {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed italic opacity-80">{feature.description}</p>
              
              <div className="absolute inset-0 rounded-[32px] bg-[#39569C]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

