import { Link, useParams } from "react-router-dom";

import Container from "../components/shared/Container";
import ProjectHeader from "../components/project/ProjectHeader";
import ProjectSection from "../components/project/ProjectSection";

import { getProjectBySlug } from "../lib/projects";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = getProjectBySlug(slug ?? "");

  if (!project) {
    return (
      <Container>
        <section className="py-32 text-center">
          <h1 className="mb-6 text-5xl font-bold text-white">
            Project Not Found
          </h1>

          <p className="mb-10 text-slate-400">
            The requested project does not exist.
          </p>

          <Link
            to="/projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            ← Back to Projects
          </Link>
        </section>
      </Container>
    );
  }

  return (
    <Container>
      <section className="py-32">

        <ProjectHeader project={project} />

        <ProjectSection title="Challenge">
          <p className="leading-8 text-slate-300">
            {project.challenge}
          </p>
        </ProjectSection>

        <ProjectSection title="Solution">
          <p className="leading-8 text-slate-300">
            {project.solution}
          </p>
        </ProjectSection>

        <ProjectSection title="Architecture">
          <div className="space-y-4">
            {project.architecture.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-cyan-300"
              >
                {item}
              </div>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Kubernetes Objects">
          <ul className="space-y-3">
            {project.kubernetesObjects.map((item) => (
              <li
                key={item}
                className="text-slate-300"
              >
                • {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Repository Structure">
          <ul className="space-y-3">
            {project.projectStructure.map((item) => (
              <li
                key={item}
                className="font-mono text-cyan-300"
              >
                {item}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Commands Used">
          <div className="space-y-4">
            {project.commands.map((command) => (
              <pre
                key={command}
                className="overflow-x-auto rounded-xl bg-black p-4 text-green-400"
              >
                <code>{command}</code>
              </pre>
            ))}
          </div>
        </ProjectSection>

        <ProjectSection title="Key Learnings">
          <ul className="space-y-3">
            {project.learnings.map((learning) => (
              <li
                key={learning}
                className="text-slate-300"
              >
                • {learning}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Interview Questions">
          <ul className="space-y-4">
            {project.interviewQuestions.map((question) => (
              <li
                key={question}
                className="rounded-xl border border-white/10 p-4 text-slate-300"
              >
                {question}
              </li>
            ))}
          </ul>
        </ProjectSection>

        <ProjectSection title="Source Code">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            View on GitHub →
          </a>
        </ProjectSection>

      </section>
    </Container>
  );
}
