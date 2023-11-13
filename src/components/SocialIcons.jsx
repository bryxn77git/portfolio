import { SocialIcon } from "react-social-icons";

export const SocialIcons = ( props ) => {

  const { onNavBar } = props;

  return (
    <>
        <div className={`${ onNavBar ? "hidden" : "block"} sm:block`}>
            <SocialIcon className="logos" target="_blank" url="https://github.com/bryxn77git" style={{ height: onNavBar ? 27 : 40, width: onNavBar ? 27 : 40 }} />
        </div>
        <div className={`${ onNavBar ? "hidden" : "block"} sm:block`}>
            <SocialIcon className="logos" target="_blank" url="https://www.linkedin.com/in/bryan-balderrama-tarango/" style={{ height: onNavBar ? 27 : 40, width: onNavBar ? 27 : 40 }}/>
        </div>
        <div className={`${ onNavBar ? "hidden" : "block"} sm:block`}>
            <SocialIcon className="logos" target="_blank" url="https://api.whatsapp.com/send?phone=526144870994" style={{ height: onNavBar ? 27 : 40, width: onNavBar ? 27 : 40 }}/>
        </div>
    </>
  )
}
