import segycomNextjs from "../assets/segycom_nextjs_project.png";
import nextStore from "../assets/nextstore_project.png";
import portfolio from "../assets/portfolio_project.png";
import segycomReactjs from "../assets/segycom_reactjs_project.png";
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

export const projectsList = [
    {
        title: 'Segycom web 4.0',
        img: segycomNextjs,
        link: 'https://segycom.mx/',
        repo: 'https://github.com/bbalderramasegycom/segycom4.0_Nextjs',
        text: 'projects.project1Description',
        tools: [ 
            { name: 'html', img: htmlLogo },
            { name: 'css', img: cssLogo },
            { name: 'typescript', img: typescriptLogo },
            { name: 'nextjs', img: nextjsLogo },
            { name: 'mui', img: muiLogo },
            { name: 'mongodb', img: mongodbLogo },
        ],
        slug: 'segycom-web-4.0',
    },
    {
        title: 'Next Store Uniforms',
        img: nextStore,
        link: '',
        repo: 'https://github.com/bryxn77git/next-store-server-test',
        text: 'projects.project2Description',
        tools: [ 
            { name: 'html', img: htmlLogo },
            { name: 'css', img: cssLogo },
            { name: 'typescript', img: typescriptLogo },
            { name: 'nextjs', img: nextjsLogo },
            { name: 'mui', img: muiLogo },
            { name: 'mongodb', img: mongodbLogo },
        ],
        slug: 'next-store-uniform',
    },
    {
        title: 'Portfolio',
        img: portfolio,
        link: 'https://bryxn77git.github.io/portfolio/',
        repo: 'https://github.com/bryxn77git/portfolio',
        text: 'projects.project3Description',
        tools: [ 'html', 'css', 'javascript', 'reactjs', 'tailwind'],
        slug: 'portfolio',
    },
    {
        title: 'Segycom web 3.0',
        img: segycomReactjs,
        link: '',
        repo: 'https://github.com/bryxn77git/segycomweb_3.0',
        text: 'projects.project4Description',
        tools: [ 'html', 'css', 'javascript', 'reactjs', 'mui', 'nodejs', 'express'],
        slug: 'segycom-web-3.0',
    },

]
    