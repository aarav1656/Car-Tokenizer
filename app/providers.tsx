'use client';

import * as React from 'react';
<<<<<<< HEAD
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { NavBar } from '@components';
=======
>>>>>>> 7572e382f718d2307fe5b497d4dfae8a3042494c
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
  goerli,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

<<<<<<< HEAD
const projectId = '9ade29717bacce559d9a3ec0524c2a2c';
=======
const projectId = 'process.env.YOUR_PROJECT_ID';
>>>>>>> 7572e382f718d2307fe5b497d4dfae8a3042494c

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
<<<<<<< HEAD
        <NavBar/>
=======
>>>>>>> 7572e382f718d2307fe5b497d4dfae8a3042494c
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
