import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CategoryCard } from "./CategoryCard";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";

const mockProducts = [
  { name: "Queijo", image: "/queijo.jpg", description: "Queijo de Minas", category: "Laticínios", weight: 500, price: 9.99, rating: 4, },
  { name: "Queijo", image: "/queijo.jpg", description: "Queijo de Minas", category: "Laticínios", weight: 500, price: 9.99, rating: 4, },
  { name: "Queijo", image: "/queijo.jpg", description: "Queijo de Minas", category: "Laticínios", weight: 500, price: 9.99, rating: 4, },
  { name: "Queijo", image: "/queijo.jpg", description: "Queijo de Minas", category: "Laticínios", weight: 500, price: 9.99, rating: 4, },
  { name: "Queijo", image: "/queijo.jpg", description: "Queijo de Minas", category: "Laticínios", weight: 500, price: 9.99, rating: 4, },

];

export default function RecommendedProducts() {
  return (
    <div className="w-[1600px] flex flex-col justify-center items-center">
      <div className="w-full flex content-start my-4">
        <p className="text-4xl font-medium">Recomendações para você</p>
      </div>
      
      <div className="flex gap-12">
        <div className="relative flex flex-col justify-between h-[512px] w-[376px] rounded-3xl p-10">
            <p className="z-10 text-gray-800 font-bold text-4xl ">Produtos recomendados para você</p>
            <Button className="flex gap-4 relative z-10 bg-yellow-500 hover:bg-yellow-600 w-36">
              <p className="font-bold">Compre agora</p>
            </Button>
            <Image
                src={'/background-leaf.png'}
                fill={true}
                alt="Picture of the author"
                className="object-cover"
            />
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[1200px]"
        >
          <CarouselContent>
            {mockProducts.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/1">
                <ProductCard product={{ name: product.name, image: product.image, category: "", weight: 0, price: 0, rating: 0 }} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}