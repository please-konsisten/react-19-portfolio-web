import { motion, useReducedMotion } from "framer-motion";
import { BrainCircuit, Monitor, Server, Sparkles, Wrench } from "lucide-react";
import { learning, skillGroups } from "../data/portfolio";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";

const icons = { monitor: Monitor, server: Server, brain: BrainCircuit, wrench: Wrench };

export default function SkillsPage() {
  const reduce = useReducedMotion();
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="My"
        accent="toolbox"
        description="Technologies I use to take an idea from interface to server to model."
      />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((g, i) => {
            const Icon = icons[g.icon];
            return (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-yellow-400 dark:border-slate-800 dark:bg-slate-900/70">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-500 text-slate-900">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h2 className="text-xl font-semibold">{g.title}</h2>
                      <p className="text-sm text-slate-500">{g.blurb}</p>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <motion.span
                        key={s}
                        whileHover={reduce ? undefined : { y: -3, scale: 1.05 }}
                        className="cursor-default rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-sm font-medium text-slate-700 hover:border-yellow-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                      >
                        {s}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10">
          <div className="rounded-2xl border border-dashed border-yellow-400/70 bg-yellow-400/5 p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold">
              <Sparkles size={18} className="text-yellow-500" /> Currently learning
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {learning.map((l) => (
                <span key={l} className="rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-semibold text-slate-900">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </main>
    </>
  );
}
