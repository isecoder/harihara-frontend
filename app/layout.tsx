// app/layout.tsx
"use client";

import Script from "next/script";
import { Provider } from "react-redux";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import store from "./store";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

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

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <head>
        {/* Google Analytics script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
=======
      <Head>
        <title>Shri Harihareshwara Temple, Hariharapallathadka</title>
        <meta
          name="description"
          content="Explore the spiritual heritage of Shri Harihareshwara Temple in Hariharapallathadka, Karnataka. Discover its rich history, unique architecture, and religious significance."
        />
        <meta name="keywords" content="Shri Harihareshwara Temple, Hariharapallathadka, Karnataka temples, Lord Harihara, Vishnu and Shiva, Hindu pilgrimage, Triveni Sangam" />
        <meta property="og:title" content="Shri Harihareshwara Temple, Hariharapallathadka" />
        <meta property="og:description" content="Discover the divine amalgamation of Lord Vishnu and Lord Shiva at Shri Harihareshwara Temple in Hariharapallathadka, Karnataka." />
        <meta property="og:url" content="https://www.shriharihareshwara.org" />
        <meta property="og:site_name" content="Shri Harihareshwara Temple" />
        <meta property="og:image" content="/logo.jpg" />
        <link rel="icon" href="/logo.jpg" sizes="48x48" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="icon" type="image/png" href="/logo.jpg" />
        {/* Optionally add a fallback for .ico */}
        <link rel="shortcut icon" href="/logo.jpg" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
>>>>>>> ba01dcf7341f50d59a029739b3a8b1ccf8e74608
        <Provider store={store}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
