import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { projectsList } from "../data/projectslist";
import { LogoImg } from "./LogoImg";


export const ProjectInfo = () => {

    const {pathname} = useLocation()
    const [currentProject, setCurrentProject] = useState({})

    useEffect(() => {
        setCurrentProject(projectsList.filter(( project ) => project.slug === pathname.split('/')[2])[0]);
    }, [])
    

    
  return (
    <>
        {
            currentProject && (
                <div className='flex flex-col items-center py-10 font-poppins'>

                    <div className="flex flex-col gap-5 items-center max-w-4xl">
                        <h2 className="text-2xl md:text-4xl font-extrabold mb-5"><span className="text-primary">{"<"}</span>{currentProject.title}<span className="text-primary">{" />"}</span></h2>
                        <img src={currentProject.img} alt={currentProject.title} className="w-[500px]"/>
                        <div className="flex gap-3 justify-center">
                        <Link to={currentProject.link} target="_blank">
                            <button className="bg-secondary text-background w-[175px] hover:opacity-90 py-2 rounded-md transition-all duration-150">Link</button>
                        </Link>
                        <Link to={currentProject.repo} target="_blank">
                            <button className="bg-primary text-background w-[175px] hover:opacity-90 py-2 rounded-md transition-all duration-150">Github</button>
                        </Link>
                        </div>
                    </div>

                    <div className="bg-background-complement p-5 w-full">

                        <div className="max-w-4xl flex flex-col gap-5">
                            <p>Descripcion del proyecto</p>
                            <p>{currentProject.text}</p>
                            <p>Herramientas usadas</p>

                            <div className="flex self-center">
                                {
                                    currentProject.tools.map( ( tool ) => (<LogoImg title={tool.name} img={tool.img}/>))
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
