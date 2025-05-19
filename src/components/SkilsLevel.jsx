import React from 'react'

function SkilsLevel(props) {
  return (
    <>
        <section className='w-full my-5 m-auto'>
          <div className="w-full flex justify-between">
            <h2 className="text text-xl ">
              {props.title}
            </h2>
            <p className="text text-xl">
              {props.width}
            </p>
          </div>
            <div className="h-5 bg-white rounded-xl w-full">
                <span className='h-5 bg-blue-500 block rounded-lg' style={{width:props.width}}></span>
            </div>
        </section>
    </>
  )
}

export default SkilsLevel
