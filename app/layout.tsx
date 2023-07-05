import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

import { Footer, NavBar } from "@components";
import '@rainbow-me/rainbowkit/styles.css';


export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
