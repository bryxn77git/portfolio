import { useTranslation } from "react-i18next";
import { XMarkIcon } from "@heroicons/react/24/solid";


export const DrawerMenu = ( props ) => {

    const { showSidebar, setShowSidebar} = props;
    const [t, i18n] = useTranslation("global");

    
  return (
    <>
        <div  className={`top-0 left-0 min-w-[250px] bg-background py-3 px-5  text-text fixed h-full z-40 ease-in-out duration-300 ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}>          

            <ul className="flex flex-col gap-3 font-poppins font-semibold">
                <button onClick={() => setShowSidebar(false)} className="self-end">
                    <XMarkIcon className="h-10 text-accent"/>
                </button>
                <hr className="opacity-10"/>
                <li className="pl-5 underline decoration-secondary decoration-4 cursor-pointer">{t("navBar.home")}</li>
                <hr className="opacity-10"/>
                <li className="pl-5 cursor-pointer">{t("navBar.about")}</li>
                <hr className="opacity-10"/>
                <li className="pl-5 cursor-pointer">{t("navBar.projects")}</li>
                <hr className="opacity-10"/>
                <li className="pl-5 cursor-pointer">{t("navBar.contact")}</li> 
                <hr className="opacity-10"/>
            </ul>

        </div>

        <div className={`bg-text w-screen h-screen z-20 left-0 right-0 top-0 bottom-0 opacity-5 ${showSidebar ? "absolute" : "hidden"}`}
            onClick={() => setShowSidebar(false)}
        >
        </div>
    </>
  )
}
