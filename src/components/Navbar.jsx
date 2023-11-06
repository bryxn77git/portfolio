import { useState  } from "react"
import { useTranslation } from "react-i18next";
import { Bars3Icon, MoonIcon } from '@heroicons/react/24/solid'
import { LangDropbox } from "./LangDropbox";
import { SocialIcons } from "./SocialIcons";
import { DrawerMenu } from "./DrawerMenu";


export const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false)
    
    const [t, i18n] = useTranslation("global");

  return (  
    <section className={`${ darkMode && 'dark'} flex justify-between items-center px-5 py-3  bg-background shadow-md`}>
        
       <nav className="hidden md:block w-full">
            <ul className="flex gap-6 font-poppins font-semibold text-text">
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer underline decoration-secondary decoration-4">{t("navBar.home")}</li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">{t("navBar.about")}</li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">{t("navBar.projects")}</li>
              <li className="hover:text-secondary transition-all duration-150 cursor-pointer">{t("navBar.contact")}</li>  
            </ul>
       </nav>

        <button onClick={() => setShowSidebar(true)}>
          <Bars3Icon className="h-10 text-accent hover:text-secondary transition-all duration-150 md:hidden"/>
        </button>

       <div className="flex w-full justify-end items-center gap-3 text-accent">

          <SocialIcons />

          <button>
            <MoonIcon className="h-8 hover:text-secondary transition-all duration-150"/>
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
