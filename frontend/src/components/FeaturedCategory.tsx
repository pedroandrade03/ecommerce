import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CategoryCard } from "./CategoryCard";

const mockCategories = [
  { title: "Cake & Milk", itemCount: 26, backgroundColor: "bg-green-50", imageSrc: "/categories/cat-13.png" },
  { title: "Organic Kiwi", itemCount: 37, backgroundColor: "bg-amber-50", imageSrc: "/categories/cat-12.png" },
  { title: "Peach", itemCount: 37, backgroundColor: "bg-yellow-50", imageSrc: "/categories/cat-11.png" },
  { title: "Red Apple", itemCount: 37, backgroundColor: "bg-red-50", imageSrc: "/categories/cat-9.png" },
  { title: "Cake & Milk", itemCount: 26, backgroundColor: "bg-green-50", imageSrc: "/categories/cat-13.png" },
  { title: "Organic Kiwi", itemCount: 37, backgroundColor: "bg-amber-50", imageSrc: "/categories/cat-12.png" },
  { title: "Peach", itemCount: 37, backgroundColor: "bg-yellow-50", imageSrc: "/categories/cat-11.png" },
  { title: "Red Apple", itemCount: 37, backgroundColor: "bg-red-50", imageSrc: "/categories/cat-9.png" },
  { title: "Organic Kiwi", itemCount: 37, backgroundColor: "bg-amber-50", imageSrc: "/categories/cat-12.png" },
  { title: "Peach", itemCount: 37, backgroundColor: "bg-yellow-50", imageSrc: "/categories/cat-11.png" },
  { title: "Peach", itemCount: 37, backgroundColor: "bg-yellow-50", imageSrc: "/categories/cat-11.png" },
];

export default function FeaturedCategory() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full flex content-start my-4">
        <p className="text-4xl font-medium">Categorias em Destaque</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {mockCategories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/8">
              <CategoryCard
                title={category.title}
                itemCount={category.itemCount}
                backgroundColor={category.backgroundColor}
                imageSrc={category.imageSrc}
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