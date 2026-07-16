interface TechChipProps {
  name: string;
}

export default function TechChip({ name }: TechChipProps) {
  return (
    <div className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/20">
      {name}
    </div>
  );
}
