type Props = {
  name: string;
};

export default function TechChip({ name }: Props) {
  return (
    <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300 backdrop-blur-sm transition hover:border-cyan-400 hover:bg-cyan-500/20">
      {name}
    </span>
  );
}
