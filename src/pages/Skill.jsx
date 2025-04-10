import React from 'react'
import SkilsLevel from '../components/SkilsLevel'

function Skill() {
  return (
    <>
    <section className="w-full h-auto m-auto">
        <h2 className="heading text-center text-3xl">
            Proficiency
        </h2>
        <div className="w-1/2 lg:w-full h-auto p-5">
            <SkilsLevel
            title='Frontend'
            width={800}/>
        </div>
    </section>
    </>
  )
}

export default Skill