import Link from "next/link";

export default function Header() {
  return (
    <div
      id="header"
      className="absolute left-10 top-24 sm:left-16 sm:top-36 dark:text-white"
    >
      <h1 className="font-sans text-3xl">Pourya Pourbagheri</h1>
      <p className="text-xs">Front-End & Software Developer</p>
      <div className="mt-10">
        <ol>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/info">Info</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ol>
      </div>
    </div>
  );
}
