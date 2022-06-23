import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ThemeSwitch from '../components/ThemeSwitch'
import Navigation from '../components/Navigation'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState("light")
  function toggleTheme(){
     setActiveTheme( activeTheme ==="light" ? "dark" : "light"  )
  }

  return (
     <div data-theme={ activeTheme} className="site min-h-screen w-screen overflow-x-hidden font-sans ">
       <ThemeSwitch toggleFunction={ toggleTheme}/>
       <Component {...pageProps} />
       <Navigation  />
     </div>
  )
}

export default MyApp
