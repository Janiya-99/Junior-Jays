const processSteps = [
    {
        num: '01',
        title: 'Consult & Plan',
        desc: 'We start by understanding your vision and goals, ensuring every detail is aligned with your expectations for a seamless shoot.',
    },
    {
        num: '02',
        title: 'Shoot Day',
        desc: 'Our team captures every moment with precision and creativity, turning your special day into timeless memories.',
    },
    {
        num: '03',
        title: 'Edit & Deliver',
        desc: 'Post-production is handled with care, enhancing each photo to perfection before delivering your final collection promptly.',
    },
];

export default function Process() {
    return (
        <section className="process section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-45 text-center">
                        <h6 className="wow" data-splitting>Your Session, Step by Step</h6>
                        <h1 className="wow" data-splitting>Process</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="process-area">
                            {processSteps.map((step, index) => (
                                <div
                                    className="process-item wow fadeInLeft"
                                    data-wow-delay={`${0.2 + index * 0.2}s`}
                                    key={index}
                                >
                                    <div className="process-step">
                                        <span>{step.num}</span>
                                    </div>
                                    <div className="process-content">
                                        <h4 className="title">{step.title}</h4>
                                        <p className="desc">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
