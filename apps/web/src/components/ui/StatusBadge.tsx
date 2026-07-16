export default function StatusBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 backdrop-blur-xl">
      <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

      <span className="text-sm font-medium text-cyan-300">
        Available for DevOps & Cloud Opportunities
      </span>
    </div>
  );
}
