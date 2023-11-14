import { useTranslation } from 'react-i18next'
import cssLogo from '../assets/icons/css.png'
import expressLogo from '../assets/icons/express.png'
import gitLogo from '../assets/icons/git.png'
import githubLogo from '../assets/icons/github.png'
import graphqlLogo from '../assets/icons/graphql.png'
import htmlLogo from '../assets/icons/html.png'
import javascriptLogo from '../assets/icons/javascript.png'
import jestLogo from '../assets/icons/jest.png'
import mongodbLogo from '../assets/icons/mongodb.png'
import muiLogo from '../assets/icons/mui.png'
import nextjsLogo from '../assets/icons/nextjs.png'
import nodejsLogo from '../assets/icons/nodejs.png'
import postgressLogo from '../assets/icons/postgress.png'
import postmanLogo from '../assets/icons/postman.png'
import reactjsLogo from '../assets/icons/reactjs.png'
import tailwindLogo from '../assets/icons/tailwind.png'
import typescriptLogo from '../assets/icons/typescript.png'
import vscodeLogo from '../assets/icons/vscode.png'
import { LogoImg } from './LogoImg'
import { Certificate } from './Certificate'

import itjCertificate from "../assets/itj_certificate.png";
import udemyCertificate from "../assets/udemy_certificate.png";


export const About = () => {

   const { t } = useTranslation('global')

  return (
    <section id="about" className='py-5 md:py-10 text-text font-poppins '>
        
        <div className='max-w-4xl mx-auto flex items-center gap-5 flex-col px-5 lg:px-1'>
          <h2 className="text-2xl md:text-4xl font-extrabold mb-5"><span className="text-primary">{"<"}</span>{t('about.title')}<span className="text-primary">{" />"}</span></h2>
          <p className="mb-10 text-center">{t('about.text')}</p>
          
          <p className="text-lg md:text-2xl font-semibold mb-5">{t('about.subtitle1')}</p>

          <div className='grid grid-cols-4 sm:grid-cols-6 gap-3 mb-10'>
            <LogoImg sizeLarge img={htmlLogo} title="Html logo"/>
            <LogoImg sizeLarge img={cssLogo} title="Html logo"/>
            <LogoImg sizeLarge img={javascriptLogo} title="Html logo"/>
            <LogoImg sizeLarge img={typescriptLogo} title="Html logo"/>
            <LogoImg sizeLarge img={reactjsLogo} title="Html logo"/>
            <LogoImg sizeLarge img={nextjsLogo} title="Html logo"/>
            <LogoImg sizeLarge img={gitLogo} title="Html logo"/>
            <LogoImg sizeLarge img={githubLogo} title="Html logo"/>
            <LogoImg sizeLarge img={muiLogo} title="Html logo"/>
            <LogoImg sizeLarge img={tailwindLogo} title="Html logo"/>
            <LogoImg sizeLarge img={postmanLogo} title="Html logo"/>
            <LogoImg sizeLarge img={vscodeLogo} title="Html logo"/>            
          </div>


          <p className="text-md md:text-xl font-semibold">{t('about.subtitle2')}</p>

          <div className='flex flex-wrap justify-center gap-3 mb-20'>
            <LogoImg img={nodejsLogo} title="Html logo"/>
            <LogoImg img={expressLogo} title="Html logo"/>
            <LogoImg img={mongodbLogo} title="Html logo"/>
            <LogoImg img={postgressLogo} title="Html logo"/>
            <LogoImg img={graphqlLogo} title="Html logo"/>
            <LogoImg img={jestLogo} title="Html logo"/>
          </div>

        </div>

        <div className='bg-background-complement w-full flex flex-col justify-center items-center py-10'>
          <p className="text-lg md:text-2xl font-semibold mb-10">{t('about.subtitle3')}</p>

          <div className='flex flex-wrap justify-center gap-10 sm:gap-3 w-full max-w-4xl'>
            <Certificate img={itjCertificate} title={t("about.titleCertificate1")} date={t("about.dateCertificate1")}/>
            <Certificate img={udemyCertificate} title={t("about.titleCertificate2")} date={t("about.dateCertificate2")}/>
            <Certificate img={udemyCertificate} title={t("about.titleCertificate3")} date={t("about.dateCertificate3")}/>
          </div>



        </div>
    
    </section>
  )
}
