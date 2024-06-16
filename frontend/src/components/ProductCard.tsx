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
import { useShoppingCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useShoppingCart();

  return (
    <Link href={`/produtos/${product.id}`}>
      <Card className="w-[260px] h-[460px]">
        <div className="h-[80%]">
          <CardHeader className="gap-4 pb-4 flex items-center">
            <div className="relative h-60 w-60">
              <Image
                src={product.images[0].image || "/logo.svg"}
                fill={true}
                objectFit="contain"
                alt={product.images[0].caption || "Image"}
              />
            </div>
            <div>
              <CardDescription className="text-gray-500 text-sm">
                {product.category}
              </CardDescription>
              <CardTitle className="text-2xl pt-0">{product.name}</CardTitle>
            </div>
          </CardHeader>
        </div>
        <CardContent className="flex flex-col gap-2 pb-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1">
              <StarRating rating={product.rating} />
              <p className="text-gray-500 text-xs mt-[1px]">
                ({product.rating})
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-green-500 font-bold text-lg">R${product.price}</p>
          <Link href="/cart">
            <Button
              className="bg-green-100"
              onClick={() => addToCart(product, 1)}
            >
              <p className="text-green-700 font-bold">Adicionar +</p>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </Link>
  );
}

type StarRatingProps = {
  rating: number;
};

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex flex-row gap-0.5">
      {[...Array(5)].map((_, index) => (
        <IconStarFilled
          key={index}
          size={16}
          className={cn(index < rating ? "text-yellow-500" : "text-gray-300")}
        />
      ))}
    </div>
  );
}
