import { useParams } from "react-router-dom";
import Container from "../components/shared/Container";

export default function ProjectDetail() {
  const { slug } = useParams();

  return (
    <Container>
      <section className="py-32">
        <h1 className="mb-4 text-5xl font-bold text-white">
          {slug}
        </h1>

        <p className="text-slate-300">
          Project detail page coming soon.
        </p>
      </section>
    </Container>
  );
}
