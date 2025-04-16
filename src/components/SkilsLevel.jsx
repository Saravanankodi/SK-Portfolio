import React from 'react'

function SkilsLevel(props) {
  return (
    <>
        <section className='w-full my-5 m-auto'>
          <h2 className="text text-xl ">
            {props.title}
          </h2>
            <div className="h-5 bg-white rounded-xl w-full">
                <span className='h-5 bg-blue-500 block rounded-lg' style={{width:props.width}}></span>
            </div>
        </section>
    </>
  )
}

export default SkilsLevel
