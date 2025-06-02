import React, { useState } from 'react'
import WorkDetails from '../components/WorkDetails';
import HeaderWithToggleNav from '../components/ToggleMenu';
import vector from './../assets/experision.svg'
function Experience() {
  return (
    <>
    <section className="w-full h-auto p-5">
      <header className="w-full h-auto sm:flex items-center justify-center m-auto">
          <aside className="sm:w-1/2">
            <img src={vector} alt="experision" className="w-2/3 m-auto" />
          </aside>
          <main className="sm:w-1/2">
            <h2 className="heading text-center text-4xl sm:text-5xl my-2.5">
              Experience
            </h2>
            <p className="text text-center text-2xl sm:text-4xl my-2.5">
                Work and Volunteership
            </p>
            <p className="text text-base sm:text-xl text-justify sm:p-5">
                Dedicated and innovative UI/UX Designer with 3 years of experience in designing user-centric, intuitive, and visually compelling digital interfaces. Skilled in creating seamless user experiences for web and mobile applications using tools like Figma, Adobe XD, and Sketch.Proficient in conducting user research, usability testing, and feedback analysis to drive informed design decisions.
            </p>
          </main>
      </header>
      <main className="w-full sm:w-11/12 h-auto m-auto my-5 bg-white text-black">
          <HeaderWithToggleNav/>
      </main>
    </section>
    </>
  )
}

export default Experience