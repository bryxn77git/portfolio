import { useTranslation } from "react-i18next"


export const Project = ({ img, name, text }) => {

    const { t } = useTranslation('global');

  return (
    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center py-5 md:p-0">
        <img src={img} alt={name} className="max-h-[250px] dark:opacity-95" />
        <div className="flex flex-col h-[250px] justify-around">
            <h3 className="text-xl md:text-2xl font-bold">{name}</h3>
            <p>{text}</p>
            <button className="bg-primary text-background w-full hover:opacity-90 py-2 rounded-md transition-all duration-150">{t('projects.button')}</button>
        </div>
    </div>
  )
}
