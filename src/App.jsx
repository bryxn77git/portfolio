import { useContext, useEffect } from "react"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { UiContext } from "./context/uiContext"
import { About } from "./components/About"
import { Projects } from "./components/Projects"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { ButtonToTop } from "./components/ButtonToTop"
import { Route, Routes } from "react-router-dom"
import { ProjectInfo } from "./components/ProjectInfo"

export const App = () => {

  const { theme, toggleChangeTheme  } = useContext(UiContext);

  useEffect(() => {
    toggleChangeTheme( localStorage.getItem('theme') || 'light');
  }, [])
  


  return (
    <div className={`${theme === 'dark' && 'dark'} bg-background`} id="top">
        <Navbar />

        <Routes>
          <Route path="portfolio" element={
          <>
             <Home />
        
             <About />
     
             <Projects />
             
             <Contact />
          </>
          } />
          <Route path="portfolio/project/:projectSlug" element={<ProjectInfo />} />
        </Routes>

        <Footer />

        <ButtonToTop />

    </div>
  )
}
