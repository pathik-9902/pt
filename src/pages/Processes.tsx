// src/pages/Processes.tsx
"use client";

import type React from "react";
import * as FaIcons from "react-icons/fa";
import { motion } from "framer-motion";

type ProcessesStep = {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: React.ReactNode;
  image: string;
};

const ProcessesData: ProcessesStep[] = [
  {
    id: 1,
    title: "Tool Design & Build",
    icon: <FaIcons.FaTools />,
    description: (
      <>
        <p className="mb-3">
          After completing the solidification analysis, our engineers move into
          tool design and build — a critical phase that defines the accuracy and
          repeatability of every casting we produce.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            3D modelling and simulation of tool design for accuracy and
            efficiency.
          </li>
          <li>
            Precision CNC machining of mold components to achieve tight
            tolerances.
          </li>
          <li>
            Careful assembly, inspection and testing before the tool enters
            production.
          </li>
        </ul>
        <p className="mt-3">
          By investing time, technology and craftsmanship in this stage, we
          ensure every mold is built to deliver dimensional accuracy and
          consistent quality.
        </p>
      </>
    ),
    image: "/assets/processes/process1.webp",
  },
  {
    id: 2,
    title: "Injecting Wax Patterns",
    icon: <FaIcons.FaFire />,
    description: (
      <>
        <p className="mb-3">
          Molten wax is injected into our precisely engineered molds to create
          exact replicas of the final component — the wax patterns.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Controlled wax temperature and composition for stable flow.</li>
          <li>Optimized injection pressure and speed for clean filling.</li>
          <li>
            Carefully managed cooling to preserve shape and structural
            integrity.
          </li>
        </ul>
        <p className="mt-3">
          The precision of these patterns directly defines the quality of the
          final casting.
        </p>
      </>
    ),
    image: "/assets/processes/process2.webp",
  },
  {
    id: 3,
    title: "Assembly of Wax Patterns",
    icon: <FaIcons.FaCube />,
    description: (
      <>
        <p className="mb-3">
          Individual wax patterns are assembled into a tree structure where
          multiple components share a central sprue.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Multiple wax patterns are attached to a central wax sprue with
            precision.
          </li>
          <li>
            Balanced spacing and orientation support smooth metal flow and
            feeding.
          </li>
          <li>
            Gates and vents are added to control filling and reduce defects.
          </li>
        </ul>
        <p className="mt-3">
          This approach enables efficient multi-part casting without
          compromising quality.
        </p>
      </>
    ),
    image: "/assets/processes/process3.webp",
  },
  {
    id: 4,
    title: "Shell Building",
    icon: <FaIcons.FaHammer />,
    description: (
      <>
        <p className="mb-3">
          Shell building converts wax assemblies into strong, heat-resistant
          ceramic molds capable of withstanding molten metal.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Repeated dipping of wax assemblies into ceramic slurry and
            refractory sand.
          </li>
          <li>
            Controlled drying between coats to build shell thickness and
            strength.
          </li>
          <li>
            Carefully managed layering to capture fine details and complex
            geometries.
          </li>
        </ul>
        <p className="mt-3">
          The final ceramic shell provides the foundation for dimensional
          accuracy and surface quality.
        </p>
      </>
    ),
    image: "/assets/processes/process4.webp",
  },
  {
    id: 5,
    title: "De-Waxing",
    icon: <FaIcons.FaRecycle />,
    description: (
      <>
        <p className="mb-3">
          Once the shell is fully built, the wax is removed to create a precise
          hollow cavity ready for metal.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Ceramic-coated assemblies are placed in a high-temperature
            autoclave.
          </li>
          <li>
            Wax is rapidly melted and drained to form a clean internal cavity.
          </li>
          <li>
            Shells are inspected for cracks, distortion and surface integrity.
          </li>
        </ul>
        <p className="mt-3">
          De-waxing is tightly controlled to preserve the strength and detail of
          the ceramic mold.
        </p>
      </>
    ),
    image: "/assets/processes/process5.webp",
  },
  {
    id: 6,
    title: "Pouring of Molten Metal",
    icon: <FaIcons.FaTint />,
    description: (
      <>
        <p className="mb-3">
          Molten metal is poured into the preheated ceramic molds under strict
          process control.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Alloys are melted to precise temperature and chemistry
            specifications.
          </li>
          <li>
            Ceramic shells are preheated to avoid thermal shock and misruns.
          </li>
          <li>
            Pouring is monitored for temperature, flow rate and filling
            behaviour.
          </li>
        </ul>
        <p className="mt-3">
          As the metal cools and solidifies, it captures every feature of the
          mold, forming the final casting.
        </p>
      </>
    ),
    image: "/assets/processes/process6.webp",
  },
  {
    id: 7,
    title: "Heat Treatment",
    icon: <FaIcons.FaThermometerHalf />,
    description: (
      <>
        <p className="mb-3">
          Heat treatment enhances the mechanical properties, strength and
          durability of the castings.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Solution treatment to create a uniform, stable metallurgical
            structure.
          </li>
          <li>
            Quenching to lock in the desired microstructure and properties.
          </li>
          <li>
            Aging to optimize hardness, toughness and wear resistance.
          </li>
        </ul>
        <p className="mt-3">
          Carefully controlled cycles ensure each casting meets its performance
          requirements in service.
        </p>
      </>
    ),
    image: "/assets/processes/process7.webp",
  },
  {
    id: 8,
    title: "Finishing",
    icon: <FaIcons.FaCheckCircle />,
    description: (
      <>
        <p className="mb-3">
          The finishing stage refines each casting to its final functional and
          visual form.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Cutting, grinding and deburring to remove gates, risers and flash.
          </li>
          <li>
            Polishing and surface conditioning for the required finish.
          </li>
          <li>
            Coatings, treatments and anodizing (where applicable) for protection
            and aesthetics.
          </li>
        </ul>
        <p className="mt-3">
          Every part is finished to align with the customer’s fit, function and
          appearance expectations.
        </p>
      </>
    ),
    image: "/assets/processes/process8.webp",
  },
  {
    id: 9,
    title: "Machining",
    icon: <FaIcons.FaCogs />,
    description: (
      <>
        <p className="mb-3">
          When required, castings are machined to achieve exact dimensions and
          complex functional features.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Advanced CNC machining supported by CAD/CAM systems.</li>
          <li>
            Creation of threads, slots, precise bores and critical mating
            surfaces.
          </li>
          <li>
            Dimensional consistency maintained across small batches and
            large-volume runs.
          </li>
        </ul>
        <p className="mt-3">
          This stage ensures components integrate seamlessly into assemblies and
          final products.
        </p>
      </>
    ),
    image: "/assets/processes/process9.webp",
  },
  {
    id: 10,
    title: "Inspection",
    icon: <FaIcons.FaClipboardCheck />,
    description: (
      <>
        <p className="mb-3">
          Quality checks are embedded throughout production, with a comprehensive
          final inspection before dispatch.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>Visual inspection for surface condition and obvious defects.</li>
          <li>
            Dimensional measurement using calibrated instruments and gauges.
          </li>
          <li>
            Functional checks and, where required, non-destructive testing
            (NDT).
          </li>
        </ul>
        <p className="mt-3">
          Detailed records support full traceability and continuous improvement.
        </p>
      </>
    ),
    image: "/assets/processes/process10.webp",
  },
  {
    id: 11,
    title: "Packing & Dispatch",
    icon: <FaIcons.FaBoxOpen />,
    description: (
      <>
        <p className="mb-3">
          The final step ensures every component reaches the customer safely and
          ready for use.
        </p>
        <ul className="list-disc list-inside space-y-1 text-gray-300/90">
          <li>
            Custom packaging designed to protect parts from transit damage.
          </li>
          <li>
            Use of eco-friendly materials wherever practical and feasible.
          </li>
          <li>
            Clear labelling, documentation and logistics coordination for on-time
            delivery.
          </li>
        </ul>
        <p className="mt-3">
          From our foundry to your facility, products are handled with the same
          care we apply during manufacturing.
        </p>
      </>
    ),
    image: "/assets/processes/process11.webp",
  },
];

