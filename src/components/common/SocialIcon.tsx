import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function SocialIcon({ name, size = 20 }: { name: "mail" | "github" | "linkedin"; size?: number }) {
  if (name === "github") return <GithubIcon width={size} height={size} />;
  if (name === "linkedin") return <LinkedinIcon width={size} height={size} />;
  return <Mail size={size} />;
}
