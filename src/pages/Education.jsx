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
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 gap-5 p-5">
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