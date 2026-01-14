import { url } from "inspector";

type ProjectProps = {
  title: string;
  description: string;
  year: string;
  image: string;
  url: string; 
};

type Project = {
  projects: ProjectProps[];
};

function Project({ projects }: Project) {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen px-6"
    >
      {/* Section heading */}
      <div className="text-center tracking-wider mb-12">
        <h3>Browse my projects</h3>
        <h2 className="section-text">Projects</h2>
      </div>

      {/* Projects grid */}
      <div className="max-w-[1080px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {projects.map((project, index) => (
          <a
            href={project.url}
            target="_blank"
            key={index}
            className="border rounded-xl overflow-hidden p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg max-h-100 h-full cursor-pointer"
          >
            {/* Image */}
            
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-60 mx-auto"
              draggable={false}
            />

            {/* Content */}
            <div className="text-center tracking-wider">
              <h2 className="text-xl font-semibold mb-2">
                {project.title}
              </h2>

              <p className="text-sm text-gray-400 mb-3">
                {project.description}
              </p>

              <span className="text-xs text-gray-500">
                {project.year}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
