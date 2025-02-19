/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";

const Mordred = localFont({
  variable: "Mordred",
  src: "./fonts/Mordred.ttf",
  fontWeight: 400,
});
const strandall = localFont({
  variable: "strandall",
  src: "./fonts/strandall.ttf",
  fontWeight: 400,
});
const Gatterys = localFont({
  variable: "Gatterys",
  src: "./fonts/Gatterys.ttf",
  fontWeight: 400,
});
const inkwell = localFont({
  variable: "inkwell",
  src: "./fonts/inkwell-scribe.otf",
  fontWeight: 400,
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Electrothon 7.0",
  description: "As foretold in ancient scrolls, this era of Electrothon gathers the most skilled craftsmen and visionaries. To harness the unknown and forge it into reality is no less than a Herculean feat. Yet, with the seventh tournament of Electrothon upon us, we march into this noble colosseum with unwavering resolve. Under the banner of the SPEC guild at NIT Hamirpur, Electrothon has captivated thousands of aspiring artisans.Those who have journeyed through its gates left no stone unturned, ensuring their craft etched a legacy upon these storied grounds. The Hall of Forges pulses with the fervor of Electrothon, ready to rise to new heights this winter as we once again summon the next generation of creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Electrothon 7.0 - NITH</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="Electrothon, Hackathon, SPEC NITH, NIT Hamirpur, Coding, Innovation, Electrothon 7.0, SPEC" />
        <meta name="author" content="Team SPEC" />
        <meta property="og:title" content="Electrothon 7.0 - Colosseum of Code" />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://electrothon.nith.ac.in/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Electrothon 7.0 - NITH" />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Electrothon 7.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jacques+Francois&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Afacad&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link href="https://fonts.googleapis.com/css2?family=Macondo+Swash+Caps&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Island+Moments&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Abhaya+Libre&display=swap" rel="stylesheet" />
        {children}
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </body>
    </html>
  );
}
