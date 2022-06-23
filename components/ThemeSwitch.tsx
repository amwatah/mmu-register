import React from 'react'
type props = {
     toggleFunction : any
}

const ThemeSwitch = ({toggleFunction}:props) => {
  return (
    <div className=' fixed  top-0 right-0 p-1'>
        <input onChange={ toggleFunction }  type="checkbox" className="toggle text-primary"  />
    </div>
  )
}

export default ThemeSwitch