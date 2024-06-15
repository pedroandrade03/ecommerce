import { StyledBreadcrumb } from "@/components/StyledBreadcrumb";
import { StarRating } from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCarousel from "@/components/ProductCarousel";
import { useState } from "react";
import { IconShoppingCart, IconShoppingCartPlus } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductDescription } from "@/components/ProductDescription";
import Layout from "@/components/Layout";

const product = {
  name: "Queijo Ralado",
  images: ["/queijo.jpg", "/next.svg", "/favicon.ico", "/vercel.svg"],
  introduction:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  category: "Laticínios",
  price: 9.99,
  rating: 4,
  quantity: 10,
};

export default function ProductDetail() {
  const [currentImage, setCurrentImage] = useState<string>(product.images[0]);

  const handleImageChange = (newImage: string) => {
    setCurrentImage(newImage);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <StyledBreadcrumb />
        <div className="flex flex-row justify-around items-start py-10">
          <div className="flex flex-col items-center justify-between">
            <Card className="p-6 mb-8">
              <CardContent className="p-0">
                <div className="relative h-96 w-80">
                  <Image
                    src={currentImage}
                    fill={true}
                    objectFit="contain"
                    alt="Imagem do produto"
                  />
                </div>
              </CardContent>
            </Card>
            <ProductCarousel onChangeImage={handleImageChange} />
          </div>
          <div className="flex flex-col gap-6 w-1/2 items-start">
            <Badge>Em Estoque</Badge>
            <div>
              <b className="text-6xl">{product.name}</b>
            </div>
            <div className="flex flex-row gap-1">
              <StarRating rating={product.rating} />
              <p className="text-gray-500 text-xs mt-[1px]">
                ({product.rating})
              </p>
            </div>
            <p className="text-green-500 font-bold text-3xl">
              R${product.price}
            </p>
            <p className="text-xl">{product.introduction}</p>
            <div className="flex flex-row gap-2">
              <Input type="number" placeholder="1" className="w-14"></Input>
              <Button>
                <IconShoppingCart className="mr-2" /> Comprar
              </Button>
              <Button>
                <IconShoppingCartPlus />
              </Button>
            </div>
          </div>
        </div>
        <div className="shadow-inner p-8">
          <ProductDescription />
        </div>
      </div>
    </Layout>
  );
}
