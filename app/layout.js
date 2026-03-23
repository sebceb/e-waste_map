import Footer from '../components/Footer';
import localFont from 'next/font/local';
import './globals.css';

const minFont = localFont({
  src: '../public/fonts/Museo 300.otf',
  variable: '--font-min',
});

const disposeFont = localFont({
  src: '../public/fonts/Fairfax.ttf',
  variable: '--font-dispose',
});

const displayFont = localFont({
  src: '../public/fonts/HelveticaNowDisplay.otf',
  variable:  '--font-text',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${minFont.variable} ${disposeFont.variable} ${displayFont.variable}`}>
      <body className="bg-white min-h-screen flex flex-col font-text">
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}