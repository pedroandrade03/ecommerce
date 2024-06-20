import { RelatedProductsCard } from "./RelatedProductsCard";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const mockedProducts = [
  {
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/RelatedProducts-1.svg",
    description: "Pizza",
    category: "Hodo Foods",
    weight: 500,
    price: 2.51,
    rating: 4,
  },
  {
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/RelatedProducts-2.svg",
    description: "Pizza",
    category: "Hodo Foods",
    weight: 500,
    price: 2.51,
    rating: 4,
  },
  {
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/RelatedProducts-3.svg",
    description: "Pizza",
    category: "Hodo Foods",
    weight: 500,
    price: 2.51,
    rating: 4,
  },
  {
    name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
    image: "/RelatedProducts-4.svg",
    description: "Pizza",
    category: "Hodo Foods",
    weight: 500,
    price: 2.51,
    rating: 4,
  },
];

export default function RelatedProducts() {
  return (
    //---------------------------CARROSSEL-------------------------------------------
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex content-start my-4">
        <p className="text-3xl font-medium">Produtos Relacionados</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {mockedProducts.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
              <RelatedProductsCard
                name={category.name}
                image={category.image}
                description={category.description}
                category={category.category}
                weight={category.weight}
                price={category.price}
                rating={category.rating}
                className="min-h-full flex flex-col"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
