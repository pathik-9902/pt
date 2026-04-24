// src/components/Hero.tsx
"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Download } from "lucide-react";
import { useEffect, useMemo, useRef, useState, type JSX } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type Slide = {
  id: number;
  image: string;
  alt?: string;
  heading: string;
  text: string;
};

const slides: Slide[] = [
  {
    id: 1,
    image: `/assets/carousel/img1.webp`,
    alt: "Precision casting close-up",
    heading: "Excellence in Precision Investment Castings",
    text: "Delivering high-quality, durable, and technologically advanced castings to industries worldwide.",
  },
  {
    id: 2,
    image: `/assets/carousel/img2.webp`,
    alt: "Engineering and tooling",
    heading: "Engineering Innovation & Expertise",
    text: "Combining modern technology with skilled craftsmanship to create complex, reliable components.",
  },
  {
    id: 3,
    image: `/assets/carousel/img3.webp`,
    alt: "Quality inspection",
    heading: "Global Quality Standards",
    text: "ISO 9001:2015 certified manufacturing ensuring consistency, precision, and timely delivery.",
  },
  // optional 4th slide
  {
    id: 4,
    image: `/assets/carousel/img4.webp`,
    alt: "Finished components",
    heading: "Delivering on Time, Every Time",
    text: "Robust supply chain and on-time delivery for critical manufacturing partners.",
  },
];

export default function Hero(): JSX.Element {
  const [offsetY, setOffsetY] = useState(0);
  const [active, setActive] = useState(0);
  const sliderRef = useRef<Slider | null>(null);

  // Parallax Background Movement
  useEffect(() => {
    const handleScroll = () => {
      let ticking = false;
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            setOffsetY(window.scrollY * 0.1);
            ticking = false;
          });
          ticking = true;
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    };
    handleScroll();
  }, []);

  // Metallic floating particles
  const particles = useMemo(
    () =>
      [...Array(15)].map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        dur: `${10 + Math.random() * 10}s`,
        delay: `${Math.random() * 5}s`,
        size: `${Math.random() * 2 + 1}px`,
        opacity: `${0.1 + Math.random() * 0.1}`,
      })),
    []
  );

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    afterChange: (i: number) => setActive(i),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-12 w-full flex justify-center z-30 pointer-events-auto">
        <ul className="flex gap-4 p-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`h-1.5 transition-all duration-500 rounded-full ${
          i === active ? "w-8 bg-[#39569C] shadow-[0_0_15px_rgba(255,255,255,0.6)]" : "w-1.5 bg-white/20"
        }`}
      />
    ),
  };

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-[#000]" />
      <div className="metal-texture" />
      
      {/* Ambient Glows */}
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#39569C]/10  rounded-full animate-pulse" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#39569C]/10  rounded-full animate-pulse" />

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full animate-pulse"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: `white`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 h-full">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative w-full h-[85vh] md:h-screen">
              {/* IMAGE WITH PARALLAX */}
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt ?? slide.heading}
                  className="absolute inset-0 w-full h-full object-cover scale-110"
                  style={{
                    transform: `translateY(${offsetY}px)`,
                    transition: "transform 0.1s linear",
                    willChange: "transform",
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
              </div>

              {/* HERO CONTENT */}
              <div className="relative z-30 flex items-center justify-center h-full px-6">
                <div className="max-w-5xl text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8 uppercase italic">
                      {slide.heading.split(' ').map((word, i) => (
                        <span key={i} className={i % 2 !== 0 ? "text-[#39569C] block sm:inline" : "block sm:inline"}>
                          {word}{' '}
                        </span>
                      ))}
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-2xl font-medium max-w-2xl mx-auto mb-12 tracking-tight opacity-90 leading-relaxed">
                      {slide.text}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <Link
                        to="/contact"
                        className="liquid-button bg-white text-black px-10 py-5 text-lg font-black uppercase tracking-widest hover:bg-[#39569C] hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center group"
                      >
                        Start Project
                        <div className="ml-3 w-2 h-2 rounded-full bg-black group-hover:bg-white animate-ping" />
                      </Link>

                      <a
                        href="https://drive.google.com/file/d/1QAYFwIyTIqDj_3CvtINoLY8nrnRsAT7U/view?usp=drive_link"
                        download
                        className="glass-card px-10 py-5 rounded-full text-lg font-bold text-white hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-xl"
                      >
                        <Download className="w-5 h-5" />
                        Brochure
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
