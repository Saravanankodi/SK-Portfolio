import React from 'react'
import github from './../assets/GitHub.png'
import google from './../assets/Google.png'
import instagram from './../assets/Instagram.png'
import linkedin from './../assets/LinkedIn.png'
import meta from './../assets/Meta.png'
import vector from './../assets/sk.jpeg'
import resume from '../../public/resume.pdf'

function ContactMe() {
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
    <section className="contact h-auto w-full sm:flex items-center justify-center">
        <aside className="img w-4/5 sm:w-2/5 h-auto m-auto">
            <img src={vector} alt="contact" className="sm:w-80 rounded-50 m-auto" />
        </aside>
        <main className="h-auto w-full  sm:w-3/5">
            <h1 className="heading text-center text-4xl sm:text-5xl my-5">
                Contact Me
            </h1>
            <p className="text text-justify m-auto sm:p-5 my-5">
                I'm active on most major social media platforms — feel free to reach out, and I’ll reply within 24 hours. I can help with UI/UX design, user research, wireframing, prototyping, design systems, and improving overall user experiences..
            </p>
            <div className="icons sm:w-3/4 flex items-center justify-center sm:justify-start gap-5">
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
                            <button onClick={handleDownload} className="btn hidden sm:block w-fit m-auto sm:m-0 my-2.5">See my Resume</button>
            </div>
            <button onClick={handleDownload} className="btn block sm:hidden w-fit m-auto sm:m-0 my-2.5">See my Resume</button>
        </main>
    </section>
    </>
  )
}

export default ContactMe