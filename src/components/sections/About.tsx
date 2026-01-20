import Image from 'next/image';

export default function About() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="wow" data-splitting>About Us</h6>
                        <h1 className="wow" data-splitting>Behind the lens</h1>
                        <p className="mt-30 wow fadeInUp" data-wow-delay="0.3s">
                            We believe every image has a soul. Through light, emotion, and timing, we frame stories that speak without words. Photography is not just craft — it&apos;s connection. Moments pass, but memories we create last forever.
                        </p>
                        <p className="wow fadeInUp" data-wow-delay="0.6s">
                            Fusce suere quis sem quis efficitur. Etiam ac cursus lacus a retium arus crase eratodio congue a nulla quis iaculis laoreet risus. Orci varius natoque penatis magnis miss the duru parturient montes, nascetur ridiculus in the fermen.
                        </p>
                        <div className="btn-wrap wow fadeInUp text-left mt-30 mb-30" data-wow-delay="0.9s">
                            <div className="btn-link">
                                <a href="mailto:hello@gloom.com">hello@gloom.com</a>
                                <span className="btn-block color1 animation-bounce"></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                        <div className="reveal-effect">
                            <Image
                                src="/images/about.jpg"
                                className="img-fluid br-10px"
                                alt="Gloom"
                                width={500}
                                height={600}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
