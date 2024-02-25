import GithubLink from "../components/githubLink";

export default function Projects() {
  return (
    <div className="flex flex-col">
      <p className="mb-5 w-80 text-justify font-sans font-semibold">
        I gained valuable knowledge and skills through these projects, even
        though they might appear modest.
      </p>
      <GithubLink
        projectName="definitioner-bot"
        title="Telegram Bot (Definitioner)"
      />
      <GithubLink
        projectName="social-credit"
        title="Telegram Bot (Social Credits)"
      />
      <GithubLink
        projectName="faceact"
        title="FaceAct (My first experience with React)"
      />
      <GithubLink projectName="dooz" title="Dooz (Game made with java)" />
      <GithubLink
        projectName="bomberman"
        title="Bomberman (Game made with java)"
      />
    </div>
  );
}
