import { Briefcase, FlaskConical, GraduationCap } from "lucide-react";
import { experiences, type ExperienceType } from "../data/portfolio";
import PageHeader from "../components/common/PageHeader";
import Reveal from "../components/common/Reveal";

const icons: Record<ExperienceType, typeof Briefcase> = {
  Work: Briefcase,
  Education: GraduationCap,
  Research: FlaskConical,
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="My"
        accent="journey"
        description="Work, research and education that built my foundation as a developer."
      />
      <main className="mx-auto max-w-3xl px-4 py-14">
        <ol className="relative border-l-2 border-slate-200 dark:border-slate-800">
          {experiences.map((e, i) => {
            const Icon = icons[e.type];
            return (
              <li key={e.role} className="mb-10 ml-8 last:mb-0">
                <span className="absolute -left-[17px] grid h-8 w-8 place-items-center rounded-full bg-yellow-400 text-slate-900 ring-4 ring-slate-50 dark:ring-[#0b1220]">
                  <Icon size={16} />
                </span>
                <Reveal delay={i * 0.05}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-yellow-400 dark:border-slate-800 dark:bg-slate-900/70">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-yellow-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-yellow-700 dark:text-yellow-300">
                        {e.type}
                      </span>
                      <time className="text-sm text-slate-500">{e.period}</time>
                    </div>
                    <h2 className="mt-3 text-xl font-semibold">{e.role}</h2>
                    <p className="text-sm font-medium text-slate-500">{e.org}</p>
                    <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{e.description}</p>
                    {e.points && (
                      <ul className="mt-3 space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                        {e.points.map((p) => (
                          <li key={p} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    )}
                    {e.tags && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {e.tags.map((t) => (
                          <span key={t} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </main>
    </>
  );
}
