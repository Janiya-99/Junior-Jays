import Image from 'next/image';

const tickerItems = [
    'Light', 'Lens', 'Focus', 'Exposure', 'Composition', 'Shutter',
    'Aperture', 'Contrast', 'Frame', 'Portrait', 'Capture', 'Moment',
    'Perspective', 'Emotion'
];

export default function ScrollingTicker() {
    return (
        <div className="scrolling scrolling-ticker">
            <div className="wrapper">
                <div className="content">
                    {tickerItems.map((item, index) => (
                        <span key={index}>
                            <Image
                                src="/images/asterisk-icon.svg"
                                alt=""
                                width={20}
                                height={20}
                                loading="lazy"
                            />
                            {item}
                        </span>
                    ))}
                </div>
                <div className="content">
                    {tickerItems.map((item, index) => (
                        <span key={`dup-${index}`}>
                            <Image
                                src="/images/asterisk-icon.svg"
                                alt=""
                                width={20}
                                height={20}
                                loading="lazy"
                            />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
