type  ProjectProps = {
    title: string;
    description: string;
    year: string;
}

type Project = {
    projects: ProjectProps[];
}

function Project({projects}: Project) {
  return (
    <section className="h-screen" id="projects">

        <div>

        </div>


        <div>
          {projects.map((project, index) => ( 
          <div key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span>{project.year}</span>
          </div>
        ))}
        </div>
    </section>
  )
}

export default Project