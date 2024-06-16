import { Inter } from "next/font/google";
import FeaturedCategory from "@/components/FeaturedCategory";
import RecommendedProducts from "@/components/RecommendedProducts";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-20">
        <Hero />
        <FeaturedCategory />
        <RecommendedProducts />
      </div>
    </Layout>
  );
}