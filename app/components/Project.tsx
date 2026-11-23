import { ArrowUpRight } from "lucide-react";

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
      className="mx-auto max-w-6xl flex flex-col justify-center items-center min-h-screen px-6 py-24 border-t-2 border-ink"
    >
      <div className="text-center mb-16">
        <h3>Browse my</h3>
        <h2 className="section-text">Projects</h2>
        <div className="retro-rule"><span /></div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group retro-card retro-card-hover overflow-hidden flex flex-col cursor-pointer antiBackDrop"
          >
            {/* Window-style title bar */}
            <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-ink bg-paper-2">
              <span className="w-3 h-3 rounded-full bg-accent border border-ink" />
              <span className="w-3 h-3 rounded-full bg-mustard border border-ink" />
              <span className="w-3 h-3 rounded-full bg-accent-2 border border-ink" />
              <span className="ml-auto text-[0.7rem] tracking-[0.15em] uppercase text-ink-soft">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="border-b-2 border-ink bg-paper-2 overflow-hidden">
              <img
                src={`/images/${project.image}`}
                alt={project.title}
                className="object-cover w-full h-60 sepia-[20%] group-hover:sepia-0 transition-all duration-300"
                draggable={false}
              />
            </div>

            <div className="p-6 flex flex-col gap-3 flex-1">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl font-extrabold">{project.title}</h2>
                <ArrowUpRight
                  size={22}
                  className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                />
              </div>

              <p className="text-sm m-0">{project.description}</p>

              {project.year && (
                <span className="retro-tag self-start mt-auto">{project.year}</span>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Project;
