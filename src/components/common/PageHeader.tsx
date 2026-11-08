import { motion, useReducedMotion } from "framer-motion";

export default function PageHeader({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  const reduce = useReducedMotion();
  return (
    <header className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80">
      <div aria-hidden className="bg-grid absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl dark:bg-yellow-400/10"
      />
      <motion.div
        initial={{ opacity: 0, y: reduce ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.55, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl px-4 pb-14 pt-20 text-center sm:pt-24"
      >
        <span className="inline-block rounded-full border border-yellow-400/50 bg-yellow-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-yellow-700 dark:text-yellow-300">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-amber-400 bg-clip-text text-transparent">{accent}</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-400">{description}</p>
      </motion.div>
    </header>
  );
}
