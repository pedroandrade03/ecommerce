import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CategoryCard } from "./CategoryCard";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/api";
import { Category } from "@/types/Category";

// const mockCategories = [
//   {
//     id: 1,
//     title: "Cosméticos",
//     itemCount: 2,
//     backgroundColor: "bg-green-50",
//     imageSrc: "/categories/cat-13.png",
//   },
//   {
//     id: 1,
//     title: "Dietas Especiais",
//     itemCount: 1,
//     backgroundColor: "bg-amber-50",
//     imageSrc: "/categories/cat-12.png",
//   },
//   {
//     id: 1,
//     title: "Ecológicos",
//     itemCount: 4,
//     backgroundColor: "bg-yellow-50",
//     imageSrc: "/categories/cat-11.png",
//   },
//   {
//     id: 1,
//     title: "Fitoterápicos",
//     itemCount: 2,
//     backgroundColor: "bg-red-50",
//     imageSrc: "/categories/cat-9.png",
//   },
//   {
//     id: 1,
//     title: "Mercearia",
//     itemCount: 3,
//     backgroundColor: "bg-green-50",
//     imageSrc: "/categories/cat-13.png",
//   },
//   {
//     id: 1,
//     title: "Veganos",
//     itemCount: 6,
//     backgroundColor: "bg-amber-50",
//     imageSrc: "/categories/cat-12.png",
//   },
// ];

export default function FeaturedCategory() {
  const [featuredCategories, setFeaturedCategories] = useState<Category[]>([]);

  useEffect(() => {
    const getFeaturedCategories = async () => {
      try {
        const { data } = await api.get("/categories/featured");

        setFeaturedCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFeaturedCategories();
  }, []);

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
          {featuredCategories.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/8">
              <Link href={`categorias/${category.id}`}>
                <CategoryCard
                  title={category.title}
                  itemCount={category.itemCount}
                  backgroundColor={category.background_color}
                  imageSrc={category.image || "logo.svg"}
                  className="min-h-full flex flex-col"
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
