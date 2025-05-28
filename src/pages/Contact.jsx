import React from 'react'
import ContactMe from '../components/ContactMe'
import ContactAddress from '../components/ContactAddress'

function Contact() {
  return (
    <>
    <section className="w-full p-5">
        <ContactMe/>
        <ContactAddress/>
    </section>
    </>
  )
}

export default Contact