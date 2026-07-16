import { motion } from "framer-motion";

import Container from "../shared/Container";
import Button from "../ui/Button";
import StatusBadge from "../ui/StatusBadge";
import TechChip from "../ui/TechChip";
import ScrollIndicator from "../ui/ScrollIndicator";

import { profile } from "../../data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24"
    >
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <StatusBadge />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            className="mb-6 text-sm font-bold tracking-[0.55em] text-cyan-400"
          >
            BUILD • AUTOMATE • DEPLOY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            className="mb-8 text-6xl font-black leading-none text-white md:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .2 }}
            className="mx-auto max-w-3xl text-xl leading-9 text-slate-300"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-12 flex flex-wrap justify-center gap-5"
          >
            <Button>
              Explore Projects
            </Button>

            <Button variant="secondary">
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .45 }}
            className="mx-auto mt-20 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <h3 className="mb-8 text-lg font-semibold uppercase tracking-[0.35em] text-cyan-400">
              Currently Building
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {profile.focus.map((item) => (
                <TechChip
                  key={item}
                  name={item}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
