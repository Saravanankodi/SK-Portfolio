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
    <section className="contact h-auto w-full sm:flex items-center justify-center">
        <aside className="img w-4/5 sm:w-2/5 h-auto m-auto">
            <img src={vector} alt="contact" className="sm:w-80 rounded-50 m-auto" />
        </aside>
        <main className="h-auto w-full  sm:w-3/5">
            <h1 className="heading text-center text-4xl sm:text-5xl my-5">
                Contact Me
            </h1>
            <p className="text text-justify m-auto sm:p-5 my-5">
                I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Basic Programming, ML, AI, Android, Cloud and Opensource Development.
            </p>
            <div className="icons sm:w-3/4 flex items-center justify-center sm:justify-start gap-5">
                            <a href="">
                                <img src={github} alt="" className='h-10 w-10 sm:h-16 sm:w-16 ' />
                            </a>
                            <a href="mailto:saravanankodi5@gmail.com">
                                <img src={google} alt=""  className='h-10 w-10 sm:h-16 sm:w-16'/>
                            </a>
                            <a href="">
                                <img src={linkedin} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                            </a>
                            <a href="">
                                <img src={instagram} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                            </a>
                            <a href="">
                                <img src={meta} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                            </a>
            </div>
            <a href="" className="btn block w-fit m-auto sm:m-0 my-2.5">
                See My Resume
            </a>
        </main>
    </section>
    </>
  )
}

export default ContactMe