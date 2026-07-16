type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-bold text-white">
        {title}
      </h2>
    </div>
  );
}
