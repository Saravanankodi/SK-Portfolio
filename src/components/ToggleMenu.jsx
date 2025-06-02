import { useState } from "react";
import { Plus, X } from "lucide-react";
import WorkDetails from "./WorkDetails";
// import { Button } from "@/components/ui/button";

const data = [
  {
    job:"UI/UX Designer",
    company:"DesFlyer",
    timeline:"Nov 2023 - Feb 2025",
    details:[
      "- Built a product and service-based company from the ground up, combining business strategy with human-centered design.",
      "- Designed intuitive and modern interfaces for SaaS products, websites, and mobile apps across various industries.",
      "- Led UI/UX design for multiple client projects, from research and wireframing to prototyping and final delivery.",
      "- Conducted user research, usability testing, and A/B testing to improve product usability and performance.",
      "- Mentored interns and junior designers; curated and conducted fullstack internship programs focused on design and development.",
      "Tools used: Figma, Adobe XD, Webflow, Miro, Canva, Illustrator, HTML/CSS (for handoff)"
    ]
  },
  {
    job:"UI/UX Designer Intern",
    company:"Baskethunt Pvt Ltd",
    timeline:"24/07/2023 - 26/09/2023",
    details:[
      "- Revamped the user interface of an e-commerce platform, improving conversion rate and reducing drop-offs by 25%.",
      "- Worked closely with product and development teams to translate business goals into effective user experiences.",
      "- Delivered wireframes, user flows, high-fidelity prototypes, and developer handoff documents for desktop and mobile apps.",
      "- Implemented consistent design systems to ensure visual coherence across platforms.",
      "Tools used: Figma, Zeplin, Adobe XD, Trello, Notion"
    ]
  },
  {
    job:"Freelance UI/UX Designer",
    company:"Remote Projects",
    timeline:"2021 - 2022",
    details:[
      "- Delivered end-to-end UI/UX solutions for 10+ clients in domains including education, healthtech, and logistics.",
      "- Focused on building user-first experiences with clean, modern aesthetics and clear UX flows.",
      "- Created brand identities, responsive website designs, mobile app designs, and pitch decks.",
      "Tools used: Figma, Adobe XD, Photoshop, Canva"
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
