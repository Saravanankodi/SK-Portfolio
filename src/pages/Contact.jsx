import React from 'react'
import ContactMe from '../components/ContactMe'
import ContactAddress from '../components/ContactAddress'

function Contact() {
  return (
    <>
    <section className="w-screen">
        <ContactMe/>
        <ContactAddress/>
    </section>
    </>
  )
}

export default Contact