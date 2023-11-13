import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar"

export const App = () => {

  return (
    <>
        <Navbar />

        <Home />
        <div id="about">About</div>
        <div id="projects">Projects</div>
        <div id="contact">Contact</div>
    </>
  )
}
