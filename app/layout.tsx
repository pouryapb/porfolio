import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Background from "./components/background";
import Presentaion from "./components/presentation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pourya Pourbagheri",
  description: "Pourya Pourbagheris portfolio page",
};

export const viewport: Viewport = {
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Background />
        <Header />
        <Presentaion>{children}</Presentaion>
      </body>
    </html>
  );
}
