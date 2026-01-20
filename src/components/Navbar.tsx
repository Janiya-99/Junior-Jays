'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled 
                ? 'bg-black/30 backdrop-blur-md border-b border-white/10 py-4' 
                : 'bg-transparent py-8'
            }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative z-50">
                     <Image 
                        src={scrolled ? "/images/logo-light.png" : "/images/logo-light.png"} 
                        alt="Gloom" 
                        width={100} 
                        height={30} 
                        className="transition-opacity duration-300"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {['Home', 'About', 'Portfolio', 'Services', 'Blog', 'Contact'].map((item) => (
                        <Link 
                            key={item} 
                            href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                            className="text-white font-light text-sm tracking-widest uppercase hover:text-white/70 transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle (Placeholder for now) */}
                <div className="md:hidden text-white cursor-pointer">
                    <i className="ti-menu text-2xl"></i>
                </div>
            </div>
        </nav>
    );
}
