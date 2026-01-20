'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const mouseCurrentRef = useRef({ x: 0, y: 0 });
    const mouseLastRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

        const handleMouseMove = (e: MouseEvent) => {
            mouseCurrentRef.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            mouseLastRef.current.x = lerp(mouseLastRef.current.x, mouseCurrentRef.current.x, 0.2);
            mouseLastRef.current.y = lerp(mouseLastRef.current.y, mouseCurrentRef.current.y, 0.2);

            cursor.style.transform = `translate3d(${mouseLastRef.current.x}px, ${mouseLastRef.current.y}px, 0)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const animationFrame = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return <div ref={cursorRef} className="cursor js-cursor" />;
}
