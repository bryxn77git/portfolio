import { Project } from "./Project"
import segycomNextjs from "../assets/segycom_nextjs_project.png";
import nextStore from "../assets/nextstore_project.png";
import portfolio from "../assets/portfolio_project.png";
import segycomReactjs from "../assets/segycom_reactjs_project.png";
import { useTranslation } from "react-i18next";
import { projectsList } from "../data/projectslist";


export const Projects = () => {

    const { t } = useTranslation('global');

  return (
    <section id="projects" className='py-5 md:pt-10 md:pb-20 text-text font-poppins flex flex-col items-center px-5 lg:px-1'>

        <div className="flex justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 md:mb-20"><span className="text-primary">{"<"}</span>{t('projects.title')}<span className="text-primary">{" />"}</span></h2>
        </div>

        
        <div className="flex flex-col items-center max-w-4xl gap-14 ">
          {
            projectsList.map( ( project ) => <Project name={project.title} img={project.img} text={t(project.text)} key={project.title} slug={project.slug} />)
          }
            
            
        </div>

    </section>
  )
}
