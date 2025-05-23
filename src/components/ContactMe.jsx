import React from 'react'
import github from './../assets/GitHub.png'
import google from './../assets/Google.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'
import meta from './../assets/Meta.png'
import vector from './../assets/sk.jpeg'

function ContactMe() {
  return (
    <>
    <section className="contact h-auto w-full lg:flex items-center justify-center p-5">
        <aside className="img w-full lg:w-2/5 h-auto">
            <img src={vector} alt="contact" className="w-80 rounded-50 m-auto" />
        </aside>
        <main className="h-auto w-full  lg:w-3/5">
            <h1 className="heading text-center text-4xl lg:text-5xl my-5">
                Contact Me
            </h1>
            <p className="text text-justify m-auto lg:p-5 my-5">
                I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.
            </p>
            <div className="icons lg:w-3/4 flex items-center gap-5">
                            <a href="">
                                <img src={github} alt="" className='h-10 w-10 lg:h-16 lg:w-16 ' />
                            </a>
                            <a href="">
                                <img src={google} alt=""  className='h-10 w-10 lg:h-16 lg:w-16'/>
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" className='h-10 w-10 lg:h-16 lg:w-16' />
                            </a>
                            <a href="">
                                <img src={instagram} alt="" className='h-10 w-10 lg:h-16 lg:w-16' />
                            </a>
                            <a href="">
                                <img src={meta} alt="" className='h-10 w-10 lg:h-16 lg:w-16' />
                            </a>
            </div>
            <a href="" className="btn block w-fit my-2.5">
                See My Resume
            </a>
        </main>
    </section>
    </>
  )
}

export default ContactMe