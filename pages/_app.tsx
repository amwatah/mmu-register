import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeSwitch from '../components/ThemeSwitch'
import Navigation from '../components/Navigation'
import { createContext, useState } from 'react'
import Mmu from '../components/Mmu'

//contexts 
type contextTemplate = {
   currentUser?: any
   setCurrentUser: Function
}
export  const GlobalContext = createContext<contextTemplate>({setCurrentUser: ()=>{}})

function MyApp({ Component, pageProps }: AppProps) {
 
  const [currentUser, setCurrentUser] = useState({})
  const [activeTheme, setActiveTheme] = useState("light")
  function toggleTheme(){
     setActiveTheme( activeTheme ==="light" ? "dark" : "light"  )
  }

  return (
     <div data-theme={ activeTheme} className="site min-h-screen w-screen overflow-x-hidden font-sans ">
      <GlobalContext.Provider value={{ setCurrentUser ,currentUser }} >
        <Mmu/>
       <ThemeSwitch toggleFunction={ toggleTheme}/>
       <Component {...pageProps} />
       <Navigation  />

      </GlobalContext.Provider>
    
     </div>
  )
}

export default MyApp
