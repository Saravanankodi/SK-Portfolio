import { useState } from "react";
import { Plus, X } from "lucide-react";
import WorkDetails from "./WorkDetails";
// import { Button } from "@/components/ui/button";

const data = [
  {
    job:"Senior UI/UX Designer",
    company:"DesFlyer",
    timeline:"2023- PRESENT",
    details:[
      "Leading UI/UX design for digital products, focusing on user research, wireframing,prototyping, and usability testing. Collaborating with developers, optimizing user flows, and mentoring interns while enhancing branding and digital experiences using Figma and Adobe XD."
    ]
  },
  {
    job:"Senior UI/UX Designer",
    company:"DesFlyer",
    timeline:"2023- PRESENT",
    details:[
      "Leading UI/UX design for digital products, focusing on user research, wireframing,prototyping, and usability testing. Collaborating with developers, optimizing user flows, and mentoring interns while enhancing branding and digital experiences using Figma and Adobe XD."
    ]
  }
]

export default function HeaderWithToggleNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-gray-100 shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 bg-white">
        <h1 className="text-xl font-bold">Work</h1>
        <button onClick={() => setOpen(!open)} className="p-2 rounded-md bg-transparent hover:bg-gray-200 transition-colors">
            {open ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </button>
      </div>
      {/* Toggleable Nav Section */}
      {open && (
        <div className="w-full h-auto flex flex-col gap-5 px-4 py-2 bg-gray-50 border-t border-gray-200 animate-fadeIn">
          {data.map((item,index)=>(
            <WorkDetails
            key={index}
            jobName={item.job}
            company={item.company}
            timeline={item.timeline}
            details={item.details}/>
          ))}
        </div>
      )}
    </div>
  );
}
