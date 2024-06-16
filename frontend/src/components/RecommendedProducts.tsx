import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import api from "@/api";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";

export default function RecommendedProducts() {
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getRecommendedProducts = async () => {
      try {
        const { data } = await api.get("/products/recommended");

        setRecommendedProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getRecommendedProducts();
  }, []);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex content-start my-4">
        <p className="text-4xl font-medium">Recomendações para você</p>
      </div>

      <div className="w-full flex gap-16">
        <div className="rounded-3xl relative flex flex-col justify-between w-1/4 p-6">
          <p className="z-10 text-gray-800 font-bold text-4xl">
            Produtos recomendados para você
          </p>
          <Button className="flex gap-4 relative z-10 bg-yellow-500 hover:bg-yellow-600 w-36">
            <p className="font-bold">Compre agora</p>
          </Button>
          <Image
            src={"/background-leaf.png"}
            fill={true}
            alt="Picture of the author"
            className="object-cover"
          />
        </div>
        <div className="w-3/4">
          <Carousel
            opts={{
              align: "center",
            }}
            className=""
          >
            <CarouselContent>
              {recommendedProducts.map((product, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <ProductCard product={product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
