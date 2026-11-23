import { useState } from "react";

type Skill = {name: string; level: string};
type Props = {skills: Skill[]}

function SkillComponent({skills}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="skills">
      <h2>
        Skills
      </h2>

    {/*debug*/}
      <p>
        openIndex: {openIndex === null ? "null" : openIndex}
      </p>


      <div>
        {skills.map((skill, index) => (

          <div key={index}>

          </div>

        ))}
      </div>
    </section>
  )
}

export default SkillComponent