import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    <section className="mx-auto max-w-5xl px-6 min-h-screen flex justify-center items-center flex-col gap-16 py-24" id="experience">

      <div className="text-center">
        <h3>Explore my</h3>
        <h2 className="section-text">Skills</h2>
        <div className="retro-rule"><span /></div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
        {skills.map((skill, index) => (
          <div className="relative retro-card flex items-center justify-between gap-6 p-5 w-full" key={index}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-xl lg:text-2xl font-semibold">
                {skill.name}
              </span>
            </div>

            <button
              className="retro-btn retro-btn-ghost !px-3 !py-2 !text-xs z-45"
              onClick={() => toggleDropdown(index)}
              aria-expanded={openIndex === index}
            >
              Info
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>

            {/* Backdrop only when open */}
            {openIndex === index && (
              <div
                className="fixed inset-0 z-40"
                onMouseDown={() => setOpenIndex(null)}
              />
            )}

            {/* Dropdown ALWAYS rendered -> animations work */}
            <div
              className={`absolute top-full left-0 mt-3 w-full rounded-md border-2 border-ink bg-paper-2 shadow-[4px_4px_0_var(--ink)] z-50 overflow-hidden
                transition-[max-height,opacity] duration-300 ease-out
                ${openIndex === index ? "max-h-96 opacity-100 p-4" : "max-h-0 opacity-0 p-0 border-transparent shadow-none"}
              `}
              onMouseDown={(e) => e.stopPropagation()} // so clicks inside don't close via backdrop
            >
              <span className="retro-tag">{skill.name}</span>
              <p className="text-sm mt-3 mb-0 text-ink">{skill.level}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default SkillComponent
