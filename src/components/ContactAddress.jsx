import React from 'react'
import vector from './../assets/developer.svg'

function ContactAddress() {
  return (
    <>
    <section className="h-auto w-full lg:flex items-center justify-center">
        <main className="address lg:w-1/2 h-auto text-center leading-10">
            <h2 className="heading text-2xl">
                Address
            </h2>
            <p className="text text-gray-500">
                Banani, Dhaka-1212, Bangladesh
            </p>
            <h2 className="heading text-2xl">Phone Number</h2>
            <a href="" className="text text-gray-500">
            +880 1953699363
            </a>
        </main>
        <aside className="vector-img w-full lg:w-1/2 h-auto">
          <img src={vector} alt="contact" className="w-2/3 m-auto" />
        </aside>
    </section>
    </>
  )
}

export default ContactAddress