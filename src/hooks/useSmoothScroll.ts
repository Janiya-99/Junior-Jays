'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useSmoothScroll() {
  const smootherRef = useRef<any>(null);

  useEffect(() => {
    // Import ScrollSmoother dynamically (it's a premium plugin)
    // For now, we'll use a simpler GSAP-based smooth scroll approach
    
    const ctx = gsap.context(() => {
      // Smooth scroll implementation using GSAP
      gsap.to(window, {
        duration: 0,
        scrollTo: 0,
      });

      // Enable smooth scrolling behavior
      document.documentElement.style.scrollBehavior = 'smooth';
      
      // ScrollTrigger refresh on window resize
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return smootherRef;
}

export function useScrollAnimation(
  selector: string,
  animation: gsap.TweenVars,
  scrollTriggerOptions?: ScrollTrigger.Vars
) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(selector, {
        ...animation,
        scrollTrigger: {
          trigger: selector,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          ...scrollTriggerOptions,
        },
      });
    });

    return () => ctx.revert();
  }, [selector, animation, scrollTriggerOptions]);
}
