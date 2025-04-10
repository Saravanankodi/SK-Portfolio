import React from 'react'
import github from './../assets/GitHub.png'
import google from './../assets/Google.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'
import meta from './../assets/Meta.png'
import vector from './../assets/developer.svg'
function Header() {
  return (
    <>
    <section className="header h-fit w-full lg:flex lg:justify-content-center lg:items-center">
        <main className="lg:w-1/2">
            <header className="w-full m-auto">
            <h2 className="heading  text-3xl lg:text-6xl text-center my-2.5 ">Saravanan K</h2>
            <p className="text w-4/5 text-lg text-justify lg:text-2xl my-2.5 m-auto">
            "A passionate UI/UX designer who thrives on creating innovative and user-centric designs, constantly taking on new challenges that enhance analytical and technological skills."
            </p>
            <div className="icons w-4/5 flex items-center justify-evenly m-auto">
                <a href="">
                    <img src={github} alt="" className='h-12 w-12 lg:h-16 lg:w-16' />
                </a>
                <a href="">
                    <img src={google} alt=""  className='h-12 w-12 lg:h-16 lg:w-16'/>
                </a>
                <a href="">
                    <img src={linkedin} alt="" className='h-12 w-12 lg:h-16 lg:w-16' />
                </a>
                <a href="">
                    <img src={instagram} alt="" className='h-12 w-12 lg:h-16 lg:w-16' />
                </a>
                <a href="">
                    <img src={meta} alt="" className='h-12 w-12 lg:h-16 lg:w-16' />
                </a>
            </div>
            </header>
            <div className="buttons w-full lg:flex items-center justify-evenly my-5">
                <a href="" className="btn block h-12 w-max text-center my-2.5 m-auto">Follow me on LinkedIn</a>
                <a href="" className="btn block h-12 w-max m-auto">see my Resume</a>
            </div>
        </main>
        <aside className="lg:w-1/2 m-auto">
            <img src={vector} alt="" className='w-4/5 h-auto m-auto'/>
        </aside>
    </section>
    </>
  )
}

export default Header