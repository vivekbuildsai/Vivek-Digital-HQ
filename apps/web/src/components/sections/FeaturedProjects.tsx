import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

import ProjectArchitecture from "../projects/ProjectArchitecture";
import ProjectTags from "../projects/ProjectTags";
import ProjectActions from "../projects/ProjectActions";

import { projects } from "../../data/projects";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-32"
    >
      <Container>
        <SectionTitle
          subtitle="ENGINEERING WORK"
          title="Featured Projects"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex h-full flex-col">
                {/* Category */}
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="mb-8 text-3xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Challenge */}
                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Challenge
                  </h4>

                  <p className="leading-8 text-slate-300">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Solution
                  </h4>

                  <p className="leading-8 text-slate-300">
                    {project.solution}
                  </p>
                </div>

                {/* Architecture */}
                <ProjectArchitecture
                  architecture={project.architecture}
                />

                {/* Key Learnings */}
                <div className="mb-8">
                  <h4 className="mb-3 text-lg font-semibold text-white">
                    Key Learnings
                  </h4>

                  <ul className="space-y-3">
                    {project.learnings.map((learning) => (
                      <li
                        key={learning}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <ProjectTags
                  technologies={project.technologies}
                />

                {/* Actions */}
                <ProjectActions
                  github={project.github}
                  documentation={project.documentation}
                  demo={project.demo}
                />
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
