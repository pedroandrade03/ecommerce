import { Inter } from "next/font/google";
import FeaturedCategory from "@/components/FeaturedCategory";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <Hero />
        <FeaturedCategory />
      </div>
    </Layout>
  );
}
