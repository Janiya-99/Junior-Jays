import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
    return (
        <section className="section-padding">
            <div className="container">
                <div className="row justify-content-center mb-60">
                    <div className="col-md-12 text-center">
                        <h6 className="wow" data-splitting>Time stands still in every shot</h6>
                        <h1 className="wow" data-splitting>Portfolio</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="portfolio fade-in section-padding">
                            <div className="item">
                                <Link
                                    href="/portfolio"
                                    className="img portrait"
                                    style={{ backgroundImage: "url('/images/portfolio/1.jpg')" }}
                                >
                                    <div className="overlay"></div>
                                    <span className="hover-text">Wedding Photography</span>
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="img landscape"
                                    style={{ backgroundImage: "url('/images/portfolio/2.jpg')" }}
                                >
                                    <div className="overlay"></div>
                                    <span className="hover-text">Art Photography</span>
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="img landscape"
                                    style={{ backgroundImage: "url('/images/portfolio/3.jpg')" }}
                                >
                                    <div className="overlay"></div>
                                    <span className="hover-text">Travel Photography</span>
                                </Link>
                                <Link
                                    href="/portfolio"
                                    className="img portrait"
                                    style={{ backgroundImage: "url('/images/portfolio/4.jpg')" }}
                                >
                                    <div className="overlay"></div>
                                    <span className="hover-text">Fashion Photography</span>
                                </Link>
                                <Image
                                    className="canvas-1"
                                    src="/images/canvas-1.png"
                                    width={373}
                                    height={373}
                                    alt="Canvas 1"
                                />
                                <Image
                                    className="canvas-2"
                                    src="/images/canvas-2.png"
                                    width={373}
                                    height={373}
                                    alt="Canvas 2"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 justify-align-center">
                        <div className="btn-wrap wow fadeInUp text-center" data-wow-delay=".3s">
                            <div className="btn-link">
                                <Link href="/portfolio">View portfolio</Link>
                                <span className="btn-block color1 animation-bounce"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
