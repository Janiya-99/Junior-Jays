'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const slides = [
    {
        id: 1,
        image: '/images/hero/slide1.png',
        title: 'Playful',
        subtitle: 'Streetwear',
        description: 'Vibrant colors and cool styles for active kids.'
    },
    {
        id: 2,
        image: '/images/hero/slide2.png',
        title: 'Joyful',
        subtitle: 'Summer',
        description: 'Light and breezy outfits for sunny adventures.'
    },
    {
        id: 3,
        image: '/images/hero/slide3.png',
        title: 'Trendy',
        subtitle: 'Urban',
        description: 'Fresh looks for the coolest kids on the block.'
    }
];

export default function SliceHero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const changeSlide = useCallback((direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex = direction === 'next' 
            ? (currentSlide + 1) % slides.length 
            : (currentSlide - 1 + slides.length) % slides.length;

        const container = containerRef.current;
        if (!container) return;

        const currentSlideEl = container.querySelector(`.slide-${currentSlide}`);
        const nextSlideEl = container.querySelector(`.slide-${nextIndex}`);
        
        if (!currentSlideEl || !nextSlideEl) return; // Safety check

        const nextSlices = nextSlideEl.querySelectorAll('.slice-column');
        const nextText = nextSlideEl.querySelectorAll('.slide-text');
        const currentText = currentSlideEl.querySelectorAll('.slide-text');

        const ctx = gsap.context(() => {
            // Setup next slide
            gsap.set(nextSlideEl, { zIndex: 20, opacity: 1 });
            gsap.set(currentSlideEl, { zIndex: 10 });
            
            // Initial position for next slices (enter from bottom or top)
            const startY = direction === 'next' ? 100 : -100;
            gsap.set(nextSlices, { yPercent: startY });
            
            // Reset text
            gsap.set(nextText, { y: 100, opacity: 0 });

            const tl = gsap.timeline({
                onComplete: () => {
                    setCurrentSlide(nextIndex);
                    setIsAnimating(false);
                    // Reset z-index after transition
                    gsap.set(nextSlideEl, { zIndex: 10 });
                    gsap.set(currentSlideEl, { zIndex: 0, opacity: 0 });
                }
            });

            // Animate Text Out
            tl.to(currentText, {
                y: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.in'
            }, 0);

            // Animate Slices In
            tl.to(nextSlices, {
                yPercent: 0,
                duration: 1.2,
                stagger: 0.05,
                ease: 'expo.inOut'
            }, 0.2); // Overlap slightly with text out

            // Animate Text In
            tl.to(nextText, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out'
            }, 0.8);

        }, containerRef);
    }, [currentSlide, isAnimating]);

    return (
        <section ref={containerRef} className="slice-hero relative w-full h-screen overflow-hidden bg-black text-white">
            {slides.map((slide, index) => (
                <div 
                    key={slide.id}
                    className={`slide-${index} absolute inset-0 w-full h-full pointer-events-none ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                   {/* Background Image - Low Opacity Filler */}
                    <div className="absolute inset-0">
                         <Image 
                            src={slide.image}
                            fill
                            alt={slide.title}
                            className="object-cover opacity-30 blur-xl"
                            priority={index === 0}
                        />
                    </div>

                    {/* Slices Container */}
                    <div className="absolute inset-0 flex">
                        {[0, 1, 2].map((colIndex) => (
                            <div key={colIndex} className="slice-column relative h-full flex-1 overflow-hidden">
                                {/* The inner image matches the column width but uses high resolution part */}
                                <div className="slice-inner absolute inset-0 w-[300%] h-full" style={{ left: `-${colIndex * 100}%` }}>
                                     <Image 
                                        src={slide.image}
                                        fill
                                        alt={slide.title}
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20 z-30 mix-blend-difference">
                        <div className="overflow-hidden">
                             <h4 className="slide-text text-xl md:text-2xl font-light tracking-[0.2em] mb-2 uppercase text-white/80">{slide.subtitle}</h4>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="slide-text text-6xl md:text-9xl font-bold uppercase tracking-tighter loading-none">{slide.title}</h1>
                        </div>
                         <div className="overflow-hidden mt-6">
                            <p className="slide-text text-sm md:text-lg max-w-md font-light text-white/70">{slide.description}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation */}
            <div className="absolute bottom-10 right-10 z-40 flex gap-4 pointer-events-auto">
                <button 
                    onClick={() => changeSlide('prev')}
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                    <i className="ti-arrow-left"></i>
                </button>
                 <button 
                    onClick={() => changeSlide('next')}
                    className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all"
                >
                    <i className="ti-arrow-right"></i>
                </button>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-10 left-10 z-40 font-mono text-sm pointer-events-auto">
                <span>0{currentSlide + 1}</span>
                <span className="mx-2 text-white/30">/</span>
                <span>0{slides.length}</span>
            </div>
        </section>
    );
}
