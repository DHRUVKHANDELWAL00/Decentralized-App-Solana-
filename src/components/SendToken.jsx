import React,{useState,useEffect} from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction} from "@solana/web3.js";

const SendToken = () => {
    const [amountt,setAmount]=useState(0)
    const [rKey,setRKey]=useState('')
    const {connection}=useConnection();
    const wallet=useWallet()
    // // console.log(wallet.publicKey)
    // const getBalance=async()=>{
    //     // const publicKey = await wallet.publicKey
    //     // console.log(publicKey)
    //     // const publicKey=
    //     // console.log(await connection.getBalance(wallet.publicKey))
    //     const balance=await connection.getBalance(wallet.publicKey) || 0
    //     setAmount(balance/10**9)
    // }
    // // useEffect(()=>{
    //    getBalance()
    // // },[])
    const handleChange=(e)=>{
      console.log(e.target.value)
      setRKey(e.target.value);
    }
    const handleClick=async()=>{
      let amount=amountt;
      let to=rKey;
      console.log(amount,to)
      const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));
        console.log(transaction)

        await wallet.sendTransaction(transaction, connection);
        alert("Sent " + amount + " SOL to " + to);
    }
  return (
    <div className='flex flex-row gap-6 my-10'>
      <input type="text" placeholder="Enter Recievers Address" onChange={handleChange} className="input input-bordered input-primary w-full max-w-xs" ></input>
      <input type="text" placeholder="Enter Amount" onChange={(e)=>setAmount(e.target.value)} className="input input-bordered input-primary w-full max-w-xs" ></input>
      <button onClick={handleClick} className="btn btn-outline btn-primary">Send</button>
    </div>
  )
}

export default SendToken