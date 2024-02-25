import Nav from "./nav";

export default function Header() {
  return (
    <div
      id="header"
      className="absolute left-10 top-24 select-none sm:left-16 sm:top-36 dark:text-white"
    >
      <h1 className="font-sans text-3xl">Pourya Pourbagheri</h1>
      <p className="text-xs">Front-End & Software Developer</p>
      <div className="mt-10">
        <Nav />
      </div>
    </div>
  );
}
