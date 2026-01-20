'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'nav-scroll' : ''}`}>
            <div className="container">
                {/* Logo */}
                <div className="logo-wrapper">
                    <Link className="logo" href="/">
                        <Image
                            src="/images/logo-light.png"
                            className="logo-img"
                            alt="Gloom"
                            width={160}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                    aria-controls="navbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <i className="ti-menu"></i>
                    </span>
                </button>

                {/* Menu */}
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav ms-auto">
                        {/* Home Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link active dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <span className="rolling-text">Home</span>
                                <i className="ti-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/" className="dropdown-item active">
                                        <span>Home Image</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-slider" className="dropdown-item">
                                        <span>Home Slider</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-video" className="dropdown-item">
                                        <span>Home Video</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/home-slideshow" className="dropdown-item">
                                        <span>Home Slideshow</span>
                                    </Link>
                                </li>
                                <li className="dropdown-submenu dropdown">
                                    <a
                                        className="dropdown-item dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                        data-bs-auto-close="outside"
                                        aria-expanded="false"
                                        href="#"
                                    >
                                        <span>
                                            Onepage <i className="ti-angle-right"></i>
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href="/onepage-image" className="dropdown-item">
                                                <span>Home Image</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/onepage-slider" className="dropdown-item">
                                                <span>Home Slider</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/onepage-video" className="dropdown-item">
                                                <span>Home Video</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/onepage-slideshow" className="dropdown-item">
                                                <span>Home Slideshow</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        {/* About */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">
                                <span className="rolling-text">About</span>
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <span className="rolling-text">Services</span>
                                <i className="ti-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/services" className="dropdown-item">
                                        <span>Services 01</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services2" className="dropdown-item">
                                        <span>Services 02</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-page" className="dropdown-item">
                                        <span>Service Page</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Portfolio Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <span className="rolling-text">Portfolio</span>
                                <i className="ti-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/portfolio" className="dropdown-item">
                                        <span>Portfolio 01</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio2" className="dropdown-item">
                                        <span>Portfolio 02</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio3" className="dropdown-item">
                                        <span>Portfolio 03</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio4" className="dropdown-item">
                                        <span>Portfolio 04</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-page" className="dropdown-item">
                                        <span>Portfolio Page</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Pages Dropdown */}
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                data-bs-auto-close="outside"
                                aria-expanded="false"
                            >
                                <span className="rolling-text">Pages</span>
                                <i className="ti-angle-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link href="/pricing" className="dropdown-item">
                                        <span>Pricing</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team" className="dropdown-item">
                                        <span>Team</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/team-details" className="dropdown-item">
                                        <span>Team Details</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="dropdown-item">
                                        <span>FAQs</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/testimonials" className="dropdown-item">
                                        <span>Testimonials</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/post" className="dropdown-item">
                                        <span>Post Page</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        {/* Blog */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/blog">
                                <span className="rolling-text">Blog</span>
                            </Link>
                        </li>

                        {/* Contact */}
                        <li className="nav-item">
                            <Link className="nav-link" href="/contact">
                                <span className="rolling-text">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
