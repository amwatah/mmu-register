 import { useRouter } from 'next/router'
import React from 'react'
 
 const Mmu = () => {
  const router = useRouter()
   return (
     <div onClick={ ()=> router.push("/")} className=' font-bold p-2    text-blue-800'>MMU</div>
   )
 }
 
 export default Mmu