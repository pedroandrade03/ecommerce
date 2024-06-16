export interface Product {
  id: string;
  name: string;
  images: {
    caption: string;
    image: string;
  }[];
  price: number;
  category: string;
  weight?: number;
  rating: number;
  description: string;
}
