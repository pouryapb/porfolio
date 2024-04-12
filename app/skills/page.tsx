import IconCard from "../components/iconCard";
import tsIcon from "@/public/typescript.svg";
import reactIcon from "@/public/react.svg";
import goIcon from "@/public/go.svg";
import nodeIcon from "@/public/nodejs.svg";
import angularIcon from "@/public/angular.svg";
import gitIcon from "@/public/git.svg";

export default function Skills() {
  return (
    <div className="flex h-80 w-96 flex-wrap justify-center gap-1">
      <p className="mb-5 w-80 text-justify font-sans font-semibold">
        I{"'"}m a hands-on individual with a strong grasp of emerging
        technologies. I{"'"}m constantly exploring new tools and enjoy applying
        them to build practical applications.
      </p>
      <IconCard
        icon={tsIcon}
        alt="TypeScript"
        href="https://typescriptlang.org"
      />
      <IconCard icon={reactIcon} alt="React" href="https://react.dev" />
      <IconCard icon={goIcon} alt="Golang" href="https://go.dev" />
      <IconCard icon={nodeIcon} alt="NodeJs" href="https://nodejs.org" />
      <IconCard icon={angularIcon} alt="Angular" href="https://angular.dev" />
      <IconCard icon={gitIcon} alt="Git" href="https://git-scm.com" />
    </div>
  );
}
