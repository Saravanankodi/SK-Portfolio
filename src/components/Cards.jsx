import React from 'react'

export const Cards = ({title,details,date,icons}) => {
  return (
    <>
    <section className="w-full h-auto bg-white text-black p-5 rounded-lg">
      <header className="w-full">
        <h2 className="heading text-3xl text-center">{title}</h2>
      </header>
      <main className="w-full">
        <div className="content w-full m-auto text-justify lg:w-3/4 ">
          <p className="text">
            {details}
          </p>
          <p className="text text-neutral-600">
            {date}
          </p>
        </div>
        <div className="icons flex gap-2.5 items-center justify-end">
          {icons.map((icon,index)=>
          (
            <img 
            key={index} 
            src={icon} 
            alt="icon"
            className='w-10 h-10' />
          ))}
        </div>
      </main>
    </section>
    </>
  )
}
export default Cards