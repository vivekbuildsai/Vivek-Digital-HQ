import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/40 hover:bg-white/10">
      {children}
    </div>
  );
}
