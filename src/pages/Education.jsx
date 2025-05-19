import React from 'react'
import Degree from '../components/Degree'
import Cards from '../components/Cards'
import Certifications from '../components/Certifications'
import figma from './../assets/Figma.png'
import vector from './../assets/education.svg'

const data =[
    {
        title:"googel",
        details:"hello",
        logo: figma
    },
    {
        title:"googel",
        details:"hello",
        logo: figma
    },
    {
        title:"googel",
        details:"hello",
        logo: figma
    },
    {
        title:"googel",
        details:"hello",
        logo: figma
    },
    {
        title:"googel",
        details:"hello",
        logo: figma
    },
    {
        title:"googel",
        details:"hello",
        logo: figma
    }
]
function Education() {
  return (
    <>
    <section className="w-full h-auto m-auto">
        <header className="w-full h-auto lg:flex items-center justify-center p-5">
            <aside className="lg:w-1/2">
                <img src={vector} alt="education" className="w-4/5 m-auto" />
            </aside>
            <main className="lg:w-1/2 leading-10">
                <h1 className="heading text-4xl lg:text-6xl my-5 text-center">
                    Education
                </h1>
                <p className="text text-2xl lg:text-3xl text-center">
                    Basic Qualification and Certifcations
                </p>
            </main>
        </header>
        <main className="h-auto w-full p-5 lg:p-0">
            <Degree/>
        </main>
            <h1 className="heading text-4xl lg:text-6xl my-5 text-center">
                Certifications
            </h1>
        <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-5 p-5">
            {data.map((item,index)=>(
                <Certifications
                key={index}
                title={item.title}
                details={item.details}
                logo={item.logo}/>
                ))}
        </div>
    </section>
    </>
  )
}

export default Education