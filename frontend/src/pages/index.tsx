import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import FeaturedCategory from "@/components/FeaturedCategory";
import Footer from "@/components/Footer";
import HomeSlider from "@/components/HomeSlider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col px-4 md:px-8 lg:px-36 ${inter.className}`}>
      <NavBar />
      <HomeSlider />
        <FeaturedCategory />
      <Footer />
    </main>
  );
}

