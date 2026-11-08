import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, type ProjectCategory } from "../data/portfolio";
import PageHeader from "../components/common/PageHeader";
import ProjectCard from "../components/common/ProjectCard";

const filters: ("All" | ProjectCategory)[] = ["All", "Web", "AI / ML", "Data"];

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Things I've"
        accent="built"
        description="From deep learning research to fullstack web apps — a selection of projects that shaped how I work."
      />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div role="tablist" aria-label="Filter projects" className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={
                "relative rounded-full px-5 py-2 text-sm font-semibold transition-colors " +
                (active === f
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white")
              }
            >
              {active === f && (
                <motion.span layoutId="filter-pill" className="absolute inset-0 -z-10 rounded-full bg-yellow-400" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </>
  );
}
