import Container from "../shared/Container";
import SectionTitle from "../ui/SectionTitle";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-32"
    >
      <Container>
        <SectionTitle
          subtitle="MY STORY"
          title="Engineering Journey"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div className="space-y-6 text-lg leading-9 text-slate-300">
            <p>
              My engineering journey began in the telecom domain, where I
              worked with Linux systems, networking concepts, automation and
              large-scale distributed environments.
            </p>

            <p>
              Working on production systems taught me the importance of
              reliability, observability and automation. Those experiences
              naturally sparked my interest in cloud infrastructure and DevOps.
            </p>

            <p>
              Today I'm focused on building production-style projects using
              Kubernetes, Docker, Terraform, AWS and GitHub Actions while
              continuously improving my understanding of cloud-native
              architecture and modern deployment practices.
            </p>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h3 className="mb-8 text-2xl font-bold text-white">
              Current Focus
            </h3>

            <div className="space-y-5">
              {[
                "Kubernetes",
                "Docker",
                "AWS",
                "Terraform",
                "GitHub Actions",
                "Linux",
                "CI/CD",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
