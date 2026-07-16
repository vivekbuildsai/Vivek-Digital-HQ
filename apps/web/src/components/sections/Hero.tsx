import { motion } from "framer-motion";

import Container from "../shared/Container";
import Button from "../ui/Button";
import TechChip from "../ui/TechChip";
import StatusBadge from "../ui/StatusBadge";
import ScrollIndicator from "../ui/ScrollIndicator";

import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-20"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <StatusBadge />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400"
          >
            SOFTWARE ENGINEER • DEVOPS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-8 text-6xl font-black leading-none tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mx-auto mb-12 max-w-3xl text-lg leading-9 text-slate-300 sm:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap justify-center gap-5"
          >
            <Button>
              View Projects
            </Button>

            <Button variant="secondary">
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-3"
          >
            {profile.focus.map((tech) => (
              <TechChip
                key={tech}
                name={tech}
              />
            ))}
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
