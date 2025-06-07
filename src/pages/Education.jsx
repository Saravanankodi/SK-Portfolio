import React from 'react'
import Degree from '../components/Degree'
import Cards from '../components/Cards'
import Certifications from '../components/Certifications'
import logo from './../assets/Figma.png'
import vector from './../assets/education.svg'
import basketLogo from './../assets/basket.jfif'
import tasLogo from './../assets/tasinnovation_logo.jfif'
import skillup from './../assets/skillup.png'
import greatLearn from './../assets/great learn.png'

const internship = [
    {
        driveLink:"https://drive.google.com/file/d/1apXRK3ax6zTwxtnhSQQaa_S_8fPoVaAB/view?usp=drive_link",
        title:"BasketHunt",
        logo: basketLogo
    },
    {
        driveLink:"https://drive.google.com/file/d/1fJZS7YiZq_OmC5_LfzLbnUt03i1AR9LO/view?usp=drive_link",
        title:"TAS Innovation",
        logo: tasLogo
    }
]
const achivements = [
    {
        driveLink:"https://drive.google.com/file/d/11Dt1WKCI_Qq4Xtyr_HI8cHCxf6j_anOV/view?usp=drive_link",
        title:"AKT College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1bVGu3vMCEigCARse6MpCxhlWIFmxU2Q9/view?usp=drive_link",
        title:"Anjalai Ammal College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1lyS-hhVcvmIn_w4GRyBWYh7bid7xiOrg/view?usp=drive_link",
        title:"Arasu College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1WFjgWO60cRfuox0OZ593MMtSo9s3bvZi/view?usp=drive_link",
        title:"K Ramakrishna College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1G0iY0Ld1B0RID55oPh5ORwFdgn-HOZOs/view?usp=drive_link",
        title:"Kings College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/19DO2cYJVUu09bkI9F3GZfVlX9nBdFgiT/view?usp=drive_link",
        title:"Kings College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1QCRG7gr7oue73RH6omFER6clR4palYym/view?usp=drive_link",
        title:"MAM College",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/11SXn4dJv-QLyNbqJeL5GU1xeD5_f6cLd/view?usp=drive_link",
        title:"Mount Zion",
        logo: logo
    },
    {
        driveLink:"",
        title:"NCC-B",
        logo: logo
    },
]
const cource =[
    {
        driveLink:"https://drive.google.com/file/d/1OfkCZudeRTBwL6SnpmYlwhrzsagQHXt4/view?usp=drive_link",
        title:"UI/UX Design",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1IZBeHLjunHRzLNyuwRwzYsmkLKKcXuUX/view?usp=drive_link",
        title:"Video Editing",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/15QmXY5NZELKEZOTr041QeXBvSaIzGV6s/view?usp=drive_link",
        title:"Elements of AI",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1wXkX91CaMFlNnTBm94stusQN4z-OYf5Z/view?usp=drive_link",
        title:"Cloud Computing",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/1RM3nnQ7mqpTGQsvXUAaJJF7sbxQe9GjF/view?usp=drive_link",
        title:"Cloud Security",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/1Z55GN0yQNjlfIzJTSlobdcCSDQTKxSTV/view?usp=drive_link",
        title:"Computer Vision",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1-pLTKJyOdIZ_HsgQnKkKL-G-ZEiJ99Qi/view?usp=drive_link",
        title:"Cyber Security",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/10O7NaJuOv-lAMfHw_WI3SAPdsVccAsyJ/view?usp=drive_link",
        title:"Data Science",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1Rt7ez2kgPZJ05q3hCJMzBgDaRrGnMAJu/view?usp=drive_link",
        title:"Deep Learning",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1yYuzT9jtV_xAYrxnNMEyIifBi_KX0Ckr/view?usp=drive_link",
        title:"Digital Marketing",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/1L_YQwATgF0ZGFjICXzzssIBupoZh3Ks6/view?usp=drive_link",
        title:"Ethical Hacking",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/10aQXSJekQ2GZrNWQrwIQqZldzJtLnXIw/view?usp=drive_link",
        title:"Frontend Development",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1N3_EUsej7r50UUfX_KjzKlc3bVIsq95n/view?usp=drive_link",
        title:"IOT",
        logo: skillup
    },
    {
        driveLink:"https://drive.google.com/file/d/1g8uEzaPLdP0DcrJb2LcQr4HLIfnFe8SZ/view?usp=drive_link",
        title:"Java Programming",
        logo: greatLearn
    },
    {
        driveLink:"https://drive.google.com/file/d/1bYSp9OID-5pKKqM_kHLTwIm-rimpkj4p/view?usp=drive_link",
        title:"Android Fundamentals",
        logo: greatLearn
    },
]
function Education() {
  return (
    <>
    <section className="w-full h-auto m-auto p-5">
        <header className="w-full h-auto flex flex-col flex-wrap sm:flex-row items-center justify-center sm:p-5">
            <aside className="sm:w-1/2 w-full m-auto sm:-order-1 order-1">
                <img src={vector} alt="education" className="sm:w-4/5 m-auto" />
            </aside>
            <main className="sm:w-1/2 sm:leading-10">
                <h1 className="heading text-5xl sm:text-6xl my-5 text-center">
                    Education
                </h1>
                <p className="text text-2xl sm:text-3xl text-center">
                    Basic Qualification and Certifcations
                </p>
            </main>
        </header>
        <main className="h-auto w-full sm:p-0">
            <Degree/>
        </main>
            <h1 className="heading text-4xl sm:text-6xl my-5 text-center">
                Certifications
            </h1>
        <div className="w-full h-auto m-auto">
            <h2 className="heading text-3xl sm:text-5xl text-center">Internship</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 p-5">
                {internship.map((item,index)=>(
                    <Certifications
                    key={index}
                    link={item.driveLink}
                    title={item.title}
                    logo={item.logo}/>
                    ))}
            </div>
        </div>
        <div className="w-full h-auto m-auto">
            <h2 className="heading text-3xl sm:text-5xl text-center">Achivement</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 p-5">
                {achivements.map((item,index)=>(
                    <Certifications
                    key={index}
                    link={item.driveLink}
                    title={item.title}
                    logo={item.logo}/>
                    ))}
            </div>
        </div>
        <div className="w-full h-auto m-auto">
            <h2 className="heading text-3xl sm:text-5xl text-center">Course Completed</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 p-5">
                {cource.map((item,index)=>(
                    <Certifications
                    key={index}
                    link={item.driveLink}
                    title={item.title}
                    logo={item.logo}/>
                    ))}
            </div>
        </div>
    </section>
    </>
  )
}

export default Education