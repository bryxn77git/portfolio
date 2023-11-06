import { SocialIcon } from "react-social-icons";

export const SocialIcons = () => {
  return (
    <>
        <div className="hidden sm:block">
            <SocialIcon className="logos" target="_blank" url="https://github.com/bryxn77git" style={{ height: 27, width: 27 }} />
        </div>
        <div className="hidden sm:block">
            <SocialIcon className="logos" target="_blank" url="https://www.linkedin.com/in/bryan-balderrama-tarango/" style={{ height: 27, width: 27 }}/>
        </div>
        <div className="hidden sm:block">
            <SocialIcon className="logos" target="_blank" url="https://api.whatsapp.com/send?phone=526144870994" style={{ height: 27, width: 27 }}/>
        </div>
    </>
  )
}
