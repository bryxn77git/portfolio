import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import { SocialIcons } from "./SocialIcons"
import { ContactForm } from "./ContactForm"
import { useTranslation } from "react-i18next"



export const Contact = () => {

  const { t } = useTranslation('global');

  return (
    <section id="contact" className="bg-background-complement flex justify-center font-poppins text-text px-5 lg:px-1 py-5 md:pt-10 pb-20">

        <div className="max-w-4xl flex flex-col items-center gap-5 md:pt-10">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-5 md:mb-10"><span className="text-primary">{"<"}</span>{t('contact.title')}<span className="text-primary">{" />"}</span></h2>
            <p>{t('contact.text')}</p>

            <div className="self-start font-semibold">
                <div className="flex gap-3 items-center mb-1">
                    <EnvelopeIcon className="h-6 text-secondary" />
                    <p>bryxn.alex77@gmail.com</p>
                </div>
                <div className="flex gap-3 items-center">
                    <PhoneIcon className="h-6 text-secondary" />
                    <p>+52 614 487 0994</p>
                </div>
            </div>
            
            <div className="flex gap-3 mb-5">
                <SocialIcons />
            </div>

            <ContactForm />

        </div>



    </section>
  )
}
