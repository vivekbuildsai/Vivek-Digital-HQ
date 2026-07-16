import { Link } from "react-router-dom";

import Container from "../components/shared/Container";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <Container>
      <section className="py-32">
        <h1 className="mb-4 text-5xl font-bold text-white">
          Engineering Projects
        </h1>

        <p className="mb-16 max-w-3xl text-lg text-slate-300">
          Hands-on DevOps, Kubernetes and Cloud projects built while
          transitioning into cloud engineering.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400"
            >
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
                {project.category}
              </p>

              <h2 className="mb-4 text-2xl font-bold text-white">
                {project.title}
              </h2>

              <p className="text-slate-300">
                {project.challenge}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
