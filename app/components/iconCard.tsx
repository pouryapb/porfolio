import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

export default function IconCard({
  icon,
  alt,
  href,
}: {
  icon: string | StaticImport;
  alt: string;
  href: string;
}) {
  return (
    <a
      target="_blank"
      href={href}
      className="flex h-24 w-28 flex-col items-center justify-center rounded-md bg-gray-800 bg-opacity-60 transition-all duration-500 hover:cursor-pointer hover:bg-opacity-100"
    >
      <Image width={50} src={icon} alt={alt} />
      <p className="font-bold">{alt}</p>
    </a>
  );
}
