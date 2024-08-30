import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import React, { useState } from 'react'
// import 
const Airdrop = () => {
    // const [connection,newConnection]=useState('');
    const {connection}=useConnection()
    const wallet=useWallet()
    // alert(wallet.publicKey.toString())
    const sendAirdrop=async()=>{
        await connection.requestAirdrop(wallet.publicKey,1000000000);
        alert('solana transferred airdrop')
    }
  return (
    <div>
        <input type="text" placeholder="Amount"></input>
        <button onClick={sendAirdrop}>Send Airdrop</button>
    </div>

  )
}

export default Airdrop