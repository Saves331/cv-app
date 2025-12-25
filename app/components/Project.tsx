import CicmanClicker from "../../public/images/CicCount.jpg";
import Trackrr from "../../public/images/Trackrr.jpg";

type  ProjectProps = {
    title: string;
    description: string;
    year: string;
    image: string;
}

type Project = {
    projects: ProjectProps[];
}

function Project({projects}: Project) {
  return (
    <section className="h-screen" id="projects">

        <div className="text-center">
          <h3>Browse my projects</h3>
          <h2 className="section-text">Projects</h2>
        </div>


        <div className="max-w-[1080px] w-full mx-auto flex">
          {projects.map((project, index) => ( 
          <div key={index} className="py-4 px-5 border w-1/2 rounded">
            <img
                  src={`/images/${project.image}`}
                  alt={project.title}
                />
                <h1>{project.image}</h1>
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