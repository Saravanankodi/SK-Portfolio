import React from 'react'

function WorkDetails({logo,jobName,company,timeline,address,details}) {
  return (
    <>
    <section className="h-auto w-fit p-5 border-2 border-cyan-600 rounded-lg">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <main className="w-full text-black">
            <header className="w-full flex items-center justify-between">
                <div className="">
                    <h2 className="heading font-semibold text-xl">
                        {jobName}
                    </h2>
                    <p className="text">
                        {company}
                    </p>
                </div>
                <div className=" text-base">
                    <p className="">
                        {timeline}
                    </p>
                    <p className=" text-base">
                        {address}
                    </p>
                </div>
            </header>
            <div className="">
                {details.map((info,index)=>(
                    <p key={index} className="text text-sm">
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