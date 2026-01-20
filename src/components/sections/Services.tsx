'use client';

import Link from 'next/link';
import Image from 'next/image';

const services = [
    { icon: 'icon-1.svg', title: 'Photography', num: '01' },
    { icon: 'icon-2.svg', title: 'Videography', num: '02' },
    { icon: 'icon-3.svg', title: 'Retouching', num: '03' },
    { icon: 'icon-4.svg', title: 'Drone', num: '04' },
    { icon: 'icon-5.svg', title: 'Lighting', num: '05' },
    { icon: 'icon-5.svg', title: 'Grading', num: '06' },
];

export default function Services() {
    return (
        <section className="services section-padding">
            <div className="container">
                <div className="row mb-45">
                    <div className="col-md-4">
                        <h6 className="wow" data-splitting>Capture the Moment</h6>
                        <h1 className="wow" data-splitting>Services</h1>
                    </div>
                    <div className="col-md-7 offset-md-1 mt-45">
                        <p className="wow fadeInUp" data-wow-delay=".6s">
                            Discover my professional services including photography, videography, retouching, aerials, lighting, and grading — crafted to capture your moments with precision and creativity.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="owl-carousel owl-theme">
                            {services.map((service, index) => (
                                <div className="item" key={index}>
                                    <Link href="/services-page">
                                        <Image
                                            src={`/images/icons/${service.icon}`}
                                            alt={service.title}
                                            width={50}
                                            height={50}
                                        />
                                        <h5>{service.title}</h5>
                                        <p>
                                            We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.
                                        </p>
                                        <div className="numb">{service.num}</div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
