import React from 'react'
import vector from './../assets/projects.svg'

function ProjectHeader() {
  return (
    <>
    <section className="w-full h-auto block lg:flex justify-center items-center">
        <aside className="lg:w-1/2">
        <img src={vector} alt="project" className="w-2/3 m-auto" />
        </aside>
        <main className="lg:w-1/2">
            <h2 className="heading text-5xl text-center my-2.5 lg:my-5 m-auto">
                Projects
            </h2>
            <p className="text w-4/5 lg:text-xl text-justify m-auto">
            My projects makes use of vast variety of latest technology tools. My best experience is to create Full Stack projects and deploy them to web applications using cloud infrastructure. Stil trying to gain experience by trying my hands on different projects.
            </p>
        </main>
    </section>
    </>
  )
}

export default ProjectHeader