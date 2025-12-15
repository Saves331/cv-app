type  ProjectProps = {
    title: string;
    description: string;
    year: string;
}

function Project({ title, description, year }: ProjectProps) {
  return (
    <section>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Year: {year}</p>
    </section>
  )
}

export default Project