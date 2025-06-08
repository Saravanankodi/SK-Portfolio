import React from 'react'

export const Cards = ({title,details,date,icons}) => {
  return (
    <>
    <section className="w-full h-auto bg-white text-black p-5 rounded-lg">
      <header className="w-full">
        <h2 className="heading text-3xl text-center">{title}</h2>
      </header>
      <main className="w-full relative">
        <div className="content w-full m-auto text-justify p-2.5 ">
        {details.map((item,index)=>(
            <p
            key={index}
            className='text font-medium text-xl'>
            {item}
            </p>
          ))}
        </div>
          <p className="text w-fit absolute bottom-0 left-2.5 sm:text-xl">
            {date}
          </p>
        <div className="icons  absolute bottom-0 right-0 flex gap-2.5 items-center justify-end">
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