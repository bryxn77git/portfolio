import { useContext, useState  } from "react"
import { useTranslation } from "react-i18next";
import { Bars3Icon, MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { LangDropbox } from "./LangDropbox";
import { SocialIcons } from "./SocialIcons";
import { DrawerMenu } from "./DrawerMenu";
import { UiContext } from "../context/uiContext";


export const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);
    const { theme, toggleChangeTheme } = useContext(UiContext);
    
    const [t, i18n] = useTranslation("global");

  return (  
    <section className={`flex justify-between items-center px-5 py-3  bg-background shadow-md`}>
        
       <nav className="hidden md:block w-full">
            <ul className="flex gap-6 font-poppins font-semibold text-text">
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer underline decoration-secondary decoration-4">
                <a href="#home">{t("navBar.home")}</a>
              </li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">
                <a href="#about">{t("navBar.about")}</a>
              </li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">
                <a href="#projects">{t("navBar.projects")}</a>
              </li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">
                <a href="#contact">{t("navBar.contact")}</a>
              </li>  
            </ul>
       </nav>

        <button onClick={() => setShowSidebar(true)}>
          <Bars3Icon className="h-10 text-accent hover:text-secondary transition-all duration-150 md:hidden"/>
        </button>

       <div className="flex w-full justify-end items-center gap-3 text-accent">

          <SocialIcons onNavBar={true} />

          <button>
            {
              theme === 'light' ? (
                  <MoonIcon className="h-8 hover:text-secondary transition-all duration-150" onClick={() => toggleChangeTheme('dark')}/>
                ) : (
                  <SunIcon className="h-8 hover:text-secondary transition-all duration-150" onClick={() => toggleChangeTheme('light')}/>
              )
            }
          </button>

          <LangDropbox />

        </div>
       <div>

       </div>

       {/* <div className={drawerMenu ? 'block' : 'hidden'}> */}
        <DrawerMenu showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
       {/* </div> */}       

    </section>
  )
}
