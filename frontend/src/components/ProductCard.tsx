import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/Product";
import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-[350px]">
      <CardHeader className="gap-4 pb-4 flex items-center">
        <div className="relative h-60 w-60">
          <Image
            src={product.image}
            fill={true}
            objectFit="contain"
            alt="Picture of the author"
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 pb-4">
        <div>
          <CardDescription className="text-gray-500 text-sm">
            {product.category}
          </CardDescription>
          <CardTitle className="text-2xl pt-0">{product.name}</CardTitle>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1">
            <StarRating rating={product.rating} />
            <p className="text-gray-500 text-xs mt-[1px]">({product.rating})</p>
          </div>
          <p className="text-gray-500 text-xs">{product.weight} gramas</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-green-500 font-bold text-lg">R${product.price}</p>
        <Link href={`/produtos/${product.id}`}>
          <Button className="bg-green-100">
            <p className="text-green-700 font-bold">Adicionar +</p>
          </Button>
        </Link>
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
