import { SocialIcons } from "./SocialIcons"
import portraitImg from "../assets/portrait.webp";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Home = () => {

  const { t, i18n } = useTranslation('global');

  const scrollToElement = ( element ) => {
    const elementoDestino = document.getElementById(element);

    elementoDestino.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="flex items-center flex-col py-10 md:py-16  text-text font-poppins px-5 lg:px-1">
        
        <div className="text-center flex flex-col gap-2 mb-48">
            <p className="text-xl md:text-2xl font-medium">{t("home.hi")}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold"><span className="text-primary">{"<"}</span>{t("home.name")}<span className="text-primary">{" />"}</span></h1>
            <p className="text-xl md:text-2xl font-medium">{t("home.career")}</p>
        </div>


        <div className="bg-background-complement w-full h-[380PX] z-0 flex flex-col items-center">

            <img src={portraitImg} alt="Portrait" className="w-[280px] rounded-full ring-[20px] ring-background-complement mb-12 z-10 relative -top-32"/>

            <div className="relative -top-32 flex gap-3 mb-10 text-background font-medium">
                <Link to="#projects" onClick={() => scrollToElement("projects")}>
                    <button className="bg-primary hover:opacity-90 w-[162px] py-2 rounded-md transition-all duration-150">{t("home.projectsButton")}</button>
                </Link>
                <Link to="https://drive.google.com/file/d/1y8U7VPwop5kh1TkhQ4wAiVpVxmiJgFMp/view?usp=sharing" target="_blank">
                  <button className="bg-secondary hover:opacity-90 w-[162px] py-2 rounded-md transition-all duration-150">{t("home.cvButton")}</button>
                </Link>
                
            </div>

            <div className="flex relative -top-32 gap-2">
                <SocialIcons/>

            </div>

        </div>




    </section>
  )
}
