import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-12">
                        <Link href="/">
                            <Image
                                src="/images/logo-dark.png"
                                alt="Gloom"
                                width={160}
                                height={40}
                            />
                        </Link>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <h5>Get in touch</h5>
                        <p>
                            hello@gloom.com
                            <br />
                            +1 234-567-8910
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <h5>Locations</h5>
                        <p>
                            San Francisco — California
                            <br />
                            Palo Alto — Santa Clara
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-12">
                        <ul className="footer-social-link">
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-x-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-10 text-center">
                        <p className="mb-0 copyright">
                            © 2026 Gloom is designed by{' '}
                            <a href="https://1.envato.market/DuruThemes" target="_blank" rel="noopener noreferrer">
                                DuruThemes
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
