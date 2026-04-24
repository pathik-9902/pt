"use client";

import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const leaders = [
    {
      role: "Marketing Director",
      name: "Krish Kotadiya",
      email: "sales@padmajatechnocast.com",
      blurb:
        "Leads global marketing strategy, brand development, and customer acquisition.",
    },
    {
      role: "Financial Director",
      name: "Hitesh Ranpariya",
      email: "info@padmajatechnocast.com",
      blurb:
        "Oversees financial planning, compliance, and corporate governance.",
    },
    {
      role: "Operations Director",
      name: "Jashmin Chovatiya",
      email: "info@padmajatechnocast.com",
      blurb:
        "Manages plant operations, production efficiency, and delivery execution.",
    },
    {
      role: "Manager – Marketing",
      name: "Rajesh Shendge",
      email: "marketing@padmajatechnocast.com",
      blurb:
        "Handles marketing communication, outreach initiatives, and customer engagement.",
    },
  ];

  const emails = [
    { label: "General Support", address: "info@padmajatechnocast.com" },
    { label: "Client Relations", address: "sales@padmajatechnocast.com" },
    {
      label: "Partnerships & Outreach",
      address: "marketing@padmajatechnocast.com",
    },
  ];

  const phones = [
    { label: "Front Desk", number: "+91 84015 48799" },
    { label: "Client Relations Desk", number: "+91 99981 40607" },
  ];

  function Avatar({ name }: { name: string }) {
    const [error, setError] = useState(false);
    const firstName = name.split(" ")[0].toLowerCase();
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .join("");

    return (
      <div className="mx-auto w-32 h-40 rounded-[32px] overflow-hidden bg-black ring-1 ring-white/10 mb-6 flex items-center justify-center shadow-2xl group-hover:ring-[white]/40 transition-all duration-700">
        {!error ? (
          <img
            src={`/assets/team/${firstName}.webp`}
            alt={name}
            className="w-full h-full object-cover object-top transition-all duration-700"
            onError={() => setError(true)}
          />
        ) : (
          <span className="text-3xl font-black text-[white] italic uppercase">
            {initials}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative py-32 overflow-hidden">
      
      {/* Header */}
      <section className="relative z-10 container mx-auto px-6 text-center mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[white] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase"
        >
           Direct Access
        </motion.div>

        <motion.h1
          className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Connect <span className="metal-text">With Us</span>
        </motion.h1>

        <motion.p
          className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Reach out to the leadership team or use our dedicated support channels for technical inquiries.
        </motion.p>
      </section>

      {/* Leadership */}
      <section className="relative z-10 container mx-auto px-6 mb-40">
        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-16 text-center">
          Our <span className="metal-text">Leadership</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-[48px] p-10 text-center hover:border-[white]/30 transition-all duration-700 group shadow-2xl"
            >
              <Avatar name={person.name} />

              <div className="mb-4">
                <span className="block text-[10px] font-black text-[white] uppercase tracking-widest mb-1 opacity-60 leading-none">
                  {person.role}
                </span>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">
                  {person.name}
                </h3>
              </div>

              {person.email && (
                <a
                  href={`mailto:${person.email}`}
                  className="text-[10px] font-bold text-gray-400 hover:text-[white] transition-colors uppercase tracking-tight block break-all"
                >
                  {person.email}
                </a>
              )}

              <p className="text-sm font-medium italic text-gray-500 mt-6 leading-relaxed opacity-80">{person.blurb}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Channels */}
      <section className="relative z-10 container mx-auto px-6 mb-40">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emails */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[60px] p-16 border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[white]/5 blur-[100px] pointer-events-none" />
            <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-10">
              Email <span className="metal-text">Channels</span>
            </h4>

            <div className="space-y-6 relative z-10 font-medium italic">
              {emails.map((e) => (
                <a
                  key={e.address}
                  href={`mailto:${e.address}`}
                  className="flex items-center gap-6 glass-card rounded-[32px] p-8 hover:bg-white/5 transition-all group border-white/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[white]/10 flex items-center justify-center text-[white] group-hover:bg-[white]/20 transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white uppercase italic tracking-tight">
                      {e.label}
                    </div>
                    <div className="text-sm text-gray-500 font-bold tracking-widest uppercase">{e.address}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Phones */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-[60px] p-16 border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-64 h-64 bg-[white]/5 blur-[100px] pointer-events-none" />
            <h4 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-10">
              Direct <span className="metal-text">Voice</span>
            </h4>

            <div className="space-y-6 relative z-10 font-medium italic">
              {phones.map((p) => (
                <a
                  key={p.number}
                  href={`tel:${p.number.replace(/\s+/g, "")}`}
                  className="flex items-center gap-6 glass-card rounded-[32px] p-8 hover:bg-white/5 transition-all group border-white/5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[white]/10 flex items-center justify-center text-[white] group-hover:bg-[white]/20 transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white uppercase italic tracking-tight">
                      {p.label}
                    </div>
                    <div className="text-sm text-gray-500 font-bold tracking-widest uppercase">{p.number}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="relative z-10 container mx-auto px-6 mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto glass-card rounded-[64px] p-16 md:p-24 border-white/5 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[white] to-transparent" />
          
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase tracking-tighter mb-16 text-center">
            Send <span className="metal-text">Message</span>
          </h2>

          <form
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              await fetch("https://formsubmit.co/ajax/sales@padmajatechnocast.com", {
                method: "POST",
                body: formData,
              });
              alert("✅ Message sent successfully!");
              e.currentTarget.reset();
            }}
            encType="multipart/form-data"
            className="space-y-10"
          >
            <input type="hidden" name="_subject" value="New Inquiry from Padmaja Website" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[white] pl-6">Full Name</label>
                <input name="name" type="text" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[white] outline-none transition-all font-medium italic" placeholder="Enter name" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[white] pl-6">Email Address</label>
                <input name="email" type="email" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[white] outline-none transition-all font-medium italic" placeholder="email@address.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[white] pl-6">Phone Number</label>
                <input name="phone" type="tel" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[white] outline-none transition-all font-medium italic" placeholder="+91" />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-[white] pl-6">Subject</label>
                <input name="subject" type="text" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[white] outline-none transition-all font-medium italic" placeholder="Project Inquiry" />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-[white] pl-6">Message</label>
              <textarea name="message" rows={6} required className="w-full rounded-[40px] px-8 py-6 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[white] outline-none transition-all font-medium italic resize-none" placeholder="How can we help?"></textarea>
            </div>

            <div className="pt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 rounded-full bg-[white] text-white font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-[white]/80 transition-all flex items-center justify-center gap-4 group"
              >
                Send Transmission
                <Send size={20} className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>

      {/* Map */}
      <section className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-black text-white italic uppercase tracking-tighter mb-16">
          Global <span className="metal-text">Presence</span>
        </h2>

        <div className="glass-card rounded-[60px] overflow-hidden p-3 border-white/5 shadow-2xl h-[500px]">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.3221119691707!2d70.77947429999999!3d22.037270499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583799509268af%3A0x4b3871838d78355c!2sPadmaja%20Technocast!5e0!3m2!1sen!2sin!4v1757633076102!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "50px" }}
            loading="lazy"
            className="invert brightness-75 opacity-60"
          />
        </div>
      </section>
    </div>
  );
}