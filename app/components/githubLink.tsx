export default function GithubLink({
  projectName,
  title,
}: {
  projectName: string;
  title: string;
}) {
  return (
    <a
      className="text-xl font-thin transition-colors dark:hover:text-slate-400"
      href={`https://github.com/pouryapb/${projectName}`}
      target="_blank"
    >
      {title}
    </a>
  );
}
