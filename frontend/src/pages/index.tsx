import FeaturedCategory from "@/components/FeaturedCategory";
import RecommendedProducts from "@/components/RecommendedProducts";
import Hero from "@/components/Hero";
import Layout from "@/components/Layout";
import ProductGrid from "@/components/ProductGrid";
import api from "@/api";
import { Product } from "@/types/Product";
import { useState, useEffect } from "react";

export default function Home() {
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [isLoadingGrid, setIsLoadingGrid] = useState(true);

  const [homeProducts, setHomeProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getHomeProducts = async () => {
      try {
        setIsLoadingGrid(true);
        const { data } = await api.get("/products");

        console.log("resultados", data.results);

        setHomeProducts(data.results);
      } catch (error) {
        console.error(error);
      }

      setIsLoadingGrid(false);
    };

    getHomeProducts();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center gap-8">
        <Hero />
        <FeaturedCategory />
        {!isLoadingGrid ? (
          <div className="w-full flex flex-col">
            <div className="w-full flex content-start my-4">
              <p className="text-4xl font-medium">Produtos em destaque</p>
            </div>
            <ProductGrid
              products={homeProducts}
              productsPerPage={productsPerPage}
            />
          </div>
        ) : null}
        <RecommendedProducts />
      </div>
    </Layout>
  );
}
