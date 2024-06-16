import { StyledBreadcrumb } from "@/components/StyledBreadcrumb";
import { StarRating } from "@/components/ProductCard";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ProductCarousel from "@/components/ProductCarousel";
import { useEffect, useState } from "react";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import { Card, CardContent } from "@/components/ui/card";
import { ProductDescription } from "@/components/ProductDescription";
import Layout from "@/components/Layout";
import { Product } from "@/types/Product";
import { useShoppingCart } from "@/context/CartContext";
import Link from "next/link";
import api from "@/api";

export default function ProductDetail() {
  const router = useRouter();

  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const { addToCart } = useShoppingCart();

  const [productDetails, setProductDetails] = useState<Product>({} as Product);
  const [currentImage, setCurrentImage] = useState<string>("/logo.svg");

  const handleImageChange = (newImage: string) => {
    setCurrentImage(newImage);
  };

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const { data } = await api.get(`/products/${router.query.id}`);

        setProductDetails(data);
        setCurrentImage(data.images[0].image || "/logo.svg");
      } catch (error) {
        console.error(error);
      }
    };

    getProductDetails();
  }, [router]);

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
            <ProductCarousel
              images={productDetails.images}
              onChangeImage={handleImageChange}
            />
          </div>
          <div className="flex flex-col gap-6 w-1/2 items-start">
            <Badge>Em Estoque</Badge>
            <div>
              <b className="text-6xl">{productDetails.name}</b>
            </div>
            <div className="flex flex-row gap-1">
              <StarRating rating={productDetails.rating} />
              <p className="text-gray-500 text-xs mt-[1px]">
                ({productDetails.rating})
              </p>
            </div>
            <p className="text-green-500 font-bold text-3xl">
              R${productDetails.price}
            </p>
            {/* <p className="text-xl">{productDetails.description}</p> */}
            <div className="flex flex-row gap-2">
              <Input
                type="number"
                placeholder="1"
                className="w-14"
                value={quantityToAdd}
                onChange={(e) => setQuantityToAdd(Number(e.target.value))}
              ></Input>
              <Link href="/cart">
                <Button
                  onClick={() => addToCart(productDetails, quantityToAdd)}
                >
                  <IconShoppingCartPlus className="mr-2" /> Adicionar ao
                  carrinho
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inner p-8">
          <ProductDescription text={productDetails.description} />
        </div>
      </div>
    </Layout>
  );
}
