import Link from 'next/link';

const pricingPlans = [
    {
        title: 'Wedding Package',
        price: '900',
        label: 'Wedding',
        features: [
            'Full-day coverage',
            '100+ edited photos',
            'Premium album',
            'Pre-wedding shoot',
            '2 photographers',
            'Online gallery',
        ],
    },
    {
        title: 'Drone Add-on',
        price: '800',
        label: 'Drone',
        active: true,
        features: [
            '30 min aerial shoot',
            '5 edited drone photos',
            '4K video clips',
            'Insured operator',
            'Cinematic flyovers',
            'Outdoor ready',
        ],
    },
    {
        title: 'Travel Session',
        price: '700',
        label: 'Travel',
        features: [
            'Outdoor location',
            '50 miles travel',
            '20 edited photos',
            'Mini album',
            '2 outfit changes',
            'Sunset timing',
        ],
    },
];

export default function Pricing() {
    return (
        <section className="price section-padding">
            <div className="container">
                <div className="row justify-content-center mb-45">
                    <div className="col-md-12 text-center">
                        <h6 className="wow" data-splitting>Choose the package that fits your story</h6>
                        <h1 className="wow" data-splitting>Price plan</h1>
                    </div>
                </div>
                <div className="row">
                    {pricingPlans.map((plan, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="item">
                                <h6>Get a quote</h6>
                                <h3>{plan.title}</h3>
                                <div className="cont">
                                    <ul className="dot-list">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx}>{feature}</li>
                                        ))}
                                    </ul>
                                    <div className="btn-wrap text-left mt-15">
                                        <div className="btn-link">
                                            <Link href="/contact">Get in touch</Link>
                                            <span className="btn-block color1 animation-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="numb">{plan.label}</div>
                                <a
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                    data-bs-whatever="@mdo"
                                    href="#0"
                                    className={`rmore ${plan.active ? 'active' : ''}`}
                                >
                                    <div className="arrow">
                                        <span>$</span>{plan.price}
                                    </div>
                                    <div className="br-left-top">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                                        </svg>
                                    </div>
                                    <div className="br-right-bottom">
                                        <svg viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                                            <path d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z" fill="#ffffff"></path>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
