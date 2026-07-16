import { motion } from "framer-motion";

interface ProjectArchitectureProps {
  architecture: string[];
}

export default function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  return (
    <div className="mb-8">
      <h4 className="mb-5 text-lg font-semibold text-white">
        Architecture
      </h4>

      <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
        <div className="flex flex-col items-center">
          {architecture.map((step, index) => (
            <div
              key={step}
              className="flex w-full flex-col items-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="w-full rounded-xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-center text-sm font-medium text-cyan-300"
              >
                {step}
              </motion.div>

              {index < architecture.length - 1 && (
                <div className="py-2 text-cyan-400">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
