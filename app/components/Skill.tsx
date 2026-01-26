import { flushAllTraces } from "next/dist/trace";
import { Preahvihear } from "next/font/google";
import { useState } from "react";

type Skill = {
    name: string;
    level: string;
}

type Props = {
    skills: Skill[];
}

function SkillComponent({ skills }: Props) {

    const [des, setDes] = useState(false);

    function toggleDes(name:String) {
        setDes(prev => {
            console.log(name, "toggle to", !prev)
            return !prev;
        }
            
        )
    }
  return (
    <section className="min-h-screen flex justify-center items-center flex-col gap-20" id="experience">

      <div className="text-center">
        <h3>Explore My</h3>
        <h2 className="section-text">Skills</h2>
      </div>

        
        
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 w-full md:w-fit">
    {skills.map((skill, index) => (
        <div 
            key={index} 
            // CHANGED:  Adjusted for grid layout - removed mb-4, sm:mb-6
            className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover: shadow-md dark:border-gray-700 dark:bg-gray-800 md:flex-row md:items-center md:justify-between md:gap-10 md:p-5 w-full"
        >
            {/* CHANGED: Responsive breakpoint changed from sm to md */}
            <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
                {skill.name}
            </h1>
            {/* CHANGED: Responsive breakpoint changed from sm to md */}
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3">
                {/* CHANGED: Responsive breakpoint changed from sm to md */}
                <button
  className="
    cursor-pointer
    rounded-md
    border
    border-gray-300
    bg-gray-100
    px-4
    py-2
    text-sm
    font-medium
    text-gray-700
    transition-all
    hover:bg-gray-200
    hover:border-gray-400
    hover:shadow-sm
    dark:border-gray-600
    dark:bg-gray-700
    dark:text-gray-200
    dark:hover:bg-gray-600
    md:text-base
  "

  onClick={() => toggleDes(skill.name)}
>
  Description
</button>

                
                <div className="flex items-center gap-2">
                    
                    {/* CHANGED: Responsive breakpoint changed from sm to md */}
                    
                </div>
            </div>
        </div>
    ))}
</div>
        
    </section>
  )
}

export default SkillComponent