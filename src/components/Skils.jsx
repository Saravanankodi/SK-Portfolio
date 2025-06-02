import React from 'react'
import xd from './../assets/Adobe XD.png'
import AWS from './../assets/Amazon Web Services.png'
import canva from './../assets/Canva.png'
import css from './../assets/CSS3.png'
import figma from './../assets/Figma.png'
import html from './../assets/Html 5.png'
// import java from './../assets/Java.png'
import office from './../assets/Office 365.png'
import sketch from './../assets/Sketch.png'
import typewrite from './../assets/Typewriter.png'
// import mysql from './../assets/mySql.png'
import vector from './../assets/about.svg'
import list from './../assets/point.png'
function Skils() {
  return (
    <>
    <section className="skils w-full h-auto m-auto">
        <h1 className="heading w-fit text-5xl sm:text-6xl m-auto text-center">
            What I Do?
        </h1>
        <main className="condent w-full h-auto sm:flex items-center justify-center sm:gap-5 m-auto">
          <aside className="w-full sm:w-1/2">
            <img src={vector} alt="skils" className="w-11/12 sm:w-4/5 m-auto" />
          </aside>
          <div className="sm:w-1/2 h-auto">
            <h2 className="heading w-fit sm:text-4xl text-3xl text-center m-auto p-2.5">
                UI/UX Designer
            </h2>
            <div className="icons sm:w-3/4 flex justify-center items-center flex-wrap gap-5 m-auto">
              <img src={figma} alt="" className="w-12" />
              <img src={xd} alt="" className="w-12" />
              <img src={sketch} alt="" className="w-12" />
              <img src={canva} alt="" className="w-12" />
              <img src={html} alt="" className="w-12" />
              <img src={css} alt="" className="w-12" />
              <img src={office} alt="" className="w-12" />
              <img src={typewrite} alt="" className="w-12" />
            </div>
            <ul className='h-auto w-full m-auto my-5'>
              <li className='text w-full p-1.5 sm:text-xl'>
                  <span className="font-bold">User-Centered Design</span> – Crafting intuitive and engaging user experiences.
              </li>
              <li className='text w-full p-1.5 sm:text-xl'>
                  <span className="font-bold">Responsive UI Design</span> – Designing adaptive interfaces for seamless cross-device experiences.
              </li>
              <li className='text w-full p-1.5 sm:text-xl'><span className="font-bold">User Research & Testing</span> – Conducting research, usability testing, and feedback analysis</li>
              <li className='text w-full p-1.5 sm:text-xl'><span className="font-bold">Wireframing & Prototyping</span> – Creating interactive prototypes using Figma & Adobe XD.</li>
              <li className='text w-full p-1.5 sm:text-xl'><span className="font-bold">Design Systems & Components</span> – Developing scalable and consistent UI components.</li>
              <li className='text w-full p-1.5 sm:text-xl'><span className="font-bold">Collaboration & Leadership</span> – Leading cross-functional teams to deliver impactful designs.</li>
            </ul>
          </div>
        </main>
    </section>
    </>
  )
}

export default Skils