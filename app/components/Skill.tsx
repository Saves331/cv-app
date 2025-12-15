type SkillProps = {
    name: string;
    level: string;
}

function Skill({ name, level }: SkillProps) {
  return (
    <section>
        <p>Name: {name}</p>
        <p>Level: {level}</p>
    </section>
  )
}

export default Skill