'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function GSAPHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted || !sectionRef.current || !triggerRef.current || !horizontalRef.current) return;

        // Dynamic import GSAP to avoid SSR issues
        const initGSAP = async () => {
            const gsapModule = await import('gsap');
            const { ScrollTrigger } = await import('gsap/ScrollTrigger');

            const gsap = gsapModule.default;
            gsap.registerPlugin(ScrollTrigger);

            const horizontal = horizontalRef.current;
            if (!horizontal) return;

            const slides = horizontal.querySelectorAll('.hero-slide');
            const totalWidth = (slides.length - 1) * 100;

            // Main horizontal scroll - SLOWER for header
            gsap.to(horizontal, {
                xPercent: -totalWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: () => `+=${window.innerWidth * (slides.length - 1) * 1.5}`, // 1.5x longer scroll distance
                    scrub: 2, // Higher = slower/smoother (was 1)
                    pin: true,
                    anticipatePin: 1,
                },
            });

            // Parallax effect for each slide's background (moves slower)
            slides.forEach((slide) => {
                const bg = slide.querySelector('.slide-bg');
                if (bg) {
                    gsap.to(bg, {
                        xPercent: -20,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: triggerRef.current,
                            start: 'top top',
                            end: () => `+=${window.innerWidth * (slides.length - 1)}`,
                            scrub: 1,
                        },
                    });
                }
            });

            // Parallax for large background text (moves faster)
            const bgTexts = horizontal.querySelectorAll('.slide-bg-text');
            bgTexts.forEach((text) => {
                gsap.to(text, {
                    xPercent: 30,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: 'top top',
                        end: () => `+=${window.innerWidth * (slides.length - 1)}`,
                        scrub: 0.5,
                    },
                });
            });

            // Animate first slide content on load
            const titleLines = horizontal.querySelectorAll('.slide-1 .title-line');
            const subtitle = horizontal.querySelector('.slide-1 .slide-subtitle');
            const cta = horizontal.querySelector('.slide-1 .slide-cta');

            gsap.set([...titleLines, subtitle, cta], { opacity: 0, y: 80 });

            const tl = gsap.timeline({ delay: 0.3 });
            tl.to(titleLines, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power4.out',
            })
                .to(subtitle, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                }, '-=0.6')
                .to(cta, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                }, '-=0.4');

            // Cleanup
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        };

        initGSAP();
    }, [isMounted]);

    if (!isMounted) {
        return (
            <section className="hero-section" style={{ height: '100vh', background: '#0a0a0a' }}>
                <div style={{ height: '100vh' }} />
            </section>
        );
    }

    return (
        <section ref={sectionRef} className="hero-section">
            <div ref={triggerRef} className="hero-trigger">
                <div ref={horizontalRef} className="hero-track">

                    {/* Slide 1 - Main Hero */}
                    <div className="hero-slide slide-1">
                        <div className="slide-bg">
                            <Image src="/images/slider/01.jpg" fill alt="Slide 1" style={{ objectFit: 'cover' }} priority />
                        </div>
                        <div className="slide-overlay"></div>
                        <span className="slide-bg-text">GLOOM</span>
                        <div className="slide-content">
                            <div className="slide-number">01</div>
                            <h1 className="slide-title">
                                <span className="title-line">Strike a</span>
                                <span className="title-line title-outline">Pose</span>
                            </h1>
                            <p className="slide-subtitle">Fashion in motion, confidence in every shot.</p>
                            <div className="slide-cta">
                                <div className="btn-link">
                                    <Link className="white" href="/portfolio-page">View portfolio</Link>
                                    <span className="btn-block color3 animation-bounce"></span>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-indicator">
                            <span>Scroll to explore</span>
                            <div className="scroll-bar">
                                <div className="scroll-progress"></div>
                            </div>
                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="hero-slide slide-2">
                        <div className="slide-bg">
                            <Image src="/images/slider/02.jpg" fill alt="Slide 2" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="slide-overlay"></div>
                        <span className="slide-bg-text">WEDDING</span>
                        <div className="slide-content">
                            <div className="slide-number">02</div>
                            <h2 className="slide-title">
                                <span className="title-line">Wedding</span>
                                <span className="title-line title-outline">Stories</span>
                            </h2>
                            <p className="slide-subtitle">Capturing your special moments with artistic vision.</p>
                        </div>
                    </div>

                    {/* Slide 3 */}
                    <div className="hero-slide slide-3">
                        <div className="slide-bg">
                            <Image src="/images/slider/03.jpg" fill alt="Slide 3" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="slide-overlay"></div>
                        <span className="slide-bg-text">FINE ART</span>
                        <div className="slide-content">
                            <div className="slide-number">03</div>
                            <h2 className="slide-title">
                                <span className="title-line">Fine Art</span>
                                <span className="title-line title-outline">Photography</span>
                            </h2>
                            <p className="slide-subtitle">Where creativity meets timeless elegance.</p>
                        </div>
                    </div>

                    {/* Slide 4 - CTA */}
                    <div className="hero-slide slide-4">
                        <div className="slide-bg">
                            <Image src="/images/slider/04.jpg" fill alt="Slide 4" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="slide-overlay"></div>
                        <span className="slide-bg-text">CREATE</span>
                        <div className="slide-content slide-content-center">
                            <div className="slide-number">04</div>
                            <h2 className="slide-title">
                                <span className="title-line">Let&apos;s</span>
                                <span className="title-line title-outline">Create</span>
                            </h2>
                            <div className="slide-cta">
                                <div className="btn-link">
                                    <Link className="white" href="/contact">Get in Touch</Link>
                                    <span className="btn-block color3 animation-bounce"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: #0a0a0a;
        }

        .hero-trigger {
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .hero-track {
          display: flex;
          width: 400vw;
          height: 100vh;
          will-change: transform;
        }

        .hero-slide {
          position: relative;
          width: 100vw;
          height: 100vh;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .slide-bg {
          position: absolute;
          top: 0;
          left: -10%;
          width: 120%;
          height: 100%;
          background-size: cover;
          background-position: center;
          will-change: transform;
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.4) 40%,
            rgba(0, 0, 0, 0.3) 100%
          );
          z-index: 1;
        }

        .slide-bg-text {
          position: absolute;
          bottom: -5%;
          right: -5%;
          font-family: 'Syne', sans-serif;
          font-size: clamp(10rem, 25vw, 25rem);
          font-weight: 800;
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
          text-stroke: 1px rgba(255, 255, 255, 0.08);
          text-transform: uppercase;
          letter-spacing: -0.05em;
          z-index: 0;
          pointer-events: none;
          will-change: transform;
        }

        .slide-content {
          position: relative;
          z-index: 2;
          padding: 0 clamp(40px, 8vw, 120px);
          max-width: 700px;
        }

        .slide-content-center {
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .slide-number {
          font-family: 'Syne', sans-serif;
          font-size: clamp(0.75rem, 1vw, 1rem);
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.2em;
          margin-bottom: 20px;
        }

        .slide-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 8vw, 6rem);
          font-weight: 800;
          color: #fff;
          line-height: 1;
          margin: 0 0 25px;
          text-transform: uppercase;
        }

        .title-line {
          display: block;
        }

        .title-outline {
          color: transparent;
          -webkit-text-stroke: 2px #fff;
          text-stroke: 2px #fff;
        }

        .slide-subtitle {
          font-family: 'Urbanist', sans-serif;
          font-size: clamp(0.95rem, 1.5vw, 1.25rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.75);
          margin: 0 0 35px;
          max-width: 400px;
          line-height: 1.6;
        }

        .slide-cta {
          display: inline-block;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: clamp(40px, 8vw, 120px);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.5);
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .scroll-bar {
          width: 60px;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .scroll-progress {
          width: 30%;
          height: 100%;
          background: #fff;
          border-radius: 2px;
          animation: scrollMove 2s ease-in-out infinite;
        }

        @keyframes scrollMove {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .slide-bg-text {
            font-size: clamp(5rem, 20vw, 12rem);
            right: -10%;
          }
          
          .title-outline {
            -webkit-text-stroke: 1.5px #fff;
          }
          
          .scroll-indicator {
            left: 20px;
            bottom: 25px;
          }
        }

        @media (max-width: 480px) {
          .title-outline {
            -webkit-text-stroke: 1px #fff;
          }
        }
      `}</style>
        </section>
    );
}
