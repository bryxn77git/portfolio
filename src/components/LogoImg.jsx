

export const LogoImg = ({ sizeLarge = false, img, title }) => {

  return (
    <div className={`bg-background-complement flex justify-center items-center p-2 rounded-xl ${ sizeLarge ? 'w-20 h-20 md:w-24 md:h-24' : 'w-14 h-14 md:w-16 md:h-16'}`}>
        <img className='h-full w-auto' src={img} alt={title} />
    </div>
  )
}
