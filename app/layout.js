import Footer from '../components/Footer';
import localFont from 'next/font/local';

import './globals.css';

const minFont = localFont({
  src: '../public/fonts/Museo 300.otf',
  variable: '--font-min', // This MUST start with --
});

const disposeFont = localFont({
  src: '../public/fonts/Fairfax.ttf',
  variable: '--font-dispose',
});
/*
  export const metadata = {
    title: 'minDISPOSE',
    description: 'Davao E-Waste Tracker',
  };
  */

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${minFont.variable} ${disposeFont.variable}`}>
      {/* We add the bg color here as a hard fallback */}
      <body className="bg-[#F2E3BB] min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}