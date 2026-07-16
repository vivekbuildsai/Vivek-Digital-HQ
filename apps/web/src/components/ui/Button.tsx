import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan-400 text-black hover:bg-cyan-300"
      : "border border-white/20 bg-transparent text-white hover:border-cyan-400 hover:text-cyan-300";

  return (
    <button
      className={`rounded-2xl px-8 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] ${styles}`}
    >
      {children}
    </button>
  );
}