export default function ProcessesPage(): React.ReactElement {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <div className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[#39569C] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase">
             Mastering Metallurgy
          </div>

          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            Process <span className="metal-text">Integrity</span>
          </h1>

          <p className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90">
            Every component passes through a defined, tightly controlled sequence of steps to ensure consistent quality and performance.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center vertical timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/5" />
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#39569C] via-[#39569C]/50 to-transparent shadow-[0_0_15px_rgba(57,86,156,0.3)]" />

          <div className="space-y-32">
            {ProcessesData.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.article
                  key={step.id}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Connector dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full items-center justify-center z-20 shadow-[0_0_20px_rgba(255,255,255,1)] border-4 border-black" />

                  {/* Image card */}
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    className={`w-full lg:w-1/2 rounded-[40px] overflow-hidden glass-card shadow-2xl relative group ${
                      isEven ? "lg:mr-auto" : "lg:ml-auto"
                    }`}
                  >
                    <div className="relative aspect-video">
                      <img
                        src={step.image}
                        alt={step.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      
                      {/* Floating title bar */}
                      <div className="absolute top-6 left-6">
                        <div className="flex items-center gap-4 bg-black/60 border border-white/20 px-6 py-3 rounded-full backdrop-blur-xl">
                          <div className="text-[#39569C] text-2xl h-10 w-10 flex items-center justify-center bg-white/5 rounded-xl">
                            {step.icon}
                          </div>
                          <div>
                            <span className="block text-[8px] font-black uppercase tracking-[0.3em] text-[#39569C] opacity-60">Step {step.id}</span>
                            <span className="block text-sm font-black text-white uppercase italic tracking-tight">{step.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text card */}
                  <motion.div
                    className={`w-full lg:w-1/2 p-12 rounded-[48px] glass-card relative overflow-hidden group ${
                      isEven ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#39569C]/5  pointer-events-none" />
                    <div className="lg:hidden flex items-center gap-4 mb-8">
                       <div className="text-[#39569C] text-xl h-10 w-10 flex items-center justify-center bg-white/5 rounded-xl">
                         {step.icon}
                       </div>
                       <h2 className="text-2xl font-black text-white uppercase italic tracking-tight">{step.title}</h2>
                    </div>

                    <div className="text-gray-400 text-lg font-medium italic leading-relaxed opacity-90 prose prose-invert">
                      {step.description}
                    </div>
                   
                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-40">
                       <span className="text-[10px] font-black uppercase tracking-widest leading-none">Process Phase {step.id}</span>
                       <div className="h-px flex-1 mx-4 bg-white/5" />
                       <div className="w-2 h-2 rounded-full bg-[#39569C]" />
                    </div>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

