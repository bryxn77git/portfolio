import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { SocialIcons } from "./SocialIcons"


export const Footer = () => {
  return (
    <footer className="bg-text w-full py-14 text-background flex flex-col items-center gap-8 "> 
        <div className="font-semibold flex flex-col md:flex-row items-center gap-1 md:gap-10">
            <div className="flex gap-3 items-center mb-1">
                <EnvelopeIcon className="h-6 text-secondary" />
                <p>bryxn.alex77@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
                <PhoneIcon className="h-6 text-secondary" />
                <p>+52 614 487 0994</p>
            </div>
        </div>
        

        <div className="divide-y divide-background-complement flex flex-col items-center gap-8 w-full ">

        <div className="flex gap-3">
            <SocialIcons />
        </div>

        <p className="font-light pt-5">Made by <span className="font-bold underline">Bryan Balderrama</span></p>
        </div>

    </footer>
  )
}
