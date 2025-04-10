import React from 'react'

function Degree() {
  return (
    <>
    <section className="degree h-auto w-full">
        <h1 className="heading text-center text-4xl lg:text-5xl">
            Degrees Received
        </h1>
        <div className="lg:w-4/5 lg:h-4/5 lg:flex items-center justify-center gap-5 m-auto">
            <aside className="logo w-1/4 h-auto">

            </aside>
            <main className="condent block my-5 relative lg:w-3/4 h-max border-2 border-black rounded-xl">
                <header className="w-full h-max lg:h-20 lg:flex justify-between items-center lg:p-2.5 rounded-xl bg-blue-500">
                    <div className="name lg:leading-10 p-2.5">
                        <h2 className="heading text-2xl">
                            Kings College of Engineering
                        </h2>
                        <p className="text text-base">
                            B.E. in Computer Science and Engineering
                        </p>
                    </div>
                    <div className="regulation lg:leading-10 p-2.5">
                        <p className="text text-base">
                            March 2016 - January 2021
                        </p>
                        {/* <p className="text text-base">
                            CGPA 3.855 / 4.00
                        </p> */}
                    </div>
                </header>
                <ul className="list h-4/5 p-5 my-2.5 leading-8">
                    <li className="text"> I have studied basic software engineering subjects like DS, Algorithms, OOP, DBMS, OS, CA, AI etc.</li>
                    <li className="text">Apart from this, I have done courses on Deep Learning and Full Stack Development.</li>
                    <li className="text"> Placed 4th in my class</li>
                    <li className="text">Dean's List.</li>
                    <li className="text">I was selected for ITEE Training Program which comprised of 20 students in the CSE department.</li>
                    <li className="text"> Elected as the team leader in all the group projects.</li>
                </ul>
                <a href="" className="btn block w-fit absolute bottom-2 right-2">
                    Visite Website
                </a>
            </main>
        </div>
    </section>
    </>
  )
}

export default Degree
