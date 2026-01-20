'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export { gsap, ScrollTrigger, ScrollToPlugin };

// GSAP defaults for consistent animations
gsap.defaults({
    ease: 'power2.out',
    duration: 0.8,
});

// Configure ScrollTrigger
ScrollTrigger.config({
    limitCallbacks: true,
    ignoreMobileResize: true,
});
