import React,{useState,useEffect} from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

const ShowSolBalances = () => {
    const [amount,setAmount]=useState(0)
    const {connection}=useConnection();
    const wallet=useWallet()
    // console.log(wallet.publicKey)
    const getBalance=async()=>{
        // const publicKey = await wallet.publicKey
        // console.log(publicKey)
        // const publicKey=
        // console.log(await connection.getBalance(wallet.publicKey))
        const balance=await connection.getBalance(wallet.publicKey) || 0
        setAmount(balance/10**9)
    }
    // useEffect(()=>{
      //  getBalance()
    // },[])
  return (
    <div  className='flex flex-row gap-6 my-10'>
      <button onClick={getBalance} className="btn btn-outline btn-primary">Show Balance</button>
        <h1>{amount || 0}</h1>
    </div>
  )
}

export default ShowSolBalances