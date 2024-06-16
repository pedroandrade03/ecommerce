import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface ProductCarouselProps {
  images: {
    caption: string;
    image: string;
  }[];
  onChangeImage: (newImage: string) => void;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  images,
  onChangeImage,
}) => {
  const changeImage = (newImage: string) => {
    onChangeImage(newImage);
  };

  return (
    <>
      {images && images.length > 0 ? (
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-10/12 max-w-sm"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent
                      onClick={() => changeImage(image.image)}
                      className="flex aspect-square items-center justify-center cursor-pointer p-3"
                    >
                      <div className="relative h-24 w-40">
                        <Image
                          src={image.image}
                          fill={true}
                          objectFit="contain"
                          alt="Image"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : null}
    </>
  );
};

export default ProductCarousel;
