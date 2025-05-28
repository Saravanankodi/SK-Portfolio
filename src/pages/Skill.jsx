import React from 'react'
import SkilsLevel from '../components/SkilsLevel'
import vector from './../assets/developer.svg'
function Skill() {
  return (
    <>
    <section className="w-full h-auto m-auto sm:px-10">
        <main className="w-full sm:flex m-auto">
            <div className="w-full sm:w-3/5 h-auto p-5">
            <h2 className="heading text-center text-3xl">
                Proficiency
            </h2>
            <img src={vector} alt="vector-img" className="w-4/5 m-auto sm:hidden" />
                <SkilsLevel
                title='Figma'
                width='95%'/>
                <SkilsLevel
                title='AdobeXD'
                width='80%'/>
                <SkilsLevel
                title='Sketch'
                width='75%'/>
                <SkilsLevel
                title='Canva'
                width='95%'/>
                <SkilsLevel
                title='MS Office'
                width='75%'/>
            </div>
            <div className="hidden sm:w-2/5 sm:block">
              <img src={vector} alt="vector-img" className='w-4/5 m-auto' />
            </div>
        </main>
        <div className="w-full sm:w-full h-auto p-5">
          <h2 className="heading text-center text-4xl">Language</h2>
            <SkilsLevel
            title='HTML'
            width='90%'/>
            <SkilsLevel
            title='CSS'
            width='80%'/>
            <SkilsLevel
            title='JAVA FX'
            width='75%'/>
            <SkilsLevel
            title='JAVA'
            width='60%'/>
        </div>
    </section>
    </>
  )
}

export default Skill