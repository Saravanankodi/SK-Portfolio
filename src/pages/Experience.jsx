import React, { useState } from 'react'
import WorkDetails from '../components/WorkDetails';
import HeaderWithToggleNav from '../components/ToggleMenu';

function Experience() {
  return (
    <>
    <section className="w-full h-auto p-5">
      <header className="w-full h-auto lg:flex items-center justify-center m-auto">
          <aside className="lg:w-1/2">
          
          </aside>
          <main className="lg:w-1/2">
            <h2 className="heading text-center text-4xl lg:text-5xl my-2.5">
              Experience
            </h2>
            <p className="text text-center text-2xl lg:text-4xl my-2.5">
                Work and Volunteership
            </p>
            <p className="text text-base lg:text-2xl text-justify">
              Fullstack Developer with over 4 years of hands-on experience in agile development, specializing in React, NextJs, and .Net. Successfully led and mentored teams through 4 projects, including a major North American initiative involving millions of driver records, all within tight deadlines while managing multiple concurrent projects. Actively engaged in open-source community, further honing my skills, ensuring I am a valuable asset to any development team.
            </p>
          </main>
      </header>
      <main className="w-full lg:w-4/5 h-auto m-auto my-5 bg-white text-black">
          <HeaderWithToggleNav/>
      </main>
    </section>
    </>
  )
}

export default Experience