import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { projectsList } from "../data/projectslist";
import { LogoImg } from "./LogoImg";
import { useTranslation } from "react-i18next";


export const ProjectInfo = () => {

    const {pathname} = useLocation()
    const [currentProject, setCurrentProject] = useState()
    const { t } = useTranslation('global');

    useEffect(() => {
        setCurrentProject(projectsList.filter(( project ) => project.slug === pathname.split('/')[3]))
    }, [])
    

    
  return (
    <>
    {
            currentProject && (
                <div className='flex flex-col items-center mt-10 font-poppins text-text'>

                    <div className="flex flex-col gap-5 items-center max-w-4xl">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-5"><span className="text-primary">{"<"}</span>{currentProject[0].title}<span className="text-primary">{" />"}</span></h2>
                        <img src={currentProject[0].img} alt={currentProject[0].title} className="w-[500px]"/>
                        <div className="flex gap-3 justify-center mt-5">
                        <Link to={currentProject[0].link} target="_blank">
                            <button className="bg-secondary text-background w-[175px] hover:opacity-90 py-2 rounded-md transition-all duration-150">Link</button>
                        </Link>
                        <Link to={currentProject[0].repo} target="_blank">
                            <button className="bg-primary text-background w-[175px] hover:opacity-90 py-2 rounded-md transition-all duration-150">Github</button>
                        </Link>
                        </div>
                    </div>

                    <div className="bg-background-complement py-10 px-5 mt-10 w-full flex justify-center">

                        <div className="max-w-4xl flex flex-col gap-5">
                            <p className="text-lg font-bold">Descripcion del proyecto</p>
                            <p>{t(`${currentProject[0].text}`)}</p>
                            <p className="text-lg font-bold">Herramientas usadas</p>

                            <div className="flex self-center">
                                {
                                    currentProject[0].tools.map( ( tool ) => (<LogoImg title={tool.name} img={tool.img}/>))
                                } 

                            </div>

                        </div>



                    </div>
                </div>
            )
        }
        
    </>
  )
}
