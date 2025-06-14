import React from 'react'
import github from './../assets/GitHub.png'
import google from './../assets/Google.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'
import meta from './../assets/Meta.png'
import vector from './../assets/sk.jpeg'
import resume from '../../public/resume.pdf'

function Header() {
    const handleDownload = () => {
        // Replace with your file URL or path
        const fileUrl = resume;
        const fileName = 'sample.pdf';
    
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
  return (
    <>
    <section className="header w-full sm:flex sm:justify-content-center sm:items-center">
        <main className="sm:w-1/2">
            <header className="w-full m-auto">
            <h2 className="heading text-center sm:text-left sm:w-4/5 text-3xl sm:text-6xl m-auto my-2.5 ">Saravanan K</h2>
            <p className="text sm:w-4/5 text-lg text-justify sm:text-2xl my-2.5 m-auto">
            "A passionate UI/UX designer who thrives on creating innovative and user-centric designs, constantly taking on new challenges that enhance analytical and technological skills."
            </p>
            <aside className="block w-full sm:hidden m-auto">
                <img src={vector} alt="" className='img w-4/5 sm:w-2/5 h-auto rounded-50 m-auto'/>
            </aside>
            <div className="icons sm:w-4/5 flex items-center justify-center sm:justify-start gap-5 m-auto">
                <a href="https://github.com/Saravanankodi">
                    <img src={github} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                </a>
                <a href="mailto:saravanankodi5@gmail.com">
                    <img src={google} alt=""  className='h-10 w-10 sm:h-16 sm:w-16'/>
                </a>
                <a href="https://www.linkedin.com/in/saravanankodi">
                    <img src={linkedin} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                </a>
                <a href="https://www.instagram.com/saravanan.kodi/?igsh=MTA4emw5ejNsb2JqMQ%3D%3D">
                    <img src={instagram} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                </a>
                {/* <a href="">
                    <img src={meta} alt="" className='h-10 w-10 sm:h-16 sm:w-16' />
                </a> */}
            </div>
            </header>
            <div className="buttons sm:w-4/5 m-auto sm:flex items-center gap-5 my-5">
                <a href="" className="btn block h-12 w-max text-center sm:m-0 m-auto my-2.5">Follow me on LinkedIn</a>
                <button onClick={handleDownload} className="btn block h-12 w-max sm:m-0 m-auto">See my Resume</button>
            </div>
        </main>
        <aside className="hidden sm:block m-auto">
            <img src={vector} alt="" className='sm:w-80 rounded-50 m-auto'/>
        </aside>
    </section>
    </>
  )
}

export default Header