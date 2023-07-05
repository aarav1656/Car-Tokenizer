import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        {/* <ConnectButton /> */}
        {/* <NavBar /> */}
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
