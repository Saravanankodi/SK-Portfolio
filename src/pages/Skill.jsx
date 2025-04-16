import React from 'react'
import SkilsLevel from '../components/SkilsLevel'

function Skill() {
  return (
    <>
    <section className="w-full h-auto m-auto">
        <div className="w-full lg:w-full h-auto p-5">
        <h2 className="heading text-center text-3xl">
            Proficiency
        </h2>
            <SkilsLevel
            title='Frontend'
            width='80%'/>
            <SkilsLevel
            title='Backend'
            width='60%'/>
            <SkilsLevel
            title='Cloud'
            width='90%'/>
        </div>
        <div className="w-full lg:w-full h-auto p-5">
          <h2 className="heading text-center text-4xl">Language</h2>
            <SkilsLevel
            title='Frontend'
            width='80%'/>
            <SkilsLevel
            title='Backend'
            width='60%'/>
            <SkilsLevel
            title='Cloud'
            width='90%'/>
        </div>
    </section>
    </>
  )
}

export default Skill