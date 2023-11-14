import { SocialIcons } from "./SocialIcons"
import portraitImg from "../assets/portrait.webp";
import { useTranslation } from "react-i18next";

export const Home = () => {

  const { t, i18n } = useTranslation('global');

  return (
    <section  id="home" className="flex items-center flex-col py-10 md:py-16  text-text font-poppins">
        
        <div className="text-center flex flex-col gap-2 mb-48">
            <p className="text-xl md:text-2xl font-medium">{t("home.hi")}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold"><span className="text-primary">{"<"}</span>{t("home.name")}<span className="text-primary">{" />"}</span></h1>
            <p className="text-xl md:text-2xl font-medium">{t("home.career")}</p>
        </div>


        <div className="bg-background-complement w-full h-[380PX] z-0 flex flex-col items-center">

            <img src={portraitImg} alt="Portrait" className="w-[280px] rounded-full ring-[20px] ring-background-complement mb-12 z-10 relative -top-32"/>

            <div className="relative -top-32 flex gap-3 mb-10 text-background font-medium">
                <button className="bg-primary hover:opacity-90 w-[162px] py-2 rounded-md transition-all duration-150">{t("home.projectsButton")}</button>
                <button className="bg-secondary hover:opacity-90 w-[162px] py-2 rounded-md transition-all duration-150">{t("home.cvButton")}</button>

            </div>

            <div className="flex relative -top-32 gap-2">
                <SocialIcons/>

            </div>

        </div>




    </section>
  )
}
