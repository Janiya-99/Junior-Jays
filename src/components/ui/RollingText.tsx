'use client';

import { useEffect, useRef } from 'react';

interface RollingTextProps {
    text: string;
    className?: string;
}

export default function RollingText({ text, className = '' }: RollingTextProps) {
    const containerRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Clear and rebuild rolling text structure
        container.innerHTML = '';

        const block1 = document.createElement('div');
        block1.className = 'block';

        const block2 = document.createElement('div');
        block2.className = 'block';

        for (const letter of text) {
            const span1 = document.createElement('span');
            span1.className = 'letter';
            span1.textContent = letter.trim() === '' ? '\u00A0' : letter;
            block1.appendChild(span1);

            const span2 = document.createElement('span');
            span2.className = 'letter';
            span2.textContent = letter.trim() === '' ? '\u00A0' : letter;
            block2.appendChild(span2);
        }

        container.appendChild(block1);
        container.appendChild(block2);
    }, [text]);

    return (
        <span ref={containerRef} className={`rolling-text ${className}`}>
            {text}
        </span>
    );
}
