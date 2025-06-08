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
    title:'Website',
    details:['Tittle:Kings Conferance','Tools:Figma','Duration:May 2025'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Tittle:SM Manpower','Tools:Figma','Duration:Feb 2025'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Tittle:Kings Hall Booking','Tools:Figma','Duration:Dec 2024'],
    date:'2536215',
    icons:[
      figma
    ]
  },
  {
    title:'Website',
    details:['Tittle:DesFlyer','Tools:Figma','Duration:Otc 2024 - Nov 2024'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Tittle:Hospitle Mangement','Tools:Java','Duration:Mar 2024 - Apr 2024'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Library Management','Tools:Python','Duration:Feb 2024 - Mar 2024'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Tittle:Car Maintance','Tools:Python','Duration:May 2024 - Jun 2024'],
    icons:[
      figma
    ]
  },
  {
    title:'Web Application',
    details:['Tittle:Dot Web Browser','Tools:Python','Duration:Feb 2024 - Mar 2024'],
    icons:[
      figma
    ]
  },
]

function Projects() {
  return (
    <>
    <section className="w-full h-auto p-5">
          <ProjectHeader/>
          <main className="w-full grid grid-cols-1 sm:grid-cols-3  gap-5">
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