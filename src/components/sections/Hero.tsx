import Link from 'next/link';

export default function Hero() {
    return (
        <section
            className="parallax-header section-padding valign bg-img bg-imgfixed bg-position-top"
            data-overlay-dark="3"
            style={{ backgroundImage: "url('/images/slider/01.jpg')" }}
        >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12">
                        <h1>Every frame tells a story</h1>
                        <h6 className="wow" data-splitting>
                            Life&apos;s most beautiful moments through our lens.
                        </h6>
                        <div className="btn-wrap mt-30">
                            <div className="btn-link">
                                <Link className="white" href="/portfolio">
                                    Discover more
                                </Link>
                                <span className="btn-block color3 animation-bounce"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
