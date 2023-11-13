import { SocialIcons } from "./SocialIcons"
import portraitImg from "../assets/portrait.webp";

export const Home = () => {
  return (
    <section className="flex items-center flex-col py-10 md:py-16  text-text font-poppins">
        
        <div className="text-center flex flex-col gap-2 mb-48">
            <p className="text-xl md:text-2xl font-medium">¡Hola! Soy</p>
            <h1 className="text-3xl md:text-5xl font-extrabold"><span className="text-primary">{"<"}</span>{`Bryan Balderrama `}<span className="text-primary">{"/>"}</span></h1>
            <p className="text-xl md:text-2xl font-medium">Ingeniero de software</p>
        </div>


        <div className="bg-background-complement w-full h-[380PX] z-0 flex flex-col items-center">

            <img src={portraitImg} alt="Portrait" className="w-[280px] rounded-full ring-[20px] ring-background-complement mb-12 z-10 relative -top-32"/>

            <div className="relative -top-32 flex gap-3 mb-10 text-background font-medium">
                <button className="bg-primary w-[162px] py-2 rounded-md">PROJECTOS</button>
                <button className="bg-secondary w-[162px] py-2 rounded-md">CV</button>

            </div>

            <div className="flex relative -top-32 gap-2">
                <SocialIcons/>

            </div>

        </div>




    </section>
  )
}
