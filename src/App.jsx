import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
// import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
// import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import Airdrop from './components/Airdrop';
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import ShowSolBalances from './components/ShowSolBalances';
// import fs from "fs"
// import express from "express";
const App = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    // const network = WalletAdapterNetwork.Devnet;

    // // You can also provide a custom RPC endpoint.
    // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    // const wallets = useMemo(
    //     () => [
    //         /**
    //          * Wallets that implement either of these standards will be available automatically.
    //          *
    //          *   - Solana Mobile Stack Mobile Wallet Adapter Protocol
    //          *     (https://github.com/solana-mobile/mobile-wallet-adapter)
    //          *   - Solana Wallet Standard
    //          *     (https://github.com/anza-xyz/wallet-standard)
    //          *
    //          * If you wish to support a wallet that supports neither of those standards,
    //          * instantiate its legacy wallet adapter here. Common legacy adapters can be found
    //          * in the npm package `@solana/wallet-adapter-wallets`.
    //          */
    //         new UnsafeBurnerWalletAdapter(),
    //     ],
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    //     [network]
    // );


    return (
        <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/bRBok_WQTH1a5uRBwem7hn-TD7-rgGJK"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                    { /* Your app's components go here, nested within the context providers. */ }
                    <h1>hey there</h1>
                    <Airdrop/>
                    <ShowSolBalances/>
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
export default App;