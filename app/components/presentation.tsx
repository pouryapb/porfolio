import { ReactNode } from "react";

export default function Presentaion({ children }: { children: ReactNode }) {
  return (
    <div
      id="presentation"
      className="absolute bottom-16 left-0 font-sans sm:flex sm:w-full sm:flex-row sm:justify-end dark:text-white"
    >
      {children}
    </div>
  );
}
