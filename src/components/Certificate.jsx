import { Link } from "react-router-dom"


export const Certificate = ({ img, title, date, link}) => {
  return (
    <div className="max-w-[280px] w-full bg-background rounded-lg text-background hover:scale-[1.03] hover:opacity-95 transition-all duration-150">

        <Link to={link} target="_blank" className="flex flex-col items-center justify-center">
            <img src={img} alt="" className="my-3 h-20"/>

            <div className="bg-accent w-full flex flex-col pb-3 pt-2 px-3 rounded-b-lg">
                <p className="pr-3 ">{title}</p>
                <p className="self-end text-xs opacity-80">{date}</p>
            </div>
        </Link>

    </div>
  )
}
