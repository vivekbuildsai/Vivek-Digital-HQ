interface ProjectTagsProps {
  technologies: string[];
}

export default function ProjectTags({
  technologies,
}: ProjectTagsProps) {
  return (
    <div className="mb-8">
      <h4 className="mb-5 text-lg font-semibold text-white">
        Technologies
      </h4>

      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
