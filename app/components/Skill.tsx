type Skill = {
    name: string;
    level: string;
}

type Props = {
    skills: Skill[];
}

function SkillComponent({ skills }: Props) {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col gap-20" id="experience">

      <div className="text-center">
        <h3>Explore My</h3>
        <h2 className="section-text">Skills</h2>
      </div>

        
        
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-1 w-full md:w-fit">
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
                <span className="text-base font-medium text-gray-600 dark:text-gray-300 md:text-lg">
                    Level: 
                </span>
                <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                // CHANGED: Responsive breakpoint changed from sm to md
                                className={`h-2 w-6 rounded-full md:w-8 ${
                                    i < Number(skill. level)
                                        ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                                        : 'bg-gray-200 dark:bg-gray-600'
                                }`}
                            />
                        ))}
                    </div>
                    {/* CHANGED: Responsive breakpoint changed from sm to md */}
                    <span className="ml-2 text-base font-bold text-gray-800 dark: text-gray-100 md: text-lg">
                        {skill.level}/5
                    </span>
                </div>
            </div>
        </div>
    ))}
</div>
        
    </section>
  )
}

export default SkillComponent