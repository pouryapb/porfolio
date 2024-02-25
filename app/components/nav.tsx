"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <ol>
      <li
        className={
          pathname === "/"
            ? "opacity-40 before:pr-1 before:content-['●']"
            : "transition-all duration-300 hover:translate-x-4 hover:opacity-40"
        }
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={
          pathname === "/skills"
            ? "opacity-40 before:pr-1 before:content-['●']"
            : "transition-all duration-300 hover:translate-x-4 hover:opacity-40"
        }
      >
        <Link href="/skills">Skills</Link>
      </li>
      <li
        className={
          pathname === "/projects"
            ? "opacity-40 before:pr-1 before:content-['●']"
            : "transition-all duration-300 hover:translate-x-4 hover:opacity-40"
        }
      >
        <Link href="/projects">Projects</Link>
      </li>
      <li
        className={
          pathname === "/contact"
            ? "opacity-40 before:pr-1 before:content-['●']"
            : "transition-all duration-300 hover:translate-x-4 hover:opacity-40"
        }
      >
        <Link href="/contact">Contact</Link>
      </li>
    </ol>
  );
}
