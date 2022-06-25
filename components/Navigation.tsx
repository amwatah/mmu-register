import { useRouter } from 'next/router'
import React from 'react'
import { Icon } from '@iconify/react';


const Navigation = ( ) => {
  const router = useRouter()

  return (
    <section className='nav h-[10vh] fixed bottom-0 w-full flex justify-evenly  items-center'>
       <button onClick={ ()=> router.push( "/profile")} className='flex flex-col items-center'>
       <Icon icon="icomoon-free:profile" className='text-2xl' />
       <p className=' text-xs font-bold'>Profile</p>
       </button>
       <button onClick={ ()=> router.push("/classes")} className='flex flex-col items-center'>
       <Icon icon="mdi:chair-school"  className=' text-2xl '/> 
       <p className=' text-xs font-bold'>Classes</p>
       </button>
       <button onClick={ ()=> router.push( "/admin")} className='flex flex-col items-center'>
       <Icon icon="ri:admin-fill" className=' text-2xl '/> 
       <p className=' text-xs font-bold'>Admin</p>
       </button>

         
    </section>
  )
}

export default Navigation