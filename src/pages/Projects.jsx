import React from 'react'
import ProjectHeader from '../components/ProjectHeader'
import Cards from '../components/Cards'
import xd from './../assets/Adobe XD.png'
import AWS from './../assets/Amazon Web Services.png'
import canva from './../assets/Canva.png'
import css from './../assets/CSS3.png'
import figma from './../assets/Figma.png'
import html from './../assets/Html 5.png'


const data = [
  {
    title:'Desflyer Website',
    details:'My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.',
    date:'2536215',
    icons:[
      figma,canva
    ]
  },
  {
    title:'Hall Booking Software',
    details:'My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.',
    date:'2536215',
    icons:[
      figma,canva
    ]
  },
  {
    title:'SM ManPower website',
    details:'My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.',
    date:'2536215',
    icons:[
      figma,canva
    ]
  },
]

function Projects() {
  return (
    <>
    <section className="w-full h-auto p-5">
          <ProjectHeader/>
          <main className="w-full grid grid-cols-1 sm:grid-cols-2  gap-5">
            {data.map((item,index)=>(
            <Cards
            key={index}
            title={item.title}
            details={item.details}
            icons={item.icons}/>
            ))}
          </main>
    </section>
    </>
  )
}

export default Projects