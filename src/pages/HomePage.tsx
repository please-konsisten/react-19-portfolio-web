import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Briefcase, Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { marqueeSkills, profile, projects, socials, experiences } from "../data/portfolio";
import Reveal from "../components/common/Reveal";
import ProjectCard from "../components/common/ProjectCard";
import SocialIcon from "../components/common/SocialIcon";

function RotatingRole() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, [reduce]);
  return (
    <span className="relative inline-flex p-0 m-0 overflow-hidden align-bottom">
      <motion.span
        key={i}
        initial={{ y: reduce ? 0 : 28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-semibold text-yellow-600 dark:text-yellow-400"
      >
        {profile.roles[i]}
      </motion.span>
    </span>
  );
}

const featured = projects.filter((p) => p.featured);

export default function HomePage() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: { opacity: 1, y: 0, transition: { duration: reduce ? 0 : 0.6, ease: "easeOut" } },
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="bg-grid absolute inset-0" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-yellow-400/20 blur-3xl dark:bg-yellow-400/10"
          animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 lg:pt-24">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.span
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-700 dark:text-yellow-300"
            >
              <Sparkles size={14} /> Open to new opportunities
            </motion.span>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-yellow-500 to-amber-400 bg-clip-text text-transparent">
                {profile.firstName} {profile.lastName}
              </span>
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              I build as a <RotatingRole />
            </motion.p>

            <motion.p variants={item} className="mt-5 w-full leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.intro}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><GraduationCap size={16} className="text-yellow-500" /> {profile.education}</span>
              <span className="flex items-center gap-1.5"><MapPin size={16} className="text-yellow-500" /> {profile.location}</span>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.div whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.96 }}>
                <Link
                  to="/projects"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-yellow-400 px-7 font-semibold text-slate-900 shadow-lg shadow-yellow-400/30 transition hover:bg-yellow-300"
                >
                  View Projects <ArrowRight size={18} />
                </Link>
              </motion.div>
              {[{ label: "Experience", to: "/experience" }].map(({ label, to }) => (
                <motion.div key={label} whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.96 }}>
                  <Link
                    to={to}
                    className="inline-flex h-12 items-center rounded-full border-2 border-yellow-400 px-7 font-semibold transition hover:bg-yellow-400 hover:text-slate-900"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div whileHover={reduce ? undefined : { scale: 1.05 }} whileTap={reduce ? undefined : { scale: 0.96 }}>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-slate-300 px-6 font-semibold transition hover:border-yellow-400 dark:border-slate-700"
                >
                  <Download size={17} /> CV
                </a>
              </motion.div>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex gap-3">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-300 text-slate-600 transition hover:-translate-y-0.5 hover:border-yellow-400 hover:text-yellow-500 dark:border-slate-700 dark:text-slate-400"
                >
                  <SocialIcon name={icon} size={18} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="mt-16 overflow-hidden" aria-label="Tech stack">
        <div className="marquee relative [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
          <div className="animate-marquee flex w-max gap-3 py-2">
            {[...marqueeSkills, ...marqueeSkills].map((s, i) => (
              <span
                key={i}
                className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600 dark:text-yellow-400">Selected work</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Featured projects</h2>
            </div>
            <Link to="/projects" className="hidden items-center gap-1 text-sm font-semibold hover:text-yellow-500 sm:flex">
              All projects <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <ProjectCard project={p} compact />
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-600 dark:text-yellow-400">Journey</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Where I&apos;ve been</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {experiences.map((e, i) => (
            <Reveal key={e.role} delay={i * 0.1}>
              <Link
                to="/experience"
                className="group block h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-yellow-400 dark:border-slate-800 dark:bg-slate-900/70"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-yellow-600 dark:text-yellow-400">
                  {e.type === "Education" ? <GraduationCap size={15} /> : <Briefcase size={15} />}
                  {e.type} · {e.period}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{e.role}</h3>
                <p className="text-sm text-slate-500">{e.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{e.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-24 max-w-6xl px-4">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-yellow-400 to-amber-500 px-6 py-14 text-center text-slate-900 sm:px-12">
            <div aria-hidden className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/30 blur-2xl" />
            <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">Let&apos;s build something useful together</h2>
            <p className="relative mx-auto mt-3 max-w-xl text-slate-800/80">
              Have a project, internship or collaboration in mind? I&apos;d love to hear about it.
            </p>
            <div className="relative mt-7 flex flex-wrap justify-center gap-3">
              <a href={socials[0].href} className="inline-flex h-12 items-center rounded-full bg-slate-900 px-7 font-semibold text-white transition hover:bg-slate-800">
                Get in touch
              </a>
              <Link to="/skills" className="inline-flex h-12 items-center rounded-full border-2 border-slate-900 px-7 font-semibold transition hover:bg-slate-900 hover:text-white">
                See my skills
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
