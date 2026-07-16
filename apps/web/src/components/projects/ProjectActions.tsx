interface ProjectActionsProps {
  github: string;
  documentation?: string;
  demo?: string;
}

export default function ProjectActions({
  github,
  documentation,
  demo,
}: ProjectActionsProps) {
  return (
    <div className="mt-auto flex flex-wrap gap-4">
      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noreferrer"
        className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/20"
      >
        GitHub →
      </a>

      {/* Documentation */}
      {documentation ? (
        <a
          href={documentation}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
        >
          Documentation
        </a>
      ) : (
        <button
          disabled
          className="cursor-not-allowed rounded-xl border border-white/10 px-5 py-3 text-sm text-slate-500"
        >
          Documentation (Coming Soon)
        </button>
      )}

      {/* Live Demo */}
      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
        >
          Live Demo
        </a>
      ) : null}
    </div>
  );
}
