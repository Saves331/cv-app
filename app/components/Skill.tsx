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
       <div className="relative flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:p-5 w-full"
            key={index}>
  <h1 className="text-xl font-semibold text-gray-800 lg:text-2xl dark:text-gray-100">
    {skill.name}
  </h1>

  <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-3">
    <button
      className="cursor-pointer rounded-md border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-200 hover:border-gray-400 hover:shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 lg:text-base z-45"
      onClick={() => toggleDropdown(index)}
    >
      Description
    </button>
  </div>

  {/* Backdrop only when open */}
  {openIndex === index && (
    <div
      className="fixed inset-0 z-40"
      onMouseDown={() => setOpenIndex(null)}
    />
  )}

  {/* Dropdown ALWAYS rendered -> animations work */}
  <div
    className={`absolute top-full left-0 mt-2 w-full rounded-md border p-3 bg-gray-200 z-50 opacity-0 overflow-hidden
      transition-[max-height,opacity,transform] duration-300 ease-in
      ${openIndex === index ? "max-h-96 translate-y-0 opacity-100" : "max-h-0 -translate-y-1"}
    `}
    onMouseDown={(e) => e.stopPropagation()} // so clicks inside don't close via backdrop
  >
    <h2 className="text-sm text-gray-500 text-center">
      <span className="font-semibold text-blue-500">Level:</span> {skill.level}
    </h2>
    <p className="text-sm mt-1">
      <b>{skill.name}</b>.
    </p>
  </div>
</div>
        
    ))}
</div>
        
    </section>
  )
}

export default SkillComponent