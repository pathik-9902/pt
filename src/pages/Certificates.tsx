// src/pages/Certificates.tsx
"use client";

import { useEffect, useRef, useState, type JSX } from "react";
import { motion } from "framer-motion";
import { X, FileText, Maximize2, Download } from "lucide-react";

type CertItem = {
  id: number;
  title: string;
  year?: string;
  fileId?: string;
  fileUrl?: string;
  note?: string;
};

const CERTS: CertItem[] = [
  { id: 1, title: "Certificate ISO 9001:2015", fileId: "14K7sM1_2kKGg5w-I-lm5nOffyLmWvo8T" },
  { id: 2, title: "AD2000 Certificate (multi-lingual)", fileId: "1twFJadKT0Gw9KiirnywQjyrn9gutxWtM" },
  { id: 3, title: "Certificate of Incorporation", fileId: "1EbJo1ZWfFn5_C1jDdN00ouJXvAyVRvKp" },
  { id: 4, title: "IEC Certificate", fileId: "1gzYgt1ju8Cp7JzSWw1nJwZqO4I1vJvSH" },
  { id: 5, title: "PED Certificate (multi-lingual)", fileId: "1zpv2CVxK1jo5XBNubVQ8_7nhag21Kgfa" },
  { id: 6, title: "UDHYAM Certificate", fileId: "14mXB8Yj81c3yNFLPOD6ZmQbmTla_YKft" },
];

function drivePreviewUrlFromId(fileId: string) {
  return `https://drive.google.com/file/d/${fileId}/preview`;
}

async function checkDrivePublic(fileId?: string): Promise<{ ok: boolean; reason?: string }> {
  if (!fileId) return { ok: false, reason: "No file id provided" };
  const testUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  try {
    const resp = await fetch(testUrl, { method: "HEAD", mode: "cors" });
    if (resp.ok) return { ok: true };
    return { ok: false, reason: `HTTP ${resp.status}` };
  } catch {
    return { ok: true };
  }
}

