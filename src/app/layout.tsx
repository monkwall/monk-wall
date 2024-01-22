// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Monk Wall",
//   description: "We Illustrate Your Vision and bring your ideas to life.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} light dark:dark text-black dark:text-sky-50`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
