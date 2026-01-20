import Link from "next/link";
import Image from "next/image";
import SliceHero from "@/components/SliceHero";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <>
      {/* Preloader */}
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader">
            <span></span>
          </div>
        </div>
      </div>

      {/* Progress scroll totop */}
      <div className="progress-wrap cursor-pointer">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Cursor */}
      <div className="cursor js-cursor"></div>

      {/* Social Icons */}
      <div className="social-ico-block">
        <a href="https://instagram.com" target="_blank" className="social-ico" rel="noopener noreferrer">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="social-ico" rel="noopener noreferrer">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="https://youtube.com" target="_blank" className="social-ico" rel="noopener noreferrer">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://tiktok.com" target="_blank" className="social-ico" rel="noopener noreferrer">
          <i className="fa-brands fa-tiktok"></i>
        </a>
        <a href="https://flickr.com" target="_blank" className="social-ico" rel="noopener noreferrer">
          <i className="fa-brands fa-flickr"></i>
        </a>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* GSAP Hero with Parallax Video Header */}
      <SliceHero />

      {/* About */}
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
                <Image src="/images/about.jpg" className="img-fluid br-10px" alt="Gloom" width={500} height={600} priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
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
                  <Link href="/portfolio" className="img portrait" style={{ backgroundImage: "url('/images/portfolio/1.jpg')" }}>
                    <div className="overlay"></div>
                    <span className="hover-text">Wedding Photography</span>
                  </Link>
                  <Link href="/portfolio" className="img landscape" style={{ backgroundImage: "url('/images/portfolio/2.jpg')" }}>
                    <div className="overlay"></div>
                    <span className="hover-text">Art Photography</span>
                  </Link>
                  <Link href="/portfolio" className="img landscape" style={{ backgroundImage: "url('/images/portfolio/3.jpg')" }}>
                    <div className="overlay"></div>
                    <span className="hover-text">Travel Photography</span>
                  </Link>
                  <Link href="/portfolio" className="img portrait" style={{ backgroundImage: "url('/images/portfolio/4.jpg')" }}>
                    <div className="overlay"></div>
                    <span className="hover-text">Fashion Photography</span>
                  </Link>
                  <Image className="canvas-1" src="/images/canvas-1.png" width={373} height={400} alt="Canvas 1" />
                  <Image className="canvas-2" src="/images/canvas-2.png" width={373} height={400} alt="Canvas 2" />
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

      {/* Services */}
      <section className="services clear section-padding">
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
                <div className="item">
                  <a href="/services-page">
                    <Image src="/images/icons/icon-1.svg" alt="" width={60} height={60} />
                    <h5>Photography</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">01</div>
                  </a>
                </div>
                <div className="item">
                  <a href="/services-page">
                    <Image src="/images/icons/icon-2.svg" alt="" width={60} height={60} />
                    <h5>Videography</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">02</div>
                  </a>
                </div>
                <div className="item">
                  <a href="/services-page">
                    <Image src="/images/icons/icon-3.svg" alt="" width={60} height={60} />
                    <h5>Retouching</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">03</div>
                  </a>
                </div>
                <div className="item">
                  <a href="/services-page">
                    <Image src="/images/icons/icon-4.svg" alt="" width={60} height={60} />
                    <h5>Drone</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">04</div>
                  </a>
                </div>
                <div className="item">
                  <a href="/services-page">
                    <Image src="/images/icons/icon-5.svg" alt="" width={60} height={60} />
                    <h5>Lighting</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">05</div>
                  </a>
                </div>
                <div className="item">
                  <a href="/services-page">
                    <img src="/images/icons/icon-5.svg" alt="" />
                    <h5>Grading</h5>
                    <p>We capture your story with artistic vision and professional precision, turning every moment into timeless visual memories.</p>
                    <div className="numb">06</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process 2 */}
      <section className="interactive process2">
        <div className="process2-content">
          <div className="process2-content-inner">
            <div className="item">
              <div className="inner activate" data-index="0">
                <div className="cont">
                  <div className="text">
                    <h2><Link href="/services">Wedding Photography</Link></h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner" data-index="1">
                <div className="cont">
                  <div className="text">
                    <h2><Link href="/services">Fine Art Photography</Link></h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner" data-index="2">
                <div className="cont">
                  <div className="text">
                    <h2><Link href="/services">Travel &amp; Nature Photography</Link></h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner" data-index="3">
                <div className="cont">
                  <div className="text">
                    <h2><Link href="/services">Fashion Photography</Link></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="process2-list-image">
            <div className="process2-image img-0 show" data-bg="/images/slider/01.jpg" style={{ backgroundImage: "url('/images/slider/01.jpg')" }}></div>
            <div className="process2-image img-1" data-bg="/images/slider/02.jpg" style={{ backgroundImage: "url('/images/slider/02.jpg')" }}></div>
            <div className="process2-image img-2" data-bg="/images/slider/04.jpg" style={{ backgroundImage: "url('/images/slider/04.jpg')" }}></div>
            <div className="process2-image img-3" data-bg="/images/slider/03.jpg" style={{ backgroundImage: "url('/images/slider/03.jpg')" }}></div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="price section-padding">
        <div className="container">
          <div className="row justify-content-center mb-45">
            <div className="col-md-12 text-center">
              <h6 className="wow" data-splitting>Choose the package that fits your story</h6>
              <h1 className="wow" data-splitting>Price plan</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="item">
                <h6>Get a quote</h6>
                <h3>Wedding Package</h3>
                <div className="cont">
                  <ul className="dot-list">
                    <li>Full-day coverage</li>
                    <li>100+ edited photos</li>
                    <li>Premium album</li>
                    <li>Pre-wedding shoot</li>
                    <li>2 photographers</li>
                    <li>Online gallery</li>
                  </ul>
                  <div className="btn-wrap text-left mt-15">
                    <div className="btn-link">
                      <Link href="/contact">Get in touch</Link>
                      <span className="btn-block color1 animation-bounce"></span>
                    </div>
                  </div>
                </div>
                <div className="numb">Wedding</div>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" className="rmore">
                  <div className="arrow"><span>$</span>900</div>
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
            <div className="col-md-4">
              <div className="item">
                <h6>Get a quote</h6>
                <h3>Drone Add-on</h3>
                <div className="cont">
                  <ul className="dot-list">
                    <li>30 min aerial shoot</li>
                    <li>5 edited drone photos</li>
                    <li>4K video clips</li>
                    <li>Insured operator</li>
                    <li>Cinematic flyovers</li>
                    <li>Outdoor ready</li>
                  </ul>
                  <div className="btn-wrap text-left mt-15">
                    <div className="btn-link">
                      <Link href="/contact">Get in touch</Link>
                      <span className="btn-block color1 animation-bounce"></span>
                    </div>
                  </div>
                </div>
                <div className="numb">Drone</div>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" className="rmore active">
                  <div className="arrow"><span>$</span>800</div>
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
            <div className="col-md-4">
              <div className="item">
                <h6>Get a quote</h6>
                <h3>Travel Session</h3>
                <div className="cont">
                  <ul className="dot-list">
                    <li>Outdoor location</li>
                    <li>50 miles travel</li>
                    <li>20 edited photos</li>
                    <li>Mini album</li>
                    <li>2 outfit changes</li>
                    <li>Sunset timing</li>
                  </ul>
                  <div className="btn-wrap text-left mt-15">
                    <div className="btn-link">
                      <Link href="/contact">Get in touch</Link>
                      <span className="btn-block color1 animation-bounce"></span>
                    </div>
                  </div>
                </div>
                <div className="numb">Travel</div>
                <a data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#0" className="rmore">
                  <div className="arrow"><span>$</span>700</div>
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
          </div>
        </div>
      </section>

      {/* Process */}
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
                <div className="process-item wow fadeInLeft" data-wow-delay=".2s">
                  <div className="process-step"><span>01</span></div>
                  <div className="process-content">
                    <h4 className="title">Consult &amp; Plan</h4>
                    <p className="desc">We start by understanding your vision and goals, ensuring every detail is aligned with your expectations for a seamless shoot.</p>
                  </div>
                </div>
                <div className="process-item wow fadeInLeft" data-wow-delay=".4s">
                  <div className="process-step"><span>02</span></div>
                  <div className="process-content">
                    <h4 className="title">Shoot Day</h4>
                    <p className="desc">Our team captures every moment with precision and creativity, turning your special day into timeless memories.</p>
                  </div>
                </div>
                <div className="process-item wow fadeInLeft" data-wow-delay=".6s">
                  <div className="process-step"><span>03</span></div>
                  <div className="process-content">
                    <h4 className="title">Edit &amp; Deliver</h4>
                    <p className="desc">Post-production is handled with care, enhancing each photo to perfection before delivering your final collection promptly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="background bg-img bg-imgfixed section-padding" data-overlay-dark="5" data-background="/images/slider/01.jpg">
          <div className="container">
            <div className="row align-items-center">
              {/* Work together */}
              <div className="col-md-5 mb-30">
                <h4 className="wow" data-splitting>Let&apos;s capture the perfect shots together.</h4>
                <div className="btn-wrap mt-30 text-left wow fadeInUp" data-wow-delay=".6s">
                  <div className="btn-link">
                    <a className="white" href="mailto:hello@gloom.com">hello@gloom.com</a>
                    <span className="btn-block color3 animation-bounce"></span>
                  </div>
                </div>
              </div>
              {/* Testimonials */}
              <div className="col-md-5 offset-md-2">
                <div className="testimonials-box">
                  <h5>What Are Clients Saying?</h5>
                  <div className="owl-carousel owl-theme">
                    <div className="item">
                      <p>Working with Gloom was an unforgettable experience. Their attention to detail and creative vision brought our special day to life in the most beautiful way.</p>
                      <span className="quote"><Image src="/images/quot.png" alt="" width={40} height={40} /></span>
                      <div className="info">
                        <div className="author-img"><Image src="/images/team/1.jpg" alt="" width={80} height={80} /></div>
                        <div className="cont">
                          <h6>Emily Brown</h6>
                          <span>Customer</span>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <p>Working with Gloom was an unforgettable experience. Their attention to detail and creative vision brought our special day to life in the most beautiful way.</p>
                      <span className="quote"><img src="/images/quot.png" alt="" loading="lazy" /></span>
                      <div className="info">
                        <div className="author-img"><Image src="/images/team/2.jpg" alt="" width={80} height={80} /></div>
                        <div className="cont">
                          <h6>Jason White</h6>
                          <span>Customer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling */}
      <div className="scrolling scrolling-ticker">
        <div className="wrapper">
          <div className="content">
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Light</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Lens</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Focus</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Exposure</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Composition</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Shutter</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Aperture</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Contrast</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Frame</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Portrait</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Capture</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Moment</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Perspective</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Emotion</span>
          </div>
          <div className="content">
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Light</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Lens</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Focus</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Exposure</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Composition</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Shutter</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Aperture</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Contrast</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Frame</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Portrait</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Capture</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Moment</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Perspective</span>
            <span><Image src="/images/asterisk-icon.svg" alt="" width={20} height={20} />Emotion</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-12">
              <Link href="/"><Image src="/images/logo-dark.png" alt="Gloom" width={100} height={30} /></Link>
            </div>
            <div className="col-lg-3 col-md-12">
              <h5>Get in touch</h5>
              <p>
                hello@gloom.com<br />
                +1 234-567-8910
              </p>
            </div>
            <div className="col-lg-3 col-md-12">
              <h5>Locations</h5>
              <p>
                San Francisco — California<br />
                Palo Alto — Santa Clara
              </p>
            </div>
            <div className="col-lg-3 col-md-12">
              <ul className="footer-social-link">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                <li><a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-tiktok"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 text-center">
              <p className="mb-0 copyright">© 2026 Gloom is designed by <a href="https://1.envato.market/DuruThemes" target="_blank" rel="noopener noreferrer">DuruThemes</a>.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
