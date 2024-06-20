import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface RelatedProductsCard {
  name: string;
  image: string;
  description: string;
  category: string;
  weight: number;
  price: number;
  rating: number;
  className?: string;
}

export function RelatedProductsCard({
  name,
  image,
  description,
  category,
  weight,
  price,
  rating,
}: RelatedProductsCard) {
  return (
    <Card className="w-[250px]">
      <CardHeader className="gap-4 pb-4 flex items-center">
        <div className="relative h-[150px] w-[150px]">
          <Image src={image} fill={true} alt={`Picture of ${name}`} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pb-4">
        <div>
          <CardDescription className="text-gray-500 text-sm">
            {category}
          </CardDescription>
          <CardTitle className="text-xl pt-0">{name}</CardTitle>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <StarRating rating={rating} />
            <p className="text-gray-500 text-xs mt-[1px]">({rating})</p>
          </div>
          <p className="text-gray-500 text-xs">{weight} gramas</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-green-500 font-bold text-lg">R${price}</p>
        <Button className="bg-green-100">
          <p className="text-green-700 font-bold">Adicionar +</p>
        </Button>
      </CardFooter>
    </Card>
  );
}

type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex flex-row gap-0.5">
      {[...Array(5)].map((_, index) => (
        <>
          <IconStarFilled
            key={index}
            size={16}
            className={cn(index < rating ? "text-yellow-500" : "text-gray-300")}
          />
        </>
      ))}
    </div>
  );
}
