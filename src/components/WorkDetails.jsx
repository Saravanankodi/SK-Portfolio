import React from 'react'

function WorkDetails({logo,jobName,company,timeline,address,details}) {
  return (
    <>
    <section className="h-auto w-full p-5 border-2 border-cyan-600 rounded-lg">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <main className="w-full text-black">
            <header className="w-full flex items-center justify-between">
                <div className="">
                    <h2 className="heading font-semibold text-xl sm:text-2xl">
                        {jobName}
                    </h2>
                    <p className="text text-base sm:text-lg">
                        {company}
                    </p>
                </div>
                <div className=" text-base sm:text-lg">
                    <p className="">
                        {timeline}
                    </p>
                    <p className=" text-base sm:text-lg">
                        {address}
                    </p>
                </div>
            </header>
            <div className="h-auto my-2.5">
                {details.map((info,index)=>(
                    <p key={index} className="text text-sm sm:text-base my-1">
                        {info}
                    </p>
                ))}
            </div>
        </main>
    </section>
    </>
  )
}

export default WorkDetails