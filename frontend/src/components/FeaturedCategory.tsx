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

const colors = [
  "bg-green-50",
  "bg-yellow-50",
  "bg-blue-50",
  "bg-purple-50",
  "bg-red-50",
];

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
                  backgroundColor={colors[index % colors.length]}
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
