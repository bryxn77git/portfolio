import { ArrowSmallUpIcon, ArrowUpCircleIcon, ArrowUpIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'

export const ButtonToTop = () => {

    const [isVisible, setIsVisible] = useState(true);

    const scrollToElement = () => {
        const elementoDestino = document.getElementById("top");
  
        elementoDestino.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
        // Obtén la posición actual del scroll
        const scrollPosition = window.scrollY || document.documentElement.scrollTop;

        // Define el umbral en el que deseas ocultar el elemento (por ejemplo, 100px)
        const threshold = 100;

        // Actualiza el estado basado en la posición del scroll
        setIsVisible(scrollPosition < threshold);
        };

        // Agrega un listener de scroll cuando el componente está montado
        window.addEventListener('scroll', handleScroll);

        // Limpia el listener cuando el componente se desmonta
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente


  return (
    <div className={`p-3 cursor-pointer fixed bg-secondary h-12 w-12 bottom-10 right-10 rounded-full flex justify-center items-center opacity-80 ${ !isVisible ? 'block' : 'hidden'}`}
        onClick={ scrollToElement }
    >
        <ArrowSmallUpIcon  className='text-background' />
    </div>
  )
}
