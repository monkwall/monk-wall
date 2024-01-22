import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Seo from "./components/seo";

const inter = Inter({ subsets: ["latin"] });

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
        <Seo />
        <Header />
        {children}
      </body>
    </html>
  );
}
