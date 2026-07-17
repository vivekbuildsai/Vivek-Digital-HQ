import type { Project } from "../../types/project";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({
  project,
}: ProjectHeaderProps) {
  return (
    <header className="mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
        {project.category}
      </p>

      <h1 className="mb-6 text-5xl font-black text-white md:text-6xl">
        {project.title}
      </h1>

      <p className="max-w-4xl text-xl leading-9 text-slate-300">
        {project.overview}
      </p>
    </header>
  );
}
