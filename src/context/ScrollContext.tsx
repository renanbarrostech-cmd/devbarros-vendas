"use client";

import { createContext, useContext, useEffect, useState } from "react";

type ScrollState = {
  scrollY: number;
  scrollPct: number;
  blobParallax1: string;
  blobParallax2: string;
  heroMockupParallax: string;
};

const defaultState: ScrollState = {
  scrollY: 0,
  scrollPct: 0,
  blobParallax1: "translate3d(0,0px,0)",
  blobParallax2: "translate3d(0,0px,0)",
  heroMockupParallax: "translateY(0px) rotate(0deg)",
};

const ScrollCtx = createContext<ScrollState>(defaultState);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<ScrollState>(defaultState);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPct = docH > 0 ? Math.min(100, (scrollY / docH) * 100) : 0;

      setState({
        scrollY,
        scrollPct,
        blobParallax1: `translate3d(0,${Math.min(scrollY * 0.18, 120)}px,0)`,
        blobParallax2: `translate3d(0,${-Math.min(scrollY * 0.14, 100)}px,0)`,
        heroMockupParallax: `translateY(${Math.min(
          scrollY * 0.08,
          40
        )}px) rotate(${Math.min(scrollY * 0.01, 2)}deg)`,
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          compute();
          ticking = false;
        });
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <ScrollCtx.Provider value={state}>{children}</ScrollCtx.Provider>;
}

export function useScrollFx() {
  return useContext(ScrollCtx);
}
