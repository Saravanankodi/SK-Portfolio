import React from 'react'
import xd from './../assets/Adobe XD.png'
import AWS from './../assets/Amazon Web Services.png'
import canva from './../assets/Canva.png'
import css from './../assets/CSS3.png'
import figma from './../assets/Figma.png'
import html from './../assets/Html 5.png'
import java from './../assets/Java.png'
import office from './../assets/Office 365.png'
import sketch from './../assets/Sketch.png'
import typewrite from './../assets/Typewriter.png'
import mysql from './../assets/mySql.png'
import vector from './../assets/developer.svg'

function Skils() {
  return (
    <>
    <section className="skils w-full h-auto m-auto">
        <h1 className="heading w-fit text-4xl lg:text-5xl m-auto text-center">
            What I Do?
        </h1>
        <main className="condent w-4/5 h-auto lg:flex items-center justify-center m-auto">
          <aside className="lg:w-1/2">
            <img src={vector} alt="skils" className="w-2/3 m-auto" />
          </aside>
          <div className="lg:w-1/2 h-auto">
            <h2 className="heading w-fit lg:text-4xl text-3xl text-center m-auto p-2.5">
              Full Stack Development
            </h2>
            <div className="icons lg:w-3/4 flex justify-center items-center flex-wrap gap-5 m-auto">
              <img src={xd} alt="" className="w-12" />
              <img src={AWS} alt="" className="w-12" />
              <img src={canva} alt="" className="w-12" />
              <img src={css} alt="" className="w-12" />
              <img src={figma} alt="" className="w-12" />
              <img src={html} alt="" className="w-12" />
              <img src={java} alt="" className="w-12" />
              <img src={mysql} alt="" className="w-12" />
              <img src={office} alt="" className="w-12" />
              <img src={sketch} alt="" className="w-12" />
              <img src={typewrite} alt="" className="w-12" />
            </div>
            <ul className='h-auto w-full m-auto my-5'>
              <li className='text w-full p-1.5 lg:text-xl'>User-Centered Design – Crafting intuitive and engaging user experiences.</li>
              <li className='text w-full p-1.5 lg:text-xl'> Responsive UI Design – Designing adaptive interfaces for seamless cross-device experiences.</li>
              <li className='text w-full p-1.5 lg:text-xl'>User Research & Testing – Conducting research, usability testing, and feedback analysis</li>
              <li className='text w-full p-1.5 lg:text-xl'>Wireframing & Prototyping – Creating interactive prototypes using Figma & Adobe XD.</li>
              <li className='text w-full p-1.5 lg:text-xl'>Design Systems & Components – Developing scalable and consistent UI components.</li>
              <li className='text w-full p-1.5 lg:text-xl'> Collaboration & Leadership – Leading cross-functional teams to deliver impactful designs.</li>
            </ul>
          </div>
        </main>
    </section>
    </>
  )
}

export default Skils