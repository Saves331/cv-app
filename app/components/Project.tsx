type ProjectProps = {
  title: string;
  description: string;
  year: string;
  image: string;
  url: string;
};

type Props = {
  projects: ProjectProps[];
};

function Project({ projects }: Props) {
  if (!projects.length) return null;

  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center min-h-screen px-6"
    >
      <div className="text-center tracking-wider mb-12">
        <h3>Browse my projects</h3>
        <h2 className="section-text">Main Projects</h2>
      </div>

      <div className="max-w-[1080px] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-xl overflow-hidden p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg max-h-100 h-full cursor-pointer antiBackDrop"
          >
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="rounded-lg mb-4 object-cover h-60 mx-auto"
              draggable={false}
            />

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
