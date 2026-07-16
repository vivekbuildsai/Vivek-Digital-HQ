import Container from "../shared/Container";
import FadeIn from "../shared/FadeIn";
import SectionTitle from "../ui/SectionTitle";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32"
    >
      <Container>
        <FadeIn>
          <SectionTitle
            subtitle="MY STORY"
            title="Engineering Journey"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="grid gap-16 lg:grid-cols-2">
            <div className="space-y-6 text-lg leading-9 text-slate-300">
              <p>
                My engineering journey began in telecom systems, where I worked
                with Linux, networking and distributed environments.
              </p>

              <p>
                That experience sparked a deep interest in automation,
                infrastructure and cloud-native engineering.
              </p>

              <p>
                Today I focus on Kubernetes, Docker, Terraform, AWS and modern
                CI/CD pipelines while building production-style DevOps projects.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h3 className="mb-8 text-2xl font-bold">
                Current Focus
              </h3>

              <div className="space-y-4">
                {[
                  "Kubernetes",
                  "Docker",
                  "AWS",
                  "Terraform",
                  "GitHub Actions",
                  "Linux",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="h-2 w-2 rounded-full bg-cyan-400" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
