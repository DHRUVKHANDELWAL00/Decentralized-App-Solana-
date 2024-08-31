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
    <div className='flex flex-row gap-6 my-10'>
        <input type="text" placeholder="Amount" className="input input-bordered input-primary w-full max-w-xs" ></input>
        <button onClick={sendAirdrop} className="btn btn-outline btn-primary">Send Airdrop</button>
    </div>

  )
}

export default Airdrop