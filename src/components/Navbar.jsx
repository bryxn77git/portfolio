import { useState } from "react"
import { useTranslation } from "react-i18next";
import { Bars3Icon, MoonIcon } from '@heroicons/react/24/solid'
import { LangDropbox } from "./LangDropbox";


export const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    
    const [t, i18n] = useTranslation("global");

   
    

  return (  
    <section className={`${ darkMode && 'dark'} flex justify-between items-center px-5 py-3  bg-background shadow-md`}>
        
       <nav className="hidden md:block">
            <ul>{t("navBar.home")}</ul>
            <ul>{t("navBar.about")}</ul>
            <ul>{t("navBar.projects")}</ul>
            <ul>{t("navBar.contact")}</ul>  
       </nav>

        <button>
          <Bars3Icon className="h-10 text-accent hover:text-secondary transition-all duration-150"/>
        </button>

       <div className="flex w-full justify-end items-center gap-3 text-accent">
          <button>
            <MoonIcon className="h-8 hover:text-secondary transition-all duration-150"/>
          </button>

          <LangDropbox />

         

        </div>
       <div>

       </div>

    </section>
  )
}
