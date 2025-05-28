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
              Fullstack Developer with over 4 years of hands-on experience in agile development, specializing in React, NextJs, and .Net. Successfully led and mentored teams through 4 projects, including a major North American initiative involving millions of driver records, all within tight deadlines while managing multiple concurrent projects. Actively engaged in open-source community, further honing my skills, ensuring I am a valuable asset to any development team.
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