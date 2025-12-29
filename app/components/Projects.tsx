import { projects } from "../skills";
import CardImage from "./CardImage";

const Projects = () => {
  return (
    <div className="p-8 md:p-20" id="project">
      <h2 className="text-2xl md:text-3xl font-medium mb-6">Projects</h2>
      <p className="mb-10 md:mb-20 text-base md:text-lg text-gray-500">
        A selection of projects showcasing my work across different domains,
        each focused on delivering exceptional user experiences and measurable
        business impact.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <CardImage key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
