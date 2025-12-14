type AboutProps = {
    name: string;
    role: string;
    year: string;
}

function About({ name, role, year }: AboutProps) {
  return (
    <section>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <p>Year: {year}</p>
    </section>
  )
}

export default About