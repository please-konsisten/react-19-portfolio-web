import { Mail, GitBranchIcon, BoxesLinkedIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Separator } from "../components/ui/separator";

interface Experience {
  role: string;
  description: string;
  logo: string;
  start: string;
  end: string;
}

const experiences: Experience[] = [
  {
    role: "Frontend Developer at Maxy Academy",
    description: "Developed Career Recommendation application using Generative AI for Final Capstone Project",
    logo: "/images/experience/bangkit.png",
    start: "9/10/2024",
    end: "12/20/2024",
  },
];

const socials = [
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/your-username", icon: GitBranchIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: BoxesLinkedIcon },
];

export default function ExperiencePage() {
  return (
    <>
      <main className="mx-auto w-full max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp) => (
            <Card
              key={exp.role}
              className="border-0 bg-slate-800 text-center text-slate-100"
            >
              <CardHeader className="items-center pb-2">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg bg-white p-2">
                  <img
                    src={exp.logo}
                    alt={exp.role}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <CardTitle className="pt-4 text-xl font-semibold leading-snug">
                  {exp.role}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <CardDescription className="text-slate-400">
                  {exp.description}
                </CardDescription>
                <div className="space-y-1 text-sm">
                  <p>Start Date: {exp.start}</p>
                  <p>End Date: {exp.end}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="mt-6 pb-10 text-center text-slate-100">
        <Separator className="mb-8 bg-slate-800" />
        <p className="mb-5">© 2024 My Portfolio. All rights reserved.</p>
        <div className="flex items-center justify-center gap-8">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-yellow-400"
            >
              <Icon size={22} />
              {label}
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
