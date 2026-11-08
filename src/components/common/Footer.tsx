import { profile, socials } from "../../data/portfolio";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 py-10 text-center dark:border-slate-800">
      <div className="flex items-center justify-center gap-6">
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-yellow-500 dark:text-slate-400 dark:hover:text-yellow-400"
          >
            <SocialIcon name={icon} size={18} />
            {label}
          </a>
        ))}
      </div>
      <p className="mt-5 text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
