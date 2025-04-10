import { useState } from "react";
import { Plus, X } from "lucide-react";
import WorkDetails from "./WorkDetails";
// import { Button } from "@/components/ui/button";

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
        <div className="w-full h-auto flex flex-col px-4 py-2 bg-gray-50 border-t border-gray-200 animate-fadeIn">
          <WorkDetails/>
        </div>
      )}
    </div>
  );
}
