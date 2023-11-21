import { Project } from "./Project"
import segycomNextjs from "../assets/segycom_nextjs_project.png";
import nextStore from "../assets/nextstore_project.png";
import portfolio from "../assets/portfolio_project.png";
import segycomReactjs from "../assets/segycom_reactjs_project.png";
import { useTranslation } from "react-i18next";


export const Projects = () => {

    const { t } = useTranslation('global');

  return (
    <section id="projects" className='py-5 md:py-10 text-text font-poppins flex flex-col items-center px-5 lg:px-1'>

        <div className="flex justify-center">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-10 md:mb-20"><span className="text-primary">{"<"}</span>{t('projects.title')}<span className="text-primary">{" />"}</span></h2>
        </div>

        
        <div className="flex flex-col items-center max-w-4xl gap-14 ">
            <Project name={t('projects.project1Name')} img={segycomNextjs} text={t('projects.project1Description')} />
            <Project name={t('projects.project2Name')} img={nextStore} text={t('projects.project2Description')} />
            <Project name={t('projects.project3Name')} img={portfolio} text={t('projects.project3Description')} />
            <Project name={t('projects.project4Name')} img={segycomReactjs} text={t('projects.project4Description')} />
        </div>

    </section>
  )
}
