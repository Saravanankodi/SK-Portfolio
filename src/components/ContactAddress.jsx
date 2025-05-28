import React from 'react'
import vector from './../assets/contact.svg'

function ContactAddress() {
  return (
    <>
    <section className="h-auto w-full sm:flex items-center justify-center">
        <main className="address sm:w-1/2 h-auto text-center leading-10">
            <h2 className="heading text-3xl">
                Address
            </h2>
            <p className="text text-gray-500">
              Mk Colony,North street,Kabisthalam,
              Thanjavur -614203
            </p>
            <h2 className="heading text-3xl">Phone Number</h2>
            <a href="tel:+919092579460" className="text text-gray-500">
                9092579460
            </a>
        </main>
        <aside className="vector-img w-full sm:w-1/2 h-auto">
          <img src={vector} alt="contact" className="sm:w-2/3 w-11/12 m-auto" />
        </aside>
    </section>
    </>
  )
}

export default ContactAddress