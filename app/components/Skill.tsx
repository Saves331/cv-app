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

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    function toggleDropdown(index:number) {
            setOpenIndex((prev) => (prev === index ? null : index))
    }

  return (
    <section className="min-h-screen flex justify-center items-center flex-col gap-20" id="experience">

      <div className="text-center">
        <h3>Explore My</h3>
        <h2 className="section-text">Skills</h2>
      </div>

        
        
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 w-full lg:w-fit">
    {skills.map((skill, index) => (
        <div 
            key={index} 
           
            className="relative flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover: shadow-md dark:border-gray-700 dark:bg-gray-800 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg   :p-5 w-full"
        >
           
            <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl">
                {skill.name}
            </h1>
          
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
               
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
    lg:text-base
  "

  onClick={() => toggleDropdown(index)}
>
  Description
</button>

                
              
            </div>
             {openIndex === index && (
                <div className="z-[100] absolute top-[100] mt-2 w-full rounded-md border border-gray-200 bg-white p-3 text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 lg:mt-0 lg:w-80">
                  <p className="text-sm">
                    <span className="font-semibold">Level:</span> {skill.level}
                  </p>
                  <p className="text-sm mt-1">
                    This is the dropdown content for <b>{skill.name}</b>.
                  </p>
                </div>
              )}
        </div>

        
    ))}
</div>
        
    </section>
  )
}

export default SkillComponent