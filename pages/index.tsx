import React from 'react'
import StudentRegisterForm from '../components/StudentRegisterForm'

const Home = () => {
  return (
  
    <div className='page  p-1  pt-[5vh] flex flex-col items-center '>
      <h1 className=' font-bold'>BCT 2313 </h1>
      <h1 className=' font-bold'>BCT 2313 FORMAL SOFTWARE SPECIFICATION METHODS</h1>
      <h1 className=' font-bold'>CLASS REGISTER</h1>
      <section>
         <StudentRegisterForm/>
      </section>
    </div>
  )
}

export default Home