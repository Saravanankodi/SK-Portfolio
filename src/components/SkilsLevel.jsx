import React from 'react'

function SkilsLevel(props) {
  return (
    <>
        <section>
          <h2 className="text text-2xl">
            {props.titel}
          </h2>
            <div className="h-5 bg-white rounded-xl">
                <span className='h-5 bg-blue-500 block' style={{width:props.width}}></span>
            </div>
        </section>
    </>
  )
}

export default SkilsLevel
