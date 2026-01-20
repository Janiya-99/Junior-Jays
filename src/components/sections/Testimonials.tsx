'use client';

import Image from 'next/image';

const testimonials = [
    {
        text: "Working with Gloom was an unforgettable experience. Their attention to detail and creative vision brought our special day to life in the most beautiful way.",
        name: "Emily Brown",
        role: "Customer",
        image: "/images/team/1.jpg",
    },
    {
        text: "Working with Gloom was an unforgettable experience. Their attention to detail and creative vision brought our special day to life in the most beautiful way.",
        name: "Jason White",
        role: "Customer",
        image: "/images/team/2.jpg",
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div
                className="background bg-img bg-imgfixed section-padding"
                data-overlay-dark="5"
                style={{ backgroundImage: "url('/images/slider/01.jpg')" }}
            >
                <div className="container">
                    <div className="row align-items-center">
                        {/* Work together */}
                        <div className="col-md-5 mb-30">
                            <h4 className="wow" data-splitting>
                                Let&apos;s capture the perfect shots together.
                            </h4>
                            <div className="btn-wrap mt-30 text-left wow fadeInUp" data-wow-delay=".6s">
                                <div className="btn-link">
                                    <a className="white" href="mailto:hello@gloom.com">
                                        hello@gloom.com
                                    </a>
                                    <span className="btn-block color3 animation-bounce"></span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="col-md-5 offset-md-2">
                            <div className="testimonials-box">
                                <h5>What Are Clients Saying?</h5>
                                <div className="owl-carousel owl-theme">
                                    {testimonials.map((testimonial, index) => (
                                        <div className="item" key={index}>
                                            <p>{testimonial.text}</p>
                                            <span className="quote">
                                                <Image
                                                    src="/images/quot.png"
                                                    alt="Quote"
                                                    width={30}
                                                    height={30}
                                                    loading="lazy"
                                                />
                                            </span>
                                            <div className="info">
                                                <div className="author-img">
                                                    <Image
                                                        src={testimonial.image}
                                                        alt={testimonial.name}
                                                        width={60}
                                                        height={60}
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <div className="cont">
                                                    <h6>{testimonial.name}</h6>
                                                    <span>{testimonial.role}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
