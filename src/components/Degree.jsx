import React from 'react'
import logo from '../assets/kings.png'
function Degree() {
  return (
    <>
    <section className="degree h-auto w-full">
        <h1 className="heading text-center text-4xl sm:text-5xl">
            Degrees Received
        </h1>
        <div className="sm:w-4/5 sm:h-4/5 sm:flex items-center justify-center gap-5 m-auto">
            <aside className="logo sm:w-1/4 block h-auto">
                <img src={logo} alt="logo" className="w-1/2 sm:h-4/5 m-auto rounded-lg" />
            </aside>
            <main className="condent block my-5 relative sm:w-3/4 h-max border-2 border-white rounded-xl">
                <header className="w-full h-max sm:h-20 sm:flex justify-between items-center sm:p-2.5 rounded-xl bg-blue-500">
                    <div className="name sm:leading-10 p-2.5">
                        <h2 className="heading text-2xl">
                            Kings College of Engineering
                        </h2>
                        <p className="text text-base">
                            B.E. in Computer Science and Engineering
                        </p>
                    </div>
                    <div className="regulation sm:leading-10 p-2.5">
                        <p className="text text-base">
                            Nov 2021 - May 2025
                        </p>
                        {/* <p className="text text-base">
                            CGPA 3.855 / 4.00
                        </p> */}
                    </div>
                </header>
                <ul className="list h-4/5 p-5 my-2.5 leading-8">
                    <li className="text text-justify"> I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.</li>
                    <li className="text text-justify">Apart from this, I have done courses on UI/UX.</li>
                    {/* <li className="text text-justify"> Placed 4th in my class</li>
                    <li className="text text-justify">Dean's List.</li>
                    <li className="text text-justify">I was selected for ITEE Training Program which comprised of 20 students in the CSE department.</li>
                    <li className="text text-justify"> Elected as the team leader in all the group projects.</li> */}
                </ul>
                {/* <a href="" className="btn block w-fit absolute bottom-2 right-2">
                    Visite Website
                </a> */}
            </main>
        </div>
    </section>
    </>
  )
}

export default Degree
