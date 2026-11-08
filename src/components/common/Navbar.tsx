import { useState } from "react";
import { Link, NavLink } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "../theme-provider";
import { profile } from "../../data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/skills", label: "Skills" },
  { to: "/certificates", label: "Certificates" },
];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark =
    theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 text-slate-700 transition hover:border-yellow-400 hover:text-yellow-500 dark:border-slate-700 dark:text-slate-300"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/75 backdrop-blur-lg dark:border-slate-800/80 dark:bg-[#0b1220]/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold tracking-tight" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500 text-sm font-extrabold text-slate-900">
            {profile.firstName[0]}
          </span>
          <span className="hidden sm:inline">{profile.firstName}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  "relative block rounded-full px-4 py-2 text-sm font-medium transition-colors " +
                  (isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white")
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-yellow-400/25 ring-1 ring-yellow-400/60"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 dark:border-slate-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 px-4 md:hidden dark:border-slate-800"
          >
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    "block border-b border-slate-100 py-3 text-base font-medium dark:border-slate-800/60 " +
                    (isActive ? "text-yellow-600 dark:text-yellow-400" : "text-slate-600 dark:text-slate-300")
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
