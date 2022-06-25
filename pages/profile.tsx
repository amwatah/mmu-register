import React, { useContext } from 'react'
import { GlobalContext } from './_app'

const Profile = () => {
   const { currentUser } = useContext( GlobalContext)
   
  return (
    <div  className=' w-screen  '>
        <section>
          <div className='flex  justify-between p-2 glass m-1 rounded-md border-2 border-primary '>
             NAME : <span className=' text-primary'>{ currentUser.name}</span>
            </div>
            <div className='flex  justify-between p-2 glass m-1 rounded-md border-2 border-primary '>
             REGISTRATION NUMBER: <span className=' text-primary'>{ currentUser.registration}</span>
            </div> 
            <div className='flex  justify-between p-2 glass m-1 rounded-md border-2 border-primary '>
             EMAIL: <span className=' text-primary'>{ currentUser.email}</span>
            </div> 
            <div className='flex  justify-between p-2 glass m-1 rounded-md border-2 border-primary '>
             EMAIL: <span className=' text-primary'>{ currentUser.phone}</span>
            </div> 
            <div className='flex  justify-between p-2 glass m-1 rounded-md border-2 border-primary '>
              VERIFIED: <span className=' text-primary'>{ currentUser.verified ? <p className=' text-success'>verified</p>: <p className= " text-error">not verfied</p> }</span>
            </div>
          
        </section>
    </div>
  )
}

export default Profile