import React from 'react'
import SkilsLevel from '../components/SkilsLevel'

function Skill() {
  return (
    <>
    <section className="w-full h-auto m-auto lg:px-10">
        <div className="w-full lg:w-full h-auto p-5">
        <h2 className="heading text-center text-3xl">
            Proficiency
        </h2>
            <SkilsLevel
            title='Figma'
            width='100%'/>
            <SkilsLevel
            title='AdobeXD'
            width='75%'/>
            <SkilsLevel
            title='Sketch'
            width='60%'/>
            <SkilsLevel
            title='Canva'
            width='95%'/>
            <SkilsLevel
            title='MS Office'
            width='70%'/>
        </div>
        <div className="w-full lg:w-full h-auto p-5">
          <h2 className="heading text-center text-4xl">Language</h2>
            <SkilsLevel
            title='HTML'
            width='90%'/>
            <SkilsLevel
            title='CSS'
            width='75%'/>
            <SkilsLevel
            title='JAVA'
            width='65%'/>
        </div>
    </section>
    </>
  )
}

export default Skill