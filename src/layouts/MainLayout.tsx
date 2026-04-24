// src/layouts/MainLayout.tsx
import { Analytics } from "@vercel/analytics/react";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // helper that tries to scroll the page in several ways
    const scrollTop = (top = 0, behavior: ScrollBehavior = "auto") => {
      try {
        // primary: window
        window.scrollTo({ top, left: 0, behavior });
      } catch {
        /* ignore */
      }
      try {
        // fallback: scrollingElement / documentElement / body
        const sc = (document.scrollingElement as HTMLElement) || document.documentElement || document.body;
        if (sc) {
          sc.scrollTop = top;
        }
      } catch {
        /* ignore */
      }
      try {
        // fallback: a likely scroll container in your app
        const appMain = document.getElementById("app-main") || document.querySelector("main");
        if (appMain) {
          if (typeof appMain.scrollTo === "function") {
            appMain.scrollTo({ top, left: 0, behavior });
          } else {
            (appMain as HTMLElement).scrollTop = top;
          }
        }
      } catch {
        /* ignore */
      }
    };

    // If there's a hash (anchor), attempt to scroll to that element first.
    if (hash) {
      const id = hash.slice(1);
      // wait one frame so the element can mount
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          // if you have a fixed header, set headerOffset to its height in px
          const headerOffset = 0;
          const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
          scrollTop(y, "smooth");
          return;
        }
        // fallback to top if element not found
        scrollTop(0, "auto");
      });
      return;
    }

    // Normal navigation -> ensure top of page
    // brief delay ensures React has mounted children; rAF helps avoid fighting paint
    requestAnimationFrame(() => scrollTop(0, "auto"));
    // final safety fallback for slow renders
    const t = window.setTimeout(() => scrollTop(0, "auto"), 120);

    return () => {
      window.clearTimeout(t);
    };
  }, [pathname, hash]);

  return (
    <div id="app-root" className="flex flex-col min-h-screen">
      <Navbar />
      <main id="app-main" className="flex-1 mt-15">
        <Outlet />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
