import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Props = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-cyan-500 text-black hover:bg-cyan-400"
      : "border border-white/20 bg-white/5 text-white hover:border-cyan-400 hover:bg-cyan-500/10";

  return (
    <button
      className={`group flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 ${styles}`}
    >
      {children}

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}
