'use client';

import Link from 'next/link';

const processItems = [
    { title: 'Wedding Photography', image: '/images/slider/01.jpg' },
    { title: 'Fine Art Photography', image: '/images/slider/02.jpg' },
    { title: 'Travel & Nature Photography', image: '/images/slider/04.jpg' },
    { title: 'Fashion Photography', image: '/images/slider/03.jpg' },
];

export default function Process2() {
    return (
        <section className="interactive process2">
            <div className="process2-content">
                <div className="process2-content-inner">
                    {processItems.map((item, index) => (
                        <div className="item" key={index}>
                            <div
                                className={`inner ${index === 0 ? 'activate' : ''}`}
                                data-index={index}
                            >
                                <div className="cont">
                                    <div className="text">
                                        <h2>
                                            <Link href="/services">{item.title}</Link>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="process2-list-image">
                    {processItems.map((item, index) => (
                        <div
                            key={index}
                            className={`process2-image img-${index} ${index === 0 ? 'show' : ''}`}
                            data-bg={item.image}
                            style={{ backgroundImage: `url('${item.image}')` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
