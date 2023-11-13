import { useContext, useEffect } from "react"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { UiContext } from "./context/uiContext"
import { About } from "./components/About"

export const App = () => {

  const { theme, toggleChangeTheme  } = useContext(UiContext);

  useEffect(() => {
    toggleChangeTheme( localStorage.getItem('theme') || 'light');
  }, [])
  


  return (
    <div className={`${theme === 'dark' && 'dark'} bg-background`}>
        <Navbar />

        <Home />
        
        <About />
        {/* <div id="projects">Projects</div>
        <div id="contact">Contact</div> */}
    </div>
  )
}
