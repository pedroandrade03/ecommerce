import { ReactNode } from "react";
import { Inter } from "next/font/google";

import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main
        className={`flex-1 min-h-screen px-4 lg:px-32 ${inter.className}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
