import type { Metadata } from "next";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import { Syne, Urbanist } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gloom - Photography Portfolio Template",
  description: "Gloom is a modern and elegant photography portfolio theme designed for creatives, photographers, and visual artists.",
  keywords: "photography, portfolio, gallery, fullscreen, creative, responsive, gloom",
  authors: [{ name: "DuruThemes" }],
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${syne.variable} ${urbanist.variable}`}>
      <head>
        {/* Original Template CSS */}
        <link rel="stylesheet" href="/css/plugins.css" />
        <link rel="stylesheet" href="/css/style.css" />
        {/* Custom Enhancements - Glassmorphism Navbar */}
        <link rel="stylesheet" href="/css/custom-enhancements.css" />
      </head>
      <body suppressHydrationWarning>
        <SmoothScroll>
          {children}
        </SmoothScroll>

        {/* Original Template JavaScript */}
        <Script src="/js/plugins/jquery-3.7.1.min.js" strategy="beforeInteractive" />
        <Script src="/js/plugins/jquery-migrate-3.5.0.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/imagesloaded.pkgd.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/jquery.isotope.v3.0.2.js" strategy="afterInteractive" />
        <Script src="/js/plugins/popper.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/bootstrap.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/YouTubePopUp.js" strategy="afterInteractive" />
        <Script src="/js/plugins/jquery.easing.1.3.js" strategy="afterInteractive" />
        <Script src="/js/plugins/scrollIt.min.js" strategy="afterInteractive" />
        <Script src="/js/plugins/wow.js" strategy="afterInteractive" />
        <Script src="/js/custom.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
