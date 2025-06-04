import React from 'react'
import Degree from '../components/Degree'
import Cards from '../components/Cards'
import Certifications from '../components/Certifications'
import logo from './../assets/Figma.png'
import vector from './../assets/education.svg'

const data =[
    {
        driveLink:"https://drive.google.com/file/d/15QmXY5NZELKEZOTr041QeXBvSaIzGV6s/view?usp=drive_link",
        title:"Elements of AI",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1O3WaRk4YGfktSZxPwuBj6GevM46LUMpM/view?usp=drive_link",
        title:"Elements of AI",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1Bvie7EBIHIUpK74PX9uoh6EJf5KNUNiq/view?usp=drive_link",
        title:"Cloud Computing",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1wXkX91CaMFlNnTBm94stusQN4z-OYf5Z/view?usp=drive_link",
        title:"Cloud Computing",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1RM3nnQ7mqpTGQsvXUAaJJF7sbxQe9GjF/view?usp=drive_link",
        title:"Cloud Security",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1wcG9dyNZLyMAGuIB6tm19UsdmVPHY6T4/view?usp=drive_link",
        title:"",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1UFFJkPj-Pbmz8KJqCjqsyDJtIcgNDl3_/view?usp=drive_link",
        title:"",
        logo: logo
    },
    {
        driveLink:"https://drive.google.com/file/d/1Z55GN0yQNjlfIzJTSlobdcCSDQTKxSTV/view?usp=drive_link",
        title:"",
        logo: logo
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
            <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-5 p-5">
                {data.map((item,index)=>(
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