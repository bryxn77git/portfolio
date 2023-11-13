import { useContext } from "react"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"
import { UiContext } from "./context/uiContext"

export const App = () => {

  const { theme } = useContext(UiContext);

  return (
    <div className={`${theme === 'dark' && 'dark'} bg-background`}>
        <Navbar />

        <Home />
        <div id="about">About</div>
        <div id="projects">Projects</div>
        <div id="contact">Contact</div>
    </div>
  )
}
