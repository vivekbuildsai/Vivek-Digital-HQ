import type { ReactNode } from "react";

interface ProjectSectionProps {
  title: string;
  children: ReactNode;
}

export default function ProjectSection({
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="mb-16">
      <h2 className="mb-6 text-3xl font-bold text-white">
        {title}
      </h2>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        {children}
      </div>
    </section>
  );
}
