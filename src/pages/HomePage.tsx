import { Link } from "react-router";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "../components/ui/button";

const buttonClass =
  "h-12 rounded-full border-2 border-yellow-400 bg-transparent px-8 text-base font-semibold " +
  "text-slate-900 hover:bg-yellow-400 hover:text-slate-900 " +
  "dark:bg-transparent dark:text-slate-100 dark:hover:bg-yellow-400 dark:hover:text-slate-900";

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="relative flex flex-1 w-full items-center justify-center overflow-hidden bg-white px-4 py-10 transition-colors dark:bg-[#0f172a]">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/20 blur-3xl dark:bg-yellow-400/10 sm:h-96 sm:w-96"
        animate={reduceMotion ? undefined : { scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex w-full max-w-3xl flex-col items-center text-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-slate-200 sm:text-5xl md:text-6xl"
        >
          Hi, I&apos;m Athalla <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-yellow-500 to-amber-400 bg-clip-text text-transparent">
            Cahyo Nugroho
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
        >
          I am a Fullstack Developer with experience as both a Frontend and Backend
          Developer, building responsive web interfaces and reliable server-side
          applications. I take responsibility seriously and always welcome new
          challenges. Currently, I am deepening my skills in data analysis using Python
          and Excel, driven by a constant desire to learn and to deliver meaningful
          contributions to every project I take part in.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            { label: "Projects", to: "/project" },
            { label: "Experience", to: "/experience" },
          ].map(({ label, to }) => (
            <motion.div
              key={label}
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              <Button variant="outline" className={buttonClass}>
                <Link to={to}>{label}</Link>
              </Button>
            </motion.div>
          ))}

          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            whileTap={reduceMotion ? undefined : { scale: 0.96 }}
          >
            <Button variant="outline" className={buttonClass}>
              <a href="/cv.pdf" target="_blank" rel="noreferrer">
                CV
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}