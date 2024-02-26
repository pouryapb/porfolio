import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Background from "./components/background";
import Header from "./components/header";
import Presentaion from "./components/presentation";
import "./globals.css";

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
        <Analytics />
        <SpeedInsights />
        <Background />
        <Header />
        <Presentaion>{children}</Presentaion>
      </body>
    </html>
  );
}
