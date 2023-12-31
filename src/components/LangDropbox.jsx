import { useContext, useEffect, useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { UiContext } from "../context/uiContext/UiContext";

export const LangDropbox = () => {

  const { lang, toggleChangeLang } = useContext(UiContext);

  useEffect(() => {
    toggleChangeLang(localStorage.getItem('lang') || 'es')
  }, [])

  return (
    <div className="dropdown font-poppins font-semibold text-md">
    <div>
      <button type="button" className="my-1 transition-all duration-150 h-[32px] flex justify-center items-center gap-x-1.5 rounded-md bg-white px-2 ring-1 ring-accent hover:ring-secondary hover:text-secondary" >
          { lang.toUpperCase() }
        <ChevronDownIcon className="h-4 w-4"/>
      </button>
    </div>

    <div className="dropdown-menu hidden opacity-100 absolute z-10 rounded-md bg-background shadow-lg ring-1 ring-accent ring-opacity-5">
      <div className="py-1">
        <button className="transition-all duration-150 hover:text-secondary block px-4 py-1" onClick={ () => toggleChangeLang('en') }>EN</button>
        <hr className="opacity-10"></hr>
        <button className="transition-all duration-150 hover:text-secondary block px-4 py-1" onClick={ () => toggleChangeLang('es') }>ES</button>
      </div>
    </div>
  </div>
  )
}
