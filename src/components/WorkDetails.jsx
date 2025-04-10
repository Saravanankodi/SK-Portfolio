import React from 'react'

function WorkDetails({logo,jobName,company}) {
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
                        ui/ux
                    </h2>
                    <p className="text">
                        Desflyer
                    </p>
                </div>
                <div className=" text-base">
                    <p className="">
                        January 2021 - PRESENT
                    </p>
                    <p className=" text-base">
                        Markham, ON, Canada (Remote)
                    </p>
                </div>
            </header>
            <div className="">
                <p className="text text-xs font-semibold text-justify lg:text-sm">
                Worked with 2 Insurance Bureau of Canada and Pixelmask Inc. as a Contractor via CodeExcel. Engaged in 5 successful projects utilizing stacks such as: React, .Net Core, MS SQL Server, Azure Cloud Services (AD, B2C, Key Vault, Blob Storage, Front Door etc). The projects are mainly focused towards the North American Insurance Industry.
                </p>
                <p className="text text-xs lg:text-sm">
                - Led and mentored teams across 4 distinct projects, overseeing the phases of development, architecture, database design, and load testing using React, .Net, and Azure Cloud services
                </p>
                <p className="text text-sm">
                - Spearheaded critical optimizations in the PDF generation process by replacing resource-intensive Aspose library and utilizing multi - threaded conversions, reducing generation time by 76% and boosting throughput by 290% under maximum load, restoring compliance with SLA requirements.
                </p>
                <p className="text text-sm">
                - Investigated and resolved a defect with the Algolia search function integration, reducing service cost by 75%
                </p>
                <p className="text text-sm">
                - Uncovered critical project vulnerabilities within 2 days of joining the IBC team, enabling timely remediation and preventing potential losses
                </p>
                <p className="text">
                - Implemented Single Sign - On(SSO) via Azure B2C across multiple legacy projects, simplifying user experience and reducing account management, resulting in seamless login with company credentials
                </p>
                <p className="text">
                - Recommended and built a custom .Net API for automatic user synchronization between IDP and application instead of relying on a third-party solution, reducing project cost by 13%
                </p>
                <p className="text">
                - Implemented flexible .Net payment gateway module and custom React hooks, enabling clients to easily switch gateways, increasing convenience and expanding options
                </p>
                <p className="text">
                - Demonstrated proficiency in frontend architecture, state management, and component-based programming for cross-browser compatibility to achieve a 25% reduction in page load time
                </p>
            </div>
        </main>
    </section>
    </>
  )
}

export default WorkDetails