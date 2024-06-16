import * as React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

interface CategoryCardProps {
  title: string;
  itemCount: number;
  backgroundColor: string;
  imageSrc: string;
  className?: string;
}

export function CategoryCard({
  title,
  itemCount,
  backgroundColor,
  imageSrc,
  className,
}: CategoryCardProps) {
  useEffect(() => {
    console.log("cor", backgroundColor);
  }, [backgroundColor]);

  return (
    <Card
      className={cn(
        "hover:border bg-hover:border-green-500 hover:text-green-500",
        backgroundColor,
        className
      )}
    >
      <CardContent className="flex justify-center items-center p-5">
        <div className="transform transition-transform duration-300 hover:scale-110">
          <Image
            src={imageSrc}
            width={64}
            height={64}
            alt="Ícone de categoria"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <p className="font-medium text-center text-nowrap">{title}</p>
        <p className="font-light text-gray-900 text-nowrap">
          {itemCount} Items
        </p>
      </CardFooter>
    </Card>
  );
}
