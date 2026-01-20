'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Mark as mounted to avoid hydration mismatch
        setIsMounted(true);

        // Hide preloader after DOM is ready
        const handleLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 600);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            // Fallback timeout
            setTimeout(handleLoad, 2000);
        }

        return () => window.removeEventListener('load', handleLoad);
    }, []);

    // Don't render anything during SSR to avoid hydration mismatch
    if (!isMounted) {
        return (
            <>
                <div className="preloader-bg" />
                <div id="preloader">
                    <div id="preloader-status">
                        <div className="preloader-position loader">
                            <span></span>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    if (!isLoading) return null;

    return (
        <>
            <div
                className="preloader-bg"
                style={{
                    opacity: isLoading ? 1 : 0,
                    visibility: isLoading ? 'visible' : 'hidden',
                    transition: 'opacity 0.6s ease, visibility 0.6s ease'
                }}
            />
            <div
                id="preloader"
                style={{
                    opacity: isLoading ? 1 : 0,
                    visibility: isLoading ? 'visible' : 'hidden',
                    transition: 'opacity 0.6s ease, visibility 0.6s ease'
                }}
            >
                <div id="preloader-status">
                    <div className="preloader-position loader">
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    );
}
