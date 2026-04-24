"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";

type Industry = {
  id: number;
  title: string;
  category: string;
  materials: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    id: 1,
    title: "Defence Products",
    category: "Defence Investment Casting Manufacture",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "Our defence components are designed with high precision and manufactured to meet the exact requirements of the defence industry.",
    image: "/assets//industries/industries1.webp",
  },
  {
    id: 2,
    title: "Metro/Railway Products",
    category: "Railway Products Casting Manufacturer",
    materials: "SS304, SS316, EN Series, Copper Alloys",
    description:
      "We offer a wide range of product castings in Carbon Steel, Nickel Based Alloy, Stainless Steel, AAR M201 Grade E for Indian Railways.",
    image: "/assets//industries/industries2.webp",
  },
  {
    id: 3,
    title: "Automotive Industry",
    category: "Automobile Investment Casting Supplier",
    materials: "SS304, SS316, MS, EN Series",
    description:
      "12+ years of experience makes us a leading supplier of investment casting in the automobile sector with precision manufacturing facilities.",
    image: "/assets//industries/industries3.webp",
  },
  {
    id: 4,
    title: "Medical Implants",
    category: "Medical Equipments Casting Supplier",
    materials: "SS304, SS316, SS316L, Other Special Grades",
    description:
      "We manufacture and supply orthopedic implants and instruments casting as per customer specifications.",
    image: "/assets//industries/industries4.webp",
  },
  {
    id: 5,
    title: "Oil & Gas Valves",
    category: "Valves Casting through Investment Casting Process",
    materials: "SS304, SS316, SS316L",
    description:
      "We design and manufacture a wide range of valves like Gate, Ball, Check, and Butterfly valves for Oil & Gas applications.",
    image: "/assets//industries/industries5.webp",
  },
  {
    id: 6,
    title: "Camlock & Pipe Fittings",
    category: "Camlock Coupling Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "Camlock couplings ensure quick connection/disconnection of hoses for water, air, gas, and oil applications.",
    image: "/assets//industries/industries6.webp",
  },
  {
    id: 7,
    title: "Boating & Marine Industry",
    category: "Marine Casting Supplier",
    materials: "SS304, SS316, Other Steel Alloys",
    description:
      "We manufacture anchors, rod holders, deck hinges, turnbuckles, and more in SS304, SS316, and other alloys.",
    image: "/assets//industries/industries7.webp",
  },
  {
    id: 8,
    title: "Door & Glass Hardware",
    category: "Hardware Casting Supplier",
    materials: "SS304, SS316, SS410, MS, Copper Alloys",
    description:
      "We supply spider fittings, railing fittings, door handles, knockers, and more in multiple alloys.",
    image: "/assets//industries/industries8.webp",
  },
  {
    id: 9,
    title: "Fire Fighting Products",
    category: "Fire Fighting Casting Supplier",
    materials: "SS304, SS316, Copper Alloys",
    description:
      "We manufacture hydrant valves, branch pipe nozzles, and other fire safety components.",
    image: "/assets//industries/industries9.webp",
  },
];


export default function IndustriesSection(): JSX.Element {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-bold tracking-[0.2em] text-[#39569C] uppercase backdrop-blur-xl mb-8">
            <span className="h-2 w-2 rounded-full bg-[#39569C] animate-ping" />
            Global Industry Support
          </div>

          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase italic leading-tight">
            Industries <span className="metal-text">We Serve</span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 font-medium leading-relaxed italic">
            "Precision investment castings for mission-critical applications where failure is not an option."
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass-card rounded-[40px] overflow-hidden flex flex-col shadow-2xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-8 right-8">
                   <p className="text-[#39569C] text-[10px] font-black tracking-widest uppercase mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-black text-white tracking-tight uppercase italic whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pb-10 flex flex-col flex-1 relative">
                <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
                   {item.description}
                </p>

                {/* Materials */}
                <div className="mt-auto pt-6 border-t border-white/5">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Key Materials</p>
                  <div className="flex flex-wrap gap-2">
                    {item.materials.split(",").slice(0, 3).map((mat) => (
                      <span
                        key={mat.trim()}
                        className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-[#39569C]/70"
                      >
                        {mat.trim()}
                      </span>
                    ))}
                    {item.materials.split(",").length > 3 && (
                      <span className="text-[10px] font-bold text-gray-500 flex items-center px-1">
                        +{item.materials.split(",").length - 3} MORE
                      </span>
                    )}
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-[#39569C]/5  rounded-full group-hover:bg-[#39569C]/10 transition-colors pointer-events-none" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

