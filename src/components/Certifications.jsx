import React from 'react'

export const Certifications = ({link,title,details,logo}) => {
  return (
    <>
    <a href={link} target='_blank' className="link w-full h-fit">
        <section className="h-min bg-white text-black w-full p-5 rounded-lg shadow-lg m-auto">
          <header className="h-1/2">
            <img src={logo} alt="logo" className='h-20 m-auto'/>  
          </header>
          <main className="h-1/2">
            <h2 className="heading text-center text-3xl">
                {title}
            </h2>
            <p className="text text-center text-2xl">
                {details}
            </p>
          </main>
        </section>
    </a>
    </>
  )
}
export default Certifications
