export default function ScrollIndicator() {
  return (
    <a
      href="#journey"
      className="absolute bottom-12 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </span>

        <div className="flex h-12 w-6 items-start justify-center rounded-full border border-slate-700 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </div>
    </a>
  );
}
