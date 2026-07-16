import Container from "../components/shared/Container";

export default function About() {
  return (
    <Container>
      <section className="py-32">
        <h1 className="mb-6 text-5xl font-bold text-white">
          About
        </h1>

        <p className="max-w-3xl text-lg text-slate-300">
          Learn more about my engineering journey, experience and approach to
          building reliable software systems.
        </p>
      </section>
    </Container>
  );
}
