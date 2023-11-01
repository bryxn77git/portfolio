import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid'

export const LangDropbox = () => {

  const [langEs, setLangEs] = useState(false);
  const handleChangeLang = (lang) => {
        if(lang === 'es'){
          setLangEs(true);
        }else{
          setLangEs(false)

        }
    }


  return (
    <div class="dropdown">
    <div>
      <button type="button" class="transition-all duration-150 h-[32px] flex justify-center items-center gap-x-1.5 rounded-md bg-white px-2 text-md font-semibold ring-1 ring-accent hover:ring-secondary hover:text-secondary" >
        {
          langEs ? 'ES' : 'EN'
        }
        <ChevronDownIcon class="h-4 w-4"/>
      </button>
    </div>

    <div class="dropdown-menu hidden opacity-100 absolute z-10 rounded-md bg-background shadow-lg ring-1 ring-accent ring-opacity-5">
      <div class="py-1">
        <button class="transition-all duration-150 hover:text-secondary block px-4 py-1 text-md font-semibold" onClick={ () => handleChangeLang('en') }>EN</button>
        <hr className="opacity-10"></hr>
        <button class="transition-all duration-150 hover:text-secondary block px-4 py-1 text-md font-semibold" onClick={ () => handleChangeLang('es') }>ES</button>
      </div>
    </div>
  </div>
  )
}
