import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certificates } from "../data/portfolio";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";

export default function CertificatesPage() {
  const reduce = useReducedMotion();
  return (
    <>
      <PageHeader
        eyebrow="Certificates"
        title="Proof of"
        accent="learning"
        description="Courses and programs that sharpened my skills."
      />
      <main className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <motion.article
                whileHover={reduce ? undefined : { y: -6, rotate: -0.4 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-xl hover:shadow-yellow-500/10 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="relative flex h-32 items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                  <div aria-hidden className="absolute inset-0 opacity-40 [background:radial-gradient(circle_at_80%_10%,#facc15,transparent_50%)]" />
                  <Award size={48} className="relative text-yellow-400" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
                    {c.issuer} · {c.date}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug">{c.title}</h2>
                  {c.credentialId && <p className="mt-1 font-mono text-xs text-slate-500">ID: {c.credentialId}</p>}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.skills.map((s) => (
                      <span key={s} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  {c.url && (
                    <a href={c.url} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold hover:text-yellow-500">
                      View credential <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </main>
    </>
  );
}