export default function CertificatesPage(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string | null>(null);
  const [activeOriginalUrl, setActiveOriginalUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [checking, setChecking] = useState(false);
  const [checkMessage, setCheckMessage] = useState<string | null>(null);

  const [viewerHeightPx, setViewerHeightPx] = useState<number | null>(null);
  const viewerContainerRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) {
      setActiveEmbedUrl(null);
      setActiveOriginalUrl(null);
      setActiveTitle(null);
      setChecking(false);
      setCheckMessage(null);
      setViewerHeightPx(null);
    }
  }, [open]);

  // FIXED — Correct A4 viewer height that fits inside visible screen
  useEffect(() => {
    if (!open || !modalRef.current) return;

    const el = modalRef.current;

    const compute = () => {
      const useWidth = el.clientWidth || Math.min(window.innerWidth - 40, 900);
      const naturalHeight = Math.round(useWidth * (297 / 210));
      const viewportAvailable = window.innerHeight - 40;
      const header = el.querySelector("[data-modal-header]") as HTMLElement | null;
      const footer = el.querySelector("[data-modal-footer]") as HTMLElement | null;
      const headerH = header ? header.getBoundingClientRect().height : 0;
      const footerH = footer ? footer.getBoundingClientRect().height : 0;
      const contentMax = viewportAvailable - headerH - footerH - 32;
      const finalHeight = Math.max(300, Math.min(naturalHeight, contentMax));
      setViewerHeightPx(finalHeight);
    };

    compute();
    const ro = new ResizeObserver(() => compute());
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, [open]);

  async function openCert(cert: CertItem) {
    setChecking(true);
    setCheckMessage(null);
    const embedUrl = cert.fileUrl ?? (cert.fileId ? drivePreviewUrlFromId(cert.fileId) : null);
    const originalUrl = cert.fileId
      ? `https://drive.google.com/uc?export=download&id=${cert.fileId}`
      : cert.fileUrl ?? null;

    if (!embedUrl) {
      setActiveEmbedUrl(null);
      setActiveOriginalUrl(null);
      setActiveTitle(cert.title);
      setCheckMessage("No document configured for this certificate.");
      setChecking(false);
      setOpen(true);
      return;
    }

    if (cert.fileId) {
      const chk = await checkDrivePublic(cert.fileId);
      if (!chk.ok) {
        setCheckMessage(`The file may not be publicly accessible. Please check Drive permissions.`);
      }
    }

    setActiveEmbedUrl(embedUrl);
    setActiveOriginalUrl(originalUrl);
    setActiveTitle(cert.title);
    setChecking(false);
    setOpen(true);
  }

  async function toggleFullscreen() {
    const el = viewerContainerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      try { await el.requestFullscreen?.(); } catch { /* empty */ }
    } else {
      try { await document.exitFullscreen(); } catch { /* empty */ }
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex gap-3 items-center text-[10px] font-black tracking-widest text-[#39569C] bg-white/5 border border-white/10 px-6 py-2 rounded-full mb-8 uppercase"
          >
             Global Standards
          </motion.div>

          <h1 className="text-4xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            Our <span className="metal-text">Credentials</span>
          </h1>

          <p className="text-xl text-gray-400 font-medium italic max-w-2xl mx-auto leading-relaxed opacity-90">
             Certified quality management and technical compliance for mission-critical engineering.
          </p>
        </div>

        {/* Grid of certificate preview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {CERTS.map((c, i) => {
            const embedUrl = c.fileUrl ?? (c.fileId ? drivePreviewUrlFromId(c.fileId) : null);

            return (
              <motion.article
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -10 }}
                className="group relative rounded-[48px] overflow-hidden glass-card shadow-2xl cursor-pointer p-6 border-white/5 hover:border-[#39569C]/30 transition-all duration-500"
                onClick={() => openCert(c)}
              >
                <div className="relative aspect-[210/297] rounded-[32px] overflow-hidden bg-black mb-8 ring-1 ring-white/5 shadow-inner">
                  {embedUrl ? (
                    <iframe
                      src={embedUrl}
                      title={c.title}
                      className="absolute left-0 top-0 w-full h-full pointer-events-none transition-all duration-700 opacity-80 group-hover:opacity-100"
                      loading="lazy"
                      style={{ border: "none" }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#39569C] group-hover:bg-[#39569C]/20 transition-all">
                        <FileText className="w-10 h-10" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                <div className="px-4 text-center">
                  <span className="block text-[10px] font-black text-[#39569C]/60 tracking-widest uppercase mb-1">Certe-ID: PAD-{c.id}</span>
                  <h3 className="text-xl font-black text-white italic uppercase tracking-tighter leading-tight">{c.title}</h3>
                  {c.year && <div className="text-xs font-bold text-gray-500 mt-2 uppercase tracking-widest">Valid since {c.year}</div>}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/90 backdrop-blur-3xl" 
            onClick={() => setOpen(false)} 
          />

          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative rounded-[56px] overflow-hidden glass-card bg-black/60 shadow-[0_0_100px_rgba(57,86,156,0.1)] border-white/10 w-full max-w-5xl overflow-y-auto max-h-full"
          >
            {/* HEADER */}
            <div
              data-modal-header
              className="flex items-center justify-between gap-6 p-10 border-b border-white/5"
            >
              <div>
                <h3 className="text-2xl font-black text-white italic uppercase tracking-tighter mb-1">{activeTitle}</h3>
                <p className="text-xs font-bold text-[#39569C]/60 uppercase tracking-widest leading-none">
                  Verified Performance Standards
                </p>
              </div>

              <div className="flex items-center gap-4">
                {activeOriginalUrl && (
                  <a
                    href={activeOriginalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white hover:bg-[#39569C] hover:text-white transition-all shadow-xl"
                  >
                    <Download size={20} />
                  </a>
                )}

                <button
                  onClick={toggleFullscreen}
                  className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-white hover:bg-white/10 transition-all shadow-xl"
                >
                  <Maximize2 size={20} />
                </button>

                <button
                  onClick={() => setOpen(false)}
                  className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-xl"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* VIEWER */}
            <div
              ref={viewerContainerRef}
              className="w-full bg-black/40 flex items-center justify-center relative"
              style={{
                height: viewerHeightPx ? `${viewerHeightPx}px` : "60vh",
                minHeight: "400px",
              }}
            >
              {checking && <div className="text-sky-400 font-black italic uppercase animate-pulse">Scanning Document…</div>}

              {!checking && activeEmbedUrl && viewerHeightPx && (
                <iframe
                  src={activeEmbedUrl}
                  title={activeTitle ?? "Certificate"}
                  style={{ width: "100%", height: "100%", border: "none", background: "white" }}
                />
              )}
            </div>

            {/* FOOTER */}
            <div
              data-modal-footer
              className="p-10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-white/5"
            >
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] max-w-md text-center sm:text-left">
                  This document is for viewing purposes only. To request a certified copy, please contact our quality department.
                </div>
                
                {checkMessage && <div className="text-yellow-400 text-xs font-black uppercase tracking-widest">{checkMessage}</div>}

                <button
                  onClick={() => setOpen(false)}
                  className="text-xs font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-colors"
                >
                  Close Viewer
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
