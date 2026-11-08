import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, BarChart3, Briefcase, BrainCircuit, ShoppingCart } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { GithubIcon } from "./icons";

const icons = { brain: BrainCircuit, chart: BarChart3, cart: ShoppingCart, briefcase: Briefcase };

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const reduce = useReducedMotion();
  const Icon = icons[project.icon];
  return (
    <motion.article
      layout
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-yellow-500/10 dark:border-slate-800 dark:bg-slate-900/70"
    >
      <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
        <div aria-hidden className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
        <Icon size={54} className="relative text-white/90 drop-shadow transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute left-3 top-3 rounded-full bg-black/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{project.summary}</p>

        {!compact && (
          <ul className="mt-4 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.github || project.demo) && (
          <div className="mt-auto flex gap-4 pt-5 text-sm font-medium">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-yellow-500">
                <GithubIcon width={16} height={16} /> Code
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-yellow-500">
                Live demo <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
