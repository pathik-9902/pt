"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState, useRef } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "" });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      const fd = new FormData(formRef.current);

      const response = await fetch("https://formsubmit.co/ajax/mytechid.999@gmail.com", {
        method: "POST",
        body: fd,
      });

      if (!response.ok) throw new Error(await response.text());
      alert("✅ Your message has been sent!");

      setForm({ name: "", email: "", phone: "", address: "" });
      formRef.current.reset();
    } catch (error) {
      console.error("FormSubmit Error:", error);
      alert("❌ Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[#7FA1C3] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase">
             Get In Touch
          </div>
          <h2 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            Start A <span className="metal-text">Conversation</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90">
             Whether you have a technical query or a global project, our specialists are ready to respond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ---------- CONTACT FORM ---------- */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card rounded-[60px] p-12 md:p-16 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#7FA1C3] to-transparent opacity-30" />
            
            <input type="hidden" name="_subject" value="New Inquiry from Padmaja Website" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#7FA1C3] pl-6">Full Name</label>
                    <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Enter name" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#7FA1C3] outline-none transition-all font-medium italic" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#7FA1C3] pl-6">Email Address</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="email@address.com" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#7FA1C3] outline-none transition-all font-medium italic" />
                  </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#7FA1C3] pl-6">Phone</label>
                    <input name="phone" type="text" value={form.phone} onChange={handleChange} placeholder="+91" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#7FA1C3] outline-none transition-all font-medium italic" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#7FA1C3] pl-6">Location</label>
                    <input name="address" type="text" value={form.address} onChange={handleChange} placeholder="City, Country" required className="w-full rounded-full px-8 py-5 bg-white/5 border border-white/10 text-white placeholder-white/20 focus:border-[#7FA1C3] outline-none transition-all font-medium italic" />
                  </div>
               </div>

               <div className="pt-6">
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-6 font-black uppercase tracking-[0.3em] text-white bg-[#7FA1C3] hover:bg-[#7FA1C3]/80 shadow-2xl transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? "Sending..." : "Send Transmission"}
                </motion.button>
               </div>
            </div>
          </motion.form>

          {/* Map */}
          <motion.div
            className="rounded-[60px] overflow-hidden shadow-2xl glass-card p-3 h-full min-h-[500px] border-white/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3698.3221119691707!2d70.77947429999999!3d22.037270499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39583799509268af%3A0x4b3871838d78355c!2sPadmaja%20Technocast!5e0!3m2!1sen!2sin!4v1757633076102!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "50px" }}
              loading="lazy"
              className="invert brightness-75 opacity-60"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>

        {/* Contact Info Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Mail, label: "Email", text: "info@padmajatechnocast.com", sub: "Response within 24hrs" },
            { icon: Phone, label: "Voice", text: "+91 99981 40607", sub: "Mon-Sat, 9AM-6PM" },
            { icon: MapPin, label: "Base", text: "Rajkot, Gujarat, India", sub: "Headquarters & Plant" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-[40px] p-10 group hover:border-[#7FA1C3]/30 transition-all duration-500 shadow-xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#7FA1C3]/10 flex items-center justify-center mb-6 group-hover:bg-[#7FA1C3]/20 transition-all">
                <item.icon className="w-6 h-6 text-[#7FA1C3]" />
              </div>
              <div className="text-[10px] font-black text-[#7FA1C3] uppercase tracking-widest mb-2 opacity-60 leading-none">{item.label}</div>
              <p className="text-xl font-black text-white italic uppercase tracking-tight mb-2">{item.text}</p>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{item.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

