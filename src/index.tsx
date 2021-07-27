import * as React from 'react'
import { useState, useEffect } from "react";
import styles from './styles.module.css'
import { Sdk, MetaMaskWalletProvider } from 'etherspot'
import { ethers } from 'ethers'

interface Props {
  text: string
}
declare let window: any;
export const ExampleComponent = ({ text }: Props) => {
  let sdk: Sdk
  const [val, setVal] = useState(0)
  const [chainId] = useState(-1)
  const [account, setAccount] = useState('👻');

  useEffect(() => {
    if (!MetaMaskWalletProvider.detect()) {
      alert('Please install metamask first.')
    } else {
      (async function run() {
        if (window) {
          const walletProvider = await MetaMaskWalletProvider.connect();
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          console.log(signer)
          const addr = await signer.getAddress()
          console.log(addr)
          console.log('AAAAxxx.signer ', signer)
          sdk = new Sdk(walletProvider)
          const output = await sdk.syncAccount();
          console.log('account', output);
          setAccount(output.address)
         
        }
      })();
    }
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((v: number) => v + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <div className={styles.test}>
    👑 Ethereum: {text} {val} {account} chainId: 0x{chainId}
  </div>
}

